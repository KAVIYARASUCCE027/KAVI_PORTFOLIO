"use client";

import { motion } from "framer-motion";
import { Rocket, Cloud, Trophy, GraduationCap } from "lucide-react";
import { heroStats } from "@/utils/data";
import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/utils/cn";

const iconMap = {
  rocket: Rocket,
  cloud: Cloud,
  trophy: Trophy,
  graduation: GraduationCap,
};

function StatItem({
  label,
  value,
  suffix,
  icon,
  index,
}: {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  index: number;
}) {
  const { count, ref } = useCounter({ end: value });
  const Icon = iconMap[icon as keyof typeof iconMap] || Rocket;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.1 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="flex items-center gap-5 p-4 sm:p-5 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-purple/10"
    >
      <div className="relative shrink-0">
        {/* Glow circle behind icon */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#a855f7] to-[#38bdf8] rounded-full blur-[10px] opacity-40 group-hover:opacity-75 transition-opacity" />
        <div className="relative p-3.5 rounded-full bg-[#050816]/75 border border-purple/35 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.25)]">
          <Icon className="w-5.5 h-5.5 text-[#38BDF8]" />
        </div>
      </div>
      <div>
        <p className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          {count}
          {suffix}
        </p>
        <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className={cn(
        "relative z-20 max-w-5xl mx-auto mt-12 px-6",
        "rounded-[24px] border border-purple/15 bg-black/30 backdrop-blur-2xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.03)]"
      )}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4 md:py-6">
        {heroStats.map((stat, index) => (
          <StatItem key={stat.label} {...stat} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
