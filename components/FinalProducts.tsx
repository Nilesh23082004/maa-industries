"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const finalProductPhotos = [
  { id: "fp-1", label: "Final Product", src: "/final-products/product-1.jpeg" },
  { id: "fp-2", label: "Final Product", src: "/final-products/product-2.jpeg" },
  { id: "fp-3", label: "Final Product", src: "/final-products/product-3.jpeg" },
  { id: "fp-4", label: "Final Product", src: "/final-products/product-4.jpeg" },
];

const finalProductVideos = [
  { id: "fpv-1", label: "Final Product Video", src: "/final-products/product-video.mp4" }
];

export default function FinalProducts() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ label: string; src: string } | null>(null);

  return (
    <section id="final-products" className="bg-white text-slate-900 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-beacon" />
            <span className="eyebrow text-[10px] sm:text-[11px] text-slate-700">
              Our Final Products
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl">
            Precision Delivered
          </h2>
        </div>

        {/* Photos Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {finalProductPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden group border border-slate-200 shadow-xs bg-slate-900 cursor-pointer active:scale-98 transition-transform"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4">
                  <span className="eyebrow text-xs text-white block line-clamp-2">
                    {photo.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {finalProductVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-contain block"
                  >
                    <source src={video.src} />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="eyebrow text-xs text-slate-800 block truncate">
                    {video.label}
                  </span>
                  <span className="readout text-[9px] sm:text-[10px] font-bold text-emerald-700 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 shrink-0">
                    MP4 VIDEO
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-slate-900/85 backdrop-blur-xl z-50 flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-2xl flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 hover:text-beacon transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[50vh] sm:h-[65vh] bg-slate-900">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.label}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex items-center justify-between">
                <span className="eyebrow text-xs sm:text-sm text-slate-900">
                  {selectedPhoto.label}
                </span>
                <span className="readout text-[11px] sm:text-xs text-slate-500">
                  Final Product
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
