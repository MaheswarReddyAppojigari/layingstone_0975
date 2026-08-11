'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const services = [
{
  title: 'Office Buildings',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca8cbe70-1784051825624.png",
  alt: 'Modern glass corporate office building exterior'
},
{
  title: 'Retail Spaces',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_186f55a7c-1766473158512.png",
  alt: 'Luxury commercial retail storefront with premium finishes'
},
{
  title: 'Shopping Complexes',
  image: "https://images.unsplash.com/photo-1704215721225-a9847ba3e7d6",
  alt: 'Contemporary shopping mall interior with modern architecture'
},
{
  title: 'Warehouses & Logistics',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bdb4be34-1772392432692.png",
  alt: 'Modern industrial warehouse with high-clearance structure'
},
{
  title: 'Hospitals & Healthcare',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_188a57dbb-1784132425353.png",
  alt: 'Contemporary hospital building with modern medical architecture'
},
{
  title: 'Educational Institutions',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10346fc4c-1767714122040.png",
  alt: 'Modern university campus building with architectural design'
},
{
  title: 'Corporate Campuses',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2edfe3a-1772772327924.png",
  alt: 'Premium corporate campus headquarters with landscaped grounds'
},
{
  title: 'Industrial Buildings',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14f7a8bff-1773194863304.png",
  alt: 'Modern industrial manufacturing facility exterior'
}];


const process = [
{ step: '01', title: 'Site Assessment', desc: 'Geotechnical survey, feasibility analysis, and regulatory compliance review.' },
{ step: '02', title: 'Design & Approvals', desc: 'Architectural drawings, structural design, MEP planning, and statutory approvals.' },
{ step: '03', title: 'Material Procurement', desc: 'Sourcing branded, certified materials with full traceability and quality documentation.' },
{ step: '04', title: 'Construction', desc: 'Phased construction with dedicated site engineers, daily progress reports, and milestone tracking.' },
{ step: '05', title: 'Quality Inspection', desc: '100+ quality checkpoints across structural, MEP, and finishing stages.' },
{ step: '06', title: 'Handover', desc: 'Snagging, documentation, occupancy certificate, and post-handover support.' }];


const faqs = [
{ q: 'What types of commercial projects does LayingStone handle?', a: 'We handle the full spectrum — offices, retail, malls, warehouses, hospitals, schools, industrial plants, and corporate campuses across India.' },
{ q: 'Do you manage regulatory approvals?', a: 'Yes. Our team handles all statutory approvals including building permits, fire NOC, environmental clearances, and occupancy certificates.' },
{ q: 'What is the typical timeline for a commercial project?', a: 'Timelines vary by scale. A mid-size office building typically takes 12–18 months from design to handover. We provide detailed project schedules at the outset.' },
{ q: 'Do you offer design-build services?', a: 'Yes. We offer integrated design-build contracts where our architects, structural engineers, and construction teams work under a single point of accountability.' },
{ q: 'How do you ensure quality on large commercial sites?', a: 'We deploy resident engineers, use third-party quality auditors, and follow IS code standards with documented inspection reports at every stage.' }];


const technologies = [
{ name: 'BIM Modelling', desc: 'Building Information Modelling for clash detection and 3D coordination' },
{ name: 'AutoCAD & Revit', desc: 'Precision architectural and structural drawings' },
{ name: 'Project Management Software', desc: 'Real-time progress tracking and resource management' },
{ name: 'Drone Surveys', desc: 'Aerial site monitoring and progress documentation' },
{ name: 'Green Building Standards', desc: 'IGBC and LEED-aligned sustainable construction practices' },
{ name: 'Precast Technology', desc: 'Factory-manufactured precast elements for speed and consistency' }];


export default function CommercialPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#162d4a] to-[#0d1f33]" />
          <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4AF37 0%, transparent 40%)' }} />
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-sm font-medium">Commercial Construction</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building India&apos;s Commercial
              <span className="block text-[#D4AF37]">Future, One Project at a Time</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              From corporate headquarters to industrial complexes — LayingStone delivers large-scale commercial construction with engineering precision, certified materials, and zero compromise on quality.
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

        {/* About */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">About Commercial Construction</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3 mb-8">
                Engineering Excellence for Every Commercial Venture
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                LayingStone has built a reputation as one of India&apos;s most trusted commercial construction partners. With a portfolio spanning offices, retail centres, healthcare facilities, and industrial plants, we bring the same rigour and attention to detail to every project — regardless of scale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                Our integrated approach combines in-house architectural design, structural engineering, MEP coordination, and construction management under one roof — eliminating coordination gaps and ensuring seamless project delivery.
              </p>
              <div className="flex flex-wrap gap-10">
                {[['500+', 'Projects Delivered'], ['15+', 'Years Experience'], ['98%', 'On-Time Delivery']]?.map(([num, label]) =>
                <div key={label}>
                    <div className="text-3xl font-bold text-[#D4AF37]">{num}</div>
                    <div className="text-sm text-gray-500 mt-1 font-medium">{label}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">What We Build</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Commercial Construction Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services?.map((s) =>
              <div
                key={s?.title}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-350 hover:-translate-y-1"
                style={{ transition: 'transform 350ms ease, box-shadow 350ms ease' }}>
                
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image
                    src={s?.image}
                    alt={s?.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-350 group-hover:scale-[1.04]"
                    style={{ transition: 'transform 350ms ease' }}
                    loading="lazy" />
                  
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="font-semibold text-[#1F3A5F] text-base leading-snug">{s?.title}</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Our Construction Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((p) =>
              <div key={p?.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37]">
                    {p?.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F3A5F] mb-1">{p?.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-[#1F3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Innovation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Technologies We Use</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies?.map((t) =>
              <div key={t?.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-[#D4AF37] mb-2">{t?.name}</h3>
                  <p className="text-white/60 text-sm">{t?.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Safety & Quality */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Safety First</span>
                <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3 mb-6">Safety Standards</h2>
                <ul className="space-y-3">
                  {['IS Code compliance for all structural elements', 'Daily safety briefings and PPE enforcement', 'Fire safety systems installed at every stage', 'Third-party structural audits at key milestones', 'Zero-tolerance policy for unsafe practices', 'OSHA-aligned site safety protocols']?.map((item) =>
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Quality Assurance</span>
                <h2 className="text-3xl font-bold text-[#1F3A5F] mt-3 mb-6">Quality Process</h2>
                <ul className="space-y-3">
                  {['100+ documented quality checkpoints per project', 'Branded, certified materials with test certificates', 'Resident quality engineer on every site', 'Concrete cube testing and rebar inspection', 'Waterproofing and MEP commissioning tests', 'Final snagging and defect rectification before handover']?.map((item) =>
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest">Why LayingStone</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">The LayingStone Advantage</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
              ['Single-Point Accountability', 'Design, engineering, and construction under one contract — no blame games, no gaps.'],
              ['Transparent Billing', 'Itemised BOQ with no hidden charges. You know exactly where every rupee goes.'],
              ['Certified Engineers', 'Our team includes IIT/NIT-trained structural engineers and RERA-registered architects.'],
              ['On-Time Delivery', '98% of our projects are delivered on or before the committed date.'],
              ['Post-Handover Support', '12-month defect liability period with dedicated support team.'],
              ['Pan-India Presence', 'Active project sites across Bangalore, Hyderabad, Chennai, Mumbai, and Pune.']]?.
              map(([title, desc]) =>
              <div key={title} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-[#1F3A5F] mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              )}
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
              {faqs?.map((faq, i) =>
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#1F3A5F] hover:bg-[#F3F3F3] transition-colors">
                  
                    {faq?.q}
                    <span className={`text-[#D4AF37] text-xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === i &&
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq?.a}</div>
                }
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#1F3A5F] to-[#162d4a]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Commercial Project?</h2>
            <p className="text-white/70 text-lg mb-10">Talk to our commercial construction experts and get a detailed project estimate within 48 hours.</p>
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
    </>);

}