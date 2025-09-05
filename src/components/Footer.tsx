"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ArrowUpIcon 
} from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Marquee Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 border-b border-gray-800 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50" />
        <motion.div
          className="flex whitespace-nowrap text-2xl lg:text-3xl font-bold text-[#D4AF37]"
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
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
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex items-center px-8">
              Let&apos;s Work Together • Let&apos;s Work Together *
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-6"
            >
              <Link href="#home" className="flex items-center">
                <div className="text-white font-bold text-2xl tracking-tight">
                  Immigration
                  <span className="text-[#D4AF37]">Consultancy</span>
                </div>
              </Link>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner in navigating immigration processes worldwide. 
              We transform dreams into reality with expert guidance and personalized solutions.
            </p>

            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-[#0D2F5B] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300"
                  title={`Follow us on ${platform}`}
                >
                  <span className="text-xs font-semibold">
                    {platform[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-[#D4AF37]">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "Success Stories", href: "#success-stories" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.div key={item.name} whileHover={{ x: 4 }}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    → {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 3: Immigration Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-[#D4AF37]">
              Immigration Services
            </h3>
            <div className="space-y-3">
              {[
                "Skilled Worker Programs",
                "Family Sponsorship",
                "Investor & Business Visas",
                "Student Visas",
                "Citizenship Applications",
                "Express Entry",
                "Provincial Nominee Programs",
              ].map((service) => (
                <motion.div key={service} whileHover={{ x: 4 }}>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    → {service}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-[#D4AF37]">
              Contact Info
            </h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ scale: 1.02 }}
              >
                <MapPinIcon className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white mb-1">Office Address</div>
                  <div className="text-gray-300 text-sm">
                    123 Immigration Plaza<br />
                    Suite 456, Business District<br />
                    Toronto, ON M5V 1M1<br />
                    Canada
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ scale: 1.02 }}
              >
                <PhoneIcon className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white mb-1">Phone</div>
                  <div className="text-gray-300 text-sm">
                    <motion.a
                      href="tel:+1234567890"
                      whileHover={{ color: "#D4AF37" }}
                      className="transition-colors duration-200"
                    >
                      +1 (234) 567-8900
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ scale: 1.02 }}
              >
                <EnvelopeIcon className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white mb-1">Email</div>
                  <div className="text-gray-300 text-sm">
                    <motion.a
                      href="mailto:info@immigrationconsultancy.com"
                      whileHover={{ color: "#D4AF37" }}
                      className="transition-colors duration-200"
                    >
                      info@immigrationconsultancy.com
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Operating Hours */}
            <motion.div 
              className="mt-6 p-4 bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium text-[#D4AF37] mb-2">Office Hours</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Immigration Consultancy. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors duration-200">
                Disclaimer
              </Link>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 w-12 h-12 bg-[#D4AF37] text-[#0D2F5B] rounded-full flex items-center justify-center shadow-lg hover:bg-[#B8972A] transition-colors duration-300 z-50"
            >
              <ArrowUpIcon className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}