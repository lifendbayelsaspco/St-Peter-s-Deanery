import PageShell from '@components/PageShell';

export default function AdminMembersPage() {
  return (
    <PageShell title="Manage Members" description="Review church membership, roles, and registration details.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Maintain member profiles, approve registrations, and manage access for church community features.</p>
      </div>
    </PageShell>
  );
}
