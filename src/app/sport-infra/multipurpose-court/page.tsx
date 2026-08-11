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
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png",
  alt: 'Acrylic sports flooring for multipurpose outdoor court',
  specs: [
  { label: 'Standard System', value: '5-Layer Acrylic' },
  { label: 'Cushion System', value: '8-Layer Acrylic' },
  { label: 'Ball Bounce', value: 'Consistent' },
  { label: 'UV Resistance', value: 'Yes' },
  { label: 'Anti-slip', value: 'Yes' }],

  certifications: ['Multi-sport', 'UV Resistant', 'All-weather'],
  highlight: 'Reliable outdoor multi-purpose surface for tennis, basketball, badminton, and volleyball'
},
{
  name: 'PP Interlocking Tiles',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png",
  alt: 'PP interlocking tiles for multipurpose sports court',
  specs: [
  { label: 'Size', value: '1×1 ft' },
  { label: 'Thickness', value: '8–15 mm' },
  { label: 'Layer', value: 'Double Layer' },
  { label: 'Usage Life', value: '8–10 years' },
  { label: 'Load Capacity', value: '20 Ton/Tile' }],

  certifications: ['FIBA Certified', 'ITF Certified', 'BWF Compliant'],
  highlight: 'Versatile all-weather tiles suitable for multiple sports on a single surface'
},
{
  name: 'Artificial Turf',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c5c8e41-1768566786833.png",
  alt: 'Artificial turf for multipurpose sports ground',
  specs: [
  { label: 'Pile Height', value: '10–60 mm' },
  { label: 'Dtex', value: '8,000–20,000' },
  { label: 'Backing', value: '3 Layer PU / Latex' },
  { label: 'Warranty', value: '5–8 years' }],

  certifications: ['Multi-sport', 'All-weather'],
  highlight: 'Multi-sport artificial turf for football, cricket, hockey, and field sports'
},
{
  name: 'PVC & Wooden Flooring',
  image: "https://images.unsplash.com/photo-1701272873248-ee041b51b02b",
  alt: 'PVC and wooden flooring for indoor multipurpose sports hall',
  specs: [
  { label: 'PVC 4.5mm', value: 'Comfort & Grip' },
  { label: 'PVC 6mm', value: 'Better Cushion' },
  { label: 'PVC 7mm', value: 'High Performance' },
  { label: 'Maple Wood', value: 'Premium Indoor' }],

  certifications: ['Indoor Multi-sport', 'Professional Grade'],
  highlight: 'Premium indoor multi-use surfaces for sports halls and gymnasiums'
}];


const sportsSupported = [
'Football', 'Cricket', 'Basketball', 'Tennis',
'Badminton', 'Volleyball', 'Pickleball', 'Hockey',
'Futsal', 'Handball', 'Skating', 'Throwball'];


const ancillaryWorks = [
{ title: 'Multi-sport Line Markings', desc: 'Precise line markings for multiple sports on a single court surface.' },
{ title: 'Fencing & Netting', desc: 'Perimeter fencing and sport-specific netting systems.' },
{ title: 'Lighting Solutions', desc: 'LED floodlighting meeting international lux standards for all sports.' },
{ title: 'Net & Post Installations', desc: 'Multi-sport net and post systems for basketball, volleyball, badminton, and tennis.' },
{ title: 'Shell Construction', desc: 'Complete civil and structural shell construction for indoor multi-sport halls.' },
{ title: '2D & 3D Design', desc: 'Detailed court layout drawings and 3D visualisations before construction.' }];


export default function MultipurposeCourtPage() {
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
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">Multi-Sport Versatility</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Multipurpose Court
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Versatile multi-sport courts accommodating football, basketball, tennis, badminton, volleyball, and more — on a single, high-performance surface.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">About Multipurpose Court</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">One Court. Multiple Sports. Maximum Value.</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  LayingStone Sports Infra constructs multipurpose courts that maximise the utility of available space by accommodating multiple sports on a single surface. From schools and residential communities to corporate campuses and government facilities, our multi-sport courts deliver exceptional value and versatility.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  We offer acrylic surfaces, PP interlocking tiles, artificial turf, PVC flooring, and wooden flooring — each capable of supporting multiple sports with appropriate line markings. Our acrylic systems are particularly well-suited for outdoor multi-purpose courts, providing consistent ball bounce for tennis, basketball, badminton, and volleyball.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every court is delivered as a complete turnkey project — from civil base construction and drainage to surface installation, multi-sport line markings, net systems, fencing, and lighting.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Acrylic Surface', 'PP Interlocking', 'Artificial Turf', 'Multi-sport Lines', 'Turnkey Delivery']?.map((tag) =>
                  <span key={tag} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  )}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1d0f304f3-1768227397037.png"
                  alt="Multipurpose sports court with multi-sport line markings for basketball, tennis, and badminton"
                  fill
                  className="object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Sports Supported */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Sports Coverage</span>
              <h2 className="text-2xl font-bold text-[#1F3A5F] mt-3">Sports We Can Accommodate</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {sportsSupported?.map((sport) =>
              <span key={sport} className="bg-[#F3F3F3] border border-gray-200 text-[#1F3A5F] font-semibold text-sm px-4 py-2 rounded-full hover:border-[#C6A15B] hover:bg-[#C6A15B]/5 transition-colors">
                  {sport}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Multipurpose Court Flooring Solutions</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Versatile surface systems for indoor and outdoor multi-sport courts at every performance level.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {products?.map((product) =>
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
                      {product?.specs?.map((spec) =>
                    <div key={spec?.label} className="bg-[#F3F3F3] rounded-lg p-2.5">
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Complete Solutions</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">Ancillary Works & Services</h2>
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

        {/* Trusted Brands */}
        <section className="py-16 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Trusted Partners</span>
              <h2 className="text-2xl font-bold text-[#1F3A5F] mt-3">Brands We Work With</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {['Pace Court', 'KDF Sports Flooring Systems', 'Unica Sports Surface Experts', 'CCGrass', 'Maverick Turf']?.map((brand) =>
              <div key={brand} className="bg-white rounded-xl px-8 py-4 text-[#1F3A5F] font-bold text-sm tracking-wide border border-gray-200">{brand}</div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Multipurpose Court?</h2>
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