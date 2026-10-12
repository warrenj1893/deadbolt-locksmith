import React from "react";
import { XCircle, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

export const TheDeadboltDifference: React.FC = () => {
  return (
    <section id="deadbolt-tech" className="py-16 bg-[#060a14] border-t border-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            Honest Local Locksmiths
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Beware of Shady Locksmith Scams
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Many locksmiths advertise a fake "$19 quote" on Google, show up, drill your lock with a loud power drill, and demand $350 in cash. We do the opposite.
          </p>
        </div>

        {/* Side-by-side clear contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Scam */}
          <div className="p-6 sm:p-8 rounded-3xl bg-red-950/20 border-2 border-red-500/30 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-2xl">
                ✕
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-red-200">
                  The Shady "$19 Bait &amp; Switch"
                </h3>
                <p className="text-xs text-red-300/80">Roadside call centers &amp; drillers</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg">✕</span>
                <div>
                  <strong className="text-white block">Quotes $19 on the phone</strong>
                  <span className="text-sm text-slate-400">Then pressures you for $300+ in cash once standing at your door.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg">✕</span>
                <div>
                  <strong className="text-white block">Drills your lock immediately</strong>
                  <span className="text-sm text-slate-400">Destroys your lock and scratches your wooden door frame.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg">✕</span>
                <div>
                  <strong className="text-white block">Forces you to buy a cheap replacement</strong>
                  <span className="text-sm text-slate-400">Charges you 5x retail price for a flimsy hardware-store lock.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milwaukee Deadbolt Co. */}
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950/25 border-2 border-emerald-400/60 space-y-5 shadow-xl shadow-emerald-950/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-2xl">
                ✓
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-emerald-200">
                  Milwaukee Deadbolt Co.
                </h3>
                <p className="text-xs text-emerald-300/80">Local, honest residential locksmiths</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-200">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-white block">Guaranteed flat rate upfront</strong>
                  <span className="text-sm text-slate-300">You know the exact cost before anyone drives over. Zero surprise fees.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-white block">We pick it open gently without damage</strong>
                  <span className="text-sm text-slate-300">Your lock, keys, and door frame stay completely intact and reusable.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-white block">Polite, respectful, and local</strong>
                  <span className="text-sm text-slate-300">We treat your home and your time with genuine care and patience.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
