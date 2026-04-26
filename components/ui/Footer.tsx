'use client';

import Link from 'next/link';
import Image from 'next/image';

const COLS = [
  {
    title: 'Services',
    items: [
      { label: 'Audio system', href: '/#services' },
      { label: 'Lighting & LED', href: '/#services' },
      { label: 'Stage & truss', href: '/#services' },
      { label: 'SFX & pyro', href: '/#services' },
      { label: 'Media production', href: '/#services' },
      { label: 'Production management', href: '/#services' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/#about' },
      { label: 'Founder', href: '/#founder' },
      { label: 'The team', href: '/team' },
      { label: 'How we work', href: '/#process' },
      { label: 'Why Aurastic', href: '/#why' },
    ],
  },
  {
    title: 'Reach us',
    items: [
      { label: '+91 78458 56809', href: 'tel:+917845856809' },
      { label: 'aurasticproduction@gmail.com', href: 'mailto:aurasticproduction@gmail.com' },
      { label: '@aurastic_official', href: 'https://instagram.com/aurastic_official' },
      { label: 'Book an event', href: '/#contact' },
    ],
  },
];

const BUSINESS = [
  ['Trade name', 'AURASTIC (Sole Proprietorship)'],
  ['GSTIN', '33CSAPV8105K1ZJ'],
  ['SAC code', '998596'],
  ['Udyam / MSME', 'UDYAM-TN-24-0154140'],
];

export default function Footer() {
  return (
    <footer
      className="pt-20 sm:pt-28 lg:pt-[120px] pb-10 border-t border-white/[0.08] bg-gradient-to-b from-transparent to-void"
      style={{ paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom))' }}
    >
      <div className="wrap">
        <div className="grid gap-12 sm:gap-14 grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16 pb-12 sm:pb-14 border-b border-white/[0.08]">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="#top"
              className="inline-flex items-center"
              aria-label="Aurastic Productions"
            >
              <Image
                src="/brand/aurastic-white.png"
                alt="Aurastic Productions"
                width={300}
                height={72}
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </Link>
            <p className="mt-5 sm:mt-6 t-body max-w-[36ch]">
              An artistic event production company in South India. Every event deserves
              an aura — we create it.
            </p>
            <p className="mt-4 t-meta max-w-[40ch]">
              D.2/238-C, Ground Floor, TSP Camp Road, Veerapuram, Chennai, Tiruvallur
              District, Tamil Nadu — 600055.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h5 className="t-kicker !text-violet-300 mb-5 sm:mb-6">{col.title}</h5>
              <ul className="space-y-3 sm:space-y-3.5">
                {col.items.map((it) => {
                  // Phone number uses Exo (numerical/data) per brand spec
                  const isPhone = it.href.startsWith('tel:');
                  return (
                    <li key={it.label}>
                      <a
                        href={it.href}
                        target={it.href.startsWith('http') ? '_blank' : undefined}
                        rel={it.href.startsWith('http') ? 'noopener' : undefined}
                        className={`inline-block text-ink-muted text-[13.5px] sm:text-[14.5px] mouse:hover:text-ink transition break-all ${
                          isPhone ? 'font-num tracking-[0.02em]' : ''
                        }`}
                      >
                        {it.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>


        <div className="flex flex-wrap justify-between items-center gap-5 pt-7 text-[12px] sm:text-[13px] text-ink-faint">
          <div>© 2025 – 2026 Aurastic Productions. All rights reserved.</div>
          <div className="flex gap-2.5">
            {[
              {
                href: 'https://instagram.com/aurastic_official',
                label: 'Instagram',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <rect x={3} y={3} width={18} height={18} rx={5} />
                    <circle cx={12} cy={12} r={4} />
                    <circle cx={17.5} cy={6.5} r={1} fill="currentColor" />
                  </svg>
                ),
              },
              {
                href: 'https://wa.me/917845856809',
                label: 'WhatsApp',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.3c1.5.8 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3.9.9-3.2-.2-.3C3.5 15 3 13.5 3 12 3 7.1 7.1 3 12 3s9 4.1 9 9-4.1 8.3-9 8.3Z" />
                  </svg>
                ),
              },
              {
                href: 'mailto:aurasticproduction@gmail.com',
                label: 'Email',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener' : undefined}
                aria-label={s.label}
                className="w-11 h-11 grid place-items-center rounded-[12px] border border-white/[0.18] text-ink-muted mouse:hover:text-white mouse:hover:border-violet-500 mouse:hover:bg-violet-500/10 active:bg-violet-500/20 transition [&>svg]:w-4 [&>svg]:h-4"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
