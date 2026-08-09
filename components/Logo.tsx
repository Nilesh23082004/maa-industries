"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "full" | "header" | "footer" | "icon";
  className?: string;
  height?: number;
  width?: number;
  priority?: boolean;
}

export default function Logo({
  variant = "header",
  className = "",
  height,
  width,
  priority = true,
}: LogoProps) {
  // Header Logo (Used in sticky navbar - 100% complete logo image, no cuts)
  if (variant === "header") {
    return (
      <div className={`flex items-center shrink-0 py-0.5 ${className}`}>
        <Image
          src="/images/maa-logo-full.png"
          alt="Maa Industries - Precision Performance Quality"
          width={width || 120}
          height={height || 64}
          className="object-contain h-12 sm:h-14 lg:h-14 w-auto drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
      </div>
    );
  }

  // Footer Logo (Larger display for footer brand column)
  if (variant === "footer") {
    return (
      <div className={`flex items-center shrink-0 ${className}`}>
        <Image
          src="/images/maa-logo-full.png"
          alt="Maa Industries - Precision Performance Quality"
          width={width || 180}
          height={height || 90}
          className="object-contain h-16 sm:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
      </div>
    );
  }

  // Default Full Logo (100% complete logo image with all elements)
  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <Image
        src="/images/maa-logo-full.png"
        alt="Maa Industries - Precision Performance Quality"
        width={width || 160}
        height={height || 80}
        className="object-contain h-12 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
        priority={priority}
      />
    </div>
  );
}
