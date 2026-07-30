"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaDownload, FaGraduationCap, FaBriefcase, FaCode, 
  FaBook, FaCertificate, FaEnvelope, FaPhone, 
  FaLinkedin, FaGithub, FaMapMarkerAlt, FaCogs, FaCodeBranch
} from 'react-icons/fa';

export default function ResumePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.05 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">

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
          <span className="text-white cursor-default whitespace-nowrap border-b-2 border-cyan-500 pb-0.5">Resume</span>
          <Link href="/publications" className="text-gray-400 hover:text-white transition whitespace-nowrap">Publications</Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition whitespace-nowrap">About Me</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition whitespace-nowrap">Contact</Link>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 pt-32 pb-16 relative z-10 space-y-6"
      >
        {/* TOP BAR / PRINT */}
        <header className="flex justify-between items-center print:hidden mb-2">
          <div>
            <h1 className="text-3xl font-black text-cyan-400 flex items-center gap-2">
              📄 Resume
            </h1>
            <p className="text-neutral-400 text-sm">A quick glance at my journey.</p>
          </div>
        </header>

        {/* 1. HEADER & SUMMARY CARD */}
        <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Personal Info */}
          <div className="md:col-span-6 space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 uppercase tracking-tight">
              👨‍💻 PAWAN DILIP CHAUDHARI
            </h2>
            <p className="text-sm font-semibold text-neutral-300">
              AI & Data Science Undergraduate | Aspiring ML Engineer
            </p>

            <div className="text-xs text-neutral-400 space-y-1.5 pt-1">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400" /> Ner, Maharashtra, 445102
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-cyan-400" /> pawanchaudhariw2006@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-cyan-400" /> +91 9561445179
              </p>
            </div>
          </div>

          {/* Right Column: Professional Summary */}
          <div className="md:col-span-6 bg-black border border-cyan-500/20 rounded-xl p-5 flex flex-col justify-center">
            <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider mb-2">
              Professional Summary:
            </h3>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
              Aspiring AI Engineer with a research background featuring 3 IEEE publications in Cybersecurity & Healthcare AI. Experienced in deploying Llama 3 models, ABSA engines, Deepfake analyzers, and IoT systems. Skilled in Python, TensorFlow, PyTorch, Docker, FastAPI, and React.js. Certified by IBM, Google, and Univ. of Edinburgh.
            </p>
          </div>
        </motion.div>

        {/* 2. EDUCATION CARD */}
        <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
            <FaGraduationCap /> Education
          </h3>

          <div className="space-y-3 text-sm">
            <div className="border-l-2 border-cyan-500/50 pl-4">
              <p className="font-bold text-white">
                B.Tech in Artificial Intelligence & Data Science <span className="text-neutral-400 font-normal">— FEAT, DMIHER (Wardha)</span>
              </p>
              <p className="text-xs text-neutral-400 mt-0.5">2023 – Present | SGPA (5th Sem): 6.86/10 | CGPA: 6.30/10</p>
              <p className="text-xs text-neutral-500 mt-0.5">NAAC A++ Accredited Institution (CGPA 3.78/4)</p>
            </div>

            <div className="border-l-2 border-neutral-800 pl-4">
              <p className="font-semibold text-white">
                12th Board (PCMB) <span className="text-neutral-400 font-normal">— Harikamal Science Jr. College, Ner</span>
              </p>
              <p className="text-xs text-neutral-400">2021 – 2023 | Percentage: 61.83%</p>
            </div>

            <div className="border-l-2 border-neutral-800 pl-4">
              <p className="font-semibold text-white">
                10th Board <span className="text-neutral-400 font-normal">— Eleghant I.F English Medium High School, Ner</span>
              </p>
              <p className="text-xs text-neutral-400">2020 – 2021 | Percentage: 91.20%</p>
            </div>
          </div>
        </motion.div>

        {/* 4. PROJECTS CARD */}
        <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-6 space-y-3">
          <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
            <FaCode /> Featured Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-black rounded-xl border border-neutral-800">
              <p className="font-bold text-white">1. AI Deepfake Dual Analyzer (Audio & Video)</p>
              <p className="text-neutral-400 mt-1">94.2% accuracy using CNN-RNN & Librosa MFCC feature extraction.</p>
              <p className="text-cyan-400/80 font-mono mt-1">TensorFlow, Librosa, OpenCV</p>
            </div>

            <div className="p-3 bg-black rounded-xl border border-neutral-800">
              <p className="font-bold text-white">2. Automated Glaucoma Identification</p>
              <p className="text-neutral-400 mt-1">Deep learning system with 96.5% sensitivity & Grad-CAM visual heatmaps.</p>
              <p className="text-cyan-400/80 font-mono mt-1">PyTorch, ResNet-50, U-Net, Flask</p>
            </div>

            <div className="p-3 bg-black rounded-xl border border-neutral-800 sm:col-span-2">
              <p className="font-bold text-white">3. Smart Car Parking System (IoT)</p>
              <p className="text-neutral-400 mt-1">Real-time ESP32/Arduino occupancy detection with 99% accuracy; reduced search time by 40%.</p>
              <p className="text-cyan-400/80 font-mono mt-1">ESP32, Firebase, Arduino IDE, C++</p>
            </div>
          </div>
        </motion.div>

        {/* 5. SKILLS BADGES */}
        <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-6 space-y-3">
          <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
            <FaCogs /> Technical & Professional Skills
          </h3>

          <div className="flex flex-wrap gap-2 text-xs">
            {["Python", "C++", "JavaScript", "SQL", "RAG", "TensorFlow", "FastAPI", "React.js", "Docker", "Git", "MySQL", "Scikit-Learn", "OpenCV" ].map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-lg bg-black border border-neutral-800 text-neutral-300 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 6. PUBLICATIONS & CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PUBLICATIONS */}
          <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
              <FaBook /> IEEE Research Publications
            </h3>
            <ul className="text-xs space-y-2 text-neutral-300">
              <li>• <strong className="text-white">Smart Car Parking System</strong> — ICEARS, 2025</li>
              <li>• <strong className="text-white">Deep Learning in Cybersecurity</strong> — IDICAIEI, 2024</li>
              <li>• <strong className="text-white">Lung Cancer AI Diagnostics</strong> — ICMLAS, 2025</li>
            </ul>
          </motion.div>

          {/* CERTIFICATIONS */}
          <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
              <FaCertificate /> Global Certifications
            </h3>
            <ul className="text-xs space-y-1.5 text-neutral-300">
              <li>• Foundations of Cybersecurity — <strong>Google</strong></li>
              <li>• Python for Data Science, AI & Dev — <strong>IBM</strong></li>
              <li>• Generative AI: Data Analytics — <strong>IBM</strong></li>
              <li>• Precision Medicine Data Science — <strong>Univ. of Edinburgh</strong></li>
            </ul>
          </motion.div>
        </div>

        {/* ENLARGED SOCIAL LINKS BADGES */}
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 pt-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black border border-neutral-800 text-neutral-200 text-sm md:text-base font-semibold hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md active:scale-95"
          >
            <FaGithub className="text-cyan-400 text-lg md:text-xl" /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/pawan-chaudhari-a9642a2a7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black border border-neutral-800 text-neutral-200 text-sm md:text-base font-semibold hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md active:scale-95"
          >
            <FaLinkedin className="text-blue-400 text-lg md:text-xl" /> LinkedIn
          </a>
        </motion.div>

        {/* EMBEDDED SCROLLABLE PDF RESUME VIEWER */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="bg-black border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src="/Resume.pdf#toolbar=0&navpanes=0&view=FitW" 
              className="w-full h-[650px] md:h-[750px] border-none"
              title="Pawan Chaudhari Resume PDF"
            />
          </div>

          {/* DOWNLOAD RESUME BUTTON */}
          <div className="flex justify-start">
            <a 
              href="/Resume.pdf" 
              download="Pawan_Chaudhari_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-black uppercase text-xs rounded-xl transition-all shadow-lg shadow-cyan-400/20 active:scale-95"
            >
              <FaDownload className="text-sm" /> Download Resume
            </a>
          </div>
        </motion.div>

      </motion.main>

      
    </div>
  );
}