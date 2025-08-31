'use client';

import { useState, useEffect, useRef } from 'react';

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Use requestAnimationFrame for better performance
      rafId.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return scrollProgress;
};

export default useScrollProgress;