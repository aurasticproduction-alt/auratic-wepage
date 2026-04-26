'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AuraMode — hidden easter egg.
 * Type "AURA" anywhere on the page and the site explodes
 * into event-lighting mode: color strobes, sparkle burst,
 * hint message. Toggle off with ESC or by typing AURA again.
 */
export default function AuraMode() {
  const [active, setActive] = useState(false);
  const [buffer, setBuffer] = useState('');

  useEffect(() => {
    const TARGET = 'AURA';
    let currentBuffer = '';
    let resetTimer: ReturnType<typeof setTimeout>;

    const onKey = (e: KeyboardEvent) => {
      // Ignore if typing in an input/textarea (don't interfere with form typing)
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      // ESC to close
      if (e.key === 'Escape') {
        setActive(false);
        return;
      }

      const key = e.key.toUpperCase();
      if (key.length !== 1 || !/[A-Z]/.test(key)) return;

      currentBuffer += key;
      // Only keep last 4 chars
      currentBuffer = currentBuffer.slice(-TARGET.length);
      setBuffer(currentBuffer);

      if (currentBuffer === TARGET) {
        setActive((prev) => !prev);
        currentBuffer = '';
        setBuffer('');
      }

      // Reset buffer if no key pressed for 2s
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        currentBuffer = '';
        setBuffer('');
      }, 2000);
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] pointer-events-none"
          aria-hidden
        >
          {/* Color strobes cycling through event colors */}
          <motion.div
            className="absolute inset-0 mix-blend-color-dodge"
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(232,121,249,0.55), transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(139,92,246,0.55), transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(59,130,246,0.55), transparent 50%)',
                'radial-gradient(circle at 30% 50%, rgba(236,72,153,0.55), transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(232,121,249,0.55), transparent 50%)',
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-0 mix-blend-overlay"
            animate={{
              background: [
                'radial-gradient(circle at 80% 80%, rgba(139,92,246,0.45), transparent 55%)',
                'radial-gradient(circle at 10% 90%, rgba(232,121,249,0.45), transparent 55%)',
                'radial-gradient(circle at 90% 10%, rgba(59,130,246,0.45), transparent 55%)',
                'radial-gradient(circle at 80% 80%, rgba(139,92,246,0.45), transparent 55%)',
              ],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Sparkle burst from center */}
          {Array.from({ length: 40 }).map((_, i) => {
            const angle = (i / 40) * Math.PI * 2;
            const distance = 200 + Math.random() * 400;
            return (
              <motion.span
                key={i}
                className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-white"
                initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  opacity: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeOut',
                }}
                style={{ boxShadow: '0 0 8px #fff, 0 0 16px #e879f9' }}
              />
            );
          })}

          {/* "Aura Mode Activated" banner */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto text-center"
          >
            <div className="font-display text-[clamp(32px,6vw,88px)] font-extrabold tracking-[-0.03em] leading-none">
              <span className="block text-white drop-shadow-[0_0_30px_rgba(232,121,249,0.9)]">
                AURA MODE
              </span>
              <span className="italic-serif text-magenta mt-2 block drop-shadow-[0_0_40px_rgba(232,121,249,0.9)]">
                activated.
              </span>
            </div>
            <p className="mt-6 text-sm tracking-[0.3em] uppercase text-white/80">
              Press ESC or type AURA to exit
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Typing indicator - shows in corner when user is getting close */}
      {!active && buffer.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-4 left-4 z-[199] pointer-events-none font-mono text-[10px] tracking-[0.3em] uppercase text-violet-300"
          aria-hidden
        >
          {buffer}_
        </motion.div>
      )}
    </AnimatePresence>
  );
}
