import { Metadata } from 'next';
import { sportsData } from '@/data/sportsData';
import SportDetailPage from '../components/SportDetailPage';

const sport = sportsData.find(s => s.slug === 'padel')!;

export const metadata: Metadata = {
  title: sport.seo.title,
  description: sport.seo.description,
};

export default function PadelPage() {
  return <SportDetailPage sport={sport} />;
}