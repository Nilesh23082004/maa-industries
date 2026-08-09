"use client";

import { motion } from "framer-motion";
import { company, navLinks } from "@/lib/content";
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const yOffset = -76;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-100 text-slate-900 border-t border-slate-200/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-grid">
      {/* Accent Orange Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-2">
              <Logo variant="footer" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              {company.tagline}. Dedicated heavy machine shop in Rakhial, Ahmedabad configured for single-setup shaft turning and heavy component machining.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="eyebrow text-[10px] text-slate-700 font-bold">
                HEAVY CNC & CONVENTIONAL TURNING
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="eyebrow text-xs text-slate-900 font-bold block tracking-wider">
              Quick Links
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-600 hover:text-beacon font-medium transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-beacon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Machine Specs & Capabilities (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="eyebrow text-xs text-slate-900 font-bold block tracking-wider">
              Shop Capabilities
            </span>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-beacon shrink-0" />
                <span>Max Turning Dia: 600mm</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-beacon shrink-0" />
                <span>Max Machining Length: 6000mm</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-beacon shrink-0" />
                <span>EOT Crane Capacity: 7.5 Tons</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-beacon shrink-0" />
                <span>Single-Setup Concentricity Accuracy</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="eyebrow text-xs text-slate-900 font-bold block tracking-wider">
              Direct Support
            </span>
            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-beacon shrink-0 mt-0.5" />
                <span>{company.addressLines.join(", ")}</span>
              </div>
              <div className="flex items-center gap-2 readout font-medium text-slate-800">
                <Phone className="w-4 h-4 text-beacon shrink-0" />
                <a href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`} className="hover:text-beacon transition-colors">
                  {company.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2 readout font-medium text-slate-800 break-all">
                <Mail className="w-4 h-4 text-beacon shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-beacon transition-colors">
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="readout">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="eyebrow text-[11px] tracking-widest text-slate-500 font-medium">
              Rakhial Industrial Area &bull; Ahmedabad, Gujarat, India
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className="bg-white hover:bg-beacon hover:text-white p-2.5 rounded-full text-slate-700 border border-slate-200 transition-colors shadow-xs flex items-center justify-center cursor-pointer group"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
