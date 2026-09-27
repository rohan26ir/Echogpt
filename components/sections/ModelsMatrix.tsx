"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { 
  Sparkles, 
  Cpu, 
  Mic, 
  Eye, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

interface ModelItem {
  id: string;
  name: string;
  provider: string;
  category: "llm" | "voice" | "vision";
  categoryBadge: string;
  iconSrc: string;
  bgImageSrc: string;
  contextWindow: string;
  speed: string;
  benchmark: string;
  highlight: string;
  capabilities: string[];
  gradient: string;
  borderColor: string;
  imageSide: "left" | "right";
}

export default function ModelsMatrix() {
  const [activeCategory, setActiveCategory] = useState<"all" | "llm" | "voice" | "vision">("all");

  const models: ModelItem[] = [
    {
      id: "chatgpt-4o",
      name: "ChatGPT-4o",
      provider: "OpenAI",
      category: "llm",
      categoryBadge: "REASONING & CODE",
      iconSrc: "/images/chatgpt-icon",
      bgImageSrc: "/images/bg-black-image",
      contextWindow: "128K Tokens",
      speed: "145 tokens/sec",
      benchmark: "92.8% MMLU",
      highlight: "State-of-the-art multimodal reasoning, rapid response times, and deep code synthesis.",
      capabilities: ["Complex Problem Solving", "Code Generation & Refactoring", "Multimodal Text & Vision"],
      gradient: "from-amber-600/40 via-red-600/30 to-orange-500/20",
      borderColor: "hover:border-orange-500/40",
      imageSide: "left",
    },
    {
      id: "claude-35-sonnet",
      name: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      category: "llm",
      categoryBadge: "LOGIC & WRITING",
      iconSrc: "/images/clode-icon",
      bgImageSrc: "/images/bg-image-1",
      contextWindow: "200K Tokens",
      speed: "120 tokens/sec",
      benchmark: "93.1% GPQA",
      highlight: "Industry-leading logic, nuanced creative writing, and precise structured output.",
      capabilities: ["Long-Context Analysis", "Subtle Tone & Prose Control", "Systematic Architecture Design"],
      gradient: "from-red-600/40 via-orange-600/30 to-amber-500/20",
      borderColor: "hover:border-amber-500/40",
      imageSide: "right",
    },
    {
      id: "echo-voice-neural",
      name: "Echo Voice Neural",
      provider: "EchoGPT Engine",
      category: "voice",
      categoryBadge: "VOICE & SPEECH SYNTHESIS",
      iconSrc: "/images/voice-ai-gen",
      bgImageSrc: "/images/bg-image-2",
      contextWindow: "Real-Time Stream",
      speed: "< 35ms Latency",
      benchmark: "80+ Languages",
      highlight: "Ultra-realistic emotional voice cloning, instant speech synthesis, and multilingual fluency.",
      capabilities: ["Low-Latency Streaming", "Emotion & Accent Customization", "Voice-to-Voice AI Conversations"],
      gradient: "from-orange-600/40 via-red-600/30 to-zinc-900",
      borderColor: "hover:border-red-500/40",
      imageSide: "left",
    },
    {
      id: "echo-vision-4k",
      name: "Echo Vision 4K",
      provider: "EchoGPT Engine",
      category: "vision",
      categoryBadge: "IMAGE & VISUAL MEDIA",
      iconSrc: "/images/ai-gen-icon",
      bgImageSrc: "/images/bg-images",
      contextWindow: "4K Resolution",
      speed: "1.8s Generation",
      benchmark: "Photorealistic HD",
      highlight: "High-fidelity visual art generation, vector creation, and multi-layer neural rendering.",
      capabilities: ["Ultra HD Render Quality", "Prompt Precision & Style Control", "Multi-Layer Vector Exports"],
      gradient: "from-purple-600/40 via-red-600/30 to-orange-500/20",
      borderColor: "hover:border-purple-500/40",
      imageSide: "right",
    },
  ];

  const filteredModels =
    activeCategory === "all"
      ? models
      : models.filter((m) => m.category === activeCategory);

  return (
    <section id="models" className="relative w-full bg-[#030304] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-12 select-none">
      {/* Background Noise & Lighting Glow */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-600/15 via-red-600/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), url('/images/bg-noise')`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px, 180px 180px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <Badge icon={<Cpu className="w-3.5 h-3.5" />}>
            AI Engine Matrix
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Powered By World-Class <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-400 bg-clip-text text-transparent">
              AI Models & Orchestration
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Switch seamlessly between premier LLMs, real-time voice cloning, and generative media engines inside EchoGPT.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl gap-2">
            {[
              { id: "all", label: "All Models", icon: <Sparkles className="w-3.5 h-3.5" /> },
              { id: "llm", label: "Language LLMs", icon: <Cpu className="w-3.5 h-3.5" /> },
              { id: "voice", label: "Voice & Speech", icon: <Mic className="w-3.5 h-3.5" /> },
              { id: "vision", label: "Vision & Media", icon: <Eye className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === tab.id
                    ? "text-white bg-gradient-to-r from-orange-600 to-red-600 shadow-lg shadow-orange-600/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 1-by-1 Sticky Stack Cards Container */}
        <div className="relative flex flex-col gap-12 sm:gap-16 pb-24">
          <AnimatePresence mode="popLayout">
            {filteredModels.map((model, idx) => (
              <motion.div
                key={model.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -30 }}
                transition={{ duration: 0.4 }}
                className={`sticky rounded-3xl bg-[#0a0a0c] border border-white/10 ${model.borderColor} p-6 sm:p-10 lg:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-all duration-300 group`}
                style={{
                  top: `calc(100px + ${idx * 28}px)`,
                  zIndex: idx + 1,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Artwork / Preview Box */}
                  <div
                    className={`lg:col-span-5 relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between bg-gradient-to-tr ${model.gradient} ${
                      model.imageSide === "right" ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Background Texture Layer */}
                    <div className="absolute inset-0 z-0 opacity-40">
                      <Image
                        src={model.bgImageSrc}
                        alt="Model Background"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </div>

                    {/* Top Logo Icon & Category */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-white/20 bg-black/70 p-2 flex items-center justify-center shadow-xl">
                        <Image
                          src={model.iconSrc}
                          alt={model.name}
                          fill
                          className="object-contain p-2"
                          unoptimized
                        />
                      </div>

                      <Badge variant="orange" size="sm">
                        {model.categoryBadge}
                      </Badge>
                    </div>

                    {/* Bottom Benchmark Metrics Bar */}
                    <div className="relative z-10 grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/80 border border-white/15 backdrop-blur-md text-center">
                      <div>
                        <span className="block text-[9px] text-zinc-400 uppercase font-semibold">Context</span>
                        <span className="text-xs font-extrabold text-white">{model.contextWindow}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-zinc-400 uppercase font-semibold">Speed</span>
                        <span className="text-xs font-extrabold text-orange-400">{model.speed}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-zinc-400 uppercase font-semibold">Score</span>
                        <span className="text-xs font-extrabold text-white">{model.benchmark}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      model.imageSide === "right" ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                        {model.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-medium mt-1">
                        Developed by <span className="text-white font-semibold">{model.provider}</span>
                      </p>
                    </div>

                    <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                      {model.highlight}
                    </p>

                    {/* Capabilities List */}
                    <div className="space-y-2.5 pt-2">
                      {model.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Launch Action Link */}
                    <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-orange-400 group-hover:text-white transition-colors cursor-pointer">
                      <span>Launch in Workspace</span>
                      <ArrowUpRight className="w-4 h-4 text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}