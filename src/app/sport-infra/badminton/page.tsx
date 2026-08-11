'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  { name: 'Indoor Badminton Courts', type: 'Project Concept', desc: 'Multi-court indoor badminton facility with PP interlocking tile surfaces, professional lighting, and spectator seating.' },
  { name: 'Multi-Court Badminton Arena', type: 'Proposed Facility', desc: 'Large-scale badminton arena accommodating 6–10 courts with wooden flooring, climate control, and tournament infrastructure.' },
  { name: 'Badminton Training Facility', type: 'Illustrative Project', desc: 'Dedicated training facility with acrylic and PVC surface options, coaching areas, and BWF-compliant court dimensions.' },
];

const products = [
  {
    name: 'PP Interlocking Tiles',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png',
    alt: 'PP interlocking tiles for badminton court surface',
    specs: [
      { label: 'Size', value: '1×1 ft' },
      { label: 'Thickness', value: '8–15 mm' },
      { label: 'Layer', value: 'Double Layer' },
      { label: 'Installation', value: 'Interlock System' },
      { label: 'Usage Life', value: '8–10 years' },
      { label: 'Load Capacity', value: '20 Ton/Tile' },
    ],
    certifications: ['FIBA Certified', 'BWF Compliant', 'Labosport Certified'],
    highlight: 'Superior grip, shock absorption, all-weather durability',
  },
  {
    name: 'Acrylic Sports Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png',
    alt: 'Acrylic sports flooring for badminton court',
    specs: [
      { label: 'Standard System', value: '5-Layer Acrylic' },
      { label: 'Cushion System', value: '8-Layer Acrylic' },
      { label: 'Finish', value: 'Anti-slip, UV resistant' },
      { label: 'Weather', value: 'All-weather resistant' },
    ],
    certifications: ['BWF Compliant', 'UV Resistant'],
    highlight: 'Consistent ball response, excellent grip, low maintenance',
  },
  {
    name: 'PVC Sports Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png',
    alt: 'PVC sports flooring rolls for indoor badminton court',
    specs: [
      { label: '4.5mm', value: 'Comfort & Grip' },
      { label: '6mm', value: 'Better Cushion' },
      { label: '7mm', value: 'High Performance' },
    ],
    certifications: ['Indoor Use', 'Anti-slip'],
    highlight: 'Ideal for indoor courts — superior cushioning and grip',
  },
  {
    name: 'Wooden Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c0c41ec9-1772226714692.png',
    alt: 'Premium wooden flooring for professional badminton court',
    specs: [
      { label: 'Maple Wood', value: 'Premium Finish' },
      { label: 'Teak Wood', value: 'High Durability' },
      { label: 'Shock Absorption', value: 'Superior' },
      { label: 'Standard', value: 'Professional Play' },
    ],
    certifications: ['BWF Compliant', 'Professional Grade'],
    highlight: 'Premium finish with superior shock absorption for elite play',
  },
];

const ancillaryWorks = [
  { title: 'Fencing', desc: 'Perimeter fencing solutions for court security and ball containment.' },
  { title: 'Lighting Solutions', desc: 'LED lighting systems meeting international lux standards for day and night play.' },
  { title: 'Net Installations', desc: 'BWF-standard net posts and net systems for professional play.' },
  { title: 'Shell Construction', desc: 'Complete civil and structural shell construction for indoor badminton halls.' },
  { title: '2D & 3D Design', desc: 'Detailed architectural drawings and 3D visualisations before construction begins.' },
  { title: 'Bleachers & Seating', desc: 'Spectator seating and bleacher systems for tournament-ready facilities.' },
];

export default function BadmintonPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#1a3356] to-[#0f2240]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 70% 30%, #C6A15B 0%, transparent 60%)' }} />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20">
            <Link href="/sport-infra" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to Sports Infra
            </Link>
            <div className="inline-flex items-center gap-2 bg-[#C6A15B]/20 border border-[#C6A15B]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">BWF Compliant</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Badminton Courts</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Professional badminton court construction with BWF-compliant surfaces, premium flooring systems, and complete turnkey delivery.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">About Badminton</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">Precision-Built Courts for Competitive Play</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  LayingStone Sports Infra constructs badminton courts that meet the exacting standards of the Badminton World Federation (BWF). From single-court installations to multi-court indoor halls, we deliver surfaces engineered for consistent shuttle response, player safety, and long-term durability.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our badminton court solutions are designed for schools, sports academies, residential communities, corporate campuses, and professional clubs. We offer a comprehensive range of flooring systems — PP interlocking tiles, acrylic surfaces, PVC flooring, and premium wooden floors — each selected to match the specific performance requirements and budget of the project.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every court is constructed with precision civil base work, proper drainage, accurate line markings, and complete ancillary installations including lighting, fencing, and net systems — all delivered as a turnkey project.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['BWF Compliant', 'Turnkey Delivery', 'Premium Flooring', 'Civil Base Work', 'Line Markings']?.map((tag) => (
                    <span key={tag} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="https://img.rocket.new/generatedImages/rocket_gen_img_1c0c41ec9-1772226714692.png" alt="Professional badminton court with premium flooring and net system" fill className="object-cover" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Badminton Facility Concepts</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Illustrative project concepts representing the scope and type of badminton infrastructure we design and build.
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Badminton Court Flooring Solutions</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                We offer multiple certified flooring systems to match every performance level, environment, and budget.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {products?.map((product) => (
                <div key={product?.name} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={product?.image} alt={product?.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-xl">{product?.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#C6A15B] text-sm font-medium mb-4">{product?.highlight}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product?.specs?.map((spec) => (
                        <div key={spec?.label} className="bg-[#F3F3F3] rounded-lg p-2.5">
                          <div className="text-xs text-gray-400 mb-0.5">{spec?.label}</div>
                          <div className="text-sm font-semibold text-[#1F3A5F]">{spec?.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product?.certifications?.map((cert) => (
                        <span key={cert} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-2.5 py-1 rounded-full">{cert}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ancillary Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Complete Solutions</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">Ancillary Works & Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ancillaryWorks?.map((item) => (
                <div key={item?.title} className="bg-[#F3F3F3] rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 hover:border-[#C6A15B]/30">
                  <h3 className="font-bold text-[#1F3A5F] mb-2">{item?.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Brands */}
        <section className="py-16 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Trusted Partners</span>
              <h2 className="text-2xl font-bold text-[#1F3A5F] mt-3">Brands We Work With</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {['Pace Court', 'KDF Sports Flooring Systems', 'Unica Sports Surface Experts']?.map((brand) => (
                <div key={brand} className="bg-white rounded-xl px-8 py-4 text-[#1F3A5F] font-bold text-sm tracking-wide border border-gray-200">{brand}</div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Badminton Court?</h2>
            <p className="text-white/70 mb-8">Get a detailed project proposal from our sports infrastructure experts within 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#C6A15B] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#b8924f] transition-colors">Get Free Consultation</Link>
              <Link href="/sport-infra" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">Explore Other Sports</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
