"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { machinery } from "@/lib/content";
import { Maximize2, Cpu, Wrench, ShieldCheck, X, ArrowUpRight } from "lucide-react";

export default function Facility() {
  const [selectedMachine, setSelectedMachine] = useState<typeof machinery[0] | null>(null);

  const machineIcons = [Cpu, Wrench, ShieldCheck, Maximize2];

  return (
    <section id="facility" className="bg-white text-slate-900 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-4">
              <span className="w-2.5 h-2.5 rounded-full beacon-dot" />
              <span className="eyebrow text-[11px] text-slate-700">
                Shop Floor Equipment
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl">
              The machines behind the tolerance.
            </h2>
          </div>

          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            Our facility in Rakhial is intentionally equipped for long-bed turning, heavy metal removal, and overhead material handling up to 7.5 metric tons.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {machinery.map((item, idx) => {
            const Icon = machineIcons[idx % machineIcons.length];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col group relative shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Spec Badge Overlay */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="readout text-xs font-bold text-white px-3.5 py-1.5 bg-slate-900/90 backdrop-blur-md rounded-full border border-white/20 shadow-md">
                      {item.spec}
                    </span>
                  </div>

                  {/* Quick Expand Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedMachine(item)}
                    className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 hover:text-beacon hover:scale-110 transition-all shadow-lg"
                    aria-label="Expand image spec"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-beacon">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-beacon transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="eyebrow text-[10px] text-slate-400">
                      HEAVY MACHINE FLEET
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedMachine(item)}
                      className="text-xs font-bold text-beacon hover:text-slate-900 flex items-center gap-1 uppercase tracking-wider transition-colors"
                    >
                      <span>Full View</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Spec Lightbox Modal */}
      <AnimatePresence>
        {selectedMachine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMachine(null)}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full overflow-hidden relative shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedMachine(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 hover:text-beacon transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-96 w-full bg-slate-900">
                <Image
                  src={selectedMachine.image}
                  alt={selectedMachine.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {selectedMachine.name}
                  </h3>
                  <span className="readout text-sm font-bold text-white px-3.5 py-1 bg-slate-900 rounded-full">
                    {selectedMachine.spec}
                  </span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {selectedMachine.detail}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
