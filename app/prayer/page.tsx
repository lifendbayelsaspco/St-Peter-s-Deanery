import PageShell from '@components/PageShell';

export default function PrayerPage() {
  return (
    <PageShell title="Prayer Request" description="Submit a request and receive prayer from our church family.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p className="mb-6">Share your prayer needs and our prayer team will lift them up in worship and intercession.</p>
        <form className="grid gap-6">
          <input className="w-full rounded-full border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Your name" />
          <input className="w-full rounded-full border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Email address" />
          <textarea className="h-40 w-full rounded-[32px] border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Tell us how we can pray for you" />
          <button className="w-full rounded-full bg-gold px-6 py-4 font-semibold text-church-deep transition hover:bg-white">Submit Prayer Request</button>
        </form>
      </div>
    </PageShell>
  );
}
