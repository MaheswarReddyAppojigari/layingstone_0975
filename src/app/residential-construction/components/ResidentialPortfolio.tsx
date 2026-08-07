'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { projects } from '@/data/projects';

const residentialProjects = projects?.filter(p => p?.category === 'Residential' || p?.category === 'Residential Interiors');

export default function ResidentialPortfolio() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-background" aria-labelledby="res-portfolio-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 id="res-portfolio-heading" className="text-section-title font-bold text-foreground">
            Completed Residential Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {residentialProjects?.map((project, i) => (
            <div
              key={project?.id}
              className={`group bg-card rounded-2xl overflow-hidden card-shadow hover-lift card-shadow-hover transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <AppImage
                  src={project?.image}
                  alt={`${project?.title} — completed residential construction project in ${project?.location} by LayingStone`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    {project?.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-accent transition-colors">
                  {project?.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">{project?.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="w-3.5 h-3.5" />
                    {project?.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    {project?.year}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                  <span>{project?.area}</span>
                  <span>{project?.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}