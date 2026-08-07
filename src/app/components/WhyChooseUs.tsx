'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const reasons = [
  { icon: 'AcademicCapIcon', title: 'Experienced Engineers', desc: 'Our team of 150+ certified engineers brings decades of expertise to every project.' },
  { icon: 'CubeIcon', title: 'Quality Materials', desc: 'We use only branded materials — JSW steel, UltraTech cement, Kajaria tiles, Jaquar fittings.' },
  { icon: 'ClockIcon', title: 'On-Time Delivery', desc: '98% of our projects are delivered on schedule with milestone-based progress tracking.' },
  { icon: 'BanknotesIcon', title: 'Transparent Pricing', desc: 'Fixed per sq.ft pricing with zero hidden charges. Complete cost breakdown before you sign.' },
  { icon: 'UserGroupIcon', title: 'Professional Team', desc: 'Dedicated project managers, site supervisors, and support staff assigned to your project.' },
  { icon: 'ShieldCheckIcon', title: 'Safety Standards', desc: 'ISO-certified safety protocols with daily safety audits and worker welfare programs.' },
];

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-pad bg-background" aria-labelledby="why-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why LayingStone</p>
          <h2 id="why-heading" className="text-section-title font-bold text-foreground">
            Built on Trust, Delivered with Excellence
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every project we undertake is a commitment to quality, transparency, and your peace of mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className={`bg-card rounded-2xl p-7 card-shadow hover-lift card-shadow-hover transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Icon name={item.icon as any} size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}