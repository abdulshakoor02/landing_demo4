'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/services';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = servicesData;

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D2F5B] to-[#1a3d6b] text-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#D4AF37]/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Our Visa Services</h2>
          <p className="text-xl text-[#F1F5F9] max-w-2xl mx-auto font-lato">
            Door-step visa solutions tailored to your unique travel needs from UAE
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Service Details Card */}
          <motion.div 
            className="lg:w-1/2 bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-[#D4AF37]/30"
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-6">{services[activeService].icon}</div>
            <h3 className="text-2xl font-bold font-poppins mb-4 text-[#D4AF37]">
              {services[activeService].title}
            </h3>
            <p className="text-lg text-[#F1F5F9] mb-8 font-lato">
              {services[activeService].description}
            </p>
            <motion.button
              className="bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold px-6 py-3 rounded-full hover:bg-[#c0a030] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Service Navigation */}
          <div className="lg:w-1/2">
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-[#D4AF37]/20 border-l-4 border-[#D4AF37]'
                      : 'bg-black/20 hover:bg-black/30'
                  }`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ x: activeService === index ? 0 : 10 }}
                >
                  <h4 className="text-xl font-semibold font-poppins flex items-center">
                    <span className={`mr-3 ${activeService === index ? 'text-[#D4AF37]' : 'text-[#F1F5F9]'}`}>
                      {service.icon}
                    </span>
                    {service.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;