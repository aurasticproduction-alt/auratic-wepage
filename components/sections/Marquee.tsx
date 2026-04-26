'use client';

const ITEMS: (string | string[])[] = [
  'Professional Audio',
  ['Intelligent', 'Lighting'],
  'LED Visuals',
  'Stage & Truss',
  ['SFX &', 'Pyrotechnics'],
  'Artist Management',
  'Venue Infrastructure',
  ['Décor &', 'Aesthetics'],
  'Media Production',
  'Logistics',
  ['Permissions &', 'Compliance'],
  'Production Management',
];

export default function Marquee() {
  const renderItem = (item: string | string[], i: number) => {
    if (Array.isArray(item)) {
      return (
        <span
          key={i}
          className="font-display font-semibold text-ink-faint inline-flex items-center gap-6 sm:gap-12"
        >
          {item[0] && <>{item[0]}&nbsp;</>}
          <span className="italic-serif text-violet-300">{item[1]}</span>
          <span className="text-magenta text-[0.6em]">✧</span>
        </span>
      );
    }
    return (
      <span
        key={i}
        className="font-display font-semibold text-ink-faint inline-flex items-center gap-6 sm:gap-12"
      >
        {item}
        <span className="text-magenta text-[0.6em]">✧</span>
      </span>
    );
  };

  return (
    <section
      className="py-5 sm:py-7 border-y border-white/[0.08] bg-deep/30 overflow-hidden relative"
      aria-label="Our capabilities"
    >
      {/* Gradient fade edges for smooth loop illusion */}
      <div aria-hidden className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-void to-transparent pointer-events-none" />
      <div aria-hidden className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-void to-transparent pointer-events-none" />

      <div
        className="flex gap-6 sm:gap-12 whitespace-nowrap pr-6 sm:pr-12"
        style={{
          animation: 'marquee 40s linear infinite',
          fontSize: 'clamp(20px, 3.6vw, 52px)',
          letterSpacing: '-0.01em',
        }}
      >
        {ITEMS.map(renderItem)}
        {ITEMS.map((item, i) => renderItem(item, i + 100))}
      </div>
    </section>
  );
}
