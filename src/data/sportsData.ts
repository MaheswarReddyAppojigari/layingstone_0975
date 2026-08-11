export interface SportSpec {
  label: string;
  value: string;
}

export interface SportProject {
  name: string;
  location: string;
  type: string;
  isActual: boolean;
}

export interface SportProduct {
  name: string;
  image: string;
  alt: string;
  specs: SportSpec[];
  highlight: string;
  certifications: string[];
}

export interface SportData {
  slug: string;
  name: string;
  number: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  gridImage: string;
  gridImageAlt: string;
  standard: string;
  description: string;
  about: string[];
  tags: string[];
  products: SportProduct[];
  services: string[];
  projects: SportProject[];
  standards: string[];
  seo: {
    title: string;
    description: string;
  };
}

export const sportsData: SportData[] = [
{
  slug: 'badminton',
  name: 'Badminton',
  number: '01',
  tagline: 'BWF-compliant courts engineered for precision play.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0c41ec9-1772226714692.png",
  heroImageAlt: 'Professional indoor badminton court with premium flooring and overhead lighting',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1de7c8aa3-1765131512988.png",
  gridImageAlt: 'Premium badminton court with wooden flooring',
  standard: 'BWF Compliant',
  description: 'Professional badminton court construction with BWF-compliant surfaces, premium flooring systems, and complete turnkey delivery.',
  about: [
  'LayingStone Sports Infra constructs badminton courts that meet the exacting standards of the Badminton World Federation (BWF). From single-court installations to multi-court indoor halls, we deliver surfaces engineered for consistent shuttle response, player safety, and long-term durability.',
  'Our badminton court solutions are designed for schools, sports academies, residential communities, corporate campuses, and professional clubs. We offer a comprehensive range of flooring systems — PP interlocking tiles, acrylic surfaces, PVC flooring, and premium wooden floors — each selected to match the specific performance requirements and budget of the project.',
  'Every court is constructed with precision civil base work, proper drainage, accurate line markings, and complete ancillary installations including lighting, fencing, and net systems — all delivered as a turnkey project.'],

  tags: ['BWF Compliant', 'Turnkey Delivery', 'Premium Flooring', 'Civil Base Work', 'Line Markings'],
  products: [
  {
    name: 'PP Interlocking Tiles',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png",
    alt: 'PP interlocking tiles for badminton court surface',
    specs: [
    { label: 'Size', value: '1×1 ft' },
    { label: 'Thickness', value: '8–15 mm' },
    { label: 'Layer', value: 'Double Layer' },
    { label: 'Usage Life', value: '8–10 years' },
    { label: 'Load Capacity', value: '20 Ton/Tile' },
    { label: 'Installation', value: 'Interlock System' }],

    highlight: 'Superior grip, shock absorption, all-weather durability',
    certifications: ['FIBA Certified', 'BWF Compliant', 'Labosport Certified']
  },
  {
    name: 'Acrylic Sports Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10dc814c6-1778832436636.png",
    alt: 'Acrylic sports flooring for badminton court',
    specs: [
    { label: 'Standard System', value: '5-Layer Acrylic' },
    { label: 'Cushion System', value: '8-Layer Acrylic' },
    { label: 'Finish', value: 'Anti-slip, UV resistant' },
    { label: 'Weather', value: 'All-weather resistant' }],

    highlight: 'Consistent ball response, excellent grip, low maintenance',
    certifications: ['BWF Compliant', 'UV Resistant']
  },
  {
    name: 'PVC Sports Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png',
    alt: 'PVC sports flooring for indoor badminton court',
    specs: [
    { label: '4.5mm', value: 'Comfort & Grip' },
    { label: '6mm', value: 'Better Cushion' },
    { label: '7mm', value: 'High Performance' }],

    highlight: 'Ideal for indoor courts — superior cushioning and grip',
    certifications: ['Indoor Use', 'Anti-slip']
  },
  {
    name: 'Wooden Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0c41ec9-1772226714692.png",
    alt: 'Premium wooden flooring for professional badminton court',
    specs: [
    { label: 'Maple Wood', value: 'Premium Finish' },
    { label: 'Teak Wood', value: 'High Durability' },
    { label: 'Shock Absorption', value: 'Superior' }],

    highlight: 'Premium finish with superior shock absorption for elite play',
    certifications: ['BWF Compliant', 'Professional Grade']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Sports Surface Installation', 'Lighting Solutions', 'Fencing', 'Net Installations', '2D & 3D Design', 'Bleachers & Seating'],
  projects: [
  { name: 'Badminton Court, Whitefield', location: 'Whitefield, Bengaluru', type: 'Badminton', isActual: true }],

  standards: ['BWF – Badminton World Federation', 'FIBA (for PP tiles)', 'LABOSPORT Certified'],
  seo: {
    title: 'Badminton Court Construction | LayingStone Sports Infra',
    description: 'Professional BWF-compliant badminton court construction with premium flooring systems — PP interlocking tiles, acrylic, PVC, and wooden floors. Turnkey delivery by LayingStone.'
  }
},
{
  slug: 'football',
  name: 'Football',
  number: '02',
  tagline: 'Premium artificial turf football grounds engineered for performance.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4ddab9a-1772959252686.png",
  heroImageAlt: 'Professional football pitch with premium green artificial turf under stadium lights',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_130e9d1cb-1766838331066.png",
  gridImageAlt: 'Football ground with artificial turf surface',
  standard: 'FIFA Quality',
  description: 'Complete football ground construction with premium artificial turf, civil base works, fencing, lighting, and full turnkey delivery.',
  about: [
  'LayingStone Sports Infra constructs football grounds with premium artificial turf systems engineered for consistent ball roll, player safety, and all-weather performance. From 5-a-side to full-size pitches, every ground is built to the highest standards.',
  'Our football turf systems feature pile heights from 40mm to 60mm with infill and non-infill options, backed by 3-layer PU/Latex systems and warranted for 5–8 years. We work with trusted brands including CCGrass, Bellinturf, and Maverick Turf.',
  'Complete turnkey delivery includes civil base preparation, drainage systems, turf installation, perimeter fencing, floodlighting, goal posts, and line markings — all engineered and executed by our in-house team.'],

  tags: ['Artificial Turf', 'Turnkey Delivery', 'All-Weather', 'Floodlighting', 'Civil Base Work'],
  products: [
  {
    name: 'Artificial Turf — Football',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_138e4dde0-1773792639999.png",
    alt: 'Premium artificial turf for football ground',
    specs: [
    { label: 'Pile Height', value: '40–60 mm' },
    { label: 'Grass Type', value: 'Infill / Non-Infill' },
    { label: 'Dtex', value: '8,000–20,000' },
    { label: 'Backing', value: '3 Layer PU / Latex' },
    { label: 'Stitch Rate', value: '170/10M (±3%)' },
    { label: 'Density', value: '9,000–12,000' },
    { label: 'Roll Size', value: '2×25 / 4×25 / 4×20 m' },
    { label: 'Warranty', value: '5–8 Years' }],

    highlight: 'Engineered for consistent ball roll, player safety, and all-weather performance',
    certifications: ['All-Weather', 'Premium Grade']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Artificial Turf Installation', 'Drainage Systems', 'Perimeter Fencing', 'Floodlighting', 'Goal Posts & Accessories', '2D & 3D Design'],
  projects: [
  { name: 'GoRally', location: 'Kudlu Gate, Bengaluru', type: 'Multi-sport', isActual: true },
  { name: 'GoRally', location: 'Aghara, Bengaluru', type: 'Multi-sport (Indoor)', isActual: true }],

  standards: ['FIFA Quality Standards (design reference)', 'IS Codes for Civil Works'],
  seo: {
    title: 'Football Turf Construction | LayingStone Sports Infra',
    description: 'Premium artificial turf football ground construction with complete civil works, fencing, and floodlighting. Turnkey football pitch solutions by LayingStone.'
  }
},
{
  slug: 'tennis',
  name: 'Tennis',
  number: '03',
  tagline: 'ITF-compliant tennis courts built for consistent performance.',
  heroImage: "https://images.unsplash.com/photo-1659427948877-526b77c74732",
  heroImageAlt: 'Professional outdoor tennis court with blue acrylic surface and white court lines',
  gridImage: "https://images.unsplash.com/photo-1657472503293-756fee8981ad",
  gridImageAlt: 'Tennis court with acrylic surface',
  standard: 'ITF Compliant',
  description: 'ITF-compliant tennis court construction with acrylic, PVC, and PP interlocking surfaces for clubs, academies, and residential facilities.',
  about: [
  'LayingStone Sports Infra constructs tennis courts that comply with International Tennis Federation (ITF) standards for surface performance, dimensions, and construction quality. Our courts are built for consistent ball bounce, excellent grip, and long-term durability.',
  'We offer multiple surface systems for tennis — standard and cushion acrylic flooring, PVC flooring, and PP interlocking tiles — each suited to different environments, performance requirements, and budgets.',
  'Every tennis court project includes complete civil base preparation, accurate line markings, net posts, fencing, and lighting — delivered as a complete turnkey solution.'],

  tags: ['ITF Compliant', 'Acrylic Surface', 'Turnkey Delivery', 'All-Weather', 'Civil Base Work'],
  products: [
  {
    name: 'Standard Acrylic Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15757ad98-1786451952481.png",
    alt: 'Standard 5-layer acrylic sports flooring for tennis court',
    specs: [
    { label: 'System', value: '5-Layer Acrylic' },
    { label: 'Finish', value: 'Anti-slip' },
    { label: 'Weather', value: 'All-weather resistant' },
    { label: 'UV Resistant', value: 'Yes' }],

    highlight: 'Excellent grip, consistent ball bounce, UV resistant, low maintenance',
    certifications: ['ITF Compliant', 'UV Resistant']
  },
  {
    name: 'Cushion Acrylic Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1acfa3f13-1786451952463.png",
    alt: 'Cushion 8-layer acrylic sports flooring for tennis court',
    specs: [
    { label: 'System', value: '8-Layer Cushion Acrylic' },
    { label: 'Shock Absorption', value: 'Enhanced' },
    { label: 'Colours', value: 'Wide range' },
    { label: 'Brands', value: 'Pacecourt, KDF, Unica' }],

    highlight: 'Premium cushion system with enhanced shock absorption for elite play',
    certifications: ['ITF Compliant', 'Premium Cushion']
  },
  {
    name: 'PP Interlocking Tiles',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png",
    alt: 'PP interlocking tiles for tennis court surface',
    specs: [
    { label: 'Size', value: '1×1 ft per tile' },
    { label: 'Thickness', value: '8–15 mm' },
    { label: 'Usage Life', value: '8–10 years' },
    { label: 'Load Capacity', value: '20 Ton/Tile' }],

    highlight: 'Durable, shock-absorbing, ITF-certified surface for all environments',
    certifications: ['ITF Certified', 'LABOSPORT Certified']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Surface Installation', 'Net Posts & Nets', 'Fencing', 'Lighting Solutions', '2D & 3D Design'],
  projects: [
  { name: 'GoRally', location: 'Kudlu Gate, Bengaluru', type: 'Tennis / Multi-sport', isActual: true },
  { name: 'GoRally', location: 'Aghara, Bengaluru', type: 'Tennis / Multi-sport (Indoor)', isActual: true }],

  standards: ['ITF – International Tennis Federation', 'LABOSPORT Certified (PP tiles)'],
  seo: {
    title: 'Tennis Court Construction | LayingStone Sports Infra',
    description: 'ITF-compliant tennis court construction with acrylic, PVC, and PP interlocking surfaces. Complete turnkey tennis court solutions by LayingStone.'
  }
},
{
  slug: 'pickleball',
  name: 'Pickleball',
  number: '04',
  tagline: 'Precision courts built to USA Pickleball guidelines.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10dc814c6-1778832436636.png",
  heroImageAlt: 'Professional pickleball court with acrylic surface and court markings',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10dc814c6-1778832436636.png",
  gridImageAlt: 'Pickleball court with premium surface',
  standard: 'USA Pickleball',
  description: 'Precision pickleball courts built to USA Pickleball guidelines with acrylic, PVC, and PP interlocking surfaces for modern facilities.',
  about: [
  'LayingStone Sports Infra constructs pickleball courts following USA Pickleball guidelines for court dimensions, surface performance, and construction quality. As one of the fastest-growing sports globally, pickleball demands precision courts that deliver consistent play.',
  'We offer acrylic, PVC, and PP interlocking tile surfaces for pickleball — each providing the grip, ball response, and durability required for competitive and recreational play.',
  'Our pickleball court solutions include complete civil base preparation, accurate line markings, net systems, fencing, and lighting — delivered as a complete turnkey project.'],

  tags: ['USA Pickleball', 'Acrylic Surface', 'Turnkey Delivery', 'Modern Facilities', 'Civil Base Work'],
  products: [
  {
    name: 'Acrylic Sports Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10dc814c6-1778832436636.png",
    alt: 'Acrylic sports flooring for pickleball court',
    specs: [
    { label: 'Standard System', value: '5-Layer Acrylic' },
    { label: 'Cushion System', value: '8-Layer Acrylic' },
    { label: 'Finish', value: 'Anti-slip' },
    { label: 'Weather', value: 'All-weather resistant' }],

    highlight: 'Consistent ball response and excellent grip for competitive pickleball',
    certifications: ['USA Pickleball Compliant', 'UV Resistant']
  },
  {
    name: 'PP Interlocking Tiles',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_106d88112-1784878137725.png",
    alt: 'PP interlocking tiles for pickleball court',
    specs: [
    { label: 'Size', value: '1×1 ft per tile' },
    { label: 'Thickness', value: '8–15 mm' },
    { label: 'Usage Life', value: '8–10 years' },
    { label: 'Load Capacity', value: '20 Ton/Tile' }],

    highlight: 'Durable, certified surface ideal for indoor and outdoor pickleball',
    certifications: ['ITF Certified', 'FIBA Certified', 'LABOSPORT Certified']
  },
  {
    name: 'PVC Sports Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png',
    alt: 'PVC sports flooring for indoor pickleball court',
    specs: [
    { label: '4.5mm', value: 'Comfort & Grip' },
    { label: '6mm', value: 'Better Cushion' },
    { label: '7mm', value: 'High Performance' }],

    highlight: 'Superior cushioning and grip for indoor pickleball facilities',
    certifications: ['Indoor Use', 'Anti-slip']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Surface Installation', 'Net Systems', 'Fencing', 'Lighting Solutions', '2D & 3D Design'],
  projects: [
  { name: '11 Point Club', location: 'Bengaluru', type: 'Multi-sport', isActual: true }],

  standards: ['USA Pickleball Guidelines', 'ITF (for surface certification)', 'LABOSPORT Certified'],
  seo: {
    title: 'Pickleball Court Construction | LayingStone Sports Infra',
    description: 'Precision pickleball courts built to USA Pickleball guidelines with acrylic, PVC, and PP interlocking surfaces. Turnkey pickleball court solutions by LayingStone.'
  }
},
{
  slug: 'basketball',
  name: 'Basketball',
  number: '05',
  tagline: 'FIBA-standard basketball courts for schools, clubs, and arenas.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10698159f-1772635949918.png",
  heroImageAlt: 'Professional indoor basketball court with hardwood flooring and arena lighting',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1079b97d6-1785504647898.png",
  gridImageAlt: 'Basketball court with professional flooring',
  standard: 'FIBA Standard',
  description: 'FIBA-standard basketball court construction with PP interlocking tiles, acrylic, PVC, and wooden flooring for indoor and outdoor facilities.',
  about: [
  'LayingStone Sports Infra constructs basketball courts that meet FIBA (Fédération Internationale de Basketball) standards for court dimensions, surface performance, and construction quality.',
  'We offer a comprehensive range of surface systems for basketball — FIBA-certified PP interlocking tiles, acrylic flooring, PVC flooring, and premium wooden floors — each engineered for consistent ball bounce, player safety, and long-term durability.',
  'Every basketball court project includes complete civil base preparation, accurate line markings, backboards and hoops, fencing, and lighting — delivered as a complete turnkey solution.'],

  tags: ['FIBA Standard', 'PP Interlocking Tiles', 'Turnkey Delivery', 'Indoor & Outdoor', 'Civil Base Work'],
  products: [
  {
    name: 'PP Interlocking Tiles',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png",
    alt: 'FIBA-certified PP interlocking tiles for basketball court',
    specs: [
    { label: 'Size', value: '1×1 ft per tile' },
    { label: 'Thickness', value: '8–15 mm' },
    { label: 'Layer', value: 'Double Layer' },
    { label: 'Usage Life', value: '8–10 years' },
    { label: 'Load Capacity', value: '20 Ton/Tile' }],

    highlight: 'FIBA-certified surface with superior shock absorption and grip',
    certifications: ['FIBA Certified', 'LABOSPORT Certified', 'ITF Certified']
  },
  {
    name: 'Acrylic Sports Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ce368334-1786451952485.png",
    alt: 'Acrylic sports flooring for basketball court',
    specs: [
    { label: 'Standard System', value: '5-Layer Acrylic' },
    { label: 'Cushion System', value: '8-Layer Acrylic' },
    { label: 'Finish', value: 'Anti-slip' },
    { label: 'Weather', value: 'All-weather resistant' }],

    highlight: 'Consistent ball bounce and excellent grip for outdoor basketball',
    certifications: ['FIBA Compliant', 'UV Resistant']
  },
  {
    name: 'Wooden Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6ae303c-1781710723147.png",
    alt: 'Premium wooden flooring for professional basketball court',
    specs: [
    { label: 'Maple Wood', value: 'Premium Finish' },
    { label: 'Teak Wood', value: 'High Durability' },
    { label: 'Shock Absorption', value: 'Superior' }],

    highlight: 'Premium hardwood surface for professional indoor basketball',
    certifications: ['FIBA Compliant', 'Professional Grade']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Surface Installation', 'Backboards & Hoops', 'Fencing', 'Lighting Solutions', '2D & 3D Design'],
  projects: [
  { name: 'Kristu Jayanti College', location: 'Bengaluru', type: 'Multi-sport', isActual: true },
  { name: 'National Public School', location: 'Bengaluru', type: 'Multi-sport', isActual: true }],

  standards: ['FIBA – Fédération Internationale de Basketball', 'LABOSPORT Certified (PP tiles)'],
  seo: {
    title: 'Basketball Court Construction | LayingStone Sports Infra',
    description: 'FIBA-standard basketball court construction with PP interlocking tiles, acrylic, PVC, and wooden flooring. Turnkey basketball court solutions by LayingStone.'
  }
},
{
  slug: 'squash',
  name: 'Squash',
  number: '06',
  tagline: 'Premium squash courts with professional surfaces and glass walls.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3ed2ca9-1769170991033.png",
  heroImageAlt: 'Professional squash court with glass back wall and premium flooring',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3ed2ca9-1769170991033.png",
  gridImageAlt: 'Squash court with professional surface',
  standard: 'WSF Standard',
  description: 'Premium squash court construction with PVC, wooden, and acrylic surfaces, glass back walls, and complete turnkey delivery.',
  about: [
  'LayingStone Sports Infra constructs squash courts with premium surface systems and structural elements engineered for the fast-paced demands of the sport. Our courts are built for consistent ball response, player safety, and long-term durability.',
  'We offer PVC flooring, wooden flooring, and acrylic surface systems for squash — each providing the grip, cushioning, and performance characteristics required for competitive and recreational play.',
  'Every squash court project includes complete civil base preparation, accurate line markings, glass back walls where required, fencing, and lighting — delivered as a complete turnkey solution.'],

  tags: ['WSF Standard', 'PVC Flooring', 'Wooden Flooring', 'Turnkey Delivery', 'Civil Base Work'],
  products: [
  {
    name: 'PVC Sports Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196d50468-1784878139241.png',
    alt: 'PVC sports flooring for squash court',
    specs: [
    { label: '4.5mm', value: 'Comfort & Grip' },
    { label: '6mm', value: 'Better Cushion' },
    { label: '7mm', value: 'High Performance' }],

    highlight: 'Superior cushioning and grip for professional squash play',
    certifications: ['Indoor Use', 'Anti-slip']
  },
  {
    name: 'Wooden Flooring',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11a08be07-1768765571042.png',
    alt: 'Premium wooden flooring for squash court',
    specs: [
    { label: 'Maple Wood', value: 'Premium Finish' },
    { label: 'Teak Wood', value: 'High Durability' },
    { label: 'Shock Absorption', value: 'Superior' }],

    highlight: 'Premium hardwood surface for elite squash facilities',
    certifications: ['Professional Grade', 'Superior Shock Absorption']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Surface Installation', 'Glass Back Walls', 'Lighting Solutions', '2D & 3D Design'],
  projects: [
  { name: 'Unorthodox Arena', location: 'Bengaluru', type: 'Multi-sport', isActual: true }],

  standards: ['WSF – World Squash Federation (design reference)', 'IS Codes for Civil Works'],
  seo: {
    title: 'Squash Court Construction | LayingStone Sports Infra',
    description: 'Premium squash court construction with PVC, wooden, and acrylic surfaces. Complete turnkey squash court solutions by LayingStone.'
  }
},
{
  slug: 'athletic-track',
  name: 'Athletic Track',
  number: '07',
  tagline: 'World Athletics-standard synthetic tracks for performance and safety.',
  heroImage: "https://images.unsplash.com/photo-1534185372994-55f9e64235c4",
  heroImageAlt: 'Synthetic athletic running track with red PU surface and lane markings',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5e6bf85-1772168322710.png",
  gridImageAlt: 'Athletic track with synthetic PU surface',
  standard: 'World Athletics',
  description: 'World Athletics-standard synthetic PU athletic tracks engineered for consistent performance, excellent traction, and all-weather durability.',
  about: [
  'LayingStone Sports Infra constructs synthetic athletic tracks using polyurethane (PU) surface systems engineered to World Athletics standards. Our tracks are built for consistent performance, excellent traction, and all-weather durability.',
  'Our PU athletic track surfaces are designed for schools, universities, sports academies, and professional athletics facilities. Each track is constructed with precision civil base work, proper drainage, accurate lane markings, and complete ancillary installations.',
  'We deliver complete turnkey athletic track projects — from site survey and civil base preparation to surface installation, line markings, and final handover.'],

  tags: ['World Athletics', 'PU Surface', 'Turnkey Delivery', 'All-Weather', 'Civil Base Work'],
  products: [
  {
    name: 'PU Athletic Track Surface',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_111beca57-1786449707671.png',
    alt: 'PU synthetic athletic track surface for running tracks',
    specs: [
    { label: 'Material', value: 'Polyurethane (PU)' },
    { label: 'Standard', value: 'World Athletics' },
    { label: 'Weather', value: 'All-weather' },
    { label: 'Performance', value: 'Consistent' }],

    highlight: 'Engineered to World Athletics standards for consistent performance and safety',
    certifications: ['World Athletics Standard', 'All-Weather']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'PU Surface Installation', 'Lane Markings', 'Drainage Systems', 'Lighting Solutions', '2D & 3D Design'],
  projects: [
  { name: 'National Hill View School', location: 'RR Nagar, Bengaluru', type: 'Multi-sport', isActual: true }],

  standards: ['World Athletics – International Athletics Standards', 'IS Codes for Civil Works'],
  seo: {
    title: 'Athletic Track Construction | LayingStone Sports Infra',
    description: 'World Athletics-standard synthetic PU athletic track construction with complete civil works and lane markings. Turnkey athletic track solutions by LayingStone.'
  }
},
{
  slug: 'cricket',
  name: 'Cricket',
  number: '08',
  tagline: 'Professional cricket grounds and practice nets built for serious play.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2ce0049-1766812859760.png",
  heroImageAlt: 'Professional cricket ground with well-maintained pitch and boundary markings',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba353434-1768331492598.png",
  gridImageAlt: 'Cricket pitch with professional surface',
  standard: 'BCCI Standard',
  description: 'Professional cricket ground construction and practice net installations for schools, academies, and clubs across Bengaluru.',
  about: [
  'LayingStone Sports Infra constructs cricket grounds and practice net facilities for schools, sports academies, residential communities, and professional clubs. Our cricket infrastructure is built for performance, safety, and long-term durability.',
  'We construct cricket practice nets with artificial turf surfaces, structural netting systems, and complete civil base works — delivering facilities that serve training needs at every level.',
  'Our cricket ground solutions include complete civil base preparation, pitch preparation, boundary fencing, floodlighting, and practice net installations — all delivered as a complete turnkey project.'],

  tags: ['Cricket Nets', 'Artificial Turf', 'Turnkey Delivery', 'Practice Facilities', 'Civil Base Work'],
  products: [
  {
    name: 'Artificial Turf — Cricket',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba353434-1768331492598.png",
    alt: 'Artificial turf for cricket practice nets and outfield',
    specs: [
    { label: 'Pile Height', value: '10–40 mm' },
    { label: 'Grass Type', value: 'Infill / Non-Infill' },
    { label: 'Dtex', value: '8,000–20,000' },
    { label: 'Backing', value: '3 Layer PU / Latex' },
    { label: 'Warranty', value: '5–8 Years' }],

    highlight: 'Consistent ball response and durability for cricket practice facilities',
    certifications: ['All-Weather', 'Premium Grade']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Pitch Preparation', 'Practice Net Installation', 'Boundary Fencing', 'Floodlighting', '2D & 3D Design'],
  projects: [
  { name: 'Cricket Nets, JSS Public School', location: 'Bengaluru', type: 'Cricket', isActual: true }],

  standards: ['IS Codes for Civil Works', 'BCCI Guidelines (design reference)'],
  seo: {
    title: 'Cricket Ground Construction | LayingStone Sports Infra',
    description: 'Professional cricket ground construction and practice net installations with artificial turf surfaces. Turnkey cricket infrastructure solutions by LayingStone.'
  }
},
{
  slug: 'padel',
  name: 'Padel',
  number: '09',
  tagline: 'FIP-certified padel courts. Premium courts. International standards. Built to last.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18802a80d-1776552673942.png",
  heroImageAlt: 'FIP-certified padel court with full panoramic glass panels and artificial turf surface',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_16d08a903-1775160591601.png",
  gridImageAlt: 'Padel court with glass panels',
  standard: 'FIP Certified',
  description: 'FIP-certified padel courts with toughened glass panels, steel structure, and premium artificial turf. Available in Full Panoramic, Panoramic, and Standard models.',
  about: [
  'LayingStone Sports Infra constructs FIP (International Padel Federation) certified padel courts with precision-engineered steel structures, toughened glass panels, and premium artificial turf surfaces.',
  'Our padel courts are available in three models — Full Panoramic, Panoramic, and Standard — to suit different environments, visibility requirements, and budgets. Each court is built to the official padel court dimensions: 20m length × 10m width × 4m height.',
  'The artificial turf surface features a 13mm pile height with 8,800 Dtex and 35 stitches per cm — engineered for optimal ball response and player performance. Every court is delivered as a complete turnkey project.'],

  tags: ['FIP Certified', 'Toughened Glass', 'Steel Structure', '13mm Turf', 'Turnkey Delivery'],
  products: [
  {
    name: 'Full Panoramic Model',
    image: "https://images.unsplash.com/photo-1709587825152-d4ce1b2224a3",
    alt: 'Full panoramic padel court with glass walls on all sides',
    specs: [
    { label: 'Length', value: '20 m' },
    { label: 'Width', value: '10 m' },
    { label: 'Height', value: '4 m' },
    { label: 'Glass', value: '12 mm Toughened' },
    { label: 'Glass Panels', value: '18 pcs' },
    { label: 'Turf Pile', value: '13 mm' }],

    highlight: 'Maximum spectator visibility with full panoramic glass enclosure',
    certifications: ['FIP Certified', 'Full Panoramic', 'Toughened Glass']
  },
  {
    name: 'Panoramic Model',
    image: "https://images.unsplash.com/photo-1709587824645-cf6dd2041e2b",
    alt: 'Panoramic padel court with partial glass walls',
    specs: [
    { label: 'Length', value: '20 m' },
    { label: 'Width', value: '10 m' },
    { label: 'Height', value: '4 m' },
    { label: 'Glass', value: '12 mm Toughened' },
    { label: 'Turf Dtex', value: '8,800' },
    { label: 'Turf Stitches', value: '35/cm' }],

    highlight: 'Partial panoramic glass for a balance of visibility and structural strength',
    certifications: ['FIP Certified', 'Panoramic', 'Toughened Glass']
  },
  {
    name: 'Standard Model',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_14f279c8f-1772230074954.png',
    alt: 'Standard padel court with mesh fencing and glass back walls',
    specs: [
    { label: 'Length', value: '20 m' },
    { label: 'Width', value: '10 m' },
    { label: 'Height', value: '4 m' },
    { label: 'Mesh Frame', value: '50×50×2 mm' },
    { label: 'Mesh Thickness', value: '4 mm' },
    { label: 'Mesh Size', value: '1×2 m' }],

    highlight: 'Cost-effective standard model with mesh fencing and glass back walls',
    certifications: ['FIP Certified', 'Standard Model']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Steel Structure Installation', 'Glass Panel Installation', 'Artificial Turf', 'LED Lighting', 'Net Installation'],
  projects: [
  { name: 'GoRally', location: 'Kudlu Gate, Bengaluru', type: 'Multi-sport', isActual: true }],

  standards: ['FIP – International Padel Federation', 'IS Codes for Civil Works'],
  seo: {
    title: 'Padel Court Construction | LayingStone Sports Infra',
    description: 'FIP-certified padel court construction with toughened glass panels, steel structure, and premium artificial turf. Full Panoramic, Panoramic, and Standard models by LayingStone.'
  }
},
{
  slug: 'skating-rink',
  name: 'Skating Rink',
  number: '10',
  tagline: 'Premium skating rink construction for indoor and outdoor facilities.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18e72007b-1772167342549.png",
  heroImageAlt: 'Premium indoor skating rink with smooth surface and professional lighting',
  gridImage: "https://img.rocket.new/generatedImages/rocket_gen_img_143587534-1786451952565.png",
  gridImageAlt: 'Skating rink with smooth surface',
  standard: 'Premium Grade',
  description: 'Premium skating rink construction with PP interlocking tiles and smooth surfaces for indoor and outdoor skating facilities.',
  about: [
  'LayingStone Sports Infra constructs skating rinks with premium surface systems engineered for smooth, safe, and durable skating experiences. Our rinks are built for schools, residential communities, recreational facilities, and sports clubs.',
  'We use PP interlocking tile systems for skating rinks — providing a smooth, durable surface with excellent load capacity and long-term performance. Each rink is constructed with precision civil base work and complete ancillary installations.',
  'Our skating rink solutions include complete civil base preparation, surface installation, perimeter fencing, lighting, and safety features — all delivered as a complete turnkey project.'],

  tags: ['PP Interlocking Tiles', 'Turnkey Delivery', 'Indoor & Outdoor', 'Safety Features', 'Civil Base Work'],
  products: [
  {
    name: 'PP Interlocking Tiles — Skating',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_106d88112-1784878137725.png",
    alt: 'PP interlocking tiles for skating rink surface',
    specs: [
    { label: 'Size', value: '1×1 ft per tile' },
    { label: 'Thickness', value: '8–15 mm' },
    { label: 'Layer', value: 'Double Layer' },
    { label: 'Usage Life', value: '8–10 years' },
    { label: 'Load Capacity', value: '20 Ton/Tile' },
    { label: 'Maintenance', value: 'Low' }],

    highlight: 'Smooth, durable surface with excellent load capacity for skating',
    certifications: ['FIBA Certified', 'LABOSPORT Certified']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Surface Installation', 'Perimeter Fencing', 'Lighting Solutions', 'Safety Features', '2D & 3D Design'],
  projects: [
  { name: 'Social Grid', location: 'Bengaluru', type: 'Multi-sport', isActual: true }],

  standards: ['IS Codes for Civil Works', 'Safety Standards for Recreational Facilities'],
  seo: {
    title: 'Skating Rink Construction | LayingStone Sports Infra',
    description: 'Premium skating rink construction with PP interlocking tiles for indoor and outdoor facilities. Turnkey skating rink solutions by LayingStone.'
  }
},
{
  slug: 'multipurpose-court',
  name: 'Multipurpose Court',
  number: '11',
  tagline: 'Multi-sport courts engineered for versatility and performance.',
  heroImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1b87d7ea1-1786451952539.png",
  heroImageAlt: 'Professional multipurpose sports court with multi-sport line markings and premium surface',
  gridImage: "https://images.unsplash.com/photo-1521217078329-f8fc1becab68",
  gridImageAlt: 'Multipurpose court with multi-sport markings',
  standard: 'Multi-Standard',
  description: 'Versatile multi-sport court construction with PP interlocking tiles, acrylic, and PVC surfaces for schools, communities, and corporate campuses.',
  about: [
  'LayingStone Sports Infra constructs multipurpose courts that serve multiple sports on a single surface — combining badminton, basketball, volleyball, tennis, and other sports within a single facility footprint.',
  'Our multipurpose court solutions use PP interlocking tiles, acrylic, and PVC surface systems — each providing the versatility, durability, and performance required for multi-sport use.',
  'Every multipurpose court project includes complete civil base preparation, multi-sport line markings, fencing, lighting, and sport-specific accessories — delivered as a complete turnkey solution.'],

  tags: ['Multi-Sport', 'PP Interlocking Tiles', 'Turnkey Delivery', 'Schools & Communities', 'Civil Base Work'],
  products: [
  {
    name: 'PP Interlocking Tiles',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png",
    alt: 'PP interlocking tiles for multipurpose sports court',
    specs: [
    { label: 'Size', value: '1×1 ft per tile' },
    { label: 'Thickness', value: '8–15 mm' },
    { label: 'Layer', value: 'Double Layer' },
    { label: 'Usage Life', value: '8–10 years' },
    { label: 'Load Capacity', value: '20 Ton/Tile' }],

    highlight: 'Versatile, certified surface ideal for multi-sport use',
    certifications: ['FIBA Certified', 'ITF Certified', 'LABOSPORT Certified']
  },
  {
    name: 'Acrylic Sports Flooring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f27f33b0-1784878137580.png",
    alt: 'Acrylic sports flooring for multipurpose court',
    specs: [
    { label: 'Standard System', value: '5-Layer Acrylic' },
    { label: 'Cushion System', value: '8-Layer Acrylic' },
    { label: 'Finish', value: 'Anti-slip' },
    { label: 'Weather', value: 'All-weather resistant' }],

    highlight: 'Consistent performance across multiple sports disciplines',
    certifications: ['Multi-Sport Compliant', 'UV Resistant']
  }],

  services: ['Site Survey & Planning', 'Design & Engineering', 'Civil & Foundation Works', 'Surface Installation', 'Multi-Sport Line Markings', 'Fencing', 'Lighting Solutions', '2D & 3D Design'],
  projects: [
  { name: 'Kristu Jayanti College', location: 'Bengaluru', type: 'Multi-sport', isActual: true },
  { name: 'National Hill View School', location: 'RR Nagar, Bengaluru', type: 'Multi-sport', isActual: true },
  { name: 'ShriRam Prestige Estates', location: 'Doddalapura, Bengaluru', type: 'Multi-sport', isActual: true },
  { name: 'National Public School', location: 'Bengaluru', type: 'Multi-sport', isActual: true }],

  standards: ['FIBA (basketball)', 'BWF (badminton)', 'ITF (tennis)', 'IS Codes for Civil Works'],
  seo: {
    title: 'Multipurpose Court Construction | LayingStone Sports Infra',
    description: 'Versatile multi-sport court construction with PP interlocking tiles, acrylic, and PVC surfaces for schools, communities, and corporate campuses. Turnkey solutions by LayingStone.'
  }
}];


export const allProjects = [
{ name: 'Cricket Nets, JSS Public School', location: 'Bengaluru', sport: 'Cricket', image: "https://img.rocket.new/generatedImages/rocket_gen_img_19c9e1d4b-1785825366866.png", alt: 'Cricket practice nets at JSS Public School Bengaluru' },
{ name: 'Kristu Jayanti College', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1506133c0-1786451950381.png", alt: 'Multi-sport court at Kristu Jayanti College Bengaluru' },
{ name: 'Social Grid', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1940b70fd-1786451952525.png", alt: 'Sports facility at Social Grid Bengaluru' },
{ name: 'Badminton Court, Whitefield', location: 'Whitefield, Bengaluru', sport: 'Badminton', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb9994e1-1767703622400.png", alt: 'Professional badminton court at Whitefield Bengaluru' },
{ name: '11 Point Club', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e2dc0c1-1786451952526.png", alt: 'Sports court at 11 Point Club Bengaluru' },
{ name: 'National Hill View School', location: 'RR Nagar, Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1501aeacc-1767952704008.png", alt: 'Sports facility at National Hill View School RR Nagar Bengaluru' },
{ name: 'National Public School', location: 'Bengaluru', sport: 'Multipurpose', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b526241a-1766766522105.png', alt: 'Sports court at National Public School Bengaluru' },
{ name: 'ShriRam Prestige Estates', location: 'Doddalapura, Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e27f7a58-1786451952517.png", alt: 'Multi-sport court at ShriRam Prestige Estates Doddalapura Bengaluru' },
{ name: 'GoRally', location: 'Kudlu Gate, Bengaluru', sport: 'Tennis', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2e19795-1786451952559.png", alt: 'Tennis court at GoRally Kudlu Gate Bengaluru' },
{ name: 'GoRally', location: 'Aghara, Bengaluru', sport: 'Tennis', image: "https://img.rocket.new/generatedImages/rocket_gen_img_14b2b6a71-1786451953136.png", alt: 'Indoor sports facility at GoRally Aghara Bengaluru' },
{ name: 'Unorthodox Arena', location: 'Bengaluru', sport: 'Multipurpose', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d051c345-1786451952638.png", alt: 'Multi-sport arena at Unorthodox Arena Bengaluru' }];


export const clients = [
'Shriram Properties', 'Sporthood', 'NHVPS Bangalore', 'Noah Sports',
'Light & Prosperity', 'Rabina Sports Academy', '11. Club', 'Coolulu',
'Loco Bear', 'Salarpuria Sattva', 'Unorthodox Sports Arena', 'KIA',
'Bhive Workspace', 'The Art of Living', 'Go Rally', 'Turfpark',
'JSS Public School', 'Kristu Jayanti University', 'Social Grid'];


export const brandPartners = [
{ name: 'CCGrass', category: 'Artificial Turf' },
{ name: 'Bellinturf', category: 'Artificial Turf' },
{ name: 'Maverick Turf', category: 'Artificial Turf' },
{ name: 'Standard Turf', category: 'Artificial Turf' },
{ name: 'Pacecourt', category: 'Acrylic Flooring' },
{ name: 'KDF Sports Flooring Systems', category: 'Acrylic Flooring' },
{ name: 'Unica Sports Surface Experts', category: 'Acrylic Flooring' }];