"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const arrowOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
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
        duration: 1.6,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
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
            <Image src="/ai-lapm logo.png" alt="AI-LAMP Logo" width={32} height={32} />
            <span className="text-lg font-bold tracking-tight">AI-LAMP</span>
            <div className="h-6 w-px bg-gray-300"></div>
            <Image src="/channels4_profile.jpg" alt="SFSU Logo" width={32} height={32} className="rounded-full" />
          </motion.div>
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {["Home", "About", "People", "Research", "Gallery", "Events"].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-blue-600 transition-colors">{item}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main>
        <section className="pt-16 pb-24 md:pt-20 md:pb-32 px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            
            <motion.div 
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.6, ease: [0.6, 0.01, 0.05, 0.95] }}
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
              <motion.div variants={itemVariants} className="flex items-center gap-x-4 mb-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wider">AI-LAMP</span>
                <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold tracking-wider">SFSU</span>
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
      </main>

      <motion.div 
        className="fixed bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity: arrowOpacity }}
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
