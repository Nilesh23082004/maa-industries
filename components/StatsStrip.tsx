"use client";

import { motion } from "framer-motion";
import { capacityStats } from "@/lib/content";
import { Ruler, Maximize2, Anchor, Cpu } from "lucide-react";

export default function StatsStrip() {
  const statIcons = [Ruler, Maximize2, Anchor, Cpu];

  return (
    <section className="bg-white border-b border-slate-200 py-10 lg:py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {capacityStats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Accent Top Border Beam */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-beacon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-beacon group-hover:border-beacon/40 transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="eyebrow text-[10px] text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                    SPEC 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="readout text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight group-hover:text-beacon transition-colors">
                      {stat.value}
                    </span>
                    <span className="readout text-sm sm:text-base font-semibold text-beacon">
                      {stat.unit}
                    </span>
                  </div>
                  <p className="eyebrow text-xs text-slate-500 tracking-wider group-hover:text-slate-700 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
