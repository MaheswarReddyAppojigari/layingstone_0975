'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

/* ─── Sport data with hover images ─────────────────────────────────────────── */
const sports = [
{
  slug: 'badminton',
  title: 'Badminton',
  hoverImage: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <ellipse cx="18" cy="17" rx="9" ry="11" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="12" y1="11" x2="24" y2="23" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="12" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="12" y1="23" x2="24" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="18" y1="11" x2="18" y2="23" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="18" y1="28" x2="26" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="42" cy="38" r="3.5" fill="currentColor" opacity="0.8" />
        <line x1="42" y1="34.5" x2="38" y2="24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="42" y1="34.5" x2="42" y2="23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="42" y1="34.5" x2="46" y2="24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="38" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

},
{
  slug: 'football',
  title: 'Football',
  hoverImage: 'https://images.unsplash.com/photo-1731872504522-0ad9da30defc?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <polygon points="28,16 33,23 41,23 35,29 37,37 28,32 19,37 21,29 15,23 23,23" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>

},
{
  slug: 'tennis',
  title: 'Tennis',
  hoverImage: 'https://images.unsplash.com/photo-1659427948877-526b77c74732?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <ellipse cx="20" cy="19" rx="12" ry="14" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M9 19 Q14 12 20 19 Q26 26 31 19" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="20" y1="33" x2="27" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="43" cy="42" r="7" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M37 38 Q40 42 37 46" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M49 38 Q46 42 49 46" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </svg>

},
{
  slug: 'pickleball',
  title: 'PickleBall',
  hoverImage: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <ellipse cx="20" cy="19" rx="12" ry="13" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="16" cy="15" r="1.8" fill="currentColor" opacity="0.4" />
        <circle cx="24" cy="15" r="1.8" fill="currentColor" opacity="0.4" />
        <circle cx="16" cy="23" r="1.8" fill="currentColor" opacity="0.4" />
        <circle cx="24" cy="23" r="1.8" fill="currentColor" opacity="0.4" />
        <circle cx="20" cy="19" r="1.8" fill="currentColor" opacity="0.4" />
        <line x1="20" y1="32" x2="27" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="43" cy="42" r="7" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="40" cy="39" r="1.3" fill="currentColor" opacity="0.6" />
        <circle cx="46" cy="39" r="1.3" fill="currentColor" opacity="0.6" />
        <circle cx="43" cy="45" r="1.3" fill="currentColor" opacity="0.6" />
      </svg>

},
{
  slug: 'basketball',
  title: 'Basketball',
  hoverImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="8" y1="28" x2="48" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 8 Q38 18 38 28 Q38 38 28 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M28 8 Q18 18 18 28 Q18 38 28 48" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>

},
{
  slug: 'squash',
  title: 'Squash',
  hoverImage: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <ellipse cx="18" cy="18" rx="11" ry="13" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="11" y1="11" x2="25" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="11" y1="18" x2="25" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="11" y1="25" x2="25" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="18" y1="11" x2="18" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="18" y1="31" x2="25" y2="47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="42" cy="42" r="7" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>

},
{
  slug: 'athletic-track',
  title: 'Athletic Track',
  hoverImage: 'https://images.unsplash.com/photo-1723186051179-69b1dfe2a1f9?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="34" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="34" y1="13.5" x2="30" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="24" x2="22" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="24" x2="38" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="19" x2="38" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="32" x2="18" y2="43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="32" x2="42" y2="43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="49" x2="50" y2="49" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="6" y1="53" x2="50" y2="53" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      </svg>

},
{
  slug: 'cricket',
  title: 'Cricket',
  hoverImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="23" y="6" width="9" height="28" rx="4.5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="25" y="34" width="5" height="13" rx="2.5" fill="currentColor" opacity="0.6" />
        <circle cx="43" cy="42" r="7" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M37 38 Q40 42 37 46" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M49 38 Q46 42 49 46" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </svg>

},
{
  slug: 'padel',
  title: 'Padel',
  hoverImage: "https://images.unsplash.com/photo-1709587824637-2126d83d3216",
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <ellipse cx="19" cy="18" rx="12" ry="13" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="15" cy="14" r="2.2" fill="currentColor" opacity="0.3" />
        <circle cx="23" cy="14" r="2.2" fill="currentColor" opacity="0.3" />
        <circle cx="15" cy="22" r="2.2" fill="currentColor" opacity="0.3" />
        <circle cx="23" cy="22" r="2.2" fill="currentColor" opacity="0.3" />
        <circle cx="19" cy="18" r="2.2" fill="currentColor" opacity="0.3" />
        <line x1="19" y1="31" x2="26" y2="47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="43" cy="42" r="7" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M37 38 Q40 42 37 46" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M49 38 Q46 42 49 46" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </svg>

},
{
  slug: 'skating-rink',
  title: 'Skating Rink',
  hoverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M12 18 L12 34 Q12 38 16 38 L40 38 Q46 38 48 34 L48 32 Q48 28 44 28 L26 28 L26 18 Q26 14 22 14 L16 14 Q12 14 12 18 Z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15" />
        <line x1="14" y1="40" x2="48" y2="40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="10" y1="43" x2="50" y2="43" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      </svg>

},
{
  slug: 'multipurpose-court',
  title: 'Multipurpose Court',
  hoverImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
  icon:
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="6" y="8" width="44" height="40" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="28" y1="8" x2="28" y2="48" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <line x1="6" y1="28" x2="50" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <circle cx="28" cy="28" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        <rect x="6" y="15" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4" />
        <rect x="41" y="15" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4" />
        <rect x="6" y="34" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4" />
        <rect x="41" y="34" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4" />
      </svg>

}];


/* ─── Products data (unchanged) ────────────────────────────────────────────── */
const productCategories = [
{
  category: 'Artificial Turf',
  products: [
  {
    name: 'Artificial Turf',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16c5c8e41-1768566786833.png',
    alt: 'Premium artificial turf surface for sports facilities',
    description: 'Engineered for performance, durability, and all-weather play. Specialized turf for football, cricket, hockey, and multi-sport applications.',
    specs: ['Pile Height: 10–60mm', 'Dtex: 8,000–20,000', 'Backing: 3 Layer PU/Latex', 'Warranty: 5–8 years'],
    tag: 'All-Weather'
  },
  {
    name: 'Hockey Turf',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_164f5c8bb-1786449706486.png',
    alt: 'Specialized hockey turf surface for professional play',
    description: 'Dedicated synthetic turf engineered for hockey — consistent ball roll, excellent traction, and all-weather performance.',
    specs: ['Pile Height: 10–60mm', 'Dtex: 8,000–20,000', 'Backing: 3 Layer PU/Latex', 'Warranty: 5–8 years'],
    tag: 'Hockey Specific'
  }]

},
{
  category: 'Acrylic Sports Flooring',
  products: [
  {
    name: 'Standard Acrylic Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12da2d09a-1786449708330.png',
    alt: 'Standard 5-layer acrylic sports flooring for outdoor courts',
    description: 'Standard 5-layer acrylic coating system. Excellent grip, consistent ball bounce, UV resistant, and low maintenance.',
    specs: ['System: 5-Layer Acrylic', 'Finish: Anti-slip', 'Weather: All-weather resistant', 'UV Resistant: Yes'],
    tag: 'Outdoor Courts'
  },
  {
    name: 'Cushion Acrylic Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d36d9a10-1786449708101.png',
    alt: 'Cushion 8-layer acrylic sports flooring with enhanced shock absorption',
    description: 'Premium 8-layer cushion acrylic system with enhanced shock absorption. Ideal for tennis, basketball, and multi-purpose courts.',
    specs: ['System: 8-Layer Cushion Acrylic', 'Shock Absorption: Enhanced', 'Colours: Wide range', 'Brands: Pacecourt, KDF, Unica'],
    tag: 'Premium Cushion'
  }]

},
{
  category: 'PP Interlocking Tiles',
  products: [
  {
    name: 'PP Interlocking Tiles',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11becc0f5-1785642771729.png',
    alt: 'PP interlocking tiles for multi-sport court surfaces',
    description: 'Double-layer polypropylene tiles engineered for durability, shock absorption, and superior grip. FIBA, ITF, and LABOSPORT certified.',
    specs: ['Size: 1×1 ft per tile', 'Thickness: 8–15mm', 'Load Capacity: 20 Ton/Tile', 'Usage Life: 8–10 years'],
    tag: 'FIBA & ITF Certified'
  }]

},
{
  category: 'PVC & Wooden Flooring',
  products: [
  {
    name: 'PVC Flooring — 4.5mm',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png',
    alt: 'PVC sports flooring 4.5mm for indoor courts',
    description: 'Indoor PVC surface providing excellent comfort and grip. Ideal for badminton, basketball, and multi-sport indoor courts.',
    specs: ['Thickness: 4.5mm', 'Grade: Comfort & Grip', 'Usage: Indoor courts', 'Maintenance: Low'],
    tag: 'Indoor'
  },
  {
    name: 'PVC Flooring — 6mm & 7mm',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11becc0f5-1785642771729.png',
    alt: 'PVC sports flooring 6mm and 7mm for high performance indoor courts',
    description: 'High-performance PVC flooring with superior cushioning. 6mm for better cushion; 7mm for maximum performance.',
    specs: ['Thickness: 6mm / 7mm', '6mm: Better Cushion', '7mm: High Performance', 'Usage: Indoor courts'],
    tag: 'High Performance'
  },
  {
    name: 'Maple Wood Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11a08be07-1768765571042.png',
    alt: 'Premium maple wood sports flooring for professional courts',
    description: 'Premium maple wood sports flooring with superior shock absorption and professional play standards. Ideal for basketball, badminton, and squash.',
    specs: ['Material: Maple Wood', 'Finish: Premium', 'Shock Absorption: Superior', 'Standards: FIBA, BWF'],
    tag: 'Premium Wood'
  },
  {
    name: 'Teak Wood Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_19730cdc6-1786449707952.png',
    alt: 'Teak wood sports flooring with high durability for indoor courts',
    description: 'High-durability teak wood flooring for professional indoor courts. Excellent longevity and performance characteristics.',
    specs: ['Material: Teak Wood', 'Finish: High Durability', 'Shock Absorption: Superior', 'Standards: FIBA, BWF'],
    tag: 'High Durability'
  }]

},
{
  category: 'EPDM / FlexiPlay Tiles',
  products: [
  {
    name: 'EPDM Rubber Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png',
    alt: 'EPDM rubber flooring tiles for play areas and gym',
    description: "Premium EPDM rubber flooring with superior shock absorption, anti-slip safety, and vibrant finishes. Ideal for kids' play areas, gyms, and jogging tracks.",
    specs: ['Thickness: 15–40mm', 'Material: EPDM, SBR Rubber', 'Slip Resistant: Yes', 'Colours: Multi-colour'],
    tag: 'Play Areas & Gym'
  },
  {
    name: 'EPDM Interlock Tiles',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png',
    alt: 'EPDM interlocking rubber tiles for outdoor play areas',
    description: 'Interlocking EPDM rubber tiles for easy installation and customizable layouts. Durable, weather-resistant, and low maintenance.',
    specs: ['Type: Interlock System', 'Material: EPDM Granules', 'Weather: All-weather', 'Size: Customizable'],
    tag: 'Easy Install'
  }]

},
{
  category: 'Athletic Track',
  products: [
  {
    name: 'PU Athletic Track Surface',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_111beca57-1786449707671.png',
    alt: 'PU synthetic athletic track surface for running tracks',
    description: 'Polyurethane (PU) athletic track surface engineered to World Athletics standards. Consistent performance, excellent traction, and all-weather durability.',
    specs: ['Material: Polyurethane (PU)', 'Standard: World Athletics', 'Weather: All-weather', 'Performance: Consistent'],
    tag: 'World Athletics Standard'
  }]

},
{
  category: 'Padel Court',
  products: [
  {
    name: 'Padel Court — Full Panoramic',
    image: 'https://images.unsplash.com/photo-1709587824637-2126d83d3216?w=600&q=80',
    alt: 'Full panoramic padel court with glass panels and artificial turf',
    description: 'FIP-certified padel court with full panoramic glass panels. 20m×10m×4m steel structure with 12mm toughened glass and 13mm artificial turf.',
    specs: ['Size: 20m × 10m × 4m', 'Glass: 12mm Toughened (18 panels)', 'Turf: 13mm pile, Dtex 8,800', 'Lighting: 8 LED curved lights'],
    tag: 'FIP Certified'
  },
  {
    name: 'Padel Court — Standard',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18802a80d-1776552673942.png',
    alt: 'Standard padel court with steel structure and artificial turf',
    description: 'Standard FIP-compliant padel court with steel structure, mesh fencing, and premium artificial turf surface.',
    specs: ['Size: 20m × 10m × 4m', 'Structure: 100×50mm columns', 'Mesh: 4mm thickness', 'Turf: 13mm pile'],
    tag: 'FIP Compliant'
  }]

}];


/* ─── FAQs (unchanged) ──────────────────────────────────────────────────────── */
const faqs = [
{ q: 'What certifications do your sports surfaces meet?', a: 'Our surfaces comply with international standards — ITF for tennis, USA Pickleball guidelines, FIBA for basketball, BWF for badminton, World Athletics for athletic tracks, and FIP for padel courts. All surfaces are tested and certified by accredited laboratories.' },
{ q: 'How long does a sports court construction take?', a: 'A standard synthetic turf football pitch (7-a-side) typically takes 4–6 weeks from site preparation to handover. Padel courts take 2–3 weeks. Multi-sport courts and acrylic surfaces typically take 3–5 weeks depending on civil base requirements.' },
{ q: 'Do you handle school and institutional projects?', a: 'Yes. We have extensive experience in school, college, and corporate campus sports infrastructure — including playgrounds, multi-sport courts, athletic tracks, and indoor halls — all designed with safety and performance as priorities.' },
{ q: 'What flooring options are available for indoor courts?', a: 'For indoor courts we offer PP interlocking tiles, acrylic surfaces, PU flooring, PVC flooring (4.5mm, 6mm, 7mm), and premium wooden flooring (Maple and Teak) — each suited to specific sports and performance requirements.' },
{ q: 'Can you retrofit or upgrade existing sports facilities?', a: 'Yes. We specialise in upgrading and retrofitting existing sports facilities — replacing worn surfaces, upgrading lighting, improving drainage, and adding new amenities — with minimal disruption to ongoing use.' }];


/* ─── Hero slideshow images ─────────────────────────────────────────────────── */
const heroSlides = [
{ url: "https://images.unsplash.com/photo-1731872504522-0ad9da30defc", alt: 'Professional football pitch with green artificial turf under stadium lights' },
{ url: "https://images.unsplash.com/photo-1659427948877-526b77c74732", alt: 'Outdoor tennis court with blue acrylic surface and white court lines' },
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_11a08be07-1768765571042.png", alt: 'Professional basketball court with hardwood flooring and arena lighting' },
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_15dfef6f4-1772710925042.png", alt: 'Cricket pitch with well-maintained turf and boundary markings' },
{ url: "https://images.unsplash.com/photo-1723186051179-69b1dfe2a1f9", alt: 'Athletic running track with red synthetic surface and lane markings' },
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c55d211f-1764688168221.png", alt: 'Indoor badminton court with wooden flooring and overhead lighting' },
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1698ab1c7-1772230105707.png", alt: 'Padel court with glass panels and artificial turf surface at sunset' }];


/* ─── Editorial image moments ───────────────────────────────────────────────── */
const editorialImages = [
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_168d5cc9d-1769008856305.png", alt: 'Wide panoramic view of a professional sports stadium with seating and floodlights' },
{ url: "https://images.unsplash.com/photo-1679139599708-d6ec9d3ce223", alt: 'Close-up of athletic track surface texture with lane markings' },
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1b526241a-1766766522105.png", alt: 'Premium indoor sports arena with professional court markings and lighting' }];


/* ─── Sport engineering details ─────────────────────────────────────────────── */
const engineeringDetails = [
{ label: 'Court Surfaces', img: "https://img.rocket.new/generatedImages/rocket_gen_img_10354e2ce-1786450670488.png", alt: 'Premium acrylic court surface with precise line markings' },
{ label: 'Artificial Turf', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf975a2c-1765215660978.png", alt: 'Close-up of high-quality artificial turf fibres on a football pitch' },
{ label: 'Athletic Tracks', img: "https://images.unsplash.com/photo-1723186051179-69b1dfe2a1f9", alt: 'Synthetic PU athletic track surface with lane markings' },
{ label: 'Sports Lighting', img: "https://images.unsplash.com/photo-1697562160779-fed83c21a2cd", alt: 'Professional stadium floodlights illuminating a sports facility at night' },
{ label: 'Indoor Arenas', img: "https://img.rocket.new/generatedImages/rocket_gen_img_1b526241a-1766766522105.png", alt: 'Premium indoor sports arena with professional flooring and overhead lighting' },
{ label: 'Padel Courts', img: "https://img.rocket.new/generatedImages/rocket_gen_img_18802a80d-1776552673942.png", alt: 'Modern padel court with glass panels and artificial turf surface' }];


/* ─── Sport card component with hover image reveal ──────────────────────────── */
function SportCard({ sport }: {sport: (typeof sports)[0];}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/sport-infra/${sport.slug}`}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C6A15B]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      
      {/* Hover image layer */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}>
        
        <img
          src={sport.hoverImage}
          alt={sport.title}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-[#1F3A5F]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col items-center text-center gap-4">
        <div
          className="transition-all duration-500"
          style={{ color: hovered ? '#C6A15B' : '#1F3A5F' }}>
          
          {sport.icon}
        </div>
        <h3
          className="font-semibold text-sm tracking-wide transition-colors duration-300 leading-snug"
          style={{ color: hovered ? '#ffffff' : '#1F3A5F' }}>
          
          {sport.title}
        </h3>
        <span
          className="text-xs font-medium tracking-widest uppercase transition-all duration-300"
          style={{ color: hovered ? '#C6A15B' : 'transparent' }}>
          
          Explore →
        </span>
      </div>
    </Link>);

}

/* ─── Fade-in-on-scroll hook ────────────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);observer.disconnect();}},
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ─── Main page ─────────────────────────────────────────────────────────────── */
export default function SportInfraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isFading, setIsFading] = useState(false);

  /* Slideshow */
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % heroSlides.length;
      setNextSlide(next);
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide(next);
        setIsFading(false);
      }, 800);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  /* Fade-in sections */
  const introFade = useFadeIn();
  const gridFade = useFadeIn();
  const whyFade = useFadeIn();
  const productsFade = useFadeIn();
  const faqFade = useFadeIn();

  return (
    <>
      <Header />
      <main>

        {/* ── HERO — "Building Arenas Where Champions Are Made" ── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          {/* Slideshow layers */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[800ms] ease-in-out"
            style={{ backgroundImage: `url('${heroSlides[currentSlide].url}')`, opacity: isFading ? 0 : 1 }}
            aria-hidden="true" />
          
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroSlides[nextSlide].url}')`, opacity: 1, zIndex: -1 }}
            aria-hidden="true" />
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-[#1F3A5F]/65" style={{ zIndex: 1 }} />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, #C6A15B 0%, transparent 55%)', zIndex: 2 }} />

          {/* Hero content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-32 pb-24" style={{ zIndex: 3 }}>
            <div className="inline-flex items-center gap-2 bg-[#C6A15B]/20 border border-[#C6A15B]/30 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
              <span className="text-[#C6A15B] text-sm font-semibold tracking-widest uppercase">Sport Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Building Arenas Where
              <span className="block text-[#C6A15B] mt-1">Champions Are Made</span>
            </h1>
            <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mb-8 opacity-70" />
            <p className="text-white/75 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              International-standard sports infrastructure — from synthetic turf football pitches to padel courts and athletic tracks — built to certified standards for schools, clubs, and professional organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#C6A15B] text-[#1F3A5F] font-bold px-10 py-4 rounded-xl hover:bg-[#b8924f] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm tracking-wide uppercase">
                Get Free Consultation
              </Link>
              <Link href="/portfolio" className="border border-white/40 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm tracking-wide uppercase">
                View Projects
              </Link>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#C6A15B] to-transparent" style={{ zIndex: 4 }} />
        </section>

        {/* ── STATS BAR ── */}
        <section className="py-12 bg-[#C6A15B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[['100+', 'Sports Facilities Built'], ['11', 'Sports Disciplines'], ['98%', 'Client Satisfaction'], ['8yr', 'Surface Warranty']].map(([num, label]) =>
              <div key={label}>
                  <div className="text-3xl md:text-4xl font-bold text-[#1F3A5F]">{num}</div>
                  <div className="text-[#1F3A5F]/70 text-sm mt-1 font-medium tracking-wide">{label}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── EDITORIAL INTRO — large image + text ── */}
        <section className="bg-white overflow-hidden">
          <div
            ref={introFade.ref}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-0 items-stretch transition-all duration-1000"
            style={{ opacity: introFade.visible ? 1 : 0, transform: introFade.visible ? 'translateY(0)' : 'translateY(40px)' }}>
            
            {/* Text side */}
            <div className="flex flex-col justify-center pr-0 lg:pr-16 py-8 lg:py-0 order-2 lg:order-1">
              <span className="text-[#C6A15B] font-semibold text-xs uppercase tracking-widest mb-4">Sport + Engineering + Architecture</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] leading-tight mb-6">
                Where Performance<br />Meets Precision
              </h2>
              <div className="w-12 h-0.5 bg-[#C6A15B] mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Layingstone designs and builds sports infrastructure that meets the highest international standards — from the surface underfoot to the lighting overhead. Every facility is engineered for performance, durability, and the demands of serious sport.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Our team brings together sports surface expertise, civil engineering, and construction management to deliver facilities that serve athletes, clubs, schools, and professional organisations across 11 sports disciplines.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[['ITF Certified', 'Tennis surfaces'], ['FIBA Approved', 'Basketball courts'], ['BWF Standard', 'Badminton courts'], ['FIP Compliant', 'Padel courts']].map(([title, sub]) =>
                <div key={title} className="border-l-2 border-[#C6A15B] pl-4">
                    <div className="font-bold text-[#1F3A5F] text-sm">{title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{sub}</div>
                  </div>
                )}
              </div>
            </div>
            {/* Image side */}
            <div className="relative h-80 lg:h-auto min-h-[400px] rounded-2xl overflow-hidden order-1 lg:order-2">
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_168d5cc9d-1769008856305.png"
                alt="Wide panoramic view of a professional sports stadium with seating and floodlights"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
                  <p className="text-white text-sm font-medium">World-class facilities engineered for champions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FULL-WIDTH EDITORIAL IMAGE ── */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1679139599708-d6ec9d3ce223"
            alt="Close-up of athletic track surface texture with lane markings and starting blocks"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-[#1F3A5F]/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-[#C6A15B] text-sm font-semibold tracking-widest uppercase mb-4">Our Expertise</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
                11 Sports.<br />One Standard of Excellence.
              </h2>
            </div>
          </div>
        </section>

        {/* ── SPORTS GRID — Premium Symbol + Name ── */}
        <section className="py-24 bg-[#F3F3F3]">
          <div
            ref={gridFade.ref}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: gridFade.visible ? 1 : 0, transform: gridFade.visible ? 'translateY(0)' : 'translateY(40px)' }}>
            
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-xs uppercase tracking-widest">What We Build</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4 leading-tight">Sports Infrastructure</h2>
              <div className="w-12 h-0.5 bg-[#C6A15B] mx-auto mt-6 mb-5" />
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">Select a sport to explore our surfaces, products, and specifications.</p>
            </div>

            {/* Grid: 2 cols mobile, 3 tablet, 4 desktop — last row centred */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {sports.map((sport) =>
              <SportCard key={sport.slug} sport={sport} />
              )}
            </div>
          </div>
        </section>

        {/* ── ENGINEERING DETAILS — mosaic grid ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-xs uppercase tracking-widest">The Details</span>
              <h2 className="text-4xl font-bold text-[#1F3A5F] mt-4">Engineered at Every Level</h2>
              <div className="w-12 h-0.5 bg-[#C6A15B] mx-auto mt-6 mb-5" />
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                From court surfaces and turf systems to lighting, drainage, and structural roofing — every element of a Layingstone facility is engineered with precision.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {engineeringDetails.map((item, i) =>
              <div
                key={item.label}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? 'md:col-span-2 h-72' : 'h-56'}`}>
                
                  <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/80 via-[#1F3A5F]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-white font-bold text-base tracking-wide">{item.label}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── WHY LAYINGSTONE ── */}
        <section className="py-24 bg-[#1F3A5F]">
          <div
            ref={whyFade.ref}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: whyFade.visible ? 1 : 0, transform: whyFade.visible ? 'translateY(0)' : 'translateY(40px)' }}>
            
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-xs uppercase tracking-widest">Why LayingStone</span>
              <h2 className="text-4xl font-bold text-white mt-4">The LayingStone Sports Advantage</h2>
              <div className="w-12 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
              ['Certified Surfaces', 'ITF, FIBA, BWF, FIP, and World Athletics certified surfaces tested by accredited laboratories.'],
              ['Experienced Team', 'Sports infrastructure specialists with deep expertise across 11 disciplines.'],
              ['Turnkey Delivery', 'Complete project management from design to handover — single point of contact.'],
              ['Premium Materials', 'Artificial turf, acrylic flooring, PVC, wooden, and PP interlocking tile systems from trusted global brands.'],
              ['Post-Handover Support', 'Up to 8-year surface warranty and comprehensive maintenance programmes.'],
              ['Trusted Brands', 'Partnered with CCGrass, Bellinturf, Maverick Turf, Pacecourt, KDF, and Unica for materials.']].
              map(([title, desc]) =>
              <div key={title as string} className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#C6A15B]/40 transition-all duration-300">
                  <div className="w-8 h-0.5 bg-[#C6A15B] mb-5 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-bold text-[#C6A15B] mb-3 text-base">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── LARGE EDITORIAL IMAGE — panoramic stadium ── */}
        <section className="relative h-[55vh] overflow-hidden">
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1b526241a-1766766522105.png"
            alt="Premium indoor sports arena with professional court markings and overhead lighting"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A5F]/80 via-[#1F3A5F]/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-lg">
                <p className="text-[#C6A15B] text-xs font-semibold tracking-widest uppercase mb-4">Scale + Engineering + Performance</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Facilities Built<br />for Serious Sport
                </h2>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C6A15B] text-[#1F3A5F] font-bold px-8 py-3.5 rounded-xl hover:bg-[#b8924f] transition-all duration-300 text-sm uppercase tracking-wide">
                  Start Your Project
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPORTS INFRASTRUCTURE PRODUCTS ── */}
        <section className="py-24 bg-[#F3F3F3]">
          <div
            ref={productsFade.ref}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: productsFade.visible ? 1 : 0, transform: productsFade.visible ? 'translateY(0)' : 'translateY(40px)' }}>
            
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-xs uppercase tracking-widest">Our Range</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mt-4">Sports Infrastructure Products</h2>
              <div className="w-12 h-0.5 bg-[#C6A15B] mx-auto mt-6 mb-5" />
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto leading-relaxed">
                Premium sports surface systems and infrastructure products — engineered for performance, certified to international standards, and built for long-term durability.
              </p>
            </div>

            <div className="space-y-20">
              {productCategories.map((cat) =>
              <div key={cat.category}>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A15B]/30" />
                    <h3 className="text-sm font-bold text-[#1F3A5F] uppercase tracking-widest whitespace-nowrap px-3">{cat.category}</h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A15B]/30" />
                  </div>
                  <div className={`grid gap-6 ${cat.products.length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' : cat.products.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                    {cat.products.map((product) =>
                  <div key={product.name} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-[#C6A15B]/30 hover:-translate-y-1">
                        <div className="relative h-52 overflow-hidden bg-[#1F3A5F]/5">
                          <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/60 to-transparent" />
                          <div className="absolute top-3 right-3">
                            <span className="bg-[#C6A15B] text-[#1F3A5F] text-xs font-bold px-3 py-1 rounded-full">{product.tag}</span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-bold text-lg leading-snug">{product.name}</h4>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>
                          <div className="space-y-2">
                            {product.specs.map((spec) =>
                        <div key={spec} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-1.5 flex-shrink-0" />
                                <span className="text-xs text-[#1F3A5F] font-medium">{spec}</span>
                              </div>
                        )}
                          </div>
                        </div>
                      </div>
                  )}
                  </div>
                </div>
              )}
            </div>

            {/* Brand partners */}
            <div className="mt-20 bg-white rounded-2xl p-10 border border-gray-100">
              <div className="text-center mb-8">
                <span className="text-[#C6A15B] font-semibold text-xs uppercase tracking-widest">Trusted Partners</span>
                <h3 className="text-2xl font-bold text-[#1F3A5F] mt-3">Brands We Work With</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {['CCGrass', 'Bellinturf', 'Maverick Turf', 'Pacecourt', 'KDF Sports Flooring Systems', 'Unica Sports Surface Experts'].map((brand) =>
                <div key={brand} className="bg-[#F3F3F3] rounded-xl px-6 py-3 text-[#1F3A5F] font-semibold text-sm tracking-wide border border-gray-200 hover:border-[#C6A15B]/50 hover:bg-[#C6A15B]/5 transition-all duration-300">
                    {brand}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-24 bg-white">
          <div
            ref={faqFade.ref}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: faqFade.visible ? 1 : 0, transform: faqFade.visible ? 'translateY(0)' : 'translateY(40px)' }}>
            
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-xs uppercase tracking-widest">FAQs</span>
              <h2 className="text-4xl font-bold text-[#1F3A5F] mt-4">Frequently Asked Questions</h2>
              <div className="w-12 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) =>
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#C6A15B]/40 transition-colors">
                  <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left font-semibold text-[#1F3A5F] hover:bg-[#F3F3F3] transition-colors text-sm">
                  
                    {faq.q}
                    <span className={`text-[#C6A15B] text-xl transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === i &&
                <div className="px-7 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                }
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-28 overflow-hidden">
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1bb3ec147-1768765571036.png"
            alt="Professional sports facility with premium artificial turf and stadium lighting"
            className="absolute inset-0 w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A5F]/90 to-[#1F3A5F]/70" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <span className="text-[#C6A15B] text-xs font-semibold tracking-widest uppercase mb-4 block">Let's Build Together</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">Ready to Build Your Sports Facility?</h2>
            <div className="w-12 h-0.5 bg-[#C6A15B] mx-auto mb-8" />
            <p className="text-white/75 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">Talk to our sports infrastructure experts and get a detailed project proposal within 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#C6A15B] text-[#1F3A5F] font-bold px-10 py-4 rounded-xl hover:bg-[#b8924f] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm uppercase tracking-wide">
                Get Free Estimate
              </Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-wide">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>);

}