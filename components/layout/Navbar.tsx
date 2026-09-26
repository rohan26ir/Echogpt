"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  logoText?: string;
}

export default function Navbar({ logoText = "EchoGPT.ai" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Faq", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-orange-500 transition-colors">
              {logoText}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-zinc-900 to-black border border-orange-500/40 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(255,87,34,0.35)] group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 font-semibold">Contact Us</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-zinc-300 hover:text-white py-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all shadow-lg shadow-orange-600/30"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}