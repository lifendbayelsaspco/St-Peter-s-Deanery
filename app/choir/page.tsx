import PageShell from '@components/PageShell';

export default function ChoirPage() {
  return (
    <PageShell title="Choir Ministry" description="Experience worship through praise and music.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Our Choir Ministry leads inspiring worship every Sunday and during special events, combining scripture, harmony, and heartfelt praise.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-church-deep/80 p-6">Choir rehearsals and training</div>
          <div className="rounded-3xl bg-church-deep/80 p-6">Music ministry outreach</div>
        </div>
      </div>
    </PageShell>
  );
}
