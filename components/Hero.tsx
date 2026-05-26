'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@data/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_55%),linear-gradient(180deg,_rgba(11,22,65,0.95),_rgba(11,22,65,0.85))] text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547149604-27b4d6adf5c1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30" />
      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col justify-center px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="mb-6 inline-flex rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-sm tracking-[0.24em] text-gold">Welcome to St. Peter's Deanery</span>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            A modern Anglican church home for worship, prayer, and service in Yenagoa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
            Join our inspiring community for Sunday services, ministries, livestreams, and resources designed to strengthen faith.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/live" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-sm font-semibold text-church-deep transition hover:bg-white">
              Watch Live
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm transition hover:border-gold hover:text-gold">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
