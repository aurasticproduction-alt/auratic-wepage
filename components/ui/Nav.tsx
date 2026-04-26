'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '/#story', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'How It Works' },
  { href: '/#work', label: 'Work' },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape & on link click (handled inline below)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 z-[100] px-3 sm:px-4 lg:px-6"
        animate={{ y: hidden ? -100 : 16 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ top: 'env(safe-area-inset-top)' }}
      >
        <div className="wrap">
          <div className="flex items-center justify-between gap-4 pl-5 pr-2.5 py-2.5 sm:pl-6 sm:pr-3 sm:py-3 rounded-full bg-deep/75 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <Link
              href="#top"
              className="flex items-center gap-2 sm:gap-2.5 font-display font-extrabold text-[15px] sm:text-[17px] shrink-0 min-h-[64px]"
              aria-label="Aurastic Productions home"
            >
              <Image
                src="/brand/aurastic-white.png"
                alt="Aurastic Productions"
                width={280}
                height={70}
                priority
                className="h-12 sm:h-14 w-auto"
              />
            </Link>

            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex gap-6 xl:gap-8 2xl:gap-10">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex items-center min-h-[44px] px-1 text-[13.5px] 2xl:text-[15px] font-medium tracking-[0.005em] text-ink-muted hover:text-ink transition relative group"
                    >
                      {l.label}
                      <span className="absolute left-0 right-0 mx-auto -bottom-0.5 h-px w-0 group-hover:w-full bg-gradient-to-r from-violet-400 to-magenta transition-[width] duration-300 ease-out" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 min-h-[44px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-br from-violet-500 to-magenta text-white text-xs sm:text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(139,92,246,0.7)] mouse:hover:-translate-y-0.5 active:scale-[0.98] transition"
              >
                <span className="hidden xs:inline">Book</span>
                <span className="hidden sm:inline">&nbsp;an Event</span>
                <span className="inline xs:hidden">Book</span>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                className="xl:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-ink"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  {open ? (
                    <path d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <>
                      <line x1={3} y1={7} x2={21} y2={7} />
                      <line x1={3} y1={17} x2={21} y2={17} />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop — tap to close */}
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="xl:hidden fixed inset-0 z-[98] bg-void/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden fixed left-3 right-3 sm:left-4 sm:right-4 z-[99] p-4 sm:p-5 rounded-2xl bg-deep/95 backdrop-blur-xl border border-white/[0.12]"
              style={{ top: 'calc(env(safe-area-inset-top) + 84px)' }}
            >
              <ul className="flex flex-col gap-1">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block min-h-[48px] flex items-center px-4 py-3 rounded-lg text-base text-ink hover:bg-violet-500/10 active:bg-violet-500/20"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="border-t border-white/[0.08] pt-2 mt-2">
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="block min-h-[48px] flex items-center px-4 py-3 rounded-lg text-base font-semibold text-magenta"
                  >
                    Book an Event →
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

