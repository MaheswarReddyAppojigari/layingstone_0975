'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const sports = [
  {
    slug: 'badminton',
    title: 'Badminton',
    subtitle: 'BWF Compliant Courts',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="8" y="28" width="36" height="4" rx="2" fill="#C6A15B" opacity="0.3"/>
        <rect x="10" y="29" width="32" height="2" rx="1" fill="#C6A15B"/>
        <line x1="26" y1="30" x2="52" y2="8" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="54" cy="6" rx="5" ry="3" fill="#C6A15B" opacity="0.4" stroke="#C6A15B" strokeWidth="1.5"/>
        <line x1="50" y1="4" x2="58" y2="4" stroke="#C6A15B" strokeWidth="1" opacity="0.6"/>
        <line x1="50" y1="6" x2="58" y2="6" stroke="#C6A15B" strokeWidth="1" opacity="0.6"/>
        <line x1="50" y1="8" x2="58" y2="8" stroke="#C6A15B" strokeWidth="1" opacity="0.6"/>
        <rect x="8" y="44" width="36" height="1.5" rx="0.75" fill="#1F3A5F" opacity="0.3"/>
        <rect x="8" y="50" width="36" height="1.5" rx="0.75" fill="#1F3A5F" opacity="0.3"/>
        <line x1="14" y1="44" x2="14" y2="52" stroke="#1F3A5F" strokeWidth="1" opacity="0.3"/>
        <line x1="26" y1="44" x2="26" y2="52" stroke="#1F3A5F" strokeWidth="1" opacity="0.3"/>
        <line x1="38" y1="44" x2="38" y2="52" stroke="#1F3A5F" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    desc: 'BWF-compliant courts with premium PP interlocking tiles, acrylic, PVC, and wooden flooring options.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'football',
    title: 'Football',
    subtitle: 'FIFA Standard Pitches',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="32" cy="32" r="18" stroke="#1F3A5F" strokeWidth="2"/>
        <polygon points="32,18 36,26 44,26 38,32 40,40 32,35 24,40 26,32 20,26 28,26" fill="none" stroke="#C6A15B" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="32" cy="32" r="3" fill="#C6A15B" opacity="0.5"/>
        <line x1="8" y1="52" x2="56" y2="52" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.3"/>
        <line x1="12" y1="52" x2="12" y2="58" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.3"/>
        <line x1="52" y1="52" x2="52" y2="58" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
    desc: 'Artificial turf pitches with premium infill systems, drainage, fencing, and lighting solutions.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'tennis',
    title: 'Tennis',
    subtitle: 'ITF Certified Courts',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="32" cy="32" r="10" stroke="#1F3A5F" strokeWidth="2"/>
        <path d="M22 32 Q27 24 32 32 Q37 40 42 32" stroke="#C6A15B" strokeWidth="1.5" fill="none"/>
        <rect x="6" y="46" width="52" height="2" rx="1" fill="#1F3A5F" opacity="0.2"/>
        <rect x="6" y="50" width="52" height="2" rx="1" fill="#1F3A5F" opacity="0.2"/>
        <line x1="32" y1="46" x2="32" y2="52" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.4"/>
        <line x1="6" y1="46" x2="6" y2="52" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.3"/>
        <line x1="58" y1="46" x2="58" y2="52" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.3"/>
        <line x1="6" y1="14" x2="58" y2="14" stroke="#1F3A5F" strokeWidth="1" opacity="0.2"/>
        <line x1="6" y1="14" x2="6" y2="52" stroke="#1F3A5F" strokeWidth="1" opacity="0.2"/>
        <line x1="58" y1="14" x2="58" y2="52" stroke="#1F3A5F" strokeWidth="1" opacity="0.2"/>
      </svg>
    ),
    desc: 'ITF-standard courts with acrylic, PP interlocking, PVC, and wooden surface options.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'pickleball',
    title: 'PickleBall',
    subtitle: 'USA Pickleball Standard',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="32" cy="28" r="12" stroke="#1F3A5F" strokeWidth="2"/>
        <circle cx="32" cy="28" r="4" fill="#C6A15B" opacity="0.3" stroke="#C6A15B" strokeWidth="1.5"/>
        <circle cx="26" cy="22" r="2" fill="#C6A15B" opacity="0.4"/>
        <circle cx="38" cy="22" r="2" fill="#C6A15B" opacity="0.4"/>
        <circle cx="26" cy="34" r="2" fill="#C6A15B" opacity="0.4"/>
        <circle cx="38" cy="34" r="2" fill="#C6A15B" opacity="0.4"/>
        <rect x="29" y="40" width="6" height="14" rx="3" fill="#1F3A5F" opacity="0.6"/>
        <rect x="24" y="52" width="16" height="3" rx="1.5" fill="#1F3A5F" opacity="0.4"/>
      </svg>
    ),
    desc: 'Precision-engineered pickleball courts with acrylic and PP tile surfaces, built to USA Pickleball standards.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'basketball',
    title: 'Basketball',
    subtitle: 'FIBA Compliant Courts',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="32" cy="30" r="14" stroke="#1F3A5F" strokeWidth="2"/>
        <line x1="18" y1="30" x2="46" y2="30" stroke="#C6A15B" strokeWidth="1.5"/>
        <path d="M32 16 Q40 23 40 30 Q40 37 32 44" stroke="#C6A15B" strokeWidth="1.5" fill="none"/>
        <path d="M32 16 Q24 23 24 30 Q24 37 32 44" stroke="#C6A15B" strokeWidth="1.5" fill="none"/>
        <rect x="26" y="6" width="12" height="2" rx="1" fill="#1F3A5F" opacity="0.5"/>
        <rect x="30" y="8" width="4" height="8" rx="1" fill="#1F3A5F" opacity="0.3"/>
        <rect x="6" y="48" width="52" height="2" rx="1" fill="#1F3A5F" opacity="0.2"/>
        <line x1="6" y1="48" x2="6" y2="54" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.3"/>
        <line x1="58" y1="48" x2="58" y2="54" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
    desc: 'FIBA-compliant courts with PP interlocking tiles, acrylic, PVC, and premium wooden flooring.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'squash',
    title: 'Squash',
    subtitle: 'Professional Indoor Courts',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="10" y="10" width="44" height="44" rx="2" stroke="#1F3A5F" strokeWidth="2" fill="none"/>
        <rect x="10" y="10" width="44" height="14" rx="2" fill="#C6A15B" opacity="0.15"/>
        <line x1="10" y1="24" x2="54" y2="24" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.5"/>
        <line x1="10" y1="44" x2="54" y2="44" stroke="#1F3A5F" strokeWidth="1" opacity="0.3"/>
        <line x1="32" y1="24" x2="32" y2="54" stroke="#1F3A5F" strokeWidth="1" opacity="0.3"/>
        <circle cx="38" cy="36" r="4" stroke="#C6A15B" strokeWidth="1.5" fill="none"/>
        <circle cx="38" cy="36" r="1.5" fill="#C6A15B" opacity="0.5"/>
      </svg>
    ),
    desc: 'Professional squash courts with maple wood, teak wood, and high-performance PVC flooring solutions.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'athletic-track',
    title: 'Athletic Track',
    subtitle: 'World Athletics Standard',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <ellipse cx="32" cy="36" rx="22" ry="14" stroke="#1F3A5F" strokeWidth="2" fill="none"/>
        <ellipse cx="32" cy="36" rx="16" ry="8" stroke="#C6A15B" strokeWidth="1.5" fill="none"/>
        <line x1="10" y1="36" x2="54" y2="36" stroke="#1F3A5F" strokeWidth="1" opacity="0.2"/>
        <line x1="10" y1="32" x2="54" y2="32" stroke="#1F3A5F" strokeWidth="0.8" opacity="0.15"/>
        <line x1="10" y1="40" x2="54" y2="40" stroke="#1F3A5F" strokeWidth="0.8" opacity="0.15"/>
        <circle cx="32" cy="20" r="4" stroke="#C6A15B" strokeWidth="1.5" fill="none"/>
        <line x1="32" y1="24" x2="32" y2="30" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.6"/>
        <line x1="28" y1="27" x2="36" y2="27" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.6"/>
        <line x1="30" y1="30" x2="28" y2="36" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.6"/>
        <line x1="34" y1="30" x2="36" y2="36" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
    desc: 'World Athletics-standard synthetic athletic tracks engineered for consistent performance and durability.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'cricket',
    title: 'Cricket',
    subtitle: 'Professional Pitches & Nets',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="28" y="8" width="8" height="3" rx="1" fill="#1F3A5F" opacity="0.5"/>
        <line x1="30" y1="11" x2="30" y2="52" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.4"/>
        <line x1="34" y1="11" x2="34" y2="52" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.4"/>
        <line x1="32" y1="8" x2="32" y2="11" stroke="#1F3A5F" strokeWidth="1" opacity="0.3"/>
        <line x1="28" y1="20" x2="36" y2="20" stroke="#C6A15B" strokeWidth="1.5" opacity="0.7"/>
        <line x1="28" y1="44" x2="36" y2="44" stroke="#C6A15B" strokeWidth="1.5" opacity="0.7"/>
        <ellipse cx="32" cy="36" rx="20" ry="8" stroke="#1F3A5F" strokeWidth="1.5" fill="none" opacity="0.3"/>
        <path d="M16 44 Q32 52 48 44" stroke="#C6A15B" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <circle cx="44" cy="30" r="4" stroke="#C6A15B" strokeWidth="1.5" fill="none"/>
        <line x1="40" y1="34" x2="22" y2="48" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'Professional cricket pitches and practice nets with premium artificial turf and BCCI-standard construction.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'padel',
    title: 'Padel',
    subtitle: 'FIP Certified Courts',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="8" y="16" width="48" height="32" rx="2" stroke="#1F3A5F" strokeWidth="2" fill="none"/>
        <rect x="8" y="16" width="12" height="32" fill="#C6A15B" opacity="0.1" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 2"/>
        <rect x="44" y="16" width="12" height="32" fill="#C6A15B" opacity="0.1" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="32" y1="16" x2="32" y2="48" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.5"/>
        <line x1="8" y1="32" x2="56" y2="32" stroke="#C6A15B" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="32" cy="32" r="3" fill="#C6A15B" opacity="0.4"/>
        <line x1="8" y1="16" x2="8" y2="10" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.4"/>
        <line x1="56" y1="16" x2="56" y2="10" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.4"/>
        <line x1="8" y1="48" x2="8" y2="54" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.4"/>
        <line x1="56" y1="48" x2="56" y2="54" stroke="#1F3A5F" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    desc: 'FIP-certified padel courts with toughened glass panels, steel structure, and premium artificial turf surface.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'skating-rink',
    title: 'Skating Rink',
    subtitle: 'All-Weather PP Tile Surface',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <ellipse cx="32" cy="36" rx="24" ry="14" stroke="#1F3A5F" strokeWidth="2" fill="none"/>
        <ellipse cx="32" cy="36" rx="24" ry="14" fill="#C6A15B" opacity="0.05"/>
        <line x1="8" y1="36" x2="56" y2="36" stroke="#1F3A5F" strokeWidth="0.8" opacity="0.2"/>
        <line x1="10" y1="30" x2="54" y2="30" stroke="#1F3A5F" strokeWidth="0.8" opacity="0.15"/>
        <line x1="10" y1="42" x2="54" y2="42" stroke="#1F3A5F" strokeWidth="0.8" opacity="0.15"/>
        <path d="M20 28 Q26 22 32 28 Q38 34 44 28" stroke="#C6A15B" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <line x1="18" y1="28" x2="14" y2="32" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="46" y1="28" x2="50" y2="32" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'Durable PP interlocking tile skating rinks with FIBA-certified surfaces, all-weather performance, and low maintenance.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
  {
    slug: 'multipurpose-court',
    title: 'Multipurpose Court',
    subtitle: 'Multi-Sport Versatility',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="8" y="12" width="48" height="40" rx="2" stroke="#1F3A5F" strokeWidth="2" fill="none"/>
        <line x1="32" y1="12" x2="32" y2="52" stroke="#C6A15B" strokeWidth="1.5" opacity="0.6"/>
        <line x1="8" y1="32" x2="56" y2="32" stroke="#C6A15B" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="32" cy="32" r="8" stroke="#1F3A5F" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <rect x="14" y="18" width="12" height="8" rx="1" stroke="#C6A15B" strokeWidth="1" fill="none" opacity="0.5"/>
        <rect x="38" y="18" width="12" height="8" rx="1" stroke="#C6A15B" strokeWidth="1" fill="none" opacity="0.5"/>
        <rect x="14" y="38" width="12" height="8" rx="1" stroke="#C6A15B" strokeWidth="1" fill="none" opacity="0.5"/>
        <rect x="38" y="38" width="12" height="8" rx="1" stroke="#C6A15B" strokeWidth="1" fill="none" opacity="0.5"/>
      </svg>
    ),
    desc: 'Versatile multi-sport courts accommodating football, basketball, tennis, badminton, and volleyball on a single surface.',
    color: 'from-[#1F3A5F]/5 to-[#C6A15B]/5',
  },
];

const faqs = [
  { q: 'What certifications do your sports surfaces meet?', a: 'Our surfaces comply with international standards — ITF for tennis, USA Pickleball guidelines, FIBA for basketball, BWF for badminton, World Athletics for athletic tracks, and FIP for padel courts. All surfaces are tested and certified by accredited laboratories.' },
  { q: 'How long does a sports court construction take?', a: 'A standard synthetic turf football pitch (7-a-side) typically takes 4–6 weeks from site preparation to handover. Padel courts take 2–3 weeks. Multi-sport courts and acrylic surfaces typically take 3–5 weeks depending on civil base requirements.' },
  { q: 'Do you handle school and institutional projects?', a: 'Yes. We have extensive experience in school, college, and corporate campus sports infrastructure — including playgrounds, multi-sport courts, athletic tracks, and indoor halls — all designed with safety and performance as priorities.' },
  { q: 'What flooring options are available for indoor courts?', a: 'For indoor courts we offer PP interlocking tiles, acrylic surfaces, PU flooring, PVC flooring (4.5mm, 6mm, 7mm), and premium wooden flooring (Maple and Teak) — each suited to specific sports and performance requirements.' },
  { q: 'Can you retrofit or upgrade existing sports facilities?', a: 'Yes. We specialise in upgrading and retrofitting existing sports facilities — replacing worn surfaces, upgrading lighting, improving drainage, and adding new amenities — with minimal disruption to ongoing use.' },
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
            style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, #C6A15B 0%, transparent 50%)' }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20">
            <div className="inline-flex items-center gap-2 bg-[#C6A15B]/20 border border-[#C6A15B]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
              <span className="text-[#C6A15B] text-sm font-medium tracking-wide">Sport Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Arenas Where
              <span className="block text-[#C6A15B]">Champions Are Made</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              International-standard sports infrastructure — from synthetic turf football pitches to padel courts and athletic tracks — built to certified standards for schools, clubs, and professional organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#C6A15B] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#b8924f] transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/portfolio" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                View Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-[#C6A15B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[['100+', 'Sports Facilities Built'], ['11', 'Sports Disciplines'], ['98%', 'Client Satisfaction'], ['8yr', 'Surface Warranty']]?.map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-[#1F3A5F]">{num}</div>
                  <div className="text-[#1F3A5F]/70 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Grid */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">What We Build</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Sports Infrastructure</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">Select a sport to explore our products, materials, and specifications.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {sports?.map((sport) => (
                <Link
                  key={sport.slug}
                  href={`/sport-infra/${sport.slug}`}
                  className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 hover:border-[#C6A15B]/30 cursor-pointer"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-[#F3F3F3] to-[#C6A15B]/10 rounded-xl inline-flex group-hover:scale-110 transition-transform duration-300">
                    {sport.icon}
                  </div>
                  <h3 className="font-bold text-[#1F3A5F] text-lg mb-1 group-hover:text-[#C6A15B] transition-colors">{sport.title}</h3>
                  <p className="text-[#C6A15B] text-xs font-semibold uppercase tracking-wider mb-3">{sport.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{sport.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#1F3A5F] text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Why LayingStone</span>
              <h2 className="text-3xl font-bold text-white mt-3">The LayingStone Sports Advantage</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Certified Surfaces', 'ITF, FIBA, BWF, FIP, and World Athletics certified surfaces tested by accredited laboratories.'],
                ['Experienced Team', 'Sports infrastructure specialists with deep expertise across 11 disciplines.'],
                ['Turnkey Delivery', 'Complete project management from design to handover — single point of contact.'],
                ['Premium Materials', 'Artificial turf, acrylic flooring, PVC, wooden, and PP interlocking tile systems from trusted global brands.'],
                ['Post-Handover Support', 'Up to 8-year surface warranty and comprehensive maintenance programmes.'],
                ['Trusted Brands', 'Partnered with CCGrass, Bellinturf, Maverick Turf, Pacecourt, KDF, and Unica for materials.'],
              ]?.map(([title, desc]) => (
                <div key={title as string} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-[#C6A15B] mb-2">{title}</h3>
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
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">FAQs</span>
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
                    <span className={`text-[#C6A15B] text-xl transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
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
              <Link href="/contact" className="bg-[#C6A15B] text-[#1F3A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#b8924f] transition-colors">
                Get Free Estimate
              </Link>
              <Link href="/contact" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                Contact Us
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
