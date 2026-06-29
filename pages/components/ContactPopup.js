"use client";

import { useState, useEffect } from "react";

export default function ContactPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 max-w-[280px] transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative bg-[#111] border border-white/10 rounded-2xl p-5 shadow-2xl">
        {/* Close */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-white/20 hover:text-white/60 transition-colors text-lg leading-none"
        >
          ×
        </button>

        {/* Pulse dot */}
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">
            If you can read this
          </span>
        </div>

        {/* Heading */}
        <p className="text-white/80 text-sm font-medium leading-snug mb-1">
          Every business needs an identity.
        </p>
        <p className="text-white/40 text-xs leading-relaxed mb-4">
          Want something built like this? Let's make it happen.
        </p>

        {/* CTA */}
        <a
          href="https://www.melvinjonesrepol.com/contact-me"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-black bg-white hover:bg-white/90 transition-colors px-4 py-2 rounded-lg w-full justify-center"
        >
          Contact me →
        </a>
      </div>
    </div>
  );
}
