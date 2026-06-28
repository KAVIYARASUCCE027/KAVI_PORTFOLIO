"use client";

import { Award } from "lucide-react";
import { FadeUp, GlassCard, ScrollReveal } from "@/components/ui/AnimatedComponents";
import { certifications } from "@/utils/data";

export function Certifications() {
  return (
    <section id="certifications" data-scroll-section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-light via-white to-cyan-light bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </FadeUp>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.15}>
              <GlassCard className="p-6" hover>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple/10 border border-purple/20 shrink-0">
                    <Award className="text-purple-light" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-white truncate">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-purple-light text-sm">{cert.issuer}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-500 text-sm">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
