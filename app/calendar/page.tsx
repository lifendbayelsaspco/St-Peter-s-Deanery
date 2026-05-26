import PageShell from '@components/PageShell';

const calendarItems = [
  { label: 'Sunday Service', time: '8:00 AM • 10:30 AM' },
  { label: 'Midweek Bible Study', time: 'Wednesdays • 5:00 PM' },
  { label: 'Prayer Night', time: 'Fridays • 7:00 PM' }
];

export default function CalendarPage() {
  return (
    <PageShell title="Church Calendar" description="Stay updated on worship, ministry, and event dates.">
      <div className="grid gap-6 md:grid-cols-3">
        {calendarItems.map((item) => (
          <div key={item.label} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
            <h3 className="text-2xl font-semibold text-white">{item.label}</h3>
            <p className="mt-4 text-slate-300">{item.time}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
