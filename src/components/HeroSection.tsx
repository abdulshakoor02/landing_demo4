'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Split headline into words for animation
  const headlineWords = "Your Gateway to a New Beginning".split(" ");
  
  // Subheadline
  const subHeadline = "Expert guidance for your global immigration journey. We turn aspirations into reality.";
  
  // Social proof text
  const socialProof = "*Recognized by [Official Immigration Body] & Featured in [Major News Outlet]*";

  useEffect(() => {
    // Try to play the video when component mounts
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay blocked, user interaction required");
        }
      }
    };
    
    playVideo();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" role="banner" aria-label="Hero section">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Video element with dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2F5B]/70 to-[#0D2F5B]/90"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero/placeholder.jpg"
          aria-hidden="true"
        >
          <source src="/videos/toronto.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Animated Headline */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                aria-hidden="true"
              >
                {word}
              </motion.span>
            ))}
            <span className="sr-only">Your Gateway to a New Beginning</span>
          </h1>
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-xl text-white max-w-2xl mb-8 font-lato"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {subHeadline}
        </motion.p>

        {/* Social Proof */}
        <motion.p
          className="text-[#D4AF37] text-sm mb-8 italic font-lato"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {socialProof}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#c0a030] transition-colors duration-300 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Start your immigration journey"
        >
          Start Your Journey
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2 transition-transform duration-300"
            viewBox="0 0 20 20" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
          aria-label="Scroll down to explore"
        >
          <span className="text-white text-sm mb-2 font-lato sr-only">Scroll to explore</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;