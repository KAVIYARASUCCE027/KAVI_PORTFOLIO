"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { FadeUp, GlassCard, ScrollReveal } from "@/components/ui/AnimatedComponents";
import { education } from "@/utils/data";

export function Education() {
  return (
    <section id="education" data-scroll-section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-light via-white to-cyan-light bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-cyan to-purple transform md:-translate-x-1/2" />

          {education.map((item, index) => (
            <ScrollReveal
              key={item.institution}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple to-cyan rounded-full transform -translate-x-1/2 z-10 shadow-glow"
                />

                <div className="ml-16 md:ml-0 md:w-1/2">
                  <GlassCard className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-purple/10 border border-purple/20">
                        <GraduationCap className="text-purple-light" size={24} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white mb-1">
                          {item.institution}
                        </h3>
                        {item.degree && (
                          <p className="text-purple-light text-sm mb-2">
                            {item.degree}
                          </p>
                        )}
                        <p className="text-gray-500 text-sm mb-3">
                          {item.duration}
                        </p>
                        {item.cgpa && (
                          <p className="text-cyan-light font-medium">
                            CGPA: {item.cgpa}
                          </p>
                        )}
                        {item.percentage && (
                          <p className="text-cyan-light font-medium">
                            Percentage: {item.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
