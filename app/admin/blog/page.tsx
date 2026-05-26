import PageShell from '@components/PageShell';

export default function AdminBlogPage() {
  return (
    <PageShell title="Manage Blog Posts" description="Create news posts, devotionals, and church updates.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Draft and publish blog entries to keep the congregation informed and inspired.</p>
      </div>
    </PageShell>
  );
}
