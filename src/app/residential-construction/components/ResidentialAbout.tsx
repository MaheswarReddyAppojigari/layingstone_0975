'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ResidentialAbout() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {if (e.isIntersecting) setVisible(true);}, { threshold: 0.2 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-background" aria-labelledby="residential-about-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden card-shadow">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1a83393d1-1768482982554.png"
                alt="Premium residential villa with manicured garden, bright natural light, elegant architecture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
            {/* Floating badge */}
            
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="accent-line mb-4" />
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About Our Service</p>
            <h2 id="residential-about-heading" className="text-section-title font-bold text-foreground mb-5">
              Building Homes That Tell Your Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At LayingStone, we believe your home is more than a structure — it&apos;s a reflection of your aspirations. Our residential construction service delivers precision-engineered homes using only the finest branded materials.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From initial consultation to final handover, our team of qualified  engineers, dedicated project managers, and skilled craftsmen ensure every milestone is met with excellence and transparency.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
              { value: '12+', label: 'Years Experience' },
              { value: '100+', label: 'Quality Checks' },
              { value: '98%', label: 'On-Time Delivery' },
              { value: '5★', label: 'Client Rating' }]?.
              map((stat) =>
              <div key={stat?.label} className="bg-secondary rounded-xl p-4">
                  <p className="text-2xl font-bold text-accent">{stat?.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat?.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}