'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

type Props = {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  stagger?: number;
  duration?: number;
  trigger?: 'scroll' | 'mount';
};

/**
 * SplitText — splits a string into word/char spans and animates
 * each character in with a stagger on scroll or mount.
 */
export default function SplitText({
  children,
  className,
  as: Tag = 'h2',
  delay = 0,
  stagger = 0.018,
  duration = 0.9,
  trigger = 'scroll',
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll('.char');
    const ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        chars,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: 'expo.out',
          scrollTrigger:
            trigger === 'scroll'
              ? {
                  trigger: el,
                  start: 'top 80%',
                  toggleActions: 'play none none none',
                }
              : undefined,
        },
      );
      return () => {
        anim.kill();
      };
    }, el);

    return () => ctx.revert();
  }, [children, delay, stagger, duration, trigger]);

  // Split content into words & characters
  const words = children.split(' ');

  const Component = Tag as any;
  return (
    <Component ref={ref} className={cn(className)} aria-label={children}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden" aria-hidden="true">
          <span className="inline-block">
            {Array.from(word).map((ch, ci) => (
              <span key={ci} className="char inline-block">
                {ch}
              </span>
            ))}
          </span>
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
}
