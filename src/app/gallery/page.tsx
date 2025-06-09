"use client";

import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
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

      <main className="flex-grow flex flex-col items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Gallery</h1>
        <p className="text-xl text-gray-600">Our gallery is coming soon. Stay tuned!</p>
      </main>

      <Footer />
    </div>
  );
} 