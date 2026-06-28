"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  ChefHat,
  ArrowUpRight,
} from "lucide-react";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { HeroStats } from "@/sections/HeroStats";
import { siteConfig } from "@/utils/data";
import ProfileImage from "@/components/ProfileImage";
import Tilt from "react-parallax-tilt";
import { 
  SiDocker, 
  SiSpringboot, 
  SiKubernetes, 
  SiMongodb 
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";

const TECH_CARDS = [
  { label: "AWS", color: "#FF9900", icon: <FaAws className="w-6 h-6 text-[#FF9900]" /> },
  { label: "Docker", color: "#2496ED", icon: <SiDocker className="w-6 h-6 text-[#2496ED]" /> },
  { label: "Spring Boot", color: "#6DB33F", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
  { label: "Kubernetes", color: "#326CE5", icon: <SiKubernetes className="w-6 h-6 text-[#326CE5]" /> },
  { label: "MongoDB", color: "#47A248", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
  { label: "AI Brain", color: "#a855f7", icon: <FaBrain className="w-6 h-6 text-[#a855f7]" /> },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-line", {
          y: "100%",
          duration: 1.2,
          stagger: 0.15,
        })
        .from(".hero-role", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-desc", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-btn", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        }, "-=0.3")
        .from(".hero-social-item", {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          stagger: 0.08,
        }, "-=0.2");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Code2, href: siteConfig.social.leetcode, label: "LeetCode" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col pt-28 pb-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* LEFT */}
          <div
            ref={leftRef}
            className="text-center lg:text-left order-2 lg:order-1"
            style={{
              transform: `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px, 0)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple/20 bg-purple/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple-light flex items-center gap-2">
                WELCOME TO MY PORTFOLIO 👋
              </span>
            </div>

            <h1 className="font-display font-bold leading-[0.95] mb-6">
              <span className="block overflow-hidden">
                <span className="hero-line block text-5xl sm:text-6xl md:text-7xl lg:text-8xl hero-3d-text">
                  Kaviyarasu
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line block text-5xl sm:text-6xl md:text-7xl lg:text-8xl hero-3d-text-alt">
                  M
                </span>
              </span>
            </h1>

            <p className="hero-role text-lg md:text-xl font-bold tracking-wide mb-4">
              <span className="text-[#38BDF8]">{siteConfig.role.split("|")[0].trim()}</span>
              <span className="text-gray-600 mx-3">|</span>
              <span className="text-[#A855F7]">{siteConfig.role.split("|")[1]?.trim()}</span>
            </p>

            <p className="hero-desc text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {siteConfig.tagline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <div className="hero-btn">
                <MagneticButton href="#projects" variant="primary" className="!px-6 !py-3.5 !rounded-xl !bg-gradient-to-r !from-[#38bdf8] !to-[#a855f7] !shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:!shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all">
                  View Projects
                  <ArrowUpRight size={16} className="ml-1" />
                </MagneticButton>
              </div>
              <div className="hero-btn">
                <MagneticButton href={siteConfig.resumeUrl} variant="outline" className="!px-6 !py-3.5 !rounded-xl hover:!shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <Download size={16} className="mr-2" />
                  Download Resume
                </MagneticButton>
              </div>
              <div className="hero-btn">
                <MagneticButton href="#contact" variant="outline" className="!px-6 !py-3.5 !rounded-xl hover:!shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  <Mail size={16} className="mr-2" />
                  Contact Me
                </MagneticButton>
              </div>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="hero-social-item w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a855f7]/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all duration-300 shadow-glass"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT - Interactive concentric HTML Orbit System */}
          <div className="relative order-1 lg:order-2 h-[480px] sm:h-[550px] lg:h-[600px] w-full flex items-center justify-center select-none overflow-hidden lg:overflow-visible">
            {/* Background constellation stars canvas */}
            <HeroCanvas />

            {/* Orbit container (responsive width/height and orbit radius) */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center [--orbit-radius:-115px] sm:[--orbit-radius:-150px] md:[--orbit-radius:-170px]">
              
              {/* Inner Orbit (Purple glow, R=70%, 25s rotation) */}
              <div 
                className="absolute border border-purple/35 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.25),inset_0_0_15px_rgba(168,85,247,0.15)] animate-[css-orbit_25s_linear_infinite]"
                style={{ width: '70%', height: '70%' }}
              />

              {/* Middle Orbit (Blue glow, R=85%, 35s rotation) */}
              <div 
                className="absolute border border-cyan/25 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.25),inset_0_0_15px_rgba(56,189,248,0.15)] animate-[css-orbit_35s_linear_infinite_reverse]"
                style={{ width: '85%', height: '85%' }}
              />

              {/* Outer Orbit (Dashed orbit, R=100%, 50s rotation) */}
              <div 
                className="absolute border border-dashed border-purple-light/20 rounded-full animate-[css-orbit_50s_linear_infinite]"
                style={{ width: '100%', height: '100%' }}
              />

              {/* Centered Profile Picture with double neon rings (outer purple, inner blue) and glows, float, and mouse parallax */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                  transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
                  transition: "transform 0.15s ease-out",
                }}
                className="relative z-10 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full flex items-center justify-center p-[4px] bg-[#a855f7] shadow-[0_0_35px_rgba(168,85,247,0.75),inset_0_0_15px_rgba(168,85,247,0.4)] pointer-events-auto"
              >
                {/* Inner Blue Neon Ring */}
                <div className="w-full h-full rounded-full p-[4px] bg-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.65),inset_0_0_15px_rgba(56,189,248,0.4)] flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050816]">
                    <ProfileImage />
                  </div>
                </div>
                {/* Backlit Glowing Portal effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple/35 to-cyan/35 blur-3xl -z-10 animate-pulse" />
              </motion.div>

              {/* 6 Tech Cards orbiting smoothly and staying upright */}
              {TECH_CARDS.map((card, idx) => {
                const angle = (idx * 360) / 6;
                return (
                  <div
                    key={card.label}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      transform: `rotate(${angle}deg)`,
                    }}
                  >
                    {/* Orbit rotator */}
                    <div
                      className="absolute inset-0 animate-[css-orbit_45s_linear_infinite]"
                      style={{
                        animationDelay: `-${idx * 7.5}s`,
                      }}
                    >
                      {/* Radius translate */}
                      <div 
                        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                        style={{
                          transform: 'translate3d(0, var(--orbit-radius), 0)',
                        }}
                      >
                        {/* Counter-rotator to keep card upright */}
                        <div
                          className="animate-[css-counter-orbit_45s_linear_infinite]"
                          style={{
                            animationDelay: `-${idx * 7.5}s`,
                          }}
                        >
                          <Tilt
                            glareEnable
                            glareMaxOpacity={0.15}
                            glareColor={card.color}
                            scale={1.08}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            className="rounded-2xl"
                          >
                            <div
                              className="flex flex-col items-center justify-center p-3 w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-2xl border transition-all duration-300 shadow-lg cursor-grab active:cursor-grabbing"
                              style={{
                                background: "rgba(10, 10, 25, 0.6)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                borderColor: "rgba(255, 255, 255, 0.1)",
                                boxShadow: `0 0 25px rgba(168, 85, 247, 0.45), 0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
                              }}
                            >
                              <div className="mb-1 sm:mb-1.5 transition-transform duration-300 hover:scale-110">
                                {card.icon}
                              </div>
                              <span className="text-[8px] sm:text-[9px] font-extrabold tracking-wider uppercase text-white whitespace-nowrap">
                                {card.label}
                              </span>
                            </div>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-2 sm:-bottom-4 z-20 px-4 py-2.5 rounded-xl border border-purple/30 bg-[#050816]/90 backdrop-blur-xl shadow-glow shadow-purple/20 pointer-events-none"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">Backend Developer</span>
                </div>
                <p className="text-[10px] text-gray-400">Cloud • DevOps • AI • Backend</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-2 mt-8 text-gray-500"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>

        <HeroStats />
      </div>
    </section>
  );
}
