'use client';

import { motion } from 'framer-motion';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-[#0D2F5B] relative overflow-hidden">
      {/* Background pattern/world map (subtle) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37] blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#D4AF37] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Immigration Story?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#F1F5F9] mb-10 max-w-2xl mx-auto font-lato"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take the first step toward your new beginning. Schedule a consultation with our experts today.
          </motion.p>
          
          <motion.button
            className="bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#c0a030] transition-colors duration-300 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;