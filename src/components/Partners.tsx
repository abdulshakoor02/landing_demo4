"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const partners = [
  "Government of Canada",
  "USCIS",
  "UK Visas & Immigration",
  "Australian Immigration",
  "New Zealand Immigration",
  "European Union",
  "Global Legal Network",
  "International Partners",
  "Trusted Associates",
  "Verified Counsel",
];

export function Partners() {
  const [duplicatedPartners, setDuplicatedPartners] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate partners for smooth infinite scroll
    setDuplicatedPartners([...partners, ...partners]);
  }, []);

  return (
    <section className="py-16 bg-[#F1F5F9]">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-heading font-semibold text-[#0D2F5B] mb-2"
          >
            Trusted By Leading Organizations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#64748B]"
          >
            Our expertise is recognized by immigration authorities worldwide
          </motion.p>
        </div>

        <div className="relative">
          {/* Top gradient fade */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F1F5F9] to-transparent z-10" />
          
          {/* Bottom gradient fade */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F1F5F9] to-transparent z-10" />

          {/* Marquee container */}
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            <div className="flex items-center">
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner}-${index}`}
                  className="mx-8 flex items-center justify-center cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-48 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:text-[#0D2F5B] text-[#64748B] font-medium text-center px-4">
                    {partner}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}