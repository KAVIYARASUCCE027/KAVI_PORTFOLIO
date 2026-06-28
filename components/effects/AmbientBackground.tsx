"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Nebula gradients */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-purple/20 blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-cyan/15 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-purple-dark/30 blur-[140px]"
      />

      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple/20 to-transparent rotate-12" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan/15 to-transparent -rotate-6" />

      {/* Stars */}
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${(i * 17 + 7) % 100}%`,
            top: `${(i * 23 + 11) % 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1, 0.5] }}
          transition={{
            duration: 2 + (i % 5),
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
