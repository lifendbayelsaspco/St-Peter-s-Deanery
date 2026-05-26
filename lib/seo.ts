import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: "St. Peter's Deanery Anglican Church",
  description: 'A warm and modern Anglican church experience in Yenagoa with worship, livestream, ministries, and community programs.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://your-vercel-domain.vercel.app'),
  openGraph: {
    title: "St. Peter's Deanery Anglican Church",
    description: 'Join our spiritual family for worship, prayer, ministry, and community impact in Yenagoa.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "St. Peter's Deanery Anglican Church",
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "St. Peter's Deanery Anglican Church",
    description: 'A warm and welcoming Anglican community for spiritual growth in Yenagoa.'
  }
};
