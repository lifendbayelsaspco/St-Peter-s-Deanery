import PageShell from '@components/PageShell';

const faqs = [
  { question: 'When are your services?', answer: 'Sunday services are at 8:00 AM and 10:30 AM, with midweek prayer on Wednesdays and Fridays.' },
  { question: 'How can I give?', answer: 'Donate through Paystack, Flutterwave, or bank transfer details available on the Giving page.' },
  { question: 'Can I submit a prayer request?', answer: 'Yes. Visit the Prayer Request page to submit your request and our team will pray with you.' }
];

export default function FAQPage() {
  return (
    <PageShell title="FAQ" description="Find answers to common questions about our church and services.">
      <div className="space-y-6">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glass">
            <summary className="cursor-pointer text-xl font-semibold text-white">{faq.question}</summary>
            <p className="mt-4 text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}
