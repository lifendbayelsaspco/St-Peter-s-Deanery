import PageShell from '@components/PageShell';
import { ministries } from '@data/content';

export default function MinistriesPage() {
  return (
    <PageShell title="Ministries & Departments" description="Discover our active ministries and how to get involved.">
      <div className="grid gap-6 md:grid-cols-2">
        {ministries.map((ministry) => (
          <div key={ministry.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <h3 className="text-2xl font-semibold text-white">{ministry.title}</h3>
            <p className="mt-3 text-slate-300">{ministry.description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
