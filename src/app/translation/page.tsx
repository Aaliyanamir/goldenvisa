import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Legal Translation | Golden Visa Dubai',
  description: 'Professional legal translation support for UAE residents, families, and businesses needing accurate documentation.',
};

export default function TranslationPage() {
  return <ServicePageTemplate title="Legal Translation" />;
}
