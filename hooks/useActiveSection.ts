import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = new Map();
    let visibleSections: { id: string; ratio: number }[] = [];

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = visibleSections.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) {
            visibleSections[index].ratio = entry.intersectionRatio;
          } else {
            visibleSections.push({ id: entry.target.id, ratio: entry.intersectionRatio });
          }
        } else {
          visibleSections = visibleSections.filter((s) => s.id !== entry.target.id);
        }
      });

      if (visibleSections.length > 0) {
        // Sort by visibility ratio and pick the most visible one
        visibleSections.sort((a, b) => b.ratio - a.ratio);
        setActiveSection(visibleSections[0].id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observers.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return activeSection;
}
