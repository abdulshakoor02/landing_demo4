'use client';

import { useState, useEffect, useRef } from 'react';

const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Use requestAnimationFrame for better performance
      rafId.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      
      // Cancel any pending animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return { position, isVisible, isHovering };
};

export default useCustomCursor;