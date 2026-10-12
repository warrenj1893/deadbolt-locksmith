import React, { useState } from "react";
import { Phone, Clock, ShieldCheck, Check, ArrowRight, Calendar, AlertCircle, HeartHandshake } from "lucide-react";

export const Hero: React.FC = () => {
  const [needType, setNeedType] = useState<"emergency" | "appointment">("emergency");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Giant Senior-Friendly Emergency Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-black shadow-xl shadow-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-black text-amber-400 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                LOCKED OUT RIGHT NOW? TALK TO A REAL PERSON:
              </div>
              <div className="text-sm font-semibold opacity-90">
                No automated phone trees • 15–25 Min Average Arrival across Milwaukee
              </div>
            </div>
          </div>
          <a
            href="tel:4012560941"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-black hover:bg-slate-900 text-white font-extrabold text-xl tracking-wide shadow-lg shrink-0 transition-transform active:scale-95"
          >
            (401) 256-0941
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clear, Reassuring, Large Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border-2 border-amber-400 text-sm font-bold text-amber-300">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Friendly, Honest Local Milwaukee Service</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15]">
              Locked Out of Your Home? <br />
              <span className="text-amber-400 underline decoration-amber-500/50">
                We'll Get You Back In
              </span> Fast &amp; Gently.
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-medium">
              Don't stress. We are your local neighborhood lock specialists. We unlock front doors and deadbolts without breaking your lock or ruining your door.
            </p>

            {/* 3 Plain-English Guarantees */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div className="text-base text-slate-100 font-semibold">
                  <strong>We Tell You The Exact Flat Price First:</strong> No surprises or fake $19 quotes that turn into $300.
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div className="text-base text-slate-100 font-semibold">
                  <strong>We Gentle-Pick Your Lock:</strong> We don't drill holes in your door unless it's broken.
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div className="text-base text-slate-100 font-semibold">
                  <strong>Quick 15–25 Minute Arrival:</strong> Technicians on duty right now in Milwaukee.
                </div>
              </div>
            </div>

            {/* Big Phone Button */}
            <div className="pt-2">
              <a
                href="tel:4012560941"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-2xl shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-7 h-7 fill-black" />
                <span>Call (401) 256-0941</span>
              </a>
              <div className="text-xs text-slate-400 mt-2 font-medium">
                Tap to call instantly • Senior discounts available • Friendly dispatch
              </div>
            </div>

          </div>

          {/* Right Column: Ultra-Easy 60-Second Dispatch / Booking Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1325] border-2 border-amber-400/50 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <div className="font-display font-extrabold text-2xl text-white">
                    Fast Appointment / Dispatch
                  </div>
                  <div className="text-xs text-slate-400">
                    Takes 30 seconds • A locksmith will call or head over
                  </div>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">We Got Your Request!</h3>
                  <p className="text-base text-slate-200">
                    A technician is calling you right now at <strong>{phone}</strong> to confirm your address and head over.
                  </p>
                  <a
                    href="tel:4012560941"
                    className="block w-full py-4 rounded-xl bg-amber-500 text-black font-extrabold text-lg mt-4"
                  >
                    Need Faster? Tap to Call: (401) 256-0941
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 underline mt-2 block mx-auto"
                  >
                    Start over
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Step 1: Big toggle */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      1. What do you need?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setNeedType("emergency")}
                        className={`p-3.5 rounded-xl font-bold text-sm text-center border-2 transition-all ${
                          needType === "emergency"
                            ? "bg-amber-500 border-amber-400 text-black shadow-md shadow-amber-500/20"
                            : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        🚨 Locked Out NOW
                      </button>
                      <button
                        type="button"
                        onClick={() => setNeedType("appointment")}
                        className={`p-3.5 rounded-xl font-bold text-sm text-center border-2 transition-all ${
                          needType === "appointment"
                            ? "bg-amber-500 border-amber-400 text-black shadow-md shadow-amber-500/20"
                            : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        📅 Book for Later
                      </button>
                    </div>
                  </div>

                  {/* Step 2: Phone */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      2. Your Phone Number:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(414) 555-0123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border-2 border-slate-700 focus:border-amber-400 rounded-xl py-3.5 px-4 text-lg text-white font-mono focus:outline-none placeholder:text-slate-500"
                    />
                  </div>

                  {/* Step 3: Address */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      3. Where are you in Milwaukee?
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2650 N Fratney St or Bay View"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-slate-900 border-2 border-slate-700 focus:border-amber-400 rounded-xl py-3.5 px-4 text-base text-white focus:outline-none placeholder:text-slate-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xl shadow-lg transition-transform active:scale-95"
                  >
                    {needType === "emergency" ? "Send Locksmith to Me Now" : "Confirm My Appointment"}
                  </button>

                  <div className="text-center">
                    <span className="text-xs text-slate-400">
                      Prefer speaking with a human? Just call <a href="tel:4012560941" className="text-amber-400 font-bold underline">(401) 256-0941</a>
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
