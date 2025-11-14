'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="bg-[#0D2F5B] text-white">
      {/* Scrolling Marquee */}
      <div 
        className="py-4 overflow-hidden bg-[#0a2547]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`flex whitespace-nowrap ${isHovered ? '[animation-play-state:paused]' : ''}`}
          style={{
            width: 'fit-content',
            animation: 'marquee 20s linear infinite'
          }}
        >
          {/* First set of text */}
          <div className="flex items-center mx-8">
            <span className="text-2xl font-bold font-poppins text-[#D4AF37]">
              Visa Simplified • Door-Step Service • 75+ Countries • Free Consultation •
            </span>
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center mx-8">
            <span className="text-2xl font-bold font-poppins text-[#D4AF37]">
              Visa Simplified • Door-Step Service • 75+ Countries • Free Consultation •
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Mission */}
          <div>
            <div className="text-2xl font-bold font-poppins mb-4">
              <span>The Visa <span className="text-[#D4AF37]">Guy</span></span>
            </div>
            <p className="text-[#F1F5F9] mb-6 font-lato">
              Trusted Visa Services in UAE. The Visa Guy is a trusted visa service in Dubai that provides global visa assistance to citizens and residents in the UAE.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F1F5F9] hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[#F1F5F9] hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-[#F1F5F9] hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-poppins mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Countries', 'Services', 'Success Stories', 'Booking Free Consultation', 'FAQ'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-[#F1F5F9] hover:text-[#D4AF37] transition-colors font-lato"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-poppins mb-4 text-[#D4AF37]">Contact Us</h3>
            <ul className="space-y-3 text-[#F1F5F9] font-lato">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Dubai Marina, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@thevisaguy.ae</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Sat-Thu: 9AM - 8PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold font-poppins mb-4 text-[#D4AF37]">Stay Updated</h3>
            <p className="text-[#F1F5F9] mb-4 font-lato">
              Subscribe to our newsletter for visa news and updates from The Visa Guy.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-[#1a3d6b] text-white placeholder-[#94a3b8] border border-[#1a3d6b] focus:border-[#D4AF37] focus:outline-none font-lato"
              />
              <motion.button
                type="submit"
                className="w-full bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold py-2 rounded-lg hover:bg-[#c0a030] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1a3d6b] mt-12 pt-8 text-center">
          <p className="text-[#94a3b8] font-lato">
            © {new Date().getFullYear()} The Visa Guy. All rights reserved. | Trusted Visa Services in UAE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;