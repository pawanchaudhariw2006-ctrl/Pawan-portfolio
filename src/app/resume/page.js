"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDownload, FaGraduationCap, FaCode, 
  FaBook, FaCertificate, FaEnvelope, FaPhone, 
  FaLinkedin, FaGithub, FaMapMarkerAlt, FaCogs, FaEye
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
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden pt-20 md:pt-24">

      {/* MAIN CONTAINER */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 py-8 relative z-10 space-y-6"
      >
        {/* TOP BAR / PRINT */}
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center print:hidden mb-2 gap-4">
          <div>
            <h1 className="text-3xl font-black text-cyan-400 flex items-center gap-2">
              📄 Resume
            </h1>
            <p className="text-neutral-400 text-sm">A quick glance at my journey.</p>
          </div>

          <a 
            href="/Resume.pdf" 
            download="Pawan_Chaudhari_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold uppercase text-xs rounded-xl transition-all shadow-lg shadow-cyan-400/20 active:scale-95 w-fit"
          >
            <FaDownload className="text-sm" /> Download PDF
          </a>
        </header>

        {/* 1. HEADER & SUMMARY CARD */}
        <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-5 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Personal Info */}
          <div className="md:col-span-6 space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-cyan-400 uppercase tracking-tight break-words">
              👨‍💻 PAWAN DILIP CHAUDHARI
            </h2>
            <p className="text-xs md:text-sm font-semibold text-neutral-300">
              AI & Data Science Undergraduate | Aspiring ML Engineer
            </p>

            <div className="text-xs text-neutral-400 space-y-2 pt-1">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400 flex-shrink-0" /> Ner, Maharashtra, 445102
              </p>
              <p className="flex items-center gap-2 break-all">
                <FaEnvelope className="text-cyan-400 flex-shrink-0" /> pawanchaudhariw2006@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-cyan-400 flex-shrink-0" /> +91 9561445179
              </p>
            </div>
          </div>

          {/* Right Column: Professional Summary */}
          <div className="md:col-span-6 bg-neutral-950 border border-cyan-500/20 rounded-xl p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xs font-black uppercase text-cyan-400 tracking-wider mb-2">
              Professional Summary:
            </h3>
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
              Aspiring AI Engineer with a research background featuring 3 IEEE publications in Cybersecurity & Healthcare AI. Experienced in deploying Llama 3 models, ABSA engines, Deepfake analyzers, and IoT systems. Skilled in Python, TensorFlow, PyTorch, Docker, FastAPI, and React.js. Certified by IBM, Google, and Univ. of Edinburgh.
            </p>
          </div>
        </motion.div>

        {/* 2. EDUCATION CARD */}
        <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-5 md:p-6 space-y-4">
          <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
            <FaGraduationCap /> Education
          </h3>

          <div className="space-y-3 text-xs md:text-sm">
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

        {/* 3. PROJECTS CARD */}
        <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-5 md:p-6 space-y-3">
          <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
            <FaCode /> Featured Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
              <p className="font-bold text-white">1. AI Deepfake Dual Analyzer (Audio & Video)</p>
              <p className="text-neutral-400 mt-1">94.2% accuracy using CNN-RNN & Librosa MFCC feature extraction.</p>
              <p className="text-cyan-400/80 font-mono mt-1">TensorFlow, Librosa, OpenCV</p>
            </div>

            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
              <p className="font-bold text-white">2. Automated Glaucoma Identification</p>
              <p className="text-neutral-400 mt-1">Deep learning system with 96.5% sensitivity & Grad-CAM visual heatmaps.</p>
              <p className="text-cyan-400/80 font-mono mt-1">PyTorch, ResNet-50, U-Net, Flask</p>
            </div>

            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 sm:col-span-2">
              <p className="font-bold text-white">3. Smart Car Parking System (IoT)</p>
              <p className="text-neutral-400 mt-1">Real-time ESP32/Arduino occupancy detection with 99% accuracy; reduced search time by 40%.</p>
              <p className="text-cyan-400/80 font-mono mt-1">ESP32, Firebase, Arduino IDE, C++</p>
            </div>
          </div>
        </motion.div>

        {/* 4. SKILLS BADGES */}
        <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-5 md:p-6 space-y-3">
          <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
            <FaCogs /> Technical & Professional Skills
          </h3>

          <div className="flex flex-wrap gap-2 text-xs">
            {["Python", "C++", "JavaScript", "SQL", "RAG", "TensorFlow", "FastAPI", "React.js", "Docker", "Git", "MySQL", "Scikit-Learn", "OpenCV" ].map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 5. PUBLICATIONS & CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-5 md:p-6 space-y-3">
            <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
              <FaBook /> IEEE Research Publications
            </h3>
            <ul className="text-xs space-y-2 text-neutral-300">
              <li>• <strong className="text-white">Smart Car Parking System</strong> — ICEARS, 2025</li>
              <li>• <strong className="text-white">Deep Learning in Cybersecurity</strong> — IDICAIEI, 2024</li>
              <li>• <strong className="text-white">Lung Cancer AI Diagnostics</strong> — ICMLAS, 2025</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-black border border-neutral-800 rounded-2xl p-5 md:p-6 space-y-3">
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

        {/* SOCIAL LINKS BADGES */}
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 pt-2">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black border border-neutral-800 text-neutral-200 text-xs md:text-sm font-semibold hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md active:scale-95"
          >
            <FaGithub className="text-cyan-400 text-base" /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/pawan-chaudhari-a9642a2a7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black border border-neutral-800 text-neutral-200 text-xs md:text-sm font-semibold hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md active:scale-95"
          >
            <FaLinkedin className="text-blue-400 text-base" /> LinkedIn
          </a>
        </motion.div>

        {/* RESUME PDF VIEWER / MOBILE DOWNLOAD */}
        <motion.div variants={itemVariants} className="space-y-4 pt-2">
          {/* Mobile PDF Fallback Card */}
          <div className="block md:hidden bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center space-y-4">
            <p className="text-sm font-medium text-neutral-300">
              Looking to review my official CV document?
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="/Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-neutral-800 border border-neutral-700 text-cyan-400 font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2"
              >
                <FaEye /> Preview PDF Document
              </a>
              <a 
                href="/Resume.pdf" 
                download="Pawan_Chaudhari_Resume.pdf"
                className="w-full py-3 bg-cyan-400 text-black font-black text-xs uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/20"
              >
                <FaDownload /> Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Desktop PDF Embedded Viewer */}
          <div className="hidden md:block bg-black border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src="/Resume.pdf#toolbar=0&navpanes=0&view=FitW" 
              className="w-full h-[700px] border-none"
              title="Pawan Chaudhari Resume PDF"
            />
          </div>
        </motion.div>

      </motion.main>
    </div>
  );
}