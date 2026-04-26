'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  delay?: number;
};

/**
 * MaskReveal — child is revealed behind a color panel that slides away.
 * Classic curtain-pull effect, used by magazine editorial sites.
 */
export default function MaskReveal({
  children,
  className,
  direction = 'left',
  duration = 1.2,
  delay = 0,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const mask = maskRef.current;
    if (!wrap || !mask) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      mask.style.display = 'none';
      return;
    }

    const getTransform = () => {
      switch (direction) {
        case 'left': return { x: '-101%' };
        case 'right': return { x: '101%' };
        case 'up': return { y: '-101%' };
        case 'down': return { y: '101%' };
      }
    };

    const ctx = gsap.context(() => {
      gsap.to(mask, {
        ...getTransform(),
        duration,
        delay,
        ease: 'expo.inOut',
        scrollTrigger: {
          trigger: wrap,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [direction, duration, delay]);

  return (
    <div ref={wrapRef} className={cn('relative overflow-hidden', className)}>
      {children}
      <div
        ref={maskRef}
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-violet-700 via-magenta to-violet-900"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
