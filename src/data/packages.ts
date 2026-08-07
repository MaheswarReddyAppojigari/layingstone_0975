export interface PackageFeature {
  category: string;
  features: {
    name: string;
    essential: string | boolean;
    classic: string | boolean;
    premium: string | boolean;
    luxury: string | boolean;
  }[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  popular?: boolean;
  color: string;
  highlights: string[];
}

export const packages: Package[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '₹1,799',
    priceNote: 'per sq.ft*',
    description: 'Quality construction with standard materials for budget-conscious homeowners.',
    color: '#6B7280',
    highlights: ['M20 Concrete', 'Flush Doors', 'Standard Flooring', 'Basic Electrical', '5-Year Warranty'],
  },
  {
    id: 'classic',
    name: 'Classic',
    price: '₹2,099',
    priceNote: 'per sq.ft*',
    description: 'Our most popular package with premium materials and enhanced finishes.',
    popular: true,
    color: '#D4AF37',
    highlights: ['M25 Concrete', 'Teak Doors', 'Kajaria Flooring', 'Legrand Electrical', '7-Year Warranty'],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹2,399',
    priceNote: 'per sq.ft*',
    description: 'Elevated construction with luxury brands and superior finishing standards.',
    color: '#1F3A5F',
    highlights: ['M25 Concrete', 'Teak Doors', 'Somany Flooring', 'Havells Electrical', '10-Year Warranty'],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    price: 'Custom',
    priceNote: 'Pricing',
    description: 'Bespoke construction experience with the finest materials and white-glove service.',
    color: '#0F1E35',
    highlights: ['M30 Concrete', 'Imported Doors', 'Italian Marble', 'Schneider Electrical', 'Lifetime Support'],
  },
];

export const packageComparison: PackageFeature[] = [
  {
    category: 'Design & Drawings',
    features: [
      { name: '2D Floor Plan', essential: true, classic: true, premium: true, luxury: true },
      { name: '3D Elevation', essential: false, classic: true, premium: true, luxury: true },
      { name: 'Structural Drawings', essential: true, classic: true, premium: true, luxury: true },
      { name: 'Electrical Layout', essential: true, classic: true, premium: true, luxury: true },
      { name: 'Plumbing Layout', essential: true, classic: true, premium: true, luxury: true },
      { name: 'Interior 3D Design', essential: false, classic: false, premium: true, luxury: true },
    ],
  },
  {
    category: 'Structure',
    features: [
      { name: 'Steel Grade', essential: 'Fe415', classic: 'Fe500 (JSW)', premium: 'Fe550 (TATA)', luxury: 'Fe550D (TATA)' },
      { name: 'Cement Brand', essential: 'ACC', classic: 'UltraTech', premium: 'UltraTech', luxury: 'UltraTech Premium' },
      { name: 'Concrete Grade', essential: 'M20', classic: 'M25', premium: 'M25', luxury: 'M30' },
      { name: 'Block Type', essential: 'Solid Concrete', classic: 'Solid Concrete', premium: 'AAC Blocks', luxury: 'AAC Blocks' },
    ],
  },
  {
    category: 'Kitchen',
    features: [
      { name: 'Countertop', essential: 'Granite (Basic)', classic: 'Granite (Premium)', premium: 'Engineered Stone', luxury: 'Imported Marble' },
      { name: 'Sink', essential: 'Standard SS', classic: 'Premium SS', premium: 'Franke/Nirali', luxury: 'Imported Brand' },
      { name: 'Tiles', essential: 'Johnson', classic: 'Kajaria', premium: 'Somany Premium', luxury: 'Italian Ceramic' },
    ],
  },
  {
    category: 'Bathroom',
    features: [
      { name: 'Sanitary Brand', essential: 'Parryware', classic: 'Hindware', premium: 'Jaquar', luxury: 'Kohler/Duravit' },
      { name: 'Shower Panel', essential: false, classic: 'Basic', premium: 'Premium', luxury: 'Thermostatic' },
      { name: 'Tiles', essential: 'Johnson', classic: 'Kajaria', premium: 'Somany', luxury: 'Italian Ceramic' },
    ],
  },
  {
    category: 'Doors',
    features: [
      { name: 'Main Door', essential: 'Teak (4ft)', classic: 'Teak (4.5ft)', premium: 'Teak Premium', luxury: 'Custom Imported' },
      { name: 'Internal Doors', essential: 'Flush Door', classic: 'Flush Premium', premium: 'Engineered Wood', luxury: 'Solid Wood' },
      { name: 'Door Frame', essential: 'Sal Wood', classic: 'Teak', premium: 'Teak', luxury: 'Teak Premium' },
    ],
  },
  {
    category: 'Windows',
    features: [
      { name: 'Window Type', essential: 'Aluminium', classic: 'Aluminium Premium', premium: 'UPVC', luxury: 'UPVC Premium' },
      { name: 'Glass', essential: '5mm Plain', classic: '5mm Tinted', premium: '6mm Tinted', luxury: 'Double Glazed' },
      { name: 'Grills', essential: 'MS Grill', classic: 'MS Powder Coated', premium: 'SS Grill', luxury: 'Designer SS' },
    ],
  },
  {
    category: 'Flooring',
    features: [
      { name: 'Living/Bedroom', essential: 'Vitrified (Johnson)', classic: 'Vitrified (Kajaria)', premium: 'Somany Premium', luxury: 'Italian Marble' },
      { name: 'Kitchen', essential: 'Ceramic Tiles', classic: 'Vitrified', premium: 'Anti-skid Premium', luxury: 'Imported Ceramic' },
      { name: 'Bathroom', essential: 'Ceramic Tiles', classic: 'Kajaria', premium: 'Somany', luxury: 'Italian Ceramic' },
      { name: 'Staircase', essential: 'Kota Stone', classic: 'Granite', premium: 'Granite Premium', luxury: 'Marble' },
    ],
  },
  {
    category: 'Electrical',
    features: [
      { name: 'Wiring', essential: 'Finolex', classic: 'Polycab', premium: 'Polycab Premium', luxury: 'Havells' },
      { name: 'Switches', essential: 'Anchor', classic: 'Legrand', premium: 'Havells', luxury: 'Schneider' },
      { name: 'MCB/DB', essential: 'Anchor', classic: 'GM', premium: 'Legrand', luxury: 'Schneider' },
      { name: 'Points (per 1000 sqft)', essential: '30 Points', classic: '35 Points', premium: '40 Points', luxury: 'As Required' },
    ],
  },
  {
    category: 'Plumbing',
    features: [
      { name: 'CPVC Pipes', essential: 'Astral', classic: 'Astral', premium: 'Astral Premium', luxury: 'Aliaxis' },
      { name: 'SWR Pipes', essential: 'Ashirvad', classic: 'Ashirvad', premium: 'Ashirvad Premium', luxury: 'Aliaxis' },
      { name: 'Water Tank', essential: '500L Sintex', classic: '1000L Sintex', premium: '1500L Premium', luxury: 'Custom' },
    ],
  },
  {
    category: 'Painting',
    features: [
      { name: 'Interior Paint', essential: 'Asian Paints Tractor', classic: 'Asian Paints Royale', premium: 'Birla Opus Premium', luxury: 'Imported Paint' },
      { name: 'Exterior Paint', essential: 'Nerolac Weathercoat', classic: 'Asian Paints Apex', premium: 'Birla Opus Exterior', luxury: 'Premium Textured' },
      { name: 'Putty', essential: 'White Cement', classic: 'Asian Putty', premium: 'Asian Putty Premium', luxury: 'Imported Putty' },
    ],
  },
  {
    category: 'Warranty',
    features: [
      { name: 'Structural Warranty', essential: '5 Years', classic: '7 Years', premium: '10 Years', luxury: 'Lifetime' },
      { name: 'Waterproofing', essential: '2 Years', classic: '5 Years', premium: '7 Years', luxury: '10 Years' },
      { name: 'Workmanship', essential: '1 Year', classic: '2 Years', premium: '3 Years', luxury: '5 Years' },
    ],
  },
];