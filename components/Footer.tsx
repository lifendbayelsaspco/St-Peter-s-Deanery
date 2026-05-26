'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@data/site';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-church-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gold">{siteConfig.name}</h2>
          <p className="max-w-md text-sm text-slate-300">A warm Anglican community in Yenagoa focused on worship, spiritual growth, and service.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">Stay Connected</h3>
          <p className="text-sm text-slate-300">Subscribe for prayer updates, livestream notices, and church events.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="https://youtube.com" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">YouTube</Link>
            <Link href="https://facebook.com" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">Facebook</Link>
            <Link href="https://wa.me" className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">WhatsApp</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {year} {siteConfig.name}. Built for spiritual connection and community impact.
      </div>
    </footer>
  );
}
