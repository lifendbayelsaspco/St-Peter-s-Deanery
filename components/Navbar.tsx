'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@data/site';
import { useState } from 'react';

const navItems = siteConfig.navigation;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-church-deep/80 border-b border-white/10 shadow-glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="text-lg font-semibold tracking-[0.18em] uppercase text-gold">
          {siteConfig.name}
        </Link>
        <button
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
        >
          Menu
          <span>{open ? '✕' : '☰'}</span>
        </button>
        <nav className={`fixed inset-x-0 top-20 origin-top transform bg-church-deep/95 p-6 transition-all duration-300 md:static md:block md:bg-transparent md:p-0 ${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 md:opacity-100'}`}>
          <ul className="space-y-3 text-white md:flex md:space-y-0 md:space-x-6 md:text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-full px-4 py-2 transition hover:bg-gold/15 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="inline-flex items-center rounded-full bg-gold px-4 py-2 text-church-deep transition hover:bg-white hover:text-church-deep">
                Connect
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
