import type { Metadata } from 'next';
import { WillsPageContentWithFrame } from '@/components/service-pages/WillsPageContent';

export const metadata: Metadata = {
  title: 'Wills & Last Testament Dubai & UAE | DIFC & Dubai Courts Wills',
  description: 'Lawyer-drafted DIFC & Dubai Courts Wills registration for non-Muslim expatriates in Dubai and UAE. Protect real estate, bank accounts, business equity, and minor children guardianship.',
};

export default function WillsLastTestamentPage() {
  return <WillsPageContentWithFrame />;
}

