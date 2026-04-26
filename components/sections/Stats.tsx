'use client';

import Reveal from '@/components/motion/Reveal';
import AnimatedCounter from '@/components/motion/AnimatedCounter';

const STATS = [
  { value: 20, suffix: '+', label: 'Events delivered' },
  { value: 10, prefix: '₹', suffix: 'L+', label: 'Combined turnover' },
  { value: 12, label: 'Service sectors' },
  { value: 6, label: 'Months operating' },
];

export default function Stats() {
  return (
    <section className="pb-[clamp(72px,9vw,140px)]">
      <div className="wrap">
        <Reveal direction="zoom">
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 p-8 sm:p-10 lg:p-12 rounded-[24px] sm:rounded-[28px] border border-white/[0.22] bg-gradient-to-br from-violet-900/50 to-surface/60 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(232,121,249,0.2), transparent 60%)',
              }}
            />
            {STATS.map((st) => (
              <div key={st.label} className="relative">
                <strong
                  className="block font-num font-bold tracking-[-0.01em] leading-none text-gradient"
                  style={{ fontSize: 'clamp(36px, 5.4vw, 88px)' }}
                >
                  <AnimatedCounter
                    to={st.value}
                    duration={2}
                    prefix={st.prefix || ''}
                    suffix={st.suffix || ''}
                  />
                </strong>
                <span
                  className="block mt-3 sm:mt-3.5 font-bankgothic tracking-[0.18em] sm:tracking-[0.2em] uppercase text-ink-muted"
                  style={{ fontSize: 'clamp(11px, 0.85vw, 14px)' }}
                >
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
