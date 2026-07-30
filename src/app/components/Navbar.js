'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Internship", href: "/internship" },
    { name: "Certificates", href: "/certificates" },
    { name: "Resume", href: "/resume" },
    { name: "Publications", href: "/publications" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="w-full p-4 md:p-6 lg:px-12 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md sticky top-0 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-cyan-500 text-black font-black p-2 md:p-2.5 rounded text-base md:text-lg">PC</div>
          <span className="text-sm md:text-[18px] font-bold uppercase text-neutral-200 leading-tight">
            Pawan Chaudhari <br />
            <span className="text-neutral-400 text-xs md:text-[13px] tracking-wide">AI • ML • Developer</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-wrap justify-center gap-6 text-[15px] font-bold uppercase tracking-wider items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return isActive ? (
              <span key={link.name} className="text-white cursor-default border-b-2 border-cyan-500 pb-0.5">
                {link.name}
              </span>
            ) : (
              <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition">
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between pt-20 pb-10 px-6 lg:hidden"
          >
            <div className="flex flex-col items-center gap-5 text-center overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-semibold tracking-wide transition ${
                      isActive ? "text-cyan-400 font-bold" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl self-center p-2 rounded-full border border-white/20 mt-4"
            >
              <HiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}