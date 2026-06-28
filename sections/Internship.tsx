"use client";

import { Briefcase, Calendar } from "lucide-react";
import { FadeUp, GlassCard, ScrollReveal } from "@/components/ui/AnimatedComponents";
import { internship } from "@/utils/data";

export function Internship() {
  return (
    <section id="internship" data-scroll-section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-light via-white to-cyan-light bg-clip-text text-transparent">
              Internship
            </span>
          </h2>
        </FadeUp>

        <ScrollReveal>
          <GlassCard className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple/20 to-cyan/20 border border-white/10 w-fit">
                <Briefcase className="text-purple-light" size={32} />
              </div>

              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {internship.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-purple-light font-medium">
                    {internship.organization}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    {internship.year}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {internship.description}
                </p>

                <div>
                  <p className="text-sm text-gray-500 mb-3">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-cyan-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
