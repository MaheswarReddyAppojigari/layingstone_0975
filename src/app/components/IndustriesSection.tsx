'use client';

import React, { useEffect, useRef, useState } from 'react';

const industries = [
  {
    name: 'Residential',
    desc: 'Villas, apartments, individual homes',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M8 28L32 8L56 28" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 24V54H50V24" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="24" y="36" width="16" height="18" rx="1" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="30" width="10" height="10" rx="1" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="36" y="30" width="10" height="10" rx="1" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 8V4H36V12" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Commercial',
    desc: 'Offices, retail, shopping centres',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <rect x="12" y="10" width="40" height="48" rx="1" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="22" x2="52" y2="22" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="12" y1="34" x2="52" y2="34" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="12" y1="46" x2="52" y2="46" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="18" y="14" width="8" height="5" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="30" y="14" width="8" height="5" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="18" y="26" width="8" height="5" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="30" y="26" width="8" height="5" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="18" y="38" width="8" height="5" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="30" y="38" width="8" height="5" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="26" y="48" width="12" height="10" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="48" x2="32" y2="58" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Hospitality',
    desc: 'Hotels, resorts, restaurants',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M10 58V20L32 6L54 20V58" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 20H54" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="22" y="30" width="20" height="14" rx="1" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="32" y1="30" x2="32" y2="44" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="14" y="28" width="6" height="8" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="44" y="28" width="6" height="8" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="14" y="42" width="6" height="8" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="44" y="42" width="6" height="8" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M28 6V2H36V6" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    desc: 'Hospitals, clinics, labs',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <rect x="8" y="16" width="48" height="42" rx="1.5" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16V10H44V16" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 26V42M24 34H40" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="14" y="46" width="8" height="12" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="42" y="46" width="8" height="12" rx="0.5" stroke="#1F3A5F" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="8" y1="24" x2="56" y2="24" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Education',
    desc: 'Schools, colleges, campuses',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M6 58V26L32 10L58 26V58" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 26H58" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="14" y="32" width="10" height="10" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="40" y="32" width="10" height="10" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="26" y="42" width="12" height="16" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="42" x2="32" y2="58" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M26 10V6H38V10" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="32" y1="2" x2="32" y2="6" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="2" x2="36" y2="2" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Industrial',
    desc: 'Factories, warehouses, plants',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <rect x="6" y="28" width="52" height="30" rx="1" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 28L20 16V28" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 28L34 16V28" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 28L48 16V28" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="12" y="8" width="6" height="20" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="26" y="8" width="6" height="20" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="40" y="8" width="6" height="20" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="14" y="40" width="10" height="18" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="40" y="40" width="10" height="18" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="28" y="36" width="8" height="8" rx="4" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Sports',
    desc: 'Stadiums, courts, tracks',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M4 44C4 44 12 36 32 36C52 36 60 44 60 44V58H4V44Z" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 44H60" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 36V20" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 20H44" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 20V14M44 20V14" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 14H48" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 44V58M52 44V58" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 50H60" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Government',
    desc: 'Public infrastructure, civic projects',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M6 24H58" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M6 58H58" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 6L58 24H6L32 6Z" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10" y="30" width="8" height="28" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="22" y="30" width="8" height="28" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="34" y="30" width="8" height="28" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <rect x="46" y="30" width="8" height="28" rx="0.5" stroke="#1F3A5F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="14" r="3" stroke="#1F3A5F" strokeWidth="2"/>
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
        {/* Section label — no heading text per spec */}
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 lg:gap-6">
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
                backgroundColor: '#EEF2F0',
                border: '1px solid rgba(31,58,95,0.12)',
                boxShadow: '0 2px 8px rgba(31,58,95,0.06)',
                transitionDelay: `${i * 60}ms`,
              }}
              onMouseEnter={e => {
                const el = e?.currentTarget;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 24px rgba(31,58,95,0.14)';
                el.style.borderColor = 'rgba(31,58,95,0.30)';
              }}
              onMouseLeave={e => {
                const el = e?.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 2px 8px rgba(31,58,95,0.06)';
                el.style.borderColor = 'rgba(31,58,95,0.12)';
              }}
              onFocus={e => {
                const el = e?.currentTarget;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 24px rgba(31,58,95,0.14)';
                el.style.borderColor = 'rgba(31,58,95,0.30)';
                el.style.outline = '2px solid #1F3A5F';
                el.style.outlineOffset = '2px';
              }}
              onBlur={e => {
                const el = e?.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 2px 8px rgba(31,58,95,0.06)';
                el.style.borderColor = 'rgba(31,58,95,0.12)';
                el.style.outline = 'none';
              }}
            >
              {/* Icon container */}
              <div
                className="mx-auto mb-5 flex items-center justify-center rounded-2xl transition-all duration-350"
                style={{
                  width: 'clamp(72px, 10vw, 100px)',
                  height: 'clamp(72px, 10vw, 100px)',
                  backgroundColor: 'rgba(31,58,95,0.06)',
                  border: '1px solid rgba(31,58,95,0.10)',
                  boxShadow: '0 1px 4px rgba(31,58,95,0.06)',
                  padding: '18px',
                  transition: 'transform 350ms ease, box-shadow 350ms ease',
                }}
              >
                <div
                  className="w-full h-full transition-transform duration-350 group-hover:scale-105"
                  style={{ transition: 'transform 350ms ease' }}
                >
                  {industry?.icon}
                </div>
              </div>

              {/* Industry name */}
              <h3
                className="font-semibold text-sm sm:text-base mb-1 transition-all duration-350 group-hover:font-bold"
                style={{ color: '#1F3A5F' }}
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