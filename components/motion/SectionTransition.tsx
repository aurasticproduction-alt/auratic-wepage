'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  /** how much vertical drift on enter/exit, in px */
  drift?: number;
};

/**
 * Wraps a section so it gently fades + drifts in as it enters the viewport
 * and softens as it leaves — creating a continuous, scroll-tied transition
 * between consecutive sections.
 */
export default function SectionTransition({
  children,
  className,
  drift = 60,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Fade up on enter, slight fade out on exit
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    reduce ? [1, 1, 1, 1] : [0, 1, 1, 0.6],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    reduce ? [0, 0, 0, 0] : [drift, 0, 0, -drift * 0.4],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    reduce ? [1, 1, 1, 1] : [0.985, 1, 1, 0.99],
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale, willChange: 'opacity, transform' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
