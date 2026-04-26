'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * HorizontalScroll — pins a section and translates its children horizontally
 * as the user scrolls vertically. Classic "scrollytelling" effect used by
 * Apple, Stripe, and award-winning sites.
 *
 * The child must be a single container whose width is wider than the viewport.
 * Put your panels/cards inside a flex row.
 *
 * DISABLED on mobile — horizontal scroll with pins hurts mobile UX and perf.
 */
export default function HorizontalScroll({ children, className }: Props) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    // Don't pin on mobile — feels bad with touch scroll
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || reducedMotion) return;

    const ctx = gsap.context(() => {
      // Calculate how much to translate
      const getDistance = () => track.scrollWidth - window.innerWidth + 100;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, pin);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinRef} className={className}>
      <div ref={trackRef} className="inline-flex">
        {children}
      </div>
    </div>
  );
}
