'use client';

import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import SplitText from '@/components/motion/SplitText';
import SectionHead from '@/components/ui/SectionHead';

type TeamCard = {
  role: string;
  tag: string;
  name?: string;
  hook?: string;
  blurb?: string;
  filled?: boolean;
};

const TEAM: TeamCard[] = [
  {
    role: 'Founder & Artistic Director',
    tag: 'Leadership',
    name: 'Dwarakesh Venkateshan',
    hook: 'Audio · Lighting · LED · DJ · Photo · Direction',
    blurb:
      'Multidisciplinary creative who can step into any console on the ground. Leads creative direction and on-event execution.',
    filled: true,
  },
  {
    role: 'Co-Founder & CTO',
    tag: 'Aurastic AI',
    blurb:
      'Architect of Aurastic AI — the platform that scales the technical-flow translation across every event Aurastic touches.',
  },
  {
    role: 'Chief Operating Officer',
    tag: 'Operations',
    blurb:
      'Owns day-to-day operations, vendor relationships, equipment ownership pipeline, and organisational health.',
  },
  {
    role: 'Executive Manager',
    tag: 'Client',
    blurb:
      'First voice the client hears and the last one to sign off. Translates the brief into a quotation and the quotation into a run-of-show.',
  },
  {
    role: 'Technical Lead',
    tag: 'Production',
    blurb:
      'Owns the technical flow on the ground — sound, light, LED, SFX, structure — and keeps every console in lock-step on show night.',
  },
];

const VALUES = [
  ['Artistry Over Transaction', 'Every event is a creative work, not a service-industry deliverable.'],
  ['Hands‑On, Alongside the Team', 'Leadership is defined by presence, not distance.'],
  ['Technical Flow, Not Just Delivery', 'The choreography that ties every element to the client\'s vision.'],
  ['The Self‑Made Standard', 'Every skill internalised through hands‑on work. Nothing borrowed.'],
  ['Every Event Matters', 'Same artistic commitment for ₹15K flashmobs and ₹50L weddings.'],
  ['Uncompromised Equipment', 'L‑Acoustics, DiGiCo, GrandMA, RCF and equivalent‑tier only.'],
];

export default function TeamPage() {
  return (
    <main className="pt-[calc(env(safe-area-inset-top)+120px)] sm:pt-[calc(env(safe-area-inset-top)+140px)]">
      {/* ─────────── Page hero ─────────── */}
      <section className="wrap pb-12 sm:pb-16 lg:pb-20">
        <Reveal direction="fade">
          <div className="flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-violet-300 font-semibold">
            <span className="w-6 sm:w-7 h-px bg-violet-400" />
            The Crew
          </div>
        </Reveal>

        <SplitText
          as="h1"
          className="mt-4 sm:mt-5 font-display font-extrabold leading-[0.95] tracking-[-0.03em]"
          stagger={0.015}
        >
          The people behind
        </SplitText>
        <SplitText
          as="h1"
          className="font-display font-extrabold leading-[0.95] tracking-[-0.03em] italic-serif text-gradient-magenta"
          delay={0.25}
        >
          the aura.
        </SplitText>

        <Reveal direction="fade" delay={0.3}>
          <p
            className="mt-6 sm:mt-7 max-w-[60ch] text-ink-muted leading-[1.7]"
            style={{ fontSize: 'clamp(15px, 1.15vw, 18px)' }}
          >
            Aurastic is built by an artist who can step into any station on the ground —
            and a team being assembled around that same standard. Every craft inside
            this company is held by a specialist, with the founder shoulder‑to‑shoulder
            on every major event.
          </p>
        </Reveal>
      </section>

      {/* ─────────── Founder spotlight ─────────── */}
      <section id="founder-spotlight" className="py-16 sm:py-20 lg:py-24 border-y border-white/[0.08] bg-gradient-to-b from-deep/40 to-surface/20">
        <div className="wrap">
          <Reveal direction="zoom">
            <div className="relative grid lg:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-10 lg:gap-14 items-start p-6 sm:p-10 lg:p-14 rounded-[24px] sm:rounded-[28px] border border-white/[0.22] overflow-hidden bg-gradient-to-br from-violet-900/40 via-card/60 to-deep/40">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 50% at 0% 100%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(232,121,249,0.18), transparent 60%)',
                }}
              />

              {/* Portrait card */}
              <div className="relative">
                <div className="relative aspect-[3/4] max-w-[460px] mx-auto lg:mx-0 w-full rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white/[0.22] bg-gradient-to-b from-violet-700 to-surface">
                  <FounderPortrait />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 px-4 bg-void/70 backdrop-blur-xl border border-white/[0.22] rounded-[12px] sm:rounded-[14px] flex justify-between text-[11px] sm:text-[12px] tracking-[0.05em]">
                    <span className="text-violet-200 font-semibold">Chennai, IN</span>
                    <span className="text-ink-muted">Since 15 Oct 2025</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 max-w-[460px] mx-auto lg:mx-0">
                  <Stat v="20+" l="Events" />
                  <Stat v="20K+" l="Crowd reached" />
                  <Stat v="12" l="Service sectors" />
                </div>
              </div>

              {/* Bio column */}
              <div className="relative">
                <div className="flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-violet-300 font-semibold">
                  <span className="w-6 sm:w-7 h-px bg-violet-400" />
                  Founder Spotlight
                </div>

                <h2
                  className="mt-3 font-display font-bold tracking-[-0.025em] leading-[1.05]"
                  style={{ fontSize: 'clamp(30px, 3.4vw, 52px)' }}
                >
                  Dwarakesh Venkateshan
                </h2>

                <div
                  className="mt-2 tracking-[0.12em] sm:tracking-[0.14em] uppercase text-magenta font-semibold"
                  style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}
                >
                  Founder & Artistic Director
                </div>

                <div
                  className="mt-6 space-y-4 sm:space-y-5 max-w-[60ch] text-ink-muted leading-[1.7]"
                  style={{ fontSize: 'clamp(15px, 1.05vw, 17px)' }}
                >
                  <p>
                    Dwarakesh is a multidisciplinary creative — photographer, editor,
                    audio engineer, visual designer, DJ, and event production specialist —
                    whose entire professional life has been built around a single
                    instinct: that an event is not a service, but an art form.
                  </p>
                  <p>
                    His creative journey began at Velammal International School, where he
                    moved from performing on stage as a dancer to designing what happened
                    behind and around it — editing LED visuals for school annual days,
                    mixing audio for dance sequences, handling post‑production for
                    promos. He picked up a DSLR at fourteen and self‑trained in Filmora,
                    the Adobe Creative Suite, and Adobe Audition long before any
                    institution put a syllabus in front of him.
                  </p>
                  <p>
                    At Veltech University in Chennai — a B.Tech in AI &amp; ML — the dual
                    tracks of his life began to converge. In his first year he became the
                    unofficial creative engine for college events, and in the second
                    semester he bought his first DJ console, fulfilling a wish he had
                    carried since the eleventh standard.
                  </p>
                  <p>
                    The turning points came in rapid succession.{' '}
                    <strong className="text-ink">Lavaza 2024</strong> — three consecutive
                    nights of concerts (Thaman, Ram Miriyala, DJ Gautham) inside a
                    serious production machine. <strong className="text-ink">March 2025</strong> —
                    on stage as host for the audio launch of{' '}
                    <em>Veera Dheera Sooran</em> alongside Vikram, SJ Suryah and GV
                    Prakash. <strong className="text-ink">Lavaza 2025</strong> — console
                    DJ across all three nights on L‑Acoustics line arrays, a DiGiCo SD338
                    console, and a GrandMA3 lighting desk. On the third night, immediately
                    after Karthick Live, he played his first 20,000+ crowd. That moment
                    closed one chapter and opened another.
                  </p>
                  <p>
                    On <strong className="text-ink">15 October 2025</strong> — his
                    birthday — Aurastic Productions was launched. Every skill from a
                    decade of learning — dance, photography, editing, audio mixing,
                    visual design, DJing, live production, creative direction — came
                    together under one banner, held by one person capable of stepping
                    into any station on the ground when the moment demands it.
                  </p>
                  <p className="text-violet-200 italic-serif">
                    “Aurastic is not led from behind a desk. The founder is on the
                    ground, on every major event, holding the aura intact.”
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    'B.Tech · AI & ML · Veltech',
                    'Audio Engineer',
                    'Lighting Programmer',
                    'Visual Designer',
                    'Console DJ',
                    'Photographer',
                    'Cinematographer',
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-white/[0.22] text-[12px] sm:text-[13px] font-medium text-violet-200 bg-violet-500/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── The Team grid ─────────── */}
      <section id="team" className="py-20 sm:py-24 lg:py-[120px]">
        <div className="wrap">
          <SectionHead
            kicker="The Team"
            title={
              <>
                Specialists holding{' '}
                <span className="italic-serif text-gradient-magenta">every craft.</span>
              </>
            }
            lede="Aurastic grows the team in direct proportion to event volume — not a big team, a regular team, regularly paid, kept competitive with the best in the industry. Roles below are being filled now."
            className="mb-12 lg:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TEAM.map((m, i) => (
              <Reveal key={m.role} delay={(i % 3) * 0.06} direction="up">
                <article
                  className={`relative h-full p-6 sm:p-7 rounded-[18px] sm:rounded-[22px] border overflow-hidden transition-all ${
                    m.filled
                      ? 'border-violet-400/40 bg-gradient-to-br from-violet-700/25 via-card/50 to-deep/30 mouse:hover:border-violet-300/60'
                      : 'border-white/[0.12] bg-surface/40 mouse:hover:border-white/[0.25]'
                  }`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                      background: m.filled
                        ? 'radial-gradient(ellipse 70% 60% at 0% 0%, rgba(232,121,249,0.20), transparent 60%)'
                        : 'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(139,92,246,0.16), transparent 60%)',
                    }}
                  />

                  <div className="relative">
                    <div
                      className={`aspect-square w-20 sm:w-24 rounded-[14px] border grid place-items-center overflow-hidden ${
                        m.filled
                          ? 'border-violet-400/40 bg-gradient-to-br from-violet-500/30 to-magenta/15'
                          : 'border-white/[0.18] bg-gradient-to-br from-violet-700/40 to-surface/40'
                      }`}
                    >
                      <span
                        className={`font-display font-bold text-3xl sm:text-4xl ${
                          m.filled ? 'text-violet-100' : 'text-violet-300/40'
                        }`}
                      >
                        {(m.name ?? m.role)
                          .split(/\s+/)
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join('')
                          .toUpperCase()}
                      </span>
                    </div>

                    <div className="mt-5 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-violet-300 font-semibold">
                      {m.tag}
                    </div>
                    <h3
                      className="mt-1.5 font-display font-bold tracking-[-0.02em] leading-[1.15]"
                      style={{ fontSize: 'clamp(17px, 1.4vw, 21px)' }}
                    >
                      {m.role}
                    </h3>
                    {m.name && (
                      <div className="mt-1 text-[14px] sm:text-[15px] text-ink font-medium">
                        {m.name}
                      </div>
                    )}
                    {m.hook && (
                      <div className="mt-1 text-[12px] sm:text-[13px] text-magenta">
                        {m.hook}
                      </div>
                    )}
                    {m.blurb && (
                      <p className="mt-3 text-[13px] sm:text-[14px] text-ink-muted leading-[1.55]">
                        {m.blurb}
                      </p>
                    )}

                    <div className="mt-4 pt-4 border-t border-dashed border-white/[0.12] flex items-center justify-between">
                      {m.filled ? (
                        <Link
                          href="#founder-spotlight"
                          className="text-[11px] sm:text-[12px] tracking-[0.05em] text-violet-200 mouse:hover:text-white inline-flex items-center gap-1.5"
                        >
                          Read story
                          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="text-[11px] sm:text-[12px] tracking-[0.05em] text-ink-faint italic">
                          Position open · Coming soon
                        </span>
                      )}
                      <span
                        className={`w-2 h-2 rounded-full ${
                          m.filled
                            ? 'bg-violet-300 shadow-[0_0_10px_#a78bfa]'
                            : 'bg-magenta/70 shadow-[0_0_10px_#e879f9] animate-[pulse_2s_ease-in-out_infinite]'
                        }`}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Culture / Values ─────────── */}
      <section className="py-20 sm:py-24 lg:py-[120px] border-y border-white/[0.08] bg-gradient-to-b from-deep/30 to-surface/10">
        <div className="wrap">
          <SectionHead
            kicker="Our culture"
            title={
              <>
                Six values.{' '}
                <span className="italic-serif text-gradient-magenta">Non‑negotiable.</span>
              </>
            }
            lede="These were not invented. They were extracted from how Aurastic has already been built and how it already operates. They are the spine of every decision."
            className="mb-10 sm:mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.08] rounded-[20px] sm:rounded-[24px] overflow-hidden">
            {VALUES.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 3) * 0.08} direction="up">
                <div className="p-6 sm:p-7 lg:p-8 bg-void h-full">
                  <div className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-violet-300 font-semibold">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4
                    className="mt-3 font-display font-semibold tracking-[-0.015em] leading-[1.15]"
                    style={{ fontSize: 'clamp(18px, 1.4vw, 22px)' }}
                  >
                    {title}
                  </h4>
                  <p
                    className="mt-2.5 text-ink-muted leading-[1.6]"
                    style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}
                  >
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Join CTA ─────────── */}
      <section className="py-20 sm:py-24 lg:py-[120px]">
        <div className="wrap">
          <Reveal direction="zoom">
            <div className="relative p-8 sm:p-12 lg:p-16 rounded-[24px] sm:rounded-[28px] border border-white/[0.22] overflow-hidden bg-gradient-to-br from-violet-900/40 to-surface/40 text-center">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(232,121,249,0.2), transparent 60%)',
                }}
              />
              <div className="relative">
                <div className="text-[11px] tracking-[0.2em] uppercase text-violet-300 font-semibold">
                  Want to work with us?
                </div>
                <h3
                  className="mt-4 font-display font-bold tracking-[-0.025em] leading-[1.05]"
                  style={{ fontSize: 'clamp(28px, 3.6vw, 56px)' }}
                >
                  Join the{' '}
                  <span className="italic-serif text-gradient-magenta">crew.</span>
                </h3>
                <p
                  className="mt-5 max-w-[58ch] mx-auto text-ink-muted leading-[1.65]"
                  style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
                >
                  Audio engineers, lighting programmers, VJs, photographers,
                  cinematographers, technicians — if you take the craft seriously and
                  want to be part of building South India&apos;s most artistic event
                  production company, we&apos;d like to hear from you.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <a
                    href="https://wa.me/917845856809"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-full bg-gradient-to-br from-violet-500 to-magenta text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(139,92,246,0.7)] mouse:hover:-translate-y-0.5 transition"
                  >
                    WhatsApp +91 78458 56809
                  </a>
                  <a
                    href="mailto:aurasticproduction@gmail.com"
                    className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-full bg-white/[0.08] border border-white/[0.25] text-ink text-sm font-semibold mouse:hover:bg-white/[0.15] transition"
                  >
                    aurasticproduction@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div className="border-l border-violet-400/60 pl-3">
      <strong
        className="block font-display font-bold text-gradient leading-none"
        style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
      >
        {v}
      </strong>
      <span className="block mt-1.5 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-ink-muted">
        {l}
      </span>
    </div>
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
        <linearGradient id="fg-team" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b21b6" />
          <stop offset="1" stopColor="#1f1550" />
        </linearGradient>
        <radialGradient id="spot-team" cx="0.5" cy="0.3" r="0.6">
          <stop offset="0" stopColor="#c4b5fd" stopOpacity={0.4} />
          <stop offset="1" stopColor="#c4b5fd" stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect width={300} height={400} fill="url(#fg-team)" />
      <rect width={300} height={400} fill="url(#spot-team)" />
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
