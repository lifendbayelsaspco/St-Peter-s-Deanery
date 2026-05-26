import PageShell from '@components/PageShell';

export default function RegistrationPage() {
  return (
    <PageShell title="Membership Registration" description="Join the church family and register for membership.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p className="mb-6">Register for membership to connect with our fellowship, ministries, and spiritual care network.</p>
        <form className="grid gap-4">
          <input className="w-full rounded-full border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Full name" />
          <input className="w-full rounded-full border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Email" />
          <input className="w-full rounded-full border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Phone number" />
          <textarea className="h-40 w-full rounded-[32px] border border-white/10 bg-church-deep/80 px-5 py-4 text-white outline-none" placeholder="Tell us about your church background" />
          <button className="w-full rounded-full bg-gold px-6 py-4 font-semibold text-church-deep transition hover:bg-white">Submit Registration</button>
        </form>
      </div>
    </PageShell>
  );
}
