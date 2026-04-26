'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

type Props = {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

/**
 * AnimatedCounter — counts from X to Y when scrolled into view.
 * Used for the stats section for that "number rolls up" drama.
 */
export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  className,
  suffix = '',
  prefix = '',
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animation if reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }

    const obj = { n: from };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: to,
        duration,
        ease: 'power2.out',
        onUpdate: () => setValue(obj.n),
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
