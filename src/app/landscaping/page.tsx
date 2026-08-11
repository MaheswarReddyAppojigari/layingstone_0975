'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

const services = [
{
  title: 'Landscape Design & Planning',
  desc: 'Thoughtful landscape concepts that balance aesthetics, functionality, climate, site conditions, circulation, and architecture.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <path d="M6 18h36M18 6v36M28 12l4 4-4 4M12 28l4 4-4 4" />
      </svg>

},
{
  title: 'Villa & Residential Landscaping',
  desc: 'Refined outdoor environments for villas, residences, private gardens, courtyards, entrances, and recreational spaces.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 42V22L24 8l16 14v20H8z" />
        <path d="M18 42V30h12v12M24 8v6" />
        <circle cx="24" cy="20" r="3" />
      </svg>

},
{
  title: 'Commercial Landscaping',
  desc: 'Professional and welcoming landscapes for offices, commercial buildings, hospitality spaces, institutions, and developments.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="14" width="32" height="28" rx="1" />
        <path d="M16 14V8h16v6M8 26h32M20 26v16M28 26v16" />
      </svg>

},
{
  title: 'Terrace Gardens',
  desc: 'Vibrant outdoor environments on rooftops and terraces with carefully planned greenery, seating, pathways, and recreational elements.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 38h36M12 38V26h24v12" />
        <path d="M18 26c0-6 3-10 6-10s6 4 6 10" />
        <path d="M24 16V10M20 12l4-4 4 4" />
      </svg>

},
{
  title: 'Vertical Gardens',
  desc: 'Living walls and vertical green installations that add character, greenery, and visual depth while making efficient use of limited space.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <rect x="14" y="6" width="20" height="36" rx="2" />
        <path d="M14 16h20M14 26h20M14 36h20M24 6v36" />
        <circle cx="19" cy="11" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="29" cy="21" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="19" cy="31" r="2" fill="currentColor" fillOpacity="0.3" />
      </svg>

},
{
  title: 'Softscape',
  desc: 'Lawns, trees, shrubs, flowering plants, ground covers, and carefully selected vegetation that bring landscapes to life.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 40V24M24 24c0-8 8-14 8-14s0 8-8 14zM24 24c0-8-8-14-8-14s0 8 8 14z" />
        <path d="M10 40h28" />
        <path d="M24 32c0-6 6-10 6-10s0 6-6 10zM24 32c0-6-6-10-6-10s0 6 6 10z" />
      </svg>

},
{
  title: 'Hardscape',
  desc: 'Durable outdoor elements including pathways, paving, decks, retaining elements, steps, plazas, seating areas, and landscape structures.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="28" width="36" height="14" rx="1" />
        <path d="M6 28l8-14h20l8 14" />
        <path d="M18 28V42M30 28V42M6 35h36" />
      </svg>

},
{
  title: 'Pergolas & Outdoor Structures',
  desc: 'Elegant pergolas, shaded seating areas, garden structures, and architectural outdoor elements that extend usable living space.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 16h36M10 16v22M38 16v22M10 38h28" />
        <path d="M14 16V10M20 16V10M28 16V10M34 16V10" />
        <path d="M6 10h36" />
      </svg>

},
{
  title: 'Water Features',
  desc: 'Fountains, ponds, reflective water bodies, and other water elements that create calm, immersive outdoor environments.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="24" cy="32" rx="16" ry="8" />
        <path d="M24 32V16M18 22c0-4 3-8 6-8s6 4 6 8" />
        <path d="M16 36c0 2 3.6 4 8 4s8-2 8-4" />
      </svg>

},
{
  title: 'Landscape Irrigation',
  desc: 'Efficient irrigation systems that support healthy vegetation while improving water management and reducing unnecessary consumption.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 36c0-4 4-8 8-8s8 4 8 8" />
        <path d="M24 36c0-4 4-8 8-8s8 4 8 8" />
        <path d="M8 28V20M16 28V16M24 28V20M32 28V16M40 28V20" />
        <path d="M6 40h36" />
      </svg>

},
{
  title: 'Garden & Landscape Maintenance',
  desc: 'Systematic maintenance, pruning, planting, soil care, irrigation management, pest control, and seasonal landscape upkeep.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 38l20-20M30 18l4-8 4 4-8 4z" />
        <path d="M10 38c-2 0-4-2-4-4l4-4 4 4-4 4z" />
        <path d="M36 10l2 2M32 14l2-4" />
      </svg>

},
{
  title: 'Planters & Green Installations',
  desc: 'Custom planters and curated green installations for indoor, outdoor, residential, and commercial environments.',
  icon:
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 28h20l-3 12H17L14 28z" />
        <path d="M24 28V18M24 18c0-6 5-10 5-10s0 6-5 10zM24 18c0-6-5-10-5-10s0 6 5 10z" />
        <path d="M11 28h26" />
      </svg>

}];


const approach = [
{
  num: '01',
  title: 'Understand',
  desc: 'Study the site, architecture, climate, requirements, lifestyle, and intended use to build a complete picture of the space and its potential.'
},
{
  num: '02',
  title: 'Envision',
  desc: 'Develop a landscape concept that brings together nature, materials, movement, and architecture into a coherent design language.'
},
{
  num: '03',
  title: 'Engineer',
  desc: 'Plan drainage, irrigation, lighting, levels, materials, planting, and construction details with precision and technical rigour.'
},
{
  num: '04',
  title: 'Build',
  desc: 'Execute the landscape with precision, quality materials, and disciplined construction practices from groundwork to final planting.'
},
{
  num: '05',
  title: 'Sustain',
  desc: 'Maintain and evolve the landscape so it continues to perform and look its best over time, season after season.'
}];


const whyFeatures = [
{
  title: 'Engineering-Led',
  desc: 'Every landscape is planned with attention to levels, drainage, irrigation, materials, durability, and long-term performance.',
  icon:
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 28L16 4l12 24H4z" />
        <path d="M10 20h12M16 4v8" />
      </svg>

},
{
  title: 'Architectural Thinking',
  desc: 'Our landscapes are designed to complement the built environment rather than exist separately from it.',
  icon:
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="10" width="24" height="18" rx="1" />
        <path d="M4 10l12-6 12 6M12 28V20h8v8" />
      </svg>

},
{
  title: 'Tailored Design',
  desc: 'Every site has a different character, requirement, climate, and purpose. Our solutions are developed around the individual space.',
  icon:
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l6 4" />
      </svg>

},
{
  title: 'Quality Execution',
  desc: 'From groundwork to planting and finishing, every element is executed with attention to detail and craftsmanship.',
  icon:
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 16l8 8L26 8" />
      </svg>

},
{
  title: 'Sustainable Approach',
  desc: 'We consider water efficiency, appropriate planting, durable materials, and responsible landscape practices throughout every project.',
  icon:
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 28V16M16 16c0-8 8-12 8-12s0 8-8 12zM16 16c0-8-8-12-8-12s0 8 8 12z" />
      </svg>

},
{
  title: 'Long-Term Care',
  desc: 'Our relationship does not end at installation. Maintenance and continued landscape care help preserve the environment we create.',
  icon:
  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4a12 12 0 100 24A12 12 0 0016 4z" />
        <path d="M16 10v6l4 2" />
      </svg>

}];


const elements = [
{ label: 'Green Lawns', img: "https://images.unsplash.com/photo-1665574611412-6b06c94b3502", alt: 'Lush green lawn in a manicured garden' },
{ label: 'Trees & Planting', img: "https://img.rocket.new/generatedImages/rocket_gen_img_16e157d58-1772127582181.png", alt: 'Mature trees and layered planting in a landscape garden' },
{ label: 'Stone & Paving', img: "https://images.unsplash.com/photo-1620912129331-624f83133231", alt: 'Natural stone paving in an architectural garden' },
{ label: 'Pathways', img: "https://images.unsplash.com/photo-1716455850195-fc6bec779e5f", alt: 'Elegant garden pathway lined with plants' },
{ label: 'Outdoor Seating', img: "https://images.unsplash.com/photo-1723206524866-f83d9c61f591", alt: 'Premium outdoor seating area in a landscaped garden' },
{ label: 'Pergolas', img: "https://images.unsplash.com/photo-1698502864972-786a3d27c13b", alt: 'Elegant wooden pergola with climbing plants' },
{ label: 'Water Features', img: "https://images.unsplash.com/photo-1669934379837-6a00bc33a422", alt: 'Contemporary water feature in a modern garden' },
{ label: 'Vertical Greenery', img: "https://images.unsplash.com/photo-1702957636996-bdaece1fc7bc", alt: 'Living wall with vertical green installation' },
{ label: 'Terrace Gardens', img: "https://images.unsplash.com/photo-1724668639604-6c214851dedc", alt: 'Rooftop terrace garden with planters and seating' },
{ label: 'Landscape Lighting', img: "https://img.rocket.new/generatedImages/rocket_gen_img_140b66474-1772299506057.png", alt: 'Architectural landscape lighting illuminating a garden at dusk' },
{ label: 'Irrigation', img: "https://img.rocket.new/generatedImages/rocket_gen_img_159ba838b-1772058596762.png", alt: 'Drip irrigation system in a garden bed' },
{ label: 'Garden Structures', img: "https://images.unsplash.com/photo-1690230476724-e402866886c7", alt: 'Architectural garden structure in a contemporary landscape' }];


function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {if (e.isIntersecting) setInView(true);}, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = '' }: {children: React.ReactNode;delay?: number;className?: string;}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      }}>
      
      {children}
    </div>);

}

export default function LandscapingPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">

        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1717076279850-44d10323c520"
            alt="Sophisticated contemporary landscape with stone pathways, lush greenery, water elements, and modern architecture"
            fill
            priority
            className="object-cover"
            sizes="100vw" />
          
          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E35]/90 via-[#0F1E35]/65 to-[#0F1E35]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E35]/60 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-3 mb-8"
                style={{ opacity: 1, animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
                
                <span className="h-px w-10 bg-[#C6A15B]" />
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase">
                  Landscape Engineering &amp; Design
                </span>
              </div>
              <h1
                className="text-hero-display text-white mb-6 font-bold leading-[1.05]"
                style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
                
                Engineering Landscapes<br />
                <span className="text-[#C6A15B]">That Elevate</span><br />
                Everyday Living
              </h1>
              <p
                className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
                style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}>
                
                We design and build refined outdoor environments where architecture, nature, and engineering come together. From private residences and commercial spaces to large-scale developments, Layingstone creates landscapes that are beautiful, functional, sustainable, and built to last.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}>
                
                <Link href="/contact" className="btn-primary">
                  Start Your Landscape
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a href="#services" className="btn-outline">
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-white/40 animate-pulse" />
          </div>
        </section>

        {/* ─── INTRODUCTION ─────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <FadeIn>
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-[#C6A15B]" />
                  Landscape, Engineered with Intent
                </span>
                <h2 className="text-section-title font-bold text-[#1F3A5F] mb-6">
                  Where Nature Meets Architecture
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5 text-base">
                  Landscaping is more than planting trees and creating gardens. It is the thoughtful integration of land, architecture, water, materials, vegetation, lighting, circulation, and outdoor living.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  At Layingstone, we approach every landscape as an engineered environment. Our team combines design thinking, construction expertise, material knowledge, and horticultural understanding to create outdoor spaces that complement the architecture around them and remain functional for years to come.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  {[
                  ['Design', 'Landscape Architecture'],
                  ['Build', 'Precision Construction'],
                  ['Sustain', 'Long-Term Care']].
                  map(([title, sub]) =>
                  <div key={title}>
                      <div className="text-[#1F3A5F] font-bold text-sm mb-1">{title}</div>
                      <div className="text-gray-400 text-xs leading-snug">{sub}</div>
                    </div>
                  )}
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src="https://img.rocket.new/generatedImages/rocket_gen_img_1f6351ceb-1772197719134.png"
                      alt="Architectural landscape with stone pathways, curated planting, and contemporary outdoor living space"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw" />
                    
                  </div>
                  {/* Floating accent card */}
                  <div className="absolute -bottom-6 -left-6 bg-[#1F3A5F] rounded-xl p-5 shadow-2xl max-w-[200px]">
                    <div className="text-[#C6A15B] text-xs font-semibold tracking-widest uppercase mb-2">Our Approach</div>
                    <div className="text-white text-sm leading-snug">Architecture + Nature + Engineering</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─────────────────────────────────────────────── */}
        <section id="services" className="py-24 lg:py-32 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-2xl mb-16">
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-[#C6A15B]" />
                  Our Landscaping Services
                </span>
                <h2 className="text-section-title font-bold text-[#1F3A5F] mb-4">
                  Complete Landscape Solutions
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  From initial planning and design to execution and long-term maintenance, we provide integrated landscaping solutions for residential, commercial, and institutional environments.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {services.map((s, i) =>
              <FadeIn key={s.title} delay={i * 40}>
                  <div className="bg-white rounded-xl p-6 hover-lift card-shadow card-shadow-hover group h-full flex flex-col">
                    <div className="text-[#1F3A5F] group-hover:text-[#C6A15B] transition-colors duration-300 mb-4">
                      {s.icon}
                    </div>
                    <h3 className="font-bold text-[#1F3A5F] text-sm mb-2 group-hover:text-[#C6A15B] transition-colors duration-300 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>

        {/* ─── DESIGN APPROACH ──────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[#1F3A5F] relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C6A15B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C6A15B 0%, transparent 40%)' }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-2xl mb-16">
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-[#C6A15B]" />
                  Our Approach
                </span>
                <h2 className="text-section-title font-bold text-white mb-4">
                  Designed Around the Site.<br />Built Around You.
                </h2>
              </div>
            </FadeIn>

            {/* Horizontal process — desktop; stacked — mobile */}
            <div className="grid md:grid-cols-5 gap-0">
              {approach.map((step, i) =>
              <FadeIn key={step.num} delay={i * 80}>
                  <div className="relative group">
                    {/* Connector line */}
                    {i < approach.length - 1 &&
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-white/10 z-0" />
                  }
                    <div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-4 py-6 md:py-0">
                      <div className="w-16 h-16 rounded-full border border-[#C6A15B]/40 flex items-center justify-center mb-5 group-hover:border-[#C6A15B] transition-colors duration-300 bg-[#1F3A5F]">
                        <span className="text-[#C6A15B] font-bold text-lg tracking-tight">{step.num}</span>
                      </div>
                      <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                    {/* Mobile connector */}
                    {i < approach.length - 1 &&
                  <div className="md:hidden w-px h-6 bg-white/10 ml-8 my-1" />
                  }
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>

        {/* ─── WHY LAYINGSTONE ──────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-2xl mb-16">
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-[#C6A15B]" />
                  Why Layingstone
                </span>
                <h2 className="text-section-title font-bold text-[#1F3A5F] mb-4">
                  More Than Landscaping.<br />Complete Outdoor Environments.
                </h2>
              </div>
            </FadeIn>

            {/* Bento-style grid — varied sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyFeatures.map((f, i) =>
              <FadeIn key={f.title} delay={i * 60}>
                  <div className={`rounded-xl p-8 h-full flex flex-col gap-4 hover-lift transition-all duration-300 ${
                i === 0 ? 'bg-[#1F3A5F] text-white' : i === 3 ? 'bg-[#F3F3F3]' : 'bg-[#F3F3F3]'}`
                }>
                    <div className={`${i === 0 ? 'text-[#C6A15B]' : 'text-[#1F3A5F]'}`}>
                      {f.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm mb-2 tracking-wide uppercase ${i === 0 ? 'text-white' : 'text-[#1F3A5F]'}`}>
                        {f.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/60' : 'text-gray-500'}`}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>

        {/* ─── LANDSCAPE ELEMENTS ───────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="text-section-title font-bold text-[#1F3A5F] mb-4">
                  Every Element Has a Purpose
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Each component of a landscape is considered, positioned, and crafted to contribute to the whole.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {elements.map((el, i) =>
              <FadeIn key={el.label} delay={i * 30}>
                  <div className="group relative aspect-square rounded-xl overflow-hidden cursor-default">
                    <Image
                    src={el.img}
                    alt={el.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E35]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="text-white text-xs font-semibold leading-tight block">{el.label}</span>
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>

        {/* ─── RESIDENTIAL + COMMERCIAL ─────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="text-section-title font-bold text-[#1F3A5F] mb-4">
                  Landscapes for Every Kind of Space
                </h2>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Residential */}
              <FadeIn>
                <div className="relative rounded-2xl overflow-hidden group min-h-[520px] flex flex-col justify-end">
                  <Image
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_17e68ac5e-1772772325511.png"
                    alt="Premium residential landscape with manicured garden, stone pathways, and outdoor living area"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E35]/90 via-[#0F1E35]/40 to-transparent" />
                  <div className="relative z-10 p-10">
                    <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Residential</span>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      Residential Landscaping
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
                      Create private outdoor environments that extend the character of the home beyond its walls. From entrance landscapes and courtyards to gardens, terraces, lawns, outdoor seating, and recreational spaces, every element is designed for comfort, beauty, and everyday living.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[#C6A15B] text-sm font-semibold hover:gap-4 transition-all duration-300">
                      Explore Residential Landscaping
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Commercial */}
              <FadeIn delay={100}>
                <div className="relative rounded-2xl overflow-hidden group min-h-[520px] flex flex-col justify-end">
                  <Image
                    src="https://images.unsplash.com/photo-1520758320843-8386e942fc2e"
                    alt="Sophisticated commercial landscape with architectural planting, paved plazas, and contemporary outdoor spaces"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E35]/90 via-[#0F1E35]/40 to-transparent" />
                  <div className="relative z-10 p-10">
                    <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Commercial</span>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      Commercial Landscaping
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
                      Create sophisticated outdoor environments that enhance workplaces, commercial developments, hospitality spaces, institutions, and public-facing environments. Our landscapes are designed to improve visual identity, usability, comfort, and the overall experience of the space.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[#C6A15B] text-sm font-semibold hover:gap-4 transition-all duration-300">
                      Explore Commercial Landscaping
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── SUSTAINABILITY ───────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1f8b976d7-1772450217341.png"
            alt="Lush sustainable landscape with mature trees, natural planting, and architectural integration"
            fill
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-[#0F1E35]/75" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <FadeIn>
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-[#C6A15B]" />
                  Designing for Tomorrow
                </span>
                <h2 className="text-section-title font-bold text-white mb-6">
                  Beautiful Landscapes.<br />Responsible Choices.
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-10">
                  We believe great landscaping should work in harmony with its environment. Our approach considers water efficiency, appropriate plant selection, soil health, irrigation planning, durable materials, and long-term maintenance to create landscapes that remain beautiful while using resources responsibly.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Water Efficiency', 'Appropriate Planting', 'Soil Health', 'Durable Materials', 'Irrigation Planning', 'Long-Term Maintenance'].map((item) =>
                  <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[#1F3A5F] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 10% 90%, #C6A15B 0%, transparent 50%), radial-gradient(ellipse at 90% 10%, #C6A15B 0%, transparent 40%)' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#C6A15B]" />
                Get Started
                <span className="h-px w-8 bg-[#C6A15B]" />
              </span>
              <h2 className="text-section-title font-bold text-white mb-5">
                Let&apos;s Engineer Your Landscape
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl mx-auto">
                Have a space that deserves more than ordinary landscaping? Let&apos;s create an outdoor environment that brings together architecture, nature, engineering, and everyday experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start a Conversation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get a Consultation
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>);

}