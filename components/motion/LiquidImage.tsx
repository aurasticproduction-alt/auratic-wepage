'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

/**
 * LiquidImage — image warps toward the cursor on hover.
 * Creates a tilt + scale + subtle distortion effect that feels
 * like the image is liquid/alive. Peak Awwwards vibe.
 */
export default function LiquidImage({ src, alt, className = '', sizes }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    // Only enable on pointer-fine devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Warp via 3D rotation + scale + skew
      gsap.to(inner, {
        rotationY: x * 15,
        rotationX: -y * 15,
        scale: 1.08,
        skewX: x * 2,
        skewY: y * 1.2,
        duration: 0.6,
        ease: 'power3.out',
        transformPerspective: 1000,
      });
    };

    const onLeave = () => {
      gsap.to(inner, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);
    return () => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`relative ${className}`}
      style={{ perspective: 1200 }}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
