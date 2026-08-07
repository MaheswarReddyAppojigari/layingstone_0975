'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const scanRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden" aria-label="Hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1b43f36df-1767080945825.png"
          alt="Premium construction site with modern architecture, dramatic lighting, dark industrial atmosphere"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Dark scrim — text is white, so dark overlay required */}
        <div className="absolute inset-0 hero-scrim" />
        {/* Additional bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Grain overlay */}
        <div className="grain-overlay absolute inset-0 opacity-[0.04] pointer-events-none" />
        {/* Scan line */}
        <div ref={scanRef} className="scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8 fade-in-up stagger-1 opacity-0">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-white/90 uppercase tracking-widest">
              Accepting New Projects — 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-hero-display font-bold text-white mb-6 fade-in-up stagger-2 opacity-0" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
            Building Dreams<br />
            <span className="text-accent">Into Reality</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-xl mb-10 fade-in-up stagger-3 opacity-0">
            Premium Residential, Commercial and Infrastructure Construction Services Across India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 fade-in-up stagger-4 opacity-0">
            <Link href="/contact" className="btn-primary text-base px-6 py-3.5">
              Get Free Consultation
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link href="/#portfolio" className="btn-outline text-base px-6 py-3.5">
              Explore Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 fade-in-up stagger-5 opacity-0">
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>);

}