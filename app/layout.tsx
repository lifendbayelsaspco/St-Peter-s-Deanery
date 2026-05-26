import type { PropsWithChildren } from 'react';
import { defaultMetadata } from '@lib/seo';
import '../styles/globals.css';

export const metadata = defaultMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-church-deep text-white selection:bg-gold selection:text-church-deep">
        {children}
      </body>
    </html>
  );
}
