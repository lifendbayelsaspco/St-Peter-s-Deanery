import PageShell from '@components/PageShell';
import { events } from '@data/content';

export default function EventsPage() {
  return (
    <PageShell title="Events & Programs" description="Upcoming gatherings, prayer nights, and church activities.">
      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <div key={event.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <p className="text-sm uppercase tracking-[0.24em] text-gold">{event.date}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{event.title}</h3>
            <p className="mt-3 text-slate-300">{event.summary}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
