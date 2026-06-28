"use client";

import { Trophy, Star } from "lucide-react";
import { FadeUp, GlassCard, ScrollReveal } from "@/components/ui/AnimatedComponents";
import { achievements } from "@/utils/data";

export function Achievements() {
  return (
    <section id="achievements" data-scroll-section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-light via-white to-cyan-light bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.platform} delay={index * 0.1}>
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple/20 to-cyan/20">
                    {achievement.platform.includes("LeetCode") ||
                    achievement.platform.includes("CodeChef") ? (
                      <Star className="text-yellow-400" size={20} />
                    ) : (
                      <Trophy className="text-purple-light" size={20} />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {achievement.platform}
                  </h3>
                </div>

                <div className="space-y-3">
                  {achievement.stats.map((stat) => (
                    <div key={stat.label}>
                      {stat.label !== "Achievement" ? (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">{stat.label}</span>
                          <span className="font-display text-xl font-bold bg-gradient-to-r from-purple-light to-cyan-light bg-clip-text text-transparent">
                            {stat.value}
                          </span>
                        </div>
                      ) : (
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {stat.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
