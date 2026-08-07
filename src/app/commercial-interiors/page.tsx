'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const services = [
  { icon: '🏢', title: 'Office Interiors', desc: 'Modern, activity-based office environments that boost productivity, reflect brand identity, and attract top talent.' },
  { icon: '🤝', title: 'Reception Areas', desc: 'First impressions that last — premium reception lobbies with branded elements, statement lighting, and premium materials.' },
  { icon: '📊', title: 'Conference Rooms', desc: 'Acoustically designed conference rooms with integrated AV systems, ergonomic seating, and professional finishes.' },
  { icon: '💼', title: 'Workstations & Cabins', desc: 'Ergonomic workstation layouts, executive cabins, and collaborative zones designed for the modern workforce.' },
  { icon: '🛍️', title: 'Retail Interiors', desc: 'Customer-centric retail environments with strategic product placement, brand-aligned design, and premium display systems.' },
  { icon: '🏨', title: 'Hotel & Hospitality', desc: 'Luxury hotel lobbies, guest rooms, restaurants, and banquet halls that deliver memorable guest experiences.' },
  { icon: '🍽️', title: 'Restaurant Interiors', desc: 'Atmospheric dining spaces with custom lighting, acoustic treatment, and design that enhances the culinary experience.' },
  { icon: '🏥', title: 'Healthcare Interiors', desc: 'Infection-control compliant healthcare interiors — clinics, hospitals, and diagnostic centres designed for patient comfort and operational efficiency.' },
  { icon: '🎓', title: 'Educational Interiors', desc: 'Inspiring learning environments — classrooms, libraries, labs, and common areas designed for focus, collaboration, and safety.' },
];

const brandingServices = [
  'Brand-aligned colour schemes and material palettes',
  'Custom signage and wayfinding systems',
  'Feature walls with company values and brand story',
  'Branded reception counters and furniture',
  'Corporate art curation and installation',
  'Environmental graphics and wall murals',
];

const process = [
  { step: '01', title: 'Brief & Discovery', desc: 'Understanding your brand, culture, workflow, and space requirements.' },
  { step: '02', title: 'Concept Design', desc: 'Space planning, mood boards, and 3D concept renders for approval.' },
  { step: '03', title: 'Design Development', desc: 'Detailed drawings, material specifications, and BOQ preparation.' },
  { step: '04', title: 'Procurement', desc: 'Sourcing premium materials and furniture from certified vendors.' },
  { step: '05', title: 'Execution', desc: 'Phased construction with minimal disruption to ongoing operations.' },
  { step: '06', title: 'Handover', desc: 'Snagging, commissioning, and post-handover support.' },
];

const faqs = [
  { q: 'Can you work in occupied offices without disrupting operations?', a: 'Yes. We specialise in phased execution and off-hours work to minimise disruption to your business operations during renovation or fit-out.' },
  { q: 'Do you handle turnkey commercial interior projects?', a: 'Absolutely. We manage the entire project from design to handover — including civil work, MEP, furniture, AV systems, and final styling.' },
  { q: 'What is the typical timeline for an office interior project?', a: 'A 5,000 sq.ft office fit-out typically takes 30–45 working days. Larger projects are phased accordingly with detailed schedules provided upfront.' },
  { q: 'Do you provide post-handover maintenance?', a: 'Yes. We offer annual maintenance contracts (AMC) for all commercial interior projects, covering preventive maintenance and emergency repairs.' },
];

export default function CommercialInteriorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#162d4a] to-[#0d1f33]" />
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: 'radial-gradient(ellipse at 70% 30%, #D4AF37 0%, transparent 55%)' }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-sm font-medium">Commercial Interiors</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Workspaces That
              <span className="block text-[#D4AF37]">Inspire Performance</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium commercial interior design and fit-out services — creating workspaces, retail environments, and hospitality spaces that drive business results and reflect your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/portfolio" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Commercial Interior Services</h2>
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

        {/* Corporate Branding */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Brand Integration</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-6">
                  Your Brand, Built Into Every Surface
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Great commercial interiors do more than look good — they communicate your brand values to every visitor, client, and employee who walks through the door. Our corporate branding integration service ensures your workspace is a living expression of your company identity.
                </p>
                <ul className="space-y-3">
                  {brandingServices?.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[['🎨', 'Brand Colours'], ['📝', 'Custom Signage'], ['🖼️', 'Feature Walls'], ['💡', 'Ambient Lighting']]?.map(([icon, label]) => (
                  <div key={label} className="bg-[#F3F3F3] rounded-2xl p-8 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                    <span className="text-4xl">{icon}</span>
                    <span className="text-[#1F3A5F] font-semibold text-sm text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Our Execution Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((p) => (
                <div key={p?.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37]">
                    {p?.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{p?.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{p?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Our Work</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">Recent Commercial Projects</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { type: 'Corporate Office', area: '8,500 sq.ft', location: 'Bangalore', year: '2025' },
                { type: 'Retail Showroom', area: '3,200 sq.ft', location: 'Hyderabad', year: '2025' },
                { type: 'Hotel Lobby & Rooms', area: '12,000 sq.ft', location: 'Chennai', year: '2024' },
              ]?.map((p) => (
                <div key={p?.type} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="h-48 bg-gradient-to-br from-[#1F3A5F] to-[#162d4a] flex items-center justify-center">
                    <span className="text-white/30 text-5xl">🏢</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#1F3A5F] mb-2 group-hover:text-[#D4AF37] transition-colors">{p?.type}</h3>
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span>📍 {p?.location}</span>
                      <span>📐 {p?.area}</span>
                      <span>📅 {p?.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/portfolio" className="inline-flex items-center gap-2 border-2 border-[#1F3A5F] text-[#1F3A5F] font-semibold px-8 py-3 rounded-xl hover:bg-[#1F3A5F] hover:text-white transition-colors">
                View Full Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">FAQs</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">Common Questions</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Commercial Space?</h2>
            <p className="text-white/70 text-lg mb-10">Get a free space planning consultation and concept design within 5 working days.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Start Your Project
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
