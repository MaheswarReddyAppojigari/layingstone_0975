'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { HomeModernIcon } from '@heroicons/react/24/solid';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Residential', href: '/residential-construction' },
];

export default function ResidentialHero() {
  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[70vh] flex items-end overflow-hidden"
      aria-label="Residential Construction Hero"
    >
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1f946e872-1772223913292.png"
          alt="Luxury residential villa construction with elegant architecture, bright natural lighting, airy open spaces"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 hero-scrim" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="grain-overlay absolute inset-0 opacity-[0.04] pointer-events-none" />
        <div className="scan-line" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 lg:pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-white/60">
            {breadcrumbs?.map((crumb, i) => (
              <li key={crumb?.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {i === breadcrumbs?.length - 1 ? (
                  <span className="text-accent font-medium">{crumb?.label}</span>
                ) : (
                  <Link href={crumb?.href} className="hover:text-white transition-colors">
                    {crumb?.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm mb-6 fade-in-up stagger-1 opacity-0">
          <HomeModernIcon className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium text-white/90 uppercase tracking-widest">
            Residential Construction
          </span>
        </div>

        <h1 className="text-hero-display font-bold text-white mb-4 fade-in-up stagger-2 opacity-0">
          Residential Construction
          <br />
          <span className="text-accent">Buidling homes that tell your story</span>
        </h1>

        <p className="text-lg text-white/80 font-light max-w-2xl mb-8 leading-relaxed fade-in-up stagger-3 opacity-0">
          From concept to completion, we deliver thoughtfully designed, quality-built homes with
          transparent pricing and complete project management.
        </p>

        <div className="flex flex-wrap gap-4 fade-in-up stagger-4 opacity-0">
          <Link href="/contact" className="btn-primary text-base px-6 py-3.5">
            Free Consultation <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <button onClick={scrollToPackages} className="btn-outline text-base px-6 py-3.5">
            View Packages <ArrowDownIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
