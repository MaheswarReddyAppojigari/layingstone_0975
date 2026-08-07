'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const features = [
  { icon: 'BanknotesIcon', title: 'Transparent Pricing', desc: 'Fixed per sq.ft rate with complete cost breakdown upfront.' },
  { icon: 'CubeIcon', title: 'Premium Materials', desc: 'Only JSW, UltraTech, Kajaria, Jaquar and other top brands.' },
  { icon: 'ShieldCheckIcon', title: 'No Hidden Charges', desc: 'What we quote is what you pay. Zero surprises.' },
  { icon: 'AcademicCapIcon', title: 'Professional Engineers', desc: '150+ certified engineers with 12+ years average experience.' },
  { icon: 'ClockIcon', title: 'On-time Delivery', desc: '98% of projects delivered on schedule with milestone tracking.' },
  { icon: 'DocumentCheckIcon', title: 'Structural Warranty', desc: 'Up to lifetime structural warranty depending on package.' },
  { icon: 'UserIcon', title: 'Dedicated PM', desc: 'Your own project manager as single point of contact.' },
  { icon: 'DevicePhoneMobileIcon', title: 'Regular Site Updates', desc: 'Daily photo and video updates via our project app.' },
  { icon: 'ClipboardDocumentCheckIcon', title: '100+ Quality Checks', desc: 'Rigorous inspection at every construction milestone.' },
];

export default function FeatureHighlights() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad bg-background" aria-labelledby="features-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The LayingStone Advantage</p>
          <h2 id="features-heading" className="text-section-title font-bold text-foreground">
            Why Clients Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`flex items-start gap-4 bg-card rounded-xl p-5 card-shadow hover-lift transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name={feat.icon as any} size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{feat.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}