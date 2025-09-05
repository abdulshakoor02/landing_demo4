"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { StarIcon, CheckIcon } from "@heroicons/react/24/solid";

interface SuccessStory {
  id: string;
  clientName: string;
  category: string;
  achievement: string;
  timeline: string;
  successRate: string;
  image: string;
  gradient: {
    from: string;
    to: string;
  };
  tags: string[];
}

const successStories: SuccessStory[] = [
  {
    id: "1",
    clientName: "Dr. Sarah Chen",
    category: "Skilled Worker",
    achievement: "Express Entry - Permanent Residency",
    timeline: "6 months",
    successRate: "100%",
    image: "/success-1.jpg",
    gradient: { from: "#4F46E5", to: "#7C3AED" },
    tags: ["Canada", "Medical Professional", "Express Entry"],
  },
  {
    id: "2",
    clientName: "The Johnson Family",
    category: "Family Sponsorship",
    achievement: "Family Reunification - PR Status",
    timeline: "8 months",
    successRate: "98%",
    image: "/success-2.jpg",
    gradient: { from: "#059669", to: "#10B981" },
    tags: ["Family", "Sponsorship", "Permanent Residency"],
  },
  {
    id: "3",
    clientName: "Marcus Rodriguez",
    category: "Investment Visa",
    achievement: "EB-5 Investor Visa - USA",
    timeline: "18 months",
    successRate: "95%",
    image: "/success-3.jpg",
    gradient: { from: "#DC2626", to: "#EF4444" },
    tags: ["USA", "Investment", "Business Immigration"],
  },
  {
    id: "4",
    clientName: "Priya Sharma",
    category: "Student Visa",
    achievement: "Study Permit - Master's Degree",
    timeline: "3 months",
    successRate: "99%",
    image: "/success-4.jpg",
    gradient: { from: "#EC4899", to: "#F472B6" },
    tags: ["Canada", "Student Visa", "Education"],
  },
  {
    id: "5",
    clientName: "Ahmed Hassan",
    category: "Skilled Worker",
    achievement: "Skills Assessment - Australia",
    timeline: "4 months",
    successRate: "97%",
    image: "/success-5.jpg",
    gradient: { from: "#0891B2", to: "#06B6D4" },
    tags: ["Australia", "Skilled Migration", "Engineering"],
  },
  {
    id: "6",
    clientName: "Elena Petrov",
    category: "Citizenship",
    achievement: "Naturalization - UK Citizenship",
    timeline: "5 years",
    successRate: "92%",
    image: "/success-6.jpg",
    gradient: { from: "#7C2D12", to: "#92400E" },
    tags: ["UK", "Citizenship", "Naturalization"],
  },
];

const categories = [
  { id: "all", name: "All Stories", count: successStories.length },
  { id: "skilled-worker", name: "Skilled Worker Programs", count: successStories.filter(s => s.category === "Skilled Worker").length },
  { id: "family-sponsorship", name: "Family Sponsorship", count: successStories.filter(s => s.category === "Family Sponsorship").length },
  { id: "investment-visa", name: "Investor & Business Visas", count: successStories.filter(s => s.category === "Investment Visa").length },
  { id: "student-visa", name: "Student Visas", count: successStories.filter(s => s.category === "Student Visa").length },
  { id: "citizenship", name: "Citizenship Applications", count: successStories.filter(s => s.category === "Citizenship").length },
];

function SuccessCard({ story, index }: { story: SuccessStory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Folder Tab Effect */}
      <div className="absolute -top-2 left-0 right-0 h-4 bg-white rounded-t-lg mx-4 opacity-80" />
      <div className="absolute -top-4 left-0 right-0 h-4 bg-white rounded-t-lg mx-8 opacity-60" />
      
      <motion.div
        className="relative bg-white rounded-b-2xl shadow-xl p-6 border transition-all duration-300"
        style={{
          borderTopColor: story.gradient.from,
          borderTopWidth: "3px",
        }}
        whileHover={{ 
          y: -8, 
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Category Tag */}
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `${story.gradient.from}20`,
              color: story.gradient.from,
            }}
          >
            {story.category}
          </span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-[#D4AF37]"
          >
            <StarIcon className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Client Avatar */}
        <div className="mb-4">
          <div 
            className="w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-heading text-xl"
            style={{
              background: `linear-gradient(to bottom right, ${story.gradient.from}, ${story.gradient.to})`,
            }}
          >
            {story.clientName.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        {/* Content */}
        <h4 className="text-xl font-heading font-semibold text-[#0D2F5B] mb-2">
          {story.clientName}
        </h4>
        
        <p className="text-gray-600 mb-4">
          {story.achievement}
        </p>

        {/* Key Metrics */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Timeline:</span>
            <span className="font-semibold text-[#D4AF37]">{story.timeline}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Success Rate:</span>
            <div className="flex items-center">
              <span className="font-semibold text-green-600 mr-1">{story.successRate}</span>
              <CheckIcon className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {story.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SuccessStories() {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const filteredStories = activeCategory === "all" 
    ? successStories 
    : successStories.filter(story => {
        if (activeCategory === "skilled-worker" && story.category === "Skilled Worker") return true;
        if (activeCategory === "family-sponsorship" && story.category === "Family Sponsorship") return true;
        if (activeCategory === "investment-visa" && story.category === "Investment Visa") return true;
        if (activeCategory === "student-visa" && story.category === "Student Visa") return true;
        if (activeCategory === "citizenship" && story.category === "Citizenship") return true;
        return false;
      });

  const handleScroll = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop += e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Sticky Content */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-semibold text-[#0D2F5B] mb-6">
                Client Success Stories
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Real results from real clients who trusted our expertise to navigate their immigration journey.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">98%</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D2F5B]">Success Rate</div>
                    <div className="text-sm text-gray-500">Client satisfaction</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0D2F5B] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">5000+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D2F5B]">Happy Clients</div>
                    <div className="text-sm text-gray-500">Success stories</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">15+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D2F5B]">Years Experience</div>
                    <div className="text-sm text-gray-500">Industry expertise</div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="hidden lg:flex items-center text-gray-400">
                <div className="w-1 h-16 bg-gray-300 rounded-full mr-3" />
                <span className="text-sm">Scroll to view more stories →</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="lg:col-span-8">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-[#D4AF37] text-[#0D2F5B] shadow-md"
                        : "bg-white text-gray-600 hover:bg-[#0D2F5B] hover:text-white"
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Masonry Grid */}
            <motion.div
              ref={scrollContainerRef}
              onWheel={handleScroll}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#D4AF37] scrollbar-track-gray-200 pr-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {filteredStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={index % 3 === 0 ? "md:col-span-2" : ""}
                  >
                    <SuccessCard story={story} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}