'use client';

import Reveal from '@/components/motion/Reveal';
import LiquidImage from '@/components/motion/LiquidImage';
import SectionHead from '@/components/ui/SectionHead';

const ITEMS = [
  {
    src: '/gallery/concert.png',
    alt: 'Aurastic concert production with intelligent lighting',
    tag: 'Pro Show',
    title: 'Concert production',
    cls: 'sm:col-span-3 sm:row-span-3',
  },
  {
    src: '/gallery/cultural.png',
    alt: 'High-energy college cultural fest setup',
    tag: 'Cultural',
    title: 'College fest production',
    cls: 'sm:col-span-3 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1514533212735-5df27d970db0?w=900&auto=format&fit=crop&q=75',
    alt: 'LED wall',
    tag: 'LED',
    title: 'Indoor LED setup',
    cls: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&auto=format&fit=crop&q=75',
    alt: 'Wedding stage',
    tag: 'Wedding',
    title: 'Artistic Reception',
    cls: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/gallery/dj.png',
    alt: 'Professional DJ performance behind futuristic console',
    tag: 'DJ',
    title: 'Aurastic Resident Mix',
    cls: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&auto=format&fit=crop&q=75',
    alt: 'Corporate stage design',
    tag: 'Corporate',
    title: 'Brand Launch',
    cls: 'sm:col-span-3 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?w=1200&auto=format&fit=crop&q=75',
    alt: 'Stage fireworks',
    tag: 'Spectacle',
    title: 'SFX & Pyrotechnics',
    cls: 'sm:col-span-3 sm:row-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="work" className="py-20 sm:py-24 lg:py-[120px]">
      <div className="wrap">
        <SectionHead
          kicker="Recent & upcoming"
          title={
            <>
              The <span className="italic-serif text-gradient-magenta">work</span> that
              <br />
              speaks for us.
            </>
          }
          lede="A mix of culturals, concerts, weddings, and brand activations. Hover — they come alive."
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-6 gap-3 sm:gap-3.5"
          style={{ gridAutoRows: 'minmax(140px, auto)' }}
        >
          {ITEMS.map((it, i) => (
            <Reveal
              key={i}
              className={`${it.cls} aspect-[4/3] sm:aspect-auto`}
              delay={(i % 3) * 0.1}
              direction="up"
              distance={30}
            >
              <a
                href="#contact"
                className="group relative block h-full w-full rounded-[18px] sm:rounded-[20px] overflow-hidden border border-white/[0.10] bg-card"
              >
                <LiquidImage
                  src={it.src}
                  alt={it.alt}
                  className="absolute inset-0 w-full h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-transparent to-transparent opacity-80 mouse:group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-[2]" />
                <div className="absolute left-3 right-3 sm:left-4 sm:right-4 bottom-3 sm:bottom-4 translate-y-1 mouse:group-hover:translate-y-0 transition-transform duration-300 ease-out z-[3]">
                  <span className="block text-[10px] sm:text-[11px] font-medium text-violet-300 tracking-[0.12em] sm:tracking-[0.14em] uppercase mb-1">
                    {it.tag}
                  </span>
                  <div className="text-[12px] sm:text-[13px] font-semibold text-white">
                    {it.title}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
