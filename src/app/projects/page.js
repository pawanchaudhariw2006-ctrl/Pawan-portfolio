"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const projects = [
    {
      title: "Glaucoma Project",
      category: "AI & Healthcare",
      description: "An AI-powered Glaucoma Detection System using CNN (TensorFlow/Keras) and Flask. Detects glaucoma from retinal fundus images with MongoDB integration.",
      tech: ["Python", "TensorFlow", "Keras", "Flask", "MongoDB"],
      link: "https://github.com/pawanchaudhariw2006-ctrl/Glaucoma_Project",
      github: "https://github.com/pawanchaudhariw2006-ctrl/Glaucoma_Project",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
      borderColor: "group-hover:border-cyan-500/40",
      tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      accentText: "text-cyan-400"
    },
    {
      title: "Fake Audio & Video Identification",
      category: "Deep Learning & Security",
      description: "Deep learning system to detect deepfake audio and video content using spectrogram analysis and frame-level inspection. Built with Streamlit.",
      tech: ["Python", "Deep Learning", "Streamlit", "OpenCV"],
      link: "https://github.com/pawanchaudhariw2006-ctrl/Fake-Audio-and-Video-Identification",
      github: "https://github.com/pawanchaudhariw2006-ctrl/Fake-Audio-and-Video-Identification",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
      borderColor: "group-hover:border-cyan-500/40",
      tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      accentText: "text-cyan-400"
    },
    {
      title: "ABSAS",
      category: "Data Science & NLP",
      description: "Aspect-Based Sentiment Analysis System built to parse textual components and map multi-layered context tracking targets using machine learning pipelines.",
      tech: ["Python", "NLP", "Scikit-Learn", "ML"],
      link: "https://github.com/pawanchaudhariw2006-ctrl/ABSAS",
      github: "https://github.com/pawanchaudhariw2006-ctrl/ABSAS",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
      borderColor: "group-hover:border-cyan-500/40",
      tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      accentText: "text-cyan-400"
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden antialiased pt-20 md:pt-24">

      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-12 relative z-10 space-y-10"
      >
        <header className="text-left space-y-2">
          <motion.h1 variants={projectVariants} className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h1>
          <motion.p variants={projectVariants} className="text-neutral-400 text-sm md:text-base max-w-2xl">
            A showcase of Machine Learning systems, AI in healthcare, cybersecurity tools, and interactive UI/UX designs.
          </motion.p>
        </header>

        {/* 3-COLUMN PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={projectVariants}
              whileHover={{ y: -6 }}
              className={`group relative bg-black rounded-[24px] overflow-hidden border border-neutral-800 transition-all duration-500 ${project.borderColor} ${project.glowColor}`}
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden relative border-b border-neutral-800 bg-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-105" 
                />
              </div>

              {/* Details */}
              <div className="p-5 relative z-20 space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${project.accentText}`}>
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 tracking-tight line-clamp-1 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all border border-neutral-800">
                      <FaGithub size={15} />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all border border-neutral-800">
                      <FaExternalLinkAlt size={13} />
                    </a>
                  </div>
                </div>

                <p className="text-neutral-400 line-clamp-3 text-xs md:text-sm min-h-[54px] font-normal leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-black uppercase px-2.5 py-1 rounded-full bg-black text-neutral-300 border border-neutral-800 transition-all duration-300 group-hover:border-cyan-500/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>
      
    </div>
  );
}