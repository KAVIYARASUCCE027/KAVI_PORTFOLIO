"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Code2, ChefHat, Mail, MapPin } from "lucide-react";
import { FadeUp, GlassCard, ScrollReveal } from "@/components/ui/AnimatedComponents";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { Particles } from "@/components/ui/Particles";
import { siteConfig } from "@/utils/data";

function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Particles count={35} className="absolute inset-0 z-0 opacity-30" />
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 w-full h-32 opacity-10"
          style={{
            bottom: `${i * 15}%`,
            background: `linear-gradient(90deg, transparent, ${i % 2 ? "#06b6d4" : "#8b5cf6"}, transparent)`,
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 bg-cyan/40 rounded-full"
          style={{ left: `${(i * 13) % 100}%`, top: `${(i * 17) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formState.name} via Portfolio`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    
    // Open Gmail directly in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    
    setFormState({ name: "", email: "", message: "" });
    setSubmitStatus("success");
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const socialLinks = [
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Code2, href: siteConfig.social.leetcode, label: "LeetCode" },
  ];

  return (
    <section id="contact" data-scroll-section className="py-24 md:py-32 relative overflow-hidden">
      <WaveBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-purple/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeUp className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-8">
          <ScrollReveal className="lg:col-span-3">
            <GlassCard className="p-8 holographic-card" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan-light text-sm"
                    >
                      Thank you! I will get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>

                <MagneticButton type="submit" variant="primary" className="w-full !flex">
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </MagneticButton>
              </form>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              <GlassCard className="p-6 holographic-card">
                <h3 className="font-display text-lg font-semibold text-white mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-light hover:border-cyan/30 hover:shadow-glow-cyan transition-all"
                    >
                      <Icon size={20} />
                      <span className="text-sm">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail size={18} className="text-purple-light" />
                    <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-white transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={18} className="text-cyan-light" />
                    <span className="text-sm">Tamil Nadu, India</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
