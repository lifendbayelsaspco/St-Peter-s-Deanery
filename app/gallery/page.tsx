import PageShell from '@components/PageShell';

const gallery = [
  { title: 'Easter Celebration', caption: 'Worship and community fellowship' },
  { title: 'Bible Study Night', caption: 'Deepening faith in scripture' },
  { title: 'Choir Praise', caption: 'Our music ministry in worship' }
];

export default function GalleryPage() {
  return (
    <PageShell title="Gallery" description="Explore our church life through photos and videos.">
      <div className="grid gap-6 md:grid-cols-3">
        {gallery.map((item) => (
          <div key={item.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <div className="mb-4 h-52 rounded-3xl bg-slate-900" />
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.caption}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
