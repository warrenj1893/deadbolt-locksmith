import React from "react";
import { ShieldAlert, ShieldCheck, XCircle, CheckCircle2, Cpu, Wrench, Lock, AlertCircle } from "lucide-react";

export const TheDeadboltDifference: React.FC = () => {
  return (
    <section id="deadbolt-tech" className="py-20 bg-[#060a14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <ShieldCheck className="w-4 h-4" />
            <span>CERTIFIED NON-DESTRUCTIVE MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            The Deadbolt Specialist Difference
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            90% of generic locksmith dispatch services hire unqualified subcontractors who reach for a drill within 30 seconds. Here is why choosing dedicated residential specialists saves you money and preserves your door.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Shady Generic Locksmith */}
          <div className="p-6 sm:p-8 rounded-3xl bg-red-950/20 border border-red-500/30 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-red-200">The "$19 Bait-and-Switch" Roadside Locksmith</h3>
                <p className="text-xs text-red-300/70">Unregulated call centers &amp; drill-happy contractors</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Quote $19–$29 on the phone</strong>
                  <span className="text-xs text-slate-400">Then demand $250–$400 in cash once they arrive on scene.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Immediately drill out your deadbolt</strong>
                  <span className="text-xs text-slate-400">Destroys your lock cylinder, scratches your door, and voids your warranty.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Forces you to buy cheap replacement hardware</strong>
                  <span className="text-xs text-slate-400">Installs a $10 big-box deadbolt and charges you $120+ for it.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Jack of all trades, master of none</strong>
                  <span className="text-xs text-slate-400">Mainly cut cheap car keys and lack precision home lockpicking tools.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milwaukee Deadbolt Co. */}
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950/20 border-2 border-emerald-500/40 space-y-6 shadow-xl shadow-emerald-950/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-emerald-200">Milwaukee Deadbolt Co.</h3>
                <p className="text-xs text-emerald-300/70">Local, certified residential lock specialists</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Guaranteed flat rate upfront</strong>
                  <span className="text-xs text-slate-400">You know the exact cost before our van rolls. No hidden trip multipliers.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Non-destructive picking 95%+ of the time</strong>
                  <span className="text-xs text-slate-400">Using precision Lishi decoders, tubular picks, and bypass shims. Zero damage.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Preserves your existing keys and hardware</strong>
                  <span className="text-xs text-slate-400">Your door and deadbolt remain fully functional and undamaged.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Dedicated home &amp; entryway experts</strong>
                  <span className="text-xs text-slate-400">We specialize exclusively in homes, duplexes, and commercial storefronts.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars of Deadbolt Mastery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-white text-base">ANSI Grade 1 &amp; Grade 2 Experts</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              From commercial heavy-duty solid steel bolts to residential deadbolts with anti-drill ball bearings and mushroom pins, we understand the mechanical tolerances of every brand.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-white text-base">Smart &amp; Electronic Deadbolts</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Locked out of your Schlage Encode, August Wi-Fi, or Yale Assure? We carry electronic diagnostic overrides and physical keyway bypass systems to unlock smart entryways cleanly.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-white text-base">On-Site Rekeying &amp; Pin Swaps</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lost your house keys? Our mobile locksmith vans carry master pinning kits. We can re-pin your existing deadbolt cylinders right from our mobile bench in 15 minutes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
