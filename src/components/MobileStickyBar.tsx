import React from "react";
import { Phone, Calendar } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-[#03060d]/98 backdrop-blur-xl border-t-2 border-amber-400 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:4012560941"
          className="flex-1 py-4 px-4 rounded-xl bg-amber-500 active:bg-amber-400 text-black font-extrabold flex items-center justify-center gap-2.5 text-base shadow-lg shadow-amber-500/30"
        >
          <Phone className="w-5 h-5 fill-black shrink-0" />
          <span>CALL DISPATCH NOW</span>
        </a>

        <a
          href="#calculator"
          className="py-4 px-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-bold flex items-center justify-center gap-1.5 shrink-0"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Book</span>
        </a>
      </div>
    </div>
  );
};
