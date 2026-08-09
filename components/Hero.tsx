"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { company, capacityStats } from "@/lib/content";
import { ShieldCheck, ArrowRight, Gauge, Cpu, Layers, CheckCircle2, ChevronRight } from "lucide-react";

export default function Hero() {
  const [selectedSpec, setSelectedSpec] = useState(0);

  const specTabs = [
    {
      title: "CNC Lathe Turning",
      value: "600mm × 6000mm",
      desc: "Long-bed heavy CNC lathe designed for single-setup shaft turning, turbine rotors, and industrial rolls.",
      icon: Cpu,
    },
    {
      title: "Material Handling",
      value: "7.5 Metric Tons",
      desc: "Full bay EOT crane coverage ensuring safe loading, turning, and unloading of heavy forged raw stocks.",
      icon: Gauge,
    },
    {
      title: "Machining Accuracy",
      value: "±0.01mm Tolerance",
      desc: "Micron-level axial runout control and concentricity across full-length turned workpieces.",
      icon: Layers,
    },
  ];

  return (
    <section id="capabilities" className="relative bg-slate-50 text-slate-900 pt-28 pb-16 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200 bg-tech-grid">
      {/* Background Radial Subtle Orange Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[400px] bg-beacon/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column: Headline & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-slate-200 mb-6 sm:mb-8 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full ready-dot animate-pulse shrink-0" />
            <span className="eyebrow text-[10px] sm:text-[11px] text-slate-700 tracking-wider sm:tracking-widest">
              SHOP OPERATIONAL &bull; RAKHIAL, {company.city}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight max-w-3xl leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6 text-slate-900">
            Heavy CNC turning & precision machining up to{" "}
            <span className="text-gradient-orange readout inline-block">
              600mm × 6000mm
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-10">
            Dedicated heavy machine facility in Rakhial, Ahmedabad. Built specifically for single-setup long shaft turning, industrial rolls, tie bars, and multi-ton forged components.
          </p>

          {/* Call to Action Buttons - Full Width on Mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 mb-8 sm:mb-10 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="bg-beacon hover:bg-beacon-dim active:bg-beacon-dim text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-full transition-all duration-300 shadow-md shadow-beacon/20 flex items-center justify-center gap-2 group text-center"
            >
              <span>Get Instant Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <a
              href="#products"
              className="bg-white hover:bg-slate-100 active:bg-slate-100 border border-slate-200 text-slate-800 font-semibold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl sm:rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xs text-center"
            >
              <span>What We Machine</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Key Feature Checks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 text-xs text-slate-600 pt-4 border-t border-slate-200/80 w-full">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Single-Setup Axis Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>7.5 Metric Ton Crane Lift</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Fast 24h Inquiry Turnaround</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive SaaS Specification Simulator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 w-full mt-4 lg:mt-0"
        >
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-lg relative overflow-hidden">
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-beacon shrink-0" />
                <span className="eyebrow text-[11px] sm:text-xs text-slate-800">
                  Shop Capability Specs
                </span>
              </div>
              <span className="readout text-[10px] sm:text-[11px] font-bold text-emerald-700 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-emerald-50 rounded-md border border-emerald-200">
                ACTIVE FLEET
              </span>
            </div>

            {/* Spec Tab Buttons */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {specTabs.map((tab, idx) => {
                const isSelected = selectedSpec === idx;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.title}
                    type="button"
                    onClick={() => setSelectedSpec(idx)}
                    className={`p-2.5 sm:p-3 rounded-xl flex flex-col items-center gap-1.5 text-center transition-all duration-300 ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? "text-beacon" : "text-slate-500"}`} />
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider leading-tight">
                      {tab.title.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Spec Interactive Card Display */}
            <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 space-y-2 sm:space-y-3">
              <span className="eyebrow text-[10px] sm:text-[11px] text-beacon block">
                {specTabs[selectedSpec].title}
              </span>
              <div className="readout text-xl sm:text-3xl font-bold text-slate-900">
                {specTabs[selectedSpec].value}
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {specTabs[selectedSpec].desc}
              </p>
            </div>

            {/* Mini Quick Stats Bar */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 text-center">
              {capacityStats.slice(0, 2).map((s) => (
                <div key={s.label} className="bg-slate-50 p-2.5 sm:p-3 rounded-lg border border-slate-200/60">
                  <div className="readout text-base sm:text-lg font-bold text-slate-900">
                    {s.value}<span className="text-xs text-beacon font-normal">{s.unit}</span>
                  </div>
                  <div className="eyebrow text-[8px] sm:text-[9px] text-slate-500 truncate">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
