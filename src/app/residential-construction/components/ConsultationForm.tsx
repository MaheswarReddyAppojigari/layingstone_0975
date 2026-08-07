'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ConsultationForm() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', location: '', plotSize: '', requirements: '',
  });
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
    <section id="consultation" className="section-pad bg-secondary" aria-labelledby="form-heading" ref={ref}>
      <div className="max-w-4xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get Started</p>
          <h2 id="form-heading" className="text-section-title font-bold text-foreground">
            Free Consultation
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Share your requirements and our expert will call you within 2 hours.
          </p>
        </div>

        <div className={`bg-card rounded-2xl p-8 lg:p-10 card-shadow transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Our expert will contact you within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rajesh Kumar"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rajesh@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">City / Location *</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Bangalore, Karnataka"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />
              </div>
              <div>
                <label htmlFor="plotSize" className="block text-sm font-semibold text-foreground mb-2">Plot Size (sq.ft)</label>
                <input
                  id="plotSize"
                  name="plotSize"
                  type="text"
                  value={form.plotSize}
                  onChange={handleChange}
                  placeholder="e.g. 2400 sq.ft"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                />
              </div>
              <div>
                <label htmlFor="package" className="block text-sm font-semibold text-foreground mb-2">Preferred Package</label>
                <select
                  id="package"
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                >
                  <option value="">Select a package</option>
                  <option value="essential">Essential — ₹1,799/sq.ft</option>
                  <option value="classic">Classic — ₹2,099/sq.ft</option>
                  <option value="premium">Premium — ₹2,399/sq.ft</option>
                  <option value="luxury">Luxury — Custom Pricing</option>
                  <option value="undecided">Not decided yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="requirements" className="block text-sm font-semibold text-foreground mb-2">Additional Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  value={form.requirements}
                  onChange={handleChange}
                  placeholder="Tell us about your project — number of floors, special requirements, timeline, etc."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  Get Free Estimate <ArrowRightIcon className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  By submitting, you agree to our Privacy Policy. We&apos;ll never share your data.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}