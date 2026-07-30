"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBuilding, FaUserTie, FaLaptopCode, FaCheckCircle, 
  FaAward, FaDatabase, FaServer, FaCalendarAlt, FaBriefcase 
} from 'react-icons/fa';

export default function InternshipPage() {
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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div 
      className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden pt-20 md:pt-24"
      style={isLaptop ? { zoom: 0.75 } : {}}
    >

      {/* MAIN CONTAINER */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 py-12 relative z-10"
      >
        {/* HEADER SECTION */}
        <header className="mb-12 text-left relative z-10">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0a0a] border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <FaBriefcase className="text-sm" /> Industry Experience
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-5xl font-black text-white uppercase tracking-tight mb-3"
          >
            Professional <span className="text-cyan-400">Experience</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-neutral-400 text-base max-w-2xl">
            Hands-on software development, LLM engineering, and machine learning research conducted in enterprise environments.
          </motion.p>
        </header>

        {/* TOP SUMMARY STATS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          <div className="bg-[#0a0a0a] border border-neutral-800/80 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-black text-cyan-400 rounded-xl border border-cyan-500/20 text-2xl">
              <FaCalendarAlt />
            </div>
            <div>
              <p className="text-2xl font-black text-white">6+ Months</p>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Total Industry Tenure</p>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-neutral-800/80 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-black text-cyan-400 rounded-xl border border-cyan-500/20 text-2xl">
              <FaDatabase />
            </div>
            <div>
              <p className="text-2xl font-black text-white">58,332</p>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Processed Rows</p>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-neutral-800/80 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-black text-cyan-400 rounded-xl border border-cyan-500/20 text-2xl">
              <FaLaptopCode />
            </div>
            <div>
              <p className="text-2xl font-black text-white">Llama 3 • Docker</p>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Core Tech Stack</p>
            </div>
          </div>
        </motion.div>

        {/* TIMELINE WRAPPER */}
        <div className="relative border-l-2 border-neutral-800/80 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          
          {/* EXPERIENCE 1: GANISHKA TECHNOLOGY (LATEST) */}
          <motion.div 
            variants={itemVariants} 
            className="relative bg-[#0a0a0a] border border-neutral-800/80 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-500/40 group shadow-xl"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] md:-left-[47px] top-8 w-5 h-5 rounded-full bg-cyan-500 border-4 border-black shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition-transform" />

            <div className="border-b border-neutral-800/80 pb-6 mb-6">
              <span className="text-cyan-400 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-black border border-cyan-500/30 inline-block mb-3">
                Latest Tenure • 6 Months
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                AI / ML Intern
              </h2>
              <div className="flex items-center gap-2 text-neutral-300 mt-2 font-medium text-lg">
                <FaBuilding className="text-cyan-500" />
                <span>Ganishka Technology <span className="text-neutral-500 text-sm">(A Division of Ganishka Enterprises)</span></span>
              </div>
            </div>

            {/* Metrics and Mentorship Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black p-5 rounded-2xl border border-neutral-900 flex items-start gap-4">
                <FaUserTie className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-[12px] font-black uppercase tracking-wider text-neutral-500">Industry Mentorship</p>
                  <p className="text-white font-bold text-base mt-0.5">Mr. Harsh Shah & Dr. Shital Hajare</p>
                  <p className="text-neutral-400 text-xs">Software Development Division</p>
                </div>
              </div>

              <div className="bg-black p-5 rounded-2xl border border-neutral-900 flex items-start gap-4">
                <FaAward className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-[12px] font-black uppercase tracking-wider text-neutral-500">Academic Verification</p>
                  <p className="text-white font-bold text-base mt-0.5">AI & Data Science Department</p>
                  <p className="text-neutral-400 text-xs">FEAT, Datta Meghe Institute (DMIHER)</p>
                </div>
              </div>
            </div>

            {/* Core ABSA Project Metrics Framework */}
            <div className="bg-black border border-cyan-500/20 rounded-2xl p-6 mb-8 relative overflow-hidden">
              <h4 className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-5 flex items-center gap-2">
                <FaDatabase size={14} /> Production Performance Framework (Industrial ABSA Engine)
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="border-r border-neutral-800 last:border-0 pr-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Total Ingested</p>
                  <p className="text-xl font-black text-white mt-1">1,135 <span className="text-xs font-normal text-neutral-400">Subsets</span></p>
                </div>
                <div className="border-r border-neutral-800 last:border-0 pr-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Deduplicated Rows</p>
                  <p className="text-xl font-black text-white mt-1">58,332 <span className="text-xs font-normal text-neutral-400">Lines</span></p>
                </div>
                <div className="border-r border-neutral-800 last:border-0 pr-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">SVM Accuracy</p>
                  <p className="text-xl font-black text-emerald-400 mt-1">84.2%</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Logistic Reg.</p>
                  <p className="text-xl font-black text-emerald-400 mt-1">81.9%</p>
                </div>
              </div>
            </div>

            {/* Technical Responsibilities & Tasks */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                  <FaLaptopCode className="text-cyan-500" /> Key Research & Engineering Tasks
                </h4>
                <ul className="space-y-3 text-neutral-300 text-sm pl-1">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={14} />
                    <span><strong className="text-white">LLM Engineering (Llama 3 - 8B):</strong> Implemented and executed Meta's open-source large language model locally with optimized GPU acceleration routines for targeted RAG interfaces and customized Q&A fine-tuning.</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={14} />
                    <span><strong className="text-white">Multidomain ABSA Engine:</strong> Formulated an industrial text processing engine designed to isolate granular target tokens (e.g., specific hardware or hospitality components) and map semantic polarities.</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={14} />
                    <span><strong className="text-white">Infrastructure & DevOps:</strong> Sealed runtime script dependencies inside Docker containers, integrated decoupled FastAPI endpoints with background MySQL setups, and conducted multi-layer data deduplication filters to remove statistical leakage.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
                  <FaServer className="text-cyan-500" /> Applied Technical Environment
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Llama 3 (8B)", "Docker", "FastAPI", "Python 3.x", "Pandas", "NumPy", "Scikit-Learn", "SVM", "MySQL", "TF-IDF Vectors", "Git"].map((tag) => (
                    <span key={tag} className="text-[12px] font-semibold uppercase px-3 py-1 rounded-lg bg-black text-neutral-300 border border-neutral-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* EXPERIENCE 2: COSMOS DIGITAL */}
          <motion.div 
            variants={itemVariants} 
            className="relative bg-[#0a0a0a] border border-neutral-800/80 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-500/40 group shadow-xl"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] md:-left-[47px] top-8 w-5 h-5 rounded-full bg-neutral-700 border-4 border-black group-hover:bg-cyan-500 group-hover:scale-125 transition-all" />

            <div className="border-b border-neutral-800/80 pb-6 mb-6">
              <span className="text-neutral-400 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-black border border-neutral-700 inline-block mb-3">
                Software Tenure
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Python Developer Intern
              </h2>
              <div className="flex items-center gap-2 text-neutral-300 mt-2 font-medium text-lg">
                <FaBuilding className="text-cyan-500" />
                <span>Cosmos Digital</span>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black p-5 rounded-2xl border border-neutral-900 flex items-start gap-4">
                <FaUserTie className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-[12px] font-black uppercase tracking-wider text-neutral-500">Mentorship & Coordination</p>
                  <p className="text-white font-bold text-base mt-0.5">Mrs. Shital Hajare</p>
                  <p className="text-neutral-400 text-xs">Faculty Coordinator & Guide</p>
                </div>
              </div>

              <div className="bg-black p-5 rounded-2xl border border-neutral-900 flex items-start gap-4">
                <FaAward className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-[12px] font-black uppercase tracking-wider text-neutral-500">Academic Affiliation</p>
                  <p className="text-white font-bold text-base mt-0.5">AI & Data Science Department</p>
                  <p className="text-neutral-400 text-xs">FEAT, Datta Meghe Institute (DMIHER)</p>
                </div>
              </div>
            </div>

            {/* Core Areas Sections */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                  <FaLaptopCode className="text-cyan-500" /> Roles & System Responsibilities
                </h4>
                <ul className="space-y-3 text-neutral-300 text-sm pl-1">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={14} />
                    <span>Executed software design principles targeting script optimization and functional data pipelines using core Python frameworks.</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={14} />
                    <span>Handled systemic task allocation tracking tools and worked directly on modern equipment stacks and production code structures.</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={14} />
                    <span>Participated in problem identification paradigms designed to bridge core university computer science theories with practical industry software toolsets.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-500" /> Documented Learning Outcomes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python Development", "Data Pipelines", "System Architecture", "Problem-Based Learning", "Industrial Workflow", "Professional Ethics"].map((tag) => (
                    <span key={tag} className="text-[12px] font-semibold uppercase px-3 py-1 rounded-lg bg-black text-neutral-300 border border-neutral-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.main>
      
    </div>
  );
}