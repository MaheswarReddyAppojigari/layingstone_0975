import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = {
  services: [
    { label: 'Residential Construction', href: '/residential-construction' },
    { label: 'Commercial Construction', href: '/#services' },
    { label: 'Residential Interiors', href: '/#services' },
    { label: 'Commercial Interiors', href: '/#services' },
    { label: 'Sport Infrastructure', href: '/#services' },
    { label: 'Landscaping', href: '/#services' },
  ],
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Careers', href: '/#careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <AppLogo size={40} />
              <span className="font-bold text-xl tracking-tight text-white">LayingStone</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium construction company delivering residential, commercial, and infrastructure projects across India with transparency and excellence.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'linkedin', 'youtube']?.map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`Follow on ${social}`}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                >
                  <span className="text-xs font-bold uppercase">{social?.[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks?.services?.map((link) => (
                <li key={link?.label}>
                  <Link href={link?.href} className="text-white/60 hover:text-accent text-sm transition-colors">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  <Link href={link?.href} className="text-white/60 hover:text-accent text-sm transition-colors">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2">
                <span className="text-accent mt-0.5">📍</span>
                <span>42 Prestige Tower, MG Road, Bangalore 560001</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex gap-2 hover:text-accent transition-colors">
                  <span className="text-accent">📞</span>
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@layingstone.in" className="flex gap-2 hover:text-accent transition-colors">
                  <span className="text-accent">✉️</span>
                  <span>hello@layingstone.in</span>
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">🕐</span>
                <span>Mon–Sat: 9AM – 7PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-sm text-white/40">
          <p>© 2026 LayingStone. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks?.legal?.map((link) => (
              <Link key={link?.label} href={link?.href} className="hover:text-accent transition-colors">
                {link?.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}