import React, { useState } from "react";
import { Phone, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

interface QuickOption {
  id: string;
  emoji: string;
  title: string;
  price: string;
  subtitle: string;
}

const OPTIONS: QuickOption[] = [
  {
    id: "locked_out",
    emoji: "🚪",
    title: "Locked Out Right Now",
    price: "$75 Flat",
    subtitle: "We arrive in 15–25 mins and gently unlock your house door.",
  },
  {
    id: "rekey",
    emoji: "🔑",
    title: "Change My Keys (Rekey)",
    price: "$65 Flat",
    subtitle: "Keep your existing locks, but make old keys stop working.",
  },
  {
    id: "broken",
    emoji: "🛠️",
    title: "Fix Jammed / Broken Lock",
    price: "$85 Flat",
    subtitle: "Key snapped inside or deadbolt stuck in the frame.",
  },
];

export const DispatchCalculator: React.FC = () => {
  const [selected, setSelected] = useState<string>("locked_out");
  const [timeChoice, setTimeChoice] = useState<string>("now");

  return (
    <section id="calculator" className="py-16 bg-[#070d1a] border-t border-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider">
            Simple 2-Step Appointment Booker
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Choose What You Need — Clear Flat Rates
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No complicated jargon. Just choose your service, pick a time, and a friendly local locksmith will take care of you.
          </p>
        </div>

        {/* 3 Giant Friendly Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`p-6 rounded-2xl text-left border-3 transition-all flex flex-col justify-between ${
                selected === opt.id
                  ? "bg-amber-500/20 border-amber-400 shadow-xl shadow-amber-500/15 scale-[1.02]"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-600"
              }`}
            >
              <div>
                <div className="text-4xl mb-3">{opt.emoji}</div>
                <h3 className="font-display font-extrabold text-xl text-white mb-1">
                  {opt.title}
                </h3>
                <div className="text-2xl font-black text-amber-400 font-display mb-2">
                  {opt.price}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {opt.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 w-full flex items-center justify-between text-xs font-bold">
                <span className={selected === opt.id ? "text-amber-400" : "text-slate-400"}>
                  {selected === opt.id ? "✓ Selected" : "Click to Choose"}
                </span>
                <span className="text-slate-400">Zero hidden fees</span>
              </div>
            </button>
          ))}
        </div>

        {/* Step 2: When do you want us? */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1325] border-2 border-slate-800 text-center space-y-6">
          <div className="font-display font-extrabold text-2xl text-white">
            When do you want a technician?
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setTimeChoice("now")}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-lg border-2 transition-all ${
                timeChoice === "now"
                  ? "bg-amber-500 border-amber-400 text-black shadow-lg"
                  : "bg-slate-900 border-slate-700 text-white"
              }`}
            >
              🚨 Right Now (15–25 Mins)
            </button>

            <button
              type="button"
              onClick={() => setTimeChoice("later")}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-lg border-2 transition-all ${
                timeChoice === "later"
                  ? "bg-amber-500 border-amber-400 text-black shadow-lg"
                  : "bg-slate-900 border-slate-700 text-white"
              }`}
            >
              📅 Later Today or Tomorrow
            </button>
          </div>

          {/* Big Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4012560941"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-2xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 transition-transform active:scale-95"
            >
              <Phone className="w-7 h-7 fill-black" />
              <span>Tap to Call (401) 256-0941</span>
            </a>

            <a
              href="#dispatch-form"
              className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-white font-bold text-lg flex items-center justify-center gap-2"
            >
              <span>Or Fill 30-Second Web Form</span>
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </a>
          </div>

          <div className="text-sm text-slate-400">
            * Our friendly local technician will confirm everything with you directly before doing any work.
          </div>

        </div>

      </div>
    </section>
  );
};
