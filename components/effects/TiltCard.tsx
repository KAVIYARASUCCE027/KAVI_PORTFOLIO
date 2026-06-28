"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className={cn("transform-gpu", className)}
    >
      {children}
    </motion.div>
  );
}
