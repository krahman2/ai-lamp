"use client";

import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
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
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full bg-white p-10 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-10 text-center">Have a question or want to get in touch? Fill out the form below and we'll get back to you soon.</p>
          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg px-4 py-3 text-gray-900" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg px-4 py-3 text-gray-900" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg px-4 py-3 text-gray-900 resize-none" required />
            </div>
            <button type="submit" className="w-full py-4 px-4 bg-blue-600 text-white text-lg font-bold rounded-lg shadow hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
} 