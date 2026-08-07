import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://layingstone.in'),
  title: 'LayingStone — Premium Construction Company in India',
  description: 'LayingStone delivers premium residential, commercial and infrastructure construction services across India. Transparent pricing, branded materials, and turnkey solutions.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'LayingStone — Premium Construction Company in India',
    description: 'Premium residential, commercial and infrastructure construction services across India.',
    url: 'https://layingstone.in',
    siteName: 'LayingStone',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LayingStone — Premium Construction Company in India',
    description: 'Premium residential, commercial and infrastructure construction services across India.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Flayingston3933back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}