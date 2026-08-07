'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const industries = [
  { icon: 'HomeModernIcon', name: 'Residential', desc: 'Villas, apartments, individual homes' },
  { icon: 'BuildingOffice2Icon', name: 'Commercial', desc: 'Offices, retail, shopping centres' },
  { icon: 'BuildingLibraryIcon', name: 'Hospitality', desc: 'Hotels, resorts, restaurants' },
  { icon: 'HeartIcon', name: 'Healthcare', desc: 'Hospitals, clinics, labs' },
  { icon: 'AcademicCapIcon', name: 'Education', desc: 'Schools, colleges, campuses' },
  { icon: 'CogIcon', name: 'Industrial', desc: 'Factories, warehouses, plants' },
  { icon: 'TrophyIcon', name: 'Sports', desc: 'Stadiums, courts, tracks' },
  { icon: 'BuildingStorefrontIcon', name: 'Government', desc: 'Public infrastructure, civic projects' },
];

export default function IndustriesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" className="section-pad bg-primary" aria-labelledby="industries-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Industries We Serve</p>
          <h2 id="industries-heading" className="text-section-title font-bold text-white">
            Construction Across Every Sector
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className={`bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 rounded-2xl p-6 text-center hover-lift transition-all duration-700 cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Icon name={industry.icon as any} size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">{industry.name}</h3>
              <p className="text-white/50 text-xs">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}