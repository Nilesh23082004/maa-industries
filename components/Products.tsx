"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/content";
import { Disc, Layers, ShieldCheck, ArrowUpRight, Cpu, Wrench } from "lucide-react";

export default function Products() {
  const productIcons = [Disc, Layers, ShieldCheck, Cpu, Wrench];

  return (
    <section id="products" className="bg-slate-50 text-slate-900 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-4">
              <span className="w-2 h-2 rounded-full bg-beacon" />
              <span className="eyebrow text-[11px] text-beacon-dim">
                What We Machine
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl">
              Components built for load, not just for spec.
            </h2>
          </div>

          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            Specialized heavy turning and precision component engineering designed to endure extreme cyclic stress, high rotation speeds, and multi-ton industrial loads.
          </p>
        </div>

        {/* Modern SaaS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const formattedIndex = String(index + 1).padStart(2, "0");
            const isLastItem = index === products.length - 1;
            const Icon = productIcons[index % productIcons.length];

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl hover:border-orange-400/50 transition-all duration-300 group shadow-xs ${
                  isLastItem ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-beacon group-hover:text-white group-hover:border-beacon transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="readout text-xs font-bold text-beacon-dim px-3 py-1 bg-orange-50 rounded-full border border-orange-200">
                      PART {formattedIndex}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-beacon transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-beacon-dim group-hover:text-slate-900 transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Request Custom Specs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
