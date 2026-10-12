import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Will you have to drill or damage my deadbolt?",
    a: "No! Over 95% of the residential deadbolts we service are opened using non-destructive single-pin picking, lishi decoders, or precision bypass tools. Your lock hardware and door frame remain completely intact and undamaged. Drilling is only ever considered as an extreme last resort for malfunctioning high-security vaults or damaged lock bodies, and only with your explicit advance permission.",
  },
  {
    q: "Do you unlock cars or automotive locks?",
    a: "We currently do NOT service automotive lockouts. We are dedicated residential and commercial entryway specialists. By focusing exclusively on homes, apartments, duplexes, and storefronts, our mobile vans carry the complete specialized inventory needed for residential architecture and maintain the fastest home response times in Milwaukee.",
  },
  {
    q: "What proof do I need to show to get inside?",
    a: "For the safety and legal security of everyone involved, our technicians require proof of occupancy or residence before completing an opening. This can be a state photo ID with the matching address, a current lease agreement, an active utility bill, or landlord/management confirmation. If your ID is locked inside the apartment, we will accompany you inside immediately after picking the lock to inspect it.",
  },
  {
    q: "How much does an emergency deadbolt lockout cost?",
    a: "Our lockout service starts at a flat $75 service rate for standard deadbolts. Unlike shady $19 call-center scams that balloon to $350+ once they arrive, we provide honest, transparent flat rates upfront before rolling our van. The price we confirm on the phone is the price you pay.",
  },
  {
    q: "Can you remove a broken key snapped inside my deadbolt?",
    a: "Yes! Snapped keys are very common in Wisconsin winter and spring when locks seize. Our technicians carry specialized spiral and hook key extractors to remove the broken fragment without drilling, then cut a fresh replacement key or decode the cylinder on-site.",
  },
  {
    q: "Can you rekey all my deadbolts so one single key opens everything?",
    a: "Absolutely. If your front door, back door, and side entrance currently use different keys (or you recently purchased a home), we can re-pin all compatible deadbolt cylinders (e.g. all Schlage or all Kwikset) to a single master key right from our mobile bench.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#070c18] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about our residential deadbolt lockout response and lock services.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-amber-400 font-display font-bold text-base sm:text-lg transition-colors"
              >
                <span>{item.q}</span>
                <span className="shrink-0 text-slate-400">
                  {openIdx === idx ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-5 sm:px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
