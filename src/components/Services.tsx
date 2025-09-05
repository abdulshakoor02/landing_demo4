"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: {
    from: string;
    to: string;
  };
  pattern: string;
}

const services: Service[] = [
  {
    id: "skilled-worker",
    title: "Skilled Worker Programs",
    description: "Navigate Canada's Express Entry system, Australia's skilled migration, or UK skilled worker visas with our expert guidance. We help you identify the right pathway based on your qualifications and experience.",
    icon: "👨‍💼",
    gradient: { from: "#4F46E5", to: "#7C3AED" },
    pattern: "M12 2.08a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z",
  },
  {
    id: "family-sponsorship",
    title: "Family Sponsorship",
    description: "Reunite with your loved ones through our comprehensive family sponsorship services. We handle spousal sponsorships, dependent children, parents, and grandparents applications.",
    icon: "👨‍👩‍👧‍👦",
    gradient: { from: "#06B6D4", to: "#3B82F6" },
    pattern: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
  },
  {
    id: "investor-business",
    title: "Investor & Business Visas",
    description: "Start or expand your business in a new country with our investor and entrepreneur visa services. We guide you through investment requirements and business setup processes.",
    icon: "💼",
    gradient: { from: "#0891B2", to: "#059669" },
    pattern: "M19 5v14H5V5h14m0-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2z",
  },
  {
    id: "study-programs",
    title: "Study Programs",
    description: "Pursue your education abroad with our student visa services. We help with university applications, study permits, and post-graduation work opportunities.",
    icon: "🎓",
    gradient: { from: "#EC4899", to: "#F59E0B" },
    pattern: "M12 3L1 9l11 6 11-6L12 3zm0 14.55L3.41 11 12 6.45 20.59 11 12 17.55z",
  },
  {
    id: "citizenship",
    title: "Citizenship Applications",
    description: "Complete your immigration journey with our citizenship application services. We guide you through residency requirements and the naturalization process.",
    icon: "🌍",
    gradient: { from: "#DC2626", to: "#EA580C" },
    pattern: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
];

function ThreeDElement({ service, isActive }: { service: Service; isActive: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
      animate={{ 
        opacity: isActive ? 0.3 : 0.1, 
        scale: isActive ? 1 : 0.9,
        rotateY: isActive ? 0 : 360
      }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {[3, 2, 1].map((index) => (
        <motion.div
          key={index}
          className={`absolute w-${24 * index} h-${24 * index} rounded-3xl border-2`}
          style={{
            background: `linear-gradient(45deg, ${service.gradient.from}40, ${service.gradient.to}40)`,
            borderColor: service.gradient.from,
          }}
          animate={{
            rotateY: isActive ? [0, 360] : [0, -360],
            scale: isActive ? 1 : 0.8,
          }}
          transition={{
            rotateY: { duration: 10 + index, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.5 },
          }}
        />
      ))}
      
      {/* Central 3D-like element */}
      <motion.div
        className="relative w-32 h-32 flex items-center justify-center"
        animate={{
          rotateX: isActive ? [0, 360] : [0, -360],
          rotateY: isActive ? [0, 720] : [0, -720],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className={`w-24 h-24 rounded-2xl bg-gradient-to-br from-[${service.gradient.from}] to-[${service.gradient.to}] flex items-center justify-center shadow-2xl`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-white text-3xl font-bold">
            {service.icon}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  const [activeService, setActiveService] = useState(0);
  const currentService = services[activeService];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-20 bg-[#0D2F5B] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
            Comprehensive Immigration Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From skilled worker programs to family sponsorship, we provide expert guidance through every step of your immigration journey.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Service Content */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8972A] flex items-center justify-center text-2xl mr-4">
                  {currentService.icon}
                </div>
                <h3 className="text-3xl font-heading font-semibold">
                  {currentService.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {currentService.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-[#D4AF37] text-[#0D2F5B] px-6 py-3 rounded-lg font-semibold hover:bg-[#B8972A] transition-all duration-300"
              >
                Learn More
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Visuals */}
          <div className="relative h-96 lg:h-full">
            <AnimatePresence mode="wait">
              {services.map((service, index) => (
                <ThreeDElement
                  key={service.id}
                  service={service}
                  isActive={index === activeService}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Service Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeService === index
                    ? "bg-[#D4AF37] text-[#0D2F5B] shadow-lg"
                    : "bg-white bg-opacity-10 text-white hover:bg-opacity-20"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span>{service.icon}</span>
                  <span>{service.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}