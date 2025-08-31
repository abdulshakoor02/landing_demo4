'use client';

import { useState } from 'react';

const PartnersMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Sample partner data (will be replaced with actual data)
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/images/partners/partner1.png' },
    { id: 2, name: 'Partner 2', logo: '/images/partners/partner2.png' },
    { id: 3, name: 'Partner 3', logo: '/images/partners/partner3.png' },
    { id: 4, name: 'Partner 4', logo: '/images/partners/partner4.png' },
    { id: 5, name: 'Partner 5', logo: '/images/partners/partner5.png' },
    { id: 6, name: 'Partner 6', logo: '/images/partners/partner6.png' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-lato text-[#64748B] mb-8">
          Trusted by leading organizations
        </h2>
        
        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`flex whitespace-nowrap ${isHovered ? '[animation-play-state:paused]' : ''}`}
            style={{
              width: 'fit-content',
              animation: 'marquee 30s linear infinite'
            }}
          >
            {/* First set of partners */}
            {partners.map((partner) => (
              <div 
                key={`first-${partner.id}`} 
                className="mx-4 md:mx-8 inline-block grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32">
                  <span className="text-lg md:text-xl font-semibold text-[#0D2F5B]">{partner.name}</span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div 
                key={`second-${partner.id}`} 
                className="mx-4 md:mx-8 inline-block grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 md:h-16 w-24 md:w-32">
                  <span className="text-lg md:text-xl font-semibold text-[#0D2F5B]">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;