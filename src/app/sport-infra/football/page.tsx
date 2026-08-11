'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

const products = [
{
  name: 'Artificial Turf — Infill Type',
  image: "https://images.unsplash.com/photo-1568235832051-0e67ecd3b4f2",
  alt: 'Artificial turf football pitch with infill system',
  specs: [
  { label: 'Pile Height', value: '30–60 mm' },
  { label: 'Dtex', value: '8,000–20,000' },
  { label: 'Backing', value: '3 Layer PU / Latex' },
  { label: 'Stitch Rate', value: '170/10M (±3%)' },
  { label: 'Density', value: '9,000–12,000' },
  { label: 'Warranty', value: '5–8 years' }],

  certifications: ['FIFA Standard', 'Infill System'],
  highlight: 'Premium infill turf for full-size and 7-a-side football pitches'
},
{
  name: 'Artificial Turf — Non-Infill Type',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6b06b52-1786447148013.png",
  alt: 'Non-infill artificial turf for football training ground',
  specs: [
  { label: 'Pile Height', value: '10–25 mm' },
  { label: 'Dtex', value: '8,000–15,000' },
  { label: 'Backing', value: '3 Layer PU / Latex' },
  { label: 'Roll Size', value: '2×25 / 4×25 / 4×20 mt' },
  { label: 'Warranty', value: '5–8 years' }],

  certifications: ['FIFA Standard', 'Non-Infill System'],
  highlight: 'Low-maintenance non-infill turf for training and recreational use'
}];


const ancillaryWorks = [
{ title: 'Base Work', desc: 'Complete civil foundation including excavation, sub-base preparation, asphalt/PCC base, and drainage system.' },
{ title: 'Fencing & Netting', desc: 'Perimeter fencing and goal netting systems for safety and ball containment.' },
{ title: 'Lighting Solutions', desc: 'LED floodlighting systems meeting international lux standards for evening and night play.' },
{ title: 'Pole Padding', desc: 'Safety padding for goal posts and structural poles to protect players.' },
{ title: 'Bleachers & Seating', desc: 'Spectator stands and seating infrastructure for clubs and institutions.' },
{ title: '2D & 3D Layout Design', desc: 'Detailed site plans and 3D visualisations before construction commences.' }];


const turfBrands = ['Maverick Turf', 'CCGrass', 'Bellinturf', 'Standard Turf'];

const projects = [
  { name: 'Football Ground', type: 'Project Concept', desc: 'Full-size artificial turf football ground with infill system, perimeter fencing, floodlighting, and goal netting.' },
  { name: 'Artificial Turf Football Facility', type: 'Proposed Facility', desc: 'Multi-pitch football facility with FIFA-standard artificial turf, drainage, spectator seating, and changing rooms.' },
  { name: 'Football Training Arena', type: 'Illustrative Project', desc: 'Dedicated football training complex with multiple 7-a-side pitches, non-infill turf, and coaching infrastructure.' },
];

export default function FootballPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#1a3356] to-[#0f2240]" />
          <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 30%, #C6A15B 0%, transparent 60%)' }} />
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20">
            <Link href="/sport-infra" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to Sports Infra
            </Link>
            <div className="inline-flex items-center gap-2 bg-[#C6A15B]/20 border border-[#C6A15B]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">FIFA Standard</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Football Grounds
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Premium artificial turf football pitches with FIFA-standard surfaces, complete base construction, and full ancillary installations.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">About Football</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">World-Class Pitches for Every Level of Play</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  LayingStone Sports Infra designs and constructs football grounds that meet international performance standards. From 5-a-side training pitches to full-size competitive grounds, we deliver artificial turf systems engineered for consistent ball roll, player safety, and year-round playability.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our football pitch solutions serve schools, sports academies, residential communities, corporate campuses, clubs, and government sports facilities. We offer both infill and non-infill turf systems, selected based on the intended use, traffic levels, and performance requirements of each project.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every pitch is built on a properly engineered civil base with integrated drainage, ensuring the surface remains playable in all weather conditions. Complete ancillary works — fencing, lighting, goal posts, netting, and bleachers — are delivered as part of our turnkey service.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['FIFA Standard', 'Artificial Turf', 'Infill & Non-Infill', 'Drainage System', 'Turnkey Delivery']?.map((tag) =>
                  <span key={tag} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  )}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_130e9d1cb-1766838331066.png"
                  alt="Premium artificial turf football pitch with goal posts and line markings"
                  fill
                  className="object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Selected Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Football Facility Concepts</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">Illustrative project concepts representing the scope and type of football infrastructure we design and build.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects?.map((project) => (
                <div key={project?.name} className="bg-[#F3F3F3] rounded-2xl p-6 border border-gray-100 hover:border-[#C6A15B]/30 hover:shadow-lg transition-all">
                  <span className="inline-block bg-[#C6A15B]/15 text-[#C6A15B] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">{project?.type}</span>
                  <h3 className="font-bold text-[#1F3A5F] text-lg mb-2">{project?.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Football Turf Systems</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Premium artificial turf systems engineered for football — available in infill and non-infill configurations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {products?.map((product) =>
              <div key={product?.name} className="bg-[#F3F3F3] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                    src={product?.image}
                    alt={product?.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-xl">{product?.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#C6A15B] text-sm font-medium mb-4">{product?.highlight}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product?.specs?.map((spec) =>
                    <div key={spec?.label} className="bg-white rounded-lg p-2.5">
                          <div className="text-xs text-gray-400 mb-0.5">{spec?.label}</div>
                          <div className="text-sm font-semibold text-[#1F3A5F]">{spec?.value}</div>
                        </div>
                    )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product?.certifications?.map((cert) =>
                    <span key={cert} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-2.5 py-1 rounded-full">{cert}</span>
                    )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Ancillary Works */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Complete Solutions</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">Ancillary Works & Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ancillaryWorks?.map((item) =>
              <div key={item?.title} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 hover:border-[#C6A15B]/30">
                  <h3 className="font-bold text-[#1F3A5F] mb-2">{item?.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item?.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Trusted Brands */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Trusted Partners</span>
              <h2 className="text-2xl font-bold text-[#1F3A5F] mt-3">Turf Brands We Work With</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {turfBrands?.map((brand) =>
              <div key={brand} className="bg-[#F3F3F3] rounded-xl px-8 py-4 text-[#1F3A5F] font-bold text-sm tracking-wide border border-gray-200">
                  {brand}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Football Ground?</h2>
            <p className="text-white/70 mb-8">Get a detailed project proposal from our sports infrastructure experts within 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#C6A15B] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#b8924f] transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/sport-infra" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                Explore Other Sports
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );

}