'use client';

import { useState } from 'react';
import { BlogMainView } from '@/components/BlogMainView';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';

export function BlogListingPage() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <StandalonePageFrame
      currentView="blog"
      calculatorOpen={calculatorOpen}
      onCalculatorOpenChange={setCalculatorOpen}
    >
      <BlogMainView onOpenCalculator={() => setCalculatorOpen(true)} />
    </StandalonePageFrame>
  );
}
