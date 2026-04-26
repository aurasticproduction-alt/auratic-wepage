'use client';

import { motion } from 'framer-motion';
import SectionHead from '@/components/ui/SectionHead';

const SECTORS = [
  {
    id: '01',
    title: 'Professional Audio System',
    desc: 'Line arrays, subwoofers, stage monitors, digital mixing consoles, microphones, DJ setups, signal distribution, qualified audio engineers.'
  },
  {
    id: '02',
    title: 'Intelligent Lighting System',
    desc: 'Moving heads, LED PARs, blinders, follow spots, DMX consoles, haze and smoke, truss-mounted rigs, certified lighting programmers.'
  },
  {
    id: '03',
    title: 'LED Visual Experience',
    desc: 'Main-stage LED walls, side and delay screens, processors, media servers, fibre cabling, visual jockeys, LED technical team.'
  },
  {
    id: '04',
    title: 'Stage Truss & Fabrication',
    desc: 'Stage platforms, risers, carpeting, VIP red carpets, goal-post and box truss, backdrop frameworks, podiums, structural engineering.'
  },
  {
    id: '05',
    title: 'Special Effects & Pyrotechnics',
    desc: 'Cold pyro, CO2 jets, sparkulars, flame effects, confetti, fog and smoke effects — designed, timed, and permitted to event scale.'
  },
  {
    id: '06',
    title: 'Artists & Celebrity Management',
    desc: 'Artist booking coordination, celebrity handling, green-room and hospitality management, technical riders, stage-entry choreography.'
  },
  {
    id: '07',
    title: 'Venue Infrastructure & Utilities',
    desc: 'Generators and fuel, power distribution, cabling, venue illumination, barricading, electrical safety, load management.'
  },
  {
    id: '08',
    title: 'Décor & Aesthetics',
    desc: 'Welcome arches, banners and standees, photo booths, LED-theme backdrops, stage-bottom branding, floral and lamp décor, event creatives.'
  },
  {
    id: '09',
    title: 'Event Media Production & Coverage',
    desc: 'Photography (candid + traditional), cinematic videography, drone coverage, live video mixing, highlight reels, full aftermovies.'
  },
  {
    id: '10',
    title: 'Logistics & Operations',
    desc: 'Equipment and crew transportation, loading and unloading, setup and dismantling, technician deployment, contingency operations.'
  },
  {
    id: '11',
    title: 'Permissions, Licensing & Compliance',
    desc: 'Venue NOCs, fire and safety clearances, music licences, corporate access permissions, regulatory documentation.'
  },
  {
    id: '12',
    title: 'Production Management & Execution',
    desc: 'Show flow planning, vendor coordination, artist synchronisation, technical direction, live cue management, on-ground command.'
  }
];

export default function DetailedServices() {
  return (
    <section id="services" className="section-y-lg bg-void">
      <div className="wrap">
        <SectionHead 
          kicker="Capabilities"
          title={<>Twelve Sectors. <br /><span className="italic-serif text-gradient-magenta">One Result</span>.</>}
          lede="Aurastic operates across twelve fully integrated service sectors covering the entire spectrum of professional event production. One team, one accountability."
          className="lg:mb-32"
          displaySize="1"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] mt-16 sm:mt-20">
          {SECTORS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-void p-8 sm:p-10 lg:p-12 flex flex-col gap-6 group hover:bg-violet-500/[0.02] transition-colors"
            >
              <div className="flex justify-between items-start">
                <span className="t-num text-3xl sm:text-4xl text-white/10 group-hover:text-magenta/20 transition-colors">
                  {s.id}
                </span>
                <span className="w-10 h-px bg-white/10 group-hover:bg-magenta/40 transition-colors mt-5" />
              </div>
              <div>
                <h4 className="t-h4 uppercase mb-4 group-hover:text-magenta transition-colors">{s.title}</h4>
                <p className="t-body !text-ink-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 lg:mt-40 grid sm:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-violet-500/[0.05] to-transparent border border-white/[0.08]"
          >
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-white/10 grid place-items-center text-violet-300">
                   <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M3 21h18M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M5 21V7m14 0v14M9 7v14M15 7v14" />
                   </svg>
                </div>
                <h5 className="t-h4 uppercase">Institutional & Corporate</h5>
             </div>
             <ul className="space-y-4">
               {[
                 'College culturals & flagship fests',
                 'Annual days & inaugurations',
                 'Corporate product launches',
                 'Conferences & conclaves',
                 'Brand activations & roadshows'
               ].map((item) => (
                 <li key={item} className="flex items-center gap-4 t-body !text-ink-muted group">
                   <span className="w-1.5 h-1.5 rounded-full bg-magenta/40 group-hover:bg-magenta transition-colors" />
                   {item}
                 </li>
               ))}
             </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-magenta/[0.05] to-transparent border border-white/[0.08]"
          >
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-magenta/10 border border-white/10 grid place-items-center text-magenta">
                   <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                   </svg>
                </div>
                <h5 className="t-h4 uppercase">Private & Celebratory</h5>
             </div>
             <ul className="space-y-4">
               {[
                 'Weddings & receptions',
                 'Sangeet & haldi nights',
                 'Birthday parties & anniversaries',
                 'DJ nights & house parties',
                 'Flashmobs & proposals'
               ].map((item) => (
                 <li key={item} className="flex items-center gap-4 t-body !text-ink-muted group">
                   <span className="w-1.5 h-1.5 rounded-full bg-violet-400/40 group-hover:bg-violet-400 transition-colors" />
                   {item}
                 </li>
               ))}
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
