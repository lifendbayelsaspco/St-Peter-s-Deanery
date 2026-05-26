import PageShell from '@components/PageShell';

export default function YouthPage() {
  return (
    <PageShell title="Youth Ministry" description="A vibrant space for young people to grow in faith.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Our Youth Ministry offers weekly fellowship, Bible study groups, leadership training, and outreach events for teenagers and young adults.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-church-deep/80 p-6">Bible study and small groups</div>
          <div className="rounded-3xl bg-church-deep/80 p-6">Character development and mentoring</div>
        </div>
      </div>
    </PageShell>
  );
}
