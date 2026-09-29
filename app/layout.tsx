import './globals.css';
import '@fontsource-variable/inter/wght.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Falak Ride — Umrah Transport & Taxi Booking',
  description:
    'Premium Umrah, Ziyarat, and airport transport services across Saudi Arabia. Book reliable, comfortable rides with verified drivers.',
  openGraph: {
    title: 'Falak Ride — Umrah Transport & Taxi Booking',
    description:
      'Premium Umrah, Ziyarat, and airport transport services across Saudi Arabia.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
