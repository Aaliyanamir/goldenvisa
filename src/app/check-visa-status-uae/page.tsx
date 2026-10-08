import type { Metadata } from 'next';
import { VisaValidityCheckerPageContentWithFrame } from '@/components/service-pages/VisaValidityCheckerPageContent';

export const metadata: Metadata = {
  title: 'Check UAE Visa Status by Passport Number | Golden Visa Dubai',
  description: 'Verify your UAE residence visa, visit visa, or entry permit status online by passport number using official GDRFA Dubai and ICP Smart Services systems.',
};

export default function CheckVisaStatusPage() {
  return <VisaValidityCheckerPageContentWithFrame />;
}

