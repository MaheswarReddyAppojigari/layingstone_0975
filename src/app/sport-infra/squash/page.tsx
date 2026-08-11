'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

const products = [
{
  name: 'Maple Wood Flooring',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3ed2ca9-1769170991033.png",
  alt: 'Premium maple wood flooring for professional squash court',
  specs: [
  { label: 'Type', value: 'Maple Wood' },
  { label: 'Finish', value: 'Premium' },
  { label: 'Shock Absorption', value: 'Superior' },
  { label: 'Standard', value: 'Professional Play' }],

  certifications: ['Professional Grade', 'Superior Shock Absorption'],
  highlight: 'The gold standard for professional squash — superior shock absorption and premium finish'
},
{
  name: 'Teak Wood Flooring',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eaea4d05-1786447149883.png",
  alt: 'Teak wood flooring for high-durability squash court',
  specs: [
  { label: 'Type', value: 'Teak Wood' },
  { label: 'Durability', value: 'High' },
  { label: 'Maintenance', value: 'Low' },
  { label: 'Lifespan', value: 'Long-lasting' }],

  certifications: ['High Durability', 'Professional Grade'],
  highlight: 'High-durability teak wood surface for long-lasting squash court performance'
},
{
  name: 'PVC Flooring — 7mm High Performance',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3ed2ca9-1769170991033.png",
  alt: 'High performance PVC flooring for squash court',
  specs: [
  { label: 'Thickness', value: '7mm' },
  { label: 'Performance', value: 'High Performance' },
  { label: 'Grip', value: 'Excellent' },
  { label: 'Cushion', value: 'Superior' }],

  certifications: ['Indoor Use', 'Anti-slip', 'High Performance'],
  highlight: 'High-performance PVC surface with excellent grip and superior cushioning'
},
{
  name: 'PVC Flooring — 4.5mm & 6mm',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_146c7305a-1786447149920.png",
  alt: 'PVC sports flooring options for squash court',
  specs: [
  { label: '4.5mm', value: 'Comfort & Grip' },
  { label: '6mm', value: 'Better Cushion' },
  { label: 'Maintenance', value: 'Low' },
  { label: 'Durability', value: 'Long-lasting' }],

  certifications: ['Indoor Use', 'Anti-slip'],
  highlight: 'Cost-effective PVC options for recreational and club-level squash courts'
}];


const ancillaryWorks = [
{ title: 'Glass Back Wall', desc: 'Toughened glass back wall installation for spectator viewing and professional play.' },
{ title: 'Lighting Solutions', desc: 'LED lighting systems providing optimal illumination for indoor squash courts.' },
{ title: 'Shell Construction', desc: 'Complete civil and structural shell construction for squash court enclosures.' },
{ title: 'Court Markings', desc: 'Precise line markings to official squash court dimensions and specifications.' },
{ title: '2D & 3D Design', desc: 'Detailed court layout drawings and 3D visualisations before construction.' },
{ title: 'Ventilation & HVAC', desc: 'Coordination of ventilation and climate control systems for indoor courts.' }];


export default function SquashPage() {
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
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">Professional Indoor Courts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Squash Courts
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Professional squash courts with premium maple wood, teak wood, and high-performance PVC flooring — built for elite indoor play.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">About Squash</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">Precision-Built Enclosures for Elite Indoor Play</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  LayingStone Sports Infra constructs professional squash courts with flooring systems engineered for the specific demands of the sport — superior shock absorption, excellent grip, consistent ball response, and long-lasting indoor performance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our squash court solutions are designed for sports clubs, residential communities, corporate wellness facilities, hotels, and professional academies. We offer premium wooden flooring (maple and teak) and high-performance PVC surfaces — each selected to match the performance requirements and budget of the project.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every court is delivered as a complete turnkey project — from civil base construction and shell enclosure to surface installation, glass back wall, line markings, lighting, and ventilation coordination.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Maple Wood', 'Teak Wood', 'PVC Flooring', 'Glass Back Wall', 'Turnkey Delivery']?.map((tag) =>
                  <span key={tag} className="bg-[#1F3A5F]/10 text-[#1F3A5F] text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  )}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1f3ed2ca9-1769170991033.png"
                  alt="Professional squash court with premium wooden flooring and glass back wall"
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Squash Court Flooring Solutions</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Premium flooring systems for professional and recreational squash courts.
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Squash Court?</h2>
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