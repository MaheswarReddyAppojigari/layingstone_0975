import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://layingstone.in';
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/residential-construction`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/commercial`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/residential-interiors`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/commercial-interiors`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/sport-infra`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/landscaping`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/industries`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/portfolio`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8 },
  ];
}