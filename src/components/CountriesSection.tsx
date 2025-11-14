'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { countriesData } from '@/data/countries';

const CountriesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate which card should be active based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const cardIndex = Math.floor(latest * countriesData.length);
      const clampedIndex = Math.min(Math.max(cardIndex, 0), countriesData.length - 1);
      setActiveIndex(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="bg-white">
      {/* Section Header */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-[#0D2F5B] mb-4">
              Countries You Can Settle With Us
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto font-lato leading-relaxed">
              We're experts in various visa destinations
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vertical Scrolling Countries Section */}
      <div ref={containerRef} className="min-h-[300vh] relative">
        {/* Sticky container for cards */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {countriesData.map((country, index) => {
            const isActive = index === activeIndex;
            const isPrev = index < activeIndex;
            const isNext = index > activeIndex;
            
            return (
              <motion.div
                key={country.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={isActive ? 
                  { opacity: 1, y: 0, scale: 1 } : 
                  { opacity: 0, y: 100, scale: 0.9 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  zIndex: isActive ? 10 : isPrev ? 5 : 1
                }}
              >
                {/* Full Screen Background Image */}
                <div className="relative w-full h-full overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    {/* Background image using heroImage property */}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-[#0D2F5B] via-[#1e40af] to-[#3b82f6] flex items-center justify-center"
                      style={{
                        backgroundImage: country.heroImage ? `url(${country.heroImage})` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {!country.heroImage && (
                        <div className="text-white text-9xl font-bold opacity-10">
                          {country.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isActive ? 
                      { opacity: 1, x: 0 } : 
                      { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  >
                    <div className="container mx-auto px-4 md:px-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Country Info */}
                        <div className="text-white">
                          {/* Country Badge */}
                          <motion.div
                            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { opacity: 1, x: 0, transition: { delay: 0.4 } }
                            }}
                          >
                            <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                              <span className="text-[#0D2F5B] text-sm font-bold">
                                {country.name.charAt(0)}
                              </span>
                            </div>
                            <span className="text-[#D4AF37] font-poppins font-semibold">
                              Case Study
                            </span>
                          </motion.div>

                          {/* Country Name */}
                          <motion.h3
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4"
                            variants={{
                              hidden: { opacity: 0, y: 30 },
                              visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }
                            }}
                          >
                            {country.name}
                          </motion.h3>

                          {/* Tagline */}
                          <motion.p
                            className="text-[#D4AF37] font-poppins font-semibold text-xl md:text-2xl mb-6"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0, transition: { delay: 0.6 } }
                            }}
                          >
                            {country.tagline}
                          </motion.p>

                          {/* Description */}
                          <motion.p
                            className="text-white/90 font-lato text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0, transition: { delay: 0.7 } }
                            }}
                          >
                            {country.description}
                          </motion.p>

                          {/* CTA Button */}
                          <motion.button
                            className="bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold px-8 py-4 rounded-full hover:bg-[#c0a030] transition-all duration-300 inline-flex items-center gap-3"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0, transition: { delay: 0.8 } }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Read Case</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.button>
                        </div>

                        {/* Right Column - Statistics */}
                        <div className="space-y-6">
                          {/* Main Statistic */}
                          <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                          >
                            <div className="text-[#D4AF37] font-poppins font-bold text-3xl md:text-4xl mb-2">
                              {country.statistics.successRate}
                            </div>
                            <div className="text-white text-lg font-poppins">Success Rate</div>
                          </motion.div>

                          {/* Secondary Statistics */}
                          <div className="grid grid-cols-2 gap-4">
                            <motion.div
                              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                              initial={{ opacity: 0, y: 20 }}
                              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                            >
                              <div className="text-[#D4AF37] font-poppins font-bold text-xl mb-1">
                                {country.statistics.applicantsProcessed}
                              </div>
                              <div className="text-white/80 text-sm">Processed</div>
                            </motion.div>

                            <motion.div
                              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                              initial={{ opacity: 0, y: 20 }}
                              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                            >
                              <div className="text-[#D4AF37] font-poppins font-bold text-xl mb-1">
                                {country.statistics.processingTime}
                              </div>
                              <div className="text-white/80 text-sm">Timeline</div>
                            </motion.div>
                          </div>

                          {/* Testimonial */}
                          {country.testimonial && (
                            <motion.div
                              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 border-l-4 border-l-[#D4AF37]"
                              initial={{ opacity: 0, y: 20 }}
                              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                            >
                              <p className="text-white/90 italic font-lato mb-4 text-lg">
                                "{country.testimonial.quote}"
                              </p>
                              <div className="text-[#D4AF37] font-poppins font-semibold">
                                {country.testimonial.author}
                              </div>
                              <div className="text-white/70 text-sm">
                                {country.testimonial.position}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col space-y-2">
            {countriesData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-8 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#D4AF37]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#64748B] font-lato text-lg mb-6">
              Ready to start your visa journey?
            </p>
            <motion.button
              className="bg-[#0D2F5B] text-white font-poppins font-semibold px-8 py-4 rounded-full hover:bg-[#1e40af] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Expert Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;