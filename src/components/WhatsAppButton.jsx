import React, { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Clean 2-line English message
  const whatsappUrl =
    "https://wa.me/919541119612?text=Hello%20Print%20Happiness%20Hub!%0AI%20would%20like%20to%20inquire%20about%20custom%20printing%20orders.";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
      {/* Tooltip Badge on Desktop Hover */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl transition-all duration-300 pointer-events-none select-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>Need Help? Chat on WhatsApp</span>
      </div>

      {/* Floating Glowing Official WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-108 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Soft Continuous Ping Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

        {/* Official WhatsApp Logo SVG */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="relative z-10"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-4.52 4.07c-.18 0-.47.07-.72.34-.25.28-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.87.14.18 1.95 2.97 4.72 4.17.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.53-.32-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.23-.55-.46-.47-.63-.48z" />
        </svg>
      </a>
    </div>
  );
}
