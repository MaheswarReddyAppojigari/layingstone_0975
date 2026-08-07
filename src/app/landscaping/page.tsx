'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const services = [
  { icon: '🌿', title: 'Garden Design', desc: 'Bespoke garden designs that harmonise with your architecture — from formal English gardens to naturalistic tropical landscapes.' },
  { icon: '🌱', title: 'Lawn Development', desc: 'Premium lawn installation using certified grass varieties, soil preparation, irrigation systems, and ongoing maintenance programmes.' },
  { icon: '🪨', title: 'Hardscaping', desc: 'Durable, beautiful hardscape elements — stone pathways, retaining walls, patios, and decorative paving that define outdoor spaces.' },
  { icon: '🌸', title: 'Softscaping', desc: 'Curated planting schemes with trees, shrubs, flowering plants, and ground covers selected for climate, soil, and aesthetic harmony.' },
  { icon: '💧', title: 'Water Features', desc: 'Custom water features — fountains, koi ponds, cascading waterfalls, and reflective pools that add serenity and visual drama.' },
  { icon: '🏡', title: 'Pergolas & Gazebos', desc: 'Handcrafted pergolas, gazebos, and shade structures that extend your living space into the outdoors.' },
  { icon: '🚶', title: 'Walkways & Pathways', desc: 'Elegant garden pathways in natural stone, brick, or concrete that guide movement and add structure to the landscape.' },
  { icon: '💡', title: 'Outdoor Lighting', desc: 'Landscape lighting design that transforms your garden after dark — uplighting, path lights, and feature illumination.' },
  { icon: '🌾', title: 'Vertical Gardens', desc: 'Living walls and vertical garden installations for homes, offices, and commercial spaces — bringing nature to every surface.' },
  { icon: '🏙️', title: 'Terrace Gardens', desc: 'Rooftop and terrace garden transformations with lightweight planters, irrigation, and weather-resistant materials.' },
  { icon: '🔧', title: 'Landscape Maintenance', desc: 'Comprehensive maintenance contracts — mowing, pruning, fertilisation, pest control, and seasonal replanting.' },
  { icon: '🏢', title: 'Commercial Landscaping', desc: 'Large-scale commercial landscape projects for corporate campuses, hotels, hospitals, and residential townships.' },
];

const process = [
  { step: '01', title: 'Site Survey', desc: 'Topographic survey, soil analysis, sun/shade mapping, and existing vegetation assessment.' },
  { step: '02', title: 'Concept Design', desc: 'Hand-drawn and digital concept plans with plant palettes, material boards, and 3D visualisations.' },
  { step: '03', title: 'Design Approval', desc: 'Client walkthrough of the design, revisions, and final approval before any work begins.' },
  { step: '04', title: 'Site Preparation', desc: 'Grading, soil improvement, drainage installation, and irrigation system laying.' },
  { step: '05', title: 'Planting & Construction', desc: 'Hardscape construction followed by planting, turf laying, and feature installation.' },
  { step: '06', title: 'Handover & Maintenance', desc: 'Final walkthrough, care instructions, and optional ongoing maintenance programme.' },
];

const faqs = [
  { q: 'What is the best time of year to start a landscaping project?', a: 'In most parts of India, the post-monsoon period (October–February) is ideal for landscaping. However, with proper irrigation and plant selection, projects can be executed year-round.' },
  { q: 'Do you provide irrigation system installation?', a: 'Yes. We design and install drip irrigation, sprinkler systems, and smart irrigation controllers as part of our comprehensive landscaping service.' },
  { q: 'Can you work on small residential gardens?', a: 'Absolutely. We handle projects of all sizes — from compact apartment balconies and terrace gardens to large residential estates and commercial campuses.' },
  { q: 'Do you offer ongoing maintenance after project completion?', a: 'Yes. We offer monthly, quarterly, and annual maintenance contracts covering all aspects of garden upkeep — mowing, pruning, fertilisation, pest control, and seasonal replanting.' },
  { q: 'What is the typical cost of a residential landscaping project?', a: 'Costs vary significantly based on scope, materials, and site conditions. We provide detailed, itemised quotations after a free site visit and consultation.' },
];

export default function LandscapingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a3a1a 0%, #1F3A5F 50%, #0d2a0d 100%)' }}>
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(ellipse at 20% 70%, #4a7c4a 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #D4AF37 0%, transparent 40%)' }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium">Landscaping & Outdoor Design</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Where Nature Meets
              <span className="block text-[#D4AF37]">Masterful Design</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium landscaping and outdoor design services — transforming gardens, terraces, and commercial grounds into living works of art that endure through every season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Get Free Site Visit
              </Link>
              <Link href="/portfolio" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                View Projects
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">About Our Landscaping</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">
                  Crafting Outdoor Spaces That Breathe Life
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LayingStone&apos;s landscaping division brings together horticultural expertise, design creativity, and construction precision to create outdoor environments that are as enduring as they are beautiful. We believe every outdoor space — however small — has the potential to become a sanctuary.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From intimate residential gardens to sprawling commercial landscapes, our team of landscape architects, horticulturists, and skilled craftsmen work together to deliver projects that exceed expectations and stand the test of time.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[['300+', 'Gardens Created'], ['15+', 'Years Experience'], ['50+', 'Plant Species Used']]?.map(([num, label]) => (
                    <div key={label} className="text-center p-4 bg-[#F3F3F3] rounded-xl">
                      <div className="text-2xl font-bold text-[#D4AF37]">{num}</div>
                      <div className="text-xs text-gray-500 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[['🌿', 'Residential Gardens'], ['🏢', 'Commercial Grounds'], ['🌊', 'Water Features'], ['💡', 'Outdoor Lighting']]?.map(([icon, label]) => (
                  <div key={label} className="bg-[#F3F3F3] rounded-2xl p-8 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                    <span className="text-4xl">{icon}</span>
                    <span className="text-[#1F3A5F] font-semibold text-sm text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Complete Landscaping Solutions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services?.map((s) => (
                <div key={s?.title} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-3xl mb-4">{s?.icon}</div>
                  <h3 className="font-bold text-[#1F3A5F] mb-2 group-hover:text-[#D4AF37] transition-colors text-sm">{s?.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential vs Commercial */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-[#F3F3F3] rounded-3xl p-10">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-4">Residential Landscaping</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Your home garden is an extension of your living space. We create personalised residential landscapes that reflect your lifestyle — from low-maintenance contemporary gardens to lush tropical retreats.
                </p>
                <ul className="space-y-2">
                  {['Front yard and entrance landscaping', 'Backyard garden design', 'Terrace and balcony gardens', 'Swimming pool surrounds', 'Children\'s play areas', 'Kitchen herb gardens']?.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-green-500">🌱</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1F3A5F] rounded-3xl p-10">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-white mb-4">Commercial Landscaping</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  First impressions matter in business. Our commercial landscaping services create professional, welcoming outdoor environments for corporate campuses, hotels, hospitals, and retail developments.
                </p>
                <ul className="space-y-2">
                  {['Corporate campus grounds', 'Hotel and resort landscaping', 'Hospital healing gardens', 'Retail and mall exteriors', 'Industrial green belts', 'Township common areas']?.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-[#D4AF37]">🌿</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Project Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((p) => (
                <div key={p?.step} className="flex gap-5 bg-white rounded-2xl p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 border-2 border-green-400 flex items-center justify-center font-bold text-green-600">
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
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #1a3a1a 0%, #1F3A5F 100%)' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-white/70 text-lg mb-10">Book a free site visit and receive a detailed landscaping proposal within 5 working days.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Book Free Site Visit
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
