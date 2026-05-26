'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Weekly Worshippers', value: '1,200+' },
  { label: 'Active Ministries', value: '12' },
  { label: 'Prayer Requests', value: '4,500+' },
  { label: 'Community Programs', value: '28' }
];

export default function Stats() {
  return (
    <section className="bg-white/5 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-gold">Church by the numbers</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Our story in impact and growth</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-8 text-center shadow-glass"
            >
              <p className="text-4xl font-semibold text-gold">{stat.value}</p>
              <p className="mt-3 text-sm text-slate-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
