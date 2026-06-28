"use client";

import { motion } from "framer-motion";
import { GlassCard, ScrollReveal } from "@/components/ui/AnimatedComponents";
import { Particles } from "@/components/ui/Particles";
import { stats } from "@/utils/data";

export function About() {
  return (
    <section id="about" data-scroll-section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 text-center">
          {/* Mesh gradient behind heading */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[500px] h-[200px] bg-gradient-to-r from-purple/30 via-cyan/20 to-purple/30 blur-[80px] rounded-full"
            />
          </div>

          <h2 className="relative font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter stroke-text">
            ABOUT ME
          </h2>

          {/* Floating numbers */}
          {["8.22", "555+", "300+", "3+"].map((num, i) => (
            <motion.span
              key={num}
              className="absolute text-xs text-purple-light/40 font-mono hidden md:block"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3 + i, repeat: Infinity }}
            >
              {num}
            </motion.span>
          ))}
        </div>

        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple/10 via-cyan/5 to-purple/10 rounded-3xl blur-xl" />
            <GlassCard
              className="relative p-8 md:p-12 holographic-card overflow-hidden"
              hover={false}
            >
              <Particles count={35} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
              <p className="relative z-10 text-lg md:text-xl text-gray-300 text-center leading-relaxed">
                I am a Computer and Communication Engineering student at Sri
                Eshwar College of Engineering with a strong passion for backend
                development, cloud computing, DevOps and artificial intelligence.
                I enjoy building scalable applications and AI-driven solutions that
                create real-world impact.
              </p>
            </GlassCard>
          </div>
        </ScrollReveal>

        <div data-stagger-children className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} data-stagger-item>
              <GlassCard className="p-6 md:p-8 text-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2"
                >
                  {stat.value}
                  {stat.suffix}
                </motion.div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple/5 to-cyan/5 pointer-events-none" />
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
