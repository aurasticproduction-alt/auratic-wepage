'use client';

import Reveal from '@/components/motion/Reveal';
import SectionHead from '@/components/ui/SectionHead';

export default function Insight() {
  return (
    <section
      id="insight"
      className="section-y border-y border-white/[0.06] bg-gradient-to-b from-deep/40 to-void"
    >
      <div className="wrap">
        <SectionHead
          chapter="II"
          kicker="The industry insight"
          title={
            <>
              What we see that{' '}
              <span className="italic-serif text-gradient-magenta">others don&rsquo;t.</span>
            </>
          }
          lede="The event industry in India is built on deliverables. Every company sells a product — &ldquo;here is your sound,&rdquo; &ldquo;here is your lighting,&rdquo; &ldquo;here is your LED wall.&rdquo; Clients pay for equipment. The transaction ends there."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="up" duration={0.9}>
            <div className="rounded-[20px] sm:rounded-[24px] border border-white/[0.10] bg-white/[0.04] p-7 sm:p-9 h-full">
              <div className="text-[11px] tracking-[0.2em] uppercase text-violet-300 font-bold">
                The Gap
              </div>
              <h3
                className="mt-3 font-display font-bold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(22px, 2.5vw, 36px)' }}
              >
                What almost no one sells is the thing clients most need:{' '}
                <span className="italic-serif text-violet-300">the event flow itself.</span>
              </h3>
              <p
                className="mt-5 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
              >
                Clients know what they want their event to feel like. What they don&rsquo;t know — and
                are rarely taught — is how sound, light, LED, SFX, stage design, rehearsals, and
                live performances must be technically synchronised in order to produce that feeling.
              </p>
              <p
                className="mt-4 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
              >
                Vendors know their own silo. Technicians speak their own language. Event managers
                coordinate logistics. But nobody takes responsibility for translating all of it into
                something the client can hold and guide.
              </p>
              <p
                className="mt-5 font-display text-violet-200"
                style={{ fontSize: 'clamp(15px, 1.2vw, 20px)' }}
              >
                The gap in the industry is not pricing. It is technical flow knowledge. Clients are
                buying equipment when what they actually need is{' '}
                <span className="italic-serif text-magenta">an interpreter.</span>
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" duration={0.9} delay={0.1}>
            <div className="rounded-[20px] sm:rounded-[24px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.10] to-magenta/[0.05] p-7 sm:p-9 h-full">
              <div className="text-[11px] tracking-[0.2em] uppercase text-magenta font-bold">
                How Aurastic closes it
              </div>
              <h3
                className="mt-3 font-display font-bold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(22px, 2.5vw, 36px)' }}
              >
                The knowledge moves with the event —{' '}
                <span className="italic-serif text-gradient-magenta">not just the invoice.</span>
              </h3>
              <p
                className="mt-5 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
              >
                Aurastic does not just deliver the equipment. We share the technical flow with the
                client throughout the project — so as ideas evolve through planning and rehearsal,
                we translate every new thought into executable reality, keeping both the
                client&rsquo;s satisfaction and the operational health of the event intact.
              </p>
              <p
                className="mt-4 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(14px, 1.05vw, 17px)' }}
              >
                This is the core reason Aurastic exists as a separate kind of event company — and
                the reason Aurastic AI is being built. The AI is not designed to replace
                technicians. It is designed to scale the translation, so every client, in every
                city, at every budget, gets access to the same technical interpretation that today
                is only available to a handful of top-tier productions.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
                <Stat n="12" l="Service sectors" />
                <Stat n="1" l="Quotation" />
                <Stat n="1" l="Accountability" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl border border-white/[0.10] bg-void/40 p-3 sm:p-4 text-center">
      <div
        className="font-display font-extrabold text-white leading-none"
        style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
      >
        {n}
      </div>
      <div className="mt-1 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-ink-muted">
        {l}
      </div>
    </div>
  );
}
