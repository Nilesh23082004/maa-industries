"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/lib/content";
import { Gauge, Cpu, Anchor, ShieldCheck, Check, X } from "lucide-react";

export default function WhyUs() {
  const whyUsIcons = [Gauge, Cpu, Anchor, ShieldCheck];

  const comparisonFeatures = [
    {
      feature: "Max Turning Capacity",
      maa: "Up to 600mm × 6000mm in single setup",
      others: "Restricted to short beds (<2000mm)",
    },
    {
      feature: "Material Handling",
      maa: "7.5 Ton overhead EOT crane coverage",
      others: "Manual or small mobile hoists",
    },
    {
      feature: "Machining Versatility",
      maa: "CNC Precision + Heavy Conventional under one roof",
      others: "Only basic conventional turning",
    },
    {
      feature: "Tolerances & Quality",
      maa: "±0.01mm concentricity on long shafts",
      others: "High runout risk over extended length",
    },
  ];

  return (
    <section id="why-us" className="bg-white text-slate-900 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3 sm:mb-4">
              <span className="w-2.5 h-2.5 rounded-full beacon-dot" />
              <span className="eyebrow text-[10px] sm:text-[11px] text-slate-700">
                Why Maa Industries
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl">
              A new shop, equipped for the heavy jobs others pass on.
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            We focus strictly on heavy long-bed turning and component machining, combining purpose-built machinery with high-tonnage overhead handling.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-20">
          {whyUs.map((item, idx) => {
            const Icon = whyUsIcons[idx % whyUsIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-2xl flex flex-col justify-start relative overflow-hidden group shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Border Beam Glow */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-beacon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-beacon group-hover:scale-110 transition-transform shadow-xs shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-beacon transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Comparison Matrix - Mobile Touch Scrollable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 rounded-2xl p-5 sm:p-10 border border-slate-200 shadow-xs"
        >
          <div className="mb-6 sm:mb-8">
            <span className="eyebrow text-beacon text-[10px] sm:text-xs block mb-1.5 sm:mb-2">
              Facility Comparison Matrix
            </span>
            <h3 className="font-display text-xl sm:text-3xl font-bold text-slate-900">
              How we compare for heavy component machining
            </h3>
          </div>

          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-3 sm:py-4 sm:px-4 eyebrow text-[10px] sm:text-xs text-slate-500">Feature / Capability</th>
                  <th className="py-3 px-3 sm:py-4 sm:px-4 eyebrow text-[10px] sm:text-xs text-beacon bg-orange-50/80 rounded-t-lg">Maa Industries (Rakhial)</th>
                  <th className="py-3 px-3 sm:py-4 sm:px-4 eyebrow text-[10px] sm:text-xs text-slate-500">Standard Machine Shops</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80">
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="hover:bg-white transition-colors">
                    <td className="py-3 px-3 sm:py-4 sm:px-4 font-display font-semibold text-xs sm:text-sm text-slate-900">{row.feature}</td>
                    <td className="py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm font-semibold text-slate-900 bg-orange-50/80">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.maa}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500/70 shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
