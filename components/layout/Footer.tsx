"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

// Custom Social Icon SVGs
function TwitterXIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  const pagesCol1 = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#blogs" },
    { name: "Projects", href: "#projects" },
  ];

  const pagesCol2 = [
    { name: "Faq", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "#privacy" },
    { name: "Terms Condition", href: "#terms" },
    { name: "404", href: "#404" },
  ];

  return (
    <footer className="relative w-full bg-[#030305] text-white pt-20 pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
      {/* Background Glow Image Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/bg-hero.avif"
          alt="Footer Atmospheric Background"
          fill
          className="object-cover object-bottom opacity-75 mix-blend-screen"
          priority
        />
        {/* Secondary Shape Glow Layer */}
        <div className="absolute -bottom-20 -left-20 w-[800px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(255,69,20,0.55)_0%,rgba(220,38,38,0.3)_40%,transparent_75%)] blur-[90px] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-[#030305]" />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), url('/images/bg-noise')`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px, 180px 180px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 items-start">

          {/* Column 1: Large Headline */}
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Clear. Precise. <br />
              Automated.
            </h2>
          </div>

          {/* Column 2: Pages List 1 */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-medium text-zinc-400 block tracking-wide">
              Pages
            </span>
            <ul className="space-y-3">
              {pagesCol1.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-white hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pages List 2 */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-medium text-zinc-400 block tracking-wide">
              Pages
            </span>
            <ul className="space-y-3">
              {pagesCol2.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-white hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact/Social */}
          <div className="lg:col-span-4 space-y-6">
            {/* Newsletter Subscription Box */}
            <div className="space-y-3">
              <label className="text-xs font-medium text-zinc-400 block">
                Subscribe to our Newsletter
              </label>
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@techtwen.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#141417] border border-zinc-800/80 focus:border-orange-500 focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#ff4514] hover:bg-[#e03a0d] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-orange-600/30 active:scale-[0.99]"
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-medium text-zinc-400 block">
                Email
              </span>
              <a
                href="mailto:techtwen@gmail.com"
                className="text-base font-medium text-white hover:text-orange-400 transition-colors"
              >
                techtwen@gmail.com
              </a>
            </div>

            {/* Social Media Buttons */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-zinc-400 block">
                Social
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#141417] border border-zinc-800/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
                  aria-label="X (Twitter)"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#141417] border border-zinc-800/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#141417] border border-zinc-800/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#141417] border border-zinc-800/80 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Huge Watermark Typography: EchoGPT.ai */}
        <div className="w-full text-center pt-8 pb-4 overflow-hidden pointer-events-none">
          <h1 className="text-[14vw] sm:text-[16vw] lg:text-[185px] font-black tracking-tighter text-white leading-none uppercase filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
            EchoGPT.ai
          </h1>
        </div>

        {/* Bottom Credits & Copyright Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 text-xs text-zinc-400">
          <p>Copyright and design by Techtwen LLC</p>
          <p>Developed by @rohan26ir</p>
        </div>

      </div>
    </footer>
  );
}