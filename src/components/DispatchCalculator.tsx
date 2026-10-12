import React, { useState } from "react";
import { Calculator, Clock, DollarSign, Shield, Check, Phone, ArrowRight, Sparkles } from "lucide-react";

interface Scenario {
  id: string;
  label: string;
  baseFee: number;
  desc: string;
}

interface LockType {
  id: string;
  name: string;
  addedFee: number;
  pickEase: string;
}

interface Area {
  id: string;
  name: string;
  estMinutes: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "lockout",
    label: "Emergency Home Lockout",
    baseFee: 75,
    desc: "Locked outside your house or apartment. Non-destructive picking priority.",
  },
  {
    id: "jammed",
    label: "Jammed Deadbolt / Broken Key",
    baseFee: 85,
    desc: "Key broke inside cylinder or bolt mechanism stuck inside the strike plate.",
  },
  {
    id: "rekey",
    label: "Deadbolt Rekeying (Change Keys)",
    baseFee: 65,
    desc: "Repin existing deadbolts so old keys no longer work. Great for new moves.",
  },
  {
    id: "install",
    label: "New Deadbolt / Smart Lock Install",
    baseFee: 95,
    desc: "Install high-security deadbolt or electronic keypad (Schlage, Yale, August).",
  },
];

const LOCK_TYPES: LockType[] = [
  { id: "std", name: "Standard Deadbolt (Kwikset / Defiant / Schlage)", addedFee: 0, pickEase: "98% Non-Destructive" },
  { id: "highsec", name: "High-Security (Medeco / Mul-T-Lock / Primus)", addedFee: 30, pickEase: "Specialized Pick / Bypass" },
  { id: "smart", name: "Keypad / Electronic Smart Deadbolt", addedFee: 20, pickEase: "Bypass & Decoding" },
  { id: "double", name: "Double-Cylinder (Key required inside & out)", addedFee: 15, pickEase: "95% Non-Destructive" },
];

const AREAS: Area[] = [
  { id: "riverwest", name: "Riverwest / Harambee", estMinutes: "10–15 mins" },
  { id: "eastside", name: "East Side / Brady / Downer", estMinutes: "12–18 mins" },
  { id: "downtown", name: "Downtown / Historic Third Ward", estMinutes: "12–18 mins" },
  { id: "bayview", name: "Bay View / Walker's Point", estMinutes: "15–22 mins" },
  { id: "tosa", name: "Wauwatosa / Washington Heights", estMinutes: "18–25 mins" },
  { id: "shorewood", name: "Shorewood / Whitefish Bay", estMinutes: "15–20 mins" },
  { id: "westallis", name: "West Allis / Greenfield", estMinutes: "20–28 mins" },
];

export const DispatchCalculator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<string>("lockout");
  const [selectedLock, setSelectedLock] = useState<string>("std");
  const [selectedArea, setSelectedArea] = useState<string>("riverwest");

  const scenario = SCENARIOS.find((s) => s.id === selectedScenario) || SCENARIOS[0];
  const lock = LOCK_TYPES.find((l) => l.id === selectedLock) || LOCK_TYPES[0];
  const area = AREAS.find((a) => a.id === selectedArea) || AREAS[0];

  const totalPrice = scenario.baseFee + lock.addedFee;

  return (
    <section id="calculator" className="py-20 bg-[#070d1a] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING GUARANTEE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Instant Estimate &amp; Response Window
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No bait-and-switch fees. Calculate your upfront cost and dispatch ETA based on your exact deadbolt situation and Milwaukee neighborhood.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (8 cols) */}
          <div className="lg:col-span-7 space-y-8 glass-card p-6 sm:p-8 rounded-3xl border border-blue-500/20">
            
            {/* 1. Situation */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Step 1: Select Your Situation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCENARIOS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedScenario(s.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      selectedScenario === s.id
                        ? "bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10"
                        : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold text-sm text-white flex items-center justify-between">
                      <span>{s.label}</span>
                      {selectedScenario === s.id && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 line-clamp-2">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Deadbolt Type */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Step 2: Select Deadbolt Hardware Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LOCK_TYPES.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setSelectedLock(l.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      selectedLock === l.id
                        ? "bg-blue-500/15 border-blue-400 text-white shadow-lg shadow-blue-500/10"
                        : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{l.name}</div>
                    <div className="text-[11px] text-blue-300 mt-1 font-mono">{l.pickEase}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Location */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Step 3: Select Your Location (Greater Milwaukee)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {AREAS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSelectedArea(a.id)}
                    className={`py-2.5 px-3 rounded-xl text-center text-xs border font-medium transition-all ${
                      selectedArea === a.id
                        ? "bg-slate-800 border-amber-400 text-amber-300 font-bold"
                        : "bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {a.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Estimate Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-[#0f172a] to-[#0b1222] p-6 sm:p-8 rounded-3xl border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="font-mono text-xs uppercase text-amber-400 font-bold tracking-wider">
                  UPFRONT QUOTE SUMMARY
                </span>
                <span className="text-xs text-slate-400 font-mono">Flat Rate</span>
              </div>

              {/* Price Display */}
              <div className="my-6">
                <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">
                  Estimated Total Investment:
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-5xl font-extrabold font-display text-white text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                    ${totalPrice}
                  </span>
                  <span className="text-sm text-slate-400">flat rate guarantee</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-2 flex items-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Includes trip charge, assessment, and non-destructive bypass.</span>
                </div>
              </div>

              {/* ETA Display */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Destination:</span>
                  <span className="font-semibold text-white">{area.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Estimated Arrival:</span>
                  <span className="font-bold text-amber-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {area.estMinutes}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Hardware:</span>
                  <span className="text-slate-300">{lock.name.split(" ")[0]} Deadbolt</span>
                </div>
              </div>

              {/* Dispatch Action */}
              <div className="space-y-3">
                <a
                  href="tel:4012560941"
                  className="w-full amber-glow-btn py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-base text-black"
                >
                  <Phone className="w-5 h-5 fill-black" />
                  <span>Dispatch Van: (401) 256-0941</span>
                </a>

                <a
                  href="#dispatch-form"
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Or Request via Instant Web Form</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>

              <div className="mt-5 text-[11px] text-slate-500 text-center">
                * Zero hidden fees. Rate confirmed verbally with technician before any work begins.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
