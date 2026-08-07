'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const interiorServices = [
  { icon: '🛋️', title: 'Living Room Interiors', desc: 'Curated living spaces that balance aesthetics and comfort — from statement walls to bespoke furniture layouts and ambient lighting design.' },
  { icon: '🛏️', title: 'Bedroom Interiors', desc: 'Serene, personalised bedrooms with custom wardrobes, premium upholstery, and lighting that promotes restful living.' },
  { icon: '🍳', title: 'Modular Kitchen', desc: 'Ergonomic modular kitchens with premium shutters, granite countertops, soft-close hardware, and intelligent storage solutions.' },
  { icon: '🍽️', title: 'Dining Room', desc: 'Elegant dining spaces designed for family gatherings — from intimate settings to grand formal dining rooms.' },
  { icon: '🚿', title: 'Bathroom Interiors', desc: 'Spa-inspired bathrooms with premium sanitary ware, designer tiles, and smart storage — turning daily routines into rituals.' },
  { icon: '👔', title: 'Wardrobes & Storage', desc: 'Floor-to-ceiling wardrobes, walk-in closets, and custom storage units crafted for maximum utility and visual elegance.' },
  { icon: '📺', title: 'TV Units & Entertainment', desc: 'Custom TV units, media walls, and entertainment zones that become the focal point of your living space.' },
  { icon: '✨', title: 'False Ceiling & Lighting', desc: 'Layered false ceiling designs with integrated cove lighting, recessed fixtures, and decorative elements for dramatic effect.' },
  { icon: '📐', title: 'Space Planning', desc: 'Intelligent space planning that maximises every square foot — ensuring flow, functionality, and visual harmony.' },
];

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your lifestyle, preferences, budget, and timeline.' },
  { step: '02', title: '3D Design Concept', desc: 'Our designers create photorealistic 3D renders of your space before a single nail is hammered.' },
  { step: '03', title: 'Material Selection', desc: 'Curated material boards with premium options across every category — you choose, we source.' },
  { step: '04', title: 'Execution', desc: 'Skilled craftsmen execute the design with precision under dedicated project management.' },
  { step: '05', title: 'Quality Checks', desc: '50+ quality checkpoints covering every finish, fitting, and fixture.' },
  { step: '06', title: 'Handover', desc: 'Walkthrough, snagging, and a 1-year warranty on all interior work.' },
];

const materials = [
  { category: 'Laminates', brands: 'Merino, Greenlam, Century' },
  { category: 'Hardware', brands: 'Hettich, Häfele, Blum' },
  { category: 'Countertops', brands: 'Granite, Quartz, Corian' },
  { category: 'Sanitary Ware', brands: 'Jaquar, Hindware, Parryware' },
  { category: 'Tiles', brands: 'Kajaria, Johnson, Somany' },
  { category: 'Paint', brands: 'Asian Paints, Birla Opus, Nerolac' },
  { category: 'Lighting', brands: 'Philips, Wipro, Havells' },
  { category: 'Flooring', brands: 'Pergo, Quick-Step, Greenlam' },
];

const faqs = [
  { q: 'How long does a full home interior project take?', a: 'A 3BHK interior project typically takes 45–60 working days from design approval to handover, depending on scope and customisation.' },
  { q: 'Do you provide 3D visualisation before starting work?', a: 'Yes. Every project includes photorealistic 3D renders of all rooms so you can visualise and approve the design before execution begins.' },
  { q: 'Can I customise materials and finishes?', a: 'Absolutely. We offer a wide range of material options across every category. Our designers will guide you through selections that match your taste and budget.' },
  { q: 'What warranty do you provide on interior work?', a: 'We provide a 1-year comprehensive warranty on all interior work, covering workmanship defects, hardware issues, and finish problems.' },
  { q: 'Do you handle turnkey interior projects?', a: 'Yes. We manage the entire project from design to handover — including procurement, execution, quality checks, and final styling.' },
];

export default function ResidentialInteriorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#1a3356] to-[#0f2240]" />
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(ellipse at 30% 60%, #D4AF37 0%, transparent 60%)' }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-sm font-medium">Residential Interiors</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Spaces That Tell
              <span className="block text-[#D4AF37]">Your Story</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium residential interior design and execution — where every room is crafted to reflect your personality, elevate your lifestyle, and stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Book Free Design Consultation
              </Link>
              <Link href="/portfolio" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                View Interior Projects
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">About Our Interiors</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">
                  Where Design Meets Craftsmanship
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At LayingStone, residential interiors are not just about aesthetics — they are about creating spaces that work for you. Our interior design team combines deep knowledge of spatial planning, material science, and lifestyle design to deliver homes that are as functional as they are beautiful.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From a single room makeover to a complete home transformation, we manage every detail — from the first design sketch to the final styling touch — with the same level of care and precision.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[['200+', 'Homes Designed'], ['45', 'Avg. Days to Complete'], ['100%', 'Client Satisfaction']]?.map(([num, label]) => (
                    <div key={label} className="text-center p-4 bg-[#F3F3F3] rounded-xl">
                      <div className="text-2xl font-bold text-[#D4AF37]">{num}</div>
                      <div className="text-xs text-gray-500 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F3F3F3] rounded-3xl p-8">
                <h3 className="font-bold text-[#1F3A5F] mb-6 text-lg">Our Design Philosophy</h3>
                <ul className="space-y-4">
                  {[
                    ['Functionality First', 'Every design decision is rooted in how you actually live.'],
                    ['Premium Materials', 'We source only from trusted, certified brands.'],
                    ['Timeless Aesthetics', 'Designs that look as good in 10 years as they do today.'],
                    ['Transparent Pricing', 'Detailed BOQ with no hidden costs or surprises.'],
                  ]?.map(([title, desc]) => (
                    <li key={title} className="flex gap-3">
                      <span className="text-[#D4AF37] font-bold flex-shrink-0">✦</span>
                      <div>
                        <span className="font-semibold text-[#1F3A5F] text-sm">{title}: </span>
                        <span className="text-gray-500 text-sm">{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Complete Interior Solutions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interiorServices?.map((s) => (
                <div key={s?.title} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-3xl mb-4">{s?.icon}</div>
                  <h3 className="font-bold text-[#1F3A5F] mb-2 group-hover:text-[#D4AF37] transition-colors">{s?.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Interiors */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Premium Offering</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">Luxury Interior Collection</h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  For clients who demand the extraordinary, our Luxury Interior Collection brings together imported materials, bespoke furniture, custom millwork, and world-class finishes — creating homes that are truly one-of-a-kind.
                </p>
                <ul className="space-y-3">
                  {['Italian marble and natural stone surfaces', 'Custom-designed furniture and upholstery', 'Imported hardware and sanitary ware', 'Smart home integration and automation', 'Bespoke lighting design by certified consultants', 'Art curation and styling services']?.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="text-[#D4AF37]">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[['🪨', 'Natural Stone'], ['🛁', 'Luxury Bathrooms'], ['💡', 'Smart Lighting'], ['🎨', 'Bespoke Finishes']]?.map(([icon, label]) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors">
                    <span className="text-4xl">{icon}</span>
                    <span className="text-white font-semibold text-sm text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Our Design Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((p) => (
                <div key={p?.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37]">
                    {p?.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F3A5F] mb-1">{p?.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Premium Materials</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">Brands We Trust</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {materials?.map((m) => (
                <div key={m?.category} className="bg-white rounded-xl p-5 text-center hover:shadow-md transition-shadow">
                  <div className="font-bold text-[#1F3A5F] mb-1 text-sm">{m?.category}</div>
                  <div className="text-gray-400 text-xs">{m?.brands}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">FAQs</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs?.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#1F3A5F] hover:bg-[#F3F3F3] transition-colors"
                  >
                    {faq?.q}
                    <span className={`text-[#D4AF37] text-xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq?.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#1F3A5F] to-[#162d4a]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transform Your Home Today</h2>
            <p className="text-white/70 text-lg mb-10">Book a free design consultation and get a 3D concept of your space within 7 days.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Book Free Consultation
              </Link>
              <a href="tel:+919876543210" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
