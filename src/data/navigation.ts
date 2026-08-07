export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
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