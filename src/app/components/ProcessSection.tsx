'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  { number: '01', title: 'Consultation', desc: 'We understand your vision, budget, and requirements in a detailed discovery session.' },
  { number: '02', title: 'Planning', desc: 'Comprehensive project plan with timeline, cost breakdown, and material schedule.' },
  { number: '03', title: 'Design', desc: '2D floor plans, 3D elevations, and interior concepts for your approval.' },
  { number: '04', title: 'Procurement', desc: 'Sourcing branded materials from verified suppliers with quality certificates.' },
  { number: '05', title: 'Construction', desc: 'Execution by certified engineers with daily progress updates and site supervision.' },
  { number: '06', title: 'Quality Check', desc: '100+ point quality inspection at each milestone before proceeding.' },
  { number: '07', title: 'Handover', desc: 'Snag-free handover with complete documentation, warranties, and after-care.' },
];

export default function ProcessSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-secondary" aria-labelledby="process-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
          <h2 id="process-heading" className="text-section-title font-bold text-foreground">
            Our Construction Process
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {steps?.map((step, i) => (
              <div
                key={step?.number}
                className={`relative text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Number circle */}
                <div className="w-16 h-16 rounded-full border-2 border-accent/30 bg-card flex items-center justify-center mx-auto mb-4 relative z-10 shadow-sm">
                  <span className="font-bold text-accent text-lg">{step?.number}</span>
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{step?.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed hidden lg:block">{step?.desc}</p>
                <p className="text-muted-foreground text-xs leading-relaxed lg:hidden">{step?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}