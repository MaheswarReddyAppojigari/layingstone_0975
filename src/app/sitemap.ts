import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://layingstone.in';
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/residential-construction`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8 },
  ];
}