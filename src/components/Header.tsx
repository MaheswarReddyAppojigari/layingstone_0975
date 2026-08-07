'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Residential', href: '/residential-construction' },
      { label: 'Commercial', href: '/#services' },
      {
        label: 'Interiors',
        href: '#',
        children: [
          { label: 'Residential Interiors', href: '/#services' },
          { label: 'Commercial Interiors', href: '/#services' },
        ],
      },
      { label: 'Sport Infra', href: '/#services' },
      { label: 'Landscaping', href: '/#services' },
    ],
  },
  { label: 'Industries', href: '/#industries' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Contact', href: '/contact' },
];

interface NavItemType {
  label: string;
  href: string;
  children?: NavItemType[];
}

function DesktopDropdown({ items, isOpen }: { items: NavItemType[]; isOpen: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-xl border border-border overflow-hidden transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {items.map((item) => (
        <div key={item.label} className="relative group/sub">
          <Link
            href={item.href}
            className="flex items-center justify-between px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors font-medium"
          >
            {item.label}
            {item.children && <ChevronDownIcon className="w-4 h-4 -rotate-90" />}
          </Link>
          {item.children && (
            <div className="absolute left-full top-0 w-52 bg-card rounded-xl shadow-xl border border-border overflow-hidden opacity-0 -translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-200 z-50">
              {item.children.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors font-medium"
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

function MobileNavItem({ item, depth = 0 }: { item: NavItemType; depth?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={`flex-1 py-3 text-sm font-medium text-foreground hover:text-accent transition-colors ${depth > 0 ? 'pl-4' : ''}`}
        >
          {item.label}
        </Link>
        {item.children && (
          <button onClick={() => setOpen(!open)} className="p-2 text-muted-foreground" aria-label="Toggle submenu">
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
      {item.children && open && (
        <div className="border-l-2 border-accent/30 ml-4">
          {item.children.map((child) => (
            <MobileNavItem key={child.label} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <AppLogo size={40} />
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              LayingStone
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
                onMouseLeave={item.children ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled ? 'text-foreground hover:text-accent hover:bg-secondary' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>
                {item.children && (
                  <DesktopDropdown items={item.children} isOpen={activeDropdown === item.label} />
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'
              }`}
            >
              <PhoneIcon className="w-4 h-4" />
              +91 98765 43210
            </a>
            <Link href="/contact" className="btn-primary text-sm px-4 py-2">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-card border-t border-border transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((item) => (
            <MobileNavItem key={item.label} item={item} />
          ))}
          <div className="pt-4 border-t border-border">
            <Link href="/contact" className="btn-primary w-full justify-center text-sm">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}