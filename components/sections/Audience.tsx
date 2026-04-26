'use client';

import Reveal from '@/components/motion/Reveal';
import SectionHead from '@/components/ui/SectionHead';

export default function Audience() {
  return (
    <section className="section-y">
      <div className="wrap">
        <SectionHead
          chapter="VI"
          kicker="Events we deliver"
          title={
            <>
              From institutional to{' '}
              <span className="italic-serif text-gradient-magenta">deeply personal.</span>
            </>
          }
          lede="Aurastic's framework adapts to the occasion while the standards remain constant. Two audiences. One operational engine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <Reveal direction="left" distance={60}>
            <AudienceCard
              tag="Institutional & Corporate"
              title="Colleges,"
              titleEm="corporates"
              titleAfter="& schools."
              items={[
                'College culturals & flagship fests',
                'Annual days & inaugurations',
                'Corporate product launches',
                'Conferences & conclaves',
                'Brand activations & roadshows',
                'Alumni meets & sports events',
              ]}
              bgUrl="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=70"
            />
          </Reveal>
          <Reveal direction="right" distance={60} delay={0.15}>
            <AudienceCard
              tag="Private & Celebratory"
              title="Weddings &"
              titleEm="celebrations."
              items={[
                'Weddings & receptions',
                'Sangeet & haldi nights',
                'Birthday parties & anniversaries',
                'DJ nights & house parties',
                'Flashmobs & proposals',
                'Private concerts & curated shows',
              ]}
              bgUrl="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=70"
            />
          </Reveal>
        </div>

        {/* Clients We Have Served */}
        <Reveal delay={0.2} direction="up">
          <div className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 lg:p-10 rounded-[20px] sm:rounded-[24px] border border-white/[0.12] bg-deep/40">
            <div className="flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-violet-300 font-semibold">
              <span className="w-6 sm:w-7 h-px bg-violet-400" />
              Clients we have served
            </div>
            <h3
              className="mt-4 font-display font-semibold tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: 'clamp(22px, 2.4vw, 36px)' }}
            >
              Six months. Twenty‑plus events.{' '}
              <span className="italic-serif text-violet-300">A standard‑setting beginning.</span>
            </h3>
            <p
              className="mt-4 text-ink-muted leading-[1.6] max-w-[60ch]"
              style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}
            >
              Since our launch on 15 October 2025, Aurastic has delivered over twenty
              events with a combined turnover exceeding ₹10 lakh. Our institutional
              client base is growing month over month.
            </p>
            <div className="mt-6 sm:mt-7 flex flex-wrap gap-2 sm:gap-2.5">
              {[
                'Vel Tech University',
                'Vel Tech Multi Tech Engineering College',
                'Vel Tech High Tech Engineering College',
                'Vel Tech Ranga Sanku Arts College',
                'Saveetha Medical College & Hospital',
              ].map((c) => (
                <span
                  key={c}
                  className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-white/[0.22] text-[12px] sm:text-[13px] font-medium text-violet-200 bg-violet-500/[0.06]"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[12px] tracking-[0.05em] text-ink-faint italic">
              [ Roster updated monthly. Latest version available on request. ]
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AudienceCard({
  tag, title, titleEm, titleAfter, items, bgUrl,
}: {
  tag: string;
  title: string;
  titleEm?: string;
  titleAfter?: string;
  items: string[];
  bgUrl: string;
}) {
  return (
    <article className="group relative isolate p-8 sm:p-10 lg:p-12 rounded-[24px] sm:rounded-[28px] border border-white/[0.22] overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-between mouse:hover:border-violet-500/50 transition-all duration-500">
      <div
        className="absolute inset-0 -z-[2] bg-cover bg-center saturate-[1.1] brightness-[0.45] mouse:group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
        style={{ backgroundImage: `url('${bgUrl}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,5,20,0.3) 0%, rgba(10,5,20,0.85) 100%), linear-gradient(135deg, rgba(139,92,246,0.4), transparent 70%)',
        }}
      />
      <span className="inline-flex self-start px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.08] border border-white/[0.22] text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold">
        {tag}
      </span>
      <div>
        <h3
          className="font-display font-bold tracking-[-0.025em]"
          style={{ fontSize: 'clamp(28px, 3.6vw, 56px)' }}
        >
          {title}{' '}
          {titleEm && <span className="italic-serif text-violet-300">{titleEm}</span>}
          {titleAfter && <> {titleAfter}</>}
        </h3>
        <ul
          className="mt-5 sm:mt-7 space-y-2.5 sm:space-y-3 text-ink-muted"
          style={{ fontSize: 'clamp(14px, 1vw, 17px)' }}
        >
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2.5">
              <span className="w-[5px] h-[5px] bg-magenta rounded-full shrink-0" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
