'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  words: string[];
  interval?: number;
  className?: string;
};

/**
 * RotatingWord — cycles through an array of words with
 * a smooth vertical slide animation. Each word gets the
 * spotlight for a moment before being replaced.
 */
export default function RotatingWord({ words, interval = 2400, className = '' }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  // Use the longest word for consistent sizing (prevents layout shift)
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <span className="relative inline-block align-baseline" style={{ minWidth: `${longest.length}ch` }}>
      <span className="invisible italic-serif">{longest}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0, rotateX: -90 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          exit={{ y: '-100%', opacity: 0, rotateX: 90 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`absolute top-0 left-0 italic-serif py-1 ${className}`}
          style={{
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d',
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
