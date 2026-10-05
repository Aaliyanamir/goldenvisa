'use client';

import { FamilyVisaCalculator } from '@/components/service-pages/FamilyVisaCalculator';

interface VisaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisaCalculatorModal = ({ isOpen, onClose }: VisaCalculatorModalProps) => (
  <FamilyVisaCalculator open={isOpen} onClose={onClose} />
);
