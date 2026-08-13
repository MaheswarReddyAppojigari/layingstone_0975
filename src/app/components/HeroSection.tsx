'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface HeroSlide {
  id: string;
  category: string;
  image: string;
  alt: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'residential',
    category: 'Residential Construction',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_141dc386f-1785389695195.png',
    alt: 'Modern Indian residential villa under construction with premium architecture and landscaped surroundings',
  },
  {
    id: 'commercial',
    category: 'Commercial Construction',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16e2a8f2e-1777342993312.png',
    alt: 'Modern commercial office building with glass facade and contemporary architectural design',
  },
  {
    id: 'residential-interiors',
    category: 'Residential Interiors',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13a951f02-1772213701492.png',
    alt: 'Luxury residential interior living room with premium furnishings, elegant lighting and sophisticated design',
  },
  {
    id: 'commercial-interiors',
    category: 'Commercial Interiors',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10e8c9864-1767639760417.png',
    alt: 'Modern corporate office interior with open workstations, natural light and professional design',
  },
  {
    id: 'sports-infra',
    category: 'Sports Infra',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1035470d6-1764795595308.png',
    alt: 'Professional football turf with synthetic grass, floodlights and stadium-grade sports infrastructure',
  },
  {
    id: 'landscaping',
    category: 'Landscaping',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dc857b6b-1783539039128.png',
    alt: 'Premium residential landscape design with manicured lawn, garden beds, hardscape pathways and outdoor living area',
  },
];

export default function HeroSection() {
  const scanRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const transitionDuration = prefersReducedMotion ? 0 : 600;

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: prefersReducedMotion
                ? 'none'
                : `opacity ${transitionDuration}ms ease-in-out`,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="object-cover object-center"
              sizes="100vw"
              quality={index === 0 ? 85 : 75}
            />
          </div>
        ))}

        {/* Dark scrim — text is white, so dark overlay required */}
        <div className="absolute inset-0 hero-scrim" style={{ zIndex: 2 }} />
        {/* Additional bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent"
          style={{ zIndex: 3 }}
        />
        {/* Grain overlay */}
        <div
          className="grain-overlay absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ zIndex: 4 }}
        />
        {/* Scan line */}
        <div ref={scanRef} className="scan-line" style={{ zIndex: 4 }} />
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
          <h1
            className="text-hero-display font-bold text-white mb-6 fade-in-up stagger-2 opacity-0"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            Engineering Spaces
            <br />
            <span className="text-accent">Building Legacies</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-xl mb-10 fade-in-up stagger-3 opacity-0">
            Premium Residential, Commercial and Infrastructure Construction Services Across India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 fade-in-up stagger-4 opacity-0">
            <Link href="/contact" className="btn-primary text-base px-6 py-3.5">
              Let's Start Your Project
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link href="/#portfolio" className="btn-outline text-base px-6 py-3.5">
              Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Category Indicator */}
      <div
        className="absolute bottom-20 right-6 lg:right-10 z-10 fade-in-up stagger-5 opacity-0"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex flex-col items-end gap-1.5">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex items-center gap-2"
              style={{
                opacity: index === currentSlide ? 1 : 0.35,
                transition: prefersReducedMotion ? 'none' : 'opacity 400ms ease-in-out',
              }}
            >
              <span
                className="text-white/90 text-xs font-medium tracking-wide uppercase hidden sm:block"
                style={{ fontSize: '10px', letterSpacing: '0.08em' }}
              >
                {index === currentSlide ? slide.category : ''}
              </span>
              <div
                className="rounded-full bg-white"
                style={{
                  width: index === currentSlide ? '20px' : '6px',
                  height: '3px',
                  transition: prefersReducedMotion
                    ? 'none'
                    : 'width 400ms ease-in-out, opacity 400ms ease-in-out',
                }}
              />
            </div>
          ))}
        </div>
        {/* Active category label for mobile */}
        <div className="mt-2 text-right sm:hidden">
          <span
            className="text-white/80 text-xs font-medium tracking-wide uppercase"
            style={{ fontSize: '9px' }}
          >
            {heroSlides[currentSlide]?.category}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 fade-in-up stagger-5 opacity-0">
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
