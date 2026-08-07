'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function CtaSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" aria-labelledby="cta-heading" ref={ref}>
      <div className="absolute inset-0 navy-gradient" />
      <div className="grain-overlay absolute inset-0 opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />

      <div className={`relative z-10 max-w-4xl mx-auto container-pad text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="accent-line mx-auto mb-6" />
        <h2 id="cta-heading" className="text-section-title font-bold text-white mb-4">
          Let&apos;s Build Your Dream Home
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Get a free consultation and transparent estimate. No obligations, just honest advice from our expert engineers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get Free Estimate <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <a href="tel:+919876543210" className="btn-outline text-base px-8 py-4">
            <PhoneIcon className="w-4 h-4" /> Talk to an Expert
          </a>
        </div>
        <p className="text-white/40 text-xs mt-8">
          Available Mon–Sat · 9AM–7PM · Response within 2 hours
        </p>
      </div>
    </section>
  );
}