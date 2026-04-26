'use client';

import { ReactNode } from 'react';
import Reveal from '@/components/motion/Reveal';

type Props = {
  kicker: string;
  title: ReactNode;
  lede?: string;
  className?: string;
  /** "split" (default) puts title left, lede right; "center" stacks centered */
  layout?: 'split' | 'center';
  displaySize?: '1' | '2';
};

/**
 * Shared section header — kicker + H2 + lede paragraph.
 * Editorial scale: never larger than display-2; sits below the Hero in hierarchy.
 */
export default function SectionHead({
  kicker,
  title,
  lede,
  className = '',
  layout = 'split',
  displaySize = '2',
}: Props) {
  const displayClass = `t-display-${displaySize}`;
  if (layout === 'center') {
    return (
      <Reveal className={className}>
        <div className="max-w-[58ch] mx-auto text-center mb-12 sm:mb-14 lg:mb-20">
          <Kicker text={kicker} center />
          <h2 className={`${displayClass} mt-5 sm:mt-6 uppercase`}>{title}</h2>
          {lede && <p className="t-lede mt-5 sm:mt-6 max-w-[52ch] mx-auto">{lede}</p>}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className={className}>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-end mb-12 sm:mb-14 lg:mb-20">
        <div>
          <Kicker text={kicker} />
          <h2 className={`${displayClass} mt-4 sm:mt-5 max-w-[18ch] uppercase`}>{title}</h2>
        </div>
        {lede && (
          <p className="t-lede max-w-[44ch] lg:justify-self-end lg:pb-2">
            {lede}
          </p>
        )}
      </div>
    </Reveal>
  );
}

function Kicker({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 t-kicker ${center ? 'justify-center' : ''}`}
    >
      <span className="w-7 h-px bg-violet-400/70" />
      <span>{text}</span>
    </div>
  );
}
