"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiExternalLink, FiAward, FiBookOpen, FiZap, FiChevronDown, FiInfo, FiChevronUp } from "react-icons/fi";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function PeoplePage() {
  const director = {
    name: "Dr. Sanchita Ghose",
    title: "Director of AI-LAMP & Assistant Professor",
    imageUrl: "/Sanchita Ghose_faculty.png",
    bio: [
      "Dr. Sanchita Ghose is an Assistant Professor in Computer Engineering at San Francisco State University and the Director of the AI Lab for Augmented Multimodal Perception (AI-LAMP) at San Francisco State University since 2022. She is one of the principal investigators and co-investigators in NSF-ERI and DoD-MRI grant projects respectively. She is awarded the ECE Outstanding Graduate Research Award (2022), Competitive ECE Pioneer Award (2021), Best Research Award in Applied AI on AI Summit (2019), ECE Best Grading Assistant Award, Graduate Professional Development Awards (2019-2021), OCI Stipend Award, Electrical Engineering Travel Award. She has been chosen multiple times as the representative ECE graduate student from UTSA to attend ECEDHA-iREDIFINE workshops and the SWECEDHA conference.",
      "Her current research interest includes developing a deep learning algorithm for multimodal learning and cross-modal retrieval applications, focusing on computer vision, action recognition, sound synthesis, and video processing. She published her research articles in the most reputed Multimedia Journal, IEEE Transactions on Multimedia. Prior to joining SFSU, Dr. Ghose worked as a Graduate Research and Teaching Assistant in ECE (Electrical & Computer Engineering) Department, UTSA. Alongside that, she worked as a Research Program Coordinator in an NSF collaborative research Grant named SWEETER with the Dean of College of Engineering, UTSA.",
    ],
    education: "Ph.D., Electrical Engineering, University of Texas, San Antonio, 2022",
    contact: [
      {
        icon: FiMail,
        text: "sanchitaghose@sfsu.edu",
        href: "mailto:sanchitaghose@sfsu.edu",
      },
      {
        icon: FiExternalLink,
        text: "Faculty Webpage",
        href: "https://engineering.sfsu.edu/faculty-profile-sanchita-ghose",
      },
    ],
  };

  const publications = [
    { title: "SoundEYE: AI-Driven Sensory Augmentation System", link: "https://ieeexplore.ieee.org/abstract/document/10620973" },
    { title: "AutoFoley: Artificial Synthesis of Synchronized Sound Tracks", link: "https://ieeexplore.ieee.org/abstract/document/9126216" },
    { title: "FoleyGAN: Visually Guided Generative Adversarial Network", link: "https://ieeexplore.ieee.org/abstract/document/9782577" },
    { title: "Enabling an IoT System of Systems through Auto Sound Synthesis", link: "https://ieeexplore.ieee.org/abstract/document/9130483" },
    { title: "Autonomous Sound Synthesizing Network in Vehicles", link: "https://ieeexplore.ieee.org/abstract/document/10151345" },
    { title: "Soundwise: Synthetic Acoustic Signals from Video Streams", link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=u1Pm5XMAAAAJ&citation_for_view=u1Pm5XMAAAAJ:Tyk-4Ss8FVUC" },
  ];

  const news = [
    { title: "Dr. Sanchita Ghose Received NSF ERI Grant to Develop SoundEYE", link: "https://engineering.sfsu.edu/news/dr-sanchita-ghose-received-nsf-eri-grant-develop-soundeye-ai-driven-sensory-augmentation" },
    { title: "Artificial Intelligence can Create Sound Tracks for Silent Videos", link: "https://www.infoq.com/news/2020/09/ai-created-foley/" },
    { title: "New AI Dupes Humans Into Believing Synthesized Sound Effects are Real", link: "https://engineering.sfsu.edu/new-ai-dupes-humans-into-believing-synthesized-sound-effects-are-real" },
  ];

  const publicationSummaries = [
    "A system leveraging AI for sensory augmentation, enabling enhanced perception through multimodal data integration.",
    "A method for automatically generating synchronized sound tracks for silent videos using artificial intelligence.",
    "A GAN-based approach for generating realistic sound effects from visual cues in videos.",
    "A framework for synthesizing sounds in IoT systems, enabling devices to communicate through generated audio signals.",
    "A deep learning network for synthesizing vehicle sounds autonomously, improving safety and awareness in smart vehicles.",
    "A technique for generating synthetic acoustic signals from video streams, bridging the gap between audio and visual data."
  ];

  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [expandedPub, setExpandedPub] = useState(-1);

  const bioVariants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
    expanded: { opacity: 1, height: "auto", marginTop: "0.75rem" },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      <motion.header
        className="px-6 sm:px-12 lg:px-20 py-6 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <nav className="flex justify-between items-center p-3 sm:p-4 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/80">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
          >
            <Image src="/ai-lapm logo.png" alt="AI-LAMP Logo" width={32} height={32} />
            <span className="text-lg font-bold tracking-tight">AI-LAMP</span>
            <div className="h-6 w-px bg-gray-300"></div>
            <Image src="/channels4_profile.jpg" alt="SFSU Logo" width={32} height={32} className="rounded-full" />
          </motion.div>
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {[
              "Home", "About", "People", "Research", "Gallery", "Events", "Contact",
            ].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1, y: -2, transition: { type: 'spring', stiffness: 300 } }}>
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
          Meet Our Team
        </motion.h1>
        <motion.div
          className="w-full max-w-[90vw] mx-auto grid md:grid-cols-12 gap-x-10 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Sticky Column */}
          <motion.div
            className="md:col-span-4 lg:col-span-3 md:sticky md:top-28 flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="w-full max-w-[280px] mx-auto">
              <div className="relative w-full aspect-square rounded-2xl shadow-xl overflow-hidden group mb-4">
                <Image src={director.imageUrl} alt={director.name} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-110" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">{director.name}</h2>
                <p className="text-md text-blue-600 font-medium">{director.title}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Scrollable Column */}
          <motion.div
            className="md:col-span-8 lg:col-span-9 mt-8 md:mt-0"
            variants={containerVariants}
          >
            {/* Biography Box */}
            <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8" variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiInfo className="mr-3 text-blue-500"/> Biography</h3>
              <p className="text-sm leading-relaxed text-gray-600">{director.bio[0]}</p>
              <AnimatePresence>
                {isBioExpanded && (
                  <motion.div
                    variants={bioVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm leading-relaxed text-gray-600">{director.bio[1]}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsBioExpanded(!isBioExpanded)}
                className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center"
              >
                {isBioExpanded ? "Read Less" : "Read More"}
                {isBioExpanded ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
            </motion.div>

            <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8" variants={containerVariants}>
              {/* Education, Contact, In the News Box */}
              <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-8 lg:col-span-1" variants={itemVariants}>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiAward className="mr-3 text-blue-500" /> Education</h3>
                  <p className="text-sm text-gray-700">{director.education}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiMail className="mr-3 text-blue-500" /> Contact</h3>
                  <ul className="space-y-2">
                    {director.contact.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <item.icon className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0" />
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-blue-600 transition-colors break-words">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiZap className="mr-3 text-blue-500" /> In the News</h3>
                  <div className="space-y-2" style={{height: '9.5rem', overflowY: 'auto'}}>
                    {news.map((item, i) => (
                      <a href={item.link} key={i} target="_blank" rel="noopener noreferrer" className="block p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                        <p className="font-medium text-sm text-gray-800 group-hover:text-blue-600">{item.title}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Publications Box */}
              <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg lg:col-span-2" variants={itemVariants}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiBookOpen className="mr-3 text-blue-500" /> Publications</h3>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                  {publications.map((pub, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col cursor-pointer"
                      onClick={() => setExpandedPub(expandedPub === i ? -1 : i)}
                      whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                      variants={itemVariants}
                    >
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-700 hover:underline text-sm md:text-base mb-1 flex items-center"
                        onClick={e => e.stopPropagation()}
                      >
                        {pub.title}
                      </a>
                      <AnimatePresence initial={false}>
                        {expandedPub === i && (
                          <motion.div
                            key="summary"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-xs md:text-sm text-gray-700">{publicationSummaries[i]}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <button
                        className="mt-2 text-xs text-blue-500 hover:text-blue-700 flex items-center self-end focus:outline-none"
                        onClick={e => { e.stopPropagation(); setExpandedPub(expandedPub === i ? -1 : i); }}
                      >
                        {expandedPub === i ? 'Show Less' : 'Show More'}
                        {expandedPub === i ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

// Add this to your globals.css or a style tag if you don't have it.
/*
.custom-scrollbar-thin::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.custom-scrollbar-thin::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
.custom-scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #555;
}
*/ 