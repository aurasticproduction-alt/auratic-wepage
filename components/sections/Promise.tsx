'use client';

import { motion } from 'framer-motion';
import SectionHead from '@/components/ui/SectionHead';

const PROMISES = [
  {
    target: 'To the Client',
    lede: 'Every client will walk away feeling:',
    items: [
      { t: 'Stress-free', d: 'Hand the event to us and sleep through the night before.' },
      { t: 'Impressed', d: 'We exceed the brief; we do not merely meet it.' },
      { t: 'Surprised', d: 'Moments and details you never thought to ask for.' },
      { t: 'Inside the Aura', d: 'The mood and energy held from first guest to last light.' }
    ]
  },
  {
    target: 'To the Audience',
    lede: 'Every guest inside an Aurastic room will feel:',
    items: [
      { t: 'Goosebumps', d: 'A physical response to a moment designed to land.' },
      { t: 'Part of something bigger', d: 'Not a spectator, but inside the experience.' },
      { t: 'A "wow" moment', d: 'At least one engineered beat that forces focus.' },
      { t: '"This is different"', d: 'A visible sense that this is above industry standard.' }
    ]
  }
];

const CRAFT = [
  'Full site recce always conducted before the event.',
  'Sound, lighting, and LED checks at professional standards.',
  'Setup completed on schedule, with buffer time.',
  'Theme-based lighting cues locked at rehearsal.',
  'Client kept in the loop at every major milestone.'
];

export default function Promise() {
  return (
    <section id="promise" className="section-y-lg bg-void">
      <div className="wrap">
        <SectionHead 
          kicker="The Promise"
          title={<>The Experiential <span className="italic-serif text-gradient-magenta">Contract</span>.</>}
          lede="The Promise is what every client and every audience is entitled to, regardless of event size, regardless of budget."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mt-20">
          {PROMISES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 sm:p-14 rounded-[3rem] bg-violet-500/[0.02] border border-white/[0.08]"
            >
               <h4 className="t-display-3 uppercase mb-4">{p.target}</h4>
               <p className="t-meta !text-ink mb-12 opacity-60 italic-serif text-lg">{p.lede}</p>
               
               <div className="space-y-8">
                  {p.items.map((item, ii) => (
                    <div key={ii} className="group">
                       <h5 className="t-kicker !text-magenta mb-2 group-hover:translate-x-1 transition-transform">{item.t}</h5>
                       <p className="t-body !text-ink-muted leading-relaxed">{item.d}</p>
                    </div>
                  ))}
               </div>
            </motion.div>
          ))}
        </div>

        {/* The Craft Commitments */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 p-10 sm:p-16 border-t border-white/5"
        >
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-12">
             <div className="t-h4 uppercase !text-magenta leading-[1.1]">
               To the Craft:<br />
               <span className="text-white/40">Operational non-negotiables.</span>
             </div>
             <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {CRAFT.map((c, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="t-num text-magenta/40 shrink-0 text-xl">{i+1}</span>
                    <p className="t-meta !text-ink leading-relaxed">{c}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
