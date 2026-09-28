import { CareerPage } from '@/components/CareerPage';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';

export default function CareerRoute() {
  return (
    <StandalonePageFrame currentView="career">
      <CareerPage />
    </StandalonePageFrame>
  );
}