import PageShell from '@components/PageShell';

export default function AdminGalleryPage() {
  return (
    <PageShell title="Manage Gallery" description="Upload photos and videos for event albums and church media.">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass text-slate-200">
        <p>Upload gallery images and video highlights for church programs, worship services, and special events.</p>
      </div>
    </PageShell>
  );
}
