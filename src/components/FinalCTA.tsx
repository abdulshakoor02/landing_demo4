"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 bg-[#0D2F5B] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* World map pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#D4AF37] rounded-full opacity-30" />
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-[#D4AF37] rounded-full opacity-20" />
          <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-[#D4AF37] rounded-full opacity-25" />
        </div>
        
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Start Your Immigration Story?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of successful clients who have trusted our expertise. 
            Let us guide you through every step of your immigration journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/book-consultation"
              className="inline-flex items-center bg-[#D4AF37] text-[#0D2F5B] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#B8972A] transition-all duration-300 transform hover:scale-105 group"
            >
              <span>Book a Consultation</span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.div>
            </Link>
            
            <Link
              href="/free-assessment"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0D2F5B] transition-all duration-300"
            >
              Free Assessment
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex justify-center items-center space-x-8 text-gray-300"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
              <span>24-48 Hour Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
              <span>Confidential Service</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}