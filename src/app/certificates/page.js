"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaAward, FaEye, FaTimes, FaExpand, FaImage
} from 'react-icons/fa';

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);
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

  const categories = ["All", "AI & GenAI", "Data & Analytics", "Software & Web3", "Research Papers"];

  // Exact PNG file names mapped from public/certificates/
  const certificates = [
    {
      id: 1,
      title: "Generative AI: Enhance your Data Analytics Career",
      issuer: "IBM / Coursera",
      date: "Dec 2024",
      category: "AI & GenAI",
      credentialId: "50MO2KWD22B7",
      featured: true,
      imagePath: "/certificates/Generative AI Enhance your Data Analytics Career.png" 
    },
    {
      id: 2,
      title: "Back-End Developer Capstone",
      issuer: "Meta / Coursera",
      date: "Jun 2024",
      category: "Software & Web3",
      credentialId: "E6LDM6NAMQES",
      featured: true,
      imagePath: "/certificates/Back-End Developer Capstone.png"
    },
    {
      id: 3,
      title: "Deep Learning Approach in Cybersecurity (ICMLAS 2025)",
      issuer: "IEEE / Stamford Int. University",
      date: "Mar 2025",
      category: "Research Papers",
      credentialId: "IEEE-ICMLAS-2025",
      featured: true,
      imagePath: "/certificates/Deep Learning Approach in Cybersecurity.png"
    },
    {
      id: 4,
      title: "Data Analysis with Python",
      issuer: "IBM / Coursera",
      date: "Sep 2024",
      category: "Data & Analytics",
      credentialId: "QC8ACRXUCXC3",
      featured: false,
      imagePath: "/certificates/Data Analysis with Python.png"
    },
    {
      id: 5,
      title: "Hashgraph Developer Certification",
      issuer: "The Hashgraph Association (Hedera)",
      date: "Jul 2025",
      category: "Software & Web3",
      credentialId: "HEDERA-DEV-2025",
      featured: false,
      imagePath: "/certificates/certificate.png"
    },
    {
      id: 6,
      title: "Foundations of Cybersecurity",
      issuer: "Google / Coursera",
      date: "Dec 2024",
      category: "Software & Web3",
      credentialId: "JCTYYUW5MYVT",
      featured: false,
      imagePath: "/certificates/Foundations of Cybersecurity.png"
    },
    {
      id: 7,
      title: "Advance Lung Cancer Diagnosis using AI (ICEARS 2025)",
      issuer: "IEEE / St. Mother Theresa Eng. College",
      date: "Feb 2025",
      category: "Research Papers",
      credentialId: "IEEE-ICEARS-2025",
      featured: false,
      imagePath: "/certificates/Advance Lung Cancer Diagnosis using AI.png"
    }
  ];

  const filteredCertificates = certificates.filter(cert => {
    return selectedCategory === "All" || cert.category === selectedCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.05 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

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
        className="max-w-6xl mx-auto px-6 py-12 relative z-10 space-y-10"
      >
        
        {/* HEADER SECTION */}
        <section className="space-y-4">
          <motion.div variants={itemVariants} className="flex items-center gap-3 text-cyan-400">
            <FaAward className="text-3xl" />
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white">
              Certifications & <span className="text-cyan-400">Credentials</span>
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-neutral-400 text-sm md:text-base leading-relaxed text-justify max-w-3xl">
            Selected high-impact certifications, research paper presentations, and specialized engineering credentials. Click any card to preview the high-res image.
          </motion.p>
        </section>

        {/* CATEGORY FILTERS */}
        <motion.section variants={itemVariants}>
          <div className="flex flex-wrap gap-2.5 justify-start">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat 
                    ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/20" 
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.section>

        {/* CERTIFICATES IMAGE GRID */}
        <section>
          <AnimatePresence mode="wait">
            {filteredCertificates.length > 0 ? (
              <motion.div 
                key={selectedCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCertificates.map((cert) => (
                  <motion.div 
                    key={cert.id}
                    variants={itemVariants}
                    className="bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all group flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer"
                    onClick={() => setActiveModalItem(cert)}
                  >
                    {/* IMAGE CONTAINER */}
                    <div className="relative w-full aspect-[16/10] bg-neutral-950 flex items-center justify-center border-b border-neutral-800/80 overflow-hidden group/img">
                      <img 
                        src={encodeURI(cert.imagePath)} 
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />

                      {/* HOVER OVERLAY */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                        <FaExpand className="text-cyan-400 text-2xl" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Preview Certificate</span>
                      </div>

                      {cert.featured && (
                        <div className="absolute top-3 right-3 bg-cyan-500 text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md z-10">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* CARD DETAILS */}
                    <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                          {cert.title}
                        </h3>
                        
                        <div className="flex items-center justify-between text-xs text-neutral-400">
                          <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                          <span className="font-mono text-neutral-500">{cert.date}</span>
                        </div>
                      </div>

                      {/* BOTTOM ACTIONS */}
                      <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono text-neutral-500">
                          ID: <span className="text-neutral-300">{cert.credentialId}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-bold group-hover:underline">
                          <FaEye className="text-xs" /> View Image
                        </span>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-16 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-3"
              >
                <p className="text-neutral-400 font-medium text-sm">No credentials found in this category.</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="text-xs font-bold text-cyan-400 underline hover:text-cyan-300"
                >
                  Show All Credentials
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </motion.main>

      {/* FULL-SCREEN IMAGE PREVIEW MODAL */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden max-w-5xl w-full h-[85vh] flex flex-col shadow-2xl"
            >
              {/* MODAL HEADER */}
              <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-black">
                <div className="flex items-center gap-3">
                  <FaImage className="text-cyan-400 text-xl" />
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white">{activeModalItem.title}</h3>
                    <p className="text-xs text-cyan-400">{activeModalItem.issuer} • {activeModalItem.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition"
                >
                  <FaTimes />
                </button>
              </div>

              {/* MODAL PREVIEW IMAGE */}
              <div className="w-full flex-grow bg-black flex items-center justify-center overflow-hidden p-4">
                <img 
                  src={encodeURI(activeModalItem.imagePath)} 
                  alt={activeModalItem.title} 
                  className="max-h-[70vh] w-auto object-contain rounded-lg border border-neutral-800"
                />
              </div>

              {/* MODAL FOOTER */}
              <div className="p-4 border-t border-neutral-800 bg-black flex justify-between items-center text-xs">
                <span className="font-mono text-neutral-500">Credential ID: {activeModalItem.credentialId}</span>
                <a 
                  href={encodeURI(activeModalItem.imagePath)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-bold"
                >
                  Open Original Image in New Tab →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}