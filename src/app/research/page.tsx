"use client";

import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResearchPage() {
  const projects = [
    {
      title: "Vision Assist",
      researchers: "Aditya Bangde, Atharva Walawalkar",
      description: "This innovative project focuses on empowering visually impaired individuals through a wearable assistance system. The technology enhances environmental awareness and navigation by providing real-time guidance and obstacle detection. Users can receive intuitive feedback about their surroundings and request contextual information, enabling safer and more independent mobility in unfamiliar environments. The system represents a significant step forward in accessibility technology, helping users navigate the world with greater confidence and independence.",
      image: "/Headshots/image2.jpg",
      imageAlt: "Vision Assist project visualization"
    },
    {
      title: "EEG-Based Brain-to-Speech System",
      researchers: "Aditya Bangde",
      description: "This groundbreaking project addresses communication challenges for individuals with severe physical disabilities by creating a bridge between brain activity and speech. The system captures neural signals through a non-invasive interface and translates them into spoken words, offering users a natural and intuitive way to express themselves. By eliminating the need for physical movement, this technology opens new possibilities for communication and self-expression, potentially transforming the lives of those who have been unable to communicate effectively.",
      image: "/Headshots/image1.jpg",
      imageAlt: "EEG Brain-to-Speech system visualization"
    },
    {
      title: "AMAVA: Adaptive Motion-Aware Video-to-Audio Framework",
      researchers: "Benjamin Klein, Kazi Ruslan Rahman",
      description: "AMAVA represents a breakthrough in assistive technology, designed specifically to address the navigation challenges faced by visually impaired individuals in dynamic environments. The system operates as an intelligent companion that continuously monitors the user's surroundings through video input, analyzing the level of movement and activity in real-time to determine the most appropriate form of audio assistance. By distinguishing between static scenes and dynamic situations, AMAVA adapts its response to provide exactly what the user needs when they need it most. During quiet, stationary moments, the system offers gentle, descriptive audio that helps users understand their environment without overwhelming them. When movement is detected or obstacles are present, it switches to urgent, focused alerts that prioritize safety and immediate awareness, helping users navigate confidently through complex spaces while maintaining their independence and reducing cognitive overload.",
      image: "/Headshots/amava pic.png",
      imageAlt: "AMAVA system visualization"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col text-gray-800 font-sans bg-gray-50">
      <motion.header
        className="px-6 sm:px-12 lg:px-20 py-6 sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <nav className="flex justify-between items-center p-3 sm:p-4 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/80">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/ai-lapm logo.png" alt="AI-LAMP Logo" width={32} height={32} />
            <span className="text-lg font-bold tracking-tight">AI-LAMP</span>
            <div className="h-6 w-px bg-gray-300"></div>
            <Image src="/channels4_profile.jpg" alt="SFSU Logo" width={32} height={32} className="rounded-full" />
          </motion.div>
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {[
              "Home",
              "About",
              "People",
              "Research",
              "Gallery",
              "Events",
              "Contact",
            ].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main className="flex-grow flex flex-col items-center justify-center pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "circOut" }}
        >
          Research Projects
        </motion.h1>
        
        <div className="w-full max-w-[90vw] mx-auto grid gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg p-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Project Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{project.title}</h2>
                <p className="text-lg text-blue-600 font-medium">{project.researchers}</p>
              </div>

              {/* Project Description */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Project Overview
                </h3>
                <p className="text-base leading-relaxed text-gray-700">{project.description}</p>
              </div>

              {/* Project Images - Full Width */}
              <div className="space-y-8">
                {/* For AMAVA project, show both images side by side */}
                {project.title.includes("AMAVA") ? (
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">AMAVA System Overview</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                      <div>
                        <h5 className="text-md font-medium text-gray-700 mb-2">Visualization Example</h5>
                        <Image 
                          src={project.image} 
                          alt="AMAVA Visualization Example"
                          width={1800} 
                          height={1350} 
                          className="w-full h-auto object-contain rounded-xl shadow-lg" 
                        />
                      </div>
                      <div>
                        <h5 className="text-md font-medium text-gray-700 mb-2">System Architecture</h5>
                        <Image 
                          src="/Headshots/Flowchart_3.png" 
                          alt="AMAVA System Flowchart"
                          width={1800} 
                          height={1350} 
                          className="w-full h-auto object-contain rounded-xl shadow-lg" 
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* For other projects, show single image */
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Project Visualization</h4>
                    <div className={`w-full mx-auto ${project.title.includes("Vision Assist") ? 'max-w-sm' : 'max-w-2xl'}`}>
                      <Image 
                        src={project.image} 
                        alt={project.imageAlt}
                        width={project.title.includes("Vision Assist") ? 300 : 800} 
                        height={project.title.includes("Vision Assist") ? 225 : 600} 
                        className={`w-full h-auto object-contain rounded-xl shadow-lg ${project.title.includes("Vision Assist") ? 'transform rotate-90' : ''}`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
} 