"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/utils/data";
import { cn } from "@/utils/cn";
import { MagneticButton } from "@/components/effects/MagneticButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="fixed top-4 left-0 right-0 z-50 px-4"
      >
        <nav
          className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 h-[70px] rounded-[25px] bg-[#050816]/40 backdrop-blur-xl border border-purple/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500"
        >
          <motion.a
            href="#home"
            className="font-display text-2xl font-bold bg-gradient-to-r from-purple-light to-cyan-light bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            KM
          </motion.a>

          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-xs font-semibold tracking-wider transition-colors rounded-full uppercase",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-purple/10 rounded-full border border-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-cyan shadow-[0_0_8px_#06b6d4] transition-all duration-300",
                      isActive ? "w-3/4" : "w-0"
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <MagneticButton href="#contact" variant="primary" className="!px-5 !py-2.5 !text-xs !rounded-[14px]">
                Let&apos;s Connect
                <ArrowUpRight size={14} className="ml-1" />
              </MagneticButton>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050816]/95 backdrop-blur-2xl pt-24"
          >
            <div className="flex flex-col items-center gap-4 p-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-2xl font-display text-gray-300 hover:text-white"
                >
                  {link.label}
                </motion.button>
              ))}
              <MagneticButton href="#contact" variant="primary" className="mt-4">
                Let&apos;s Connect
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
