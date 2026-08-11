'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

const sports = [
{
  slug: 'badminton',
  title: 'Badminton',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Racket */}
        <ellipse cx="20" cy="20" rx="11" ry="13" stroke="#1F3A5F" strokeWidth="2.2" fill="none" />
        <line x1="14" y1="14" x2="26" y2="26" stroke="#C6A15B" strokeWidth="1.2" opacity="0.7" />
        <line x1="14" y1="20" x2="26" y2="20" stroke="#C6A15B" strokeWidth="1.2" opacity="0.7" />
        <line x1="14" y1="26" x2="26" y2="14" stroke="#C6A15B" strokeWidth="1.2" opacity="0.7" />
        <line x1="20" y1="14" x2="20" y2="26" stroke="#C6A15B" strokeWidth="1.2" opacity="0.7" />
        <line x1="20" y1="33" x2="28" y2="50" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" />
        {/* Shuttlecock */}
        <circle cx="46" cy="44" r="4" fill="#C6A15B" opacity="0.9" />
        <line x1="46" y1="40" x2="42" y2="28" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="46" y1="40" x2="46" y2="27" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="46" y1="40" x2="50" y2="28" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="42" y1="28" x2="50" y2="28" stroke="#1F3A5F" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

},
{
  slug: 'football',
  title: 'Football',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <circle cx="32" cy="32" r="22" stroke="#1F3A5F" strokeWidth="2.2" fill="none" />
        <polygon points="32,18 37,26 45,26 39,33 41,42 32,37 23,42 25,33 19,26 27,26" fill="#C6A15B" opacity="0.85" stroke="#1F3A5F" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>

},
{
  slug: 'tennis',
  title: 'Tennis',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Racket head */}
        <ellipse cx="22" cy="22" rx="14" ry="16" stroke="#1F3A5F" strokeWidth="2.2" fill="none" />
        <path d="M10 22 Q16 14 22 22 Q28 30 34 22" stroke="#C6A15B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <line x1="22" y1="38" x2="30" y2="54" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" />
        {/* Ball */}
        <circle cx="48" cy="46" r="8" stroke="#1F3A5F" strokeWidth="2" fill="none" />
        <path d="M41 42 Q44 46 41 50" stroke="#C6A15B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M55 42 Q52 46 55 50" stroke="#C6A15B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>

},
{
  slug: 'pickleball',
  title: 'PickleBall',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Paddle - flat round head */}
        <ellipse cx="22" cy="22" rx="13" ry="14" stroke="#1F3A5F" strokeWidth="2.2" fill="#C6A15B" fillOpacity="0.15" />
        <circle cx="18" cy="18" r="2" fill="#1F3A5F" opacity="0.4" />
        <circle cx="26" cy="18" r="2" fill="#1F3A5F" opacity="0.4" />
        <circle cx="18" cy="26" r="2" fill="#1F3A5F" opacity="0.4" />
        <circle cx="26" cy="26" r="2" fill="#1F3A5F" opacity="0.4" />
        <circle cx="22" cy="22" r="2" fill="#1F3A5F" opacity="0.4" />
        <line x1="22" y1="36" x2="30" y2="52" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" />
        {/* Ball */}
        <circle cx="48" cy="46" r="8" stroke="#1F3A5F" strokeWidth="2" fill="none" />
        <circle cx="45" cy="43" r="1.5" fill="#C6A15B" opacity="0.7" />
        <circle cx="51" cy="43" r="1.5" fill="#C6A15B" opacity="0.7" />
        <circle cx="48" cy="49" r="1.5" fill="#C6A15B" opacity="0.7" />
      </svg>

},
{
  slug: 'basketball',
  title: 'Basketball',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <circle cx="32" cy="32" r="22" stroke="#1F3A5F" strokeWidth="2.2" fill="none" />
        <line x1="10" y1="32" x2="54" y2="32" stroke="#C6A15B" strokeWidth="1.8" />
        <path d="M32 10 Q42 21 42 32 Q42 43 32 54" stroke="#C6A15B" strokeWidth="1.8" fill="none" />
        <path d="M32 10 Q22 21 22 32 Q22 43 32 54" stroke="#C6A15B" strokeWidth="1.8" fill="none" />
      </svg>

},
{
  slug: 'squash',
  title: 'Squash',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Racket */}
        <ellipse cx="20" cy="20" rx="12" ry="14" stroke="#1F3A5F" strokeWidth="2.2" fill="none" />
        <line x1="13" y1="13" x2="27" y2="27" stroke="#C6A15B" strokeWidth="1.2" opacity="0.7" />
        <line x1="13" y1="20" x2="27" y2="20" stroke="#C6A15B" strokeWidth="1.2" opacity="0.7" />
        <line x1="13" y1="27" x2="27" y2="13" stroke="#C6A15B" strokeWidth="1.2" opacity="0.7" />
        <line x1="20" y1="13" x2="20" y2="27" stroke="#C6A15B" strokeWidth="1.2" opacity="0.7" />
        <line x1="20" y1="34" x2="28" y2="52" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" />
        {/* Ball */}
        <circle cx="46" cy="46" r="8" fill="#C6A15B" opacity="0.85" stroke="#1F3A5F" strokeWidth="1.8" />
      </svg>

},
{
  slug: 'athletic-track',
  title: 'Athletic Track',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Running figure */}
        <circle cx="38" cy="12" r="4" stroke="#1F3A5F" strokeWidth="2" fill="none" />
        <line x1="38" y1="16" x2="34" y2="28" stroke="#1F3A5F" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="34" y1="28" x2="26" y2="36" stroke="#1F3A5F" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="34" y1="28" x2="42" y2="36" stroke="#1F3A5F" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="30" y1="22" x2="42" y2="20" stroke="#1F3A5F" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="26" y1="36" x2="22" y2="46" stroke="#1F3A5F" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="42" y1="36" x2="46" y2="46" stroke="#1F3A5F" strokeWidth="2.2" strokeLinecap="round" />
        {/* Track line */}
        <line x1="8" y1="52" x2="56" y2="52" stroke="#C6A15B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="56" x2="56" y2="56" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>

},
{
  slug: 'cricket',
  title: 'Cricket',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Bat */}
        <rect x="26" y="8" width="10" height="30" rx="5" fill="#C6A15B" opacity="0.85" stroke="#1F3A5F" strokeWidth="1.8" />
        <rect x="28" y="38" width="6" height="14" rx="3" fill="#1F3A5F" opacity="0.7" />
        {/* Ball */}
        <circle cx="46" cy="46" r="8" stroke="#1F3A5F" strokeWidth="2" fill="none" />
        <path d="M40 42 Q43 46 40 50" stroke="#C6A15B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M52 42 Q49 46 52 50" stroke="#C6A15B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>

},
{
  slug: 'padel',
  title: 'Padel',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Padel paddle - solid round */}
        <ellipse cx="20" cy="20" rx="13" ry="14" stroke="#1F3A5F" strokeWidth="2.2" fill="#C6A15B" fillOpacity="0.2" />
        <circle cx="16" cy="16" r="2.5" fill="#1F3A5F" opacity="0.35" />
        <circle cx="24" cy="16" r="2.5" fill="#1F3A5F" opacity="0.35" />
        <circle cx="16" cy="24" r="2.5" fill="#1F3A5F" opacity="0.35" />
        <circle cx="24" cy="24" r="2.5" fill="#1F3A5F" opacity="0.35" />
        <circle cx="20" cy="20" r="2.5" fill="#1F3A5F" opacity="0.35" />
        <line x1="20" y1="34" x2="28" y2="52" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" />
        {/* Ball */}
        <circle cx="48" cy="46" r="8" stroke="#1F3A5F" strokeWidth="2" fill="none" />
        <path d="M41 42 Q44 46 41 50" stroke="#C6A15B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M55 42 Q52 46 55 50" stroke="#C6A15B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>

},
{
  slug: 'skating-rink',
  title: 'Skating Rink',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        {/* Ice skate boot */}
        <path d="M14 20 L14 38 Q14 42 18 42 L44 42 Q50 42 52 38 L52 36 Q52 32 48 32 L28 32 L28 20 Q28 16 24 16 L18 16 Q14 16 14 20 Z" stroke="#1F3A5F" strokeWidth="2" fill="#C6A15B" fillOpacity="0.2" />
        {/* Blade */}
        <line x1="16" y1="44" x2="52" y2="44" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="46" x2="54" y2="46" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>

},
{
  slug: 'multipurpose-court',
  title: 'Multipurpose Court',
  icon:
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <rect x="8" y="10" width="48" height="44" rx="2" stroke="#1F3A5F" strokeWidth="2.2" fill="none" />
        <line x1="32" y1="10" x2="32" y2="54" stroke="#C6A15B" strokeWidth="1.8" opacity="0.8" />
        <line x1="8" y1="32" x2="56" y2="32" stroke="#C6A15B" strokeWidth="1.8" opacity="0.8" />
        <circle cx="32" cy="32" r="9" stroke="#1F3A5F" strokeWidth="1.8" fill="none" opacity="0.6" />
        <rect x="8" y="18" width="10" height="8" rx="1" stroke="#1F3A5F" strokeWidth="1.2" fill="none" opacity="0.5" />
        <rect x="46" y="18" width="10" height="8" rx="1" stroke="#1F3A5F" strokeWidth="1.2" fill="none" opacity="0.5" />
        <rect x="8" y="38" width="10" height="8" rx="1" stroke="#1F3A5F" strokeWidth="1.2" fill="none" opacity="0.5" />
        <rect x="46" y="38" width="10" height="8" rx="1" stroke="#1F3A5F" strokeWidth="1.2" fill="none" opacity="0.5" />
      </svg>

}];


const productCategories = [
{
  category: 'Artificial Turf',
  products: [
  {
    name: 'Artificial Turf',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c5c8e41-1768566786833.png",
    alt: 'Premium artificial turf surface for sports facilities',
    description: 'Engineered for performance, durability, and all-weather play. Specialized turf for football, cricket, hockey, and multi-sport applications.',
    specs: ['Pile Height: 10–60mm', 'Dtex: 8,000–20,000', 'Backing: 3 Layer PU/Latex', 'Warranty: 5–8 years'],
    tag: 'All-Weather'
  },
  {
    name: 'Hockey Turf',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_164f5c8bb-1786449706486.png",
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
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12da2d09a-1786449708330.png",
    alt: 'Standard 5-layer acrylic sports flooring for outdoor courts',
    description: 'Standard 5-layer acrylic coating system. Excellent grip, consistent ball bounce, UV resistant, and low maintenance.',
    specs: ['System: 5-Layer Acrylic', 'Finish: Anti-slip', 'Weather: All-weather resistant', 'UV Resistant: Yes'],
    tag: 'Outdoor Courts'
  },
  {
    name: 'Cushion Acrylic Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d36d9a10-1786449708101.png",
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
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11becc0f5-1785642771729.png",
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
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png",
    alt: 'PVC sports flooring 4.5mm for indoor courts',
    description: 'Indoor PVC surface providing excellent comfort and grip. Ideal for badminton, basketball, and multi-sport indoor courts.',
    specs: ['Thickness: 4.5mm', 'Grade: Comfort & Grip', 'Usage: Indoor courts', 'Maintenance: Low'],
    tag: 'Indoor'
  },
  {
    name: 'PVC Flooring — 6mm & 7mm',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11becc0f5-1785642771729.png",
    alt: 'PVC sports flooring 6mm and 7mm for high performance indoor courts',
    description: 'High-performance PVC flooring with superior cushioning. 6mm for better cushion; 7mm for maximum performance.',
    specs: ['Thickness: 6mm / 7mm', '6mm: Better Cushion', '7mm: High Performance', 'Usage: Indoor courts'],
    tag: 'High Performance'
  },
  {
    name: 'Maple Wood Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a08be07-1768765571042.png",
    alt: 'Premium maple wood sports flooring for professional courts',
    description: 'Premium maple wood sports flooring with superior shock absorption and professional play standards. Ideal for basketball, badminton, and squash.',
    specs: ['Material: Maple Wood', 'Finish: Premium', 'Shock Absorption: Superior', 'Standards: FIBA, BWF'],
    tag: 'Premium Wood'
  },
  {
    name: 'Teak Wood Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19730cdc6-1786449707952.png",
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
    description: 'Premium EPDM rubber flooring with superior shock absorption, anti-slip safety, and vibrant finishes. Ideal for kids\' play areas, gyms, and jogging tracks.',
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
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_111beca57-1786449707671.png",
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
    image: "https://images.unsplash.com/photo-1709587824637-2126d83d3216",
    alt: 'Full panoramic padel court with glass panels and artificial turf',
    description: 'FIP-certified padel court with full panoramic glass panels. 20m×10m×4m steel structure with 12mm toughened glass and 13mm artificial turf.',
    specs: ['Size: 20m × 10m × 4m', 'Glass: 12mm Toughened (18 panels)', 'Turf: 13mm pile, Dtex 8,800', 'Lighting: 8 LED curved lights'],
    tag: 'FIP Certified'
  },
  {
    name: 'Padel Court — Standard',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18802a80d-1776552673942.png",
    alt: 'Standard padel court with steel structure and artificial turf',
    description: 'Standard FIP-compliant padel court with steel structure, mesh fencing, and premium artificial turf surface.',
    specs: ['Size: 20m × 10m × 4m', 'Structure: 100×50mm columns', 'Mesh: 4mm thickness', 'Turf: 13mm pile'],
    tag: 'FIP Compliant'
  }]

}];


const faqs = [
{ q: 'What certifications do your sports surfaces meet?', a: 'Our surfaces comply with international standards — ITF for tennis, USA Pickleball guidelines, FIBA for basketball, BWF for badminton, World Athletics for athletic tracks, and FIP for padel courts. All surfaces are tested and certified by accredited laboratories.' },
{ q: 'How long does a sports court construction take?', a: 'A standard synthetic turf football pitch (7-a-side) typically takes 4–6 weeks from site preparation to handover. Padel courts take 2–3 weeks. Multi-sport courts and acrylic surfaces typically take 3–5 weeks depending on civil base requirements.' },
{ q: 'Do you handle school and institutional projects?', a: 'Yes. We have extensive experience in school, college, and corporate campus sports infrastructure — including playgrounds, multi-sport courts, athletic tracks, and indoor halls — all designed with safety and performance as priorities.' },
{ q: 'What flooring options are available for indoor courts?', a: 'For indoor courts we offer PP interlocking tiles, acrylic surfaces, PU flooring, PVC flooring (4.5mm, 6mm, 7mm), and premium wooden flooring (Maple and Teak) — each suited to specific sports and performance requirements.' },
{ q: 'Can you retrofit or upgrade existing sports facilities?', a: 'Yes. We specialise in upgrading and retrofitting existing sports facilities — replacing worn surfaces, upgrading lighting, improving drainage, and adding new amenities — with minimal disruption to ongoing use.' }];


const heroSlides = [
{ url: 'https://images.unsplash.com/photo-1731872504522-0ad9da30defc', alt: 'Professional football pitch with green artificial turf under stadium lights' },
{ url: 'https://images.unsplash.com/photo-1659427948877-526b77c74732', alt: 'Outdoor tennis court with blue acrylic surface and white court lines' },
{ url: 'https://img.rocket.new/generatedImages/rocket_gen_img_11a08be07-1768765571042.png', alt: 'Professional basketball court with hardwood flooring and arena lighting' },
{ url: 'https://img.rocket.new/generatedImages/rocket_gen_img_15dfef6f4-1772710925042.png', alt: 'Cricket pitch with well-maintained turf and boundary markings' },
{ url: 'https://images.unsplash.com/photo-1723186051179-69b1dfe2a1f9', alt: 'Athletic running track with red synthetic surface and lane markings' },
{ url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c55d211f-1764688168221.png', alt: 'Indoor badminton court with wooden flooring and overhead lighting' },
{ url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1698ab1c7-1772230105707.png', alt: 'Padel court with glass panels and artificial turf surface at sunset' }];


export default function SportInfraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isFading, setIsFading] = useState(false);

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

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#1F3A5F]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[800ms] ease-in-out"
            style={{ backgroundImage: `url('${heroSlides[currentSlide].url}')`, opacity: isFading ? 0 : 1 }}
            aria-hidden="true" />
          
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroSlides[nextSlide].url}')`, opacity: 1, zIndex: -1 }}
            aria-hidden="true" />
          
          <div className="absolute inset-0 bg-[#1F3A5F]/65" style={{ zIndex: 1 }} />
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, #C6A15B 0%, transparent 50%)', zIndex: 2 }} />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20" style={{ zIndex: 3 }}>
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
              {[['100+', 'Sports Facilities Built'], ['11', 'Sports Disciplines'], ['98%', 'Client Satisfaction'], ['8yr', 'Surface Warranty']]?.map(([num, label]) =>
              <div key={label}>
                  <div className="text-3xl font-bold text-[#1F3A5F]">{num}</div>
                  <div className="text-[#1F3A5F]/70 text-sm mt-1">{label}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sports Grid — Simple Symbol + Name */}
        <section className="py-20 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">What We Build</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Sports Infrastructure</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">Select a sport to explore our products, materials, and specifications.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
              {sports?.map((sport) =>
              <Link
                key={sport.slug}
                href={`/sport-infra/${sport.slug}`}
                className="group bg-white rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 hover:border-[#C6A15B]/40 cursor-pointer">
                
                  <div className="mb-4 p-3 bg-gradient-to-br from-[#F3F3F3] to-[#C6A15B]/10 rounded-xl inline-flex group-hover:scale-110 transition-transform duration-300">
                    {sport.icon}
                  </div>
                  <h3 className="font-bold text-[#1F3A5F] text-base group-hover:text-[#C6A15B] transition-colors leading-snug">{sport.title}</h3>
                </Link>
              )}
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
              ['Trusted Brands', 'Partnered with CCGrass, Bellinturf, Maverick Turf, Pacecourt, KDF, and Unica for materials.']]?.
              map(([title, desc]) =>
              <div key={title as string} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-[#C6A15B] mb-2">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sports Infrastructure Products */}
        <section className="py-24 bg-[#F3F3F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Our Range</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mt-3">Sports Infrastructure Products</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
                Premium sports surface systems and infrastructure products — engineered for performance, certified to international standards, and built for long-term durability.
              </p>
            </div>

            <div className="space-y-16">
              {productCategories.map((cat) =>
              <div key={cat.category}>
                  {/* Category heading */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A15B]/30" />
                    <h3 className="text-lg font-bold text-[#1F3A5F] uppercase tracking-widest whitespace-nowrap px-2">{cat.category}</h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A15B]/30" />
                  </div>

                  <div className={`grid gap-6 ${cat.products.length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' : cat.products.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                    {cat.products.map((product) =>
                  <div key={product.name} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#C6A15B]/30">
                        {/* Product image */}
                        <div className="relative h-52 overflow-hidden bg-[#1F3A5F]/5">
                          <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/50 to-transparent" />
                          <div className="absolute top-3 right-3">
                            <span className="bg-[#C6A15B] text-[#1F3A5F] text-xs font-bold px-2.5 py-1 rounded-full">{product.tag}</span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-bold text-lg leading-snug">{product.name}</h4>
                          </div>
                        </div>
                        {/* Product info */}
                        <div className="p-5">
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                          <div className="space-y-1.5">
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

            {/* Brand partners note */}
            <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <span className="text-[#C6A15B] font-semibold text-sm uppercase tracking-widest">Trusted Partners</span>
                <h3 className="text-xl font-bold text-[#1F3A5F] mt-2">Brands We Work With</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {['CCGrass', 'Bellinturf', 'Maverick Turf', 'Pacecourt', 'KDF Sports Flooring Systems', 'Unica Sports Surface Experts'].map((brand) =>
                <div key={brand} className="bg-[#F3F3F3] rounded-xl px-6 py-3 text-[#1F3A5F] font-semibold text-sm tracking-wide border border-gray-200">
                    {brand}
                  </div>
                )}
              </div>
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
              {faqs?.map((faq, i) =>
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#1F3A5F] hover:bg-[#F3F3F3] transition-colors">
                  
                    {faq?.q}
                    <span className={`text-[#C6A15B] text-xl transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === i && <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq?.a}</div>}
                </div>
              )}
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
    </>);

}