'use client';

import React, { useEffect, useRef, useState } from 'react';

const materials = [
  { category: 'Steel', brands: ['JSW Steel', 'TATA Prime Gold'], icon: '⚙️' },
  { category: 'Cement', brands: ['ACC', 'UltraTech', 'Ramco'], icon: '🏗️' },
  { category: 'Blocks', brands: ['Solid Concrete Blocks', 'AAC Blocks'], icon: '🧱' },
  { category: 'Concrete', brands: ['M20 Grade', 'M25 Grade', 'M30 Grade'], icon: '🪨' },
  { category: 'Waterproofing', brands: ['Dr Fixit', 'Fosroc'], icon: '💧' },
  { category: 'Electrical', brands: ['Anchor', 'Legrand', 'GM', 'Havells'], icon: '⚡' },
  { category: 'Plumbing', brands: ['Ashirvad', 'Astral', 'Aliaxis'], icon: '🔧' },
  { category: 'Paint', brands: ['Asian Paints', 'Birla Opus', 'Nerolac'], icon: '🎨' },
  { category: 'Flooring', brands: ['Kajaria', 'Johnson', 'Somany'], icon: '🟫' },
  { category: 'Kitchen', brands: ['Granite Countertop', 'Premium Sink', 'Franke'], icon: '🍳' },
  { category: 'Bathroom', brands: ['Jaquar', 'Hindware', 'Parryware'], icon: '🚿' },
  { category: 'Doors', brands: ['Teak Wood', 'Flush Door', 'Engineered Wood'], icon: '🚪' },
  { category: 'Windows', brands: ['Aluminium', 'UPVC', 'Double Glazed'], icon: '🪟' },
  { category: 'Wiring', brands: ['Finolex', 'Polycab', 'Havells'], icon: '🔌' },
];

export default function MaterialSpecs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-secondary" aria-labelledby="materials-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Only the Best</p>
          <h2 id="materials-heading" className="text-section-title font-bold text-foreground">
            Material Specifications
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We use only certified, branded materials from India&apos;s most trusted manufacturers — no compromises.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {materials?.map((mat, i) => (
            <div
              key={mat?.category}
              className={`bg-card rounded-xl p-4 card-shadow hover-lift text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="text-2xl mb-3">{mat?.icon}</div>
              <h3 className="font-bold text-foreground text-xs mb-2">{mat?.category}</h3>
              <div className="space-y-1">
                {mat?.brands?.map((brand) => (
                  <p key={brand} className="text-muted-foreground text-xs leading-tight">{brand}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}