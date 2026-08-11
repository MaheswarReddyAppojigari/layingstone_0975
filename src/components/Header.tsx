'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Residential', href: '/residential-construction' },
      { label: 'Commercial', href: '/commercial' },
      {
        label: 'Interiors',
        href: '#',
        children: [
          { label: 'Residential Interiors', href: '/residential-interiors' },
          { label: 'Commercial Interiors', href: '/commercial-interiors' },
        ],
      },
      { label: 'Sport Infra', href: '/sport-infra' },
      { label: 'Landscaping', href: '/landscaping' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Contact', href: '/contact' },
];

interface NavItemType {
  label: string;
  href: string;
  children?: NavItemType[];
}

function DesktopDropdown({
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  items: NavItemType[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const subTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubEnter = (label: string) => {
    if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
    setActiveSubMenu(label);
  };

  const handleSubLeave = () => {
    subTimeoutRef.current = setTimeout(() => setActiveSubMenu(null), 100);
  };

  return (
    <div
      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-visible transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children ? handleSubEnter(item.label) : handleSubLeave()}
          onMouseLeave={item.children ? handleSubLeave : undefined}
        >
          <Link
            href={item.href}
            className="flex items-center justify-between px-4 py-3 text-sm text-[#1F3A5F] hover:bg-[#F3F3F3] hover:text-[#D4AF37] transition-colors font-medium"
          >
            {item.label}
            {item.children && <ChevronDownIcon className="w-4 h-4 -rotate-90 flex-shrink-0" />}
          </Link>
          {item.children && (
            <div
              className={`absolute left-full top-0 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 z-[60] ${
                activeSubMenu === item.label
                  ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'
              }`}
              onMouseEnter={() => handleSubEnter(item.label)}
              onMouseLeave={handleSubLeave}
            >
              {item.children.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block px-4 py-3 text-sm text-[#1F3A5F] hover:bg-[#F3F3F3] hover:text-[#D4AF37] transition-colors font-medium"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MobileNavItem({ item, depth = 0, onClose }: { item: NavItemType; depth?: number; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        {item.href !== '#' ? (
          <Link
            href={item.href}
            onClick={onClose}
            className={`flex-1 py-3 text-sm font-medium text-[#1F3A5F] hover:text-[#D4AF37] transition-colors ${depth > 0 ? 'pl-4' : ''}`}
          >
            {item.label}
          </Link>
        ) : (
          <span className={`flex-1 py-3 text-sm font-medium text-[#1F3A5F] ${depth > 0 ? 'pl-4' : ''}`}>
            {item.label}
          </span>
        )}
        {item.children && (
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle submenu"
          >
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
      {item.children && (
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="border-l-2 border-[#D4AF37]/30 ml-4">
            {item.children.map((child) => (
              <MobileNavItem key={child.label} item={child} depth={depth + 1} onClose={onClose} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <AppLogo size={104} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
                onMouseLeave={item.children ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-base font-medium rounded-lg transition-colors text-[#1F3A5F] hover:text-[#D4AF37] hover:bg-[#F3F3F3]"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>
                {item.children && (
                  <DesktopDropdown
                    items={item.children}
                    isOpen={activeDropdown === item.label}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-[#1F3A5F]"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((item) => (
            <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
          ))}
        </div>
      </div>
    </header>
  );
}