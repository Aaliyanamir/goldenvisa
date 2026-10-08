import type { Metadata } from 'next';
import { PoaPageContentWithFrame } from '@/components/service-pages/PoaPageContent';

export const metadata: Metadata = {
  title: 'Power of Attorney (POA) Dubai & UAE | Lawyer Drafted & Online Notary',
  description: 'Fast lawyer-drafted bilingual Power of Attorney (POA) in Dubai and UAE. Complete digital notarization, video call verification, property, vehicle, and general POAs.',
};

export default function PowerOfAttorneyPage() {
  return <PoaPageContentWithFrame />;
}

