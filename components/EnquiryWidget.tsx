"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, CheckCircle2, ShieldCheck, Phone, Mail, User, FileText } from "lucide-react";

export default function EnquiryWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "idle" });

    // Client-side validation
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Please enter your name." });
      return;
    }
    if (!formData.phone.trim()) {
      setStatus({ type: "error", message: "Please enter your phone number." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Please describe your component requirements." });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus({
          type: "success",
          message: "Enquiry Received — Our Rakhial team will contact you shortly.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send enquiry. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Action Button - Animated Levitation */}
      <motion.button
        type="button"
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            "0 10px 25px -4px rgba(255, 106, 26, 0.4)",
            "0 22px 35px -4px rgba(255, 106, 26, 0.6)",
            "0 10px 25px -4px rgba(255, 106, 26, 0.4)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, y: -12 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open quick enquiry modal"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-beacon hover:bg-beacon-dim text-white p-3.5 sm:p-4 rounded-full flex items-center justify-center group focus:outline-none cursor-pointer border border-white/20"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-white" />
      </motion.button>

      {/* Modal Backdrop & Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Panel - Mobile Bottom Sheet */}
            <motion.div
              initial={{ scale: 0.95, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 50 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="bg-white border border-slate-200 rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg p-5 sm:p-8 relative text-slate-900 overflow-y-auto max-h-[90vh] sm:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drag Indicator */}
              <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />

              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 sm:mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-beacon shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="eyebrow text-beacon text-[10px] sm:text-[11px] block">
                      QUICK ENQUIRY
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                      Get a Capacity Quote
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Success Message */}
              {status.type === "success" ? (
                <div className="py-6 sm:py-8 text-center space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    Enquiry Submitted!
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
                    {status.message}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus({ type: "idle" });
                      setIsOpen(false);
                    }}
                    className="bg-beacon hover:bg-beacon-dim active:bg-beacon-dim text-white text-xs uppercase tracking-wider font-bold py-3 px-8 rounded-full transition-colors shadow-md shadow-beacon/20"
                  >
                    Done & Close
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Error Banner */}
                  {status.type === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-semibold">
                      {status.message}
                    </div>
                  )}

                  {/* Name Field */}
                  <div>
                    <label htmlFor="widget-name" className="eyebrow text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-1.5 mb-1">
                      <User className="w-3.5 h-3.5 text-beacon" />
                      Your Name <span className="text-beacon">*</span>
                    </label>
                    <input
                      id="widget-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Shah"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-beacon focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label htmlFor="widget-phone" className="eyebrow text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-1.5 mb-1">
                        <Phone className="w-3.5 h-3.5 text-beacon" />
                        Phone <span className="text-beacon">*</span>
                      </label>
                      <input
                        id="widget-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 63532 28328"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-beacon focus:bg-white transition-colors readout"
                      />
                    </div>

                    <div>
                      <label htmlFor="widget-email" className="eyebrow text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-1.5 mb-1">
                        <Mail className="w-3.5 h-3.5 text-beacon" />
                        Email <span className="text-beacon">*</span>
                      </label>
                      <input
                        id="widget-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-beacon focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="widget-message" className="eyebrow text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-1.5 mb-1">
                      <FileText className="w-3.5 h-3.5 text-beacon" />
                      What component specs do you need? <span className="text-beacon">*</span>
                    </label>
                    <textarea
                      id="widget-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe component dimensions (e.g. 500mm x 3000mm), material type, or required quantity..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-beacon focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-beacon hover:bg-beacon-dim active:bg-beacon-dim disabled:opacity-50 text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl transition-all shadow-lg shadow-beacon/20 flex items-center justify-center gap-2 mt-2 min-h-[44px]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
