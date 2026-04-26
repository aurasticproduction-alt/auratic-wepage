'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Magnetic — element is "pulled" toward cursor on hover.
 * Smooth springy feel. Only active on pointer-fine devices.
 */
export default function Magnetic({ children, className, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Only enable on mouse devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      gsap.to(el, { x, y, duration: 0.6, ease: 'power3.out' });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
