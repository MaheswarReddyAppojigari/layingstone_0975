import { Metadata } from 'next';
import { sportsData } from '@/data/sportsData';
import SportDetailPage from '../components/SportDetailPage';

const sport = sportsData.find(s => s.slug === 'cricket')!;

export const metadata: Metadata = {
  title: sport.seo.title,
  description: sport.seo.description,
};

export default function CricketPage() {
  return <SportDetailPage sport={sport} />;
}