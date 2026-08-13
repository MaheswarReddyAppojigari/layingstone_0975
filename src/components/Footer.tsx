import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = {
  services: [
    { label: 'Residential Construction', href: '/residential-construction' },
    { label: 'Commercial Construction', href: '/commercial' },
    { label: 'Residential Interiors', href: '/residential-interiors' },
    { label: 'Commercial Interiors', href: '/commercial-interiors' },
    { label: 'Sport Infrastructure', href: '/sport-infra' },
    { label: 'Landscaping', href: '/landscaping' },
  ],
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Industries', href: '/industries' },
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
    <footer className="bg-[#1F3A5F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <AppLogo size={44} />
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
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1F3A5F] flex items-center justify-center transition-colors"
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
                  <Link href={link?.href} className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors">
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
                  <Link href={link?.href} className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors">
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
                <span className="text-[#D4AF37] mt-0.5">📍</span>
                <span>Workhub,Doddanakundi Industrail Area,Graphite India Main Rd,WhiteField,KEB Colony,Industrail Area,Mahadevapura,Bengaluru,Karnataka 560048</span>
              </li>
              <li>
                <a href="tel:+918123069600" className="flex gap-2 hover:text-[#D4AF37] transition-colors">
                  <span className="text-[#D4AF37]">📞</span>
                  <span>+91 81230 69600</span>
                </a>
              </li>
              <li>
                <a href="tel:+919908087517" className="flex gap-2 hover:text-[#D4AF37] transition-colors">
                  <span className="text-[#D4AF37]">📞</span>
                  <span>+91 99080 87517</span>
                </a>
              </li>
              <li>
                <a href="tel:+919701918951" className="flex gap-2 hover:text-[#D4AF37] transition-colors">
                  <span className="text-[#D4AF37]">📞</span>
                  <span>+91 97019 18951 </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@layingstone.in" className="flex gap-2 hover:text-[#D4AF37] transition-colors">
                  <span className="text-[#D4AF37]">✉️</span>
                  <span>info@layingstone.in</span>
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37]">🕐</span>
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
              <Link key={link?.label} href={link?.href} className="hover:text-[#D4AF37] transition-colors">
                {link?.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}