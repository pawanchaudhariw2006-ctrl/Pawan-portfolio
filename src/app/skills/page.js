"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaPython, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaFigma 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiTensorflow, SiPytorch, SiMysql, SiMongodb, SiOpencv, SiJavascript 
} from 'react-icons/si';

export default function SkillsPage() {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', damping: 12 } }
  };

  // Data for Floating Skill Bubbles
  const floatingSkills = [
    { icon: <FaGitAlt className="text-orange-500 text-3xl" />, name: 'Git', pos: 'top-[8%] left-[18%]' },
    { icon: <FaCss3Alt className="text-blue-500 text-3xl" />, name: 'CSS', pos: 'top-[10%] left-[30%]' },
    { icon: <SiPytorch className="text-orange-600 text-3xl" />, name: 'PyTorch', pos: 'top-[8%] left-[48%]' },
    { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: 'HTML', pos: 'top-[5%] left-[65%]' },
    { icon: <SiMysql className="text-cyan-600 text-3xl" />, name: 'MySQL', pos: 'top-[20%] left-[80%]' },
    { icon: <SiMongodb className="text-green-500 text-3xl" />, name: 'MongoDB', pos: 'top-[45%] left-[12%]' },
    { icon: <SiTensorflow className="text-orange-500 text-4xl" />, name: 'TensorFlow', pos: 'top-[52%] left-[26%]' },
    { icon: <SiCplusplus className="text-blue-600 text-3xl" />, name: 'C++', pos: 'top-[35%] left-[38%]' },
    { icon: <FaPython className="text-yellow-400 text-3xl" />, name: 'Python', pos: 'top-[40%] left-[58%]' },
    { icon: <FaJava className="text-red-500 text-3xl" />, name: 'Java', pos: 'top-[65%] left-[46%]' },
    { icon: <SiOpencv className="text-blue-400 text-3xl" />, name: 'OpenCV', pos: 'top-[68%] left-[64%]' },
    { icon: <SiJavascript className="text-yellow-400 text-3xl" />, name: 'JavaScript', pos: 'top-[62%] left-[81%]' },
    { icon: <FaFigma className="text-purple-400 text-3xl" />, name: 'UI/UX Design', pos: 'top-[30%] left-[75%]' },
  ];

  // Data for Categorized Cards
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'Java']
    },
    {
      title: 'Web & UI/UX Design',
      skills: ['HTML', 'CSS', 'JavaScript', 'UI/UX Design']
    },
    {
      title: 'Databases & Tools',
      skills: ['MySQL', 'MongoDB', 'Git']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'Seaborn', 'Matplotlib', 'Pandas', 'NumPy', 'VScode']
    },
    {
      title: 'Core Concepts',
      skills: ['Data Structures & Algorithms', 'Machine Learning', 'Deep Learning', 'LLM Module', 'Explainable AI (XAI)']
    },
    {
      title: 'Soft Skills',
      skills: ['Teamwork', 'Problem Solving', 'Creativity', 'Communication']
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden antialiased">
      
      {/* LOCKED NAVIGATION BAR */}
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
          
          {/* Highlighted for this page */}
          <span className="text-white cursor-default whitespace-nowrap border-b-2 border-cyan-500 pb-0.5">Skills</span>
          
          <Link href="/internship" className="text-gray-400 hover:text-white transition whitespace-nowrap">Internship</Link>
          <Link href="/certificates" className="text-gray-400 hover:text-white transition whitespace-nowrap">Certificates</Link>
          <Link href="/resume" className="text-gray-400 hover:text-white transition whitespace-nowrap">Resume</Link>
          <Link href="/publications" className="text-gray-400 hover:text-white transition whitespace-nowrap">Publications</Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition whitespace-nowrap">About Me</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition whitespace-nowrap">Contact</Link>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto px-6 pt-40 pb-16 relative z-10 space-y-10"
      >
        {/* Title Header */}
        <header className="text-left relative z-10 space-y-2">
          <motion.h2 variants={itemVariants} className="text-5xl font-black text-cyan-400 uppercase tracking-tight">
            My Skills
          </motion.h2>
          <motion.p variants={itemVariants} className="text-neutral-400 text-base font-normal">
            Technical expertise blended with interactive UI/UX design & machine learning.
          </motion.p>
        </header>

        {/* Dynamic Floating Skill Bubble Container */}
        <motion.div 
          variants={itemVariants} 
          className="w-full h-[480px] bg-black rounded-2xl border border-neutral-800 relative overflow-hidden shadow-2xl"
        >
          {floatingSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={bubbleVariants}
              whileHover={{ scale: 1.15, translateY: -4 }}
              className={`absolute ${skill.pos} flex flex-col items-center justify-center p-4 rounded-2xl bg-black border border-neutral-800 hover:border-cyan-400/60 cursor-pointer transition-all duration-300 w-24 h-24 text-center shadow-lg hover:shadow-cyan-500/20 group`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-[12px] font-semibold text-neutral-300 group-hover:text-cyan-400 mt-1.5 tracking-wide transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -3 }}
              className="bg-black border border-neutral-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 space-y-4 shadow-lg group"
            >
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors tracking-wide border-b border-neutral-800/80 pb-3">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-neutral-400 text-[15px] font-medium leading-relaxed group/item hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.main>

    
    </div>
  );
}