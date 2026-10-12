import React from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

interface AreaItem {
  name: string;
  eta: string;
  zip: string;
  coverage: string;
}

const AREAS: AreaItem[] = [
  { name: "Riverwest & Harambee", eta: "10–15 Mins", zip: "53212", coverage: "Primary Base • Rapid Dispatch" },
  { name: "East Side & Brady St", eta: "12–18 Mins", zip: "53202 / 53211", coverage: "Historic Apartments & Condos" },
  { name: "Downtown & Third Ward", eta: "12–18 Mins", zip: "53202", coverage: "High-Rise & Loft Entryways" },
  { name: "Bay View & Walker's Point", eta: "15–20 Mins", zip: "53207 / 53204", coverage: "Bungalows & Restored Flats" },
  { name: "Wauwatosa & Heights", eta: "18–25 Mins", zip: "53213 / 53226", coverage: "Single Family & Tudor Locks" },
  { name: "Shorewood & Whitefish Bay", eta: "15–20 Mins", zip: "53211 / 53217", coverage: "North Shore Residential" },
  { name: "West Allis & Greenfield", eta: "20–25 Mins", zip: "53214 / 53220", coverage: "Residential Duplex Specialists" },
  { name: "Glendale & Fox Point", eta: "18–25 Mins", zip: "53209 / 53217", coverage: "High-Security Mortise & Deadbolts" },
];

export const ServiceAreaMap: React.FC = () => {
  return (
    <section id="coverage" className="py-20 bg-[#070c18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Navigation className="w-3.5 h-3.5" />
            <span>MILWAUKEE METRO DISPATCH ZONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Fast Response Across Milwaukee
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our vans are mobile workshops stationed strategically throughout Milwaukee County, stocked with specialized lock picking, decoding, and pinning stations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AREAS.map((a, i) => (
            <div
              key={i}
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                  <span>{a.zip}</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {a.eta}
                  </span>
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">{a.name}</h4>
                <p className="text-xs text-slate-400">{a.coverage}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400">Van On-Call</span>
                <a
                  href="tel:4012560941"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>Dispatch</span>
                  <Phone className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on vehicles */}
        <div className="mt-10 text-center text-xs text-slate-400">
          * Don't see your specific zip code? Call us directly at <a href="tel:4012560941" className="text-amber-400 font-bold underline">(401) 256-0941</a>. We service all of Milwaukee, Ozaukee, and Waukesha counties for residential deadbolts.
        </div>

      </div>
    </section>
  );
};
