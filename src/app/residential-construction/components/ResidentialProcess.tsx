'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  { number: '01', title: 'Consultation', desc: 'Detailed discovery of your vision, plot, budget, and timeline requirements.' },
  { number: '02', title: 'Planning', desc: 'Comprehensive project plan with cost breakdown and material schedule.' },
  { number: '03', title: 'Design', desc: '2D plans, 3D elevations, and structural drawings for your approval.' },
  { number: '04', title: 'Procurement', desc: 'Sourcing branded materials with quality certificates from verified suppliers.' },
  { number: '05', title: 'Construction', desc: 'Expert execution with daily site supervision and progress updates.' },
  { number: '06', title: 'Inspection', desc: '100+ quality checkpoints at each milestone before proceeding.' },
  { number: '07', title: 'Handover', desc: 'Snag-free delivery with complete documentation and warranties.' },
];

export default function ResidentialProcess() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-background" aria-labelledby="res-process-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
          <h2 id="res-process-heading" className="text-section-title font-bold text-foreground">
            Our Construction Process
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Steps list */}
          <div className="space-y-3">
            {steps?.map((step, i) => (
              <button
                key={step?.number}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left flex items-start gap-4 p-5 rounded-xl transition-all duration-300 ${
                  activeStep === i ? 'bg-primary text-primary-foreground card-shadow' : 'bg-card hover:bg-secondary'
                } ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className={`text-2xl font-bold flex-shrink-0 ${activeStep === i ? 'text-accent' : 'text-muted-foreground'}`}>
                  {step?.number}
                </span>
                <div>
                  <h3 className={`font-bold text-base mb-1 ${activeStep === i ? 'text-white' : 'text-foreground'}`}>{step?.title}</h3>
                  <p className={`text-sm leading-relaxed ${activeStep === i ? 'text-white/70' : 'text-muted-foreground'}`}>{step?.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className={`lg:sticky lg:top-24 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-secondary rounded-2xl p-8 card-shadow">
              <div className="text-6xl font-bold text-accent/20 mb-4">{steps?.[activeStep]?.number}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{steps?.[activeStep]?.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{steps?.[activeStep]?.desc}</p>
              <div className="flex gap-2">
                {steps?.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeStep ? 'w-8 bg-accent' : 'w-2 bg-muted'}`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}