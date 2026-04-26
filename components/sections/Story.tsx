'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import SectionHead from '@/components/ui/SectionHead';

const CHAPTERS = [
  {
    kicker: 'Chapter 01',
    title: 'The Apprenticeship',
    content: `Long before the company had a name, the craft was already being practised. In school, while other students were on stage performing, Dwarakesh was discovering what happened around the stage — the LED visuals that lifted a dance, the audio mix that gave a performance its weight, the visual edit that turned a school annual day into something memorable. By the age of fourteen, he had a DSLR in his hand. By sixteen, he was self-taught in Filmora, the Adobe Creative Suite, and Adobe Audition. Photography, videography, audio mixing, and visual editing were not formal subjects he studied; they were instincts he developed because the work in front of him demanded them.`,
    meta: '1,000 small acts of figuring it out alone.'
  },
  {
    kicker: 'Chapter 02',
    title: 'The Convergence',
    content: `The choice to study Artificial Intelligence and Machine Learning was a deliberate one: the future of every creative industry would be shaped by intelligent systems, and the founder wanted to be on the side of the people building them, not just using them. During his first year of university, Dwarakesh purchased his first DJ console and began playing every event the campus offered. He hired his own speakers. He stood behind the console at every show because the only way to truly understand live audio is to live behind one.`,
    meta: 'Technologist meets Artist.'
  },
  {
    kicker: 'Chapter 03',
    title: 'The Crucible',
    content: `A major flagship festival in 2024 changed everything. As part of the core production team, Dwarakesh worked across three consecutive nights of massive concerts. Up close, for the first time, he saw what world-class event execution actually looked like. By the following year's edition, he was the console DJ across all three nights, operating L-Acoustics line arrays, a DiGiCo SD338 mixing console, and a GrandMA3 lighting desk. On the third and final night, he played his first 20,000-plus crowd.`,
    meta: 'That was the moment the apprenticeship ended.'
  },
  {
    kicker: 'Chapter 04',
    title: 'The Founding',
    content: `In the days following that milestone festival, a quiet realisation crystallised. Every skill Dwarakesh had collected over a decade — dance, photography, editing, audio mixing, visual design, DJing, live production, creative direction — were not separate crafts. They were one craft, waiting for one container. From April 2025, that container began to be built. The name — Aurastic, a coined word fusing Aura with the artistic, acoustic, aesthetic suffix. On 15 October 2025, on the founder’s birthday, Aurastic Productions was launched into the world.`,
    meta: 'One craft, one container.'
  },
  {
    kicker: 'Chapter 05',
    title: 'The Road Ahead',
    content: `The Aurastic story is still in its earliest pages. The next chapter is being written now — in every event delivered, in every client relationship deepened, in the technology platform being designed under the Aurastic AI umbrella that will, in time, scale this approach across cities. But the founding belief will not change. Events are art. Art deserves direction. And every event, regardless of size, deserves an aura.`,
    meta: 'A new kind of event company.'
  }
];

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="story" className="section-y-lg bg-void overflow-hidden">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 mb-20 lg:mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-violet-500/[0.03] border border-white/[0.08] backdrop-blur-sm shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
          >
             <div className="flex items-center gap-3 t-kicker mb-8">
              <span className="w-8 h-px bg-magenta/40" />
              <span>A Word Before You Begin</span>
            </div>
            
            <h3 className="t-display-3 mb-8 !leading-[1.2]">
              There is a difference between an event that happens, and an <span className="italic-serif text-gradient-magenta">event that is felt</span>.
            </h3>
            
            <div className="space-y-6 t-body text-ink-muted lg:text-[1.1rem] leading-[1.7]">
              <p>
                The first is a checklist completed. Vendors arrive on time. Sound is loud enough. Lights come on at the cue. 
                The event ends, and within a month, the memory of it begins to fade.
              </p>
              <p>
                The second is something else entirely. The first guest walks in and feels the room hold them. 
                The entire room was choreographed to land at exactly the right volume on exactly the right beat. 
                The audience leaves talking about a moment they cannot quite describe but cannot quite forget.
              </p>
              <p className="border-l-2 border-magenta/30 pl-6 py-2 italic font-medium text-ink">
                That feeling, intangible but unmistakable, is what we call an aura. <br />
                Aurastic exists to create the second kind.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] lg:aspect-[1/1.2] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] group"
          >
            <Image 
              src="/custom/story-atmosphere.png" 
              alt="Aurastic atmosphere" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-[2s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
               <div className="t-kicker !text-white/40 mb-2">Atmosphere</div>
               <div className="t-num text-3xl text-white/10">001</div>
            </div>
          </motion.div>
        </div>

        <SectionHead 
          kicker="The Story"
          title={<>The <span className="italic-serif text-gradient-magenta">Chapters</span> of Craft.</>}
          lede="Every brand has a moment of birth. Aurastic’s was a decade in the making."
        />

        <div ref={containerRef} className="relative mt-20">
          {CHAPTERS.map((chapter, index) => (
            <ChapterCard key={index} chapter={chapter} index={index} total={CHAPTERS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterCard({ chapter, index, total }: { chapter: typeof CHAPTERS[0]; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="sticky top-[15vh] mb-[15vh] last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="surface-card-strong p-8 sm:p-12 lg:p-16 grid lg:grid-cols-[0.4fr_1fr] gap-10 lg:gap-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="flex flex-col justify-between">
          <div>
            <div className="t-kicker !text-magenta mb-4">{chapter.kicker}</div>
            <h4 className="t-display-3 uppercase leading-[1.1]">{chapter.title}</h4>
          </div>
          <div className="hidden lg:block">
             <div className="t-meta !text-ink-muted uppercase tracking-[0.2em] mb-4">Focus</div>
             <p className="t-body italic-serif !text-magenta/80">{chapter.meta}</p>
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="t-body !text-[1.1rem] leading-[1.8] text-ink-muted whitespace-pre-wrap">
            {chapter.content}
          </div>
          <div className="lg:hidden mt-8 pt-8 border-t border-white/10">
             <p className="t-body italic-serif !text-magenta/80">{chapter.meta}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
