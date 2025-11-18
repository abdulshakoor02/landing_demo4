'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onBookConsultation?: () => void;
}

const Header = ({ onBookConsultation }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Countries', 'Services', 'Success Stories', 'FAQ', 'Contact'];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#0D2F5B]/80 backdrop-blur-md'
          : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="banner"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          {/* Replace with actual logo */}
          <span className="font-poppins font-semibold">The Visa <span className="text-[#D4AF37]">Guy</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-lato"
              aria-label={`Go to ${item} section`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button - hidden on mobile */}
        <motion.button
          className="hidden md:block bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold px-6 py-2 rounded-full hover:bg-[#c0a030] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Book a consultation with our experts"
          onClick={onBookConsultation}
        >
          Book a Consultation
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          id="mobile-menu"
          className="md:hidden bg-[#0D2F5B] px-4 py-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-lato py-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Go to ${item} section`}
              >
                {item}
              </a>
            ))}
            <motion.button
              className="bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold px-6 py-2 rounded-full hover:bg-[#c0a030] transition-colors duration-300 mt-4 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Book a consultation with our experts"
              onClick={() => {
                setIsMenuOpen(false);
                if (onBookConsultation) onBookConsultation();
              }}
            >
              Book a Consultation
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;