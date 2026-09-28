'use client';

import { useState } from 'react';
import { AboutPage } from '@/components/AboutPage';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';

export default function AboutRoute() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <StandalonePageFrame
      currentView="about"
      calculatorOpen={calculatorOpen}
      onCalculatorOpenChange={setCalculatorOpen}
    >
      <AboutPage onOpenCalculator={() => setCalculatorOpen(true)} />
    </StandalonePageFrame>
  );
}