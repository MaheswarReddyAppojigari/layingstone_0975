'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const residentialServices = [
{
  title: 'Villa Construction',
  desc: 'Bespoke luxury villas crafted with premium materials, custom architecture, and smart home integration.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9553347-1774335786277.png",
  alt: 'Luxury villa construction with pool, manicured garden, bright daylight, elegant facade'
},
{
  title: 'Luxury Homes',
  desc: 'High-end residential construction for discerning homeowners who demand the finest quality.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_138f85c32-1769300661385.png",
  alt: 'Luxury home with modern architecture, bright natural lighting, open spaces, premium finishes'
},
{
  title: 'Individual Houses',
  desc: 'Thoughtfully designed individual homes that balance functionality, aesthetics, and budget.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1161213ba-1772790626305.png",
  alt: 'Individual house with garden, well-lit exterior, warm welcoming facade'
},
{
  title: 'Turnkey Projects',
  desc: 'Complete turnkey solutions — from land development to fully furnished, move-in ready homes.',
  image: "https://images.unsplash.com/photo-1647011943268-17ae8f8969d1",
  alt: 'Modern turnkey home interior with premium furnishings, bright natural light, elegant decor'
},
{
  title: 'Renovation',
  desc: 'Transform existing spaces with structural upgrades, modern interiors, and energy-efficient systems.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19cf0c50c-1775104393385.png",
  alt: 'Home renovation in progress with workers, bright construction site, modern upgrades'
}];


export default function ResidentialServices() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {if (e.isIntersecting) setVisible(true);}, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-secondary" aria-labelledby="res-services-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Build</p>
          <h2 id="res-services-heading" className="text-section-title font-bold text-foreground">
            Residential Construction Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {residentialServices?.map((service, i) =>
          <div
            key={service?.title}
            className={`group bg-card rounded-2xl overflow-hidden card-shadow hover-lift transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
            }
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <div className="relative h-44 overflow-hidden">
                <AppImage
                src={service?.image}
                alt={service?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground text-sm mb-2 group-hover:text-accent transition-colors">{service?.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{service?.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}