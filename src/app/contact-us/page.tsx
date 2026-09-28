import { ContactUsPage } from '@/components/ContactUsPage';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';

export default function ContactPage() {
  return (
    <StandalonePageFrame currentView="contact">
      <ContactUsPage />
    </StandalonePageFrame>
  );
}