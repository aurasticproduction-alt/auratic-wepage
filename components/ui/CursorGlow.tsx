'use client';

import { useEffect, useRef, useState } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
};

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState<'link' | 'text' | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const lastEmit = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(mq.matches && !reduced.matches);
    update();
    mq.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      mq.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const orb = orbRef.current;
    if (!canvas || !orb) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      // Emit particles at a throttled rate
      const now = Date.now();
      if (now - lastEmit.current > 25) {
        lastEmit.current = now;
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 8,
            y: e.clientY + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8 - 0.3,
            life: 0,
            maxLife: 60 + Math.random() * 40,
            size: 2 + Math.random() * 3,
            hue: 270 + Math.random() * 40, // violet to magenta range
          });
        }
        // Cap particles so we don't leak memory on fast movement
        if (particlesRef.current.length > 200) {
          particlesRef.current.splice(0, particlesRef.current.length - 200);
        }
      }

      // Detect hoverable elements
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, [data-cursor-hover]')) {
        setHovering('link');
      } else if (target.closest('h1, h2, h3, p, span')) {
        setHovering('text');
      } else {
        setHovering(null);
      }
    };

    const onLeave = () => setHovering(null);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    let rafId = 0;
    const tick = () => {
      // Smooth orb follow with easing
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.18;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.18;

      if (orb) {
        orb.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
      }

      // Render particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.01; // slight upward drift/float
        p.life++;

        const lifeRatio = 1 - p.life / p.maxLife;
        if (lifeRatio <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = lifeRatio * 0.7;
        const size = p.size * lifeRatio;

        // Glow layer
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${alpha * 0.15})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 80%, ${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Particle trail canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997] mix-blend-screen"
        aria-hidden
      />

      {/* Main orb — changes size/shape based on context */}
      <div
        ref={orbRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: hovering === 'link' ? 56 : hovering === 'text' ? 8 : 14,
          height: hovering === 'link' ? 56 : hovering === 'text' ? 40 : 14,
          backgroundColor: hovering === 'link' ? 'rgba(232,121,249,0.15)' : 'transparent',
          border: hovering === 'link' ? '1.5px solid rgba(232,121,249,0.9)' : '1.5px solid rgba(232,121,249,0.9)',
          boxShadow: '0 0 20px rgba(232,121,249,0.6), 0 0 40px rgba(139,92,246,0.4)',
          borderRadius: hovering === 'text' ? '2px' : '999px',
          mixBlendMode: 'screen',
        }}
        aria-hidden
      />
    </>
  );
}
