'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, MeshReflectorMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

/**
 * Quality tier — controls scene complexity, reflection resolution,
 * particle count, post-FX intensity.
 *   low    → mobile / low-power (30-45 fps target)
 *   medium → tablet / mid-range desktop
 *   high   → desktop with dedicated GPU / 4K / TV
 */
export type Quality = 'low' | 'medium' | 'high';

/* ---------------------------------------------------------------
   Camera rig — driven by an external scroll progress ref (0 → 1)
   --------------------------------------------------------------- */
function CameraRig({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  useFrame((state) => {
    const p = progressRef.current;

    // Choreographed camera path through 4 beats.
    //   0.00  — wide establishing
    //   0.33  — push in on stage
    //   0.66  — orbit right
    //   1.00  — rise up high
    const x = THREE.MathUtils.lerp(
      0,
      p < 0.33 ? 0 : p < 0.66 ? 3.5 * ((p - 0.33) / 0.33) : 3.5 * (1 - (p - 0.66) / 0.34),
      1,
    );
    const y = 2 + p * 3;
    const z = 10 - p * 4;

    // Subtle mouse parallax
    const mx = state.pointer.x * 0.4;
    const my = state.pointer.y * 0.2;

    state.camera.position.lerp(new THREE.Vector3(x + mx, y + my, z), 0.06);
    state.camera.lookAt(0, 1.5, 0);
  });
  return null;
}

/* ---------------------------------------------------------------
   A single spotlight — rotates in a slow sweep
   --------------------------------------------------------------- */
function MovingSpot({
  position,
  color,
  phase = 0,
  speed = 0.5,
  intensity = 40,
}: {
  position: [number, number, number];
  color: string;
  phase?: number;
  speed?: number;
  intensity?: number;
}) {
  const spotRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + phase;
    if (targetRef.current) {
      targetRef.current.position.x = Math.sin(t) * 4;
      targetRef.current.position.z = Math.cos(t * 0.7) * 2 - 1;
      targetRef.current.position.y = 0;
    }
    if (spotRef.current) {
      spotRef.current.intensity = intensity + Math.sin(t * 2) * 8;
    }
  });

  return (
    <>
      <spotLight
        ref={spotRef}
        position={position}
        angle={0.35}
        penumbra={0.7}
        decay={2}
        distance={18}
        intensity={intensity}
        color={color}
        castShadow
      />
      <object3D ref={targetRef} />
      {/* Attach target */}
      <SpotTargetBind spotRef={spotRef} targetRef={targetRef} />
      {/* Visible light fixture */}
      <mesh position={position}>
        <cylinderGeometry args={[0.18, 0.12, 0.5, 16]} />
        <meshStandardMaterial color="#1a1530" metalness={0.8} roughness={0.3} emissive={color} emissiveIntensity={0.6} />
      </mesh>
    </>
  );
}

function SpotTargetBind({
  spotRef,
  targetRef,
}: {
  spotRef: React.RefObject<THREE.SpotLight>;
  targetRef: React.RefObject<THREE.Object3D>;
}) {
  useFrame(() => {
    if (spotRef.current && targetRef.current) {
      spotRef.current.target = targetRef.current;
    }
  });
  return null;
}

/* ---------------------------------------------------------------
   Stage truss — cylindrical steel frame
   --------------------------------------------------------------- */
function Truss({ position, height = 6 }: { position: [number, number, number]; height?: number }) {
  const segments = Math.floor(height / 0.4);

  return (
    <group position={position}>
      {/* Four vertical rods */}
      {[[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]].map(([x, z], i) => (
        <mesh key={i} position={[x, height / 2, z]}>
          <cylinderGeometry args={[0.04, 0.04, height, 8]} />
          <meshStandardMaterial color="#1a1530" metalness={0.9} roughness={0.3} />
        </mesh>
      ))}
      {/* Diagonal cross-bracing */}
      {Array.from({ length: segments }).map((_, i) => {
        const y = (i + 0.5) * (height / segments);
        return (
          <group key={i}>
            <mesh position={[0, y, -0.25]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.7, 6]} />
              <meshStandardMaterial color="#1a1530" metalness={0.9} roughness={0.4} />
            </mesh>
            <mesh position={[0, y, 0.25]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.7, 6]} />
              <meshStandardMaterial color="#1a1530" metalness={0.9} roughness={0.4} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/* ---------------------------------------------------------------
   LED wall with animated shader
   --------------------------------------------------------------- */
function LEDWall() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color('#8b5cf6') },
      uColorB: { value: new THREE.Color('#e879f9') },
    }),
    [],
  );

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 3, -4]} receiveShadow>
      <planeGeometry args={[12, 5, 1, 1]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;

          // Classic 2D noise
          float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), u.x),
                       mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x), u.y);
          }

          void main() {
            vec2 uv = vUv;
            // Animated flowing noise bands
            float n = noise(vec2(uv.x * 3.0 + uTime * 0.25, uv.y * 2.0 - uTime * 0.2));
            float n2 = noise(vec2(uv.x * 8.0 - uTime * 0.5, uv.y * 5.0 + uTime * 0.3));
            float m = smoothstep(0.3, 0.9, n + n2 * 0.3);

            // Scanline effect for LED feel
            float scan = sin(uv.y * 300.0) * 0.04 + 0.96;

            // Pixel grid for LED texture
            vec2 grid = fract(uv * vec2(120.0, 50.0));
            float cell = smoothstep(0.85, 1.0, grid.x) + smoothstep(0.85, 1.0, grid.y);
            float dim = 1.0 - cell * 0.5;

            vec3 col = mix(uColorA, uColorB, m) * scan * dim;

            // Vignette inside panel
            float vig = smoothstep(1.2, 0.4, length(uv - 0.5));
            col *= vig * 0.8;

            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  );
}

/* ---------------------------------------------------------------
   Reflective stage floor — reflection resolution scales with device
   --------------------------------------------------------------- */
function Stage({ quality }: { quality: Quality }) {
  const reflectionRes = quality === 'high' ? 1024 : quality === 'medium' ? 512 : 256;
  const cylinderSegs = quality === 'low' ? 32 : 64;
  const torusSegs = quality === 'low' ? 32 : 64;

  return (
    <group>
      {/* Circular stage riser */}
      <mesh position={[0, 0.15, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[2.2, 2.4, 0.3, cylinderSegs]} />
        <meshStandardMaterial color="#0a0514" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Rim glow */}
      <mesh position={[0, 0.31, 0]}>
        <torusGeometry args={[2.2, 0.03, 16, torusSegs]} />
        <meshBasicMaterial color="#e879f9" toneMapped={false} />
      </mesh>

      {/* Reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={reflectionRes}
          mixBlur={1}
          mixStrength={40}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#07030d"
          metalness={0.5}
          mirror={0.4}
        />
      </mesh>
    </group>
  );
}

/* ---------------------------------------------------------------
   The floating Aurastic mark, suspended in the lighting
   --------------------------------------------------------------- */
function HoverMark() {
  const arrowShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0.4);
    s.lineTo(-0.3, -0.1);
    s.lineTo(-0.1, -0.1);
    s.lineTo(-0.1, -0.4);
    s.lineTo(0.1, -0.4);
    s.lineTo(0.1, -0.1);
    s.lineTo(0.3, -0.1);
    s.closePath();
    return s;
  }, []);

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6} floatingRange={[0, 0.3]}>
      <group position={[0, 2.2, 0]}>
        {/* Diamond frame rotated 45° */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1.3, 1.3, 0.1]} />
          <meshStandardMaterial
            color="#2b1065"
            metalness={0.7}
            roughness={0.2}
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Bold play-arrow — the Aurastic mark */}
        <mesh>
          <shapeGeometry args={[arrowShape]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ddd6fe"
            emissiveIntensity={0.8}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ---------------------------------------------------------------
   The scene root — ADAPTIVE:
   - Quality ('low' | 'medium' | 'high') controls geometry, reflection res,
     particle count, shadows, post-processing.
   - Canvas DPR, antialias, and power preference adapt to device capability.
   --------------------------------------------------------------- */
export default function HeroScene({
  progressRef,
  quality = 'high',
}: {
  progressRef: React.MutableRefObject<number>;
  quality?: Quality;
}) {
  // Adaptive settings
  const dpr: [number, number] =
    quality === 'high' ? [1, 2] : quality === 'medium' ? [1, 1.5] : [0.75, 1];
  const enableShadows = quality !== 'low';
  const sparkleMain = quality === 'high' ? 80 : quality === 'medium' ? 40 : 16;
  const sparkleAccent = quality === 'high' ? 30 : quality === 'medium' ? 15 : 6;
  const multisampling = quality === 'high' ? 4 : quality === 'medium' ? 2 : 0;
  const showPostFX = quality !== 'low';
  const bloomIntensity = quality === 'high' ? 1.4 : 1.0;

  // Spotlight intensity & count — drop 2 lights on 'low' for perf
  const spotlights =
    quality === 'low'
      ? [
          { pos: [-4, 7, 2] as [number, number, number], color: '#c4b5fd', phase: 0, speed: 0.45, intensity: 45 },
          { pos: [4, 7, 2] as [number, number, number], color: '#e879f9', phase: Math.PI / 2, speed: 0.5, intensity: 45 },
        ]
      : [
          { pos: [-4, 7, 2] as [number, number, number], color: '#c4b5fd', phase: 0, speed: 0.45, intensity: 50 },
          { pos: [4, 7, 2] as [number, number, number], color: '#e879f9', phase: Math.PI / 2, speed: 0.5, intensity: 50 },
          { pos: [-2.5, 7, -1] as [number, number, number], color: '#a78bfa', phase: Math.PI, speed: 0.35, intensity: 40 },
          { pos: [2.5, 7, -1] as [number, number, number], color: '#8b5cf6', phase: Math.PI * 1.5, speed: 0.4, intensity: 40 },
        ];

  return (
    <Canvas
      shadows={enableShadows}
      dpr={dpr}
      gl={{
        antialias: quality !== 'low',
        powerPreference: quality === 'low' ? 'low-power' : 'high-performance',
        alpha: false,
        stencil: false,
      }}
      camera={{ position: [0, 2, 10], fov: 38 }}
      // Pause rendering when scrolled past — big perf win
      frameloop="always"
    >
      <color attach="background" args={['#050209']} />
      <fog attach="fog" args={['#050209', 8, 28]} />

      <Suspense fallback={null}>
        <CameraRig progressRef={progressRef} />

        {/* Key ambient fill */}
        <ambientLight intensity={0.15} color="#b794ff" />
        <hemisphereLight intensity={0.2} color="#c4b5fd" groundColor="#0a0514" />

        {/* Moving concert spotlights */}
        {spotlights.map((s, i) => (
          <MovingSpot
            key={i}
            position={s.pos}
            color={s.color}
            phase={s.phase}
            speed={s.speed}
            intensity={s.intensity}
          />
        ))}

        {/* Back uplight for rim on LED wall */}
        <pointLight position={[0, 1, -3]} intensity={8} color="#e879f9" distance={6} />

        {/* Scene content */}
        <Stage quality={quality} />
        <LEDWall />
        <Truss position={[-5, 0, 1]} height={7} />
        <Truss position={[5, 0, 1]} height={7} />

        {/* Overhead truss beam connecting the towers */}
        <mesh position={[0, 6.8, 1]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 10, 8]} />
          <meshStandardMaterial color="#1a1530" metalness={0.9} roughness={0.3} />
        </mesh>

        <HoverMark />

        {/* Atmosphere — haze / sparkles */}
        <Sparkles count={sparkleMain} scale={[14, 8, 8]} size={2} speed={0.3} opacity={0.6} color="#c4b5fd" />
        <Sparkles count={sparkleAccent} scale={[10, 4, 4]} size={4} speed={0.15} opacity={0.3} color="#e879f9" />

        <Environment preset="night" />

        {/* Post-processing — the cinematic polish. Disabled on low-end for perf. */}
        {showPostFX && (
          <EffectComposer multisampling={multisampling}>
            <Bloom intensity={bloomIntensity} luminanceThreshold={0.35} luminanceSmoothing={0.9} mipmapBlur radius={0.9} />
            <ChromaticAberration
              offset={new THREE.Vector2(0.0006, 0.0008)}
              blendFunction={BlendFunction.NORMAL}
              radialModulation={false}
              modulationOffset={0}
            />
            <Vignette eskil={false} offset={0.2} darkness={0.8} />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  );
}
