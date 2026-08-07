'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const services = [
  { icon: '⚽', title: 'Football Grounds', desc: 'FIFA-standard football pitches with natural or synthetic turf, proper drainage, goal posts, and spectator infrastructure.' },
  { icon: '🏏', title: 'Cricket Grounds', desc: 'Professional cricket grounds with BCCI-standard pitches, outfield preparation, practice nets, and pavilion construction.' },
  { icon: '🏀', title: 'Basketball Courts', desc: 'Indoor and outdoor basketball courts with certified flooring, backboards, lighting, and line markings.' },
  { icon: '🎾', title: 'Tennis Courts', desc: 'ITF-standard tennis courts in hard, clay, or synthetic surfaces with proper fencing, lighting, and drainage.' },
  { icon: '🏃', title: 'Athletic Tracks', desc: 'IAAF-certified synthetic athletic tracks with proper lane markings, drainage, and field event areas.' },
  { icon: '🌿', title: 'Synthetic Turf', desc: 'Premium FIFA-certified synthetic turf installation for football, hockey, and multi-sport applications with shock-absorbing infill.' },
  { icon: '🏟️', title: 'Indoor Sports Facilities', desc: 'Multi-purpose indoor sports halls with sprung flooring, acoustic treatment, ventilation, and spectator seating.' },
  { icon: '🏫', title: 'School Playgrounds', desc: 'Safe, engaging school sports facilities with age-appropriate equipment, synthetic surfaces, and safety surfacing.' },
  { icon: '🔄', title: 'Multi-purpose Courts', desc: 'Versatile multi-sport courts that accommodate basketball, volleyball, badminton, and futsal on a single surface.' },
];

const features = [
  { title: 'Drainage Systems', desc: 'Engineered drainage solutions that prevent waterlogging and ensure year-round playability.' },
  { title: 'Floodlighting', desc: 'LED floodlighting systems meeting international lux standards for day and night play.' },
  { title: 'Equipment Installation', desc: 'Supply and installation of certified sports equipment — goals, nets, posts, and scoreboards.' },
  { title: 'Artificial Grass', desc: 'FIFA Quality Pro certified artificial grass with appropriate pile height and infill for each sport.' },
  { title: 'Spectator Infrastructure', desc: 'Stands, seating, press boxes, and VIP enclosures for professional and community venues.' },
  { title: 'Maintenance Programmes', desc: 'Comprehensive maintenance contracts to keep your sports facility in peak condition year-round.' },
];

const faqs = [
  { q: 'What certifications do your sports surfaces meet?', a: 'Our synthetic turf installations meet FIFA Quality Pro standards. Athletic tracks meet IAAF certification requirements. All surfaces are tested and certified by accredited laboratories.' },
  { q: 'How long does a football ground construction take?', a: 'A standard synthetic turf football pitch (7-a-side) typically takes 4–6 weeks from site preparation to handover. Full-size natural turf grounds take 3–4 months including turf establishment.' },
  { q: 'Do you handle school sports facility projects?', a: 'Yes. We have extensive experience in school and college sports infrastructure, including playgrounds, multi-sport courts, and indoor halls — all designed with student safety as the priority.' },
  { q: 'What maintenance is required for synthetic turf?', a: 'Synthetic turf requires regular brushing, infill top-up, and periodic deep cleaning. We offer annual maintenance contracts that cover all routine and preventive maintenance.' },
  { q: 'Can you retrofit existing sports facilities?', a: 'Yes. We specialise in upgrading and retrofitting existing sports facilities — replacing worn surfaces, upgrading lighting, improving drainage, and adding new amenities.' },
];

export default function SportInfraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#1a3356] to-[#0f2240]" />
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, #D4AF37 0%, transparent 50%)' }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-sm font-medium">Sport Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Arenas Where
              <span className="block text-[#D4AF37]">Champions Are Made</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              International-standard sports infrastructure — from synthetic turf football pitches to multi-sport indoor arenas — built to certified standards for schools, clubs, and professional organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/portfolio" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                View Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-[#D4AF37]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[['100+', 'Sports Facilities Built'], ['15+', 'Sports Disciplines'], ['98%', 'Client Satisfaction'], ['10yr', 'Surface Warranty']]?.map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-[#1F3A5F]">{num}</div>
                  <div className="text-[#1F3A5F]/70 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">What We Build</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Sports Infrastructure Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services?.map((s) => (
                <div key={s?.title} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-3xl mb-4">{s?.icon}</div>
                  <h3 className="font-bold text-[#1F3A5F] mb-2 group-hover:text-[#D4AF37] transition-colors">{s?.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Complete Solutions</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">End-to-End Sports Facility Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features?.map((f) => (
                <div key={f?.title} className="border border-gray-200 rounded-2xl p-6 hover:border-[#D4AF37] hover:shadow-lg transition-all">
                  <h3 className="font-bold text-[#1F3A5F] mb-2">{f?.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Why LayingStone</span>
              <h2 className="text-3xl font-bold text-white mt-3">The LayingStone Sports Advantage</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Certified Surfaces', 'FIFA, IAAF, and ITF certified surfaces tested by accredited laboratories.'],
                ['Experienced Team', 'Sports infrastructure specialists with 15+ years of project experience.'],
                ['Turnkey Delivery', 'Complete project management from design to handover — single point of contact.'],
                ['Quality Materials', 'Premium synthetic turf, certified flooring, and branded equipment from global suppliers.'],
                ['Post-Handover Support', '10-year surface warranty and comprehensive maintenance programmes.'],
                ['Pan-India Delivery', 'Active project sites across all major cities and tier-2 towns in India.'],
              ]?.map(([title, desc]) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-[#D4AF37] mb-2">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Sports Facility?</h2>
            <p className="text-white/70 text-lg mb-10">Talk to our sports infrastructure experts and get a detailed project proposal within 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Get Free Estimate
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
