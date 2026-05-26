import PageShell from '@components/PageShell';

const leaders = [
  { name: 'Rt. Rev. Canon Samuel Ade', role: 'Dean/Vicar' },
  { name: 'Rev. Mrs. Chinyere', role: 'Assistant Vicar' },
  { name: 'Mr. John Emeka', role: 'Choir Director' },
  { name: 'Mrs. Grace Jonah', role: 'Women Ministry Leader' }
];

export default function ClergyPage() {
  return (
    <PageShell title="Clergy & Leadership" description="Meet our pastors, ministry leaders, and church team.">
      <div className="grid gap-6 md:grid-cols-2">
        {leaders.map((leader) => (
          <div key={leader.name} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <h3 className="text-2xl font-semibold text-white">{leader.name}</h3>
            <p className="mt-3 text-slate-300">{leader.role}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
