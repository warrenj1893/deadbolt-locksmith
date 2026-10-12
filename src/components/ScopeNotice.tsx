import React from "react";
import { Home, ShieldCheck, Info, Car, CheckCircle2, ArrowRight } from "lucide-react";

export const ScopeNotice: React.FC = () => {
  return (
    <section className="py-6 px-4 bg-gradient-to-r from-blue-950/40 via-slate-900 to-amber-950/30 border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-4 rounded-2xl glass-card">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-bold text-white text-base sm:text-lg">
                  Residential Deadbolt &amp; Home Entry Specialists
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                  100% Home &amp; Building Focus
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                We specialize exclusively in opening, repairing, rekeying, and upgrading house deadbolts, mortise cylinders, and apartment doors. We prioritize non-destructive bypass techniques so your hardware stays intact.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <div className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <Car className="w-5 h-5 text-slate-500 shrink-0" />
              <div>
                <strong className="text-slate-200 block">Notice on Auto / Vehicle Lockouts:</strong>
                <span>We currently do <span className="text-amber-400 font-semibold">not</span> service cars or automotive locks yet. We dedicate 100% of our fleet to fast home response times.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
