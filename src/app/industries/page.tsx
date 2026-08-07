'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const industries = [
  {
    icon: '🏠',
    title: 'Residential',
    desc: 'Premium villas, luxury homes, individual houses, and turnkey residential projects built to the highest standards of quality and craftsmanship.',
    services: ['Villa Construction', 'Luxury Homes', 'Individual Houses', 'Turnkey Projects', 'Renovation'],
    href: '/residential-construction',
  },
  {
    icon: '🏢',
    title: 'Commercial',
    desc: 'Corporate offices, retail spaces, shopping complexes, and commercial buildings designed for business success and operational efficiency.',
    services: ['Office Buildings', 'Retail Spaces', 'Shopping Complexes', 'Commercial Renovation'],
    href: '/commercial',
  },
  {
    icon: '🏨',
    title: 'Hospitality',
    desc: 'Hotels, resorts, restaurants, and hospitality venues built to international standards with guest experience at the forefront of every design decision.',
    services: ['Hotels & Resorts', 'Restaurants', 'Banquet Halls', 'Service Apartments'],
    href: '/contact',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'NABH-compliant hospitals, clinics, diagnostic centres, and healthcare facilities designed for patient safety, infection control, and operational efficiency.',
    services: ['Hospitals', 'Clinics', 'Diagnostic Centres', 'Pharmaceutical Plants'],
    href: '/contact',
  },
  {
    icon: '🎓',
    title: 'Education',
    desc: 'Schools, colleges, universities, and training centres designed to inspire learning with safe, modern, and functional environments.',
    services: ['Schools', 'Colleges', 'Universities', 'Training Centres'],
    href: '/contact',
  },
  {
    icon: '🏭',
    title: 'Industrial',
    desc: 'Factories, warehouses, manufacturing plants, and industrial complexes built for operational efficiency, safety, and scalability.',
    services: ['Factories', 'Warehouses', 'Manufacturing Plants', 'Logistics Hubs'],
    href: '/commercial',
  },
  {
    icon: '⚽',
    title: 'Sports',
    desc: 'International-standard sports facilities — from synthetic turf pitches to multi-sport indoor arenas — for schools, clubs, and professional organisations.',
    services: ['Football Grounds', 'Cricket Grounds', 'Indoor Arenas', 'Athletic Tracks'],
    href: '/sport-infra',
  },
  {
    icon: '🏛️',
    title: 'Government',
    desc: 'Public infrastructure projects — government offices, community centres, public parks, and civic facilities built to government standards and specifications.',
    services: ['Government Offices', 'Community Centres', 'Public Infrastructure', 'Civic Facilities'],
    href: '/contact',
  },
  {
    icon: '🙏',
    title: 'Religious',
    desc: 'Temples, mosques, churches, and other places of worship constructed with reverence, precision, and respect for religious traditions and architectural heritage.',
    services: ['Temples', 'Mosques', 'Churches', 'Community Halls'],
    href: '/contact',
  },
  {
    icon: '🛍️',
    title: 'Retail',
    desc: 'Retail showrooms, brand stores, shopping centres, and commercial retail environments designed to maximise customer engagement and sales performance.',
    services: ['Brand Showrooms', 'Retail Stores', 'Shopping Centres', 'Pop-up Spaces'],
    href: '/commercial',
  },
  {
    icon: '🏗️',
    title: 'Real Estate',
    desc: 'End-to-end construction services for real estate developers — residential townships, commercial complexes, and mixed-use developments.',
    services: ['Residential Townships', 'Commercial Complexes', 'Mixed-Use Developments', 'Plotted Developments'],
    href: '/contact',
  },
  {
    icon: '🌆',
    title: 'Public Infrastructure',
    desc: 'Roads, bridges, public parks, drainage systems, and urban infrastructure projects that serve communities and improve quality of life.',
    services: ['Roads & Bridges', 'Public Parks', 'Drainage Systems', 'Urban Infrastructure'],
    href: '/contact',
  },
  {
    icon: '🏢',
    title: 'Corporate',
    desc: 'Corporate headquarters, campuses, and office parks for leading enterprises — designed for productivity, brand expression, and employee wellbeing.',
    services: ['Corporate HQ', 'Office Campuses', 'R&D Centres', 'Data Centres'],
    href: '/commercial',
  },
];

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Director, TechCorp India', text: 'LayingStone delivered our 50,000 sq.ft corporate campus on time and within budget. The quality of construction and attention to detail is exceptional.' },
  { name: 'Dr. Priya Sharma', role: 'CEO, HealthFirst Hospitals', text: 'Our hospital project required strict compliance with NABH standards. LayingStone\'s team demonstrated deep expertise in healthcare construction.' },
  { name: 'Anand Mehta', role: 'Principal, Greenfield School', text: 'The school building LayingStone constructed for us is a benchmark in educational infrastructure. Students and staff love the environment.' },
];

const faqs = [
  { q: 'Does LayingStone work across all industries?', a: 'Yes. We have active experience across residential, commercial, healthcare, education, hospitality, industrial, sports, government, and religious construction sectors.' },
  { q: 'Do you handle turnkey projects for all industries?', a: 'Yes. We offer complete turnkey solutions — from design and approvals to construction and handover — across all industry verticals.' },
  { q: 'Can you handle large-scale multi-building projects?', a: 'Absolutely. We have the capacity, team, and systems to manage large-scale, multi-building, and multi-phase projects simultaneously.' },
  { q: 'Do you have experience with government projects?', a: 'Yes. We have successfully delivered government-funded projects and are familiar with government procurement processes, compliance requirements, and reporting standards.' },
];

export default function IndustriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#162d4a] to-[#0d1f33]" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 70% 30%, #D4AF37 0%, transparent 40%)' }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-sm font-medium">Industries We Serve</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Construction Expertise
              <span className="block text-[#D4AF37]">Across Every Sector</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From residential homes to industrial complexes — LayingStone brings the same commitment to quality, safety, and excellence to every industry we serve.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-[#D4AF37]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[['13+', 'Industries Served'], ['500+', 'Projects Delivered'], ['15+', 'Years Experience'], ['98%', 'Client Retention']]?.map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-[#1F3A5F]">{num}</div>
                  <div className="text-[#1F3A5F]/70 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Industries We Build For</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Every industry has unique construction requirements. Our sector-specific expertise ensures your project is built to the exact standards your industry demands.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industries?.map((ind) => (
                <div
                  key={ind?.title}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(ind?.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`p-6 transition-colors duration-300 ${hoveredCard === ind?.title ? 'bg-[#1F3A5F]' : 'bg-white'}`}>
                    <div className="text-4xl mb-4">{ind?.icon}</div>
                    <h3 className={`font-bold text-lg mb-2 transition-colors ${hoveredCard === ind?.title ? 'text-[#D4AF37]' : 'text-[#1F3A5F]'}`}>
                      {ind?.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 transition-colors ${hoveredCard === ind?.title ? 'text-white/70' : 'text-gray-500'}`}>
                      {ind?.desc}
                    </p>
                    <ul className="space-y-1 mb-5">
                      {ind?.services?.map((s) => (
                        <li key={s} className={`text-xs flex items-center gap-2 transition-colors ${hoveredCard === ind?.title ? 'text-white/60' : 'text-gray-400'}`}>
                          <span className="text-[#D4AF37]">•</span> {s}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={ind?.href}
                      className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${hoveredCard === ind?.title ? 'text-[#D4AF37]' : 'text-[#1F3A5F]'}`}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different Industries Choose LayingStone */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Our Differentiators</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Why Different Industries Choose LayingStone</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                ['🏗️', 'Sector-Specific Expertise', 'Deep knowledge of the unique construction requirements, compliance standards, and operational needs of each industry.'],
                ['📋', 'Regulatory Compliance', 'Full management of industry-specific approvals — NABH for healthcare, BIS for industrial, RERA for residential, and more.'],
                ['⚙️', 'Advanced Construction Technology', 'BIM modelling, drone surveys, and project management software for precision and transparency.'],
                ['🛡️', 'Safety Standards', 'IS code compliance, third-party audits, and zero-tolerance safety protocols on every site.'],
                ['✅', 'Quality Assurance', '100+ quality checkpoints, branded materials, and resident engineers on every project.'],
                ['🤝', 'Long-Term Partnership', 'We build relationships, not just buildings. 98% of our clients return for their next project.'],
              ]?.map(([icon, title, desc]) => (
                <div key={title} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F3A5F] mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Client Stories</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials?.map((t) => (
                <div key={t?.name} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-[#D4AF37] text-4xl mb-4">&ldquo;</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{t?.text}</p>
                  <div>
                    <div className="font-bold text-[#1F3A5F]">{t?.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{t?.role}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Build Something Extraordinary</h2>
            <p className="text-white/70 text-lg mb-10">Whatever your industry, LayingStone has the expertise, team, and systems to deliver your project to the highest standards.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#c9a430] transition-colors">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
