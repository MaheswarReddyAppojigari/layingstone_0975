'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { services } from '@/data/services';

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="services" className="section-pad bg-secondary" aria-labelledby="services-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 id="services-heading" className="text-section-title font-bold text-foreground">
            End-to-End Construction Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From foundation to finishing — we deliver complete construction solutions across every domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service, i) => (
            <Link
              key={service?.id}
              href={service?.href}
              className={`group bg-card rounded-2xl overflow-hidden card-shadow hover-lift card-shadow-hover block transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <AppImage
                  src={service?.image}
                  alt={`${service?.title} — premium construction project by LayingStone`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-accent transition-colors">{service?.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service?.description}</p>
                <ul className="space-y-1 mb-4">
                  {service?.features?.slice(0, 3)?.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}