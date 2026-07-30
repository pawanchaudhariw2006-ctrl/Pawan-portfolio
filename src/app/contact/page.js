"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const socialLogos = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/pawanchaudhariw2006-ctrl" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/pawan-chaudhari-a9642a2a7" },
    { name: "Email", icon: <MdEmail />, url: "mailto:pawanchaudhariw2006@gmail.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/" }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden antialiased">

      {/* NAVIGATION BAR */}
      <nav className="w-full p-6 md:px-12 flex justify-between items-center z-[100] fixed top-0 left-0 right-0 bg-black border-b border-neutral-900">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 text-black font-black p-2.5 px-3.5 rounded text-lg">PC</div>
          <span className="text-[22px] font-bold uppercase text-neutral-400 leading-tight">
            Pawan Chaudhari <br />
            <span className="text-neutral-600 text-[14px] tracking-wide">AI • ML • Developer</span>
          </span>
        </div>
        
        <div className="flex gap-4 md:gap-6 text-[16px] font-bold uppercase tracking-wider items-center whitespace-nowrap">
          <Link href="/" className="text-gray-400 hover:text-white transition whitespace-nowrap">Home</Link>
          <Link href="/projects" className="text-gray-400 hover:text-white transition whitespace-nowrap">Projects</Link>
          
          {/* Highlighted for this page */}
          <Link href="/skills" className="text-gray-400 hover:text-white transition whitespace-nowrap">skills</Link>
          
          
          <Link href="/internship" className="text-gray-400 hover:text-white transition whitespace-nowrap">Internship</Link>
          <Link href="/certificates" className="text-gray-400 hover:text-white transition whitespace-nowrap">Certificates</Link>
          <Link href="/resume" className="text-gray-400 hover:text-white transition whitespace-nowrap">Resume</Link>
          <Link href="/publications" className="text-gray-400 hover:text-white transition whitespace-nowrap">Publications</Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition whitespace-nowrap">About Me</Link>
          <span className="text-white cursor-default whitespace-nowrap border-b-2 border-cyan-500 pb-0.5">Contact</span>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 pt-36 pb-20 relative z-10 w-full flex-grow space-y-12"
      >
        
        {/* HEADER SECTION */}
        <section className="text-center space-y-4">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Let's Connect & <span className="text-cyan-400">Collaborate 🩵</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Choose your preferred platform below or send a direct message.
          </motion.p>
        </section>

        {/* SOCIAL LOGOS ONLY CONNECT ROW */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-5 md:gap-6">
          {socialLogos.map((social, idx) => (
            <motion.a 
              key={idx}
              whileHover={{ scale: 1.1, translateY: -4 }}
              whileTap={{ scale: 0.92 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-4 md:p-5 text-2xl md:text-3xl text-neutral-300 hover:text-cyan-400 bg-black hover:bg-neutral-900 border border-neutral-800 hover:border-cyan-400/60 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <div className="bg-black border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-6">
            
            <form 
              action="https://formspree.io/f/xyklabog" 
              method="POST"
              onSubmit={() => setFormSubmitted(true)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all placeholder:text-neutral-600 font-mono" 
                />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Your Email" 
                  className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all placeholder:text-neutral-600 font-mono" 
                />
              </div>

              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all placeholder:text-neutral-600 font-mono" 
              />

              <textarea 
                name="message"
                required
                rows="5" 
                placeholder="Your Message..." 
                className="w-full p-4 rounded-xl bg-black border border-neutral-800 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all resize-none placeholder:text-neutral-600 font-mono"
              />

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-cyan-400 text-black font-extrabold uppercase tracking-widest text-xs hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-xs" /> Send Message
              </motion.button>
            </form>

          </div>
        </motion.div>

      </motion.main>

     
    </div>
  );
}