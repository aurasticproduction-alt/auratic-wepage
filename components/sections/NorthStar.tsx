'use client';

import Reveal from '@/components/motion/Reveal';
import SectionHead from '@/components/ui/SectionHead';

const HORIZONS = [
  {
    year: 'Year 1',
    headline: 'Prove the model',
    body: 'Cement Aurastic Productions as South India\u2019s benchmark for artistic event execution. Deliver every event to the full Aurastic standard, regardless of budget. Lock the operational playbook.',
    metrics: ['50+ events delivered', 'Multi-college presence', 'First crore-level production'],
    accent: 'violet',
  },
  {
    year: 'Year 2',
    headline: 'Scale the team',
    body: 'Build a permanent core team across the 12 service sectors. Move from founder-on-every-event to founder-on-every-major-event. Codify training so the standard travels with new hires.',
    metrics: ['Core team of 20+', 'Pan-Tamil-Nadu coverage', 'In-house equipment ownership'],
    accent: 'violet',
  },
  {
    year: 'Year 3',
    headline: 'Launch Aurastic AI',
    body: 'Aurastic AI prototype goes live. Instant quotation engine across the 12 service sectors. Seed funding closed. The Brain begins to scale what the Hands have proven.',
    metrics: ['AI v1.0 in market', 'Seed round closed', 'First 1000 AI quotations'],
    accent: 'magenta',
  },
  {
    year: 'Year 4',
    headline: 'National footprint',
    body: 'Productions arm expands beyond South India. Aurastic AI begins onboarding partner production houses outside Aurastic\u2019s direct execution radius — extending the standard, not diluting it.',
    metrics: ['Bengaluru + Hyderabad ops', 'Partner network seeded', 'AI-driven events nationwide'],
    accent: 'magenta',
  },
  {
    year: 'Year 5',
    headline: 'Own the word',
    body: 'When a stranger hears \u201cAurastic,\u201d one feeling rises before any other: ARTISTIC. The benchmark for what an event can be — held in Productions, scaled through AI, recognised across India.',
    metrics: ['#1 recall in artistic execution', 'Series A horizon', 'The category we created'],
    accent: 'magenta',
  },
];

export default function NorthStar() {
  return (
    <section
      id="northstar"
      className="section-y border-y border-white/[0.06] bg-gradient-to-b from-deep/40 to-void"
    >
      <div className="wrap">
        <SectionHead
          kicker="The 5-Year North Star"
          title={
            <>
              Not aspirations.{' '}
              <span className="italic-serif text-gradient-magenta">Co-ordinates.</span>
            </>
          }
          lede="The measurable, specific targets Aurastic is building toward across the next five years. The destination, in writing, so every event between now and then is judged against it."
        />

        <div className="relative">
          {/* Vertical connector line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/50 via-violet-400/30 to-magenta/50 hidden sm:block"
          />

          <div className="space-y-5 sm:space-y-6">
            {HORIZONS.map((h, i) => (
              <Reveal key={h.year} direction="up" duration={0.85} delay={i * 0.05}>
                <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] gap-3 sm:gap-6 items-stretch">
                  <div className="relative flex flex-col items-center pt-6 sm:pt-7">
                    <div
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ring-4 ${
                        h.accent === 'magenta'
                          ? 'bg-magenta ring-magenta/15'
                          : 'bg-violet-400 ring-violet-400/15'
                      }`}
                    />
                  </div>
                  <div
                    className={`rounded-[16px] sm:rounded-[20px] border p-5 sm:p-7 lg:p-8 ${
                      h.accent === 'magenta'
                        ? 'border-magenta/20 bg-gradient-to-br from-magenta/[0.06] to-violet-500/[0.04]'
                        : 'border-white/[0.10] bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline gap-3 sm:gap-5">
                      <div
                        className={`text-[11px] tracking-[0.22em] uppercase font-bold ${
                          h.accent === 'magenta' ? 'text-magenta' : 'text-violet-300'
                        }`}
                      >
                        {h.year}
                      </div>
                      <h3
                        className="font-display font-bold tracking-[-0.02em]"
                        style={{ fontSize: 'clamp(20px, 2.2vw, 32px)' }}
                      >
                        {h.headline}
                      </h3>
                    </div>
                    <p
                      className="mt-3 text-ink-muted leading-[1.65] max-w-[68ch]"
                      style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
                    >
                      {h.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {h.metrics.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] sm:text-[12px] border border-white/[0.10] bg-void/40 text-ink-muted"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
