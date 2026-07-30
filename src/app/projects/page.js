'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Projects Data Array
const projects = [
  {
    title: "Glaucoma Project",
    category: "AI & HEALTHCARE",
    description: "An AI-powered Glaucoma Detection System using CNN (TensorFlow/Keras) and Flask. Detects glaucoma from retinal fundus images with MongoDB integration.",
    tech: ["PYTHON", "TENSORFLOW", "KERAS", "FLASK", "MONGODB"],
    github: "https://github.com/pawanchaudhariw2006-ctrl",
    demo: "",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
    borderColor: "group-hover:border-cyan-500/40",
    tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentText: "text-cyan-400"
  },
  {
    title: "Fake Audio & Video Identification",
    category: "DEEP LEARNING & SECURITY",
    description: "Deep learning system to detect deepfake audio and video content using spectrogram analysis and frame-level inspection. Built with Streamlit.",
    tech: ["PYTHON", "DEEP LEARNING", "STREAMLIT", "OPENCV"],
    github: "https://github.com/pawanchaudhariw2006-ctrl",
    demo: "",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
    borderColor: "group-hover:border-cyan-500/40",
    tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentText: "text-cyan-400"
  },
  {
    title: "ABSAS",
    category: "DATA SCIENCE & NLP",
    description: "Aspect-Based Sentiment Analysis System built to parse textual components and map multi-layered context tracking targets using machine learning pipelines.",
    tech: ["PYTHON", "NLP", "SCIKIT-LEARN", "ML"],
    github: "https://github.com/pawanchaudhariw2006-ctrl",
    demo: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
    borderColor: "group-hover:border-cyan-500/40",
    tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentText: "text-cyan-400"
  },
  {
    title: "3D Portfolio",
    category: "FULL STACK & 3D GRAPHICS",
    description: "A high-performance personal portfolio showcasing AI/ML projects and research. Features interactive Three.js 3D graphics, Framer Motion animations, and custom UI components.",
    tech: ["NEXT.JS", "REACT", "THREE.JS", "TAILWIND CSS", "FRAMER MOTION"],
    github: "https://github.com/pawanchaudhariw2006-ctrl/Pawan-portfolio",
    demo: "",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-an-animated-illustration-that-features-a-young-man-playing-a-game-image_2680953.jpg",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]",
    borderColor: "group-hover:border-cyan-500/40",
    tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentText: "text-cyan-400"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-3">
            FEATURED <span className="text-cyan-400">PROJECTS</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl">
            A showcase of Machine Learning systems, AI in healthcare, cybersecurity tools, and interactive UI/UX designs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${project.borderColor} ${project.glowColor}`}
            >
              <div>
                {/* Image Preview */}
                <div className="h-48 w-full overflow-hidden relative border-b border-neutral-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${project.accentText}`}>
                      {project.category}
                    </span>

                    {/* Action Icons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="p-1.5 text-neutral-400 hover:text-cyan-400 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-cyan-500/50 transition"
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-white mb-2">{project.title}</h2>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="px-5 pb-5 flex flex-wrap gap-1.5">
                {project.tech && project.tech.map((item, tIdx) => (
                  <span
                    key={tIdx}
                    className={`px-2 py-0.5 text-[9px] font-bold tracking-wider rounded-md border ${project.tagBg}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}