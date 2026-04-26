'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AmbientAudio — floating "enable sound" button in the bottom corner.
 * When user clicks, starts a subtle generative ambient drone using Web Audio API.
 * No external audio files needed. Respects user preference.
 */
export default function AmbientAudio() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ oscs: OscillatorNode[]; gains: GainNode[]; master: GainNode } | null>(null);

  // Show the button after user has scrolled a bit (not intrusive on first paint)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = async () => {
    if (playing) {
      // Fade out and stop
      if (nodesRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        const now = ctx.currentTime;
        nodesRef.current.master.gain.cancelScheduledValues(now);
        nodesRef.current.master.gain.setValueAtTime(nodesRef.current.master.gain.value, now);
        nodesRef.current.master.gain.linearRampToValueAtTime(0, now + 0.4);
        setTimeout(() => {
          try {
            nodesRef.current?.oscs.forEach((o) => o.stop());
            audioCtxRef.current?.close();
          } catch {}
          audioCtxRef.current = null;
          nodesRef.current = null;
        }, 450);
      }
      setPlaying(false);
    } else {
      // Start
      try {
        // @ts-ignore - webkit prefix fallback
        const AC = window.AudioContext || (window as any).webkitAudioContext;
        const ctx: AudioContext = new AC();
        audioCtxRef.current = ctx;

        // Master gain — very quiet, ambient
        const master = ctx.createGain();
        master.gain.setValueAtTime(0, ctx.currentTime);
        master.connect(ctx.destination);

        // Drone oscillators — low root + perfect fifth + octave for ambient pad
        const freqs = [55, 82.5, 110]; // A1, E2, A2
        const oscs: OscillatorNode[] = [];
        const gains: GainNode[] = [];

        freqs.forEach((f, i) => {
          const osc = ctx.createOscillator();
          osc.type = i === 0 ? 'sine' : 'triangle';
          osc.frequency.value = f;

          // Slow LFO for shimmer
          const lfo = ctx.createOscillator();
          lfo.frequency.value = 0.1 + i * 0.07;
          const lfoGain = ctx.createGain();
          lfoGain.gain.value = 0.8 + i * 0.3;
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          const gain = ctx.createGain();
          gain.gain.value = 0.15 - i * 0.04;

          // Filter for softness
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.value = 800;
          filter.Q.value = 1;

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(master);
          osc.start();

          oscs.push(osc);
          gains.push(gain);
        });

        nodesRef.current = { oscs, gains, master };

        // Fade in
        master.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.2);
        setPlaying(true);
      } catch (err) {
        console.warn('Audio failed:', err);
      }
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      try {
        nodesRef.current?.oscs.forEach((o) => o.stop());
        audioCtxRef.current?.close();
      } catch {}
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={toggle}
          className="fixed bottom-6 left-6 z-[100] group flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-void/80 backdrop-blur-md border border-white/[0.15] mouse:hover:border-violet-500/50 mouse:hover:bg-void/95 transition"
          aria-label={playing ? 'Mute ambient audio' : 'Play ambient audio'}
        >
          {/* Animated EQ icon when playing, speaker when off */}
          <span className="flex items-end gap-[2px] h-4 w-4">
            {playing ? (
              [0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-[3px] bg-magenta rounded-sm"
                  animate={{ height: ['30%', '90%', '30%'] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))
            ) : (
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="text-violet-300">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1={23} y1={9} x2={17} y2={15} />
                <line x1={17} y1={9} x2={23} y2={15} />
              </svg>
            )}
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-ink-muted mouse:group-hover:text-ink transition">
            {playing ? 'Aura on' : 'Sound'}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
