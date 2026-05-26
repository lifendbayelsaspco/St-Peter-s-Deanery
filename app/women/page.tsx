import PageShell from '@components/PageShell';

export default function WomenPage() {
  return (
    <PageShell title="Women Ministry" description="A safe space for women to pray, learn, and lead.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Our Women Ministry encourages spiritual growth through mentoring, retreats, prayer circles, and community service projects.</p>
        <ul className="mt-6 space-y-3 text-slate-300">
          <li>Weekly prayer fellowship</li>
          <li>Mentorship and discipleship groups</li>
          <li>Women-led ministry events</li>
        </ul>
      </div>
    </PageShell>
  );
}
