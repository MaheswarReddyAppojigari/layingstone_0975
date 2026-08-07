'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { StarIcon } from '@heroicons/react/24/solid';
import { testimonials } from '@/data/testimonials';

const residentialTestimonials = testimonials?.filter((_, i) => i % 2 === 0 || i === 3);

export default function ResidentialTestimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-secondary" aria-labelledby="res-testimonials-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Client Stories</p>
          <h2 id="res-testimonials-heading" className="text-section-title font-bold text-foreground">
            Happy Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {residentialTestimonials?.map((t, i) => (
            <div
              key={t?.id}
              className={`glass-card rounded-2xl p-7 card-shadow hover-lift transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t?.rating })?.map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-6 text-sm">
                &ldquo;{t?.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent/20">
                  <AppImage
                    src={t?.avatar}
                    alt={`${t?.name} — satisfied LayingStone homeowner`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t?.name}</p>
                  <p className="text-muted-foreground text-xs">{t?.location}</p>
                  <p className="text-accent text-xs font-medium mt-0.5">{t?.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}