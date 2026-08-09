"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { clientPhotos, clientVideos } from "@/lib/content";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import { Maximize2, Image as ImageIcon, Video, X } from "lucide-react";

const realFacilityPhotos = [
  {
    id: "fac-1",
    label: "CNC Lathe long-bed setup",
    src: "/images/cnc-lathe-overview.jpg",
  },
  {
    id: "fac-2",
    label: "Conventional turning bay",
    src: "/images/cnc-lathe-side.jpg",
  },
  {
    id: "fac-3",
    label: "Radial drilling machine in action",
    src: "/images/machine-facility.jpg",
  },
  {
    id: "fac-4",
    label: "EOT Crane heavy workpiece positioning",
    src: "/images/shaft-machining.jpg",
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ label: string; src: string } | null>(null);
  const [mediaFilter, setMediaFilter] = useState<"all" | "photos" | "videos">("all");

  const allPhotos = [...realFacilityPhotos, ...clientPhotos];

  return (
    <section id="gallery" className="bg-slate-50 text-slate-900 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/70 border border-slate-300 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-beacon" />
              <span className="eyebrow text-[10px] sm:text-[11px] text-slate-700">
                Shop Floor Media
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl">
              From the floor, as it runs.
            </h2>
          </div>

          {/* Media Filter Buttons - Mobile Scrollable */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white p-1 sm:p-1.5 rounded-full border border-slate-200 shadow-xs overflow-x-auto w-full md:w-auto">
            <button
              type="button"
              onClick={() => setMediaFilter("all")}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full transition-all shrink-0 ${
                mediaFilter === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Media
            </button>
            <button
              type="button"
              onClick={() => setMediaFilter("photos")}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center gap-1.5 shrink-0 ${
                mediaFilter === "photos"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Photos ({allPhotos.length})
            </button>
            <button
              type="button"
              onClick={() => setMediaFilter("videos")}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center gap-1.5 shrink-0 ${
                mediaFilter === "videos"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              Videos ({clientVideos.length})
            </button>
          </div>
        </div>

        {/* Photos Grid */}
        {(mediaFilter === "all" || mediaFilter === "photos") && (
          <div className="mb-12 sm:mb-16">
            <h3 className="eyebrow text-slate-500 mb-4 sm:mb-6 block tracking-widest">
              Shop Floor & Component Photos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {allPhotos.map((photo, idx) => {
                const isPlaceholder = !photo.src || photo.src.startsWith("REPLACE_WITH_");

                if (isPlaceholder) {
                  return (
                    <div key={photo.id} className="h-56 sm:h-64">
                      <MediaPlaceholder label={photo.label} kind="photo" />
                    </div>
                  );
                }

                return (
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
                );
              })}
            </div>
          </div>
        )}

        {/* Videos Grid */}
        {(mediaFilter === "all" || mediaFilter === "videos") && (
          <div>
            <h3 className="eyebrow text-slate-500 mb-4 sm:mb-6 block tracking-widest">
              Machining Process Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {clientVideos.map((video, idx) => {
                const isPlaceholder = !video.src || video.src.startsWith("REPLACE_WITH_");

                if (isPlaceholder) {
                  return (
                    <div key={video.id} className="h-56 sm:h-64">
                      <MediaPlaceholder label={video.label} kind="video" />
                    </div>
                  );
                }

                const isEmbed = video.src.includes("youtube") || video.src.includes("vimeo");

                if (isEmbed) {
                  return (
                    <div
                      key={video.id}
                      className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
                    >
                      <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                        <iframe
                          src={video.src}
                          title={video.label}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100">
                        <span className="eyebrow text-xs text-slate-800 block">
                          {video.label}
                        </span>
                      </div>
                    </div>
                  );
                }

                return (
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
                );
              })}
            </div>
          </div>
        )}
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
                  Shop Floor Photo
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
