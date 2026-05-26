import PageShell from '@components/PageShell';
import { testimonies } from '@data/content';

export default function TestimonialsPage() {
  return (
    <PageShell title="Testimonials" description="Read how faith is changing lives at St. Peter's Deanery.">
      <div className="grid gap-6 md:grid-cols-2">
        {testimonies.map((item) => (
          <div key={item.author} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
            <p className="text-lg leading-8 text-slate-100">“{item.quote}”</p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gold">{item.author}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
