'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollProgress — thin gradient bar at the top of the viewport that
 * fills up as the user scrolls down the page. Adds a cinematic "timeline" feel.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let raf = 0;

    const update = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(scrolled / max, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-[101] pointer-events-none bg-white/[0.04]"
    >
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-violet-400 via-magenta to-violet-500 origin-left"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />
    </div>
  );
}
