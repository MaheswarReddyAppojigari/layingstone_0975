'use client';

import React, { useEffect, useRef, useState } from 'react';

const GOLD = '#C6A15B';
const STROKE = 2.2;

const industries = [
  {
    name: 'Residential',
    desc: 'Villas, apartments, individual homes',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Simple house outline */}
        <path d="M8 30L32 10L56 30" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 26V54H50V26" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="25" y="38" width="14" height="16" rx="1" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Commercial',
    desc: 'Offices, retail, shopping centres',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Simple office tower */}
        <rect x="16" y="8" width="32" height="50" rx="1" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="20" x2="48" y2="20" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <line x1="16" y1="32" x2="48" y2="32" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <line x1="16" y1="44" x2="48" y2="44" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <rect x="27" y="46" width="10" height="12" rx="0.5" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Industrial',
    desc: 'Factories, warehouses, plants',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Simple factory silhouette */}
        <rect x="6" y="32" width="52" height="26" rx="1" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 32L22 20V32" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 32L38 20V32" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="14" y="10" width="6" height="22" rx="0.5" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <rect x="28" y="40" width="8" height="18" rx="0.5" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    desc: 'Hospitals, clinics, labs',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Hospital building with cross */}
        <rect x="10" y="18" width="44" height="40" rx="1" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 18V12H42V18" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 28V42M25 35H39" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Education',
    desc: 'Schools, colleges, campuses',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Institutional building */}
        <path d="M8 58V28L32 12L56 28V58" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="28" x2="56" y2="28" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <rect x="26" y="40" width="12" height="18" rx="0.5" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <line x1="32" y1="8" x2="32" y2="12" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="28" y1="8" x2="36" y2="8" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Hospitality',
    desc: 'Hotels, resorts, restaurants',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Hotel building */}
        <rect x="10" y="14" width="44" height="44" rx="1" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14L32 4L54 14" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="24" width="10" height="10" rx="0.5" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <rect x="36" y="24" width="10" height="10" rx="0.5" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <rect x="26" y="44" width="12" height="14" rx="0.5" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Retail',
    desc: 'Shops, showrooms, malls',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Simple storefront */}
        <rect x="8" y="24" width="48" height="34" rx="1" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 24L16 10H48L56 24" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="24" y="36" width="16" height="22" rx="0.5" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <line x1="8" y1="34" x2="56" y2="34" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Sports',
    desc: 'Stadiums, courts, tracks',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Simple stadium arc */}
        <path d="M6 48C6 48 6 28 32 28C58 28 58 48 58 48" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="6" y1="48" x2="58" y2="48" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="6" y1="54" x2="58" y2="54" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <line x1="6" y1="48" x2="6" y2="58" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="58" y1="48" x2="58" y2="58" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="32" y1="28" x2="32" y2="16" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="24" y1="16" x2="40" y2="16" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Government',
    desc: 'Public infrastructure, civic projects',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Classical government building with columns */}
        <path d="M6 24H58" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <path d="M6 58H58" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <path d="M32 6L58 24H6L32 6Z" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="14" y1="24" x2="14" y2="58" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <line x1="26" y1="24" x2="26" y2="58" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <line x1="38" y1="24" x2="38" y2="58" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
        <line x1="50" y1="24" x2="50" y2="58" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Infrastructure',
    desc: 'Roads, bridges, utilities',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {/* Simple bridge */}
        <line x1="4" y1="44" x2="60" y2="44" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <path d="M4 44C4 44 4 24 32 24C60 24 60 44 60 44" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="32" y1="24" x2="32" y2="44" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round" strokeDasharray="3 3"/>
        <line x1="4" y1="44" x2="4" y2="54" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="60" y1="44" x2="60" y2="54" stroke={GOLD} strokeWidth={STROKE} strokeLinecap="round"/>
        <line x1="4" y1="54" x2="60" y2="54" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="industries"
      className="section-pad"
      style={{ backgroundColor: '#D5DED9' }}
      aria-labelledby="industries-label"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto container-pad">
        {/* Section label */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="accent-line mx-auto mb-4" />
          <p
            id="industries-label"
            className="font-semibold text-sm uppercase tracking-widest"
            style={{ color: '#1F3A5F' }}
          >
            Industries We Serve
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-6">
          {industries?.map((industry, i) => (
            <div
              key={industry?.name}
              tabIndex={0}
              role="article"
              aria-label={industry?.name}
              className={`group rounded-2xl p-5 sm:p-6 text-center cursor-default outline-none
                transition-all duration-700
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{
                backgroundColor: 'rgba(255,255,255,0.45)',
                border: '1px solid rgba(198,161,91,0.18)',
                boxShadow: '0 2px 8px rgba(198,161,91,0.08)',
                transitionDelay: `${i * 60}ms`,
              }}
              onMouseEnter={e => {
                const el = e?.currentTarget;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 24px rgba(198,161,91,0.18)';
                el.style.borderColor = 'rgba(198,161,91,0.40)';
              }}
              onMouseLeave={e => {
                const el = e?.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 2px 8px rgba(198,161,91,0.08)';
                el.style.borderColor = 'rgba(198,161,91,0.18)';
              }}
              onFocus={e => {
                const el = e?.currentTarget;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 24px rgba(198,161,91,0.18)';
                el.style.borderColor = 'rgba(198,161,91,0.40)';
                el.style.outline = `2px solid ${GOLD}`;
                el.style.outlineOffset = '2px';
              }}
              onBlur={e => {
                const el = e?.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 2px 8px rgba(198,161,91,0.08)';
                el.style.borderColor = 'rgba(198,161,91,0.18)';
                el.style.outline = 'none';
              }}
            >
              {/* Icon container */}
              <div
                className="mx-auto mb-5 flex items-center justify-center rounded-2xl"
                style={{
                  width: 'clamp(72px, 9vw, 96px)',
                  height: 'clamp(72px, 9vw, 96px)',
                  backgroundColor: 'rgba(198,161,91,0.07)',
                  border: '1px solid rgba(198,161,91,0.16)',
                  boxShadow: '0 1px 4px rgba(198,161,91,0.08)',
                  padding: '16px',
                  transition: 'transform 350ms ease, box-shadow 350ms ease',
                }}
              >
                <div
                  className="w-full h-full group-hover:scale-105"
                  style={{ transition: 'transform 350ms ease' }}
                >
                  {industry?.icon}
                </div>
              </div>

              {/* Industry name */}
              <h3
                className="font-semibold text-sm sm:text-base mb-1"
                style={{ color: GOLD }}
              >
                {industry?.name}
              </h3>

              {/* Description */}
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'rgba(31,58,95,0.55)' }}
              >
                {industry?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}