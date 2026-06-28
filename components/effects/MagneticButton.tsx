"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "neon";
  className?: string;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: MagneticButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(0.25);

  const variants = {
    primary:
      "bg-gradient-to-r from-purple to-cyan text-white shadow-glow hover:shadow-glow-cyan border border-transparent",
    secondary:
      "bg-white/5 border border-white/10 text-white hover:border-purple/40 hover:bg-white/10 backdrop-blur-xl",
    outline:
      "text-purple-light hover:text-white hover:shadow-glow hover:bg-purple/10 border border-transparent",
    neon:
      "text-cyan-light hover:bg-cyan/10 shadow-glow-cyan hover:shadow-glow border border-transparent",
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden group";

  const ripple = (
  <span className="absolute inset-0 overflow-hidden rounded-xl">
      <span className="absolute inset-0 scale-0 rounded-full bg-white/20 opacity-0 transition-transform duration-500 group-hover:scale-[3] group-hover:opacity-100 group-active:scale-[4]" />
    </span>
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
      style={{
        transition: "transform 0.2s ease-out",
        ...(variant === "outline" ? {
          backgroundImage: "linear-gradient(#050816, #050816), linear-gradient(to right, #8b5cf6, #06b6d4)",
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "border-box",
        } : {}),
        ...(variant === "neon" ? {
          backgroundImage: "linear-gradient(rgba(5,8,22,0.7), rgba(5,8,22,0.7)), linear-gradient(to right, #06b6d4, #8b5cf6)",
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "border-box",
        } : {}),
      }}
    >
      {ripple}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyan/0 via-white/10 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block w-full">
      {content}
    </button>
  );
}
