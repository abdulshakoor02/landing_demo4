"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

interface Testimonial {
  id: string;
  clientName: string;
  title: string;
  location: string;
  rating: number;
  testimonial: string;
  date: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Dr. James Wilson",
    title: "Research Scientist",
    location: "Toronto, Canada",
    rating: 5,
    testimonial: "The expertise and dedication shown by the team was exceptional. They guided me through the entire Express Entry process, and I received my permanent residency in just 6 months. Couldn't be happier with the results!",
    date: "March 2024",
    service: "Express Entry",
  },
  {
    id: "2",
    clientName: "Maria Rodriguez",
    title: "Software Engineer",
    location: "San Francisco, USA",
    rating: 5,
    testimonial: "Professional, efficient, and incredibly knowledgeable. They helped me secure my H1-B visa and later my green card. The attention to detail and personal support made all the difference.",
    date: "February 2024",
    service: "Work Visa",
  },
  {
    id: "3",
    clientName: "Raj Patel",
    title: "Small Business Owner",
    location: "London, UK",
    rating: 5,
    testimonial: "Outstanding service from start to finish. The team was always available for questions and made the complex UK immigration process seem simple. Highly recommend their services!",
    date: "January 2024",
    service: "Business Visa",
  },
  {
    id: "4",
    clientName: "Dr. Anna Kowalski",
    title: "Medical Doctor",
    location: "Sydney, Australia",
    rating: 5,
    testimonial: "I was impressed by their thorough understanding of Australian migration law. They helped me get my skilled independent visa smoothly. Professional service with excellent communication.",
    date: "December 2023",
    service: "Skilled Migration",
  },
  {
    id: "5",
    clientName: "Chen Family",
    title: "Family Sponsorship",
    location: "Vancouver, Canada",
    rating: 5,
    testimonial: "They helped us reunite our family through the sponsorship program. The process was handled smoothly and efficiently. Thank you for making our dream come true!",
    date: "November 2023",
    service: "Family Sponsorship",
  },
  {
    id: "6",
    clientName: "Emma Thompson",
    title: "International Student",
    location: "Melbourne, Australia",
    rating: 5,
    testimonial: "From student visa application to PR pathway, they've been with me every step of the way. Their knowledge of education and immigration pathways is exceptional.",
    date: "October 2023",
    service: "Student Visa",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full"
      >
        {/* Client Avatar and Info */}
        <div className="flex items-center mb-4">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-heading text-xl mr-4"
            style={{
              background: `linear-gradient(to bottom right, #0D2F5B, #D4AF37)`,
            }}
          >
            {getInitials(testimonial.clientName)}
          </div>
          <div className="flex-1">
            <h4 className="font-heading font-semibold text-[#0D2F5B] text-lg">
              {testimonial.clientName}
            </h4>
            <p className="text-gray-600 text-sm">{testimonial.title}</p>
            <p className="text-gray-400 text-sm">{testimonial.location}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating
                  ? "text-[#D4AF37] fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-3 text-sm text-gray-500">
            {testimonial.rating.toFixed(1)}
          </span>
        </div>

        {/* Testimonial Text */}
        <div className="mb-4">
          <div className="relative">
            <span className="text-4xl text-[#D4AF37] opacity-50 font-heading absolute -top-2 -left-2">&ldquo;</span>
            <p className="text-gray-700 leading-relaxed italic pl-4 pr-2">
              {testimonial.testimonial}
            </p>
            <span className="text-4xl text-[#D4AF37] opacity-50 font-heading absolute -bottom-4 -right-2">&rdquo;</span>
          </div>
        </div>

        {/* Service and Date */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="bg-[#D4AF37] text-[#0D2F5B] px-3 py-1 rounded-full text-sm font-medium">
            {testimonial.service}
          </span>
          <span className="text-xs text-gray-400">
            {testimonial.date}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-semibold text-[#0D2F5B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read real testimonials from satisfied clients who achieved their immigration goals with our help.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-[#0D2F5B]">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-[#0D2F5B]">5000+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-[#0D2F5B]">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-8 h-8 text-[#D4AF37] fill-current" />
            ))}
          </div>
          <p className="text-gray-600">Rated 5 out of 5 stars by our valued clients</p>
        </motion.div>
      </div>
    </section>
  );
}