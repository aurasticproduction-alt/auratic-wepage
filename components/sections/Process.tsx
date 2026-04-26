'use client';

import { motion } from 'framer-motion';
import SectionHead from '@/components/ui/SectionHead';

const PHASES = [
  {
    percentage: '60%',
    title: 'Pre-Production',
    kicker: 'Phase 01',
    desc: 'Requirement gathering, site recce, concept design, vendor locking, final quotation, permissions and compliance.',
    insight: 'Sixty percent of an event is determined before anyone arrives at the venue.',
    bullets: ['Concept & design approval', 'Final quotation acceptance', '50% advance']
  },
  {
    percentage: '30%',
    title: 'Production',
    kicker: 'Phase 02',
    desc: 'Setup, technical rehearsal, live execution, on-ground command, real-time problem solving, invisible direction.',
    insight: 'The work the audience never sees, holding the work they do.',
    bullets: ['Final run-through approval', 'Technical cue lock', 'Live execution']
  },
  {
    percentage: '10%',
    title: 'Post-Production',
    kicker: 'Phase 03',
    desc: 'Dismantling, venue handover, edited media delivery, final invoicing, structured client feedback.',
    insight: 'Closure is as artistic as the opening.',
    bullets: ['Final media confirmation', 'Handover completion', 'Event closure']
  }
];

export default function Process() {
  return (
    <section id="process" className="section-y-lg bg-void">
      <div className="wrap">
        <SectionHead 
          kicker="The Framework"
          title={<>Precision is not an <span className="italic-serif text-gradient-magenta">Accident</span>.</>}
          lede="Every Aurastic event is delivered through a structured three-phase framework. We invest heavily in pre-production because an hour before show day prevents ten hours of friction on it."
        />

        <div className="mt-20 space-y-8">
          {PHASES.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative surface-card p-1"
            >
              <div className="p-8 sm:p-12 grid lg:grid-cols-[0.5fr_1fr_0.6fr] gap-12 lg:gap-20 items-center">
                {/* Visual Number */}
                <div className="flex flex-col">
                  <span className="t-display-1 text-[80px] sm:text-[100px] leading-none text-white/5 group-hover:text-magenta/10 transition-colors">
                    {phase.percentage}
                  </span>
                  <div className="t-kicker !text-magenta mt-4">{phase.kicker}</div>
                  <h4 className="t-display-3 uppercase mt-2">{phase.title}</h4>
                </div>

                {/* Description */}
                <div>
                  <p className="t-body !text-ink leading-relaxed mb-6">
                    {phase.desc}
                  </p>
                  <p className="t-meta italic-serif !text-ink-muted">
                    {phase.insight}
                  </p>
                </div>

                {/* Sign-off bullets */}
                <div className="border-l border-white/10 pl-8 lg:pl-12">
                   <div className="t-kicker !text-ink-muted mb-6">Sign-off requirements</div>
                   <ul className="space-y-4">
                     {phase.bullets.map((b, bi) => (
                       <li key={bi} className="flex items-center gap-3 t-meta !text-ink font-medium">
                         <div className="w-1.5 h-1.5 rounded-full bg-magenta/40" />
                         {b}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
