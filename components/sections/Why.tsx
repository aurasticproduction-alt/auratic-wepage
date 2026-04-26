'use client';

import { motion } from 'framer-motion';
import SectionHead from '@/components/ui/SectionHead';

const REASONS = [
  {
    title: 'Artistic Direction',
    desc: 'We do not just provide equipment; we provide direction. Every light cue and audio mix is treated as a contribution to the event’s artistic aura.'
  },
  {
    title: 'Unified Production',
    desc: 'One team handling audio, lighting, LED, stage, SFX, and media coverage. Zero vendor friction. One quotation. One accountability.'
  },
  {
    title: 'Technical Versatility',
    desc: 'From playing for a crowd of 20,000+ to managing the hospitality of a corporate VIP, our range of execution is wide and tested.'
  },
  {
    title: 'Hands-on Leadership',
    desc: 'Operating from the console, not just the office. Our leadership understands the equipment as deeply as the business.'
  },
  {
    title: 'Precision Framework',
    desc: 'Our 60/30/10 commitment ensures that by the time show day arrives, the "event that is felt" is already engineered.'
  },
  {
    title: 'AI-Enhanced Future',
    desc: 'Leveraging data-driven systems to optimise acoustics and visual choreography, ensuring every venue sounds and looks its absolute best.'
  }
];

export default function Why() {
  return (
    <section id="why" className="section-y-lg bg-void border-t border-white/5">
      <div className="wrap">
        <SectionHead 
          kicker="Why Us"
          title={<>The Aurastic <span className="italic-serif text-gradient-magenta">Difference</span>.</>}
          lede="Most companies offer equipment. We offer an execution. Here are the six reasons why clients choose the Aurastic Aura."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] hover:bg-violet-500/[0.04] hover:border-magenta/20 transition-all group"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="w-1.5 h-1.5 rounded-full bg-magenta/60 group-hover:scale-150 transition-transform" />
                <span className="t-num text-magenta/20 group-hover:text-magenta/40 transition-colors">0{i+1}</span>
              </div>
              <h4 className="t-display-3 uppercase mb-6 leading-[1.1] text-ink group-hover:text-magenta transition-colors">{r.title}</h4>
              <p className="t-body !text-ink-muted leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
