"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section id="cta" className="relative w-full bg-[#030304] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      {/* Top Curved Image Shape Overlay */}
      <div className="absolute top-0 left-0 right-0 w-full h-20 sm:h-32 pointer-events-none z-20">
        <Image
          src="/images/top-image-shape.avif"
          alt="Top Curve Shape"
          fill
          className="object-cover object-top opacity-100 font-bold"
          priority
          unoptimized
        />
      </div>

      {/* Background Volcanic Canyon / Red Atmospheric Texture Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/bg-mountan.avif"
          alt="Atmospheric Mountain Background"
          fill
          className="object-cover object-center opacity-40 mix-blend-screen scale-105 filter brightness-75"
          priority
          unoptimized
        />
        {/* Darkening Overlay for Enhanced Contrast */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Red Glow Radial Spotlight Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.35)_0%,rgba(180,20,20,0.15)_45%,transparent_75%)] blur-[90px] pointer-events-none mix-blend-screen" />
        
        {/* Heavy Vignetting Gradients for Smooth Section Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030304] via-transparent to-[#030304] opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030304] via-transparent to-[#030304] opacity-90" />
        
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), url('/images/bg-noise')`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px, 180px 180px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Top Red Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Badge variant="red" size="sm">
            LET'S GET STARTED
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
        >
          Ready to Upgrade Your <br />
          Business Workflow?
        </motion.h2>

        {/* Subheadline Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed"
        >
          Share your current process. We'll help you identify what can be automated and where efficiency can be improved.
        </motion.p>

        {/* Center CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-2 flex justify-center"
        >
          <Button
            href="#contact"
            variant="red"
            size="md"
            rightIcon={
              <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            }
          >
            Start Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}