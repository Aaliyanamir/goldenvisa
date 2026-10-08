'use client';

'use client';

import { useCallback, useState } from 'react';
import { FamilyVisaCalculator } from '@/components/service-pages/FamilyVisaCalculator';
import { MaidVisaCalculator } from '@/components/service-pages/MaidVisaCalculator';
import { NewbornVisaCalculator } from '@/components/service-pages/NewbornVisaCalculator';
import { IloeCalculator } from '@/components/service-pages/IloeCalculator';
import type { ServiceId } from '@/components/service-pages/FamilyVisaCalculator';

interface VisaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceId;
}

export const VisaCalculatorModal = ({ isOpen, onClose, initialService }: VisaCalculatorModalProps) => {
  const [dedicatedCalculator, setDedicatedCalculator] = useState<'maid' | 'newborn' | 'iloe' | null>(null);

  const closeCalculator = useCallback(() => {
    setDedicatedCalculator(null);
    onClose();
  }, [onClose]);

  return (
    <>
      <FamilyVisaCalculator
        key={`${isOpen}-${initialService ?? 'all'}`}
        open={isOpen && dedicatedCalculator === null}
        onClose={closeCalculator}
        initialService={initialService}
        onOpenDedicatedCalculator={setDedicatedCalculator}
      />
      {dedicatedCalculator === 'maid' && (
        <MaidVisaCalculator open={isOpen} onClose={closeCalculator} onBackToHub={() => setDedicatedCalculator(null)} />
      )}
      {dedicatedCalculator === 'newborn' && (
        <NewbornVisaCalculator open={isOpen} onClose={closeCalculator} onBackToHub={() => setDedicatedCalculator(null)} />
      )}
      {dedicatedCalculator === 'iloe' && (
        <IloeCalculator open={isOpen} onClose={closeCalculator} onBackToHub={() => setDedicatedCalculator(null)} />
      )}
    </>
  );
};
