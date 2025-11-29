'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', mobile: '', message: '' });
        setTimeout(() => {
          onClose();
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10 z-50"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col">
                {/* Header */}
                <div className="bg-[#0D2F5B] p-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                  <h2 className="text-2xl font-bold text-white font-poppins mb-2 relative z-10">Get in Touch</h2>
                  <p className="text-blue-100 text-sm font-lato relative z-10">
                    Fill out the form below and our visa experts will get back to you shortly.
                  </p>
                </div>

                {/* Form */}
                <div className="p-6 md:p-8">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-lato">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D2F5B] focus:border-transparent outline-none transition-all font-lato text-gray-900 placeholder-gray-400"
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-lato">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D2F5B] focus:border-transparent outline-none transition-all font-lato text-gray-900 placeholder-gray-400"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1 font-lato">Mobile Number</label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D2F5B] focus:border-transparent outline-none transition-all font-lato text-gray-900 placeholder-gray-400"
                        placeholder="+971 (555) 123-4567"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-lato">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D2F5B] focus:border-transparent outline-none transition-all font-lato text-gray-900 placeholder-gray-400 resize-none"
                        placeholder="How can we help you?"
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    {submitMessage && (
                      <div className={`p-3 rounded-lg text-sm text-center ${
                        submitMessage.includes('successfully') 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                        {submitMessage}
                      </div>
                    )}

                    <motion.button
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 font-poppins mt-2 ${
                        isSubmitting 
                          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                          : 'bg-[#D4AF37] text-[#0D2F5B] hover:bg-[#c0a030]'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>

                  <p className="text-xs text-center text-gray-500 mt-4 font-lato">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
