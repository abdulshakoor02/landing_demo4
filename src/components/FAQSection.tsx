'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Sample FAQ data (will be replaced with actual data)
  const faqs = [
    {
      id: 1,
      question: 'How long does the immigration process typically take?',
      answer: 'The immigration process varies significantly depending on the country, visa type, and individual circumstances. Generally, it can take anywhere from 3 months to 2 years. We provide personalized timelines during our initial consultation based on your specific situation.'
    },
    {
      id: 2,
      question: 'What documents do I need to start the application process?',
      answer: 'Required documents vary by visa type and country, but generally include: passport, educational credentials, employment records, financial statements, medical examinations, and police certificates. We provide a comprehensive checklist during our initial consultation.'
    },
    {
      id: 3,
      question: 'Can I apply for immigration if I don\'t have a job offer?',
      answer: 'Yes, many countries offer immigration pathways without a job offer, including skilled worker programs, investor visas, and student pathways. Our team will assess your qualifications to identify the best options for your situation.'
    },
    {
      id: 4,
      question: 'How much does the immigration process cost?',
      answer: 'Costs vary based on the complexity of your case, destination country, and services required. Government fees typically range from $1,000-$5,000, while professional services depend on case complexity. We provide transparent pricing during our consultation.'
    },
    {
      id: 5,
      question: 'What happens if my application is refused?',
      answer: 'If your application is refused, we analyze the reasons and explore options such as appeals, re-applications with additional documentation, or alternative pathways. Our team has extensive experience with complex cases and refusals.'
    },
    {
      id: 6,
      question: 'Do you guarantee approval of my application?',
      answer: 'While we cannot guarantee approval due to government discretion, we maintain a 98% success rate by ensuring complete documentation, thorough preparation, and expert guidance. Our transparent approach includes realistic assessments of your chances.'
    }
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#F1F5F9]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0D2F5B] mb-4">
              Your Questions, Answered
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto font-lato">
              Find answers to common questions about our immigration services and processes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleQuestion(faq.id)}
                  aria-expanded={openQuestion === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <h3 className="font-bold font-poppins text-lg text-[#0D2F5B]">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-6 w-6 text-[#D4AF37] transition-transform duration-300 ${
                        openQuestion === faq.id ? 'rotate-45' : ''
                      }`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openQuestion === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-[#64748B] font-lato">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#64748B] mb-6 font-lato">
              Still have questions? Our team is here to help.
            </p>
            <motion.button
              className="bg-[#0D2F5B] text-white font-poppins font-semibold px-8 py-4 rounded-full hover:bg-[#0a2547] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for a Consultation
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;