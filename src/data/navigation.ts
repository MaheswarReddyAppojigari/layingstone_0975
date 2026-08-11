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
      { label: 'Commercial', href: '/commercial' },
      {
        label: 'Interiors',
        href: '#',
        children: [
          { label: 'Residential Interiors', href: '/services/interiors/residential' },
          { label: 'Commercial Interiors', href: '/services/interiors/commercial' },
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