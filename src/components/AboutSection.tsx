'use client';

import { motion } from 'framer-motion';

interface AboutSectionProps {
  onBookConsultation?: () => void;
}

const AboutSection = ({ onBookConsultation }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0D2F5B] mb-6">
              About <span className="text-[#D4AF37]">The Visa Guy</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-[#475569] font-lato leading-relaxed">
              <span className="text-[#0D2F5B] font-semibold">The Visa Guy</span> is a trusted visa service in Dubai that provides global visa assistance to citizens and residents in the UAE. With Visa Guy, you can find answers to your visa questions and ensure you get the most value for your money in your visa application process.
            </p>

            <p className="text-lg text-[#475569] font-lato leading-relaxed">
              Operating from Dubai and Abu Dhabi, we specialize in making visa applications stress-free for UAE residents. Our door-step service delivers exceptional visa assistance right to your location, preparing documents and handling submissions with professional expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-xl font-bold font-poppins text-[#0D2F5B] mb-2">Door-Step Service</h3>
                <p className="text-[#475569] font-lato">
                  We come to your location in Dubai or Abu Dhabi for document collection and consultation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-bold font-poppins text-[#0D2F5B] mb-2">75+ Countries</h3>
                <p className="text-[#475569] font-lato">
                  Comprehensive visa assistance for destinations across Europe, Asia, and beyond
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-bold font-poppins text-[#0D2F5B] mb-2">Free Consultation</h3>
                <p className="text-[#475569] font-lato">
                  Expert guidance tailored to your specific visa requirements at no cost
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-[#0D2F5B] to-[#1a3d6b] p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold font-poppins mb-4">
                From Dubai to the World
              </h3>
              <p className="text-lg font-lato leading-relaxed mb-6">
                Our mission is to simplify the visa application process for UAE residents, whether you're traveling for tourism, business, or family visits. We handle the complexities so you can focus on planning your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-[#D4AF37] text-[#0D2F5B] font-poppins font-semibold px-6 py-3 rounded-full hover:bg-[#c0a030] transition-colors duration-300"
                  onClick={onBookConsultation}
                >
                  Book Free Consultation
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-poppins font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                  Chat with Visa Expert
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
