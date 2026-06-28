"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/utils/cn";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

export function FadeUp({
  delay = 0,
  duration = 0.6,
  children,
  className,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  children: React.ReactNode;
}

export function ScrollReveal({
  direction = "up",
  delay = 0,
  children,
  className,
  ...props
}: ScrollRevealProps) {
  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  const { x, y } = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        "shadow-glass before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none",
        hover && "hover:border-purple/30 hover:shadow-glow transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  outlined?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  outlined = false,
}: SectionHeadingProps) {
  return (
    <FadeUp className="mb-16 text-center">
      {outlined ? (
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent stroke-text mb-4">
          {title}
        </h2>
      ) : (
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-light via-white to-cyan-light bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      )}
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </FadeUp>
  );
}

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function GradientButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
}: GradientButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple to-cyan text-white shadow-glow hover:shadow-glow-cyan hover:scale-105",
    secondary:
      "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple/30",
    outline:
      "border border-purple/50 text-purple-light hover:bg-purple/10 hover:border-cyan/50",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyan to-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {content}
    </motion.button>
  );
}

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  className,
}: AnimatedCounterProps) {
  const { count, ref } = useCounter({ end });

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="relative">
        <span className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-light to-cyan-light bg-clip-text text-transparent">
          {count}
          {suffix}
        </span>
        <div className="absolute -inset-4 bg-gradient-to-r from-purple/20 to-cyan/20 blur-xl opacity-50 -z-10" />
      </div>
      <p className="text-gray-400 text-sm mt-2">{label}</p>
    </div>
  );
}