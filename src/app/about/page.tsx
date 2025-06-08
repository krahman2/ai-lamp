"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function AboutPage() {
  const researchScopes = [
    {
      icon: "🔄",
      title: "Video-to-Audio Generation",
      description:
        "Using diffusion models, we generate realistic soundtracks from silent video to enhance virtual experiences and media production.",
    },
    {
      icon: "🎧",
      title: "Sound Design for Accessibility",
      description:
        "We develop AI-generated sound effects (SFX) to support users with visual impairments, enabling richer and more informative audio feedback.",
    },
    {
      icon: "🧠",
      title: "Multimodal and Cross-Modal Learning",
      description:
        "Our models integrate data from multiple sensory sources to improve perception and contextual understanding in complex environments.",
    },
    {
      icon: "👁️",
      title: "Computer Vision and Pattern Analysis",
      description:
        "We train models to detect, interpret, and learn patterns from visual inputs for applications in recognition, tracking, and analysis.",
    },
    {
      icon: "📡",
      title: "Spatial Audio and Sound Localization",
      description:
        "Research in 3D audio and localization helps simulate realistic sound environments, enhancing virtual reality and assistive technologies.",
    },
    {
      icon: "🎞️",
      title: "Automated Foley & Sound Design",
      description:
        "Automating foley creation and sound design by generating realistic sound effects for multimedia content based on visual cues.",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
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
            <Image
              src="/ai-lapm logo.png"
              alt="AI-LAMP Logo"
              width={32}
              height={32}
            />
            <span className="text-lg font-bold tracking-tight">AI-LAMP</span>
            <div className="h-6 w-px bg-gray-300"></div>
            <Image
              src="/channels4_profile.jpg"
              alt="SFSU Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </motion.div>
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {["Home", "About", "People", "Research", "Gallery", "Events"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </nav>
      </motion.header>

      <main ref={containerRef} className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.section
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95], delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl font-extrabold text-gray-900 tracking-tighter mb-6"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {"About".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              AI-LAMP is a research lab at San Francisco State University that focuses on research in augmented multimodal perception,
              developing deep networks and models that interpret and integrate
              information from multiple sensory inputs. Our work enhances AI's
              ability to understand complex environments, pushing the boundaries
              of its impact in areas from accessibility and media to safety.
            </motion.p>
            <motion.div style={{ y: imageY }}>
              <Image
                src="/ai-lapm designs/6.gif"
                alt="Generative design element"
                width={500}
                height={500}
                unoptimized
              />
            </motion.div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-12 tracking-tight"
              variants={titleVariants}
            >
              {"Research Scopes".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {researchScopes.map((scope) => (
                <motion.div
                  key={scope.title}
                  className="flex items-start space-x-6 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="text-3xl flex-shrink-0 mt-1 transition-transform duration-500 ease-out group-hover:rotate-12"
                  >
                    {scope.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {scope.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {scope.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <section id="mission" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-extrabold text-gray-900 tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 leading-loose max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Our research lab is focused on accessibility and well-being,
            utilizing state-of-the-art video-to-audio generative models
            to develop AI-driven technologies that enhance human perception.
          </motion.p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <h3 className="text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-loose">
              AI-Lamp Research Team is committed to developing innovative AI-driven technologies that expand the boundaries of human perception, enabling individuals to interact with and comprehend their environment
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <Image
              src="/ai-lapm designs/2.gif"
              alt="Creative mission visual"
              width={400}
              height={400}
              unoptimized
            />
          </motion.div>
        </div>
      </section>
      
      <div className="text-center py-16">
        <Link href="#footer" scroll={true}>
          <motion.div
            className="inline-block cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </Link>
      </div>

      <footer id="footer" className="text-center py-8">
        <p className="text-gray-500">&copy; 2025 AI-LAMP. All rights reserved.</p>
      </footer>
    </div>
  );
} 