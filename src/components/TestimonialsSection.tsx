'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonial data (will be replaced with actual data)
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Toronto, Canada',
      quote: 'The team at ImmigrationPro made our family\'s relocation process seamless. Their expertise and attention to detail were exceptional. We couldn\'t have done it without them!',
      rating: 5,
      image: '/images/testimonials/sarah-johnson.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'London, UK',
      quote: 'As a skilled worker, I was nervous about the visa process. ImmigrationPro guided me through every step with clarity and professionalism. I highly recommend their services.',
      rating: 5,
      image: '/images/testimonials/michael-chen.jpg',
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      location: 'Sydney, Australia',
      quote: 'Thanks to ImmigrationPro, I was able to secure my student visa and scholarship. Their support extended beyond just the paperwork - they truly cared about my future.',
      rating: 5,
      image: '/images/testimonials/elena-rodriguez.jpg',
    },
    {
      id: 4,
      name: 'David Kim',
      location: 'Seoul, South Korea',
      quote: 'The business immigration process seemed daunting, but ImmigrationPro made it straightforward. Their strategic approach helped us expand internationally successfully.',
      rating: 5,
      image: '/images/testimonials/david-kim.jpg',
    },
    {
      id: 5,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      quote: 'As a medical professional, the licensing and visa process was complex. ImmigrationPro\'s specialized knowledge in my field made all the difference in my successful relocation.',
      rating: 5,
      image: '/images/testimonials/priya-sharma.jpg',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-[#F1F5F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0D2F5B] mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto font-lato">
            Hear from individuals and families who have successfully achieved their immigration goals with our help
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0D2F5B] text-white rounded-full p-2 hover:bg-[#0a2547] transition-colors duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0D2F5B] text-white rounded-full p-2 hover:bg-[#0a2547] transition-colors duration-300 z-10"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 ${i < testimonials[currentIndex].rating ? 'text-[#D4AF37]' : 'text-[#CBD5E1]'}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-[#0D2F5B] font-lato mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={`${testimonials[currentIndex].name} - ${testimonials[currentIndex].location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold font-poppins text-lg text-[#0D2F5B]">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-[#64748B] font-lato">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-[#D4AF37]' : 'bg-[#CBD5E1]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Grid for smaller screens */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.location}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold font-poppins text-[#0D2F5B]">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-[#64748B] font-lato">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-[#D4AF37]" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[#64748B] text-sm font-lato">
                  {testimonial.quote.substring(0, 100)}...
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;