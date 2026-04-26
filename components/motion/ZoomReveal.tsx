'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  initialScale?: number;
  finalScale?: number;
};

/**
 * ZoomReveal — element scales up from 0.8 → 1 as user scrolls through it.
 * Creates the "emerging from the void" cinematic feel.
 */
export default function ZoomReveal({
  children,
  className,
  initialScale = 0.85,
  finalScale = 1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: initialScale, opacity: 0.4 },
        {
          scale: finalScale,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 30%',
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [initialScale, finalScale]);

  return (
    <div ref={ref} className={cn(className)} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
}
