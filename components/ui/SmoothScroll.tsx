'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // On touch devices (phones, tablets, TVs with remotes), use native scroll.
    // Lenis' smoothing tends to feel sluggish and fights OS scroll inertia.
    // Also honor reduced-motion preference.
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || reducedMotion) {
      // Still wire ScrollTrigger to native scroll so pin/scrub animations work
      ScrollTrigger.defaults({ scroller: window });
      return;
    }

    // Initialize Lenis with a cinematic feel — desktop / mouse only.
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
