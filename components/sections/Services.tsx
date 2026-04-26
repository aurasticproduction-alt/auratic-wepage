'use client';

import Reveal from '@/components/motion/Reveal';
import SectionHead from '@/components/ui/SectionHead';

const G_VIOLET = 'radial-gradient(circle at 20% 20%, rgba(139,92,246,0.3), transparent 60%), linear-gradient(180deg, rgba(23,16,58,0.9), rgba(18,8,38,0.7))';
const G_MAGENTA = 'radial-gradient(circle at 80% 20%, rgba(232,121,249,0.35), transparent 60%), linear-gradient(180deg, rgba(31,21,80,0.9), rgba(23,16,58,0.7))';
const G_LAVENDER = 'radial-gradient(circle at 50% 100%, rgba(167,139,250,0.3), transparent 60%), linear-gradient(180deg, rgba(31,21,80,0.85), rgba(23,16,58,0.7))';
const G_DEEP = 'radial-gradient(circle at 80% 80%, rgba(232,121,249,0.25), transparent 60%), linear-gradient(180deg, rgba(23,16,58,0.9), rgba(18,8,38,0.7))';

const SERVICES = [
  {
    num: '01',
    tag: 'Audio',
    title: 'Professional',
    titleEm: 'Audio System',
    body: 'Line arrays, subwoofers, stage monitors, digital mixing consoles, microphones, DJ setups, signal distribution, qualified audio engineers.',
    gradient: G_MAGENTA,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
        <path d="M3 12h2M7 8v8M11 5v14M15 8v8M19 11v2" />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'Lighting',
    title: 'Intelligent',
    titleEm: 'Lighting System',
    body: 'Moving heads, LED PARs, blinders, follow spots, DMX consoles, haze and smoke, truss-mounted rigs, certified lighting programmers.',
    gradient: G_VIOLET,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v3M12 19v3M4 12H1M23 12h-3M6.3 6.3 4.2 4.2M19.8 19.8l-2.1-2.1M6.3 17.7l-2.1 2.1M19.8 4.2l-2.1 2.1" />
        <circle cx={12} cy={12} r={4} />
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Visuals',
    title: 'LED Visual',
    titleEm: 'Experience',
    body: 'Main-stage LED walls, side and delay screens, processors, media servers, fibre cabling, visual jockeys, LED technical team.',
    gradient: G_LAVENDER,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={4} width={20} height={14} rx={2} />
        <line x1={2} y1={9} x2={22} y2={9} />
        <line x1={7} y1={4} x2={7} y2={18} />
        <line x1={12} y1={4} x2={12} y2={18} />
        <line x1={17} y1={4} x2={17} y2={18} />
      </svg>
    ),
  },
  {
    num: '04',
    tag: 'Structure',
    title: 'Stage Truss',
    titleEm: '& Fabrication',
    body: 'Stage platforms, risers, carpeting, VIP red carpets, goal-post and box truss, backdrop frameworks, podiums, structural engineering.',
    gradient: G_DEEP,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V9l9-6 9 6v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    num: '05',
    tag: 'SFX',
    title: 'Special Effects',
    titleEm: '& Pyrotechnics',
    body: 'Cold pyro, CO₂ jets, sparkulars, flame effects, confetti, fog and smoke effects — designed, timed, and permitted to event scale.',
    gradient: G_MAGENTA,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 3 4 3 7a3 3 0 0 1-6 0c0-1 .5-2 1.5-3" />
        <path d="M8 14c-2 1-4 3-4 6h16c0-3-2-5-4-6" />
      </svg>
    ),
  },
  {
    num: '06',
    tag: 'Talent',
    title: 'Artists & Celebrity',
    titleEm: 'Management',
    body: 'Artist booking coordination, celebrity handling, green-room and hospitality, technical riders, stage-entry choreography.',
    gradient: G_LAVENDER,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 6 1-4.5 4 1 6.5L12 16l-5.5 3.5L7.5 13 3 9l6-1z" />
      </svg>
    ),
  },
  {
    num: '07',
    tag: 'Power',
    title: 'Venue Infrastructure',
    titleEm: '& Utilities',
    body: 'Generators and fuel, power distribution, cabling, venue illumination, barricading, electrical safety, load management.',
    gradient: G_VIOLET,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
      </svg>
    ),
  },
  {
    num: '08',
    tag: 'Aesthetics',
    title: 'Décor &',
    titleEm: 'Aesthetics',
    body: 'Welcome arches, banners and standees, photo booths, LED-theme backdrops, stage-bottom branding, floral and lamp décor, event creatives.',
    gradient: G_DEEP,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 5 9v13h14V9z" />
        <path d="M9 22v-6h6v6" />
        <circle cx={12} cy={12} r={1.5} />
      </svg>
    ),
  },
  {
    num: '09',
    tag: 'Media',
    title: 'Event Media',
    titleEm: 'Production',
    body: 'Photography (candid + traditional), cinematic videography, drone coverage, live video mixing, highlight reels, full aftermovies.',
    gradient: G_MAGENTA,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x={3} y={6} width={18} height={14} rx={2} />
        <circle cx={12} cy={13} r={4} />
        <path d="M9 6 11 4h2l2 2" />
      </svg>
    ),
  },
  {
    num: '10',
    tag: 'Operations',
    title: 'Logistics &',
    titleEm: 'Operations',
    body: 'Equipment and crew transportation, loading and unloading, setup and dismantling, technician deployment, contingency operations.',
    gradient: G_VIOLET,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x={1} y={6} width={15} height={11} rx={1} />
        <path d="M16 10h4l3 4v3h-7" />
        <circle cx={6} cy={19} r={2} />
        <circle cx={18} cy={19} r={2} />
      </svg>
    ),
  },
  {
    num: '11',
    tag: 'Compliance',
    title: 'Permissions &',
    titleEm: 'Licensing',
    body: 'Venue NOCs, fire and safety clearances, music licences, corporate access permissions, regulatory documentation.',
    gradient: G_LAVENDER,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '12',
    tag: 'Direction',
    title: 'Production',
    titleEm: 'Management',
    body: 'Show flow planning, vendor coordination, artist synchronisation, technical direction, live cue management, on-ground command.',
    gradient: 'radial-gradient(circle at 80% 20%, rgba(232,121,249,0.35), transparent 60%), radial-gradient(circle at 20% 80%, rgba(139,92,246,0.25), transparent 60%), linear-gradient(180deg, rgba(31,21,80,0.9), rgba(23,16,58,0.7))',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={9} />
        <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4M12 17h.01" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-y overflow-hidden">
      <div className="wrap">
        <SectionHead
          kicker="What we do · 12 service sectors"
          title={
            <>
              Twelve sectors. One quotation.{' '}
              <span className="italic-serif text-gradient-magenta">One team.</span>
            </>
          }
          lede="Aurastic operates across twelve fully integrated service sectors covering the entire spectrum of professional event production — handled by one team, billed under one quotation, owned end-to-end."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, index }: { service: typeof SERVICES[0]; index: number }) {
  return (
    <Reveal
      direction="up"
      delay={(index % 3) * 0.07}
      className="h-full"
    >
      <article
        className="group relative h-full min-h-[300px] lg:min-h-[340px] p-7 sm:p-8 rounded-[20px] sm:rounded-[22px] border border-white/[0.10] overflow-hidden flex flex-col justify-between mouse:hover:border-violet-400/30 mouse:hover:-translate-y-1 transition-all duration-500"
        style={{ background: s.gradient }}
      >
        <span
          aria-hidden
          className="absolute -top-3 -right-2 t-num text-transparent select-none pointer-events-none"
          style={{
            WebkitTextStroke: '1px rgba(199,180,253,0.13)',
            fontSize: 'clamp(96px, 12vw, 160px)',
          }}
        >
          {s.num}
        </span>

        <div className="relative">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-violet-500/25 to-magenta/15 border border-white/[0.22] grid place-items-center text-violet-200 [&>svg]:w-[18px] [&>svg]:h-[18px]">
              {s.icon}
            </div>
            <span className="t-kicker !text-violet-300">{s.tag}</span>
          </div>
          <h3 className="t-display-3 uppercase">
            {s.title}{' '}
            <span className="italic-serif text-violet-300 normal-case">{s.titleEm}</span>
          </h3>
          <p className="mt-4 t-body max-w-[34ch]">{s.body}</p>
        </div>

        <div className="relative mt-7 pt-5 border-t border-white/[0.08] flex items-center justify-between">
          <span className="t-kicker !text-ink-faint">{s.num} / 12</span>
          <span className="text-violet-300 mouse:group-hover:translate-x-1 transition-transform">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Reveal>
  );
}
