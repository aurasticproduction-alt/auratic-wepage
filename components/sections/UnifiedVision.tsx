'use client';

import Reveal from '@/components/motion/Reveal';
import SectionHead from '@/components/ui/SectionHead';

export default function UnifiedVision() {
  return (
    <section
      id="vision"
      className="section-y border-y border-white/[0.06] bg-gradient-to-b from-void via-deep/30 to-void"
    >
      <div className="wrap">
        <SectionHead
          kicker="The Unified Vision"
          title={
            <>
              One company. Two limbs.{' '}
              <span className="italic-serif text-gradient-magenta">One aura.</span>
            </>
          }
          lede="Aurastic is not two separate businesses. It is one company expressed through two complementary limbs that serve the same artistic mission."
        />

        <div className="grid gap-6 lg:grid-cols-2 mb-10 sm:mb-12">
          {/* Productions */}
          <Reveal direction="up" duration={0.9}>
            <div className="h-full rounded-[20px] sm:rounded-[24px] border border-white/[0.10] bg-white/[0.04] p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[10px] tracking-[0.2em] uppercase text-violet-300/70 font-bold">
                Live now
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-violet-300 font-bold">
                Aurastic Productions
              </div>
              <h3
                className="mt-3 font-display font-bold leading-[1.0] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(28px, 3.6vw, 56px)' }}
              >
                The <span className="italic-serif text-violet-300">Hands.</span>
              </h3>
              <p
                className="mt-5 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
              >
                The execution arm. How the aura gets created today — in real rooms, on real stages,
                with real sound, real lights, real people. Every event that is planned, designed,
                and delivered happens here.
              </p>
              <p
                className="mt-4 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
              >
                This is the limb that is operational, revenue-generating, and client-facing right
                now.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-[11px] sm:text-[12px] tracking-[0.12em] uppercase text-violet-200 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-pulse" />
                Operational since 15 Oct 2025
              </div>
            </div>
          </Reveal>

          {/* AI */}
          <Reveal direction="up" duration={0.9} delay={0.1}>
            <div className="h-full rounded-[20px] sm:rounded-[24px] border border-magenta/25 bg-gradient-to-br from-violet-500/[0.10] via-magenta/[0.05] to-transparent p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[10px] tracking-[0.2em] uppercase text-magenta/80 font-bold">
                In ideation
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-magenta font-bold">
                Aurastic AI
              </div>
              <h3
                className="mt-3 font-display font-bold leading-[1.0] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(28px, 3.6vw, 56px)' }}
              >
                The <span className="italic-serif text-magenta">Brain.</span>
              </h3>
              <p
                className="mt-5 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
              >
                The intelligence arm. A platform being developed so any client — a college
                coordinator, a corporate HR manager, a wedding family — can describe their event
                and instantly receive a structured quotation generated across Aurastic&rsquo;s
                twelve service sectors.
              </p>
              <p
                className="mt-4 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
              >
                The moment the client confirms, Aurastic&rsquo;s execution workflow activates
                automatically — passing the event directly into the Productions arm.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-magenta/15 border border-magenta/30 text-[11px] sm:text-[12px] tracking-[0.12em] uppercase text-magenta font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
                Prototype targeted · Oct 2026
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" duration={0.9} delay={0.2}>
          <div className="rounded-[20px] sm:rounded-[24px] border border-white/[0.10] bg-deep/40 p-7 sm:p-10 lg:p-12 text-center">
            <div className="text-[11px] tracking-[0.22em] uppercase text-violet-300 font-bold">
              Why the two are inseparable
            </div>
            <p
              className="mt-4 text-ink leading-[1.55] max-w-[68ch] mx-auto"
              style={{ fontSize: 'clamp(16px, 1.4vw, 24px)' }}
            >
              An event company without intelligence can only scale through bodies. An event AI
              without execution is just a calculator. The same founder who understands what happens
              at a GrandMA3 lighting desk at 11pm on show night is the person designing the AI
              logic.
            </p>
            <p
              className="mt-6 font-display tracking-[-0.01em]"
              style={{ fontSize: 'clamp(18px, 1.8vw, 30px)' }}
            >
              <span className="text-violet-300">Productions is the hands.</span>{' '}
              <span className="text-magenta">AI is the brain.</span>{' '}
              <span className="italic-serif text-white">Both serve the same aura.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
