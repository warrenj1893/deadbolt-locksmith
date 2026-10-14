import React from "react";
import { Lock, Phone } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-[#070c18] border-b border-slate-800 py-3.5 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5 text-black" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <div className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight truncate">
              MILWAUKEE <span className="text-amber-400">DEADBOLT</span>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-mono truncate">
              House Entry Specialists
            </div>
          </div>
        </div>

        {/* Primary Call Button */}
        <a
          href="tel:4012560941"
          className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shrink-0 transition-all active:scale-95 shadow-md shadow-amber-500/20"
        >
          <Phone className="w-4 h-4 fill-black shrink-0" />
          <span>(401) 256-0941</span>
        </a>
      </div>
    </header>
  );
};
