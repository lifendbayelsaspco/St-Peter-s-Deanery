# St. Peter's Deanery Anglican Church Website

A modern Next.js church website built for St. Peter's Deanery Anglican Church, optimized for deployment on Vercel and integrated with Supabase.

## Features

- Next.js 15 App Router + TypeScript
- Tailwind CSS and Framer Motion animations
- Supabase Auth, Storage, and PostgreSQL support
- Server Actions + API routes for contact, prayer, donation, and newsletter
- Responsive mobile-first design with dark/light mode support
- SEO metadata, sitemap generation, robots.txt
- Admin dashboard skeleton for sermon, event, blog, and media management
- PWA-ready manifest and structured content

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Create a local `.env` file from `.env.example` and add your credentials.

3. Run dev server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## Environment Variables

Create a `.env.local` file with the following values:

```env
NEXT_PUBLIC_APP_NAME=St. Peter's Deanery Anglican Church
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
DATABASE_URL=your_postgresql_connection_string
NEXTAUTH_SECRET=generate_secure_secret
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_public_key
FLUTTERWAVE_SECRET_KEY=your_flutterwave_secret_key
SUPABASE_STORAGE_BUCKET=church-media
NEXT_PUBLIC_YOUTUBE_CHANNEL=https://youtube.com/@yourchannel
NEXT_PUBLIC_FACEBOOK_PAGE=https://facebook.com/yourpage
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Supabase Setup

1. Create a new Supabase project.
2. Create the tables using `scripts/schema.sql`.
3. Configure Supabase Storage bucket: `church-media`.
4. Set Supabase URL and keys in `.env.local`.

## Deployment

- Connect this repository to Vercel.
- Set environment variables in Vercel.
- Deploy and enable automatic builds.

## Notes

This repository includes a complete frontend structure with sample pages, API routes, and admin dashboard placeholders. Extend the admin routes and Supabase logic to match your church's workflow.
