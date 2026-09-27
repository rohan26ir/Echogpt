"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-[#030304] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-l from-orange-600/15 via-red-600/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="flex justify-center">
            <Badge variant="red" size="sm">
              TESTIMONIALS
            </Badge>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            Built for Real <br />
            Business Impact
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (Partners Card + James Botosh Testimonial) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Card 1: 40+ Partners Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#121215] border border-white/10 hover:border-white/20 rounded-3xl p-5 sm:p-6 flex items-center justify-between shadow-xl transition-all duration-300"
            >
              {/* Avatar Stack */}
              <div className="flex items-center -space-x-3">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#121215] shrink-0">
                  <Image
                    src="/images/man-side-image"
                    alt="Partner 1"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#121215] shrink-0">
                  <Image
                    src="/images/voice-ai-gen"
                    alt="Partner 2"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#121215] shrink-0">
                  <Image
                    src="/images/ai-gen-icon"
                    alt="Partner 3"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Text info */}
              <div className="text-right">
                <span className="block text-xl sm:text-2xl font-extrabold text-white">40+</span>
                <span className="block text-xs text-zinc-400 font-medium">Partners</span>
              </div>
            </motion.div>

            {/* Card 2: James Botosh Testimonial (Dark Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 bg-[#121215] border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-8 transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Top Metrics & Logo */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">10X</h3>
                    <p className="text-xs text-zinc-400 font-medium mt-1">AI Automation</p>
                  </div>
                  <span className="text-xs font-black tracking-widest text-zinc-500 uppercase">
                    LOGO
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-white/80 rotate-180" />
                  <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                    Most agencies talk about AI. We build systems that reduce manual work, improve accuracy, and scale with your operations.
                  </p>
                </div>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/15 shrink-0">
                  <Image
                    src="/images/man-side-image"
                    alt="James Botosh"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">James Botosh</h4>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">Developer</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column (Alina Angel Glowing Testimonial + Client Rating Card) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Card 3: Alina Angel Testimonial (Glowing Red/Orange Gradient Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 relative overflow-hidden bg-gradient-to-br from-[#1b1012] via-[#2f140e] to-[#4e1709] border border-orange-500/30 hover:border-orange-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(249,115,22,0.15)] space-y-8 transition-all duration-500 group"
            >
              {/* Ambient Red Glow in Card Background */}
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-br from-orange-500/30 to-red-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Top Metrics & Logo */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">10X</h3>
                    <p className="text-xs text-zinc-300 font-medium mt-1">AI Automation</p>
                  </div>
                  <span className="text-xs font-black tracking-widest text-white/50 uppercase">
                    LOGO
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-white/90 rotate-180" />
                  <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed">
                    Most agencies talk about AI. We build systems that reduce manual work, improve accuracy, and scale with your operations.
                  </p>
                </div>
              </div>

              {/* Author Profile */}
              <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 shrink-0">
                  <Image
                    src="/images/voice-ai-gen"
                    alt="Alina Angel"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">Alina Angel</h4>
                  <p className="text-xs text-zinc-300 font-medium mt-0.5">Designer</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: 4.9/5 Rating Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#121215] border border-white/10 hover:border-white/20 rounded-3xl p-5 sm:p-6 flex items-center justify-between shadow-xl transition-all duration-300"
            >
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold text-white">4.9/5</span>
                <span className="block text-xs text-zinc-400 font-medium">Client Satisfaction</span>
              </div>

              <div className="text-right space-y-1">
                <div className="flex items-center gap-1 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <span className="block text-xs text-zinc-400 font-medium">Client Satisfaction</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}