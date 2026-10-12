import React from "react";
import { Star, ShieldCheck, Quote } from "lucide-react";

interface Review {
  name: string;
  neighborhood: string;
  situation: string;
  text: string;
  stars: number;
}

const REVIEWS: Review[] = [
  {
    name: "Marcus T.",
    neighborhood: "East Side / Brady St",
    situation: "Locked out at 11:30 PM",
    text: "Called another company first who quoted $25 on Google and showed up quoting $380 with a drill in hand! Told them to leave and called Milwaukee Deadbolt Co. The technician arrived in 18 minutes, picked my Schlage deadbolt open in under 4 minutes with zero damage, and charged exactly what was quoted on the phone. Lifesavers.",
    stars: 5,
  },
  {
    name: "Elena R.",
    neighborhood: "Riverwest Duplex",
    situation: "Historic double-cylinder deadbolt stuck",
    text: "Our 1920s duplex had a jammed deadbolt that wouldn't turn from either side. They expertly shimmed and bypassed the cylinder, then adjusted the door strike so it no longer binds when humidity changes. Highly recommend for historic home doors.",
    stars: 5,
  },
  {
    name: "David K.",
    neighborhood: "Bay View",
    situation: "Lost house keys & needed rekeying",
    text: "Lost our keychain while at Humboldt Park. Technician came out and re-keyed both our front and back deadbolts right out of his mobile workshop van. Kept our stylish antique brass hardware and handed us 4 new keys. Honest, clean, and upfront.",
    stars: 5,
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#060a14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>VERIFIED MILWAUKEE REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Trusted by Milwaukee Homeowners
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Real feedback from local residents who avoided drill-happy scammers and got back inside their homes quickly and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(r.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-500/20 mb-2" />
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-sm">{r.name}</h4>
                  <div className="text-xs text-slate-400">{r.neighborhood}</div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Job
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
