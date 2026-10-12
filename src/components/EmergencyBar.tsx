import React from "react";
import { Phone, Clock, ShieldCheck, MapPin } from "lucide-react";

export const EmergencyBar: React.FC = () => {
  return (
    <div className="bg-[#03060d] border-b border-blue-500/20 text-xs py-2 px-4 text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold tracking-wide">ON-CALL TECHNICIANS LIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Avg. Arrival: <strong className="text-white">15–25 Mins</strong> in Metro MKE</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Milwaukee • Bay View • East Side • Wauwatosa • Shorewood</span>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <div className="hidden lg:flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Non-Destructive Entry First</span>
          </div>
          <a
            href="tel:4012560941"
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 animate-bounce" />
            <span>DISPATCH: (401) 256-0941</span>
          </a>
        </div>
      </div>
    </div>
  );
};
