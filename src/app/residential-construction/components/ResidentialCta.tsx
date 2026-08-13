'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ResidentialCta() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" aria-labelledby="res-cta-heading" ref={ref}>
      <div className="absolute inset-0 navy-gradient" />
      <div className="grain-overlay absolute inset-0 opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_65%)]" />
      <div
        className={`relative z-10 max-w-4xl mx-auto container-pad text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="accent-line mx-auto mb-6" />
        <h2 id="res-cta-heading" className="text-section-title font-bold text-white mb-4">
          Let&apos;s Build Your Dream Home
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Get a transparent estimate with no hidden charges. Our experts are ready to guide you
          through every step.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#consultation" className="btn-primary text-base px-8 py-4">
            Get Free Estimate <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <a href="tel:+918123069600" className="btn-outline text-base px-8 py-4">
            <PhoneIcon className="w-4 h-4" /> Talk to an Expert
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10">
          {[
            { value: '₹1,799', label: 'Starting Price' },
            { value: '100+', label: 'Quality Checks' },
            { value: '10 Yr', label: 'Warranty' },
            { value: '0', label: 'Hidden Charges' },
          ]?.map((item) => (
            <div key={item?.label} className="text-center">
              <p className="text-2xl font-bold text-accent">{item?.value}</p>
              <p className="text-white/50 text-xs">{item?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
