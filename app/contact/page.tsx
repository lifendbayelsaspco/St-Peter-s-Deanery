import PageShell from '@components/PageShell';

export default function ContactPage() {
  return (
    <PageShell title="Contact" description="Reach out for worship, membership, and church support.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
          <h2 className="text-2xl font-semibold text-white">Visit Us</h2>
          <p className="mt-4 text-slate-300">12 Church Lane, Yenagoa, Bayelsa State</p>
          <p className="mt-4 text-slate-300">Email: hello@stpetersdeanery.org</p>
          <p className="mt-4 text-slate-300">Phone: +234 800 123 4567</p>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
          <h2 className="text-2xl font-semibold text-white">Send a Message</h2>
          <form className="mt-6 grid gap-4">
            <input className="w-full rounded-full border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Your name" />
            <input className="w-full rounded-full border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Email address" />
            <textarea className="h-40 w-full rounded-[32px] border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Message" />
            <button className="w-full rounded-full bg-gold px-6 py-4 font-semibold text-church-deep transition hover:bg-white">Send Message</button>
          </form>
        </div>
      </div>
    </PageShell>
  );
}
