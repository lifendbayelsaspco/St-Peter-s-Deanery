'use client';

import { motion } from 'framer-motion';
import { testimonies } from '@data/content';

export default function TestimonyCarousel() {
  return (
    <section className="bg-church-deep py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-gold">Testimonies</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Stories of faith, healing, and renewal</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonies.map((item, index) => (
            <motion.div
              key={`${item.author}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass"
            >
              <p className="text-lg leading-8 text-slate-100">“{item.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gold">{item.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
