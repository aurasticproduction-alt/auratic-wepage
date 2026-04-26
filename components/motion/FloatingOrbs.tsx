'use client';

import { motion } from 'framer-motion';

/**
 * Decorative floating gradient orbs for hero / hero-adjacent sections.
 * They drift on independent loops — no two on the same beat — giving
 * the page a slow, organic "alive" feel without distracting from copy.
 *
 * Pure decoration. Aria-hidden, pointer-events:none.
 */
export default function FloatingOrbs({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Big violet orb — top-left, drifts diagonally */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[58vw] h-[58vw] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(139,92,246,0.55), rgba(139,92,246,0) 70%)',
        }}
        animate={{
          x: ['0%', '12%', '-4%', '0%'],
          y: ['0%', '-8%', '6%', '0%'],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Magenta orb — bottom-right, slower drift */}
      <motion.div
        className="absolute -bottom-[25%] -right-[15%] w-[64vw] h-[64vw] rounded-full blur-[140px]"
        style={{
          background:
            'radial-gradient(circle at 60% 60%, rgba(232,121,249,0.40), rgba(232,121,249,0) 70%)',
        }}
        animate={{
          x: ['0%', '-10%', '6%', '0%'],
          y: ['0%', '4%', '-8%', '0%'],
          scale: [1, 1.05, 1.1, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Small accent dot — wanders across mid-screen */}
      <motion.div
        className="absolute top-[40%] left-[55%] w-[26vw] h-[26vw] rounded-full blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, rgba(196,181,253,0.28), rgba(196,181,253,0) 70%)',
        }}
        animate={{
          x: ['0%', '-20%', '14%', '0%'],
          y: ['0%', '12%', '-18%', '0%'],
          scale: [1, 1.15, 0.92, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
