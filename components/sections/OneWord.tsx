'use client';

import { motion } from 'framer-motion';

export default function OneWord() {
  return (
    <section className="py-24 sm:py-32 lg:py-48 bg-void overflow-hidden">
      <div className="wrap">
        <div className="flex flex-col items-center text-center">
           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="t-kicker !text-magenta mb-12"
          >
            The Final Word
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="t-display-1 leading-[0.9] flex flex-col"
          >
            <span>An Artistic</span>
            <span className="font-cerena text-gradient-magenta normal-case tracking-[0.04em] mt-2 sm:mt-4 text-[0.62em]">Production</span>
          </motion.h2>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 0.5 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="mt-12 sm:mt-14 w-16 h-px bg-white/40"
          />

        </div>
      </div>
    </section>
  );
}
