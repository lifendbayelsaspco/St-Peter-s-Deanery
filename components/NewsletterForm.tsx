'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 sm:grid-cols-[1fr_auto]">
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="rounded-full border border-white/10 bg-transparent px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
      <button type="submit" className="rounded-full bg-gold px-6 py-4 font-semibold text-church-deep transition hover:bg-white">
        {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && <p className="text-sm text-green-300">Thank you! Check your inbox.</p>}
      {status === 'error' && <p className="text-sm text-rose-300">Something went wrong. Please try again.</p>}
    </form>
  );
}
