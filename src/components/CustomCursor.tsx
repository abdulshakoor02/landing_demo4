'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useCustomCursor from '@/hooks/useCustomCursor';

const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { position, isVisible, isHovering } = useCustomCursor();

  useEffect(() => {
    // Check if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
  }, []);

  // Don't render custom cursor on touch devices
  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-[#D4AF37] mix-blend-difference z-50 pointer-events-none"
        style={{
          left: position.x - 12,
          top: position.y - 12,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#D4AF37] z-50 pointer-events-none"
          style={{
            left: position.x - 16,
            top: position.y - 16,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </>
  );
};

export default CustomCursor;