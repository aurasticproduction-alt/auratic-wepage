'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
  priority?: boolean;
};

export default function ParallaxImage({
  src,
  alt,
  className,
  intensity = 80,
  priority = false,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { y: -intensity / 2, scale: 1.15 },
        {
          y: intensity / 2,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }, wrap);

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div ref={wrapRef} className={cn('overflow-hidden relative', className)}>
      <div ref={imgRef} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
