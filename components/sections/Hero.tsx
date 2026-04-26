'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Magnetic from '@/components/motion/Magnetic';
import RotatingWord from '@/components/motion/RotatingWord';
import FloatingOrbs from '@/components/motion/FloatingOrbs';

const WORDS = ['aura', 'vibe', 'moment', 'spectacle', 'story'];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Hero copy drifts up & fades as user scrolls — parallax depth
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.2]);

  return (
    <div
      ref={ref}
      className="relative min-h-[100svh] w-full flex flex-col items-start justify-start pointer-events-none pt-[160px] sm:pt-[200px] pb-24 overflow-hidden"
    >
      <FloatingOrbs />
      <motion.div
        className="wrap w-full"
        style={{ y: copyY, opacity: copyOpacity }}
      >
        <div className="max-w-[min(94vw,90rem)] pointer-events-auto">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1 sm:gap-2 md:gap-3 t-display-1 uppercase"
            style={{
              textShadow: '0 4px 60px rgba(5,2,9,0.9)',
            }}
          >
            <span className="block">Every event</span>
            <span className="block">
              deserves a perfect{' '}
              <span className="relative inline-block text-gradient-magenta">
                <RotatingWord words={WORDS} interval={3200} className="font-normal text-gradient-magenta" />
                <span className="italic-serif font-normal lowercase tracking-wide">.</span>
              </span>
            </span>
            <span className="block font-tagline text-violet-200 uppercase mt-6 sm:ml-4 tracking-[0.1em] text-[0.22em] leading-[1.3] opacity-80" style={{ maxWidth: '30ch' }}>
              We create it. <br className="hidden sm:block" />
              A New Era of Event Production
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 1 }}
            className="mt-10 sm:mt-12 max-w-[50ch] t-lede"
            style={{ textShadow: '0 2px 20px rgba(5,2,9,0.85)' }}
          >
            Audio, lighting, LED, stage, SFX, media — designed and delivered as one artistic execution. 
            Twelve service sectors, one quotation, one team, one accountability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-8 t-meta uppercase tracking-[0.15em] flex items-center gap-4"
          >
            <span>Company Profile</span>
            <span className="w-4 h-px bg-white/20" />
            <span>South India</span>
            <span className="w-4 h-px bg-white/20" />
            <span>2026</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.8 }}
            className="mt-10 sm:mt-12 flex flex-wrap gap-4"
          >
            <Magnetic strength={0.25}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 min-h-[52px] px-7 py-3.5 rounded-full bg-gradient-to-br from-violet-500 to-magenta text-white text-[14px] sm:text-[15px] font-semibold tracking-[0.005em] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_18px_40px_-12px_rgba(139,92,246,0.65)] mouse:hover:shadow-[0_22px_48px_-12px_rgba(232,121,249,0.6)] active:scale-[0.98] transition-shadow"
              >
                Book an event
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 min-h-[52px] px-7 py-3.5 rounded-full bg-white/[0.05] border border-white/[0.18] text-ink text-[14px] sm:text-[15px] font-semibold mouse:hover:bg-white/[0.10] mouse:hover:border-white/[0.3] active:scale-[0.98] transition backdrop-blur-md"
              >
                Explore services
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 1 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-x-5 sm:gap-x-10 max-w-xl"
          >
            {[
              { v: '20+', l: 'Events delivered' },
              { v: '₹10L+', l: 'Event turnover' },
              { v: '12', l: 'Service sectors' },
            ].map((m, i) => (
              <div key={i} className="border-l border-white/[0.25] pl-4">
                <strong
                  className="block t-num text-gradient"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 36px)' }}
                >
                  {m.v}
                </strong>
                <span
                  className="t-kicker !text-ink-faint mt-2 block"
                  style={{ textShadow: '0 2px 10px rgba(5,2,9,0.8)' }}
                >
                  {m.l}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 3.6, duration: 1 }}
          className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-3 t-kicker !text-ink-muted pointer-events-auto"
        >
          <span className="rotate-90 origin-center whitespace-nowrap pt-6">
            scroll to explore
          </span>
          <span className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
