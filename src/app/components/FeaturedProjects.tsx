'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { ArrowRightIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="portfolio" className="section-pad bg-background" aria-labelledby="portfolio-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="accent-line mb-4" />
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 id="portfolio-heading" className="text-section-title font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
          <Link href="/#portfolio" className="btn-outline-navy text-sm whitespace-nowrap flex-shrink-0">
            View All Projects <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Project List */}
        <div className="divide-y divide-border">
          {projects?.map((project, i) => (
            <div
              key={project?.id}
              className={`group relative flex flex-col md:flex-row md:items-center justify-between py-6 hover:bg-secondary/50 -mx-4 px-4 rounded-xl transition-all duration-500 cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onMouseEnter={() => setHoveredId(project?.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <span className="text-muted-foreground font-mono text-xs w-6 flex-shrink-0">
                  {String(i + 1)?.padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-foreground text-lg group-hover:text-accent transition-colors truncate">
                    {project?.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPinIcon className="w-3.5 h-3.5" />
                      {project?.location}
                    </span>
                    <span className="text-xs text-muted-foreground">{project?.year}</span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{project?.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3 md:mt-0 md:pl-8">
                <span className="text-xs text-muted-foreground hidden lg:block">{project?.area}</span>
                <ArrowRightIcon className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>

              {/* Hover image peek */}
              <div
                className={`absolute right-32 top-1/2 -translate-y-1/2 w-48 h-32 rounded-xl overflow-hidden shadow-2xl pointer-events-none hidden lg:block transition-all duration-500 z-10 ${
                  hoveredId === project?.id ? 'opacity-100 scale-100 rotate-1' : 'opacity-0 scale-90'
                }`}
              >
                <AppImage
                  src={project?.image}
                  alt={`${project?.title} — construction project in ${project?.location}`}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}