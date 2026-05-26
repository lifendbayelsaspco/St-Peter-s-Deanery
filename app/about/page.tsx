import PageShell from '@components/PageShell';

export default function AboutPage() {
  return (
    <PageShell title="About the Church" description="A community rooted in Anglican tradition and local mission.">
      <div className="space-y-8 text-slate-200">
        <p>St. Peter's Deanery Anglican Church is a worshiping family in the heart of Yenagoa, grounded in prayer, service, and spiritual formation.</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p className="mt-4">To share the love of Christ through worship, discipleship, outreach, and a welcoming church home for all.</p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
            <p className="mt-4">To build a strong Anglican community where faith, family, and compassion flourish throughout Yenagoa.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
