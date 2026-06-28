"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Server,
  Database,
  Cloud,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Tilt from "react-parallax-tilt";
import { skillCategories } from "@/utils/data";
import { cn } from "@/utils/cn";
import {
  SiCplusplus,
  SiPython,
  SiSpringboot,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiLinux,
  SiIntellijidea,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FiCpu, FiMonitor, FiDatabase } from "react-icons/fi";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Core CS": Cpu,
  Backend: Server,
  Databases: Database,
  "Cloud and DevOps": Cloud,
  "Developer Tools": Wrench,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "C++": SiCplusplus,
  Java: FaJava,
  Python: SiPython,
  "Spring Boot": SiSpringboot,
  MongoDB: SiMongodb,
  AWS: FaAws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Linux: SiLinux,
  "VS Code": VscVscode,
  IntelliJ: SiIntellijidea,
  Postman: SiPostman,
  SQL: FiDatabase,
  DBMS: FiDatabase,
  "Operating Systems": FiMonitor,
  "Data Structures and Algorithms": FiCpu,
};

function ProgressRing({ level, id }: { level: number; id: string }) {
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - (level / 100) * circumference;
  const gradId = `ring-gradient-${id.replace(/\s+/g, "-")}`;

  return (
    <div className="relative w-11 h-11 shrink-0">
      <svg className="w-11 h-11 -rotate-90" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
        <motion.circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1.2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-300">
        {level}%
      </span>
    </div>
  );
}

export function Skills() {
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.title }))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" data-scroll-section className="py-24 md:py-32 relative overflow-hidden">
      {/* Visual background enhancements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#a855f7] via-white to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.25)]">
              Technical Dashboard
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base">
              My engineering stack, programming competencies, and developer environments.
            </p>
          </motion.div>
        </div>

        {/* Top Skill Cards (Futuristic Dashboard Widgets) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20"
        >
          {allSkills.map((skill) => {
            const Icon = iconMap[skill.name] || Code2;
            return (
              <motion.div key={skill.name} variants={itemVariants} className="h-full">
                <Tilt
                  glareEnable
                  glareMaxOpacity={0.15}
                  glareColor="#38bdf8"
                  scale={1.05}
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  className="h-full rounded-2xl"
                >
                  <div className="relative flex flex-col justify-between p-5 h-full rounded-2xl border border-[#a855f7]/30 bg-[rgba(10,10,25,0.6)] backdrop-blur-[20px] shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:border-[#38bdf8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 group cursor-pointer">
                    {/* Corner gradient glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a855f7]/0 to-[#38bdf8]/0 group-hover:from-[#a855f7]/5 group-hover:to-[#38bdf8]/5 transition-all duration-500 pointer-events-none" />

                    <div className="flex items-center justify-between w-full mb-6">
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-[#38bdf8]/30 group-hover:bg-[#38bdf8]/10 text-gray-400 group-hover:text-[#38bdf8] transition-all duration-300">
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <ProgressRing level={skill.level} id={skill.name} />
                    </div>

                    <div className="w-full text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#a855f7] block mb-1">
                        {skill.category}
                      </span>
                      <h4 className="text-sm font-extrabold text-white tracking-wide truncate group-hover:text-[#38bdf8] transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Panels (Futuristic Control Panels) */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-xl md:text-2xl font-extrabold text-white tracking-wide mb-8"
          >
            Stack Categories
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const CatIcon = categoryIcons[category.title] || Code2;
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="p-6 h-full rounded-2xl border border-[#a855f7]/20 bg-[rgba(10,10,25,0.6)] backdrop-blur-[20px] shadow-[0_0_20px_rgba(168,85,247,0.03)] hover:border-[#a855f7]/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-[#a855f7]/5 border border-[#a855f7]/20 text-[#a855f7] group-hover:text-[#38bdf8] group-hover:border-[#38bdf8]/30 group-hover:bg-[#38bdf8]/10 transition-all duration-300">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-extrabold text-white text-base tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((s) => {
                      const TechIcon = iconMap[s.name] || FiCpu;
                      return (
                        <div
                          key={s.name}
                          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-[#38bdf8]/5 hover:border-[#38bdf8]/35 hover:text-white transition-all duration-300 text-xs font-semibold text-gray-300 cursor-default"
                        >
                          <TechIcon className="w-3.5 h-3.5 text-[#38bdf8] transition-colors duration-300" />
                          <span>{s.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
