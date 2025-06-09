"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiExternalLink, FiAward, FiBookOpen, FiZap } from "react-icons/fi";

export default function PeoplePage() {
  const director = {
    name: "Dr. Sanchita Ghose",
    title: "Director & Assistant Professor",
    imageUrl: "/Sanchita Ghose_faculty.png",
    bio: [
      "Dr. Sanchita Ghose joined San Francisco State University in 2022. Her research focuses on multimodal learning, computer vision, and sound synthesis, with an emphasis on developing AI-driven technologies for sensory augmentation.",
      "She has received numerous awards for her work, including the ECE Outstanding Graduate Research Award (2022), the Competitive ECE Pioneer Award (2021), and the Best Research Award in Applied AI on AI Summit (2019)."
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
    { title: "New AI Dupes Humans Into Believing Synthesized Sound Effects are Real", link: "https://spectrum.ieee.org/new-ai-dupes-humans-into-believing-synthesized-sound-effects-are-real" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      <motion.header
        className="px-6 sm:px-12 lg:px-20 py-4 absolute top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <nav className="flex justify-between items-center p-3 sm:p-4 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/80">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/ai-lapm logo.png" alt="AI-LAMP Logo" width={32} height={32} />
            <span className="text-lg font-bold tracking-tight">AI-LAMP</span>
          </Link>
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {["Home", "About", "People", "Research", "Gallery", "Events"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main className="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-6xl mx-auto grid md:grid-cols-12 gap-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Left Column */}
          <motion.div
            className="md:col-span-3 flex flex-col items-center"
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } } }}
          >
            <div className="w-full max-w-[250px] mx-auto">
              <div className="relative w-full aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden group">
                <Image src={director.imageUrl} alt={director.name} layout="fill" objectFit="cover" className="transition-transform duration-[2000ms] ease-in-out group-hover:scale-110" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-gray-900">{director.name}</h2>
              <p className="text-lg text-blue-600 font-medium">{director.title}</p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="md:col-span-9"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] } } }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Biography</h3>
                {director.bio.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-gray-600 mb-2">{paragraph}</p>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
                <div className="flex items-center">
                  <FiAward className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{director.education}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact</h3>
                <ul className="space-y-2">
                  {director.contact.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-blue-600 transition-colors break-words">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex-grow grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiBookOpen className="mr-2" /> Publications</h3>
                  <div className="space-y-2 h-32 overflow-y-auto pr-2 custom-scrollbar">
                    {publications.map((pub, i) => (
                      <a href={pub.link} key={i} target="_blank" rel="noopener noreferrer" className="block p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="font-semibold text-sm text-gray-800">{pub.title}</p>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><FiZap className="mr-2" /> In the News</h3>
                  <div className="space-y-2 h-32 overflow-y-auto pr-2 custom-scrollbar">
                    {news.map((item, i) => (
                      <a href={item.link} key={i} target="_blank" rel="noopener noreferrer" className="block p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <p className="font-semibold text-sm text-gray-800">{item.title}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
} 