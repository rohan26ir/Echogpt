"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  logoLabel: string;
  metricValue: string;
  metricLabel: string;
}

export default function ProductPreview() {
  const [activeId, setActiveId] = useState<string>("ai-zilla");

  const projects: ProjectItem[] = [
    {
      id: "ai-zilla",
      title: "AI zilla",
      description:
        "Our streamlined process helps businesses implement intelligent AI solutions efficiently, seamlessly, and at scale across enterprise infrastructure.",
      imageSrc: "/images/ai-intre",
      logoLabel: "Department of Fictional Logos",
      metricValue: "$84M+",
      metricLabel: "Funds raised",
    },
    {
      id: "ai-news",
      title: "AI News",
      description:
        "Our proven process helps businesses deploy intelligent AI solutions efficiently, confidently, and successfully with continuous telemetry.",
      imageSrc: "/images/bg-image-1",
      logoLabel: "LOGO",
      metricValue: "$12M+",
      metricLabel: "Funds raised",
    },
    {
      id: "copiter",
      title: "Copiter",
      description:
        "Autonomous code generation, automated test synthesis, and deep context reasoning engines built for modern high-performance engineering teams.",
      imageSrc: "/images/bg-images",
      logoLabel: "ECHO LABS",
      metricValue: "10X",
      metricLabel: "Speed increase",
    },
    {
      id: "zesttab",
      title: "Zesttab",
      description:
        "Real-time voice cloning, instant speech synthesis, and multilingual emotion customization inside one unified low-latency neural API.",
      imageSrc: "/images/bg-black-image",
      logoLabel: "NEURAL CORE",
      metricValue: "99.8%",
      metricLabel: "Accuracy score",
    },
  ];

  const activeProject =
    projects.find((p) => p.id === activeId) || projects[0];

  return (
    <section id="projects" className="relative w-full bg-[#030304] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12 lg:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <Badge variant="red" size="sm">
              OUR PROJECTS
            </Badge>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              AI Transformation <br />
              Projects
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-md"
          >
            Our streamlined process helps businesses implement intelligent AI solutions efficiently, seamlessly, and at scale.
          </motion.p>
        </div>

        {/* 2-Column Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Accordion List */}
          <div className="lg:col-span-5 space-y-6">
            {projects.map((project) => {
              const isActive = project.id === activeId;
              return (
                <div
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className="group cursor-pointer border-b border-white/10 pb-6 transition-all duration-300"
                >
                  <div
                    className={`pl-4 transition-all duration-300 ${
                      isActive
                        ? "border-l-2 border-l-red-500"
                        : "border-l-2 border-l-transparent hover:border-l-zinc-500"
                    }`}
                  >
                    <h3
                      className={`text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-zinc-400 group-hover:text-white"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Smooth Expandable Description */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                            {project.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Project Showcase Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl h-[380px] sm:h-[460px] lg:h-[500px] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between"
                >
                  {/* Background Showcase Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={activeProject.imageSrc}
                      alt={activeProject.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                  </div>

                  {/* Top-Left Project Title Overlay */}
                  <div className="relative z-10">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {activeProject.title}
                    </h3>
                  </div>

                  {/* Bottom Levitating Glass Metric Cards Bar */}
                  <div className="relative z-10 grid grid-cols-2 gap-4 p-4 sm:p-5 rounded-2xl bg-black/75 border border-white/15 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center font-bold text-xs text-white">
                        L
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-400 font-semibold uppercase">
                          Brand
                        </span>
                        <span className="block text-xs sm:text-sm font-bold text-white truncate max-w-[140px]">
                          {activeProject.logoLabel}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="block text-base sm:text-lg font-black text-white">
                        {activeProject.metricValue}
                      </span>
                      <span className="block text-[10px] text-zinc-400 font-semibold uppercase">
                        {activeProject.metricLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}