"use client";

import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const { scrollY, scrollYProgress } = useScroll();
  const arrowOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [1, 0, 0, 1]
  );
  const arrowRotation = useTransform(scrollYProgress, [0.9, 1], [0, 180]);
  
  const handleArrowClick = () => {
    if (scrollYProgress.get() > 0.9) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    },
  };

  const textLineVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    },
  };

  const visionTitle = "Vision";
  const visionP1 = "The vision of AI-Lamp Research Lab is to pioneer groundbreaking research in the realm of augmented multimodal perception to build a future where AI-driven sensory augmentation empowers individuals to perceive and understand the world in unprecedented ways.";
  const visionP2 = "The program aspires young researchers to contribute to the development of technologies that enhance human potential, enrich daily experiences, and provide new insights into the nature of perception.";

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    },
  };
  
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
  };

  const visionSectionRef = useRef(null);
  const { scrollYProgress: visionScrollYProgress } = useScroll({
    target: visionSectionRef,
    offset: ["start end", "end start"]
  });
  const glyphY = useTransform(visionScrollYProgress, [0, 1], ["-20%", "20%"]);

  const researchScopes = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.5 17.5l-2.5-2.5m0 0l-2.5 2.5m2.5-2.5V13.5c0-1.1-.9-2-2-2h-2.5c-1.1 0-2 .9-2 2v1.5m0 2.5l2.5-2.5m0 0l2.5 2.5m-10-10l2.5 2.5m0 0l2.5-2.5m-2.5 2.5V10.5c0 1.1.9 2 2 2h2.5c1.1 0 2-.9 2-2V9m0-2.5l-2.5 2.5m0 0l-2.5-2.5" /></svg>
      ),
      text: "Multimodal, Cross-modal Learning Applications with Deep Neural Network",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
      ),
      text: "Computer vision and Pattern Analysis AI Model Development",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      text: "Multimedia and Digital Signal Processing Applications",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
      ),
      text: "Generative AI for Enhanced Human Perception Applications",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      text: "Multimedia and Digital Signal Processing Applications",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11v6l3-3m-6 0h6" /></svg>
      ),
      text: "Developing Cyber-physical Systems and the Internet of Things for Safety Applications",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <motion.header
        className="px-6 sm:px-12 lg:px-20 py-6 sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
              <motion.li 
                key={item}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">{item}</Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main>
        <section id="home" className="pt-16 pb-24 md:pt-20 md:pb-32 px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            
            <motion.div 
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease: [0.6, 0.01, 0.05, 0.95] }}
            >
              <Image src="/ai-lapm designs/1.gif" alt="Generative design element" width={400} height={400} />
            </motion.div>

            <motion.div 
              className="flex-1 text-center md:text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wider">AI-LAMP</span>
              </motion.div>
              <h1 className="font-extrabold tracking-tighter">
                <motion.span variants={textLineVariants} className="block text-4xl sm:text-5xl md:text-6xl text-gray-900">Artificial Intelligence Lab</motion.span>
                <motion.span variants={textLineVariants} className="block text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 my-3">for</motion.span>
                <motion.span variants={textLineVariants} className="block text-5xl sm:text-6xl md:text-7xl text-blue-600">Augmented Multimodal</motion.span>
                <motion.span variants={textLineVariants} className="block text-5xl sm:text-6xl md:text-7xl text-blue-600">Perception</motion.span>
              </h1>
              <motion.p variants={itemVariants} className="mt-8 text-lg max-w-2xl mx-auto md:mx-0 text-gray-600">
                Pioneering research in multimodal AI, from state-of-the-art video-to-audio generation to deep learning for human well-being.
              </motion.p>
              <motion.div 
                variants={itemVariants} 
                className="mt-12 flex items-center justify-center md:justify-start gap-x-4"
              >
                <motion.a
                  href="#"
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Explore Research
                </motion.a>
                <motion.a
                  href="#"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 hover:border-gray-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Get Involved
                </motion.a>
              </motion.div>
            </motion.div>

          </div>
        </section>

        <section id="vision" ref={visionSectionRef} className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
            <motion.div 
              className="flex-1 text-center md:text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2 
                className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-8"
                aria-label={visionTitle}
                variants={titleVariants}
              >
                {visionTitle.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6"
                variants={titleVariants}
              >
                {visionP1.split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
                    {word}
                  </motion.span>
                ))}
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                variants={titleVariants}
              >
                {visionP2.split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex-1 flex justify-center"
              style={{ y: glyphY }}
            >
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.6, ease: [0.6, 0.01, 0.05, 0.95] }}
              >
                <Image src="/ai-lapm designs/3.gif" alt="Generative design element 2" width={500} height={500} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="research" className="py-24 md:py-32 bg-white">
          <motion.div 
            className="container mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 text-center mb-16">
              Research Scopes
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {researchScopes.map((scope, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mr-6 flex-shrink-0">{scope.icon}</div>
                  <p className="text-gray-700 font-medium">{scope.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <motion.div 
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
        style={{ opacity: arrowOpacity, rotate: arrowRotation }}
        onClick={handleArrowClick}
      >
        <motion.svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </div>
  );
}
