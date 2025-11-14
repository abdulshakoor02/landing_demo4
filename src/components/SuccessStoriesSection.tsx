'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SuccessStoriesSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Sample story data (will be replaced with actual data)
  const stories = [
    {
      id: 1,
      category: 'Skilled Worker',
      title: 'From Engineer to Tech Lead in Toronto',
      description: 'Maria secured a skilled worker visa and now leads a team at a major tech company in Toronto.',
      metrics: 'Processing Time: 6 months',
      image: '/images/stories/story1.jpg',
    },
    {
      id: 2,
      category: 'Family Visa',
      title: 'Reuniting a Family in Vancouver',
      description: 'The Johnson family was successfully reunited after a complex multi-visa application process.',
      metrics: 'Visas Processed: 4',
      image: '/images/stories/story2.jpg',
      featured: true,
    },
    {
      id: 3,
      category: 'Student Visa',
      title: 'Scholarship to Harvard Business School',
      description: 'Ahmed secured a full scholarship and student visa to pursue his MBA at Harvard Business School.',
      metrics: 'Scholarship Value: $200,000',
      image: '/images/stories/story3.jpg',
    },
    {
      id: 4,
      category: 'Investor Visa',
      title: 'Launching a Startup in Silicon Valley',
      description: 'Sofia used her investor visa to launch a successful fintech startup in Silicon Valley.',
      metrics: 'Investment: $500,000',
      image: '/images/stories/story4.jpg',
    },
    {
      id: 5,
      category: 'Family Visa',
      title: 'Grandparents Reunite with Grandchildren',
      description: 'After years of separation, grandparents were able to join their family through our family visa services.',
      metrics: 'Processing Time: 8 months',
      image: '/images/stories/story5.jpg',
    },
    {
      id: 6,
      category: 'Skilled Worker',
      title: 'Medical Professional in London',
      description: 'Dr. Chen successfully transferred his medical license and relocated to work in the NHS.',
      metrics: 'Licenses Transferred: 2',
      image: '/images/stories/story6.jpg',
      featured: true,
    },
  ];

  // Tab categories
  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'skilled', name: 'Skilled Worker Programs' },
    { id: 'family', name: 'Family Sponsorship' },
    { id: 'investor', name: 'Investor & Business Visas' },
    { id: 'student', name: 'Student Visas' },
  ];

  // Filter stories based on active tab
  const filteredStories = activeTab === 'all' 
    ? stories 
    : stories.filter(story => {
        if (activeTab === 'skilled') return story.category === 'Skilled Worker';
        if (activeTab === 'family') return story.category === 'Family Visa';
        if (activeTab === 'investor') return story.category === 'Investor Visa';
        if (activeTab === 'student') return story.category === 'Student Visa';
        return true;
      });

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Sticky Content */}
          <motion.div 
            className="lg:w-2/5 lg:sticky lg:top-20 lg:self-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0D2F5B] mb-6">
              Client Success Stories
            </h2>
            
            <p className="text-lg text-[#64748B] mb-8 font-lato">
              Real journeys, real results. Discover how we've helped UAE residents achieve their visa goals across the globe.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-[#D4AF37] rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0D2F5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-lg text-[#0D2F5B]">98% Success Rate</h3>
                  <p className="text-[#64748B] font-lato">Industry-leading approval rate for complex cases</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#D4AF37] rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0D2F5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-lg text-[#0D2F5B]">Average 4 Months</h3>
                  <p className="text-[#64748B] font-lato">Faster processing times than industry average</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#D4AF37] rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0D2F5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-lg text-[#0D2F5B]">10,000+ Families</h3>
                  <p className="text-[#64748B] font-lato">Helped build futures across 50+ countries</p>
                </div>
              </div>
            </div>
            
            <motion.button
              className="bg-[#0D2F5B] text-white font-poppins font-semibold px-6 py-3 rounded-full hover:bg-[#0a2547] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Success Stories
            </motion.button>
          </motion.div>
          
          {/* Right Column - Scrollable Masonry Grid */}
          <div className="lg:w-3/5">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E2E8F0] pb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full font-lato text-sm font-medium transition-colors duration-300 ${
                    activeTab === category.id
                      ? 'bg-[#0D2F5B] text-white'
                      : 'text-[#64748B] hover:bg-[#F1F5F9]'
                  }`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Masonry Grid */}
            <div 
              ref={rightColumnRef}
              className="overflow-y-auto max-h-[calc(100vh-120px)] pr-4"
              style={{ scrollbarWidth: 'thin' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    className="bg-white rounded-xl shadow-lg border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-[#0D2F5B]/10 text-[#0D2F5B] text-xs font-semibold px-3 py-1 rounded-full font-lato">
                          {story.category}
                        </span>
                        {story.featured && (
                          <span className="bg-[#D4AF37] text-[#0D2F5B] text-xs font-semibold px-3 py-1 rounded-full font-lato">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-bold font-poppins text-lg text-[#0D2F5B] mb-2">
                        {story.title}
                      </h3>
                      
                      <p className="text-[#64748B] mb-4 font-lato">
                        {story.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-[#0D2F5B] font-semibold font-lato">
                          {story.metrics}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D2F5B]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;