"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaUniversity, FaGraduationCap, FaSchool, 
  FaBrain, FaRocket, FaHeart, FaLaptopCode,
  FaMapMarkerAlt, FaEnvelope, FaChevronRight, FaMicrochip
} from 'react-icons/fa';

export default function AboutPage() {
  const [isLaptop, setIsLaptop] = useState(false);

  // Check if screen is laptop size (1024px or wider)
  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.05 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const interests = [
    {
      title: "Healthcare AI & Diagnostics",
      desc: "Engineering explainable AI systems like Grad-CAM-based glaucoma and cancer detectors.",
      icon: <FaHeart className="text-red-400 text-2xl" />
    },
    {
      title: "LLMs & RAG Engines",
      desc: "Deploying open-source LLMs locally (Llama 3) and optimizing retrieval-augmented pipelines.",
      icon: <FaBrain className="text-cyan-400 text-2xl" />
    },
    {
      title: "Multimodal AI Security",
      desc: "Developing dual-stream analyzers for audio and video deepfake identification.",
      icon: <FaMicrochip className="text-purple-400 text-2xl" />
    },
    {
      title: "IoT & Smart Ecosystems",
      desc: "Architecting real-time embedded hardware routines integrated with cloud databases.",
      icon: <FaLaptopCode className="text-emerald-400 text-2xl" />
    }
  ];

  return (
    <div 
      className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden pt-20 md:pt-24"
      style={isLaptop ? { zoom: 0.75 } : {}}
    >

      {/* MAIN CONTENT */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 py-12 relative z-10 space-y-12"
      >
        
        {/* TOP SECTION: TITLE */}
        <motion.h1 
          variants={itemVariants} 
          className="text-3xl md:text-4xl font-black text-cyan-400"
        >
          About Me
        </motion.h1>

        {/* ALIGNED GRID: BIO & QUICK DETAILS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: PERFECTLY ALIGNED TEXT & BUTTONS */}
          <motion.div variants={itemVariants} className="md:col-span-7 space-y-5 text-neutral-300 text-sm md:text-base leading-relaxed">
            <p className="text-base md:text-lg">
              Hi, I’m <strong className="text-white font-bold">Pawan Dilip Chaudhari</strong> 👋 <br />
              An undergraduate student in <strong className="text-white font-bold">Artificial Intelligence & Data Science</strong> at <strong className="text-white font-bold">DMIHER, Sawangi(M), Wardha, Maharashtra</strong>.
            </p>

            <p>
              I’m passionate about <strong className="text-white font-bold">Machine Learning, Data Science</strong>, and building projects that solve real-world problems. Currently exploring GitHub workflows, Streamlit apps, and portfolio building to grow as a professional.
            </p>

            <p>
              Beyond code, I enjoy exploring design, experimenting with motion and interaction, and blending <strong className="text-white font-bold">artistic creativity</strong> with <strong className="text-white font-bold">technical precision</strong>. My goal is to build solutions that not only perform — but also inspire.
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-3 flex flex-wrap gap-4 items-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-black uppercase text-xs rounded-2xl transition-all shadow-lg shadow-cyan-400/30 active:scale-95"
              >
                GET IN TOUCH <FaChevronRight className="text-[10px]" />
              </Link>
              
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] hover:bg-neutral-900 text-neutral-200 border border-neutral-800 font-black uppercase text-xs rounded-2xl transition-all active:scale-95"
              >
                VIEW MY WORK
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE: QUICK DETAILS & RESEARCH RECORD CARDS */}
          <motion.div variants={itemVariants} className="md:col-span-5 space-y-4">
            
            {/* QUICK DETAILS CARD */}
            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider">
                QUICK DETAILS
              </h3>

              <ul className="text-xs space-y-3 text-neutral-300 font-medium">
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-400 text-sm flex-shrink-0" />
                  <span><strong className="text-white">Location:</strong> Ner, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaGraduationCap className="text-cyan-400 text-sm flex-shrink-0" />
                  <span><strong className="text-white">Degree:</strong> B.Tech in AI & Data Science</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaRocket className="text-cyan-400 text-sm flex-shrink-0" />
                  <span><strong className="text-white">Focus:</strong> LLMs, Healthcare AI, DevOps</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-cyan-400 text-sm flex-shrink-0" />
                  <span className="truncate"><strong className="text-white">Email:</strong> pawanchaudhariw2006@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* RESEARCH RECORD CARD */}
            <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider mb-1">
                RESEARCH RECORD
              </h3>
              <p className="text-2xl font-black text-white">
                3 Peer-Reviewed
              </p>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                IEEE Conference Publications in Cybersecurity, Healthcare & IoT.
              </p>
            </div>

          </motion.div>

        </section>

        {/* EDUCATION SECTION */}
        <section className="space-y-6 pt-4">
          <motion.h2 
            variants={itemVariants} 
            className="text-2xl md:text-3xl font-black text-cyan-400 flex items-center gap-2"
          >
            Education
          </motion.h2>

          <div className="space-y-4">
            
            {/* B.TECH CARD */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 flex gap-4 items-start"
            >
              <div className="p-3 bg-black border border-cyan-500/30 rounded-xl text-cyan-400 text-xl flex-shrink-0 mt-1">
                <FaUniversity />
              </div>

              <div className="space-y-1 w-full">
                <h3 className="text-lg font-bold text-cyan-400">
                  B.Tech in Artificial Intelligence and Data Science
                </h3>
                <p className="text-sm font-semibold text-white">
                  Datta Meghe Institute of Higher Education and Research (FEAT, DMIHER) <span className="text-neutral-400 font-normal">— Sawangi, Wardha</span>
                </p>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400 pt-1">
                  <span>SGPA (5th Sem): <strong className="text-neutral-200">6.86/10</strong></span>
                  <span>CGPA: <strong className="text-neutral-200">6.30/10</strong></span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-cyan-400/80">NAAC A++ Accredited (CGPA 3.78/4)</span>
                </div>

                <p className="text-xs text-neutral-500 font-mono pt-1">2023 – Present</p>
              </div>
            </motion.div>

            {/* 12TH BOARD CARD */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 flex gap-4 items-start"
            >
              <div className="p-3 bg-black border border-neutral-800 rounded-xl text-neutral-400 text-xl flex-shrink-0 mt-1">
                <FaGraduationCap />
              </div>

              <div className="space-y-1 w-full">
                <h3 className="text-base font-bold text-cyan-400">
                  Higher Secondary Education (12th - PCMB)
                </h3>
                <p className="text-sm font-semibold text-white">
                  Harikamal Science Junior College Kharadgaon <span className="text-neutral-400 font-normal">— Ner, Amravati Division</span>
                </p>

                <p className="text-xs text-neutral-300 pt-1">
                  Percentage: <strong className="text-white">61.83%</strong>
                </p>

                <p className="text-xs text-neutral-500 font-mono pt-1">Completed in 2023</p>
              </div>
            </motion.div>

            {/* 10TH BOARD CARD */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 flex gap-4 items-start"
            >
              <div className="p-3 bg-black border border-neutral-800 rounded-xl text-neutral-400 text-xl flex-shrink-0 mt-1">
                <FaSchool />
              </div>

              <div className="space-y-1 w-full">
                <h3 className="text-base font-bold text-cyan-400">
                  Secondary Education (10th)
                </h3>
                <p className="text-sm font-semibold text-white">
                  Eleghant I.F English Medium High School <span className="text-neutral-400 font-normal">— Ner, Amravati Division</span>
                </p>

                <p className="text-xs text-neutral-300 pt-1">
                  Percentage: <strong className="text-white">91.20%</strong>
                </p>

                <p className="text-xs text-neutral-500 font-mono pt-1">Completed in 2021</p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CORE FOCUS & INTERESTS SECTION */}
        <section className="space-y-6 pt-4">
          <motion.div variants={itemVariants} className="border-b border-neutral-800 pb-3">
            <h2 className="text-2xl font-black uppercase text-white tracking-wider">
              CORE FOCUS & <span className="text-cyan-400">INTERESTS</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((item, index) => (
              <div key={index} className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-5 hover:border-cyan-500/40 transition group">
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition">{item.title}</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

      </motion.main>

    </div>
  );
}