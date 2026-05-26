import PageShell from '@components/PageShell';

export default function AdminEventsPage() {
  return (
    <PageShell title="Manage Events" description="Create and update upcoming church programs and announcements.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Publish new events, update details, and keep the church calendar current.</p>
      </div>
    </PageShell>
  );
}
