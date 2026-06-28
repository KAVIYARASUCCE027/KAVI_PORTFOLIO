"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { ExternalLink, Github } from "lucide-react";
import { FadeUp } from "@/components/ui/AnimatedComponents";
import { TiltCard } from "@/components/effects/TiltCard";
import { projects } from "@/utils/data";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Projects() {
  return (
    <section id="projects" data-scroll-section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-cyan/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeUp className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Innovative solutions combining AI, cloud, and modern web technologies
          </p>
        </FadeUp>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 120,
            modifier: 1.2,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="projects-swiper !pb-16"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="!w-[320px] sm:!w-[400px] md:!w-[460px]">
              <TiltCard intensity={10}>
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4 }}
                  className={cn(
                    "relative h-[500px] rounded-2xl overflow-hidden",
                    "border border-white/10 bg-[#050816]/80 backdrop-blur-2xl",
                    "group shadow-[0_20px_60px_rgba(0,0,0,0.5)]",
                    "hover:border-purple/40 hover:shadow-glow transition-all duration-500"
                  )}
                >
                  {/* Project visual header */}
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br scale-100 group-hover:scale-110 transition-transform duration-700",
                        project.gradient
                      )}
                    />
                    <img
                      src={
                        project.id === 1
                          ? "/project_ai_walk.png"
                          : project.id === 2
                          ? "/project_snap_hire.png"
                          : "/project_fit_fusion.png"
                      }
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-6">
                      <span className="px-3 py-1 rounded-full text-xs bg-black/40 backdrop-blur-md border border-white/10 text-purple-light">
                        Project {project.id}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col p-6 h-[calc(100%-11rem)]">
                    <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-cyan-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-cyan-light/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>


                  </div>

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-purple/20 shadow-[inset_0_0_30px_rgba(139,92,246,0.1)]" />
                </motion.div>
              </TiltCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .projects-swiper .swiper-pagination-bullet {
          background: rgba(139, 92, 246, 0.4);
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #8b5cf6, #06b6d4);
          width: 24px;
          border-radius: 4px;
        }
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: #a78bfa;
        }
        .projects-swiper .swiper-button-next:after,
        .projects-swiper .swiper-button-prev:after {
          font-size: 22px;
        }
      `}</style>
    </section>
  );
}
