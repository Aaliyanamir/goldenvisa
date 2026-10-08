import type { Metadata } from 'next';
import { VisaMedicalEmiratesIdLocationsPageContentWithFrame } from '@/components/service-pages/VisaMedicalEmiratesIdLocationsPageContent';

export const metadata: Metadata = {
  title: 'Visa Medical & Emirates ID Locations | Golden Visa Dubai',
  description: 'Find official DHA medical fitness centers and ICP Emirates ID biometrics locations in Dubai.',
};

export default function VisaMedicalEmiratesIdLocationsPage() {
  return <VisaMedicalEmiratesIdLocationsPageContentWithFrame />;
}
