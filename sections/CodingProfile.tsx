"use client";

import { motion } from "framer-motion";
import { Code2, ChefHat, Target, type LucideIcon } from "lucide-react";
import { FadeUp, ScrollReveal, AnimatedCounter } from "@/components/ui/AnimatedComponents";
import { codingProfile } from "@/utils/data";

const icons: LucideIcon[] = [Code2, ChefHat, Target];

export function CodingProfile() {
  return (
    <section id="coding-profile" data-scroll-section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple/5 via-transparent to-cyan/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeUp className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-light via-white to-cyan-light bg-clip-text text-transparent">
              Coding Profile
            </span>
          </h2>
        </FadeUp>

        <ScrollReveal>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan/20 rounded-full blur-[80px] -z-10" />

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {codingProfile.map((item, index) => {
                const Icon = icons[index];
                const suffix =
                  "suffix" in item ? (item.suffix as string) : "";

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center relative"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
                      <Icon className="text-purple-light" size={28} />
                    </div>
                    <AnimatedCounter
                      end={item.value}
                      suffix={suffix}
                      label={item.label}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
