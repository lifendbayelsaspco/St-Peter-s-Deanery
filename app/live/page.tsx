import PageShell from '@components/PageShell';

export default function LivePage() {
  return (
    <PageShell title="Live Streaming" description="Watch worship services live and catch replay archives.">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
          <div className="aspect-video rounded-3xl bg-slate-900" />
          <div className="mt-6 space-y-4 text-slate-300">
            <p>Sunday worship streams every week with prayer, music, and the daily scripture reflection.</p>
            <p>Follow our YouTube and Facebook channels for scheduled livestream notifications and easy sharing.</p>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-church-deep/80 p-8 shadow-glass">
          <h2 className="text-2xl font-semibold text-white">Latest Streams</h2>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li className="rounded-3xl border border-white/10 bg-black/20 p-4">Sunday Holy Communion • Replay available</li>
            <li className="rounded-3xl border border-white/10 bg-black/20 p-4">Midweek Prayer Service • Watch again</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
