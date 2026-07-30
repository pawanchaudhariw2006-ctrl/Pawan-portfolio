'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

// Custom Typewriter Hook
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

export default function Home() {
  const imgSrc = "/pawan.jpg";
  const canvasRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const typewriter = useTypewriter([
    "AI Engineer",
    "Frontend Developer",
    "ML Researcher",
    "IoT Developer",
    "Problem Solver"
  ]);

  useEffect(() => {
    let animationId;
    let cleanupFn;

    const loadThree = async () => {
      const THREE = await import('three').then((m) => m.default || m);
      const canvas = canvasRef.current;
      if (!canvas) return;

      const W = window.innerWidth;
      const H = window.innerHeight;
      const isMobile = W < 1024;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.5;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      scene.fog = new THREE.FogExp2(0x000000, 0.03);

      const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
      // Reposition camera slightly further back on mobile for subtle background fit
      if (isMobile) {
        camera.position.set(0, 0, 16);
        camera.lookAt(0, 0, 0);
      } else {
        camera.position.set(8, 0.5, 11);
        camera.lookAt(6, 0, 0);
      }

      // Lights
      scene.add(new THREE.AmbientLight(0x1a1a6e, 1.2));
      const pl1 = new THREE.PointLight(0x22d3ee, 8, 25);
      pl1.position.set(8, 6, 6);
      scene.add(pl1);

      const pl2 = new THREE.PointLight(0x8b5cf6, 5, 20);
      pl2.position.set(2, -3, 4);
      scene.add(pl2);

      const pl3 = new THREE.PointLight(0xfbbf24, 8, 12);
      pl3.position.set(6, -2, 3);
      scene.add(pl3);

      const pl4 = new THREE.PointLight(0x22d3ee, 4, 15);
      pl4.position.set(4, 4, 2);
      scene.add(pl4);

      const rim = new THREE.DirectionalLight(0xffffff, 2);
      rim.position.set(2, 5, -5);
      scene.add(rim);

      const group = new THREE.Group();
      if (isMobile) {
        group.position.set(0, 2, -4);
        group.scale.set(0.65, 0.65, 0.65);
      } else {
        group.position.set(7, 0, -2);
      }
      scene.add(group);

      const sphereData = [
        [0, 0, 0, 1.2, 0x1a2a6e, 0.7, 0.3],
        [-1.2, 0.9, 0.3, 0.9, 0x1e3a9e, 0.6, 0.4],
        [1.2, 1.0, -0.2, 0.85, 0x22d3ee, 0.2, 0.9],
        [-1.0, -1.1, 0.5, 0.88, 0x0f1f6a, 0.8, 0.2],
        [1.1, -1.0, 0.4, 0.80, 0x1a2a8e, 0.7, 0.3],
        [-1.9, -0.2, 0, 0.70, 0x162070, 0.8, 0.2],
        [0.2, 1.9, -0.3, 0.65, 0x1e3595, 0.7, 0.3],
        [-0.3, -2.0, 0, 0.65, 0x0e1a58, 0.85, 0.15],
        [2.0, 0.1, 0.2, 0.60, 0x1a2a7e, 0.7, 0.3],
        [-1.5, 1.6, -0.4, 0.55, 0x22d3ee, 0.15, 0.95],
        [0.9, -1.9, 0.5, 0.52, 0xfbbf24, 0.05, 1.0],
        [-0.5, 0.5, 1.3, 0.45, 0xfbbf24, 0.05, 1.0],
        [1.6, 1.6, 0.3, 0.48, 0x152070, 0.8, 0.2],
        [-2.1, 1.1, -0.5, 0.42, 0x22d3ee, 0.1, 0.95],
        [0, -2.3, 0.2, 0.50, 0x1a2a7e, 0.75, 0.25],
        [2.3, -0.5, 0, 0.45, 0x8b5cf6, 0.2, 0.9],
        [-1.1, 2.2, 0.1, 0.40, 0x0f1f6a, 0.85, 0.15],
        [0.6, 2.3, -0.2, 0.42, 0x1e3a9e, 0.7, 0.3],
        [1.8, -1.5, 0.3, 0.38, 0x22d3ee, 0.2, 0.9],
        [-2.2, -1.2, 0.2, 0.35, 0x8b5cf6, 0.25, 0.85],
      ];

      sphereData.forEach(([x, y, z, r, col, rough, metal]) => {
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(r, 32, 32),
          new THREE.MeshStandardMaterial({ color: col, roughness: rough, metalness: metal })
        );
        mesh.position.set(x, y, z);
        group.add(mesh);
      });

      for (let i = 0; i < 40; i++) {
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.07, 8, 8),
          new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.05, metalness: 1.0 })
        );
        mesh.position.set(
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 2
        );
        group.add(mesh);
      }

      const particleGeo = new THREE.BufferGeometry();
      const count = 150;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 40;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: 0.05,
        transparent: true,
        opacity: 0.4,
      });
      scene.add(new THREE.Points(particleGeo, particleMat));

      let mx = 0,
        my = 0;
      const onMouseMove = (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMouseMove);

      const onResize = () => {
        const newW = window.innerWidth;
        const newH = window.innerHeight;
        renderer.setSize(newW, newH);
        camera.aspect = newW / newH;

        if (newW < 1024) {
          camera.position.set(0, 0, 16);
          camera.lookAt(0, 0, 0);
          group.position.set(0, 2, -4);
          group.scale.set(0.65, 0.65, 0.65);
        } else {
          camera.position.set(8, 0.5, 11);
          camera.lookAt(6, 0, 0);
          group.position.set(7, 0, -2);
          group.scale.set(1, 1, 1);
        }
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      let t = 0;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        t += 0.005;
        group.rotation.y = t * 0.25 + mx * 0.06;
        group.rotation.x = Math.sin(t * 0.2) * 0.1 + my * 0.03;
        pl1.position.x = 8 + Math.sin(t) * 2;
        pl1.position.z = 6 + Math.cos(t) * 2;
        pl3.position.x = 6 + Math.sin(t * 1.5 + 1) * 2;
        pl3.position.y = -2 + Math.cos(t * 1.3) * 2;
        renderer.render(scene, camera);
      };
      animate();

      cleanupFn = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
      };
    };

    loadThree();
    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Internship", href: "/internship" },
    { name: "Certificates", href: "/certificates" },
    { name: "Resume", href: "/resume" },
    { name: "Publications", href: "/publications" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">

      {/* THREE.JS BACKGROUND CANVAS */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />

      {/* NAVIGATION BAR */}
      <nav className="w-full p-4 md:p-6 lg:px-12 flex justify-between items-center z-50 bg-black/40 backdrop-blur-md lg:bg-transparent sticky top-0 lg:relative border-b border-white/5 lg:border-none">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 text-black font-black p-2 md:p-2.5 rounded text-base md:text-lg">PC</div>
          <span className="text-lg md:text-[22px] font-bold uppercase text-neutral-200 lg:text-neutral-400 leading-tight">
            Pawan Chaudhari <br />
            <span className="text-neutral-400 lg:text-neutral-600 text-xs md:text-[14px] tracking-wide">AI • ML • Developer</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-wrap justify-center gap-6 text-[16px] font-bold uppercase tracking-wider items-center">
          {navLinks.map((link) => (
            link.active ? (
              <span key={link.name} className="text-white cursor-default border-b-2 border-cyan-500 pb-0.5">{link.name}</span>
            ) : (
              <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition">{link.name}</Link>
            )
          ))}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/95 z-40 flex flex-col justify-between pt-24 pb-12 px-6 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-medium tracking-wide transition ${
                    link.active ? "text-cyan-400 font-bold" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-4xl self-center p-2 rounded-full border border-white/20 mt-6"
            >
              <HiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN HERO CONTENT */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 md:px-24 py-6 md:py-10 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 max-w-7xl w-full"
        >
          {/* Profile Image with Motion Glow Ring */}
          <motion.div variants={itemVariants} className="relative z-10 flex-shrink-0">
            <div
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] rounded-full border-2 border-dashed border-cyan-500/40 p-3 sm:p-4 flex items-center justify-center"
              style={{ boxShadow: '0 0 60px rgba(34,211,238,0.15)' }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full rounded-full overflow-hidden relative group"
                style={{
                  border: '4px solid rgba(34,211,238,0.5)',
                  boxShadow: '0 0 60px rgba(34,211,238,0.35), inset 0 0 30px rgba(34,211,238,0.1)',
                }}
              >
                <img
                  src={imgSrc}
                  alt="Pawan Chaudhari"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 z-10">
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-3 md:mb-6 leading-tight lg:leading-none">
              Hi, I'm <span className="text-cyan-400">Pawan Chaudhari</span>
            </motion.h1>

            {/* Dynamic Typewriter */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8 h-8 sm:h-10 flex items-center">
              <span className="text-base sm:text-xl md:text-2xl font-bold uppercase tracking-widest text-neutral-300">
                {typewriter}
                <span className="inline-block w-[3px] h-5 sm:h-6 bg-cyan-400 ml-1 animate-pulse" />
              </span>
            </motion.div>

            {/* Skill Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-5 mb-8 md:mb-10">
              {[
                "Artificial Intelligence",
                "Problem-Solving",
                "Machine Learning",
                "Deep Learning",
                "IoT Systems",
                "Computer Vision",
              ].map((tag) => (
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(34,211,238,0.15)' }}
                  key={tag}
                  className="px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-100 text-xs sm:text-sm md:text-[18px] font-bold uppercase tracking-wide cursor-default transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Information Cards Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-8 w-full">
              {[
                {
                  label: "📍 Location",
                  val: "Navsari, Maharashtra, India",
                  color: "text-rose-400",
                  link: "https://maps.app.goo.gl/g7ubX4eeDz4wzbqj9",
                },
                {
                  label: "💼 Expertise",
                  val: "AI/ML Research & Software Development",
                  color: "text-orange-400",
                  link: null,
                },
                {
                  label: "📧 Contact",
                  val: "pawanchaudhariw2006@gmail.com",
                  color: "text-blue-400",
                  link: "mailto:pawanchaudhariw2006@gmail.com",
                },
              ].map((item, i) => (
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 0 25px rgba(34,211,238,0.2)' }}
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center min-h-[90px] transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className={`text-xs sm:text-[15px] font-black uppercase tracking-widest mb-1 sm:mb-2 ${item.color}`}>
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-neutral-100 text-xs sm:text-[15px] font-bold leading-tight break-all hover:text-cyan-400 transition"
                    >
                      {item.val}
                    </a>
                  ) : (
                    <p className="text-neutral-100 text-xs sm:text-[15px] font-bold leading-tight">{item.val}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="w-full px-6 md:px-24 pt-4 pb-6 flex flex-col gap-6 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between w-full max-w-7xl items-center gap-6 md:gap-8"
        >
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Connect with me
            </span>
            <div className="flex gap-4 md:gap-12">
              {[
                { id: 'LinkedIn', icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/pawan-chaudhari-a9642a2a7" },
                { id: 'Email', icon: <MdEmail />, url: "mailto:pawanchaudhariw2006@gmail.com" },
                { id: 'Instagram', icon: <FaInstagram />, url: "#" },
              ].map((social) => (
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="text-2xl md:text-[36px]">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              See what I'm doing
            </span>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/pawanchaudhariw2006-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-2xl md:text-[36px]"><FaGithub /></span>
            </motion.a>
          </div>
        </motion.div>

        <div className="border-t border-white/10 w-full text-center pt-4">
          <p className="text-xs md:text-[14px] text-neutral-500 font-medium tracking-wide">
            © 2026 Pawan Chaudhari — FEAT DMIHER — Built with React and Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}