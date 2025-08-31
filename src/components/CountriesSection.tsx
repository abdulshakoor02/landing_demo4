'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountriesSection = () => {
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sample country data (will be replaced with actual data)
  const countries = [
    {
      id: 1,
      name: 'Canada',
      benefit: 'High quality of life and excellent healthcare',
      image: '/images/countries/canada.jpg',
      quickFacts: [
        'Processing Time: 6-12 months',
        'Popular Visas: Express Entry, PNP',
        'Language: English/French',
      ],
    },
    {
      id: 2,
      name: 'Australia',
      benefit: 'Strong economy and diverse job market',
      image: '/images/countries/australia.jpg',
      quickFacts: [
        'Processing Time: 8-16 months',
        'Popular Visas: Skilled Migration, Student',
        'Language: English',
      ],
    },
    {
      id: 3,
      name: 'United Kingdom',
      benefit: 'Global financial hub with rich culture',
      image: '/images/countries/uk.jpg',
      quickFacts: [
        'Processing Time: 3-12 months',
        'Popular Visas: Skilled Worker, Student',
        'Language: English',
      ],
    },
    {
      id: 4,
      name: 'Germany',
      benefit: 'Economic powerhouse with innovation focus',
      image: '/images/countries/germany.jpg',
      quickFacts: [
        'Processing Time: 3-9 months',
        'Popular Visas: EU Blue Card, Job Seeker',
        'Language: German/English',
      ],
    },
    {
      id: 5,
      name: 'New Zealand',
      benefit: 'Stunning landscapes and work-life balance',
      image: '/images/countries/new-zealand.jpg',
      quickFacts: [
        'Processing Time: 9-15 months',
        'Popular Visas: Skilled Migration, Working Holiday',
        'Language: English',
      ],
    },
    {
      id: 6,
      name: 'United States',
      benefit: 'Land of opportunity with diverse industries',
      image: '/images/countries/usa.jpg',
      quickFacts: [
        'Processing Time: 6-24 months',
        'Popular Visas: H-1B, L-1, O-1',
        'Language: English',
      ],
    },
  ];

  const openCountryModal = (countryId: number) => {
    setSelectedCountry(countryId);
  };

  const closeCountryModal = () => {
    setSelectedCountry(null);
  };

  // Get selected country data
  const selectedCountryData = selectedCountry 
    ? countries.find(country => country.id === selectedCountry) 
    : null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0D2F5B] mb-4">
            Countries You Can Settle With Us
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto font-lato">
            Explore destination countries and their immigration opportunities
          </p>
        </div>

        {/* Vertical Scroller Container */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={scrollContainerRef}
            className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#D4AF37] scrollbar-track-[#F1F5F9] scrollbar-rounded"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-4">
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openCountryModal(country.id)}
                >
                  {/* Image with overlay */}
                  <div className="relative h-64">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2F5B]/80 to-transparent"></div>
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold font-poppins mb-2">
                        {country.name}
                      </h3>
                      <p className="font-lato">
                        {country.benefit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-reference note */}
        <div className="text-center mt-12">
          <p className="text-[#64748B] italic font-lato">
            See country highlights in 'Countries you can settle with us' for example cases and quick facts.
          </p>
        </div>
      </div>

      {/* Country Detail Modal */}
      {selectedCountryData && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold font-poppins text-[#0D2F5B]">
                  {selectedCountryData.name}
                </h3>
                <button
                  onClick={closeCountryModal}
                  className="text-[#64748B] hover:text-[#0D2F5B] transition-colors"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Country Image */}
              <div className="rounded-xl overflow-hidden mb-6 h-48">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>

              {/* Benefit */}
              <p className="text-lg text-[#64748B] mb-6 font-lato">
                {selectedCountryData.benefit}
              </p>

              {/* Quick Facts */}
              <div className="mb-8">
                <h4 className="font-bold font-poppins text-lg text-[#0D2F5B] mb-4">
                  Quick Facts
                </h4>
                <ul className="space-y-3">
                  {selectedCountryData.quickFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#64748B] font-lato">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
                className="w-full bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold text-lg py-4 rounded-full hover:bg-[#c0a030] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more / Start your application
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CountriesSection;