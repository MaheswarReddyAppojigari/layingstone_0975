'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

const products = [
{
  name: 'PP Interlocking Tiles',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_106d88112-1784878137725.png",
  alt: 'PP interlocking tiles for skating rink surface',
  specs: [
  { label: 'Size', value: '1×1 ft' },
  { label: 'Thickness', value: '8–15 mm' },
  { label: 'Layer', value: 'Double Layer' },
  { label: 'Installation', value: 'Interlock System' },
  { label: 'Usage Life', value: '8–10 years' },
  { label: 'Load Capacity', value: '20 Ton/Tile' }],

  certifications: ['FIBA Certified', 'Labosport Certified', 'All-weather'],
  highlight: 'Consistent grip, all-weather durability, built to perform for skating rinks'
},
{
  name: 'PP Tiles — Colour Options',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png",
  alt: 'Coloured PP interlocking tiles for skating rink design',
  specs: [
  { label: 'Colours', value: 'Multiple Options' },
  { label: 'Maintenance', value: 'Low' },
  { label: 'Durability', value: '8–10 years' },
  { label: 'Surface', value: 'Smooth Glide' }],

  certifications: ['All-weather', 'Low Maintenance'],
  highlight: 'Multiple colour options for custom skating rink designs and layouts'
}];


const ancillaryWorks = [
{ title: 'Rink Perimeter Boarding', desc: 'Safety boarding and perimeter barriers for skating rink enclosures.' },
{ title: 'Lighting Solutions', desc: 'LED lighting systems providing optimal illumination for skating rinks.' },
{ title: 'Civil Base Work', desc: 'Complete civil foundation and base construction for skating rink installation.' },
{ title: 'Safety Padding', desc: 'Perimeter safety padding and protective barriers for skater safety.' },
{ title: '2D & 3D Design', desc: 'Detailed rink layout drawings and 3D visualisations before construction.' },
{ title: 'Fencing & Enclosure', desc: 'Perimeter fencing and enclosure systems for skating rink facilities.' }];


export default function SkatingRinkPage() {
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
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">All-Weather PP Tile Surface</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Skating Rink
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Durable PP interlocking tile skating rinks with FIBA-certified surfaces, all-weather performance, and low maintenance — built for communities, schools, and recreational facilities.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">About Skating Rink</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">All-Weather Skating Surfaces Built to Last</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  LayingStone Sports Infra constructs skating rinks using premium PP interlocking tile systems — engineered for consistent grip, smooth glide performance, and all-weather durability. Our skating rink solutions are designed for residential communities, schools, recreational parks, and entertainment facilities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  PP interlocking tiles are the ideal surface for skating rinks — providing a consistent, smooth surface with excellent load-bearing capacity (20 Ton/Tile), an 8–10 year usage life, and low maintenance requirements. Available in multiple colour options, they allow for custom rink designs and layouts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every rink is delivered as a complete turnkey project — from civil base construction to tile installation, perimeter boarding, safety padding, lighting, and fencing.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['PP Interlocking Tiles', 'FIBA Certified', 'All-weather', 'Low Maintenance', 'Turnkey Delivery']?.map((tag) =>
                  <span key={tag} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  )}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png"
                  alt="PP interlocking tile skating rink with perimeter boarding and lighting"
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Skating Rink Surface Solutions</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Premium PP interlocking tile systems for all-weather skating rinks.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Skating Rink?</h2>
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