export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
{
  id: 'residential',
  title: 'Residential Construction',
  description: 'Premium villas, luxury homes, and turnkey residential projects with transparent pricing.',
  icon: 'HomeModernIcon',
  href: '/residential-construction',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11ad8c401-1774985566865.png",
  features: ['Villa Construction', 'Luxury Homes', 'Individual Houses', 'Turnkey Projects', 'Renovation']
},
{
  id: 'commercial',
  title: 'Commercial Construction',
  description: 'Corporate offices, retail spaces, warehouses and industrial buildings built to last.',
  icon: 'BuildingOffice2Icon',
  href: '/#services',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6d7054b-1786087847002.png",
  features: ['Corporate Offices', 'Retail Buildings', 'Shopping Complexes', 'Warehouses', 'Factories']
},
{
  id: 'interiors',
  title: 'Interior Design',
  description: 'Elegant residential and commercial interiors crafted with premium materials.',
  icon: 'SwatchIcon',
  href: '/#services',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10e109cad-1768150423265.png",
  features: ['Residential Interiors', 'Commercial Interiors', 'Office Spaces', 'Retail Interiors']
},
{
  id: 'sport-infra',
  title: 'Sport Infrastructure',
  description: 'World-class sports facilities from cricket grounds to indoor stadiums.',
  icon: 'TrophyIcon',
  href: '/#services',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18fcb3b2e-1767600409580.png",
  features: ['Cricket Grounds', 'Football Grounds', 'Basketball Courts', 'Athletic Tracks', 'Indoor Stadiums']
},
{
  id: 'landscaping',
  title: 'Landscaping',
  description: 'Beautiful garden design, hardscaping, water features, and outdoor spaces.',
  icon: 'SparklesIcon',
  href: '/#services',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d06ad597-1785964399918.png",
  features: ['Garden Design', 'Hardscaping', 'Softscaping', 'Water Features', 'Pergolas']
}];