'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 600);
      }
      setProgress(Math.round(p));
    }, 100);

    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void"
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          {/* Logo mark only */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <Image
              src="/brand/aurastic-mark.png"
              alt="Aurastic"
              width={160}
              height={160}
              priority
              className="h-24 sm:h-32 lg:h-40 w-auto drop-shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            />
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-magenta"
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <div className="mt-4 font-num text-[12px] tracking-[0.18em] text-ink-muted">
            {progress.toString().padStart(3, '0')}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
