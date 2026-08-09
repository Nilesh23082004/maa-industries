"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company, navLinks } from "@/lib/content";
import { Phone, ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";


export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#capabilities");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active scroll section
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveLink(`#${sectionId}`);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveLink(href);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        const yOffset = -76; // Header height offset
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-3"
          : "bg-transparent py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Official Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center group py-0.5"
          aria-label="Maa Industries - Home"
        >
          <Logo variant="header" />
        </a>


        {/* Center: Desktop Nav Links with Hover Indicator */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-white border border-slate-200/90 rounded-full z-0 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Far Right: Phone Link & Get a Quote CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 readout text-xs font-semibold text-slate-700 hover:text-beacon transition-colors px-3 py-2 rounded-lg border border-slate-200/60 bg-white shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-beacon" />
            {company.phonePrimary}
          </a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="relative group overflow-hidden bg-beacon hover:bg-beacon-dim text-white font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-beacon/20 flex items-center gap-1.5"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-beacon focus:outline-none transition-colors shadow-xs active:scale-95"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Panel with Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-slate-200 px-5 py-5 overflow-hidden flex flex-col gap-5 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            {/* Nav links */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="eyebrow text-xs sm:text-sm text-slate-800 hover:text-beacon py-3 px-3 rounded-lg hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between group transition-colors active:bg-slate-100"
                >
                  <span className="font-semibold">{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-beacon transition-colors" />
                </a>
              ))}
            </nav>

            {/* Mobile Call & Quick Action CTAs */}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`}
                className="readout text-sm text-slate-800 font-semibold text-center hover:text-beacon transition-colors py-3 px-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center gap-2 active:bg-slate-100"
              >
                <Phone className="w-4 h-4 text-beacon" />
                <span>Call {company.phonePrimary}</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="bg-beacon hover:bg-beacon-dim active:bg-beacon-dim text-white text-center font-bold uppercase tracking-wider text-xs py-3.5 px-4 rounded-xl transition-colors shadow-md shadow-beacon/20"
              >
                Get Instant Quote Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
