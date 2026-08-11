'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const residentialServices = [
{
  title: 'Living Room Interiors',
  desc: 'Statement living spaces with bespoke furniture layouts, feature walls, and layered lighting.',
  img: "https://images.unsplash.com/photo-1729234127713-f34b7cc6ec1c",
  alt: 'Elegant modern living room with premium furniture and ambient lighting'
},
{
  title: 'Bedroom Interiors',
  desc: 'Serene, personalised bedrooms with custom wardrobes, premium upholstery, and restful lighting.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_12a28072e-1773154472186.png",
  alt: 'Luxurious master bedroom with custom wardrobe and soft lighting'
},
{
  title: 'Kitchen Interiors',
  desc: 'Ergonomic modular kitchens with premium shutters, stone countertops, and intelligent storage.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_104b86a1f-1785149322213.png",
  alt: 'Modern modular kitchen with stone countertops and premium cabinetry'
},
{
  title: 'Dining Areas',
  desc: 'Elegant dining spaces designed for family gatherings — from intimate settings to grand formal rooms.',
  img: "https://images.unsplash.com/photo-1672630488350-f7990421e358",
  alt: 'Sophisticated dining room with statement chandelier and premium table setting'
},
{
  title: 'Wardrobes & Storage',
  desc: 'Floor-to-ceiling wardrobes, walk-in closets, and custom storage units crafted for utility and elegance.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6bc5f5e-1772135767737.png",
  alt: 'Custom walk-in wardrobe with organized storage and premium finishes'
},
{
  title: 'TV Units',
  desc: 'Custom TV units and media walls that become the visual focal point of your living space.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1929b5640-1783318849629.png",
  alt: 'Contemporary TV unit with integrated storage and ambient backlighting'
},
{
  title: 'False Ceilings',
  desc: 'Layered false ceiling designs with integrated cove lighting and decorative architectural elements.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfa74f5d-1784143994910.png",
  alt: 'Architectural false ceiling with cove lighting in a luxury home'
},
{
  title: 'Lighting Design',
  desc: 'Layered lighting strategies — ambient, task, and accent — that transform the mood of every room.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_18b66410f-1765818949435.png",
  alt: 'Premium interior lighting design with layered ambient and accent lights'
},
{
  title: 'Flooring',
  desc: 'Premium flooring solutions — hardwood, engineered wood, marble, and large-format tiles.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6d8cde2-1772905144113.png",
  alt: 'Luxury marble flooring in a premium residential interior'
},
{
  title: 'Wall Treatments',
  desc: 'Textured wall panels, wallpapers, stone cladding, and decorative finishes that add depth and character.',
  img: "https://images.unsplash.com/photo-1661916123074-936e080d9736",
  alt: 'Elegant textured wall treatment in a contemporary living space'
},
{
  title: 'Bathrooms',
  desc: 'Spa-inspired bathrooms with premium sanitary ware, designer tiles, and smart storage solutions.',
  img: "https://images.unsplash.com/photo-1717497043540-d45bf85e5d38",
  alt: 'Luxury bathroom with premium fixtures and spa-inspired design'
},
{
  title: 'Modular Furniture',
  desc: 'Factory-finished modular furniture systems with precision engineering and premium surface options.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13ddd1737-1767962262919.png",
  alt: 'Contemporary modular furniture arrangement in a modern home'
},
{
  title: 'Custom Furniture',
  desc: 'Bespoke furniture pieces crafted to exact specifications — unique forms, premium materials, lasting quality.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_142458294-1783228036438.png",
  alt: 'Custom-designed furniture piece in a luxury residential interior'
},
{
  title: 'Civil Modifications',
  desc: 'Structural changes, wall demolitions, room reconfigurations, and civil work executed with precision.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0290bf5-1786443912486.png",
  alt: 'Interior civil modification work in progress at a residential project'
},
{
  title: 'Electrical Work',
  desc: 'Complete electrical planning, concealed wiring, smart switches, and power point layouts.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_10582b966-1786443914284.png",
  alt: 'Premium electrical installation with concealed wiring in a modern home'
},
{
  title: 'Plumbing',
  desc: 'Concealed plumbing, drainage planning, and premium sanitary fittings installation.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2e4cf1d-1770240892780.png",
  alt: 'Professional plumbing installation in a luxury bathroom renovation'
},
{
  title: 'Painting & Finishing',
  desc: 'Premium paint application, texture finishes, and surface treatments for a flawless result.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d52a11f5-1780502975496.png",
  alt: 'Professional interior painting with premium finish in a residential space'
},
{
  title: 'Complete Interior Execution',
  desc: 'End-to-end interior execution — from raw space to fully finished, styled, and handed-over home.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_174f3364d-1772783279467.png",
  alt: 'Completed luxury residential interior with full turnkey execution'
}];


const turnkeySteps = [
{ num: '01', title: 'Design', desc: 'Concept development, space planning, and 3D visualisation.' },
{ num: '02', title: 'Planning', desc: 'Detailed drawings, BOQ preparation, and timeline scheduling.' },
{ num: '03', title: 'Material Selection', desc: 'Curated material boards across every category — you choose, we source.' },
{ num: '04', title: 'Procurement', desc: 'Vendor coordination and material procurement from certified suppliers.' },
{ num: '05', title: 'Civil Work', desc: 'Structural modifications, masonry, and civil execution.' },
{ num: '06', title: 'Electrical', desc: 'Concealed wiring, switch layouts, and power planning.' },
{ num: '07', title: 'Plumbing', desc: 'Concealed plumbing, drainage, and sanitary fitting installation.' },
{ num: '08', title: 'Carpentry', desc: 'Custom woodwork, cabinetry, and millwork fabrication.' },
{ num: '09', title: 'Furniture', desc: 'Modular and custom furniture supply and installation.' },
{ num: '10', title: 'Painting', desc: 'Premium paint application, textures, and surface finishing.' },
{ num: '11', title: 'Lighting', desc: 'Fixture installation, cove lighting, and ambient layering.' },
{ num: '12', title: 'Final Styling', desc: 'Accessories, art, and final styling touches.' },
{ num: '13', title: 'Handover', desc: 'Walkthrough, snagging, and warranty documentation.' }];


const executionSteps = [
{ title: 'Concept Development', desc: 'Understanding your lifestyle, preferences, and aspirations to shape a design direction.' },
{ title: 'Space Planning', desc: 'Intelligent layouts that maximise every square foot for flow, function, and visual harmony.' },
{ title: '3D Visualisation', desc: 'Photorealistic renders of every room before a single nail is placed.' },
{ title: 'Material Selection', desc: 'Guided selection across laminates, stone, tiles, hardware, and finishes.' },
{ title: 'Detailed Drawings', desc: 'Precise working drawings and shop drawings for every element.' },
{ title: 'Execution', desc: 'Skilled craftsmen execute the design under dedicated project management.' },
{ title: 'Quality Control', desc: 'Multi-stage quality inspections at every phase of execution.' },
{ title: 'Final Handover', desc: 'Walkthrough, snagging resolution, and a comprehensive warranty.' }];


const interiorStyles = [
{ name: 'Modern', img: "https://images.unsplash.com/photo-1607861448114-a04c3fbf7b7f", alt: 'Modern interior design with clean lines and contemporary furniture' },
{ name: 'Contemporary', img: "https://images.unsplash.com/photo-1611597832906-c1c8033478ba", alt: 'Contemporary living room with sophisticated design elements' },
{ name: 'Minimalist', img: "https://images.unsplash.com/photo-1711873314750-39f3b0d45f09", alt: 'Minimalist interior with clean surfaces and restrained palette' },
{ name: 'Luxury', img: "https://img.rocket.new/generatedImages/rocket_gen_img_19db69747-1772174399758.png", alt: 'Luxury residential interior with premium materials and finishes' },
{ name: 'Traditional', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1481305f2-1772796422215.png", alt: 'Traditional interior design with classic furniture and warm tones' },
{ name: 'Transitional', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6dd92c0-1769836117678.png", alt: 'Transitional interior blending classic and contemporary elements' }];


const materials = [
{ name: 'Woodwork', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e13199c5-1776828398690.png", alt: 'Premium woodwork and carpentry in a residential interior' },
{ name: 'Engineered Wood', img: "https://images.unsplash.com/photo-1635248249929-a85daa37e4f3", alt: 'Engineered wood panels and surfaces in a modern interior' },
{ name: 'Natural Stone', img: "https://img.rocket.new/generatedImages/rocket_gen_img_15474b0e0-1772616803807.png", alt: 'Natural stone flooring and surfaces in a luxury home' },
{ name: 'Tiles', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa931277-1768684240323.png", alt: 'Premium tiles in a luxury bathroom interior' },
{ name: 'Glass', img: "https://images.unsplash.com/photo-1731714591185-c17f9d5c7fb6", alt: 'Glass elements and partitions in a contemporary interior' },
{ name: 'Metal', img: "https://img.rocket.new/generatedImages/rocket_gen_img_11455f450-1772145226032.png", alt: 'Metal accents and hardware in a premium interior design' },
{ name: 'Paints & Finishes', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1def0754b-1768738197545.png", alt: 'Premium paint finishes and wall treatments in a residential space' },
{ name: 'Lighting', img: "https://images.unsplash.com/photo-1715828282333-87d358f723a7", alt: 'Designer lighting fixtures in a luxury residential interior' }];


const executionProcess = [
{ step: '01', title: 'Consultation', desc: 'We begin with a detailed discovery session — understanding your lifestyle, space, budget, and timeline.' },
{ step: '02', title: 'Design', desc: 'Our designers develop concept boards, space plans, and photorealistic 3D renders for your approval.' },
{ step: '03', title: 'Planning', desc: 'Detailed working drawings, BOQ, and a phased execution schedule are prepared and shared.' },
{ step: '04', title: 'Material Finalization', desc: 'Guided material selection across every category — laminates, stone, tiles, hardware, and finishes.' },
{ step: '05', title: 'Procurement', desc: 'All materials are sourced from certified vendors and quality-checked before delivery to site.' },
{ step: '06', title: 'Site Execution', desc: 'Skilled craftsmen execute the design under dedicated project management and site supervision.' },
{ step: '07', title: 'Quality Inspection', desc: 'Multi-stage quality checks at every phase — civil, carpentry, electrical, plumbing, and finishing.' },
{ step: '08', title: 'Final Handover', desc: 'A comprehensive walkthrough, snagging resolution, and warranty documentation complete the project.' }];


const portfolioProjects = [
{ name: 'The Meridian Residence', category: 'Full Homes', location: 'Hyderabad', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1f521d413-1786443916635.png", alt: 'Complete luxury home interior — The Meridian Residence, Hyderabad' },
{ name: 'Skyline Villa', category: 'Luxury Villas', location: 'Bangalore', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1340b707e-1783336779975.png", alt: 'Luxury villa interior — Skyline Villa, Bangalore' },
{ name: 'Prestige Apartment', category: 'Apartments', location: 'Chennai', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff3cba3a-1772306283767.png", alt: 'Premium apartment interior — Prestige Apartment, Chennai' },
{ name: 'The Living Room Project', category: 'Living Spaces', location: 'Hyderabad', img: "https://img.rocket.new/generatedImages/rocket_gen_img_141eb6f4b-1774101700758.png", alt: 'Bespoke living room interior design project, Hyderabad' },
{ name: 'Master Suite Renovation', category: 'Bedrooms', location: 'Pune', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1340b707e-1783336779975.png", alt: 'Luxury master bedroom renovation project, Pune' },
{ name: 'Gourmet Kitchen', category: 'Kitchens', location: 'Mumbai', img: "https://img.rocket.new/generatedImages/rocket_gen_img_104b86a1f-1785149322213.png", alt: 'Premium modular kitchen interior project, Mumbai' }];


const portfolioCategories = ['All', 'Living Spaces', 'Bedrooms', 'Kitchens', 'Full Homes', 'Luxury Villas', 'Apartments', 'Renovations'];

const faqs = [
{
  q: 'How does the residential interior process work?',
  a: 'Our process begins with a detailed consultation to understand your lifestyle, preferences, and budget. We then develop concept designs, 3D visualisations, and detailed drawings for your approval before execution begins. Every phase — from material procurement to final handover — is managed by a dedicated project manager.'
},
{
  q: 'Do you provide complete turnkey interiors?',
  a: 'Yes. LayingStone manages the entire interior journey — from concept design to final handover. This includes civil modifications, electrical, plumbing, carpentry, furniture, painting, lighting, and final styling. You receive a fully finished, move-in-ready home.'
},
{
  q: 'Can I bring my own designer?',
  a: 'Absolutely. If you have a designer or architect you work with, we can take on the execution role — translating their designs into a finished space with our skilled workforce and project management.'
},
{
  q: 'Can LayingStone handle execution-only projects?',
  a: 'Yes. We offer execution-only services for clients who already have approved designs. Our team handles procurement, site management, quality control, and handover.'
},
{
  q: 'How are materials selected?',
  a: 'Our designers guide you through curated material selections across every category — laminates, stone, tiles, hardware, sanitary ware, paints, and lighting. We work with trusted, certified brands and present options across different price points.'
},
{
  q: 'How long does an interior project take?',
  a: 'A standard 3BHK interior project typically takes 45–60 working days from design approval to handover. Timelines vary based on scope, customisation, and site conditions. A detailed schedule is shared at the planning stage.'
},
{
  q: 'Can designs be customised?',
  a: 'Every LayingStone interior is designed specifically for you. We do not use template designs. Your space, lifestyle, and preferences shape every design decision — from layout to material selection.'
},
{
  q: 'Do you handle renovation projects?',
  a: 'Yes. We handle complete home renovations — from partial room updates to full-home transformations. Our team assesses the existing condition, plans the scope, and executes the renovation with minimal disruption.'
}];


const brands = [
'Asian Paints', 'Birla Opus', 'Nerolac', 'Hettich', 'Häfele', 'Blum',
'Jaquar', 'Hindware', 'Kajaria', 'Johnson', 'Somany', 'Merino',
'Greenlam', 'Century', 'Philips', 'Havells'];


export default function ResidentialInteriorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="bg-[#F3F3F3]">

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://img.rocket.new/generatedImages/rocket_gen_img_19671ff22-1773214630784.png"
              alt="Premium residential interior — bespoke living space by LayingStone"
              fill
              className="object-cover"
              priority
              sizes="100vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f33]/90 via-[#1F3A5F]/40 to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
            <div className="max-w-3xl">
              <span className="inline-block text-[#C6A15B] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                LayingStone — Residential Interiors
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
                Residential<br />
                <span className="text-[#C6A15B]">Interiors</span>
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Bespoke home interiors crafted with architectural precision — from functional space planning and premium material selection to complete design-to-execution turnkey delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#C6A15B] text-white font-semibold px-8 py-4 hover:bg-[#b8924d] transition-colors duration-300 tracking-wide">
                  
                  Start Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-white/40 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-colors duration-300 tracking-wide">
                  
                  Explore Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT RESIDENTIAL INTERIORS ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">About Our Approach</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 mb-8 leading-tight">
                  Architecture Meets<br />Personal Living
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  At LayingStone, residential interiors are approached with the same rigour as architectural projects. We bring together space planning, material science, craftsmanship, and project management to create homes that are as functional as they are beautiful.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our process integrates architecture, interior design, and complete execution under one roof — eliminating the coordination gaps that typically arise when design and execution are handled separately. From the first concept sketch to the final styling touch, every decision is guided by your lifestyle and aspirations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We do not design for trends. We design for permanence — spaces that feel considered, personal, and enduring long after the project is complete.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                    <Image
                      src="https://img.rocket.new/generatedImages/rocket_gen_img_142458294-1783228036438.png"
                      alt="Bespoke residential living room interior by LayingStone"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 300px" />
                    
                  </div>
                  <div className="grid grid-rows-2 gap-4 mt-8">
                    <div className="relative aspect-square rounded-sm overflow-hidden">
                      <Image
                        src="https://img.rocket.new/generatedImages/rocket_gen_img_104b86a1f-1785149322213.png"
                        alt="Premium modular kitchen interior design"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 200px" />
                      
                    </div>
                    <div className="relative aspect-square rounded-sm overflow-hidden">
                      <Image
                        src="https://img.rocket.new/generatedImages/rocket_gen_img_1086ad571-1783759575874.png"
                        alt="Luxury bedroom interior with custom wardrobe"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 200px" />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillars */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
              ['Architecture', 'Spatial thinking at the core of every design decision.'],
              ['Craftsmanship', 'Skilled execution with attention to every detail and finish.'],
              ['Material Integrity', 'Certified brands, quality-checked materials, honest sourcing.'],
              ['Project Management', 'Dedicated oversight from concept through to handover.']]?.
              map(([title, desc]) =>
              <div key={title} className="border-t-2 border-[#C6A15B] pt-6">
                  <h3 className="font-bold text-[#1F3A5F] mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── RESIDENTIAL SERVICES ── */}
        <section className="py-24 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 leading-tight">
                Our Residential<br />Interior Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {residentialServices?.map((service) =>
              <div
                key={service?.title}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-400"
                style={{ transition: 'box-shadow 0.4s ease, transform 0.4s ease' }}>
                
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                    src={service?.img}
                    alt={service?.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1F3A5F] mb-1.5 text-base">{service?.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── TURNKEY INTERIOR SOLUTIONS ── */}
        <section className="py-24 bg-[#1F3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Complete Delivery</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                  Turnkey Interior<br />Solutions
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-white/70 leading-relaxed mb-6">
                  A turnkey interior means you hand us the keys to an empty space and receive a fully finished, styled, and move-in-ready home. LayingStone manages every phase of the journey — from the first design concept to the final handover walkthrough.
                </p>
                <p className="text-white/70 leading-relaxed">
                  No coordination between multiple vendors. No chasing contractors. No material sourcing headaches. One team, one point of accountability, one seamless process.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {turnkeySteps?.map((step) =>
                <div key={step?.num} className="flex items-center gap-5 bg-white/5 border border-white/10 px-6 py-4 hover:bg-white/10 transition-colors duration-300">
                    <span className="text-[#C6A15B] font-bold text-sm w-8 flex-shrink-0">{step?.num}</span>
                    <div>
                      <span className="font-semibold text-white text-sm">{step?.title}</span>
                      <span className="text-white/50 text-sm"> — {step?.desc}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── DESIGN + EXECUTION ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 leading-tight">
                Design + Execution
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                From the first concept to the final handover — LayingStone manages the complete journey so you never have to.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {executionSteps?.map((step, i) =>
              <div key={step?.title} className="flex gap-6 p-6 bg-[#F3F3F3] hover:bg-[#eaeaea] transition-colors duration-300">
                  <span className="text-[#C6A15B] font-bold text-3xl leading-none flex-shrink-0 w-10">
                    {String(i + 1)?.padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#1F3A5F] mb-2">{step?.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── INTERIOR STYLES ── */}
        <section className="py-24 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Design Language</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 leading-tight">
                Residential Interior<br />Styles
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interiorStyles?.map((style) =>
              <div key={style?.name} className="group relative aspect-[4/3] overflow-hidden">
                  <Image
                  src={style?.img}
                  alt={style?.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="text-white font-bold text-lg tracking-wide">{style?.name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── MATERIALS & CRAFTSMANSHIP ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Quality & Finish</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 mb-6 leading-tight">
                  Materials &<br />Craftsmanship
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-gray-600 leading-relaxed mb-4">
                  The quality of an interior is determined by the materials used and the skill with which they are applied. At LayingStone, we source only from certified, reputable brands — ensuring every surface, fitting, and finish meets our quality standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our craftsmen are trained in precision woodwork, stone installation, tile laying, and surface finishing — bringing the same level of care to a laminate panel as to a marble countertop.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {materials?.slice(0, 4)?.map((m) =>
                <div key={m?.name} className="group relative aspect-square overflow-hidden">
                    <Image
                    src={m?.img}
                    alt={m?.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 200px" />
                  
                    <div className="absolute inset-0 bg-[#1F3A5F]/50 group-hover:bg-[#1F3A5F]/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className="text-white font-semibold text-sm">{m?.name}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {materials?.slice(4)?.map((m) =>
              <div key={m?.name} className="group relative aspect-[4/3] overflow-hidden">
                  <Image
                  src={m?.img}
                  alt={m?.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw" />
                
                  <div className="absolute inset-0 bg-[#1F3A5F]/50 group-hover:bg-[#1F3A5F]/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="text-white font-semibold text-sm">{m?.name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── PROJECT EXECUTION PROCESS ── */}
        <section className="py-24 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 leading-tight">
                Our Execution Process
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {executionProcess?.map((step) =>
              <div key={step?.step} className="bg-white p-8 relative group hover:shadow-lg transition-shadow duration-300">
                  <div className="text-[#C6A15B]/20 font-bold text-6xl absolute top-4 right-4 leading-none select-none">
                    {step?.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-0.5 bg-[#C6A15B] mb-6" />
                    <h3 className="font-bold text-[#1F3A5F] mb-3 text-lg">{step?.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── QUALITY & PROJECT MANAGEMENT ── */}
        <section className="py-24 bg-[#1F3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Our Commitment</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                  Quality & Project<br />Management
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-white/70 leading-relaxed mb-8">
                  Every LayingStone interior project is managed by a dedicated project manager who oversees every phase — from material procurement to final handover. Our quality management system ensures consistent standards across every site.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                ['Dedicated Project Management', 'A single point of contact managing your entire project.'],
                ['Site Supervision', 'Daily site oversight by experienced supervisors.'],
                ['Quality Checks', 'Multi-stage inspections at every phase of execution.'],
                ['Vendor Coordination', 'Seamless coordination across all material and service vendors.'],
                ['Material Management', 'Procurement, storage, and delivery managed on your behalf.'],
                ['Execution Monitoring', 'Real-time progress tracking and client updates.'],
                ['Timeline Management', 'Phased scheduling to ensure on-time delivery.'],
                ['Final Inspection', 'Comprehensive snagging and quality sign-off before handover.']]?.
                map(([title, desc]) =>
                <div key={title} className="bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors duration-300">
                    <h4 className="font-semibold text-[#C6A15B] text-sm mb-2">{title}</h4>
                    <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── BRANDS ── */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Materials & Brands</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-4">Brands We Work With</h2>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {brands?.map((brand) =>
              <div
                key={brand}
                className="bg-white border border-gray-100 flex items-center justify-center py-4 px-2 hover:border-[#C6A15B]/40 transition-colors duration-300">
                
                  <span className="text-[#1F3A5F] font-semibold text-xs text-center leading-tight">{brand}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Common Questions</span>
              <h2 className="text-4xl font-bold text-[#1F3A5F] mt-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs?.map((faq, i) =>
              <div key={i} className="border border-gray-200 overflow-hidden">
                  <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#1F3A5F] hover:bg-[#F3F3F3] transition-colors"
                  aria-expanded={openFaq === i}>
                  
                    <span className="pr-4">{faq?.q}</span>
                    <span
                    className="text-[#C6A15B] text-xl flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    
                      +
                    </span>
                  </button>
                  {openFaq === i &&
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      <div className="pt-4">{faq?.a}</div>
                    </div>
                }
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 bg-[#1F3A5F] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, #C6A15B 0%, transparent 60%)' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
              Begin Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Create a Home<br />That Feels Like Yours
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Share your vision with us. Our design team will guide you from concept to a fully finished, move-in-ready home.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C6A15B] text-white font-semibold px-12 py-5 hover:bg-[#b8924d] transition-colors duration-300 tracking-wide text-lg">
              
              Start Your Interior Project
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>);

}