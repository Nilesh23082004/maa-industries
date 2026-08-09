"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { company } from "@/lib/content";
import { MapPin, Phone, Mail, MessageSquare, Copy, Check, ExternalLink } from "lucide-react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const whatsappCleaned = company.phoneWhatsapp.replace(/[^0-9]/g, "");

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="bg-slate-50 text-slate-900 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <span className="w-2.5 h-2.5 rounded-full ready-dot animate-pulse" />
              <span className="eyebrow text-[11px] text-emerald-700">
                SHOP OPEN &bull; DIRECT CONTACT
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl">
              Ready to discuss your machining requirements?
            </h2>
          </div>

          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            Reach out to our Rakhial team directly for drawings submission, capacity inquiries, or rapid cost estimation.
          </p>
        </div>

        {/* 2-Column Contact Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          {/* Left Column: Contact Hub */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xs relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-beacon">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="eyebrow text-beacon text-[11px] block">
                    FACILITY LOCATION
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {company.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-1 text-slate-600 text-sm sm:text-base leading-relaxed pl-13">
                {company.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </motion.div>

            {/* Direct Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between group hover:border-orange-400/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="eyebrow text-slate-400 text-[10px]">
                      PRIMARY PHONE
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(company.phonePrimary, "phone")}
                      className="text-slate-400 hover:text-beacon transition-colors"
                      title="Copy phone number"
                    >
                      {copiedField === "phone" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <a
                    href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`}
                    className="readout text-base font-semibold text-slate-900 group-hover:text-beacon transition-colors block"
                  >
                    {company.phonePrimary}
                  </a>
                </div>
                <a
                  href={`tel:${company.phonePrimary.replace(/\s+/g, "")}`}
                  className="text-xs text-beacon font-bold uppercase tracking-wider mt-4 flex items-center gap-1"
                >
                  <span>Call Now</span>
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between group hover:border-orange-400/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="eyebrow text-slate-400 text-[10px]">
                      EMAIL INQUIRY
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(company.email, "email")}
                      className="text-slate-400 hover:text-beacon transition-colors"
                      title="Copy email address"
                    >
                      {copiedField === "email" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <a
                    href={`mailto:${company.email}`}
                    className="readout text-sm font-semibold text-slate-900 group-hover:text-beacon transition-colors break-all block"
                  >
                    {company.email}
                  </a>
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="text-xs text-beacon font-bold uppercase tracking-wider mt-4 flex items-center gap-1"
                >
                  <span>Send Email</span>
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>

            {/* WhatsApp Direct Action Banner */}
            <motion.a
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              href={`https://wa.me/${whatsappCleaned}?text=${encodeURIComponent("Hello Maa Industries, I want to inquire about heavy CNC machining capacity and quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 p-6 sm:p-7 rounded-2xl text-white shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/40 transition-all duration-300 group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-emerald-400/30 cursor-pointer"
            >
              {/* Ambient Shimmer Sweep */}
              <div className="absolute inset-0 animate-shimmer pointer-events-none" />

              <div className="flex items-center gap-4.5 z-10">
                {/* Official WhatsApp SVG Logo Badge */}
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/25 transition-all shadow-inner">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="eyebrow text-[11px] text-emerald-100 tracking-wider">
                      INSTANT WHATSAPP SUPPORT
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Chat Direct on WhatsApp
                  </h3>
                  <p className="text-emerald-100/90 text-xs sm:text-sm mt-0.5 readout">
                    +91 63532 28328 &bull; Instant Drawing & Quote Inquiry
                  </p>
                </div>
              </div>

              {/* Right CTA Button */}
              <div className="z-10 bg-white text-emerald-800 font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-xl shadow-md group-hover:bg-slate-900 group-hover:text-white transition-colors flex items-center gap-2 shrink-0 self-stretch sm:self-auto justify-center">
                <span>Start Chat Now</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          </div>

          {/* Right Column: Embedded Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-6 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[380px] lg:min-h-full w-full relative flex flex-col"
          >
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between z-10">
              <span className="eyebrow text-xs text-slate-800 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-beacon" />
                Rakhial Machine Shop Location
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-beacon font-bold uppercase tracking-wider flex items-center gap-1 hover:underline"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`}
              title="Maa Industries Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-1"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
