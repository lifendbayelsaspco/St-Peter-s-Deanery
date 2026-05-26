import PageShell from '@components/PageShell';

export default function BibleStudyPage() {
  return (
    <PageShell title="Bible Study Resources" description="Deepen your understanding of Scripture with guided study.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Our Bible study resources include weekly curricula, devotionals, sermon notes, and small-group discussion guides.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-church-deep/80 p-6">Online devotionals</div>
          <div className="rounded-3xl bg-church-deep/80 p-6">Small group guides</div>
        </div>
      </div>
    </PageShell>
  );
}
