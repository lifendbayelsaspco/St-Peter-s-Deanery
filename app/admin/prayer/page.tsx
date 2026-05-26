import PageShell from '@components/PageShell';

export default function AdminPrayerPage() {
  return (
    <PageShell title="Manage Prayer Requests" description="Review and approve incoming prayer requests.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Approve prayer submissions, mark requests as prayed for, and send encouragement to members.</p>
      </div>
    </PageShell>
  );
}
