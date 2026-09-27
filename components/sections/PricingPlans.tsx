"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface PlanItem {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  activeColor: "blue" | "orange" | "black";
  popularBadge?: boolean;
  features: PlanItem[];
  subtext: string;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "For getting started with AI models",
    monthlyPrice: 0,
    yearlyPrice: 0,
    activeColor: "blue",
    features: [
      { text: "1 AI Workspace", included: true },
      { text: "Basic GPT-4o Mini chat", included: true },
      { text: "Unlimited GPT-4o & Claude", included: false },
      { text: "Voice & Image Generation", included: false },
      { text: "Remove EchoGPT branding", included: false },
    ],
    subtext: "→ No credit card required",
    buttonText: "Get started",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For creators ready to build and grow",
    monthlyPrice: 19,
    yearlyPrice: 15,
    activeColor: "orange",
    popularBadge: true,
    features: [
      { text: "Unlimited AI conversations", included: true },
      { text: "GPT-4o & Claude 3.5 Sonnet", included: true },
      { text: "Voice & Image Generation", included: false },
      { text: "Remove EchoGPT branding", included: false },
      { text: "Enterprise API integrations", included: false },
    ],
    subtext: "→ Upgrade or cancel anytime",
    buttonText: "Start with Pro",
  },
  {
    id: "business",
    name: "Business",
    description: "For teams and scaling AI products",
    monthlyPrice: 49,
    yearlyPrice: 39,
    activeColor: "blue",
    features: [
      { text: "Unlimited AI conversations", included: true },
      { text: "GPT-4o & Claude 3.5 Sonnet", included: true },
      { text: "Voice & Image Generation", included: true },
      { text: "Remove EchoGPT branding", included: true },
      { text: "Enterprise API integrations", included: true },
    ],
    subtext: "→ Priority support included",
    buttonText: "Start Business",
  },
];

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);
  const [activePlanId, setActivePlanId] = useState<string>("pro");

  return (
    <section className="w-full py-16 md:py-24 bg-[#050507] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background Subtle Grid / Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl w-full px-4 md:px-8 relative z-10 flex flex-col items-center">
        {/* Toggle Controls */}
        <div className="flex flex-col items-center justify-center gap-2 mb-12 md:mb-16">
          <div className="flex items-center gap-4 text-sm md:text-base font-medium">
            <span
              className={`transition-colors cursor-pointer ${
                !isYearly ? "text-white font-semibold" : "text-gray-400"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </span>

            {/* Toggle Switch */}
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-[#1a1a22] border border-white/10 rounded-full p-1 relative flex items-center transition-colors focus:outline-none"
              aria-label="Toggle billing frequency"
            >
              <motion.div
                className="w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>

            <span
              className={`transition-colors cursor-pointer ${
                isYearly ? "text-white font-semibold" : "text-gray-400"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </span>
          </div>

          <span className="text-xs md:text-sm text-gray-400 tracking-wide font-normal">
            save 20% with yearly
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl">
          {plans.map((plan) => {
            const isActive = activePlanId === plan.id;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            // Background Card Styling based on active state and color
            let cardBgClass = "bg-black text-white border border-white/10";
            if (isActive) {
              if (plan.activeColor === "blue") {
                cardBgClass = "bg-[#2052fe] text-white shadow-2xl shadow-blue-600/30 border-transparent";
              } else if (plan.activeColor === "orange") {
                cardBgClass = "bg-[#e04e00] text-white shadow-2xl shadow-orange-600/30 border-transparent";
              }
            }

            // Inner feature box background and text
            const innerBoxBgClass = isActive
              ? "bg-[#050508] text-white"
              : "bg-white text-black";

            return (
              <motion.div
                key={plan.id}
                onClick={() => setActivePlanId(plan.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-[32px] p-6 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${cardBgClass}`}
              >
                <div>
                  {/* Card Header */}
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs md:text-sm mt-1.5 opacity-85 font-normal line-clamp-1">
                    {plan.description}
                  </p>

                  {/* Price Section */}
                  <div className="my-6 flex items-baseline gap-2 relative">
                    <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                      ${price}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-xs md:text-sm opacity-80">
                        /month
                      </span>
                    )}

                    {/* Popular Badge */}
                    {plan.popularBadge && (
                      <span className="absolute -top-3 left-16 bg-[#b2f33c] text-black text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Features Container (Inner Box) */}
                  <div
                    className={`rounded-[24px] p-5 md:p-6 mb-6 transition-colors duration-300 ${innerBoxBgClass}`}
                  >
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-xs md:text-sm font-medium"
                        >
                          {feature.included ? (
                            <div className="w-4 h-4 rounded-full bg-current flex items-center justify-center shrink-0">
                              <Check
                                className={`w-2.5 h-2.5 stroke-[3] ${
                                  isActive ? "text-[#050508]" : "text-white"
                                }`}
                              />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-current opacity-40 flex items-center justify-center shrink-0">
                              <X className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                          )}
                          <span
                            className={
                              feature.included ? "opacity-100" : "opacity-60"
                            }
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div>
                  <p className="text-xs md:text-sm opacity-80 mb-5 font-normal">
                    {plan.subtext}
                  </p>

                  <button className="w-full py-3.5 px-6 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors shadow-sm active:scale-[0.98]">
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}