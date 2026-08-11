'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const commercialServices = [
{
  title: 'Corporate Offices',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13a9fa6a7-1786087847984.png",
  alt: 'Modern corporate office interior with open plan workstations'
},
{
  title: 'Executive Offices',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca58dd9c-1769659696571.png",
  alt: 'Premium executive office interior with sophisticated furnishings'
},
{
  title: 'Reception Areas',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_13fcc5cbc-1772223913555.png",
  alt: 'Impressive corporate reception area with branded design elements'
},
{
  title: 'Workstations',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1342fbb-1766936728417.png",
  alt: 'Ergonomic open-plan workstation layout in a modern office'
},
{
  title: 'Meeting Rooms',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc5a9cb3-1772192842193.png",
  alt: 'Professional meeting room with integrated AV and premium seating'
},
{
  title: 'Conference Rooms',
  img: "https://images.unsplash.com/photo-1733397315165-dca1ba4927ae",
  alt: 'Large conference room with boardroom table and presentation setup'
},
{
  title: 'Co-working Spaces',
  img: "https://images.unsplash.com/photo-1721899129343-016e361a6ec4",
  alt: 'Contemporary co-working space with flexible seating arrangements'
},
{
  title: 'Retail Stores',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_178ad84c6-1772267377898.png",
  alt: 'Premium retail store interior with strategic product display'
},
{
  title: 'Showrooms',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_16805270e-1780483781785.png",
  alt: 'Luxury showroom interior with curated product presentation'
},
{
  title: 'Restaurants',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_142919885-1772196417470.png",
  alt: 'Atmospheric restaurant interior with ambient lighting and premium finishes'
},
{
  title: 'Cafés',
  img: "https://images.unsplash.com/photo-1709307171900-657387c2c7c5",
  alt: 'Contemporary café interior with warm tones and comfortable seating'
},
{
  title: 'Hotels',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1513f5fa2-1772142063708.png",
  alt: 'Luxury hotel lobby interior with grand architectural elements'
},
{
  title: 'Healthcare Spaces',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_16a9e996c-1764676805958.png",
  alt: 'Modern healthcare facility interior designed for patient comfort'
},
{
  title: 'Educational Spaces',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb285ecd-1766811227056.png",
  alt: 'Contemporary educational institution interior with collaborative spaces'
},
{
  title: 'Commercial Renovations',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_164aba7f1-1786443914296.png",
  alt: 'Commercial space renovation in progress with premium execution'
},
{
  title: 'Complete Office Fit-outs',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4073532-1786443913166.png",
  alt: 'Complete office fit-out with turnkey interior execution'
}];


const spacePlanningItems = [
{ title: 'Space Planning', desc: 'Optimised floor plans that balance open collaboration with focused work zones.' },
{ title: 'Workflow Optimisation', desc: 'Layouts designed around how your teams actually move and work.' },
{ title: 'Employee Experience', desc: 'Spaces that support wellbeing, focus, and a sense of belonging.' },
{ title: 'Brand Integration', desc: 'Your brand identity woven into every surface, material, and detail.' },
{ title: 'Lighting', desc: 'Layered lighting strategies for productivity, ambience, and energy efficiency.' },
{ title: 'Acoustics', desc: 'Sound management solutions for open offices, meeting rooms, and collaborative areas.' },
{ title: 'Ergonomics', desc: 'Furniture and layout choices that support physical health and long-term comfort.' },
{ title: 'Circulation', desc: 'Clear, intuitive movement paths that reduce friction and improve daily flow.' },
{ title: 'Storage', desc: 'Integrated storage solutions that keep workspaces organised and clutter-free.' },
{ title: 'Meeting Spaces', desc: 'A range of meeting environments — from quick huddle zones to formal boardrooms.' },
{ title: 'Reception & Client Areas', desc: 'First-impression spaces that communicate professionalism and brand confidence.' }];


const turnkeyExecution = [
{ num: '01', title: 'Design Coordination', desc: 'Aligning interior design with architectural and MEP requirements.' },
{ num: '02', title: 'Civil Modifications', desc: 'Partition walls, floor levelling, and structural adaptations.' },
{ num: '03', title: 'Electrical', desc: 'Power planning, concealed wiring, and smart control systems.' },
{ num: '04', title: 'HVAC Coordination', desc: 'Coordinating HVAC layout with ceiling and partition design.' },
{ num: '05', title: 'Plumbing', desc: 'Concealed plumbing for pantries, washrooms, and service areas.' },
{ num: '06', title: 'Fire & Safety Coordination', desc: 'Integrating fire suppression and safety systems with the interior design.' },
{ num: '07', title: 'Flooring', desc: 'Premium flooring installation — carpet, vinyl, stone, and tiles.' },
{ num: '08', title: 'Ceilings', desc: 'False ceiling systems with integrated lighting and service access.' },
{ num: '09', title: 'Partitions', desc: 'Glass, drywall, and acoustic partition systems.' },
{ num: '10', title: 'Joinery', desc: 'Custom joinery for reception counters, workstations, and storage.' },
{ num: '11', title: 'Furniture', desc: 'Ergonomic furniture supply and installation.' },
{ num: '12', title: 'Lighting', desc: 'Fixture installation and commissioning.' },
{ num: '13', title: 'Painting', desc: 'Premium paint application and branded wall treatments.' },
{ num: '14', title: 'Branding Elements', desc: 'Signage, wayfinding, and environmental graphics.' },
{ num: '15', title: 'Final Handover', desc: 'Snagging, commissioning, and handover documentation.' }];


const procurementAdvantages = [
{ title: 'Material Procurement', desc: 'Direct sourcing from certified vendors with quality verification before delivery.' },
{ title: 'Vendor Coordination', desc: 'Seamless management of all material and service vendors under one roof.' },
{ title: 'Skilled Workforce', desc: 'Trained craftsmen across carpentry, civil, electrical, and finishing trades.' },
{ title: 'Site Supervision', desc: 'Daily site oversight ensuring execution matches design intent.' },
{ title: 'Project Management', desc: 'Dedicated project managers as your single point of accountability.' },
{ title: 'Quality Control', desc: 'Multi-stage inspections at every phase of the project.' },
{ title: 'Schedule Management', desc: 'Phased execution planning to meet your operational deadlines.' },
{ title: 'Cost Control', desc: 'Transparent BOQ with no hidden costs and proactive budget management.' }];


const projectTypes = [
{ type: 'Corporate Offices', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1aef1cb78-1767207513253.png", alt: 'Modern corporate office interior' },
{ type: 'Retail', img: "https://img.rocket.new/generatedImages/rocket_gen_img_13ebc7d67-1772946337160.png", alt: 'Premium retail store interior' },
{ type: 'Hospitality', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1513f5fa2-1772142063708.png", alt: 'Luxury hotel lobby interior' },
{ type: 'Restaurants', img: "https://images.unsplash.com/photo-1717319562159-3226369164fc", alt: 'Atmospheric restaurant interior design' },
{ type: 'Healthcare', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec9f23e5-1766841180325.png", alt: 'Modern healthcare facility interior' },
{ type: 'Education', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb285ecd-1766811227056.png", alt: 'Contemporary educational institution interior' },
{ type: 'Showrooms', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1400e089b-1767899909086.png", alt: 'Luxury showroom interior design' },
{ type: 'Workspaces', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1ccb38bd2-1766904366929.png", alt: 'Contemporary co-working and workspace interior' }];


const portfolioFilters = ['All', 'Office', 'Retail', 'Hospitality', 'Healthcare', 'Education', 'Other Commercial'];

const portfolioProjects = [
{ name: 'Apex Corporate HQ', type: 'Office', area: '12,000 sq.ft', location: 'Hyderabad', img: "https://img.rocket.new/generatedImages/rocket_gen_img_15997b3eb-1786443913791.png", alt: 'Apex Corporate HQ — complete office fit-out, Hyderabad' },
{ name: 'Meridian Retail Flagship', type: 'Retail', area: '4,500 sq.ft', location: 'Bangalore', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1f217cc5f-1772201618270.png", alt: 'Meridian Retail Flagship store interior, Bangalore' },
{ name: 'The Grand Lobby', type: 'Hospitality', area: '8,000 sq.ft', location: 'Chennai', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9da24e7-1779914962761.png", alt: 'The Grand hotel lobby interior, Chennai' },
{ name: 'Wellness Clinic', type: 'Healthcare', area: '2,800 sq.ft', location: 'Hyderabad', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf659784-1764649751680.png", alt: 'Modern wellness clinic interior, Hyderabad' },
{ name: 'Bistro 42', type: 'Hospitality', area: '3,200 sq.ft', location: 'Mumbai', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf02876b-1786443912487.png", alt: 'Bistro 42 restaurant interior design, Mumbai' },
{ name: 'Innovation Campus', type: 'Education', area: '15,000 sq.ft', location: 'Pune', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1e304f599-1786443913958.png", alt: 'Innovation Campus educational interior, Pune' }];


const faqs = [
{
  q: 'Do you provide turnkey commercial interiors?',
  a: 'Yes. LayingStone manages the complete commercial interior journey — from concept design through to final handover. This includes civil modifications, MEP coordination, flooring, ceilings, partitions, joinery, furniture, lighting, branding elements, and final snagging.'
},
{
  q: 'Do you handle design and execution?',
  a: 'Yes. We offer integrated design and execution services, eliminating the coordination gaps that arise when design and execution are handled by separate teams. Our in-house design team works directly with our execution team throughout the project.'
},
{
  q: 'Can you work with an external architect?',
  a: 'Absolutely. If you have an architect or interior designer, we can take on the execution role — translating their approved designs into a finished space with our skilled workforce and project management.'
},
{
  q: 'Do you handle large office fit-outs?',
  a: 'Yes. We have experience managing large-scale office fit-outs across multiple floors. Our project management system handles phased execution, vendor coordination, and schedule management for complex, large-footprint projects.'
},
{
  q: 'Do you manage procurement?',
  a: 'Yes. Material procurement is managed entirely by our team — from vendor selection and quality verification to delivery scheduling and site management. This reduces your coordination burden and ensures consistent quality.'
},
{
  q: 'How do you manage project timelines?',
  a: 'Every project begins with a detailed phased execution schedule. Our project managers track progress daily, coordinate vendors proactively, and flag potential delays early — ensuring projects are delivered on time.'
},
{
  q: 'Can existing spaces be renovated?',
  a: 'Yes. We handle complete commercial renovations — from partial refurbishments to full-space transformations. We can work in phases to minimise disruption to ongoing business operations.'
},
{
  q: 'What types of commercial spaces do you execute?',
  a: 'We execute interiors across corporate offices, retail stores, showrooms, restaurants, cafés, hotels, healthcare facilities, educational institutions, and co-working spaces. Our team has experience across a wide range of commercial typologies.'
}];


const brands = [
'Asian Paints', 'Birla Opus', 'Nerolac', 'Hettich', 'Häfele', 'Blum',
'Jaquar', 'Hindware', 'Kajaria', 'Johnson', 'Somany', 'Merino',
'Greenlam', 'Century', 'Philips', 'Havells'];


export default function CommercialInteriorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="bg-[#F3F3F3]">

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://img.rocket.new/generatedImages/rocket_gen_img_14f25d44c-1777383205674.png"
              alt="Premium commercial office interior — LayingStone commercial interiors"
              fill
              className="object-cover"
              priority
              sizes="100vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f33]/90 via-[#1F3A5F]/40 to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
            <div className="max-w-3xl">
              <span className="inline-block text-[#C6A15B] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                LayingStone — Commercial Interiors
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
                Commercial<br />
                <span className="text-[#C6A15B]">Interiors</span>
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                High-performance workspaces and commercial environments — designed with strategic space planning, premium execution, and complete turnkey delivery for businesses that demand excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#C6A15B] text-white font-semibold px-8 py-4 hover:bg-[#b8924d] transition-colors duration-300 tracking-wide">
                  
                  Discuss Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-white/40 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-colors duration-300 tracking-wide">
                  
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT COMMERCIAL INTERIORS ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6">
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Our Approach</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 mb-8 leading-tight">
                  Spaces That Work<br />as Hard as You Do
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  Commercial interiors are not simply about aesthetics — they are strategic business assets. A well-designed workspace improves productivity, communicates brand values, and shapes the experience of every employee, client, and visitor who enters.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  LayingStone approaches commercial interior projects with the same rigour as architectural commissions. We integrate space planning, brand strategy, material selection, and complete execution under one team — delivering environments that are functional, durable, and visually compelling.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From a single-floor office fit-out to a multi-site retail rollout, our project management system ensures consistent quality, on-time delivery, and transparent communication throughout.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src="https://img.rocket.new/generatedImages/rocket_gen_img_15234a62f-1772115741960.png"
                      alt="Premium corporate office reception area by LayingStone"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 300px" />
                    
                  </div>
                  <div className="grid grid-rows-2 gap-4 mt-8">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1727249000948-bd625ab8cfff"
                        alt="Modern open-plan office workstation layout"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 200px" />
                      
                    </div>
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src="https://img.rocket.new/generatedImages/rocket_gen_img_14762d05d-1772134523910.png"
                        alt="Professional conference room interior design"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 200px" />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMERCIAL SERVICES ── */}
        <section className="py-24 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 leading-tight">
                Commercial Interior<br />Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {commercialServices?.map((service) =>
              <div
                key={service?.title}
                className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-400">
                
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                    src={service?.img}
                    alt={service?.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1F3A5F] text-sm">{service?.title}</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── SPACE PLANNING ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Strategic Design</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 mb-6 leading-tight">
                  Commercial<br />Space Planning
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  Effective commercial space planning is the foundation of a high-performing workplace. Before any design decisions are made, we analyse your operational requirements, team structure, and growth plans to create a spatial strategy that supports your business.
                </p>
                <div className="relative aspect-[4/3] overflow-hidden mt-8">
                  <Image
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_15024b637-1786443912140.png"
                    alt="Strategic commercial space planning and office layout design"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw" />
                  
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {spacePlanningItems?.map((item) =>
                <div key={item?.title} className="flex gap-5 p-5 bg-[#F3F3F3] hover:bg-[#eaeaea] transition-colors duration-300">
                    <div className="w-1 bg-[#C6A15B] flex-shrink-0 self-stretch" />
                    <div>
                      <h4 className="font-bold text-[#1F3A5F] text-sm mb-1">{item?.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item?.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── TURNKEY EXECUTION ── */}
        <section className="py-24 bg-[#1F3A5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Complete Delivery</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                  Commercial Turnkey<br />Execution
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-white/70 leading-relaxed mb-4">
                  LayingStone manages the complete commercial interior execution — from design coordination and civil modifications to furniture installation and final handover. Every trade is managed under one team, ensuring seamless coordination and consistent quality.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Our turnkey approach eliminates the complexity of managing multiple contractors, vendors, and timelines — giving you a single point of accountability for the entire project.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {turnkeyExecution?.map((step) =>
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

        {/* ── PROCUREMENT & EXECUTION ADVANTAGE ── */}
        <section className="py-24 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Our Advantage</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 leading-tight">
                Procurement &<br />Execution Advantage
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                LayingStone's integrated procurement and execution capability means fewer delays, consistent quality, and a single team managing your entire project.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {procurementAdvantages?.map((item) =>
              <div key={item?.title} className="bg-white p-8 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-10 h-0.5 bg-[#C6A15B] mb-6" />
                  <h3 className="font-bold text-[#1F3A5F] mb-3">{item?.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item?.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── PROJECT TYPES ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Sectors We Serve</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 leading-tight">
                Commercial<br />Project Types
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectTypes?.map((pt) =>
              <div key={pt?.type} className="group relative aspect-square overflow-hidden">
                  <Image
                  src={pt?.img}
                  alt={pt?.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white font-bold text-sm">{pt?.type}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── BRANDS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Materials & Brands</span>
              <h2 className="text-3xl font-bold text-[#1F3A5F] mt-4">Brands We Work With</h2>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {brands?.map((brand) =>
              <div
                key={brand}
                className="bg-[#F3F3F3] border border-gray-100 flex items-center justify-center py-4 px-2 hover:border-[#C6A15B]/40 transition-colors duration-300">
                
                  <span className="text-[#1F3A5F] font-semibold text-xs text-center leading-tight">{brand}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-[#F3F3F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em]">Common Questions</span>
              <h2 className="text-4xl font-bold text-[#1F3A5F] mt-4">Commercial Interiors FAQ</h2>
            </div>
            <div className="space-y-3">
              {faqs?.map((faq, i) =>
              <div key={i} className="border border-gray-200 bg-white overflow-hidden">
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
            style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, #C6A15B 0%, transparent 60%)' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
              Begin Your Project
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build a Space<br />That Drives Results?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Share your brief with our commercial interiors team. We'll respond with a tailored approach and initial space planning consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C6A15B] text-white font-semibold px-12 py-5 hover:bg-[#b8924d] transition-colors duration-300 tracking-wide text-lg">
              
              Discuss Your Project
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>);

}