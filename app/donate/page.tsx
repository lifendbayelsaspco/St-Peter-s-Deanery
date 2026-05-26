import PageShell from '@components/PageShell';

const donationOptions = [
  'Tithe',
  'Offering',
  'Thanksgiving',
  'Building Project',
  'Special Seed'
];

export default function DonatePage() {
  return (
    <PageShell title="Online Giving" description="Support the work of the church with secure giving options.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
          <h2 className="text-2xl font-semibold text-white">Donation Methods</h2>
          <ul className="mt-6 space-y-4 text-slate-300">
            {donationOptions.map((option) => (
              <li key={option} className="rounded-3xl border border-white/10 bg-church-deep/80 p-4">{option}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass">
          <h2 className="text-2xl font-semibold text-white">Payment Partners</h2>
          <p className="mt-4 text-slate-300">We currently support Paystack, Flutterwave, bank transfers, and email receipts for every gift.</p>
          <div className="mt-6 space-y-3 text-slate-300">
            <p><span className="font-semibold text-white">Bank:</span> Zenith Bank - 1234567890</p>
            <p><span className="font-semibold text-white">Account:</span> St. Peter’s Deanery Anglican Church</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
