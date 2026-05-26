'use client';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import type { ReactNode } from 'react';

interface PageShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function PageShell({ title, description, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-church-deep text-white">
      <Navbar />
      <section className="border-b border-white/10 bg-[#081630] px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">{title}</p>
          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">{description}</h1>
        </div>
      </section>
      <section className="bg-[#081630] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">{children}</div>
      </section>
      <Footer />
    </main>
  );
}
