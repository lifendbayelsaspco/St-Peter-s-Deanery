import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-vercel-domain.vercel.app';
const paths = [
  '/',
  '/about',
  '/clergy',
  '/ministries',
  '/sermons',
  '/events',
  '/gallery',
  '/donate',
  '/prayer',
  '/contact',
  '/live',
  '/blog',
  '/register',
  '/youth',
  '/women',
  '/choir',
  '/bible-study',
  '/calendar',
  '/testimonials',
  '/faq'
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${paths
    .map(
      (path) => `<url><loc>${baseUrl}${path}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`
    )
    .join('\n  ')}
</urlset>`;

export function GET() {
  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
