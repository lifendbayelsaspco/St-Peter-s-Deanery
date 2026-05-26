import PageShell from '@components/PageShell';

const posts = [
  { title: 'Preparing for Advent', excerpt: 'Reflection on hope, prayer, and preparation.' },
  { title: 'Community Outreach Report', excerpt: 'Celebrating impact through service and care.' }
];

export default function BlogPage() {
  return (
    <PageShell title="Blog & News" description="Latest church news, devotions, and ministry updates.">
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
            <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
            <p className="mt-4 text-slate-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
