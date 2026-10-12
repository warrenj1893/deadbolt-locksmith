import React from "react";
import { KeyRound, Wrench, Shield, Smartphone, AlertCircle, Building2, Lock, Sparkles, Check, Phone } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  features: string[];
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Lock className="w-6 h-6 text-amber-400" />,
    title: "Emergency Deadbolt Lockout",
    badge: "24/7 Rapid Dispatch",
    description: "Locked outside your home or apartment? We arrive in 15–25 minutes with specialized lockpicking and decoding equipment to get you inside without damaging your lock.",
    features: ["Non-destructive picking priority", "Single & double cylinder deadbolts", "Strict identity verification protocol", "Average 5-10 min opening time"],
  },
  {
    icon: <Wrench className="w-6 h-6 text-blue-400" />,
    title: "Jammed Bolt & Misalignment Fix",
    badge: "Historic MKE Homes",
    description: "Milwaukee's freeze-thaw cycles and historic wooden frames cause deadbolts to stick, bind, or seize inside the door strike. We realign and restore smooth operation.",
    features: ["Strike plate realignment", "Bolt clearance routing", "Lubrication & internal spring repair", "Heavy-duty security strike install"],
  },
  {
    icon: <KeyRound className="w-6 h-6 text-emerald-400" />,
    title: "Whole-Home Deadbolt Rekeying",
    badge: "Key Consolidation",
    description: "Moved into a new home or had a roommate leave? Keep your existing lock hardware while changing the internal tumbler pins so all old keys permanently stop working.",
    features: ["Master pinning on-site in van", "Make all doors match 1 single key", "Includes 2-4 fresh cut brass keys", "Saves 70% vs buying all new locks"],
  },
  {
    icon: <Shield className="w-6 h-6 text-amber-400" />,
    title: "High-Security Deadbolt Upgrades",
    badge: "Grade 1 Protection",
    description: "Upgrade vulnerable standard locks to drill-proof, pick-proof ANSI Grade 1 deadbolts like the Schlage B60N, Medeco Maxum, or Mul-T-Lock with hardened steel core bolts.",
    features: ["Anti-kick reinforced strike plates", "Hardened steel anti-saw roll pins", "Pick-resistant spool & mushroom pins", "Patented key duplication control"],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    title: "Smart Keypad & Biometric Deadbolts",
    badge: "Keyless Living",
    description: "Eliminate lost house keys forever. Professional installation, door borehole alignment, and pairing of Schlage Encode, Yale Assure, and August Smart Locks.",
    features: ["Precise door borehole alignment", "App integration & passcode setup", "Backup mechanical keyway testing", "Zero door binding guarantee"],
  },
  {
    icon: <Building2 className="w-6 h-6 text-emerald-400" />,
    title: "Landlord & Multi-Family Rekey",
    badge: "Duplexes & Property Mgmt",
    description: "Fast turnarounds for Milwaukee landlords and property managers during tenant transitions. Master key systems and code-compliant deadbolts.",
    features: ["Master key system design", "Bulk unit turnover discounts", "Commercial grade mortise & deadbolts", "Detailed billing invoices provided"],
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#070c18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RESIDENTIAL &amp; ENTRY SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Specialized Deadbolt Solutions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Because we don't split our focus on roadside car jobs, our mobile vans are fully outfitted specifically for residential entry doors, historic Milwaukee architecture, and modern smart hardware.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="glass-card-hover p-6 rounded-3xl flex flex-col justify-between border border-blue-500/15"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                    {s.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{s.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                {s.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-xl text-white">Need an immediate deadbolt technician?</h4>
            <p className="text-sm text-slate-300 mt-1">Our on-call team is ready to dispatch across Milwaukee right now.</p>
          </div>
          <a
            href="tel:4012560941"
            className="amber-glow-btn px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 text-sm text-black shrink-0"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Call (401) 256-0941</span>
          </a>
        </div>

      </div>
    </section>
  );
};
