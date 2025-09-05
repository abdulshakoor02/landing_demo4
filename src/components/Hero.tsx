"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Animate content when video is loaded
    if (videoLoaded) {
      controls.start("visible");
    }
  }, [videoLoaded, controls]);

  const headlineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  } as const;

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const subtextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const shimmerEffect = {
    backgroundImage: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
    backgroundSize: "1000px 100%",
    animation: "shimmer 2s infinite linear",
  };

  const headline = "Your Gateway to a New Beginning";
  const words = headline.split(" ");

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#0D2F5B] opacity-20 rounded-full blur-3xl animate-bounce" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto px-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Main Headline */}
        <motion.h1
          variants={headlineVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={subtextVariants}
          className="text-xl md:text-2xl text-white mb-4 leading-relaxed max-w-2xl mx-auto"
        >
          Expert guidance for your global immigration journey. We turn aspirations into reality.
        </motion.p>

        {/* Social Proof */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 1.2, duration: 0.6, ease: "easeOut" },
            },
          }}
          className="text-[#D4AF37] text-sm mb-8 font-medium"
        >
          *Recognized by Official Immigration Body & Featured in Major News Outlet*
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 1.4, duration: 0.6, ease: "easeOut" },
            },
          }}
          className="relative bg-[#D4AF37] text-[#0D2F5B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8972A] transition-all duration-300 transform hover:scale-105 group overflow-hidden"
          style={shimmerEffect}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(212, 175, 55, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div className="relative flex items-center space-x-2">
            <span>Start Your Journey</span>
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.button>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.8 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-[1px] h-8 bg-white mt-2 opacity-50" />
        </div>
      </motion.div>
    </section>
  );
}