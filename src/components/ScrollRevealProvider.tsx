'use client';

import { useEffect, type ReactNode } from 'react';

interface ScrollRevealProviderProps {
  children: ReactNode;
}

const revealSelector = [
  '[data-scroll-reveal]',
  'main section',
  'main article',
  'main form',
  'section',
  'article',
  'form',
  'footer',
  '[class~="gv-section"]',
  '[class~="gv-metrics"]',
  '[class~="gv-lead"]',
  '[class*="-card"]',
].join(',');

const excludedSelector = 'header, nav, [role="dialog"], [aria-modal="true"]';

export const ScrollRevealProvider = ({ children }: ScrollRevealProviderProps) => {
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.dataset.scrollRevealState = 'visible';
          activeObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px', threshold: 0 });

    const prepareTarget = (element: Element) => {
      if (
        !(element instanceof HTMLElement) ||
        element.closest(excludedSelector) ||
        element.dataset.scrollRevealState
      ) {
        return;
      }

      const isSection = element.matches('section, footer, [class~="gv-section"]');
      const isCard = element.matches('article, [class*="-card"]');
      const revealStyle = isCard
        ? 'scale'
        : isSection
          ? 'rise'
          : 'from-left';

      element.dataset.scrollReveal = revealStyle;
      element.dataset.scrollRevealState = 'pending';
      observer.observe(element);
    };

    const scan = (root: ParentNode) => {
      if (root instanceof Element && root.matches(revealSelector)) {
        prepareTarget(root);
      }

      root.querySelectorAll(revealSelector).forEach(prepareTarget);
    };

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(({ addedNodes }) => {
        addedNodes.forEach((node) => {
          if (node instanceof Element) {
            scan(node);
          }
        });
      });
    });

    scan(document.body);
    document.documentElement.classList.add('scroll-reveal-enabled');
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove('scroll-reveal-enabled');
    };
  }, []);

  return children;
};
