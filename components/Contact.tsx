"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/lib/content";
import { MapPin, Phone, Mail, MessageSquare, Copy, Check, ExternalLink, X } from "lucide-react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

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
              {/* Phone Card with Both Stacked Numbers */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between group hover:border-orange-400/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="eyebrow text-slate-400 text-[10px]">
                      DIRECT PHONE LINES
                    </span>
                    <span className="text-[10px] text-beacon font-bold uppercase tracking-wider">
                      DIRECT CALL
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {company.phoneNumbers.map((phone, idx) => (
                      <div
                        key={phone.number}
                        className={idx > 0 ? "pt-3 border-t border-slate-100" : ""}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={`tel:${phone.number.replace(/\s+/g, "")}`}
                            className="readout text-sm sm:text-base font-semibold text-slate-900 group-hover:text-beacon transition-colors block"
                          >
                            {phone.number}
                          </a>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleCopy(phone.number, `phone-${idx}`)}
                              className="text-slate-400 hover:text-beacon transition-colors p-1 rounded-md hover:bg-slate-100"
                              title="Copy phone number"
                            >
                              {copiedField === `phone-${idx}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                            <a
                              href={`tel:${phone.number.replace(/\s+/g, "")}`}
                              className="text-xs text-beacon font-bold uppercase tracking-wider flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-50 hover:bg-beacon hover:text-white border border-orange-200/70 transition-all shrink-0 active:scale-95"
                            >
                              <span>Call</span>
                              <Phone className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setIsWhatsAppModalOpen(true)}
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
                    {company.phoneNumbers.map((p) => p.number).join(" / ")} &bull; Instant Drawing & Quote Inquiry
                  </p>
                </div>
              </div>

              {/* Right CTA Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsWhatsAppModalOpen(true);
                }}
                className="z-10 bg-white text-emerald-800 font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-xl shadow-md group-hover:bg-slate-900 group-hover:text-white transition-colors flex items-center gap-2 shrink-0 self-stretch sm:self-auto justify-center cursor-pointer min-h-[44px]"
              >
                <span>Start Chat Now</span>
                <MessageSquare className="w-4 h-4" />
              </button>
            </motion.div>
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

      {/* WhatsApp Number Selection Light Theme Popup Modal / Bottom Sheet */}
      <AnimatePresence>
        {isWhatsAppModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
            onClick={() => setIsWhatsAppModalOpen(false)}
          >
            {/* Modal / Bottom Sheet Panel */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="bg-white border border-slate-200 rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md p-5 sm:p-6 relative text-slate-900 max-h-[90vh] flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drag Indicator Bar Visual */}
              <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden shrink-0" />

              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <span className="eyebrow text-emerald-700 text-[10px] sm:text-[11px] block">
                      INSTANT WHATSAPP SUPPORT
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                      Select WhatsApp Contact
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsWhatsAppModalOpen(false)}
                  className="text-slate-400 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close WhatsApp modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-3 overflow-y-auto my-1 pr-1">
                <p className="text-slate-600 text-xs sm:text-sm mb-3">
                  Select a phone number to start direct WhatsApp chat for machining drawings and quote inquiries:
                </p>

                <div className="space-y-2.5">
                  {company.phoneNumbers.map((phone) => {
                    const message = "Hello Maa Industries, I want to inquire about heavy CNC machining capacity and quote.";
                    const waUrl = `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(message)}`;
                    return (
                      <a
                        key={phone.number}
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsWhatsAppModalOpen(false)}
                        className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-300 transition-all group min-h-[52px] cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-all shadow-xs">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                          </div>
                          <span className="readout text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {phone.number}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-xs group-hover:shadow">
                          <span>Start Chat</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center shrink-0">
                <p className="eyebrow text-[10px] text-slate-400">
                  MAA INDUSTRIES &bull; RAKHIAL INDUSTRIAL AREA
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
