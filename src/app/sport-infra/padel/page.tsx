'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

const courtModels = [
{
  name: 'Full Panoramic Model',
  image: "https://images.unsplash.com/photo-1709587825152-d4ce1b2224a3",
  alt: 'Full panoramic padel court with glass walls on all sides',
  specs: [
  { label: 'Length', value: '20 m' },
  { label: 'Width', value: '10 m' },
  { label: 'Height', value: '4 m' },
  { label: 'Glass', value: '12 mm Toughened' },
  { label: 'Glass Panels', value: '18 pcs' },
  { label: 'Turf Pile', value: '13 mm' }],

  certifications: ['FIP Certified', 'Full Panoramic', 'Toughened Glass'],
  highlight: 'Maximum spectator visibility with full panoramic glass enclosure'
},
{
  name: 'Panoramic Model',
  image: "https://images.unsplash.com/photo-1709587824645-cf6dd2041e2b",
  alt: 'Panoramic padel court with partial glass walls',
  specs: [
  { label: 'Length', value: '20 m' },
  { label: 'Width', value: '10 m' },
  { label: 'Height', value: '4 m' },
  { label: 'Glass', value: '12 mm Toughened' },
  { label: 'Turf Dtex', value: '8,800' },
  { label: 'Turf Stitches', value: '35/cm' }],

  certifications: ['FIP Certified', 'Panoramic', 'Toughened Glass'],
  highlight: 'Partial panoramic glass for a balance of visibility and structural strength'
},
{
  name: 'Standard Model',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14f279c8f-1772230074954.png",
  alt: 'Standard padel court with mesh fencing and glass back walls',
  specs: [
  { label: 'Length', value: '20 m' },
  { label: 'Width', value: '10 m' },
  { label: 'Height', value: '4 m' },
  { label: 'Mesh Frame', value: '50×50×2 mm' },
  { label: 'Mesh Thickness', value: '4 mm' },
  { label: 'Mesh Size', value: '1×2 m' }],

  certifications: ['FIP Certified', 'Standard Model'],
  highlight: 'Cost-effective standard model with mesh fencing and glass back walls'
}];


const structureSpecs = [
{ label: 'Column', value: '100×50 mm' },
{ label: 'Top Structure', value: '100×100 mm' },
{ label: 'Bottom Structure', value: '100×50 mm' },
{ label: 'Glass Gauge', value: '12 mm (Toughened)' },
{ label: 'Glass Size', value: '1995×2995 mm' },
{ label: 'Glass Panels', value: '18 pcs' },
{ label: 'Turf Pile Height', value: '13 mm' },
{ label: 'Turf Dtex', value: '8,800' },
{ label: 'Turf Stitches', value: '35/cm' },
{ label: 'Light Type', value: 'Curved LED' },
{ label: 'Light Size', value: '100×3000 mm' },
{ label: 'Light Units', value: '8 pcs' }];


const ancillaryWorks = [
{ title: 'Steel Structure', desc: 'Durable galvanised steel structure with column, top, and bottom frame components.' },
{ title: 'Toughened Glass Panels', desc: '12mm toughened glass panels for panoramic and full panoramic court models.' },
{ title: 'Artificial Turf Surface', desc: 'Premium 13mm pile artificial turf with optimal ball response for padel.' },
{ title: 'LED Lighting', desc: 'Curved LED lighting systems (8 units) providing optimal court illumination.' },
{ title: 'Mesh Fencing', desc: '4mm mesh fencing with 50×50×2mm frame for standard model courts.' },
{ title: 'Civil Base Work', desc: 'Complete civil foundation and base construction for padel court installation.' }];


export default function PadelPage() {
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
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">FIP Certified</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Padel Courts
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Premium Courts. International Standards. Built to Last. FIP-certified padel courts with toughened glass panels, steel structure, and premium artificial turf.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">About Padel</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">World-Class Padel Courts Built to International Standards</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  LayingStone Sports Infra constructs FIP (International Padel Federation) certified padel courts with precision-engineered steel structures, toughened glass panels, and premium artificial turf surfaces. Our padel courts are available in three models — Full Panoramic, Panoramic, and Standard — to suit different environments and budgets.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Each court is built to the official padel court dimensions: 20m length × 10m width × 4m height. The artificial turf surface features a 13mm pile height with 8,800 Dtex and 35 stitches per cm — engineered for optimal ball response and player performance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our padel court solutions are designed for sports clubs, residential communities, hotels, corporate campuses, and recreational facilities. Every court is delivered as a complete turnkey project including civil base work, structure, glass, turf, lighting, and net installation.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['FIP Certified', 'Toughened Glass', 'Steel Structure', '13mm Turf', 'Turnkey Delivery']?.map((tag) =>
                  <span key={tag} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  )}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_18802a80d-1776552673942.png"
                  alt="FIP-certified padel court with toughened glass panels and artificial turf surface"
                  fill
                  className="object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Court Specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Technical Specifications</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">Padel Court Specifications</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {structureSpecs?.map((spec) =>
              <div key={spec?.label} className="bg-[#F3F3F3] rounded-xl p-4 border border-gray-100">
                  <div className="text-xs text-gray-400 mb-1">{spec?.label}</div>
                  <div className="text-sm font-bold text-[#1F3A5F]">{spec?.value}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Our Products — Court Models */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Padel Court Models</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Three court models to suit different environments, visibility requirements, and budgets.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {courtModels?.map((model) =>
              <div key={model?.name} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={model?.image} alt={model?.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-lg">{model?.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#C6A15B] text-sm font-medium mb-4">{model?.highlight}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {model?.specs?.map((spec) =>
                    <div key={spec?.label} className="bg-[#F3F3F3] rounded-lg p-2.5">
                          <div className="text-xs text-gray-400 mb-0.5">{spec?.label}</div>
                          <div className="text-sm font-semibold text-[#1F3A5F]">{spec?.value}</div>
                        </div>
                    )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {model?.certifications?.map((cert) =>
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Complete Solutions</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">What's Included</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ancillaryWorks?.map((item) =>
              <div key={item?.title} className="bg-[#F3F3F3] rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 hover:border-[#C6A15B]/30">
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Padel Court?</h2>
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