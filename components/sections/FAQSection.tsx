"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, HelpCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer:
        "We deliver custom AI agents, workflow automation, chatbot development, seamless integrations, and scalable business solutions.",
    },
    {
      question: "How can AI automation help my business?",
      answer:
        "AI automation eliminates repetitive tasks, reduces operational overhead by up to 70%, and enables 24/7 autonomous execution across data pipelines.",
    },
    {
      question: "Do you build custom AI solutions?",
      answer:
        "Yes, we specialize in building bespoke neural agents, fine-tuned language models, and private Enterprise AI infrastructure tailored to your exact workflows.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most standard integrations are deployed within 48 hours, while custom enterprise agent architectures typically launch in 1 to 2 weeks.",
    },
    {
      question: "Is EchoGPT suitable for startups?",
      answer:
        "Absolutely. EchoGPT provides scalable infrastructure that grows with your business, from initial prototype to millions of API requests.",
    },
    {
      question: "Insights on AI & Automation?",
      answer:
        "Our platform features real-time telemetry, automated model evaluation, and continuous benchmark monitoring to ensure peak performance.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-[#030304] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), url('/images/bg-noise')`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px, 180px 180px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-between h-full min-h-[350px]"
          >
            <div className="space-y-6">
              {/* Small Badge */}
              <Badge icon={<HelpCircle className="w-3.5 h-3.5" />}>
                FAQ
              </Badge>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Questions before <br />
                you decide.
              </h2>
            </div>

            {/* Bottom Left CTA Pill Button */}
            <div className="pt-4">
              <Button
                href="#contact"
                variant="red"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
              >
                Ask a Question
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  {/* Left: Separate Question & Answer Text Content Box */}
                  <div
                    onClick={() => toggleFAQ(index)}
                    className={`flex-1 rounded-2xl border p-5 sm:p-6 cursor-pointer transition-all duration-300 ${
                      isOpen
                        ? "bg-[#111114] border-white/20 shadow-2xl"
                        : "bg-[#111114]/80 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {faq.question}
                    </div>

                    {/* Expandable Answer Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <div className="pt-4 mt-3 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed border-t border-white/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right: Separate Plus/Minus Icon Box */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-label={isOpen ? "Close answer" : "Open answer"}
                    className={`shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl border flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isOpen
                        ? "bg-red-500/20 border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                        : "bg-[#111114]/80 border-white/10 hover:border-white/20 text-white hover:bg-[#111114]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-red-400 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-white transition-transform duration-300" />
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}