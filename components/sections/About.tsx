'use client';

import Reveal from '@/components/motion/Reveal';
import SplitText from '@/components/motion/SplitText';

const STAMPS = [
  'Launched 15 Oct 2025',
  'Based in Chennai',
  'Across South India',
];

const CHAPTERS = [
  {
    n: '01',
    title: 'The Apprenticeship',
    body:
      'Long before the company had a name, the craft was already being practised — LED visuals lifted, audio mixes tuned, school annual days turned into something memorable. A DSLR at fourteen. Filmora, the Adobe suite, Adobe Audition — all self-taught.',
  },
  {
    n: '02',
    title: 'The Convergence',
    body:
      'B.Tech in AI & ML at Veltech University. By second semester of first year, a first DJ console — fulfilling a wish carried since the eleventh standard. Speakers hired. Stage time earned. Two tracks of one life began to braid into a single craft.',
  },
  {
    n: '03',
    title: 'The Crucible',
    body:
      'Lavaza 2024 — three nights of concerts (Thaman, Ram Miriyala, DJ Gautham). March 2025 — on-stage host for the audio launch of Veera Dheera Sooran with Vikram, SJ Suryah, GV Prakash. Lavaza 2025 — console DJ across all three nights on L-Acoustics, DiGiCo SD338, GrandMA3. First 20,000-plus crowd after Karthick Live.',
  },
  {
    n: '04',
    title: 'The Founding',
    body:
      'Aurastic — a coined word fusing Aura with the artistic, acoustic, aesthetic suffix. Identity, philosophy and intro film built April–October 2025. Launched 15 October 2025 on the founder’s birthday. Within six months: 20+ events delivered, ₹10L+ event turnover.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-y">
      <div className="wrap">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20 items-start">
          {/* Left — title block */}
          <div className="lg:sticky lg:top-32">
            <div className="t-kicker flex items-center gap-3">
              <span className="font-display font-bold tracking-[0.04em] text-magenta">
                [ I ]
              </span>
              <span className="w-7 h-px bg-violet-400/70" />
              About Aurastic
            </div>

            <Reveal
              direction="up"
              className="mt-8 mb-4"
            >
              <h2 className="t-display-2 max-w-[14ch] uppercase">
                Not a vendor.
              </h2>
            </Reveal>
            <Reveal
              direction="up"
              delay={0.2}
            >
              <h2 className="t-display-2 italic-serif text-violet-300 max-w-[16ch] mt-2 normal-case">
                An artistic execution company.
              </h2>
            </Reveal>

            <Reveal delay={0.3} direction="fade">
              <div className="mt-6 sm:mt-7 space-y-4 max-w-[58ch] t-body">
                <p>
                  Aurastic designs, plans, and delivers events as complete artistic
                  experiences. We hold every event — a fifteen-thousand-rupee flashmob,
                  a fifty-lakh wedding, a crore-level concert — to the same standard of
                  craft. The scale shifts. The artistic commitment does not.
                </p>
                <p>
                  Most companies sell equipment. Aurastic sells <em className="text-violet-200 not-italic font-medium">technical flow</em>
                  {' '}— the choreography that ties sound, light, LED, stage, and
                  performance into the experience the client originally imagined.
                </p>
                <p className="text-violet-200 italic-serif text-[15px] sm:text-[16px]">
                  “The knowledge travels with the client, not just the invoice.”
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4} direction="up" stagger>
              <div className="mt-7 sm:mt-8 flex flex-wrap gap-2 sm:gap-2.5">
                {STAMPS.map((s) => (
                  <span
                    key={s}
                    className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-white/[0.18] text-[12.5px] sm:text-[13px] font-medium text-violet-200 bg-violet-500/[0.06]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — origin chapters */}
          <Reveal direction="right" distance={50}>
            <div className="t-kicker mb-6">The Aurastic Story</div>
            <ol className="relative space-y-5 sm:space-y-6">
              <span
                aria-hidden
                className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 via-magenta/30 to-transparent"
              />
              {CHAPTERS.map((c, i) => (
                <Reveal key={c.n} delay={i * 0.08} direction="up">
                  <li className="relative pl-12 sm:pl-14">
                    <span className="absolute left-0 top-1 w-7 h-7 grid place-items-center rounded-full border border-violet-400/40 bg-deep/60 backdrop-blur t-num text-[11px] text-violet-200">
                      {c.n}
                    </span>
                    <h3 className="t-h4 text-ink">{c.title}</h3>
                    <p className="mt-1.5 t-body max-w-[58ch]">{c.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
