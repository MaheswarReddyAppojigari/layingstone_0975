'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: MapPinIcon,
    label: 'Our Office',
    value: 'Workhub,Doddanakundi Industrail Area,Graphite India Main Rd,WhiteField,KEB Colony,Industrail Area,Mahadevapura\nBengaluru,Karnataka 560048',
  },
  {
    icon: PhoneIcon,
    label: 'Call Us',
    value: '+91 81230 69600\n+91 9908087517',
    href: 'tel:+918123069600',
  },
  {
    icon: EnvelopeIcon,
    label: 'Email Us',
    value: 'info@layingstone.in\nsupport@layingstone.in',
    href: 'mailto:info@layingstone.in',
  },
  {
    icon: ClockIcon,
    label: 'Working Hours',
    value: 'Monday – Saturday\n9:00 AM – 7:00 PM IST',
  },
];

export default function ContactMain() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-pad bg-background" aria-labelledby="contact-main-heading" ref={ref}>
      <div className="max-w-7xl mx-auto container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <div className="accent-line mb-4" />
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Contact Information</p>
              <h2 id="contact-main-heading" className="text-2xl font-bold text-foreground mb-4">
                We&apos;re Here to Help
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you&apos;re planning a new home, commercial project, or renovation, our experts are ready to guide you.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl p-5 card-shadow">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground text-sm hover:text-accent transition-colors whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918123069600?text=Hi%20LayingStone%2C%20I%20need%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-xl px-5 py-4 font-semibold text-sm transition-colors shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
              <ArrowRightIcon className="w-4 h-4 ml-auto" />
            </a>

            {/* Social links */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', href: '#', label: 'IN' },
                  { name: 'Facebook', href: '#', label: 'FB' },
                  { name: 'LinkedIn', href: '#', label: 'LI' },
                  { name: 'YouTube', href: '#', label: 'YT' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={`Follow LayingStone on ${s.name}`}
                    className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-bold text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form + Map */}
          <div className={`lg:col-span-3 space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-52 bg-muted relative card-shadow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-10 h-10 text-accent mx-auto mb-2" />
                  <p className="text-foreground font-semibold text-sm">LayingStone Office</p>
                  <p className="text-muted-foreground text-xs">Workhub,Doddanakundi Industrail Area,Graphite India Main Rd,WhiteField,KEB Colony,Industrail Area,Mahadevapura,Bengaluru,Karnataka 560048</p>
                  <a
                    href="https://maps.google.com/?q=MG+Road+Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-accent text-xs font-semibold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              {/* Grid pattern bg */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(31,58,95,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,58,95,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Contact form */}
            <div className="bg-card rounded-2xl p-7 lg:p-8 card-shadow">
              <h3 className="font-bold text-foreground text-xl mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-sm">We&apos;ll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 81230 69600"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-semibold text-foreground mb-2">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="interiors">Interior Design</option>
                      <option value="sport-infra">Sport Infrastructure</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, location, budget, and timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    Send Message <ArrowRightIcon className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your data is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}