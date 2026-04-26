'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'rotate' | 'zoom';

type Props = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  stagger?: boolean;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  as: Tag = 'div',
  delay = 0,
  duration = 1.1,
  direction = 'up',
  distance = 50,
  stagger = false,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    // Initial state based on direction
    const from: gsap.TweenVars = { opacity: 0 };
    switch (direction) {
      case 'up':    from.y = distance; break;
      case 'down':  from.y = -distance; break;
      case 'left':  from.x = distance; break;
      case 'right': from.x = -distance; break;
      case 'rotate': from.rotation = 6; from.y = distance; break;
      case 'zoom':  from.scale = 0.85; break;
      case 'fade':  break;
    }

    const to: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration,
      delay,
      ease: 'expo.out',
    };

    const ctx = gsap.context(() => {
      const targets = stagger ? el.children : el;

      if (stagger) {
        gsap.set(targets, from);
      }

      gsap.fromTo(
        targets,
        from,
        {
          ...to,
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, duration, direction, distance, stagger, once]);

  const Component = Tag as any;
  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  );
}
