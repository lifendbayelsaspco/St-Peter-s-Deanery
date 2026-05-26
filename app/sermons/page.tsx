import PageShell from '@components/PageShell';
import { sermons } from '@data/content';
import Link from 'next/link';

export default function SermonsPage() {
  return (
    <PageShell title="Sermons" description="Browse audio, video, and message series from our teaching team.">
      <div className="grid gap-6 md:grid-cols-2">
        {sermons.map((sermon) => (
          <div key={sermon.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <h3 className="text-2xl font-semibold text-white">{sermon.title}</h3>
            <p className="mt-3 text-slate-300">{sermon.preacher} • {sermon.date}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#" className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-church-deep transition hover:bg-white">Watch</Link>
              <Link href="#" className="rounded-full border border-white/20 px-5 py-3 text-sm transition hover:border-gold">Download</Link>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
