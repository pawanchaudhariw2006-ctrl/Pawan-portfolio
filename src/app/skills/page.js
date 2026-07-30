"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaFigma 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiTensorflow, SiPytorch, SiMysql, SiMongodb, SiOpencv, SiJavascript 
} from 'react-icons/si';

export default function SkillsPage() {
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

  const floatingSkills = [
    { icon: <FaGitAlt className="text-orange-500 text-2xl md:text-3xl" />, name: 'Git', pos: 'top-[8%] left-[10%] md:left-[18%]' },
    { icon: <FaCss3Alt className="text-blue-500 text-2xl md:text-3xl" />, name: 'CSS', pos: 'top-[10%] left-[30%]' },
    { icon: <SiPytorch className="text-orange-600 text-2xl md:text-3xl" />, name: 'PyTorch', pos: 'top-[8%] left-[50%] md:left-[48%]' },
    { icon: <FaHtml5 className="text-orange-500 text-3xl md:text-4xl" />, name: 'HTML', pos: 'top-[5%] left-[72%] md:left-[65%]' },
    { icon: <SiMysql className="text-cyan-600 text-2xl md:text-3xl" />, name: 'MySQL', pos: 'top-[22%] left-[82%] md:left-[80%]' },
    { icon: <SiMongodb className="text-green-500 text-2xl md:text-3xl" />, name: 'MongoDB', pos: 'top-[42%] left-[8%] md:left-[12%]' },
    { icon: <SiTensorflow className="text-orange-500 text-3xl md:text-4xl" />, name: 'TensorFlow', pos: 'top-[50%] left-[28%] md:left-[26%]' },
    { icon: <SiCplusplus className="text-blue-600 text-2xl md:text-3xl" />, name: 'C++', pos: 'top-[35%] left-[45%] md:left-[38%]' },
    { icon: <FaPython className="text-yellow-400 text-2xl md:text-3xl" />, name: 'Python', pos: 'top-[40%] left-[68%] md:left-[58%]' },
    { icon: <FaJava className="text-red-500 text-2xl md:text-3xl" />, name: 'Java', pos: 'top-[68%] left-[32%] md:left-[46%]' },
    { icon: <SiOpencv className="text-blue-400 text-2xl md:text-3xl" />, name: 'OpenCV', pos: 'top-[68%] left-[58%] md:left-[64%]' },
    { icon: <SiJavascript className="text-yellow-400 text-2xl md:text-3xl" />, name: 'JavaScript', pos: 'top-[62%] left-[80%] md:left-[81%]' },
    { icon: <FaFigma className="text-purple-400 text-2xl md:text-3xl" />, name: 'UI/UX Design', pos: 'top-[30%] left-[85%] md:left-[75%]' },
  ];

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
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden antialiased pt-20 md:pt-24">
      
      {/* MAIN CONTENT AREA */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10 space-y-8"
      >
        {/* Title Header */}
        <header className="text-left relative z-10 space-y-2">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-cyan-400 uppercase tracking-tight">
            My Skills
          </motion.h2>
          <motion.p variants={itemVariants} className="text-neutral-400 text-sm md:text-base font-normal">
            Technical expertise blended with interactive UI/UX design & machine learning.
          </motion.p>
        </header>

        {/* Dynamic Floating Skill Bubble Container (Desktop & Tablet Interactive Board) */}
        <motion.div 
          variants={itemVariants} 
          className="hidden md:block w-full h-[480px] bg-black rounded-2xl border border-neutral-800 relative overflow-hidden shadow-2xl"
        >
          {floatingSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={bubbleVariants}
              whileHover={{ scale: 1.15, translateY: -4 }}
              className={`absolute ${skill.pos} flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-cyan-400/60 cursor-pointer transition-all duration-300 w-20 h-20 md:w-24 md:h-24 text-center shadow-lg hover:shadow-cyan-500/20 group`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-[10px] md:text-[12px] font-semibold text-neutral-300 group-hover:text-cyan-400 mt-1 tracking-wide transition-colors leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Skill Badges Grid (For Clean Mobile Viewing) */}
        <motion.div variants={itemVariants} className="block md:hidden bg-neutral-950 border border-neutral-800 rounded-2xl p-4">
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">Tech Stack Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {floatingSkills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-black border border-neutral-800 rounded-xl">
                {skill.icon}
                <span className="text-xs text-neutral-200 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categorized Skills Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -3 }}
              className="bg-neutral-950 border border-neutral-800 hover:border-cyan-500/40 rounded-2xl p-5 md:p-6 transition-all duration-300 space-y-4 shadow-lg group"
            >
              <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors tracking-wide border-b border-neutral-800/80 pb-3">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-neutral-400 text-xs md:text-[15px] font-medium leading-relaxed group/item hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
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