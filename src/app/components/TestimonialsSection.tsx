'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { StarIcon } from '@heroicons/react/24/solid';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-background" aria-labelledby="testimonials-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Client Stories</p>
          <h2 id="testimonials-heading" className="text-section-title font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials?.map((t, i) => (
            <div
              key={t?.id}
              className={`glass-card rounded-2xl p-7 card-shadow hover-lift transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t?.rating })?.map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 text-[0.9375rem]">
                &ldquo;{t?.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent/20">
                  <AppImage
                    src={t?.avatar}
                    alt={`${t?.name} — satisfied LayingStone client`}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t?.name}</p>
                  <p className="text-muted-foreground text-xs">{t?.role} · {t?.location}</p>
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