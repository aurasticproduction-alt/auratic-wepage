'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHead from '@/components/ui/SectionHead';
import { gsap } from '@/lib/gsap';
import { useDevice } from '@/lib/useDevice';

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [fullyBuffered, setFullyBuffered] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const device = useDevice();

  // Serve appropriate size per device
  const videoSrc = device.isMobile
    ? '/videos/aurastic-logo-mobile.mp4'
    : '/videos/aurastic-logo.mp4';

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.muted = true;
    vid.defaultMuted = true;

    // Track buffering progress for a real loading bar
    const onProgress = () => {
      if (vid.buffered.length > 0 && vid.duration > 0) {
        const bufferedEnd = vid.buffered.end(vid.buffered.length - 1);
        const progress = (bufferedEnd / vid.duration) * 100;
        setLoadProgress(progress);

        // When 95%+ is buffered, mark as fully ready (allows smooth loop)
        if (progress >= 95) {
          setFullyBuffered(true);
        }
      }
    };

    const tryPlay = () => {
      // Only play when we have enough buffered
      if (!fullyBuffered && vid.readyState < 4) return;

      const p = vid.play();
      if (p !== undefined) {
        p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };

    // When browser says it can play through without needing to pause
    const onCanPlayThrough = () => {
      setFullyBuffered(true);
      setLoadProgress(100);
      const rect = vid.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) tryPlay();
    };

    // Stall handling — if it stalls, wait for buffer to refill
    const onWaiting = () => {
      setPlaying(false);
    };
    const onPlaying = () => {
      setPlaying(true);
    };

    vid.addEventListener('progress', onProgress);
    vid.addEventListener('canplaythrough', onCanPlayThrough);
    vid.addEventListener('waiting', onWaiting);
    vid.addEventListener('playing', onPlaying);
    vid.addEventListener('loadedmetadata', onProgress);

    // Intersection observer — play when visible, pause when not
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          vid.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(vid);

    // Force immediate aggressive loading
    vid.load();

    return () => {
      io.disconnect();
      vid.removeEventListener('progress', onProgress);
      vid.removeEventListener('canplaythrough', onCanPlayThrough);
      vid.removeEventListener('waiting', onWaiting);
      vid.removeEventListener('playing', onPlaying);
      vid.removeEventListener('loadedmetadata', onProgress);
    };
  }, [videoSrc, fullyBuffered]);

  // Scale-in on scroll
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 0.88, borderRadius: 48 },
        {
          scale: 1,
          borderRadius: 24,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 30%',
            scrub: true,
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="py-20 sm:py-24 lg:py-[120px]">
      <div className="wrap">
        <SectionHead
          kicker="Brand film"
          title={
            <>
              The Aurastic{' '}
              <span className="italic-serif text-gradient-magenta">identity</span> in motion.
            </>
          }
          lede="Our brand in 38 seconds — the mark, the energy, the aura. A taste of what we bring to your stage."
          className="mb-10 sm:mb-12"
        />

        <div
          ref={wrapRef}
          className="relative aspect-video overflow-hidden border border-white/[0.22] bg-deep cursor-pointer group"
          style={{ willChange: 'transform, border-radius' }}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            key={videoSrc}
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            playsInline
            // @ts-ignore iOS
            webkit-playsinline="true"
            preload="auto"
            poster="/videos/aurastic-logo-poster.jpg"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Real progress-bar loading state — shows actual buffer progress */}
          {!fullyBuffered && (
            <div className="absolute inset-0 grid place-items-center bg-deep/60 backdrop-blur-sm pointer-events-none">
              <div className="flex flex-col items-center gap-4 w-[200px]">
                <svg className="animate-spin text-violet-300" width={32} height={32} viewBox="0 0 24 24" fill="none">
                  <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2.5} opacity={0.25} />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
                </svg>
                <div className="w-full">
                  <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-400 to-magenta transition-all duration-300 ease-out"
                      style={{ width: `${loadProgress}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] tracking-[0.2em] uppercase text-ink-muted font-semibold">
                    <span>Buffering</span>
                    <span>{Math.round(loadProgress)}%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom gradient for control readability */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-void/60 via-transparent to-transparent" />

          {/* Play/pause button — fades in on hover or when paused */}
          <button
            onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.22] grid place-items-center mouse:hover:bg-violet-500/30 active:bg-violet-500/40 transition-all"
            style={{
              opacity: playing ? 0 : 1,
            }}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
                <rect x={6} y={5} width={4} height={14} rx={1} />
                <rect x={14} y={5} width={4} height={14} rx={1} />
              </svg>
            ) : (
              <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4l14 8-14 8V4z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
