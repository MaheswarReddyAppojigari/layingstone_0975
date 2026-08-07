export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  project: string;
}

export const testimonials: Testimonial[] = [
{
  id: '1',
  name: 'Rajesh Nair',
  role: 'Homeowner',
  location: 'Bangalore, Karnataka',
  quote: 'LayingStone transformed our plot into the home we always dreamed of. The transparency in pricing and quality of materials was exceptional. Not a single hidden charge.',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12676403e-1772214987231.png",
  project: 'Luxury Villa, Whitefield'
},
{
  id: '2',
  name: 'Priya Krishnamurthy',
  role: 'Business Owner',
  location: 'Chennai, Tamil Nadu',
  quote: 'Our commercial office project was delivered 2 weeks ahead of schedule. The project manager kept us updated daily. Truly a premium experience from start to finish.',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1034635dd-1786087846581.png",
  project: 'Corporate Office, Anna Nagar'
},
{
  id: '3',
  name: 'Suresh Menon',
  role: 'Real Estate Developer',
  location: 'Hyderabad, Telangana',
  quote: 'I have worked with many construction companies but LayingStone stands apart. Their use of JSW steel and UltraTech cement gives real confidence in structural integrity.',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16a0ce76c-1784478195665.png",
  project: 'Residential Complex, Gachibowli'
},
{
  id: '4',
  name: 'Anitha Ramachandran',
  role: 'Homeowner',
  location: 'Coimbatore, Tamil Nadu',
  quote: 'The Classic package was perfect for our budget. They even upgraded the flooring to Kajaria tiles without extra cost. Absolutely recommend LayingStone.',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d341149-1786087846674.png",
  project: 'Individual House, RS Puram'
}];