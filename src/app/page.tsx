import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import ServicesSection from '@/app/components/ServicesSection';
import IndustriesSection from '@/app/components/IndustriesSection';
import FeaturedProjects from '@/app/components/FeaturedProjects';
import ProcessSection from '@/app/components/ProcessSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FaqSection from '@/app/components/FaqSection';
import CtaSection from '@/app/components/CtaSection';

export const metadata: Metadata = {
  title: 'LayingStone — Premium Construction Company in India',
  description: 'LayingStone delivers premium residential, commercial and infrastructure construction services across India. Transparent pricing, branded materials, and turnkey solutions.',
  alternates: { canonical: 'https://layingstone.in' },
  openGraph: {
    title: 'LayingStone — Premium Construction Company in India',
    description: 'Premium residential, commercial and infrastructure construction across India.',
    url: 'https://layingstone.in',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyChooseUs />
        <ServicesSection />
        <IndustriesSection />
        <FeaturedProjects />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}