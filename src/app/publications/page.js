"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  FaBookOpen, FaExternalLinkAlt, FaCalendarAlt, 
  FaUniversity, FaUserGraduate, FaQuoteRight,
  FaSearch, FaChevronDown, FaChevronUp, FaMicrochip,
  FaShieldAlt, FaHeartbeat, FaLayerGroup, FaAward
} from 'react-icons/fa';

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const categories = ["All", "AI & Healthcare", "Cybersecurity", "Smart Systems"];

  const publications = [
    {
      id: 1,
      title: "Development of a Smart Car Parking System",
      venue: "2024 2nd DMIHER International Conference on Artificial Intelligence in Healthcare, Education and Industry (IDICAIHEI)",
      publisher: "IEEE",
      date: "2024",
      category: "Smart Systems",
      icon: FaMicrochip,
      abstract: "Explores the design and implementation of an intelligent automated car parking system utilizing real-time sensors, IoT frameworks, and cloud-backed monitoring to optimize space allocation in smart cities.",
      authors: ["Pawan Dilip Chaudhari", "Mayur Muneshwar", "Tilak Kale", "Chatianya Meghe", "Shital Hajare"],
      link: "https://ieeexplore.ieee.org/document/10842803",
      type: "Conference Paper",
      tags: ["IoT Sensors", "Smart Cities", "Cloud Architecture", "Automation"]
    },
    {
      id: 2,
      title: "Deep Learning Approach and its Application in the Cybersecurity Domain",
      venue: "2025 International Conference on Machine Learning and Autonomous Systems (ICMLAS)",
      publisher: "IEEE",
      date: "2025",
      category: "Cybersecurity",
      icon: FaShieldAlt,
      abstract: "Explores advanced deep learning paradigms tailored for proactive cybersecurity defense mechanisms, threat identification, and automated anomaly detection across enterprise network architectures.",
      authors: ["Pawan Dilip Chaudhari", "Amit Gudadhe"],
      link: "https://ieeexplore.ieee.org/document/10968413",
      type: "Conference Paper",
      tags: ["Deep Learning", "Threat Detection", "Network Anomaly", "Neural Networks"]
    },
    {
      id: 3,
      title: "Advanced Lung Cancer Diagnosis and Treatment with Artificial Intelligence: Applications, Methods, and Future Directions",
      venue: "2025 International Conference on Electronics and Renewable Systems (ICEARS)",
      publisher: "IEEE",
      date: "2025",
      category: "AI & Healthcare",
      icon: FaHeartbeat,
      abstract: "Presents an artificial intelligence methodology utilizing deep neural network architectures for early-stage lung cancer identification from high-resolution medical imaging scans and therapeutic decision support.",
      authors: ["Pawan Dilip Chaudhari", "Amit Gudadhe"],
      link: "https://ieeexplore.ieee.org/document/10940577",
      type: "Conference Paper",
      tags: ["Medical AI", "Computer Vision", "Oncology", "Deep Neural Networks"]
    },
    {
      id: 4,
      title: "Enhancing Patient Outcomes in Spine Surgery: The Role of AI in Implant Design and Postoperative Care",
      venue: "2025 3rd DMIHER International Conference on Artificial Intelligence in Healthcare, Education and Industry (IDICAIHEI)",
      publisher: "IEEE",
      date: "2025",
      category: "AI & Healthcare",
      icon: FaHeartbeat,
      abstract: "Investigates the integration of Artificial Intelligence algorithms in personalized orthopaedic implant modeling, predictive postoperative care recovery modeling, and spine surgery outcomes optimization.",
      authors: ["Lucky Ghai", "Sumit Ladwan", "Karan Bhute", "Pawan Chaudhari", "Veer Bobade", "Utkarsha Pacharaney"],
      link: "https://ieeexplore.ieee.org/document/11378608",
      type: "Conference Paper",
      tags: ["Orthopaedics", "Surgical AI", "Predictive Analytics", "Custom Implants"]
    }
  ];

  // Toggle Abstract Expansion
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter & Search Logic
  const filteredPublications = publications.filter(pub => {
    const matchesCategory = selectedCategory === "All" || pub.category === selectedCategory;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          pub.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.05 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden antialiased">

      {/* NAVIGATION BAR */}
      <nav className="w-full p-6 md:px-12 flex justify-between items-center z-[100] fixed top-0 left-0 right-0 bg-black border-b border-neutral-900">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 text-black font-black p-2.5 px-3.5 rounded text-lg shadow-lg shadow-cyan-500/20">PC</div>
          <span className="text-[22px] font-bold uppercase text-neutral-400 leading-tight">
            Pawan Chaudhari <br />
            <span className="text-neutral-600 text-[14px] tracking-wide">AI • ML • Developer</span>
          </span>
        </div>
        
        <div className="flex gap-4 md:gap-6 text-[16px] font-bold uppercase tracking-wider items-center whitespace-nowrap">
          <Link href="/" className="text-gray-400 hover:text-white transition whitespace-nowrap">Home</Link>
          <Link href="/projects" className="text-gray-400 hover:text-white transition whitespace-nowrap">Projects</Link>
          <Link href="/skills" className="text-gray-400 hover:text-white transition whitespace-nowrap">Skills</Link>
          <Link href="/Internship" className="text-gray-400 hover:text-white transition whitespace-nowrap">Internship</Link>
          <Link href="/certificates" className="text-gray-400 hover:text-white transition whitespace-nowrap">Certificates</Link>
          <Link href="/resume" className="text-gray-400 hover:text-white transition whitespace-nowrap">Resume</Link>
          <span className="text-white cursor-default whitespace-nowrap border-b-2 border-cyan-500 pb-0.5">Publications</span>
          <Link href="/about" className="text-gray-400 hover:text-white transition whitespace-nowrap">About Me</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition whitespace-nowrap">Contact</Link>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10 space-y-10"
      >
        
        {/* HEADER SECTION */}
        <section className="space-y-4">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
            <FaAward className="text-cyan-400" /> IEEE Published Works
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Research <span className="text-cyan-400">Publications</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Peer-reviewed research contributions published across international IEEE conferences. Specializing in applied Artificial Intelligence, Deep Learning in Healthcare, Intelligent Systems, and Advanced Cybersecurity Architecture.
          </motion.p>
        </section>

        {/* STATS HIGHLIGHT BAR */}
        <motion.section variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-black border border-neutral-800 rounded-2xl p-4 text-center">
            <p className="text-2xl font-black text-cyan-400">04</p>
            <p className="text-[11px] text-neutral-400 uppercase font-mono tracking-wider font-semibold">IEEE Papers</p>
          </div>
          <div className="bg-black border border-neutral-800 rounded-2xl p-4 text-center">
            <p className="text-2xl font-black text-cyan-400">100%</p>
            <p className="text-[11px] text-neutral-400 uppercase font-mono tracking-wider font-semibold">Peer-Reviewed</p>
          </div>
          <div className="bg-black border border-neutral-800 rounded-2xl p-4 text-center">
            <p className="text-2xl font-black text-cyan-400">03</p>
            <p className="text-[11px] text-neutral-400 uppercase font-mono tracking-wider font-semibold">Key Domains</p>
          </div>
          <div className="bg-black border border-neutral-800 rounded-2xl p-4 text-center">
            <p className="text-2xl font-black text-cyan-400">2024-2025</p>
            <p className="text-[11px] text-neutral-400 uppercase font-mono tracking-wider font-semibold">Publication Years</p>
          </div>
        </motion.section>

        {/* SEARCH AND CATEGORY FILTERS */}
        <motion.section variants={itemVariants} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === cat 
                      ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25 scale-105" 
                      : "bg-black border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[240px]">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
              <input 
                type="text"
                placeholder="Search topic, author, key term..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black border border-neutral-800 focus:border-cyan-400 focus:outline-none rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 transition-all font-mono"
              />
            </div>
          </div>
        </motion.section>

        {/* PUBLICATIONS CARDS LIST */}
        <section>
          <AnimatePresence mode="wait">
            {filteredPublications.length > 0 ? (
              <motion.div 
                key={`${selectedCategory}-${searchQuery}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6"
              >
                {filteredPublications.map((pub) => {
                  const CategoryIcon = pub.icon || FaBookOpen;
                  const isExpanded = expandedId === pub.id;

                  return (
                    <motion.div 
                      key={pub.id}
                      variants={itemVariants}
                      className="bg-black border border-neutral-800 hover:border-cyan-500/50 rounded-2xl p-6 md:p-8 transition-all duration-300 group space-y-5 relative overflow-hidden"
                    >
                      {/* TOP BADGES & METADATA */}
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono font-semibold">
                            <CategoryIcon className="text-xs" /> {pub.category}
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-black border border-neutral-800 text-neutral-400 font-mono">
                            {pub.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 font-mono text-neutral-500 text-xs">
                          <span className="flex items-center gap-1.5">
                            <FaUniversity className="text-cyan-500/80" /> {pub.publisher}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-xs text-neutral-500" /> {pub.date}
                          </span>
                        </div>
                      </div>

                      {/* TITLE */}
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                        {pub.title}
                      </h3>

                      {/* VENUE BOX */}
                      <div className="text-xs font-mono text-neutral-300 bg-black p-3.5 rounded-xl border border-neutral-800 flex items-start gap-2.5">
                        <span className="text-cyan-400 font-bold shrink-0 mt-0.5">VENUE:</span>
                        <span className="leading-relaxed text-neutral-400">{pub.venue}</span>
                      </div>

                      {/* COLLAPSIBLE ABSTRACT */}
                      <div className="space-y-2">
                        <p className={`text-xs md:text-sm text-neutral-300 leading-relaxed text-justify ${!isExpanded ? "line-clamp-2" : ""}`}>
                          {pub.abstract}
                        </p>
                        <button 
                          onClick={() => toggleExpand(pub.id)}
                          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors font-semibold"
                        >
                          {isExpanded ? (
                            <>Show Less <FaChevronUp className="text-[10px]" /></>
                          ) : (
                            <>Read Full Abstract <FaChevronDown className="text-[10px]" /></>
                          )}
                        </button>
                      </div>

                      {/* KEY TAGS */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {pub.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-black border border-neutral-800 text-neutral-400">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* AUTHORS */}
                      <div className="flex flex-wrap gap-2 items-center pt-2 text-xs border-t border-neutral-800/40">
                        <span className="text-neutral-500 flex items-center gap-1.5 font-semibold shrink-0">
                          <FaUserGraduate className="text-cyan-400" /> Authors:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {pub.authors.map((author, aIdx) => {
                            const isMain = author.includes("Pawan");
                            return (
                              <span 
                                key={aIdx}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                                  isMain 
                                    ? "bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold shadow-sm shadow-cyan-500/10" 
                                    : "bg-black border border-neutral-800 text-neutral-400"
                                }`}
                              >
                                {author}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* ACTION LINK */}
                      <div className="pt-3 flex items-center justify-between">
                        <span className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5">
                          <FaQuoteRight className="text-cyan-500/60 text-[10px]" /> IEEE Xplore Digital Library
                        </span>

                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-cyan-400 hover:text-black border border-neutral-800 hover:border-cyan-400 text-neutral-200 hover:text-black text-xs font-bold rounded-xl transition-all duration-300 shadow-md group/btn"
                        >
                          Read on IEEE <FaExternalLinkAlt className="text-[10px] group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-20 bg-black border border-neutral-800 rounded-2xl space-y-3"
              >
                <p className="text-neutral-400 font-medium text-sm">No publications found matching your search criteria.</p>
                <button 
                  onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                  className="text-xs font-bold text-cyan-400 underline hover:text-cyan-300 transition"
                >
                  Clear Filters & Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </motion.main>

      
    </div>
  );
}