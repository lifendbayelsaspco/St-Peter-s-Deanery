'use client';

import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Stats from '@components/Stats';
import TestimonyCarousel from '@components/TestimonyCarousel';
import NewsletterForm from '@components/NewsletterForm';
import { ministries, events, sermons } from '@data/content';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="bg-[#081630] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-gold">From the Dean</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A welcome message from our Vicar</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            We invite you to worship with us, grow in faith, and partner with us for spiritual renewal in Yenagoa and beyond. Our church is a place of grace, community, and purpose.
          </p>
        </div>
      </section>
      <section className="bg-church-deep py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-gold">Upcoming Events</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Worship, prayer, and community gatherings</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <motion.article key={event.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
                <p className="text-sm uppercase tracking-[0.24em] text-gold">{event.date}</p>
                <h3 className="mt-4 text-xl font-semibold">{event.title}</h3>
                <p className="mt-3 text-slate-300">{event.summary}</p>
                <Link href={event.href} className="mt-6 inline-flex text-gold transition hover:text-white">
                  View event details →
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#081630] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-gold">Latest Sermons</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Refresh your faith with thoughtful teaching</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sermons.map((sermon) => (
              <motion.div key={sermon.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
                <h3 className="text-2xl font-semibold">{sermon.title}</h3>
                <p className="mt-3 text-slate-300">{sermon.preacher} • {sermon.date}</p>
                <Link href={sermon.href} className="mt-6 inline-flex text-gold transition hover:text-white">
                  Listen now →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white/5 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Ministries & departments</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Grow spiritually through our ministries</h2>
              <p className="mt-6 max-w-xl text-slate-300">Our church offers youth ministry, women ministry, choir ministry, and Bible study resources for every season of life.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ministries.map((ministry) => (
                <Link
                  key={ministry.title}
                  href={ministry.href}
                  className="rounded-[32px] border border-white/10 bg-church-deep/80 p-6 transition hover:border-gold/60 hover:bg-white/5"
                >
                  <h3 className="text-xl font-semibold text-white">{ministry.title}</h3>
                  <p className="mt-3 text-slate-300">{ministry.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <section className="bg-[#081630] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Livestream</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Join our live worship services from anywhere</h2>
              <p className="mt-6 text-slate-300">Watch our Sunday services and special programs through YouTube or Facebook Live with scheduled reminders and replay access.</p>
              <Link href="/live" className="mt-8 inline-flex rounded-full bg-gold px-7 py-4 text-sm font-semibold text-church-deep transition hover:bg-white">
                View Livestream
              </Link>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/40">
              <div className="aspect-video bg-slate-900/80 p-8">
                <p className="text-slate-400">Live preview</p>
                <div className="mt-6 h-full rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                  <div className="flex h-full items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 text-center text-slate-300">Livestream embed placeholder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonyCarousel />
      <section className="bg-church-deep py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-glass">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Give online</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Support the mission with a secure donation</h2>
                <p className="mt-6 max-w-xl text-slate-300">Partner with us for tithe, offering, thanksgiving, and building projects. All contributions help strengthen ministry in our church family.</p>
              </div>
              <div className="space-y-4">
                <Link href="/donate" className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold text-church-deep transition hover:bg-white">
                  Donate Now
                </Link>
                <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-4 text-sm transition hover:border-gold hover:text-gold">
                  Prayer & Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#081630] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-glass">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Newsletter</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Receive updates for services, events, and prayer requests</h2>
                <p className="mt-6 max-w-xl text-slate-300">Subscribe to receive our weekly newsletter, livestream announcements, and devotionals.</p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
