'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { residentialFaqs } from '@/data/faqs';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: residentialFaqs?.map(faq => ({
    '@type': 'Question',
    name: faq?.question,
    acceptedAnswer: { '@type': 'Answer', text: faq?.answer },
  })),
};

export default function ResidentialFaq() {
  const [open, setOpen] = useState<string | null>('1');
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="section-pad bg-background" aria-labelledby="res-faq-heading" ref={ref}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto container-pad">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="accent-line mx-auto mb-4" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 id="res-faq-heading" className="text-section-title font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {residentialFaqs?.map((faq, i) => (
            <div
              key={faq?.id}
              className={`bg-card rounded-xl card-shadow overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpen(open === faq?.id ? null : faq?.id)}
                className="w-full flex items-start justify-between px-6 py-5 text-left"
                aria-expanded={open === faq?.id}
              >
                <span className="font-semibold text-foreground text-sm pr-4 leading-relaxed">{faq?.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === faq?.id ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === faq?.id ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                <p className="px-6 text-muted-foreground text-sm leading-relaxed">{faq?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}