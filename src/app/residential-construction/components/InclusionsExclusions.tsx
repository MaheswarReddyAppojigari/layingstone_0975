'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const inclusions = [
  { title: 'Architecture', desc: '2D floor plans, site plan, elevation drawings' },
  { title: 'Structural Design', desc: 'Column, beam, footing and slab designs' },
  { title: 'Electrical Layout', desc: 'Complete wiring, switchboard and lighting plan' },
  { title: 'Plumbing Layout', desc: 'Water supply, drainage and sewage design' },
  { title: '3D Elevation', desc: 'Photo-realistic 3D exterior rendering' },
  { title: 'Project Management', desc: 'Dedicated PM with daily reporting' },
  { title: 'Material Procurement', desc: 'Sourcing branded materials from verified vendors' },
  { title: 'Execution', desc: 'Civil, MEP, and finishing work by certified teams' },
  { title: 'Quality Inspection', desc: '100+ checks across all construction phases' },
  { title: 'Handover', desc: 'Snag-free delivery with complete documentation' },
];

const exclusions = [
  { title: 'Government Charges', desc: 'Stamp duty, registration fees, and municipal levies' },
  { title: 'Plan Approval Fees', desc: 'Building plan approval and permit costs' },
  { title: 'Electricity Connection', desc: 'EB connection and meter installation charges' },
  { title: 'Water Connection', desc: 'Municipal water line and connection charges' },
  { title: 'Borewell', desc: 'Borewell drilling and pump installation' },
  { title: 'Compound Wall', desc: 'Boundary wall and gate construction' },
  { title: 'Lift', desc: 'Elevator installation and associated civil work' },
  { title: 'Furniture', desc: 'Loose furniture, beds, sofas, and dining sets' },
  { title: 'Loose Appliances', desc: 'Refrigerator, washing machine, AC units' },
];

function ExclusionItem({ item }: { item: { title: string; desc: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-sm">{item.title}</span>
        <ChevronDownIcon className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="px-5 text-muted-foreground text-sm">{item.desc}</p>
      </div>
    </div>
  );
}

export default function InclusionsExclusions() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad bg-secondary" aria-labelledby="inclusions-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Complete Transparency</p>
          <h2 id="inclusions-heading" className="text-section-title font-bold text-foreground">
            What&apos;s Included &amp; Excluded
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Inclusions */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckIcon className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="font-bold text-foreground text-xl">What Is Included</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inclusions.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-card rounded-xl p-4 card-shadow"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusions */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 font-bold text-sm">✕</span>
              </div>
              <h3 className="font-bold text-foreground text-xl">What Is Not Included</h3>
            </div>
            <div className="space-y-2">
              {exclusions.map((item) => (
                <ExclusionItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}