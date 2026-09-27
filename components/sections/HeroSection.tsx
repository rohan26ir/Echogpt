"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  brandName?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  directorName?: string;
  directorRole?: string;
}

export default function HeroSection({
  brandName = "echogpt.ai",
  headlineLine1 = "EchoGPT Next",
  headlineLine2 = "Digital Era",
  directorName = "Talk with David",
  directorRole = "DIRECTOR OF ECHOGPT",
}: HeroSectionProps) {
  return (
    <section className="relative h-[80lvh] md:h-screen max-h-screen w-full bg-[#030304] text-white overflow-hidden flex flex-col justify-between pt-20 pb-6 px-4 sm:px-6 lg:px-12 select-none">

      {/* 1. High-Density Grain & Noise Overlay Layer */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), url('/images/bg-noise')`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px, 180px 180px",
        }}
      />

      {/* 2. Vibrant Red/Orange Left Spotlight & Ambient Illumination */}
      <div className="absolute top-0 -left-28 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,42,0,0.85)_0%,rgba(215,20,0,0.45)_45%,transparent_75%)] blur-[90px] pointer-events-none z-0" />
      <div className="absolute top-1/4 -left-10 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.6)_0%,transparent_70%)] blur-[60px] pointer-events-none z-0 mix-blend-screen" />

      {/* Orange Shape Overlay Image */}
      <div className="absolute top-0 left-0 w-full sm:w-2/3 h-full opacity-80 pointer-events-none z-0 mix-blend-screen">
        <Image
          src="/images/orange-shape-circle"
          alt="Glow background"
          fill
          className="object-cover object-left opacity-85"
          priority
        />
      </div>

      {/* 3. Center Hero: Background Typography & Perfectly Sized VR Character Image */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center my-auto">

        {/* Massive Background Watermark Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-10 sm:top-4 lg:top-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0"
        >
          <h1 className="text-[16vw] sm:text-[18vw] lg:text-[200px] 2xl:text-[220px] font-black tracking-tighter text-white/90 leading-none select-none uppercase sm:normal-case filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
            {brandName}
          </h1>
        </motion.div>

        {/* Foreground Character Image (Moved below by 50px) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mt-2 sm:mt-4 flex justify-center items-center translate-y-[00px]  2xl:translate-y-[150px]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-[580px] sm:h-[480px] md:h-[540px] lg:h-[600px] 2xl:h-[750px]"
          >
            <Image
              src="/images/hero-main-image.png"
              alt="EchoGPT AI Hero VR Character"
              fill
              className="object-contain object-center scale-[1.03] filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 4. Bottom Hero Overlay: Headline (Left) & Director Floating Card (Right) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mt-auto bottom-55 md:bottom-70 2xl:bottom-20 ">

        {/* Bottom Left Main Headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl space-y-3"
        >
          <Badge icon={<Sparkles className="w-3.5 h-3.5" />}>
            ECHO AI V2.0 LIVE
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05] filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            {headlineLine1} <br />
            <span className="text-white">{headlineLine2}</span>
          </h2>
        </motion.div>

        {/* Bottom Right Floating Glass Card ("Talk with David") */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:w-auto mx-left"
        >
          <div className="glass-card bg-zinc-950/80 backdrop-blur-xl border border-white/20 p-2 sm:p-3.5 rounded-2xl flex items-center justify-between gap-4 sm:gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-orange-500/50 transition-all duration-300 group max-w-md">
            {/* Avatar Box */}
            <div className="relative w-20 h-20 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-white/15 group-hover:border-orange-500/60 transition-colors shadow-inner">
              <Image
                src="/images/man-side-image"
                alt="David Director"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>

            {/* Info & Action Button */}
            <div className="flex flex-col justify-center space-y-1.5 flex-1 min-w-[160px]">
              <div>
                <h3 className="text-lg sm:text-base font-bold text-black leading-tight">
                  {directorName}
                </h3>
                <p className="text-[9px] sm:text-[10px] font-semibold text-black tracking-wider uppercase mt-0.5">
                  {directorRole}
                </p>
              </div>

              {/* Book Call Pill Button */}
              <Button
                href="#book-call"
                variant="pill"
                size="sm"
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5 text-red-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
              >
                Book 15-mins Call
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}