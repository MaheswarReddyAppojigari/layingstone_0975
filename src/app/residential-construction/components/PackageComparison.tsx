'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { packageComparison } from '@/data/packages';

const packageNames = ['Essential', 'Classic', 'Premium', 'Luxury'];
const packageColors = ['#6B7280', '#D4AF37', '#1F3A5F', '#0F1E35'];

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) return <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <XMarkIcon className="w-4 h-4 text-red-400 mx-auto" />;
  return <span className="text-xs text-foreground text-center block">{value}</span>;
}

export default function PackageComparison() {
  const [openSections, setOpenSections] = useState<string[]>(['Design & Drawings']);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleSection = (cat: string) => {setOpenSections(prev =>
      prev.includes(cat) ? prev.filter(s => s !== cat) : [...prev, cat]
    );
  };

  return (
    <section id="comparison" className="section-pad bg-background" aria-labelledby="comparison-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Detailed Comparison</p>
          <h2 id="comparison-heading" className="text-section-title font-bold text-foreground">
            Package Comparison
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Expand each category to see exactly what&apos;s included in every package.
          </p>
        </div>

        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Sticky header */}
          <div className="sticky top-16 lg:top-20 z-20 bg-background/95 backdrop-blur-sm rounded-t-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-5 divide-x divide-border">
              <div className="p-4 bg-secondary">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</span>
              </div>
              {packageNames.map((name, i) => (
                <div key={name} className="p-4 text-center" style={{ borderTop: `3px solid ${packageColors[i]}` }}>
                  <span className="text-sm font-bold text-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion sections */}
          <div className="border border-t-0 border-border rounded-b-2xl overflow-hidden divide-y divide-border">
            {packageComparison.map((section) => (
              <div key={section.category}>
                <button
                  onClick={() => toggleSection(section.category)}
                  className="w-full flex items-center justify-between p-5 bg-secondary hover:bg-muted text-left transition-colors"
                  aria-expanded={openSections.includes(section.category)}
                >
                  <span className="font-bold text-foreground text-sm">{section.category}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-accent transition-transform duration-300 ${openSections.includes(section.category) ? 'rotate-180' : ''}`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-400 ${openSections.includes(section.category) ? 'max-h-[1000px]' : 'max-h-0'}`}>
                  {section.features.map((feature, fi) => (
                    <div
                      key={feature.name}
                      className={`grid grid-cols-5 divide-x divide-border border-t border-border ${fi % 2 === 0 ? 'bg-card' : 'bg-background'}`}
                    >
                      <div className="p-4 flex items-center">
                        <span className="text-sm text-foreground font-medium">{feature.name}</span>
                      </div>
                      <div className="p-4 flex items-center justify-center">
                        <FeatureValue value={feature.essential} />
                      </div>
                      <div className="p-4 flex items-center justify-center bg-accent/5">
                        <FeatureValue value={feature.classic} />
                      </div>
                      <div className="p-4 flex items-center justify-center">
                        <FeatureValue value={feature.premium} />
                      </div>
                      <div className="p-4 flex items-center justify-center">
                        <FeatureValue value={feature.luxury} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}