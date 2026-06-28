"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SkillProgressProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillProgress({ name, level, delay = 0 }: SkillProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs text-purple-light">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-purple to-cyan",
            "relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:animate-shimmer"
          )}
        />
      </div>
    </motion.div>
  );
}
