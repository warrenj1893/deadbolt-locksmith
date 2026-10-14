import React, { useState } from "react";
import {
  Phone,
  Lock,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Home,
  Car,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
  MapPin,
  Sparkles,
} from "lucide-react";

export function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [serviceType, setServiceType] = useState("Locked Out Right Now");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim() && streetAddress.trim()) {
      setIsSubmitted(true);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#060a14] text-slate-100 flex flex-col font-sans antialiased">
      {/* 1. Calm, High-Visibility Header (Not sticky, so it never covers content) */}
      <header className="w-full bg-[#070d1a] border-b border-slate-800 py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold shrink-0 shadow-md shadow-amber-500/20">
              <Lock className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                Milwaukee <span className="text-amber-400">Deadbolt</span> Co.
              </div>
              <div className="text-xs text-slate-400">
                Local Home &amp; Apartment Locksmith
              </div>
            </div>
          </div>

          <a
            href="tel:4012560941"
            className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-transform active:scale-95 shrink-0"
          >
            <Phone className="w-4 h-4 fill-black shrink-0" />
            <span>(401) 256-0941</span>
          </a>
        </div>
      </header>

      {/* 2. Reassuring Distress-Relief Banner */}
      <div className="bg-amber-500/15 border-b border-amber-500/30 py-2.5 px-4 text-center">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-amber-200">
          <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Locked out? Don't stress. We have a friendly local locksmith on duty in Milwaukee right now.
          </span>
        </div>
      </div>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* 3. Hero Section: Clear, Large, Senior-Friendly */}
        <section className="text-center space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Locked Out of Your Home? <br />
            <span className="text-amber-400">We'll Get You Back Inside.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Gentle, friendly lock opening for Milwaukee seniors, families, and neighbors. No drilling, no door damage, and no surprise fees.
          </p>

          {/* Simple Scope Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300">
            <Home className="w-4 h-4 text-amber-400 shrink-0" />
            <span>We open house and apartment deadbolts.</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">(We do not unlock cars yet)</span>
          </div>
        </section>

        {/* 4. The Two Fast-Help Options (Giant Call Button vs 2-Field Form) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card A: Direct Phone Call (Fastest) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0c152a] border-2 border-amber-400/60 shadow-xl flex flex-col justify-between text-center space-y-6">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <Phone className="w-7 h-7" />
              </div>
              <h2 className="font-display font-extrabold text-2xl text-white">
                Option 1: Call Us Directly
              </h2>
              <p className="text-sm text-slate-300">
                Fastest way to get help. Talk to a real local person right away. No automated phone trees.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="tel:4012560941"
                className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xl sm:text-2xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 transition-transform active:scale-95"
              >
                <Phone className="w-6 h-6 fill-black shrink-0" />
                <span>(401) 256-0941</span>
              </a>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 text-left">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>15–25 min</strong> average arrival across Milwaukee</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>$75 flat rate</strong> confirmed with you first</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Senior discounts &amp; patient, polite service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card B: Fast Online Request Form (No phone call needed) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0c152a] border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-center space-y-2 mb-6">
                <h2 className="font-display font-extrabold text-2xl text-white">
                  Option 2: Send Us Your Address
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  Prefer not to call? Just fill out these 2 boxes and a technician will head over:
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 bg-slate-900/80 rounded-2xl p-6 border border-emerald-500/30">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">Help is on the way!</h3>
                  <p className="text-sm text-slate-300">
                    We received your request for <strong>{streetAddress}</strong>. Our on-duty technician is calling you right now at <strong>{phoneNumber}</strong> to confirm.
                  </p>
                  <a
                    href="tel:4012560941"
                    className="block w-full py-3 rounded-xl bg-amber-500 text-black font-bold text-sm mt-4"
                  >
                    Need to call us now? (401) 256-0941
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-slate-400 underline block mx-auto pt-2"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  {/* Service Choice */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      What is happening?
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-3 px-3.5 text-sm sm:text-base text-white focus:outline-none"
                    >
                      <option>Locked Out Right Now ($75 flat)</option>
                      <option>Key Broken / Jammed Lock ($85 flat)</option>
                      <option>Change My Keys / Rekey ($65 flat)</option>
                      <option>Install New Deadbolt ($95 flat)</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Your Phone Number:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (414) 555-0123"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-3 px-3.5 text-base sm:text-lg text-white font-mono focus:outline-none placeholder:text-slate-500"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Where are you in Milwaukee?
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2650 N Fratney St or East Side"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-xl py-3 px-3.5 text-sm sm:text-base text-white focus:outline-none placeholder:text-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-base sm:text-lg shadow-lg transition-transform active:scale-95"
                  >
                    Send Locksmith To Me
                  </button>
                </form>
              )}
            </div>

            <div className="text-[11px] text-slate-400 text-center mt-3">
              * A technician will call or text to confirm before arriving.
            </div>
          </div>

        </section>

        {/* 5. Clear, Transparent Pricing (Only 3 Cards) */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Clear, Honest Flat Rates
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              No surprise bills or fake $19 call-center scams. What we quote is what you pay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c152a] border border-slate-800 text-center space-y-3">
              <div className="text-3xl">🚪</div>
              <h3 className="font-display font-bold text-lg text-white">House Lockout</h3>
              <div className="text-3xl font-extrabold text-amber-400 font-display">$75 <span className="text-xs text-slate-400 font-normal">flat</span></div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We gently pick your front or back door open without damaging your lock.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c152a] border border-slate-800 text-center space-y-3">
              <div className="text-3xl">🔑</div>
              <h3 className="font-display font-bold text-lg text-white">Change Keys (Rekey)</h3>
              <div className="text-3xl font-extrabold text-amber-400 font-display">$65 <span className="text-xs text-slate-400 font-normal">flat</span></div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Keep your existing locks, but make old keys permanently stop working.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0c152a] border border-slate-800 text-center space-y-3">
              <div className="text-3xl">🛠️</div>
              <h3 className="font-display font-bold text-lg text-white">Jammed / Broken Key</h3>
              <div className="text-3xl font-extrabold text-amber-400 font-display">$85 <span className="text-xs text-slate-400 font-normal">flat</span></div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extract snapped keys or fix a deadbolt that is stuck inside the door frame.
              </p>
            </div>

          </div>
        </section>

        {/* 6. Why You Can Trust Us (3 Reassuring Promises) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#0c152a] border border-slate-800 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
              Why Milwaukee Neighbors Call Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We treat your home and your safety with genuine care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-300">
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto sm:mx-0 font-bold">
                ✓
              </div>
              <strong className="text-white block text-base">We Pick, We Don't Drill</strong>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We use gentle lock-picking tools so your door, frame, and deadbolt stay completely reusable.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto sm:mx-0 font-bold">
                ✓
              </div>
              <strong className="text-white block text-base">Upfront Flat Prices</strong>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                You know the exact cost before our van rolls. No unexpected charges or pushy sales tactics.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto sm:mx-0 font-bold">
                ✓
              </div>
              <strong className="text-white block text-base">Friendly &amp; Local</strong>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Based right here in Milwaukee. We are polite, patient, and treat every neighbor like family.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Neighborhoods Served */}
        <section className="text-center space-y-4 pt-2">
          <h2 className="font-display font-bold text-xl text-white">
            Areas We Serve in Milwaukee (15–25 Min Arrival)
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Riverwest</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">East Side &amp; Brady St</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Bay View</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Downtown &amp; Third Ward</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Wauwatosa</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Shorewood &amp; Whitefish Bay</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">West Allis &amp; Greenfield</span>
          </div>
        </section>

        {/* 8. Simple Accordion FAQ (Only 3 essential questions) */}
        <section className="space-y-4 pt-2">
          <h2 className="font-display font-bold text-xl text-white text-center">
            Common Questions
          </h2>

          <div className="space-y-2 max-w-2xl mx-auto">
            
            <div className="rounded-xl bg-[#0c152a] border border-slate-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full p-4 text-left font-bold text-white flex items-center justify-between text-sm sm:text-base hover:text-amber-400"
              >
                <span>Will you break or drill my lock?</span>
                <span className="text-slate-400">{openFaq === 0 ? "▲" : "▼"}</span>
              </button>
              {openFaq === 0 && (
                <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  No! We pick your lock gently using professional tools. Over 95% of locks are opened with zero damage to the lock or door.
                </div>
              )}
            </div>

            <div className="rounded-xl bg-[#0c152a] border border-slate-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full p-4 text-left font-bold text-white flex items-center justify-between text-sm sm:text-base hover:text-amber-400"
              >
                <span>Do you unlock cars?</span>
                <span className="text-slate-400">{openFaq === 1 ? "▲" : "▼"}</span>
              </button>
              {openFaq === 1 && (
                <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  We currently do not service cars or automotive locks. We focus 100% on house doors and apartment deadbolts so we can reach homeowners faster.
                </div>
              )}
            </div>

            <div className="rounded-xl bg-[#0c152a] border border-slate-800 overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full p-4 text-left font-bold text-white flex items-center justify-between text-sm sm:text-base hover:text-amber-400"
              >
                <span>What do I need to show when you arrive?</span>
                <span className="text-slate-400">{openFaq === 2 ? "▲" : "▼"}</span>
              </button>
              {openFaq === 2 && (
                <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  For your safety and protection, we ask for proof that you live there (such as a driver's license with matching address, a lease, or mail). If your ID is locked inside, we will accompany you in to verify it.
                </div>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* 9. Simple, Clean Footer */}
      <footer className="bg-[#03060d] border-t border-slate-800 py-8 px-4 text-center text-xs text-slate-400 space-y-2">
        <div className="font-display font-bold text-white text-sm">
          Milwaukee Deadbolt Co.
        </div>
        <div>
          2650 N Fratney St, Milwaukee, WI 53212 • Dispatch:{" "}
          <a href="tel:4012560941" className="text-amber-400 font-bold underline">
            (401) 256-0941
          </a>
        </div>
        <div className="text-slate-500 pt-1">
          &copy; 2026 Milwaukee Deadbolt Co. • Licensed &amp; Insured Residential Locksmith Services
        </div>
      </footer>
    </div>
  );
}

export default App;
