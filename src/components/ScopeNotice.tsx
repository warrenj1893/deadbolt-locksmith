import React from "react";
import { Home, Car, AlertCircle } from "lucide-react";

export const ScopeNotice: React.FC = () => {
  return (
    <section className="py-4 px-4 bg-slate-950 border-y border-amber-500/30">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Home className="w-6 h-6" />
          </div>
          <div>
            <div className="font-extrabold text-white text-base sm:text-lg">
              We Specialize Exclusively in House &amp; Apartment Deadbolts!
            </div>
            <div className="text-xs sm:text-sm text-slate-300">
              Front doors, back doors, porches, and apartment entryways.
            </div>
          </div>
        </div>

        <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-300 flex items-center gap-2">
          <Car className="w-4 h-4 text-slate-400 shrink-0" />
          <span><strong>Quick Note:</strong> We do <span className="text-amber-400 font-bold underline">not</span> do cars or vehicles yet.</span>
        </div>
      </div>
    </section>
  );
};
