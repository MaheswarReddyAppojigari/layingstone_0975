'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const checks = [
  { label: '100+ Quality Checks', desc: 'Across 15 construction phases' },
  { label: 'Branded Materials', desc: 'With authenticity certificates' },
  { label: 'Structural Safety', desc: 'Per IS code standards' },
  { label: 'Site Supervision', desc: 'Daily on-site monitoring' },
  { label: 'Daily Updates', desc: 'Photo + video progress reports' },
  { label: 'Transparent Billing', desc: 'Milestone-linked payment schedule' },
];

export default function QualityAssurance() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" aria-labelledby="qa-heading" ref={ref}>
      <div className="absolute inset-0 navy-gradient" />
      <div className="grain-overlay absolute inset-0 opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(212,175,55,0.1)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Commitment</p>
          <h2 id="qa-heading" className="text-section-title font-bold text-white">
            Quality Assurance
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Every LayingStone project undergoes a rigorous multi-stage quality assurance process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Big stat card */}
          <div
            className={`lg:col-span-1 bg-accent/10 border border-accent/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-700 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-6xl font-bold text-accent mb-2">100+</div>
            <div className="text-white font-bold text-xl mb-1">Quality Checks</div>
            <div className="text-white/50 text-sm">Per project milestone</div>
          </div>

          {/* Checks grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checks?.map((check, i) => (
              <div
                key={check?.label}
                className={`flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <CheckBadgeIcon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">{check?.label}</p>
                  <p className="text-white/50 text-xs mt-0.5">{check?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}