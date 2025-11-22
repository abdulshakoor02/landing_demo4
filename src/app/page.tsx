'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useScrollProgress from '@/hooks/useScrollProgress';

// Dynamically import components with lazy loading
const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: true });
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: true });
const PartnersMarquee = dynamic(() => import('@/components/PartnersMarquee'), { ssr: true });
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), { ssr: true });
const SuccessStoriesSection = dynamic(() => import('@/components/SuccessStoriesSection'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { ssr: true });
const CountriesSection = dynamic(() => import('@/components/CountriesSection'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/FAQSection'), { ssr: true });
const FinalCTASection = dynamic(() => import('@/components/FinalCTASection'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const ContactModal = dynamic(() => import('@/components/ContactModal'), { ssr: false });
const FloatingActionButtons = dynamic(() => import('@/components/FloatingActionButtons'), { ssr: false });

export default function Home() {
  const scrollProgress = useScrollProgress();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open modal after 2 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#D4AF37] z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Floating Action Buttons */}
      <FloatingActionButtons onEnquire={() => setIsModalOpen(true)} />

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Header */}
      <Header onBookConsultation={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <HeroSection onBookConsultation={() => setIsModalOpen(true)} />

      {/* About Section */}
      <AboutSection onBookConsultation={() => setIsModalOpen(true)} />

      {/* Partners Marquee */}
      <PartnersMarquee />

      {/* Services Section */}
      <ServicesSection />

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Countries Section */}
      <CountriesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection onBookConsultation={() => setIsModalOpen(true)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}