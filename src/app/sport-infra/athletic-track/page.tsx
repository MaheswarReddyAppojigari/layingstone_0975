'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

const products = [
{
  name: 'Athletic Track Surface',
  image: "https://images.unsplash.com/photo-1723186051179-69b1dfe2a1f9",
  alt: 'Synthetic athletic track surface with lane markings',
  specs: [
  { label: 'Standard', value: 'World Athletics' },
  { label: 'Surface Type', value: 'Synthetic Track' },
  { label: 'Performance', value: 'Consistent' },
  { label: 'Durability', value: 'Long-lasting' }],

  certifications: ['World Athletics Standard', 'All-weather'],
  highlight: 'Engineered to World Athletics standards for consistent performance and durability'
},
{
  name: 'PU Flooring',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5e6bf85-1772168322710.png",
  alt: 'PU flooring for athletic track surface',
  specs: [
  { label: 'Type', value: 'PU Surface' },
  { label: 'Application', value: 'Track & Field' },
  { label: 'Grip', value: 'Excellent' },
  { label: 'Shock Absorption', value: 'Superior' }],

  certifications: ['World Athletics Standard', 'Shock Absorbing'],
  highlight: 'Premium PU surface providing superior shock absorption for athlete safety'
},
{
  name: 'EPDM Flooring',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11becc0f5-1785642771729.png",
  alt: 'EPDM rubber flooring for athletic track',
  specs: [
  { label: 'Material', value: 'EPDM Rubber' },
  { label: 'Thickness', value: '15–40 mm' },
  { label: 'Weather', value: 'All-weather' },
  { label: 'Maintenance', value: 'Low' }],

  certifications: ['All-weather', 'Durable'],
  highlight: 'Durable EPDM rubber surface for jogging tracks and training areas'
},
{
  name: 'Acrylic Sports Flooring',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1455dea37-1786447150441.png",
  alt: 'Acrylic sports flooring for multi-use athletic areas',
  specs: [
  { label: 'Standard System', value: '5-Layer Acrylic' },
  { label: 'Cushion System', value: '8-Layer Acrylic' },
  { label: 'UV Resistance', value: 'Yes' },
  { label: 'Anti-slip', value: 'Yes' }],

  certifications: ['UV Resistant', 'Anti-slip'],
  highlight: 'Versatile acrylic surface for multi-use athletic and field event areas'
}];


const ancillaryWorks = [
{ title: 'Lane Markings', desc: 'Precise lane markings and field event markings to World Athletics specifications.' },
{ title: 'Drainage System', desc: 'Engineered drainage solutions ensuring year-round track usability in all weather.' },
{ title: 'Lighting Solutions', desc: 'LED floodlighting systems meeting international lux standards for evening athletics.' },
{ title: 'Field Event Areas', desc: 'Construction of long jump, high jump, shot put, and other field event areas.' },
{ title: 'Fencing & Perimeter', desc: 'Perimeter fencing and safety barriers for track and field facilities.' },
{ title: '2D & 3D Design', desc: 'Detailed track layout drawings and 3D visualisations before construction.' }];


export default function AthleticTrackPage() {
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
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">World Athletics Standard</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Athletic Track
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              World Athletics-standard synthetic athletic tracks engineered for consistent performance, athlete safety, and long-term durability.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">About Athletic Track</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">Tracks Built for Champions</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  LayingStone Sports Infra constructs synthetic athletic tracks that comply with World Athletics standards. From school running tracks to full-scale competitive facilities, we deliver surfaces engineered for consistent performance, superior shock absorption, and athlete safety.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our athletic track solutions are designed for schools, universities, sports academies, government sports complexes, and residential communities. We offer synthetic track surfaces, PU flooring, EPDM rubber, and acrylic systems — each selected to match the specific performance requirements and usage intensity of the project.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every track is delivered as a complete turnkey project — from civil base construction and drainage to surface installation, lane markings, field event areas, fencing, and lighting.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['World Athletics Standard', 'Synthetic Surface', 'PU Flooring', 'EPDM Rubber', 'Turnkey Delivery']?.map((tag) =>
                  <span key={tag} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  )}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_144dde2b9-1771577703353.png"
                  alt="Professional synthetic athletic track with lane markings and field event areas"
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Athletic Track Surface Solutions</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                World Athletics-compliant surface systems for running tracks, jogging tracks, and field event areas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {products?.map((product) =>
              <div key={product?.name} className="bg-[#F3F3F3] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
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

        {/* CTA */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Athletic Track?</h2>
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
    </>);

}