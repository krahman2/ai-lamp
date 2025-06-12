"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiExternalLink, FiAward, FiBookOpen, FiZap, FiChevronDown, FiInfo, FiChevronUp, FiLinkedin, FiGithub, FiUsers, FiStar } from "react-icons/fi";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function PeoplePage() {
  const teamMembers = [
    {
      name: "Dr. Sanchita Ghose",
      title: "Director of AI-LAMP & Assistant Professor",
      imageUrl: "/Sanchita Ghose_faculty.png",
      bio: [
        "Dr. Sanchita Ghose is an Assistant Professor in Computer Engineering at San Francisco State University and the Director of the AI Lab for Augmented Multimodal Perception (AI-LAMP). She is one of the principal investigators and co-investigators in NSF-ERI and DoD-MRI grant projects respectively. She is awarded the ECE Outstanding Graduate Research Award (2022), Competitive ECE Pioneer Award (2021), Best Research Award in Applied AI on AI Summit (2019), ECE Best Grading Assistant Award, Graduate Professional Development Awards (2019-2021), OCI Stipend Award, Electrical Engineering Travel Award. She has been chosen multiple times as the representative ECE graduate student from UTSA to attend ECEDHA-iREDIFINE workshops and the SWECEDHA conference.",
        "Her current research interest includes developing a deep learning algorithm for multimodal learning and cross-modal retrieval applications, focusing on computer vision, action recognition, sound synthesis, and video processing. She published her research articles in the most reputed Multimedia Journal, IEEE Transactions on Multimedia. Prior to joining SFSU, Dr. Ghose worked as a Graduate Research and Teaching Assistant in ECE (Electrical & Computer Engineering) Department, UTSA. Alongside that, she worked as a Research Program Coordinator in an NSF collaborative research Grant named SWEETER with the Dean of College of Engineering, UTSA."
      ],
      education: [
        "Ph.D., Electrical Engineering, University of Texas, San Antonio, 2022"
      ],
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
      news: [
        { title: "Dr. Sanchita Ghose Received NSF ERI Grant to Develop SoundEYE", link: "https://engineering.sfsu.edu/news/dr-sanchita-ghose-received-nsf-eri-grant-develop-soundeye-ai-driven-sensory-augmentation" },
        { title: "Artificial Intelligence can Create Sound Tracks for Silent Videos", link: "https://www.infoq.com/news/2020/09/ai-created-foley/" },
        { title: "New AI Dupes Humans Into Believing Synthesized Sound Effects are Real", link: "https://engineering.sfsu.edu/new-ai-dupes-humans-into-believing-synthesized-sound-effects-are-real" },
      ],
      publications: [
        { title: "SoundEYE: AI-Driven Sensory Augmentation System", link: "https://ieeexplore.ieee.org/abstract/document/10620973", summary: "A system leveraging AI for sensory augmentation, enabling enhanced perception through multimodal data integration." },
        { title: "AutoFoley: Artificial Synthesis of Synchronized Sound Tracks", link: "https://ieeexplore.ieee.org/abstract/document/9126216", summary: "A method for automatically generating synchronized sound tracks for silent videos using artificial intelligence." },
        { title: "FoleyGAN: Visually Guided Generative Adversarial Network", link: "https://ieeexplore.ieee.org/abstract/document/9782577", summary: "A GAN-based approach for generating realistic sound effects from visual cues in videos." },
        { title: "Enabling an IoT System of Systems through Auto Sound Synthesis", link: "https://ieeexplore.ieee.org/abstract/document/9130483", summary: "A framework for synthesizing sounds in IoT systems, enabling devices to communicate through generated audio signals." },
        { title: "Autonomous Sound Synthesizing Network in Vehicles", link: "https://ieeexplore.ieee.org/abstract/document/10151345", summary: "A deep learning network for synthesizing vehicle sounds autonomously, improving safety and awareness in smart vehicles." },
        { title: "Soundwise: Synthetic Acoustic Signals from Video Streams", link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=u1Pm5XMAAAAJ&citation_for_view=u1Pm5XMAAAAJ:Tyk-4Ss8FVUC", summary: "A technique for generating synthetic acoustic signals from video streams, bridging the gap between audio and visual data." },
      ],
      experience: [],
      leadership: [],
      awards: [],
      interests: [],
    },
    {
      name: "Kazi Ruslan Rahman",
      title: "AI Research Assistant at AI-LAMP",
      imageUrl: "/Headshots/Kazi Ruslan Rahman.HEIC",
      bio: [
        "Kazi Ruslan Rahman is currently a graduate student in Statistical Data Science and a research assistant at the AI-LAMP lab at San Francisco State University. His work blends interests in electrical engineering, data science, and human-centered AI. He previously served as an IT Project Manager Intern at Cencora and is an experienced math instructor, resident life wellness assistant, and student leader."
      ],
      education: [
        "M.S. Statistical Data Science (In Progress)",
        "B.S. Electrical Engineering, San Francisco State University (Cum Laude, GPA: 3.59)"
      ],
      contact: [
        { icon: FiMail, text: "seasonedruslan@gmail.com", href: "mailto:seasonedruslan@gmail.com" },
        { icon: FiMail, text: "kazisfsu@gmail.com", href: "mailto:kazisfsu@gmail.com" },
        { icon: FiLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/kaziruslan/" },
        { icon: FiGithub, text: "GitHub", href: "https://github.com/kaziruslanrahman" },
        { icon: FiExternalLink, text: "Resume", href: "#" },
        { icon: FiExternalLink, text: "EE Resume", href: "#" },
      ],
      news: [],
      publications: [],
      experience: [
        "AI Research Assistant, AI-LAMP (Jul 2024 – Present)",
        "Math Teaching Instructor, Descartes Learning Club (May 2025 – Present)",
        "Wellness Program Assistant, SF State ResLife (Aug 2023 – Aug 2024)",
        "IT Project Manager Intern, Cencora (May 2023 – Aug 2023)"
      ],
      leadership: [
        "Vice President, IEEE Student Chapter",
        "Secretary, Engineering Student Board",
        "Founder & Vice President, Bangladeshi Students Association"
      ],
      awards: [
        "Dean's List (4x)",
        "MESA Student Conference Leader 2022",
        "Gator's Leadership Circle",
        "Certifications:",
        "- Python Zero to Hero (Udemy)",
        "- Google Project Management Fundamentals (Coursera)",
        "- Agile Project Management with Jira Cloud",
        "- Agile Software Development",
        "- Learning Azure DevOps"
      ],
      interests: [
        "Playing guitar", "cooking", "learning languages & cultures", "anime", "soccer (Arsenal fan)", "originally from Chittagong, Bangladesh"
      ],
    },
    {
      name: "Aditya Bangde",
      title: "AI Research Assistant at AI-LAMP, M.S. Electrical and Computer Engineering",
      imageUrl: "/Headshots/aditya.webp",
      bio: [
        "Aditya Bangde is pursuing a Master of Science in Electrical and Computer Engineering. He has experience as an Embedded System Lead at Techwalnut Innovation LLP, a Freelance Engineer at Aeroflutter Techlabs LLP, and as a Software Intern at the Indian Space Research Organization. In his free time, he enjoys trekking, drawing, and sketching."
      ],
      education: [
        "M.S. Electrical and Computer Engineering"
      ],
      contact: [
        { icon: FiMail, text: "abangde@sfsu.edu", href: "mailto:abangde@sfsu.edu" },
        { icon: FiMail, text: "bangdework@gmail.com", href: "mailto:bangdework@gmail.com" },
        { icon: FiLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/aditya-bangde-372447178/" },
        { icon: FiGithub, text: "GitHub", href: "https://github.com/adityabangde" },
        { icon: FiExternalLink, text: "Resume", href: "https://github.com/adityabangde/Resume/blob/main/Resume.pdf" },
      ],
      news: [],
      publications: [],
      experience: [
        "Embedded System Lead at Techwalnut Innovation LLP (Jun 2022 – May 2024)",
        "Freelance Engineer at Aeroflutter Techlabs LLP (Jun 2021 – Feb 2022)",
        "Software Intern at Indian Space Research Organization (Dec 2018 – Jul 2019)"
      ],
      leadership: [],
      awards: [
        "1st Google Sponsored Award at TreeHacks Stanford Hackathon"
      ],
      interests: [
        "Trekking", "Drawing and Sketching"
      ],
    },
    {
      name: "Benjamin Michael Klein",
      title: "Software Engineer, Graduate Student",
      imageUrl: "/Headshots/ben-placeholder.png",
      bio: [
        "Benjamin Michael Klein is a software engineer with a background in Linux-based camera systems and a knack for streamlining workflows through automation and scripting. He earned a B.S. in Computer Science from The Evergreen State College and is currently pursuing graduate studies in Software Engineering at SFSU. At the AI-LAMP lab, he's developing a real-time system that combines text-to-speech and sound effects to assist blind and low-vision users. Alongside his academic work, he builds web projects and draws, always looking for new ways to make technology feel more intuitive and expressive."
      ],
      education: [
        "M.S. Software Engineering, SFSU (In Progress)",
        "B.S. Computer Science, The Evergreen State College"
      ],
      contact: [
        { icon: FiMail, text: "benmklein@gmail.com", href: "mailto:benmklein@gmail.com" },
        { icon: FiLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/benmklein/" },
      ],
      experience: [
        "AI-LAMP Lab: Developing a real-time system combining text-to-speech and sound effects for blind and low-vision users."
      ],
      interests: ["Building web projects", "Drawing"],
      news: [],
      publications: [],
      leadership: [],
      awards: [],
    }
  ];

  const [expandedBio, setExpandedBio] = useState(Array(teamMembers.length).fill(false));
  const [expandedPub, setExpandedPub] = useState(Array(teamMembers.length).fill(-1));

  const handleBioToggle = (idx: number) => {
    setExpandedBio(prev => prev.map((v, i) => (i === idx ? !v : v)));
  };
  const handlePubToggle = (memberIdx: number, pubIdx: number) => {
    setExpandedPub(prev => prev.map((v, i) => (i === memberIdx ? (v === pubIdx ? -1 : pubIdx) : v)));
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

  // 1. Update interests sentence grammar in Kazi's bio
  if (teamMembers[1]) {
    teamMembers[1].bio[0] = teamMembers[1].bio[0].replace(/ In his free time, he enjoys .*/, '') +
      ' In his free time, he enjoys playing guitar, cooking, learning languages and cultures, watching anime, and soccer (he is an Arsenal fan). He is originally from Chittagong, Bangladesh.';
  }

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
        <div className="w-full max-w-[90vw] mx-auto grid gap-y-16">
          {teamMembers.map((member, idx) => {
            const isAlternateLayout = idx % 2 === 1;
            
            const imageColumn = (
              <motion.div
                className="md:col-span-4 lg:col-span-3 md:sticky md:top-28 flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="w-full max-w-[280px] mx-auto">
                  <div className="relative w-full aspect-square rounded-2xl shadow-xl overflow-hidden group mb-4">
                    <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-110" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                    <p className="text-md text-blue-600 font-medium">{member.title}</p>
                  </div>
                </div>
              </motion.div>
            );

            const infoDeck = (
              <motion.div
                className="md:col-span-8 lg:col-span-9 mt-8 md:mt-0"
                variants={containerVariants}
              >
                {/* Biography Box */}
                <motion.div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8`} variants={itemVariants}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiInfo className="mr-3 text-blue-500"/> Biography</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{member.bio[0]}</p>
                  {member.bio.length > 1 && (
                    <AnimatePresence>
                      {expandedBio[idx] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: "0.75rem" }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm leading-relaxed text-gray-600">{member.bio.slice(1).join(" ")}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                  {member.bio.length > 1 && (
                    <button onClick={() => handleBioToggle(idx)} className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center">
                      {expandedBio[idx] ? "Read Less" : "Read More"}
                      {expandedBio[idx] ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                    </button>
                  )}
                </motion.div>

                {/* Data-driven cards layout */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
                  {(member.education.length > 0 || member.contact.length > 0) && (
                    <motion.div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-8`} variants={itemVariants}>
                      {member.education.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiAward className="mr-3 text-blue-500" /> Education</h3>
                          <ul className="list-disc ml-5 space-y-1">
                            {member.education.map((ed, i) => <li key={i} className="text-sm text-gray-700">{ed}</li>)}
                          </ul>
                        </div>
                      )}
                      {member.contact.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiMail className="mr-3 text-blue-500" /> Contact</h3>
                          <ul className="space-y-2">
                            {member.contact.map((item, i) => (
                              <li key={i} className="flex items-center">
                                <item.icon className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0" />
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-blue-600 transition-colors break-words">{item.text}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {(member.experience.length > 0 || member.leadership.length > 0) && (
                    <motion.div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-8`} variants={itemVariants}>
                      {member.experience.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiZap className="mr-3 text-blue-500" /> Experience</h3>
                          <ul className="list-disc ml-5 space-y-1">
                            {member.experience.map((exp, i) => <li key={i} className="text-sm text-gray-700">{exp}</li>)}
                          </ul>
                        </div>
                      )}
                      {member.leadership.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiUsers className="mr-3 text-blue-500" /> Leadership & Volunteering</h3>
                          <ul className="list-disc ml-5 space-y-1">
                            {member.leadership.map((lead, i) => <li key={i} className="text-sm text-gray-700">{lead}</li>)}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {member.awards.length > 0 && (
                     <motion.div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-8`} variants={itemVariants}>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiAward className="mr-3 text-blue-500" /> Awards</h3>
                        <ul className="list-disc ml-5 space-y-1">
                          {member.awards.filter(a => !a.startsWith('Certifications') && !a.startsWith('- ')).map((award, i) => <li key={i} className="text-sm text-gray-700">{award}</li>)}
                        </ul>
                      </div>
                      {member.awards.some(a => a.startsWith('Certifications') || a.startsWith('- ')) && (
                         <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center"><FiStar className="mr-2 text-blue-500" /> Certifications</h3>
                          <ul className="list-disc ml-5 space-y-1">
                            {member.awards.filter(a => a.startsWith('- ')).map(a => (
                              <li key={a} className="text-sm text-gray-700">{a.replace('- ', '')}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                     </motion.div>
                  )}

                  {member.publications.length > 0 && (
                    <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg lg:col-span-2" variants={itemVariants}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiBookOpen className="mr-3 text-blue-500" /> Publications</h3>
                      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                        {member.publications.map((pub, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col cursor-pointer"
                            onClick={() => handlePubToggle(idx, i)}
                            whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                            variants={itemVariants}
                          >
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline text-sm md:text-base mb-1 flex items-center" onClick={e => e.stopPropagation()}>{pub.title}</a>
                            <AnimatePresence initial={false}>
                              {expandedPub[idx] === i && pub.summary && (
                                <motion.div key="summary" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }} exit={{ opacity: 0, height: 0, marginTop: 0 }} transition={{ duration: 0.3 }}>
                                  <p className="text-xs md:text-sm text-gray-700">{pub.summary}</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            {pub.summary && (
                              <button className="mt-2 text-xs text-blue-500 hover:text-blue-700 flex items-center self-end focus:outline-none" onClick={e => { e.stopPropagation(); handlePubToggle(idx, i); }}>
                                {expandedPub[idx] === i ? 'Show Less' : 'Show More'}
                                {expandedPub[idx] === i ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                              </button>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );

            return (
              <motion.div
                key={member.name}
                className={`grid md:grid-cols-12 gap-x-10 items-start ${isAlternateLayout ? 'bg-blue-50' : 'bg-gray-50'} rounded-2xl shadow-lg p-2 md:p-4 mb-12`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {isAlternateLayout ? <>{infoDeck}{imageColumn}</> : <>{imageColumn}{infoDeck}</>}
              </motion.div>
            );
          })}
        </div>
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