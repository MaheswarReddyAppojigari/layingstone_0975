'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const breadcrumbs = [
{ label: 'Home', href: '/' },
{ label: 'Contact', href: '/contact' }];


export default function ContactHero() {
  return (
    <section className="relative h-72 lg:h-96 flex items-end overflow-hidden" aria-label="Contact Hero">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1923dab8e-1766850837118.png"
          alt="Modern office interior with large windows, bright natural light, professional workspace"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 hero-scrim" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="grain-overlay absolute inset-0 opacity-[0.04] pointer-events-none" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-xs text-white/60">
            {breadcrumbs?.map((crumb, i) =>
            <li key={crumb?.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {i === breadcrumbs?.length - 1 ?
              <span className="text-accent font-medium">{crumb?.label}</span> :

              <Link href={crumb?.href} className="hover:text-white transition-colors">{crumb?.label}</Link>
              }
              </li>
            )}
          </ol>
        </nav>
        <h1 className="text-4xl lg:text-5xl font-bold text-white fade-in-up stagger-1 opacity-0">
          Let&apos;s Build <span className="text-accent">Together</span>
        </h1>
        <p className="text-white/70 mt-3 max-w-xl fade-in-up stagger-2 opacity-0">
          Reach our expert team for a free consultation. We respond within 2 hours.
        </p>
      </div>
    </section>);

}