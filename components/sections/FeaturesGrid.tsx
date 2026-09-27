"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Badge from "@/components/ui/Badge";
import {
  Cpu,
  Sparkles,
  Mic,
  Zap,
  ShieldCheck,
  TrendingUp,
  Layers,
  ArrowUpRight
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  badge?: string;
  delay?: number;
  colSpan?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function FeaturesGrid() {
  const features = [
    {
      title: "Unified Multi-Model Intelligence",
      description:
        "Seamlessly switch between ChatGPT-4o, Claude 3.5 Sonnet, and custom neural models in a single unified workspace.",
      badge: "CORE ENGINE",
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      imageSrc: "/images/processor-image",
      bgImageSrc: "/images/bg-black-image",
      colSpan: "lg:col-span-2",
      isCover: true,
    },
    {
      title: "Voice & Speech Synthesis",
      description:
        "Ultra-realistic voice synthesis and instant voice-to-text transcription with multilingual emotion control.",
      badge: "AUDIO AI",
      icon: <Mic className="w-6 h-6 text-red-500" />,
      imageSrc: "/images/voice-ai-gen",
      bgImageSrc: "/images/bg-image-1",
      colSpan: "lg:col-span-1",
      isCover: false,
    },
    {
      title: "Generative Media & Visuals",
      description:
        "Produce high-fidelity 4K images, vector illustrations, and dynamic media assets in seconds.",
      badge: "GENERATIVE ART",
      icon: <Sparkles className="w-6 h-6 text-orange-400" />,
      imageSrc: "/images/ai-gen-icon",
      bgImageSrc: "/images/bg-image-2",
      colSpan: "lg:col-span-1",
      isCover: false,
    },
    {
      title: "Predictive Analytics & Growth",
      description:
        "Autonomous data interpretation, automated charts, and predictive trend modeling built for hyper-growth teams.",
      badge: "REAL-TIME METRICS",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      imageSrc: "/images/growth",
      bgImageSrc: "/images/bg-images",
      colSpan: "lg:col-span-2",
      isCover: false,
    },
  ];

  return (
    <section id="features" className="relative w-full bg-[#030304] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-orange-600/15 via-red-600/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), url('/images/bg-noise')`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px, 180px 180px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20"
        >
          <Badge icon={<Zap className="w-3.5 h-3.5" />}>
            Next-Gen Capabilities
          </Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Empowering Your Workflow With <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-400 bg-clip-text text-transparent">
              Advanced AI Features
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            EchoGPT bridges state-of-the-art language models, audio synthesis, and visual generation into an intuitive, ultra-fast interface.
          </p>
        </motion.div>

        {/* Bento Grid Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 ${feature.colSpan}`}
            >
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-500/10 via-red-500/5 to-transparent rounded-full blur-2xl group-hover:from-orange-500/25 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="orange" size="sm">
                    {feature.badge}
                  </Badge>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-500/40 transition-colors">
                    {feature.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Feature Media Image Container */}
              <div className="relative mt-8 w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center group-hover:border-orange-500/40 transition-all duration-500">
                {/* Background Image Layer (For non-cover cards) */}
                {!feature.isCover && feature.bgImageSrc && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={feature.bgImageSrc}
                      alt="Card Background Artwork"
                      fill
                      className="object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                )}

                {/* Foreground / Cover Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    fill
                    className={`${feature.isCover
                      ? "object-cover p-0 group-hover:scale-105"
                      : "object-contain p-4 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] group-hover:scale-110"
                      } transition-transform duration-500`}
                    unoptimized
                  />
                </div>
              </div>

              {/* Bottom Subtle Link Indicator */}
              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                <span>Explore feature</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}