import React from "react";
import { Phone, Shield, Clock, CheckCircle2, Key, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-amber-400 font-bold uppercase tracking-wider">MILWAUKEE EMERGENCY DISPATCH</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Residential Deadbolt Pros</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Locked Out of Your House? <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                We Open Deadbolts Fast
              </span> — Without Destroying Your Door.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Don't let shady roadside scammers drill out your expensive deadbolt and slap you with a surprise $350 bill. We are <strong>certified residential lock specialists</strong> who use precision, non-destructive bypass tools first. We get you back inside quickly, cleanly, and safely.
            </p>

            {/* Trust Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Non-destructive picking</strong> 95%+ of the time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>15–25 min</strong> arrival across Metro MKE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Upfront flat pricing</strong> before technician rolls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Single, double &amp; smart deadbolts</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:4012560941"
                className="amber-glow-btn px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-lg"
              >
                <Phone className="w-5 h-5 fill-black" />
                <span>Call (401) 256-0941 Now</span>
              </a>

              <a
                href="#calculator"
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-blue-500/30 text-white font-semibold flex items-center justify-center gap-2 text-sm transition-all"
              >
                <span>Calculate Price &amp; Arrival</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2 pt-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Note: We focus 100% on home &amp; building locks (cars &amp; auto coming in phase 2).</span>
            </div>

          </div>

          {/* Right Column: Interactive Live Dispatch & Trust Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-blue-500/25 shadow-2xl shadow-black/80">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="font-mono text-xs uppercase font-bold text-emerald-400 tracking-wider">
                    DISPATCH ACTIVE NOW
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400">Milwaukee County</span>
              </div>

              {/* Status Metric Blocks */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">Current Response</div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 text-amber-400">
                    18 MINS
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Average van dispatch time</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">Non-Damage Rate</div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 text-emerald-400">
                    96.4%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Locks preserved &amp; reusable</div>
                </div>
              </div>

              {/* Verified Deadbolt Hardware Supported */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Deadbolt Hardware Handled:</span>
                  <span className="text-amber-400">All ANSI Grades</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium text-slate-300">
                  <span className="py-2 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Schlage</span>
                  <span className="py-2 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Kwikset</span>
                  <span className="py-2 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Yale</span>
                  <span className="py-2 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Medeco</span>
                  <span className="py-2 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Baldwin</span>
                  <span className="py-2 px-2.5 rounded-lg bg-slate-950 border border-slate-800">Smart Deadbolts</span>
                </div>
              </div>

              {/* Safety Requirement */}
              <div className="mt-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Security Protocol:</strong> For your protection, valid photo ID or proof of residence (lease/mail/utility) is verified prior to lock bypass.
                </span>
              </div>

              {/* Bottom Quick Call */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Ready to unlock?</div>
                  <div className="text-sm font-bold text-white">Call Direct Dispatch</div>
                </div>
                <a
                  href="tel:4012560941"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wide transition-colors"
                >
                  (401) 256-0941
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
