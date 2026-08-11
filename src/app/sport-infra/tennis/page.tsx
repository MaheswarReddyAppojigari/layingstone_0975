'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

const products = [
{
  name: 'Acrylic Sports Flooring',
  image: "https://images.unsplash.com/photo-1657472503293-756fee8981ad",
  alt: 'Acrylic tennis court surface with line markings',
  specs: [
  { label: 'Standard System', value: '5-Layer Acrylic' },
  { label: 'Cushion System', value: '8-Layer Acrylic' },
  { label: 'Finish', value: 'Anti-slip, UV resistant' },
  { label: 'Weather', value: 'All-weather resistant' },
  { label: 'Ball Bounce', value: 'Consistent' }],

  certifications: ['ITF Compliant', 'UV Resistant', 'Anti-slip'],
  highlight: 'Excellent grip, consistent ball bounce, low maintenance outdoor surface'
},
{
  name: 'PP Interlocking Tiles',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_106d88112-1784878137725.png",
  alt: 'PP interlocking tiles for tennis court',
  specs: [
  { label: 'Size', value: '1×1 ft' },
  { label: 'Thickness', value: '8–15 mm' },
  { label: 'Layer', value: 'Double Layer' },
  { label: 'Usage Life', value: '8–10 years' },
  { label: 'Load Capacity', value: '20 Ton/Tile' }],

  certifications: ['ITF Certified', 'Labosport Certified', 'FIBA Certified'],
  highlight: 'All-weather durability with superior grip and shock absorption'
},
{
  name: 'PVC Sports Flooring',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png",
  alt: 'PVC sports flooring for indoor tennis court',
  specs: [
  { label: '4.5mm', value: 'Comfort & Grip' },
  { label: '6mm', value: 'Better Cushion' },
  { label: '7mm', value: 'High Performance' }],

  certifications: ['Indoor Use', 'Anti-slip'],
  highlight: 'Premium indoor tennis surface with superior cushioning'
},
{
  name: 'Wooden Flooring',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6ae303c-1781710723147.png",
  alt: 'Premium wooden flooring for indoor tennis court',
  specs: [
  { label: 'Maple Wood', value: 'Premium Finish' },
  { label: 'Teak Wood', value: 'High Durability' },
  { label: 'Shock Absorption', value: 'Superior' }],

  certifications: ['ITF Compliant', 'Professional Grade'],
  highlight: 'Elite indoor tennis surface with natural shock absorption'
}];


const ancillaryWorks = [
{ title: 'Fencing', desc: 'Chain-link and panel fencing systems designed for tennis court perimeters.' },
{ title: 'Lighting Solutions', desc: 'LED floodlighting meeting ITF lux requirements for competitive and recreational play.' },
{ title: 'Net Installations', desc: 'ITF-standard net posts, centre straps, and net systems.' },
{ title: '2D & 3D Design', desc: 'Detailed court layout drawings and 3D visualisations before construction.' },
{ title: 'Bleachers & Seating', desc: 'Spectator seating and bleacher systems for club and tournament facilities.' },
{ title: 'Pole Padding', desc: 'Safety padding for net posts and structural poles.' }];


export default function TennisPage() {
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
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">ITF Certified</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Tennis Courts
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              ITF-standard tennis courts with premium acrylic, PP interlocking, PVC, and wooden surface options — built for consistent performance and long-term durability.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">About Tennis</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">Courts Built to International Standards</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  LayingStone Sports Infra constructs tennis courts that comply with International Tennis Federation (ITF) standards. Whether for a residential community, sports club, school, or professional academy, we deliver surfaces that provide consistent ball bounce, excellent grip, and player safety across all weather conditions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  We offer a comprehensive range of surface options — acrylic, PP interlocking tiles, PVC, and wooden flooring — each engineered for specific performance characteristics and environments. Our acrylic systems are available in both standard 5-layer and cushion 8-layer configurations, providing options for different levels of shock absorption and ball response.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every court is delivered as a complete turnkey project — from civil base construction and drainage to surface installation, line markings, net systems, fencing, and lighting.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['ITF Certified', 'Acrylic Surface', 'PP Interlocking', 'Wooden Flooring', 'Turnkey Delivery']?.map((tag) =>
                  <span key={tag} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  )}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_14f279c8f-1772230074954.png"
                  alt="Professional tennis court with acrylic surface and net system"
                  fill
                  className="object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Tennis Court Flooring Solutions</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Multiple certified surface systems for indoor and outdoor tennis courts at every performance level.
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
              <h2 className="text-2xl font-bold text-[#1F3A5F] mt-3">Brands We Work With</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {['Pace Court', 'KDF Sports Flooring Systems', 'Unica Sports Surface Experts']?.map((brand) =>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Tennis Court?</h2>
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
    </>);

}