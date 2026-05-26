import PageShell from '@components/PageShell';

export default function AdminSermonsPage() {
  return (
    <PageShell title="Manage Sermons" description="Upload and categorize sermons for the website.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Upload audio and video sermons, add sermon topics, and manage featured teaching series.</p>
      </div>
    </PageShell>
  );
}
