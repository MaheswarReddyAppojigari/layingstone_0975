'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';
import type { SportData } from '@/data/sportsData';

interface SportDetailPageProps {
  sport: SportData;
}

export default function SportDetailPage({ sport }: SportDetailPageProps) {

  return (
    <>
      <Header />
      <main>

        {/* ═══════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden bg-[#0f1e35]">
          <div className="absolute inset-0">
            <Image
              src={sport.heroImage}
              alt={sport.heroImageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e35] via-[#0f1e35]/60 to-[#0f1e35]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e35]/70 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-40 w-full">
            <Link
              href="/sport-infra"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#C6A15B] text-xs font-semibold tracking-widest uppercase mb-10 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Sports Infrastructure
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C6A15B]" />
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">{sport.standard}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6">
                {sport.name.toUpperCase()}<br />
                <span className="text-[#C6A15B] text-4xl md:text-5xl font-medium">INFRASTRUCTURE</span>
              </h1>
              <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                {sport.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#C6A15B] text-[#0f1e35] font-bold px-8 py-4 hover:bg-[#b8924f] transition-all duration-300 text-sm tracking-widest uppercase"
                >
                  Build Your {sport.name} Facility
                  <span>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/25 text-white font-semibold px-8 py-4 hover:border-[#C6A15B]/60 hover:text-[#C6A15B] transition-all duration-300 text-sm tracking-widest uppercase"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            ABOUT
        ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">About {sport.name}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] leading-tight mb-8">
                  Precision-Built<br />Courts for<br />Competitive Play
                </h2>
                <div className="w-16 h-0.5 bg-[#C6A15B] mb-8" />
                <div className="space-y-5">
                  {sport.about.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-10">
                  {sport.tags.map(tag => (
                    <span key={tag} className="border border-[#1F3A5F]/15 text-[#1F3A5F] text-xs font-semibold px-4 py-2 tracking-wide">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src={sport.heroImage}
                    alt={sport.heroImageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/30 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#C6A15B]/30 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            OUR PRODUCTS
        ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#F3F3F3] py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#C6A15B]" />
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Surface Systems</span>
                <div className="w-8 h-px bg-[#C6A15B]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] leading-tight">
                {sport.name} Court<br />Flooring Solutions
              </h2>
            </div>
            <div className={`grid gap-6 ${sport.products.length === 1 ? 'max-w-lg mx-auto' : sport.products.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : sport.products.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
              {sport.products.map((product) => (
                <div key={product.name} className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C6A15B]/30">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e35]/80 to-transparent" />
                    <div className="absolute top-0 left-0 h-0.5 bg-[#C6A15B] w-0 group-hover:w-full transition-all duration-500" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-snug">{product.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#C6A15B] text-sm font-medium mb-5">{product.highlight}</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {product.specs.map(spec => (
                        <div key={spec.label} className="bg-[#F3F3F3] p-2.5">
                          <div className="text-xs text-gray-400 mb-0.5">{spec.label}</div>
                          <div className="text-sm font-bold text-[#1F3A5F]">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map(cert => (
                        <span key={cert} className="border border-[#1F3A5F]/15 text-[#1F3A5F] text-xs font-semibold px-2.5 py-1">{cert}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            OUR SERVICES
        ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#1F3A5F] py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Complete Solutions</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  What We<br />Deliver
                </h2>
                <div className="w-16 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-white/60 leading-relaxed text-lg">
                  Every {sport.name.toLowerCase()} facility is delivered as a complete turnkey project — from the first site survey to final handover and beyond.
                </p>
              </div>
              <div className="space-y-0">
                {sport.services.map((service, i) => (
                  <div key={service} className="flex gap-6 py-5 border-b border-white/10 last:border-0 group hover:bg-white/5 -mx-4 px-4 transition-colors duration-200">
                    <span className="text-[#C6A15B]/50 text-xs font-mono w-8 flex-shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-white/80 font-medium group-hover:text-white transition-colors duration-200">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PROJECTS
        ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#F3F3F3] py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-8 h-px bg-[#C6A15B]" />
              <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] leading-tight mb-16">
              {sport.name} Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sport.projects.map((project) => (
                <div key={project.name} className="group bg-white border border-gray-100 hover:border-[#C6A15B]/40 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-8 h-0.5 bg-[#C6A15B] group-hover:w-12 transition-all duration-300" />
                    {project.isActual ? (
                      <span className="text-[#C6A15B] text-xs font-semibold tracking-widest uppercase border border-[#C6A15B]/30 px-3 py-1">Completed</span>
                    ) : (
                      <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase border border-gray-200 px-3 py-1">Concept</span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#1F3A5F] text-xl mb-2 group-hover:text-[#C6A15B] transition-colors duration-200">{project.name}</h3>
                  <p className="text-gray-400 text-sm">{project.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            STANDARDS
        ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Standards</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1F3A5F] leading-tight mb-6">
                  Designed to<br />Relevant Standards
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A15B] mb-6" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our {sport.name.toLowerCase()} courts are designed and constructed in compliance with the relevant international standards. We present standards accurately — distinguishing between design compliance and formal certification.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-0">
                  {sport.standards.map((standard) => (
                    <div key={standard} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] flex-shrink-0" />
                      <span className="text-[#1F3A5F] font-medium">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative py-28 overflow-hidden bg-[#0f1e35]">
          <Image
            src={sport.heroImage}
            alt={sport.heroImageAlt}
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e35]/95 via-[#0f1e35]/80 to-[#0f1e35]/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#C6A15B]" />
              <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Let's Build Together</span>
              <div className="w-8 h-px bg-[#C6A15B]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-[0.95] mb-6">
              BUILD YOUR<br />
              <span className="text-[#C6A15B]">{sport.name.toUpperCase()}</span><br />
              FACILITY
            </h2>
            <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mb-8" />
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Get a detailed project proposal from our sports infrastructure experts. From the first survey to final handover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#C6A15B] text-[#0f1e35] font-bold px-10 py-5 hover:bg-[#b8924f] transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Start Your Project
                <span>→</span>
              </Link>
              <Link
                href="/sport-infra"
                className="inline-flex items-center justify-center gap-3 border border-white/25 text-white font-semibold px-10 py-5 hover:border-[#C6A15B]/60 hover:text-[#C6A15B] transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Explore Other Sports
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
