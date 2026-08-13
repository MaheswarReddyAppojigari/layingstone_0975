'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Sport Icons ─────────────────────────────────────────────────────────── */
const BadmintonIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <ellipse cx="15" cy="14" rx="8" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="10" y1="9" x2="20" y2="19" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <line x1="10" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <line x1="10" y1="19" x2="20" y2="9" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <line x1="15" y1="9" x2="15" y2="19" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <line x1="15" y1="24" x2="22" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="37" cy="34" r="3" fill="currentColor" opacity="0.7" />
    <line x1="37" y1="31" x2="33" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="37" y1="31" x2="37" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="37" y1="31" x2="41" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="33" y1="22" x2="41" y2="22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>;


const FootballIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <polygon points="24,13 29,20 37,20 31,26 33,34 24,28 15,34 17,26 11,20 19,20" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>;


const TennisIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <ellipse cx="17" cy="16" rx="10" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 16 Q12 10 17 16 Q22 22 26 16" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <line x1="17" y1="28" x2="23" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="38" cy="37" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M33 33 Q36 37 33 41" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M43 33 Q40 37 43 41" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>;


const PickleballIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <ellipse cx="17" cy="16" rx="10" ry="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="13" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="21" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="13" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="21" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="17" cy="16" r="1.5" fill="currentColor" opacity="0.4" />
    <line x1="17" y1="27" x2="23" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="38" cy="37" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="35" cy="34" r="1.2" fill="currentColor" opacity="0.5" />
    <circle cx="41" cy="34" r="1.2" fill="currentColor" opacity="0.5" />
    <circle cx="38" cy="40" r="1.2" fill="currentColor" opacity="0.5" />
  </svg>;


const BasketballIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.2" />
    <path d="M24 6 Q33 15 33 24 Q33 33 24 42" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M24 6 Q15 15 15 24 Q15 33 24 42" stroke="currentColor" strokeWidth="1.2" fill="none" />
  </svg>;


const SquashIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <ellipse cx="15" cy="15" rx="9" ry="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="9" y1="9" x2="21" y2="21" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <line x1="9" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <line x1="9" y1="21" x2="21" y2="9" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <line x1="15" y1="9" x2="15" y2="21" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <line x1="15" y1="26" x2="21" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="37" cy="37" r="6" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
  </svg>;


const AthleticTrackIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <circle cx="30" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="30" y1="11" x2="26" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="26" y1="21" x2="19" y2="29" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="26" y1="21" x2="34" y2="29" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="22" y1="16" x2="34" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="19" y1="29" x2="15" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="34" y1="29" x2="38" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="4" y1="44" x2="44" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="47" x2="44" y2="47" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
  </svg>;


const CricketIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect x="20" y="4" width="8" height="26" rx="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <rect x="22" y="30" width="4" height="12" rx="2" fill="currentColor" opacity="0.5" />
    <circle cx="38" cy="37" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M33 33 Q36 37 33 41" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M43 33 Q40 37 43 41" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>;


const PadelIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <ellipse cx="16" cy="15" rx="10" ry="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="11" r="1.8" fill="currentColor" opacity="0.3" />
    <circle cx="20" cy="11" r="1.8" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="19" r="1.8" fill="currentColor" opacity="0.3" />
    <circle cx="20" cy="19" r="1.8" fill="currentColor" opacity="0.3" />
    <circle cx="16" cy="15" r="1.8" fill="currentColor" opacity="0.3" />
    <line x1="16" y1="26" x2="22" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="38" cy="37" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M33 33 Q36 37 33 41" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M43 33 Q40 37 43 41" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>;


const SkatingIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path d="M10 15 L10 30 Q10 34 14 34 L36 34 Q42 34 44 30 L44 28 Q44 24 40 24 L22 24 L22 15 Q22 11 18 11 L14 11 Q10 11 10 15 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12" />
    <line x1="12" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="39" x2="46" y2="39" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
  </svg>;


const MultipurposeIcon = () =>
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect x="4" y="6" width="40" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.4" />
    <rect x="4" y="12" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
    <rect x="36" y="12" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
    <rect x="4" y="30" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
    <rect x="36" y="30" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
  </svg>;


/* ─── Sports list ─────────────────────────────────────────────────────────── */
const sports = [
{ slug: 'badminton', name: 'Badminton', number: '01', icon: <BadmintonIcon />, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0c41ec9-1772226714692.png", alt: 'Professional indoor badminton court with premium flooring' },
{ slug: 'football', name: 'Football', number: '02', icon: <FootballIcon />, image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c5c8e41-1768566786833.png", alt: 'Professional football pitch with premium artificial turf' },
{ slug: 'tennis', name: 'Tennis', number: '03', icon: <TennisIcon />, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3d836bc-1769685617527.png", alt: 'Professional tennis court with acrylic surface' },
{ slug: 'pickleball', name: 'Pickleball', number: '04', icon: <PickleballIcon />, image: "https://img.rocket.new/generatedImages/rocket_gen_img_10f96bcda-1766493177602.png", alt: 'Pickleball court with premium surface and markings' },
{ slug: 'basketball', name: 'Basketball', number: '05', icon: <BasketballIcon />, image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a08be07-1768765571042.png", alt: 'Professional basketball court with hardwood flooring' },
{ slug: 'squash', name: 'Squash', number: '06', icon: <SquashIcon />, image: "https://img.rocket.new/generatedImages/rocket_gen_img_15418fe93-1767444943692.png", alt: 'Professional squash court with glass back wall' },
{ slug: 'athletic-track', name: 'Athletic Track', number: '07', icon: <AthleticTrackIcon />, image: "https://images.unsplash.com/photo-1719235293312-b55bce7c4fc9", alt: 'Synthetic athletic running track with lane markings' },
{ slug: 'cricket', name: 'Cricket', number: '08', icon: <CricketIcon />, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2ce0049-1766812859760.png", alt: 'Professional cricket ground with well-maintained pitch' },
{ slug: 'padel', name: 'Padel', number: '09', icon: <PadelIcon />, image: "https://images.unsplash.com/photo-1709587823878-8aa03f230d81", alt: 'FIP-certified padel court with panoramic glass panels' },
{ slug: 'skating-rink', name: 'Skating Rink', number: '10', icon: <SkatingIcon />, image: "https://img.rocket.new/generatedImages/rocket_gen_img_13b53f4c6-1786451952514.png", alt: 'Premium indoor skating rink with smooth surface' },
{ slug: 'multipurpose-court', name: 'Multipurpose Court', number: '11', icon: <MultipurposeIcon />, image: "https://images.unsplash.com/photo-1717342295153-4c2cff53b975", alt: 'Multipurpose sports court with multi-sport line markings' }];


/* ─── Hero slides ─────────────────────────────────────────────────────────── */
const heroSlides = [
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd3b8e7a-1785075260278.png", alt: 'Professional football pitch with premium artificial turf under stadium lights' },
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c455d28f-1772800411455.png", alt: 'Professional tennis court with blue acrylic surface and white court lines' },
{ url: "https://images.unsplash.com/photo-1534185372994-55f9e64235c4", alt: 'Synthetic athletic running track with red PU surface and lane markings' },
{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb9994e1-1767703622400.png", alt: 'Indoor badminton court with premium flooring and overhead lighting' },
{ url: "https://images.unsplash.com/photo-1709587823878-8aa03f230d81", alt: 'FIP-certified padel court with panoramic glass panels' }];


/* ─── Execution steps ─────────────────────────────────────────────────────── */
const executionSteps = [
{ num: '01', title: 'Site Survey & Planning', desc: 'Comprehensive site assessment, soil testing, and project planning to establish the foundation for precision construction.' },
{ num: '02', title: 'Design & Engineering', desc: '2D and 3D design layouts, structural engineering, and technical drawings prepared before any ground is broken.' },
{ num: '03', title: 'Civil & Foundation Works', desc: 'Excavation, sub-base preparation, PCC/RCC base works, drainage systems, and surface readiness per IS codes.' },
{ num: '04', title: 'Sports Surface Construction', desc: 'Precision installation of the chosen surface system — artificial turf, acrylic, PVC, wooden, or PP interlocking tiles.' },
{ num: '05', title: 'Lighting & Fencing', desc: 'Professional LED floodlighting, perimeter fencing, netting, and all ancillary infrastructure installations.' },
{ num: '06', title: 'Testing & Quality Check', desc: 'Rigorous material testing, site inspection, quality control, and performance verification before handover.' },
{ num: '07', title: 'Handover & After-Sales Support', desc: 'Complete project handover with documentation, surface warranty, and ongoing maintenance support.' }];


/* ─── Surfaces ────────────────────────────────────────────────────────────── */
const surfaces = [
{
  name: 'Artificial Turf',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16c5c8e41-1768566786833.png',
  alt: 'Premium artificial turf surface for sports facilities',
  desc: 'Engineered for performance, durability, and all-weather play.',
  specs: ['Pile Height: 10–60mm', 'Dtex: 8,000–20,000', 'Backing: 3 Layer PU/Latex', 'Warranty: 5–8 years']
},
{
  name: 'Acrylic Sports Flooring',
  image: "https://images.unsplash.com/photo-1531273753788-0c049778dd13",
  alt: 'Acrylic sports flooring for outdoor courts',
  desc: 'Standard 5-layer and cushion 8-layer systems for outdoor courts.',
  specs: ['Standard: 5-Layer Acrylic', 'Cushion: 8-Layer Acrylic', 'Finish: Anti-slip, UV resistant', 'Brands: Pacecourt, KDF, Unica']
},
{
  name: 'PVC Flooring',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png',
  alt: 'PVC sports flooring for indoor courts',
  desc: 'Indoor PVC surface providing excellent comfort and grip.',
  specs: ['4.5mm: Comfort & Grip', '6mm: Better Cushion', '7mm: High Performance', 'Usage: Indoor courts']
},
{
  name: 'Wooden Flooring',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11a08be07-1768765571042.png',
  alt: 'Premium wooden flooring for professional courts',
  desc: 'Premium maple and teak wood flooring for elite indoor facilities.',
  specs: ['Maple Wood: Premium Finish', 'Teak Wood: High Durability', 'Shock Absorption: Superior', 'Standards: FIBA, BWF']
},
{
  name: 'EPDM / FlexiPlay',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png',
  alt: 'EPDM rubber flooring for play areas and gym',
  desc: 'Premium EPDM rubber flooring with superior shock absorption.',
  specs: ['Thickness: 15–40mm', 'Material: EPDM, SBR Rubber', 'Slip Resistant: Yes', 'Colours: Multi-colour']
},
{
  name: 'PP Interlocking Tiles',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11becc0f5-1785642771729.png',
  alt: 'PP interlocking tiles for multi-sport courts',
  desc: 'FIBA, ITF, and LABOSPORT certified double-layer polypropylene tiles.',
  specs: ['Size: 1×1 ft per tile', 'Thickness: 8–15mm', 'Load Capacity: 20 Ton/Tile', 'Usage Life: 8–10 years']
},
{
  name: 'PU Flooring',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_144dde2b9-1771577703353.png",
  alt: 'PU athletic track surface for running tracks',
  desc: 'Polyurethane surface engineered to World Athletics standards.',
  specs: ['Material: Polyurethane (PU)', 'Standard: World Athletics', 'Weather: All-weather', 'Performance: Consistent']
}];


/* ─── Projects ────────────────────────────────────────────────────────────── */
const projects = [
{ name: 'Cricket Nets, JSS Public School', location: 'Bengaluru', sport: 'Cricket', image: "https://img.rocket.new/generatedImages/rocket_gen_img_19c9e1d4b-1785825366866.png", alt: 'Cricket practice nets at JSS Public School Bengaluru', featured: true },
{ name: 'Kristu Jayanti College', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1506133c0-1786451950381.png", alt: 'Multi-sport court at Kristu Jayanti College Bengaluru', featured: false },
{ name: 'Social Grid', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1940b70fd-1786451952525.png", alt: 'Sports facility at Social Grid Bengaluru', featured: false },
{ name: 'Badminton Court, Whitefield', location: 'Whitefield, Bengaluru', sport: 'Badminton', image: "https://img.rocket.new/generatedImages/rocket_gen_img_14b2b6a71-1786451953136.png", alt: 'Professional badminton court at Whitefield Bengaluru', featured: true },
{ name: '11 Point Club', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e2dc0c1-1786451952526.png", alt: 'Sports court at 11 Point Club Bengaluru', featured: false },
{ name: 'National Hill View School', location: 'RR Nagar, Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_127c98aae-1767205836952.png", alt: 'Sports facility at National Hill View School RR Nagar', featured: false },
{ name: 'National Public School', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b87d7ea1-1786451952539.png", alt: 'Sports court at National Public School Bengaluru', featured: false },
{ name: 'ShriRam Prestige Estates', location: 'Doddalapura, Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba38fa9c-1786451950551.png", alt: 'Multi-sport court at ShriRam Prestige Estates Doddalapura', featured: false },
{ name: 'GoRally', location: 'Kudlu Gate, Bengaluru', sport: 'Tennis', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2e19795-1786451952559.png", alt: 'Tennis court at GoRally Kudlu Gate Bengaluru', featured: false },
{ name: 'GoRally', location: 'Aghara, Bengaluru', sport: 'Tennis', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c55d211f-1764688168221.png', alt: 'Indoor sports facility at GoRally Aghara Bengaluru', featured: false },
{ name: 'Unorthodox Arena', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d051c345-1786451952638.png", alt: 'Multi-sport arena at Unorthodox Arena Bengaluru', featured: false }];


const projectFilters = ['All', 'Badminton', 'Tennis', 'Cricket', 'Multipurpose'];

/* ─── Clients ─────────────────────────────────────────────────────────────── */
const clients = [
'Shriram Properties', 'Sporthood', 'NHVPS Bangalore', 'Noah Sports',
'Light & Prosperity', 'Rabina Sports Academy', '11. Club', 'Coolulu',
'Loco Bear', 'Salarpuria Sattva', 'Unorthodox Sports Arena', 'KIA',
'Bhive Workspace', 'The Art of Living', 'Go Rally', 'Turfpark',
'JSS Public School', 'Kristu Jayanti University', 'Social Grid'];


/* ─── Fade-in hook ────────────────────────────────────────────────────────── */
function useFadeIn(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {if (e.isIntersecting) {setVisible(true);obs.disconnect();}}, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Sport Card ──────────────────────────────────────────────────────────── */
function SportCard({ sport, index }: {sport: typeof sports[0];index: number;}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/sport-infra/${sport.slug}`}
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ aspectRatio: index === 0 || index === 3 ? '1/1.2' : '1/1' }}>
      
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={sport.image}
          alt={sport.alt}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }} />
        
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to top, rgba(15,30,53,0.92) 0%, rgba(15,30,53,0.5) 50%, rgba(15,30,53,0.2) 100%)', opacity: hovered ? 1 : 0.75 }} />
        
      </div>
      {/* Gold line top */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-[#C6A15B] transition-all duration-500"
        style={{ width: hovered ? '100%' : '0%' }} />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <span className="text-[#C6A15B]/60 text-xs font-mono tracking-widest">{sport.number}</span>
          <div
            className="transition-all duration-300"
            style={{ color: hovered ? '#C6A15B' : 'rgba(255,255,255,0.7)', transform: hovered ? 'scale(1.1)' : 'scale(1)' }}>
            
            {sport.icon}
          </div>
        </div>
        <div>
          <h3
            className="font-bold text-white text-lg leading-tight mb-2 transition-transform duration-300"
            style={{ transform: hovered ? 'translateY(-4px)' : 'translateY(0)' }}>
            
            {sport.name}
          </h3>
          <div
            className="flex items-center gap-2 transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(-8px)' }}>
            
            <span className="text-[#C6A15B] text-xs font-semibold tracking-widest uppercase">Explore</span>
            <span className="text-[#C6A15B] text-sm">→</span>
          </div>
        </div>
      </div>
    </Link>);

}

/* ─── Main page ───────────────────────────────────────────────────────────── */
export default function SportInfraPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // Hero slideshow — slow cinematic 5s interval
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTransitioning(false);
      }, 1200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects = activeFilter === 'All' ?
  projects :
  projects.filter((p) => p.sport.toLowerCase() === activeFilter.toLowerCase());

  const introFade = useFadeIn();
  const metricsFade = useFadeIn();
  const sportsFade = useFadeIn();
  const timelineFade = useFadeIn();
  const surfacesFade = useFadeIn();
  const projectsFade = useFadeIn();
  const clientsFade = useFadeIn();

  return (
    <>
      <Header />
      <main>

        {/* ═══════════════════════════════════════════════════════════
             HERO — Cinematic full-bleed with slow crossfade
          ═══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0f1e35]">
          {/* Slides */}
          {heroSlides.map((slide, i) =>
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms] ease-in-out"
            style={{
              backgroundImage: `url('${slide.url}')`,
              opacity: i === currentSlide ? transitioning ? 0 : 1 : 0
            }}
            aria-hidden="true" />

          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e35] via-[#0f1e35]/60 to-[#0f1e35]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e35]/70 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-28 pt-40 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#C6A15B]" />
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Sports Infrastructure</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
                ENGINEERING<br />
                <span className="text-[#C6A15B]">GROUNDS</span><br />
                OF GREATNESS.
              </h1>
              <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                Complete turnkey sports infrastructure solutions engineered for performance, durability and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-[#C6A15B] text-[#0f1e35] font-bold px-8 py-4 hover:bg-[#b8924f] transition-all duration-300 text-sm tracking-widest uppercase">
                  Build Your Sports Facility
                  <span>→</span>
                </Link>
                <a href="#capabilities" className="inline-flex items-center gap-3 border border-white/25 text-white font-semibold px-8 py-4 hover:border-[#C6A15B]/60 hover:text-[#C6A15B] transition-all duration-300 text-sm tracking-widest uppercase">
                  Explore Our Capabilities
                </a>
              </div>
            </div>
          </div>

          {/* Bottom info strip */}
          <div className="relative z-10 border-t border-white/10 bg-[#0f1e35]/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                {['Turnkey Execution', 'Sport-Specific Engineering', 'Premium Surfaces', 'Complete Project Delivery'].map((item) =>
                <div key={item} className="py-5 px-6 first:pl-0">
                    <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">{item}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             BRAND STATEMENT — Editorial intro
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-28">
          <div
            ref={introFade.ref}
            className="max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: introFade.visible ? 1 : 0, transform: introFade.visible ? 'none' : 'translateY(40px)' }}>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[#C6A15B] text-xs font-mono tracking-[0.3em] uppercase">01</span>
                  <div className="w-12 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.2em] uppercase">Sports Infrastructure</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#1F3A5F] leading-[1.0] mb-8">
                  Built from<br />the ground up.<br />
                  <span className="text-[#C6A15B]">Designed for</span><br />performance.
                </h2>
                <div className="w-16 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  LayingStone Sports Infra is a specialized sports infrastructure company focused on designing, constructing, and revitalizing high-quality sports facilities. Our work is defined by engineering expertise, premium materials, and precise execution.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  From the first site survey to final handover, we deliver complete turnkey sports infrastructure — serving schools, universities, residential communities, corporate campuses, real estate developers, and professional clubs across Bengaluru and beyond.
                </p>
              </div>
              <div className="relative">
                <div className="relative h-[520px] overflow-hidden">
                  <Image
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_168d5cc9d-1769008856305.png"
                    alt="Wide panoramic view of a professional sports stadium with seating and floodlights"
                    fill
                    className="object-cover"
                    priority />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/30 to-transparent" />
                </div>
                {/* Floating credential */}
                <div className="absolute -bottom-6 -left-6 bg-[#1F3A5F] p-6 max-w-xs">
                  <div className="text-[#C6A15B] text-xs font-semibold tracking-widest uppercase mb-2">ISO Certified</div>
                  <div className="text-white text-sm font-medium leading-relaxed">ISO 9001 · ISO 14001 · ISO 45001 · GST Registered · MSME/Udyam Registered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             CREDIBILITY METRICS — Qualitative editorial
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#F3F3F3] py-24">
          <div
            ref={metricsFade.ref}
            className="max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: metricsFade.visible ? 1 : 0, transform: metricsFade.visible ? 'none' : 'translateY(40px)' }}>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C6A15B]/20">
              {[
              { label: 'Turnkey Execution', desc: 'End-to-end project delivery from site survey to final handover — single point of responsibility.' },
              { label: 'Sport-Specific Engineering', desc: 'Every facility is engineered around the precise demands of the sport it serves.' },
              { label: 'Premium Materials', desc: 'Surfaces from globally trusted brands — CCGrass, Bellinturf, Pacecourt, KDF, and Unica.' },
              { label: 'After-Sales Support', desc: 'Surface warranties up to 8 years and comprehensive maintenance programmes post-handover.' }].
              map((item) =>
              <div key={item.label} className="bg-white p-10 group hover:bg-[#1F3A5F] transition-colors duration-500">
                  <div className="w-8 h-0.5 bg-[#C6A15B] mb-6 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-bold text-[#1F3A5F] group-hover:text-[#C6A15B] text-lg mb-4 transition-colors duration-300 leading-tight">{item.label}</h3>
                  <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">{item.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             SPORTS WE BUILD — Premium editorial grid
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#0f1e35] py-28" id="sports">
          <div
            ref={sportsFade.ref}
            className="max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: sportsFade.visible ? 1 : 0, transform: sportsFade.visible ? 'none' : 'translateY(40px)' }}>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">What We Build</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  SPORTS<br />WE BUILD
                </h2>
              </div>
              <p className="text-white/50 text-base leading-relaxed max-w-sm md:text-right">
                From high-performance courts to complete sports facilities, every ground is engineered around the game it serves.
              </p>
            </div>

            {/* Editorial grid — varied sizes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {sports.map((sport, i) =>
              <div
                key={sport.slug}
                className={
                i === 0 ? 'col-span-2 row-span-2' :
                i === 4 ? 'col-span-2' :
                i === 9 ? 'col-span-2' : ''
                }>
                
                  <SportCard sport={sport} index={i} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             FULL-BLEED EDITORIAL IMAGE
          ═══════════════════════════════════════════════════════════ */}
        <section className="relative h-[55vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1679139599708-d6ec9d3ce223"
            alt="Close-up of athletic track surface texture with lane markings and starting blocks"
            fill
            className="object-cover" />
          
          <div className="absolute inset-0 bg-[#1F3A5F]/55" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-[#C6A15B] text-xs font-semibold tracking-[0.3em] uppercase mb-6">Our Approach</p>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.95]">
                Every Sport.<br />Every Surface.<br />Expertly Engineered.
              </h2>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             ENGINEERED FROM THE GROUND UP — Timeline
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-28" id="capabilities">
          <div
            ref={timelineFade.ref}
            className="max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: timelineFade.visible ? 1 : 0, transform: timelineFade.visible ? 'none' : 'translateY(40px)' }}>
            
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Our Process</span>
                </div>
                <h2 className="text-5xl font-bold text-[#1F3A5F] leading-tight mb-6">
                  ENGINEERED<br />FROM THE<br />GROUND UP.
                </h2>
                <div className="w-16 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-gray-500 leading-relaxed text-lg">
                  Every LayingStone project follows a rigorous seven-stage execution process — from the first site survey to final handover and beyond.
                </p>
              </div>
              <div className="space-y-0">
                {executionSteps.map((step, i) =>
                <div key={step.num} className="group flex gap-6 py-6 border-b border-gray-100 last:border-0 hover:bg-[#F3F3F3] -mx-4 px-4 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12">
                      <span className="text-[#C6A15B] text-2xl font-bold font-mono leading-none">{step.num}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1F3A5F] mb-2 group-hover:text-[#C6A15B] transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#C6A15B] text-lg">→</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             OUR CAPABILITIES — Split layout
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#F3F3F3] py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              {/* Image */}
              <div className="relative min-h-[500px] overflow-hidden">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1b526241a-1766766522105.png"
                  alt="Premium indoor sports arena with professional court markings and overhead lighting"
                  fill
                  className="object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F3F3F3]/20" />
              </div>
              {/* Content */}
              <div className="bg-[#1F3A5F] p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Our Capabilities</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  MORE THAN<br />A PLAYING<br />SURFACE.
                </h2>
                <p className="text-white/60 leading-relaxed mb-10">
                  LayingStone handles the complete infrastructure journey — from civil foundation to the final line marking. Every element is engineered, sourced, and installed by our team.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                  {[
                  ['Civil Works', 'Sports Surfaces', 'Artificial Turf', 'Acrylic Flooring'],
                  ['PVC Flooring', 'Wooden Flooring', 'PP Interlocking Tiles', 'EPDM Flooring'],
                  ['Fencing', 'Lighting', 'Netting', 'Bleachers'],
                  ['Pole Padding', '2D / 3D Layouts', 'After-Sales Support', 'Maintenance']].
                  map((col, ci) =>
                  <div key={ci} className="space-y-0">
                      {col.map((item) =>
                    <div key={item} className="flex items-center gap-3 py-2.5 border-b border-white/10 last:border-0">
                          <div className="w-1 h-1 rounded-full bg-[#C6A15B] flex-shrink-0" />
                          <span className="text-white/70 text-sm">{item}</span>
                        </div>
                    )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             SURFACES ENGINEERED FOR PERFORMANCE
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-28">
          <div
            ref={surfacesFade.ref}
            className="max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: surfacesFade.visible ? 1 : 0, transform: surfacesFade.visible ? 'none' : 'translateY(40px)' }}>
            
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#C6A15B]" />
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Surface Systems</span>
                <div className="w-8 h-px bg-[#C6A15B]" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#1F3A5F] leading-tight">
                SURFACES ENGINEERED<br />FOR PERFORMANCE
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {surfaces.map((surface, i) =>
              <div
                key={surface.name}
                className={`group relative overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ minHeight: i === 0 ? '480px' : '280px' }}>
                
                  <Image
                  src={surface.image}
                  alt={surface.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e35]/95 via-[#0f1e35]/40 to-transparent" />
                  {/* Top gold line on hover */}
                  <div className="absolute top-0 left-0 h-0.5 bg-[#C6A15B] w-0 group-hover:w-full transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-white text-lg mb-2">{surface.name}</h3>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed">{surface.desc}</p>
                    {/* Specs on hover */}
                    <div
                    className="space-y-1 overflow-hidden transition-all duration-500"
                    style={{ maxHeight: '0px' }}>
                    
                      {surface.specs.map((s) =>
                    <div key={s} className="text-[#C6A15B] text-xs font-mono">{s}</div>
                    )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {surface.specs.slice(0, i === 0 ? 4 : 2).map((s) =>
                    <span key={s} className="text-[#C6A15B]/70 text-xs font-mono">{s}</span>
                    )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             PADEL — Premium feature section
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#0f1e35] py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Featured Sport</span>
                </div>
                <h2 className="text-6xl md:text-7xl font-bold text-white leading-[0.95] mb-4">
                  PADEL<br />COURTS
                </h2>
                <p className="text-[#C6A15B] text-xl font-medium mb-8">
                  Premium courts. International standards. Built to last.
                </p>
                <div className="w-16 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-white/60 leading-relaxed mb-10">
                  FIP-certified padel courts engineered with precision steel structures, toughened glass panels, and premium artificial turf surfaces. Available in three models to suit every environment and budget.
                </p>
                {/* Specs grid */}
                <div className="grid grid-cols-3 gap-px bg-[#C6A15B]/20 mb-10">
                  {[
                  { label: 'Length', value: '20m' },
                  { label: 'Width', value: '10m' },
                  { label: 'Height', value: '4m' },
                  { label: 'Glass', value: '12mm Toughened' },
                  { label: 'Turf Pile', value: '13mm' },
                  { label: 'Lighting', value: '8 LED Units' }].
                  map((spec) =>
                  <div key={spec.label} className="bg-[#1F3A5F]/50 p-4">
                      <div className="text-[#C6A15B] text-xs font-mono mb-1">{spec.label}</div>
                      <div className="text-white font-bold text-sm">{spec.value}</div>
                    </div>
                  )}
                </div>
                {/* Models */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {['Full Panoramic', 'Panoramic', 'Standard'].map((model) =>
                  <span key={model} className="border border-[#C6A15B]/40 text-[#C6A15B] text-xs font-semibold px-4 py-2 tracking-widest uppercase">{model}</span>
                  )}
                </div>
                <Link href="/sport-infra/padel" className="inline-flex items-center gap-3 bg-[#C6A15B] text-[#0f1e35] font-bold px-8 py-4 hover:bg-[#b8924f] transition-all duration-300 text-sm tracking-widest uppercase">
                  Explore Padel Courts
                  <span>→</span>
                </Link>
              </div>
              <div className="relative">
                <div className="relative h-[600px] overflow-hidden">
                  <Image
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_18802a80d-1776552673942.png"
                    alt="FIP-certified padel court with full panoramic glass panels and artificial turf surface"
                    fill
                    className="object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0f1e35]/30" />
                </div>
                {/* Gold border accent */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#C6A15B]/30 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             PROJECTS — Premium portfolio
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#F3F3F3] py-28">
          <div
            ref={projectsFade.ref}
            className="max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: projectsFade.visible ? 1 : 0, transform: projectsFade.visible ? 'none' : 'translateY(40px)' }}>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Our Work</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#1F3A5F] leading-tight">
                  PROJECTS
                </h2>
                <p className="text-[#C6A15B] text-xl font-medium mt-3">From Ground to Greatness.</p>
              </div>
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {projectFilters.map((f) =>
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === f ?
                  'bg-[#1F3A5F] text-white' :
                  'border border-[#1F3A5F]/20 text-[#1F3A5F] hover:border-[#C6A15B] hover:text-[#C6A15B]'}`
                  }>
                  
                    {f}
                  </button>
                )}
              </div>
            </div>

            {/* Portfolio grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredProjects.map((project, i) =>
              <div
                key={`${project.name}-${i}`}
                className={`group relative overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                style={{ minHeight: i === 0 ? '480px' : '240px' }}>
                
                  <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e35]/90 via-[#0f1e35]/20 to-transparent" />
                  <div className="absolute top-0 left-0 h-0.5 bg-[#C6A15B] w-0 group-hover:w-full transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[#C6A15B] text-xs font-semibold tracking-widest uppercase mb-2 block">{project.sport}</span>
                    <h3 className="font-bold text-white text-base leading-snug">{project.name}</h3>
                    <p className="text-white/50 text-xs mt-1">{project.location}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             QUALITY & STANDARDS
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Standards</span>
                </div>
                <h2 className="text-5xl font-bold text-[#1F3A5F] leading-tight mb-8">
                  QUALITY.<br />STANDARDS.<br />PRECISION.
                </h2>
                <div className="w-16 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-gray-500 leading-relaxed text-lg mb-6">
                  Our courts and surfaces are designed to comply with the relevant international standards for each sport. We distinguish clearly between design compliance and formal certification.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Where our surfaces are tested and certified by accredited laboratories, we state that clearly. Where our construction follows a standard's guidelines, we present that accurately.
                </p>
              </div>
              <div className="space-y-0">
                {[
                { body: 'ITF', full: 'International Tennis Federation', note: 'Tennis court surfaces designed to ITF standards' },
                { body: 'USA Pickleball', full: 'USA Pickleball Association', note: 'Pickleball courts built to USA Pickleball guidelines' },
                { body: 'FIBA', full: 'Fédération Internationale de Basketball', note: 'Basketball courts designed to FIBA standards; PP tiles FIBA-certified' },
                { body: 'BWF', full: 'Badminton World Federation', note: 'Badminton courts designed to BWF standards' },
                { body: 'FIP', full: 'International Padel Federation', note: 'Padel courts built to FIP specifications' },
                { body: 'World Athletics', full: 'World Athletics', note: 'Athletic tracks designed to World Athletics standards' },
                { body: 'LABOSPORT', full: 'LABOSPORT Certified', note: 'PP Interlocking Tiles independently certified by LABOSPORT' },
                { body: 'IS Codes', full: 'Indian Standards', note: 'All civil works follow IS 456, IS 10262, IS 2720, IRC SP:20, IS 1892' }].
                map((s) =>
                <div key={s.body} className="flex gap-6 py-5 border-b border-gray-100 last:border-0 group hover:bg-[#F3F3F3] -mx-4 px-4 transition-colors duration-200">
                    <div className="flex-shrink-0 w-28">
                      <span className="font-bold text-[#1F3A5F] text-sm group-hover:text-[#C6A15B] transition-colors duration-200">{s.body}</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">{s.full}</div>
                      <div className="text-gray-600 text-sm">{s.note}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             CLIENTS / TRUSTED BY
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#F3F3F3] py-24">
          <div
            ref={clientsFade.ref}
            className="max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000"
            style={{ opacity: clientsFade.visible ? 1 : 0, transform: clientsFade.visible ? 'none' : 'translateY(40px)' }}>
            
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#C6A15B]" />
                <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Trusted By</span>
                <div className="w-8 h-px bg-[#C6A15B]" />
              </div>
              <h2 className="text-4xl font-bold text-[#1F3A5F]">Our Valued Clients</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map((client) =>
              <div
                key={client}
                className="bg-white border border-gray-200 px-6 py-3 text-[#1F3A5F] font-semibold text-sm tracking-wide hover:border-[#C6A15B]/50 hover:bg-[#C6A15B]/5 transition-all duration-300">
                
                  {client}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             MAINTENANCE & AFTER-SALES
          ═══════════════════════════════════════════════════════════ */}
        <section className="bg-[#1F3A5F] py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px bg-[#C6A15B]" />
                  <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">After-Sales</span>
                </div>
                <h2 className="text-5xl font-bold text-white leading-tight mb-8">
                  BUILT TO LAST.<br />
                  <span className="text-[#C6A15B]">SUPPORTED</span><br />
                  BEYOND HANDOVER.
                </h2>
                <div className="w-16 h-0.5 bg-[#C6A15B] mb-8" />
                <p className="text-white/60 leading-relaxed text-lg">
                  Our relationship with clients doesn't end at handover. LayingStone provides comprehensive after-sales support and maintenance services to ensure every facility continues to perform at its best.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[#C6A15B]/20">
                {[
                { title: 'Surface Maintenance', desc: 'Regular inspection and maintenance of all surface systems to preserve performance and appearance.' },
                { title: 'Surface Care', desc: 'Professional cleaning, brushing, and infill replenishment for artificial turf and acrylic surfaces.' },
                { title: 'Fencing Replacement', desc: 'Repair and replacement of perimeter fencing, netting, and structural elements.' },
                { title: 'Lighting Maintenance', desc: 'LED floodlight servicing, replacement, and electrical system maintenance.' },
                { title: 'Net Replacement', desc: 'Replacement of sports nets, net posts, and related accessories.' },
                { title: 'Resurfacing', desc: 'Complete resurfacing and renovation of existing sports surfaces to restore performance.' },
                { title: 'Site Inspection', desc: 'Periodic site inspections and condition reports to identify maintenance requirements early.' },
                { title: 'After-Sales Support', desc: 'Dedicated after-sales team available for queries, warranty claims, and emergency repairs.' }].
                map((item) =>
                <div key={item.title} className="bg-[#1a3356] p-6 hover:bg-[#243f6a] transition-colors duration-300">
                    <div className="w-6 h-0.5 bg-[#C6A15B] mb-4" />
                    <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
             FINAL CTA
          ═══════════════════════════════════════════════════════════ */}
        <section className="relative py-32 overflow-hidden bg-[#0f1e35]">
          <Image
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1bb3ec147-1768765571036.png"
            alt="Professional sports facility with premium artificial turf and stadium lighting"
            fill
            className="object-cover opacity-30" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e35]/95 via-[#0f1e35]/80 to-[#0f1e35]/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#C6A15B]" />
              <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.25em] uppercase">Let's Build Together</span>
              <div className="w-8 h-px bg-[#C6A15B]" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-6">
              READY TO BUILD<br />YOUR NEXT<br />
              <span className="text-[#C6A15B]">SPORTS FACILITY?</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mb-8" />
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              From the first survey to final handover, LayingStone delivers complete sports infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#C6A15B] text-[#0f1e35] font-bold px-10 py-5 hover:bg-[#b8924f] transition-all duration-300 text-sm tracking-widest uppercase">
                Start Your Project
                <span>→</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 border border-white/25 text-white font-semibold px-10 py-5 hover:border-[#C6A15B]/60 hover:text-[#C6A15B] transition-all duration-300 text-sm tracking-widest uppercase">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>);

}