import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Legal Translation | Golden Visa Dubai',
  description: 'Request a UAE Ministry of Justice certified legal translation quote for official documents.',
};

export default function LegalTranslationPage() {
  return <ServicePageTemplate title="Legal Translation" />;
}
