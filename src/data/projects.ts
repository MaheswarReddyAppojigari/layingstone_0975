export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  category: string;
  description: string;
  image: string;
  area: string;
  duration: string;
}

export const projects: Project[] = [
{
  id: '1',
  title: 'Emerald Villa Estate',
  location: 'Whitefield, Bangalore',
  year: 2024,
  category: 'Residential',
  description: 'A 4,200 sq.ft luxury villa with premium interiors, landscaped garden, and smart home automation.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_123fcdbec-1767893350954.png",
  area: '4,200 sq.ft',
  duration: '14 months'
},
{
  id: '2',
  title: 'Pinnacle Corporate Hub',
  location: 'Baner, Pune',
  year: 2024,
  category: 'Commercial',
  description: 'A 12,000 sq.ft corporate office complex with modern interiors and advanced MEP systems.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13a9fa6a7-1786087847984.png",
  area: '12,000 sq.ft',
  duration: '18 months'
},
{
  id: '3',
  title: 'Serene Heights Residence',
  location: 'Jubilee Hills, Hyderabad',
  year: 2023,
  category: 'Residential',
  description: 'Premium individual house with rooftop terrace, modular kitchen, and designer bathrooms.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1923efa83-1786087848217.png",
  area: '3,100 sq.ft',
  duration: '11 months'
},
{
  id: '4',
  title: 'Champions Sports Complex',
  location: 'Anna Nagar, Chennai',
  year: 2023,
  category: 'Sport Infra',
  description: 'Multi-sport indoor complex featuring basketball courts, badminton courts, and a synthetic turf football ground.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19613ff9f-1774945970858.png",
  area: '18,500 sq.ft',
  duration: '16 months'
},
{
  id: '5',
  title: 'Heritage Garden Villa',
  location: 'Koregaon Park, Pune',
  year: 2024,
  category: 'Landscaping',
  description: 'Comprehensive landscaping with water features, pergola, hardscaping walkways, and mood lighting.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13bd1fbfc-1764895392319.png",
  area: '8,000 sq.ft',
  duration: '6 months'
},
{
  id: '6',
  title: 'Azure Luxury Interiors',
  location: 'Indiranagar, Bangalore',
  year: 2024,
  category: 'Residential Interiors',
  description: 'Full home interior transformation with Italian marble, custom joinery, and ambient lighting design.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb68dff8-1785550884543.png",
  area: '2,800 sq.ft',
  duration: '5 months'
}];