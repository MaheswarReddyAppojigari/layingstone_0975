import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactHero from './components/ContactHero';
import ContactMain from './components/ContactMain';

export const metadata: Metadata = {
  title: 'Contact Us | LayingStone Construction',
  description: 'Get in touch with LayingStone for a free consultation on residential or commercial construction projects. Call, WhatsApp, or fill our contact form.',
  alternates: { canonical: 'https://layingstone.in/contact' },
  openGraph: {
    title: 'Contact LayingStone — Free Construction Consultation',
    description: 'Reach our expert team for residential and commercial construction inquiries across India.',
    url: 'https://layingstone.in/contact',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactMain />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}