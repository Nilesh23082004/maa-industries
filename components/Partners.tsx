"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/content";
import { Users } from "lucide-react";

export default function Partners() {
  return (
    <section id="partners" className="bg-slate-50 text-slate-900 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Side: Header */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-beacon shrink-0">
            <Users className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="eyebrow text-beacon text-[10px] block">
              LEADERSHIP
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              Partners
            </h3>
          </div>
        </div>

        {/* Right Side: Clean Light Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 flex-1 max-w-3xl">
          {partners.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-white border border-slate-200 px-4 py-3 rounded-xl flex items-center gap-3 shadow-2xs hover:border-orange-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-beacon shrink-0" />
              <span className="font-display font-semibold text-sm text-slate-900 truncate">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
