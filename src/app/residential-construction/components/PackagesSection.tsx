'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid';
import { packages } from '@/data/packages';

export default function PackagesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  const scrollToComparison = () => {
    document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="section-pad bg-secondary" aria-labelledby="packages-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Transparent Pricing</p>
          <h2 id="packages-heading" className="text-section-title font-bold text-foreground">
            Residential Construction Packages
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your vision and budget. All prices are per sq.ft of built-up area. GST extra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages?.map((pkg, i) => (
            <div
              key={pkg?.id}
              className={`relative bg-card rounded-2xl overflow-hidden transition-all duration-700 ${
                pkg?.popular
                  ? 'ring-2 ring-accent shadow-xl scale-[1.02]'
                  : 'card-shadow hover-lift card-shadow-hover'
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Popular badge */}
              {pkg?.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-xs font-bold py-1.5 text-center uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <StarIcon className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div
                className={`p-6 ${pkg?.popular ? 'pt-10' : ''}`}
                style={{ background: `linear-gradient(135deg, ${pkg?.color}15, ${pkg?.color}05)`, borderBottom: `2px solid ${pkg?.color}20` }}
              >
                <h3 className="font-bold text-foreground text-xl mb-1">{pkg?.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-foreground">{pkg?.price}</span>
                  <span className="text-sm text-muted-foreground">{pkg?.priceNote}</span>
                </div>
                <p className="text-muted-foreground text-sm">{pkg?.description}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-2.5 mb-6">
                  {pkg?.highlights?.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <button
                    onClick={scrollToComparison}
                    className="w-full py-2.5 px-4 rounded-lg border-2 border-border text-foreground text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                  >
                    Compare Package
                  </button>
                  <Link
                    href="/contact"
                    className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-200 ${
                      pkg?.popular
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-xs text-muted-foreground mt-8 transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          * Prices are indicative and may vary based on location, site conditions, and customizations. GST at 18% extra.
        </p>
      </div>
    </section>
  );
}