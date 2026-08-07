import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ResidentialHero from './components/ResidentialHero';
import ResidentialAbout from './components/ResidentialAbout';
import ResidentialServices from './components/ResidentialServices';
import ResidentialProcess from './components/ResidentialProcess';
import PackagesSection from './components/PackagesSection';
import PackageComparison from './components/PackageComparison';
import MaterialSpecs from './components/MaterialSpecs';
import FeatureHighlights from './components/FeatureHighlights';
import QualityAssurance from './components/QualityAssurance';
import InclusionsExclusions from './components/InclusionsExclusions';
import ResidentialPortfolio from './components/ResidentialPortfolio';
import ResidentialTestimonials from './components/ResidentialTestimonials';
import ResidentialFaq from './components/ResidentialFaq';
import ConsultationForm from './components/ConsultationForm';
import ResidentialCta from './components/ResidentialCta';

export const metadata: Metadata = {
  title: 'Residential Construction Packages | LayingStone',
  description: 'Premium residential construction packages starting at ₹1,799/sq.ft. Transparent pricing, branded materials, and turnkey home construction across India.',
  alternates: { canonical: 'https://layingstone.in/residential-construction' },
  openGraph: {
    title: 'Residential Construction Packages | LayingStone',
    description: 'Premium residential construction starting at ₹1,799/sq.ft. Essential, Classic, Premium & Luxury packages.',
    url: 'https://layingstone.in/residential-construction',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Residential Construction',
  provider: { '@type': 'Organization', name: 'LayingStone', url: 'https://layingstone.in' },
  serviceType: 'Residential Construction',
  areaServed: { '@type': 'Country', name: 'India' },
  description: 'Premium residential construction packages with transparent pricing across India.',
};

export default function ResidentialConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ResidentialHero />
        <ResidentialAbout />
        <ResidentialServices />
        <ResidentialProcess />
        <PackagesSection />
        <PackageComparison />
        <MaterialSpecs />
        <FeatureHighlights />
        <QualityAssurance />
        <InclusionsExclusions />
        <ResidentialPortfolio />
        <ResidentialTestimonials />
        <ResidentialFaq />
        <ConsultationForm />
        <ResidentialCta />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}