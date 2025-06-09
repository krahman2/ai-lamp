"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, FC, ElementType } from "react";
import Footer from "@/components/Footer";

interface AnimatedTextProps {
  text: string;
  el?: ElementType;
  className?: string;
}

const AnimatedText: FC<AnimatedTextProps> = ({ text, el: Wrapper = "p", className }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        {text.split("\n").map((line, index) => (
          <motion.span key={index} variants={lineVariants} className="block">
            {line}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

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
        staggerChildren: 0.05,
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

  const text = "AI-LAMP is a research lab at San Francisco State University that focuses on research in augmented multimodal perception, developing deep networks and models that interpret and integrate information from multiple sensory inputs. Our work enhances AI's ability to understand complex environments, pushing the boundaries of its impact in areas from accessibility and media to safety.";

  interface ResearchScope {
    title: string;
    icon: string;
    description: string;
  }
  
  function ResearchScopeCard({ scope }: { scope: ResearchScope }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={ref}
        key={scope.title}
        className="flex items-start space-x-6 group p-6 rounded-2xl bg-gray-50/50 transition-all duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)", backgroundColor: "#FFFFFF" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="text-3xl flex-shrink-0 mt-1"
          animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
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
    )
  }

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
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95], delay: 0.2 }}
            className="pt-16"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="md:-mt-16">
                <motion.h1 
                  className="text-6xl font-extrabold text-gray-900 tracking-tighter mb-8"
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
                  className="text-xl text-gray-600 leading-relaxed"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {text.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
              <motion.div
                style={{ y: imageY }}
                className="flex justify-center"
              >
                <Image
                  src="/ai-lapm designs/6.gif"
                  alt="Generative design element"
                  width={600}
                  height={600}
                  unoptimized
                />
              </motion.div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-16 tracking-tight"
              variants={titleVariants}
            >
              {"Research Scopes".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
              {researchScopes.map((scope) => (
                <ResearchScopeCard key={scope.title} scope={scope} />
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
          <AnimatedText
            text={`To pioneer research in augmented multimodal perception that pushes the
            boundaries of AI, enhancing human potential and creating a more
            inclusive and safer world.`}
            className="text-xl text-gray-600 leading-loose max-w-3xl mx-auto"
          />
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
            <h3 className="text-4xl font-bold mb-6">Our Work</h3>
            <AnimatedText
              text={`AI-Lamp Research Team is committed to developing innovative AI-driven
              technologies that expand the boundaries of human perception, enabling
              individuals to interact with and comprehend their environment`}
              el="p"
              className="text-xl leading-loose"
            />
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
      
      <Footer />
    </div>
  );
} 