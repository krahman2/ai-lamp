import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "People", href: "/people" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];
  const socialLinks = [
    { name: "GitHub", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3">
              <Image
                src="/ai-lapm logo.png"
                alt="AI-LAMP Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">AI-LAMP</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Pioneering research in augmented multimodal perception.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Navigate
              </h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Connect
              </h3>
              <ul className="mt-4 space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-gray-300">
                <li>
                  <a
                    href="mailto:ailamp@sfsu.edu"
                    className="hover:text-white"
                  >
                    ailamp@sfsu.edu
                  </a>
                </li>
                <li>
                  <p>San Francisco State University</p>
                  <p>1600 Holloway Ave</p>
                  <p>San Francisco, CA 94132</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AI-LAMP Research Lab. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 