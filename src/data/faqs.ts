export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const homeFaqs: FAQ[] = [
  {
    id: '1',
    question: 'What areas do you serve across India?',
    answer: 'LayingStone currently operates across major cities including Bangalore, Chennai, Hyderabad, Pune, Mumbai, Delhi NCR, and Coimbatore. We are rapidly expanding to Tier-2 cities as well.',
    category: 'general',
  },
  {
    id: '2',
    question: 'How long does a typical residential construction take?',
    answer: 'A standard individual house (1,500–2,500 sq.ft) typically takes 10–14 months. Larger villas may take 14–20 months depending on complexity and customizations.',
    category: 'timeline',
  },
  {
    id: '3',
    question: 'Do you provide a structural warranty?',
    answer: 'Yes. Our packages come with structural warranties ranging from 5 years (Essential) to Lifetime (Luxury). All warranties are backed by written agreements.',
    category: 'warranty',
  },
  {
    id: '4',
    question: 'Are there any hidden charges?',
    answer: 'Absolutely not. LayingStone operates on complete transparency. Your package price covers everything listed in the inclusions. Any exclusions (like government fees) are clearly communicated upfront.',
    category: 'pricing',
  },
  {
    id: '5',
    question: 'Can I visit an ongoing construction site?',
    answer: 'Yes, we encourage client site visits. You will also receive daily photo/video updates through our project management app and have a dedicated project manager as your single point of contact.',
    category: 'process',
  },
];

export const residentialFaqs: FAQ[] = [
  {
    id: '1',
    question: 'How is pricing calculated?',
    answer: 'Pricing is per square foot of built-up area. The rate includes all materials, labor, project management, and quality checks as specified in your chosen package. GST is charged additionally at 18%.',
    category: 'pricing',
  },
  {
    id: '2',
    question: 'What is included in the package price?',
    answer: 'Each package includes: architectural drawings, structural design, all civil work, MEP (mechanical, electrical, plumbing), flooring, painting, doors, windows, and project management. Specific brands vary by package tier.',
    category: 'inclusions',
  },
  {
    id: '3',
    question: 'How long does construction take?',
    answer: 'For a 2,000 sq.ft house: Essential/Classic takes 10–12 months, Premium takes 12–14 months, and Luxury is custom-planned. Timelines include a 15-day buffer for weather and material delays.',
    category: 'timeline',
  },
  {
    id: '4',
    question: 'Can materials be customized or upgraded?',
    answer: 'Yes. You can upgrade specific materials within or across packages. For example, upgrading flooring from Kajaria to Italian marble is possible with transparent cost addition. We provide detailed upgrade quotes.',
    category: 'materials',
  },
  {
    id: '5',
    question: 'Is GST included in the package price?',
    answer: 'No. The per sq.ft rate is exclusive of GST. GST is charged at 18% on the construction contract value as per government regulations. This is clearly mentioned in your contract.',
    category: 'pricing',
  },
  {
    id: '6',
    question: 'Do you provide a warranty?',
    answer: 'Yes. Essential: 5-year structural warranty. Classic: 7-year. Premium: 10-year. Luxury: Lifetime structural warranty. All warranties are in writing and cover structural defects, waterproofing, and workmanship.',
    category: 'warranty',
  },
  {
    id: '7',
    question: 'Can I track project progress?',
    answer: 'Absolutely. Every project gets a dedicated project manager who sends daily updates (photos + videos). You also get access to our online project tracking portal for real-time milestone updates and billing transparency.',
    category: 'process',
  },
];