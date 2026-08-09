import React from "react";

interface MediaPlaceholderProps {
  label: string;
  kind: "photo" | "video";
}

export default function MediaPlaceholder({ label, kind }: MediaPlaceholderProps) {
  return (
    <div
      className="bg-graphite-2 border border-steel-soft rounded-lg overflow-hidden relative p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[220px] w-full h-full group hover:border-steel transition-all duration-300"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 24px)",
      }}
    >
      {/* Icon Badge */}
      <div className="w-12 h-12 rounded-full bg-graphite border border-steel flex items-center justify-center text-pale group-hover:text-beacon group-hover:border-beacon/40 transition-colors">
        {kind === "photo" ? (
          <svg
            className="w-6 h-6 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
          </svg>
        )}
      </div>

      {/* Label */}
      <p className="eyebrow text-pale text-xs tracking-wider max-w-[90%] leading-relaxed">
        {label}
      </p>

      {/* Media Pending Tag */}
      <span className="readout text-[10px] font-bold text-beacon px-2.5 py-0.5 rounded bg-beacon/10 border border-beacon/30 tracking-widest uppercase">
        Media pending
      </span>
    </div>
  );
}
