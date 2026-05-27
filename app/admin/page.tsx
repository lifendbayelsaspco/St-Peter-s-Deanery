import PageShell from '@components/PageShell';
import Link from 'next/link';

const adminCards = [
  { title: 'Sermons', href: '/admin/sermons' },
  { title: 'Events', href: '/admin/events' },
  { title: 'Blog Posts', href: '/admin/blog' },
  { title: 'Prayer Requests', href: '/admin/prayer' },
  { title: 'Media Gallery', href: '/admin/gallery' },
  { title: 'Members', href: '/admin/members' }
];

export default function AdminPage() {
  return (
    <PageShell title="Admin Dashboard" description="Manage sermons, events, prayer requests, and church content.">
      <div className="grid gap-6 md:grid-cols-3">
        {adminCards.map((card) => (
          <Link key={card.title} href={card.href as any} className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center text-white shadow-glass transition hover:border-gold/60 hover:bg-white/10">
            <h3 className="text-2xl font-semibold">{card.title}</h3>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
