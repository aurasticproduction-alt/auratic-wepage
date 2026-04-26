'use client';

import Reveal from '@/components/motion/Reveal';
import SplitText from '@/components/motion/SplitText';

const SKILLS = [
  'Audio engineering',
  'Lighting programming',
  'LED visuals',
  'Console DJ',
  'Photography',
  'Cinematic edit',
  'Visual design',
  'B.Tech AI/ML · Veltech',
];

const MILESTONES = [
  ['2024', 'Lavaza 2024 — core production team across three concert nights (Thaman, Ram Miriyala, DJ Gautham).'],
  ['Mar 2025', 'On-stage host at the audio launch of Veera Dheera Sooran with Vikram, SJ Suryah, GV Prakash.'],
  ['Lavaza 2025', 'Console DJ across three nights — L-Acoustics line arrays, DiGiCo SD338, GrandMA3.'],
  ['Night 3', 'First 20,000-plus crowd, immediately following Karthick Live.'],
  ['15 Oct 2025', 'Aurastic Productions launches on the founder’s birthday.'],
];

export default function Founder() {
  return (
    <section id="founder" className="section-y">
      <div className="wrap">
        <Reveal direction="zoom">
          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-10 sm:gap-14 lg:gap-20 items-start p-7 sm:p-10 lg:p-16 rounded-[24px] sm:rounded-[32px] border border-white/[0.16] overflow-hidden bg-gradient-to-br from-card/70 via-surface/45 to-deep/60 backdrop-blur-md">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(ellipse 40% 40% at 100% 0%, rgba(232,121,249,0.18), transparent 60%)',
              }}
            />

            <Reveal direction="left" distance={50}>
              <div className="relative aspect-[3/4] max-w-[440px] mx-auto lg:mx-0 w-full rounded-[20px] sm:rounded-[26px] overflow-hidden border border-white/[0.18] bg-gradient-to-b from-violet-700 to-surface">
                <FounderPortrait />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 px-4 bg-void/75 backdrop-blur-xl border border-white/[0.16] rounded-[12px] flex justify-between text-[11px] sm:text-[12px] tracking-[0.06em]">
                  <span className="text-violet-200 font-semibold">Chennai, IN</span>
                  <span className="text-ink-muted">Since 15 Oct 2025</span>
                </div>
              </div>
            </Reveal>

            <div className="relative">
              <Reveal direction="right" distance={30}>
                <div className="t-kicker flex items-center gap-3">
                  <span className="w-7 h-px bg-violet-400/70" />
                  Meet the founder
                </div>
              </Reveal>

              <SplitText
                as="h3"
                className="mt-4 sm:mt-5 t-display-2"
                delay={0.1}
                stagger={0.02}
              >
                Dwarakesh Venkateshan
              </SplitText>

              <Reveal direction="right" delay={0.3}>
                <div className="mt-2 t-kicker !text-magenta">
                  Founder &amp; Artistic Director · Aurastic Productions
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-6 sm:mt-7 space-y-4 sm:space-y-5 max-w-[64ch] t-body">
                  <p>
                    A multidisciplinary creative — photographer, editor, audio engineer,
                    visual designer, DJ, and event production specialist — currently
                    completing a B.Tech in Artificial Intelligence and Machine Learning
                    at Veltech University, Chennai.
                  </p>
                  <p>
                    The professional skills that typically live across an entire premium
                    event team — concert-grade audio mixing, lighting programming,
                    visual editing, DJ performance, photography, post-production — are
                    present inside the founder himself. This means a single thing in
                    practice: Aurastic is led from the ground, not from behind a desk.
                  </p>
                  <p className="text-violet-200 italic-serif text-[16px] sm:text-[17px]">
                    “Leadership at Aurastic is defined by presence, not distance.”
                  </p>
                </div>
              </Reveal>

              {/* Milestones */}
              <Reveal direction="up" delay={0.5}>
                <div className="mt-8 sm:mt-10">
                  <div className="t-kicker !text-ink-faint mb-4">Turning points</div>
                  <ul className="space-y-3 sm:space-y-3.5">
                    {MILESTONES.map(([when, what]) => (
                      <li
                        key={when}
                        className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] gap-3 sm:gap-5 items-start"
                      >
                        <span className="t-num text-magenta text-[12px] sm:text-[13px] tracking-[0.04em] uppercase pt-0.5">
                          {when}
                        </span>
                        <span className="t-body text-ink-muted">{what}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.6} stagger>
                <div className="mt-8 sm:mt-10 flex flex-wrap gap-2">
                  {SKILLS.map((t) => (
                    <span
                      key={t}
                      className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-white/[0.18] text-[12px] sm:text-[13px] font-medium text-violet-200 bg-violet-500/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FounderPortrait() {
  return (
    <svg
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b21b6" />
          <stop offset="1" stopColor="#1f1550" />
        </linearGradient>
        <radialGradient id="spot" cx="0.5" cy="0.3" r="0.6">
          <stop offset="0" stopColor="#c4b5fd" stopOpacity={0.4} />
          <stop offset="1" stopColor="#c4b5fd" stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect width={300} height={400} fill="url(#fg)" />
      <rect width={300} height={400} fill="url(#spot)" />
      <g stroke="#a78bfa" strokeOpacity={0.15} strokeWidth={1.5} fill="none">
        <line x1={20} y1={40} x2={280} y2={40} />
        <line x1={20} y1={46} x2={280} y2={46} />
        <line x1={20} y1={40} x2={40} y2={46} />
        <line x1={60} y1={40} x2={80} y2={46} />
        <line x1={100} y1={40} x2={120} y2={46} />
        <line x1={140} y1={40} x2={160} y2={46} />
        <line x1={180} y1={40} x2={200} y2={46} />
        <line x1={220} y1={40} x2={240} y2={46} />
        <line x1={260} y1={40} x2={280} y2={46} />
      </g>
      <g fill="#0a0514">
        <circle cx={150} cy={170} r={48} />
        <path d="M80 400 Q80 260 150 245 Q220 260 220 400 Z" />
      </g>
      <g stroke="#e879f9" strokeOpacity={0.7} strokeWidth={2} fill="none">
        <path d="M102 170 Q102 130 150 125" />
        <path d="M198 170 Q198 130 150 125" opacity={0.4} />
        <path d="M82 285 Q82 260 120 248" />
      </g>
      <g stroke="#c4b5fd" strokeOpacity={0.5} strokeWidth={1.5} fill="none">
        <path d="M40 170 Q45 160 40 150" />
        <path d="M30 180 Q38 160 30 140" />
        <path d="M260 170 Q255 160 260 150" />
        <path d="M270 180 Q262 160 270 140" />
      </g>
    </svg>
  );
}
