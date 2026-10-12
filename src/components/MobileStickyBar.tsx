import React from "react";
import { Phone, Clock, Calculator } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#040711]/95 backdrop-blur-lg border-t border-blue-500/30 shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href="tel:4012560941"
          className="flex-1 amber-glow-btn py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm text-black shadow-lg shadow-amber-500/25"
        >
          <Phone className="w-4 h-4 fill-black" />
          <span>Call Dispatch Now</span>
        </a>

        <a
          href="#calculator"
          className="py-3 px-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>Quote</span>
        </a>
      </div>
    </div>
  );
};
