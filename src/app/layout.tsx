import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OnSite Tech — Construction Software Solutions',
  description:
    'Custom mobile apps, dashboards, and digital workflows for construction companies. From jobsite to back office — software that actually works on the ground.',
  openGraph: {
    title: 'OnSite Tech — Construction Software Solutions',
    description:
      'Custom mobile apps, dashboards, and digital workflows for construction companies.',
    url: 'https://tech.onsiteclub.ca',
    siteName: 'OnSite Tech',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
