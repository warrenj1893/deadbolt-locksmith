import React, { useState } from "react";
import { Send, Phone, CheckCircle2, ShieldAlert, Clock, MapPin, User, MessageSquare } from "lucide-react";

export const DispatchForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    lockIssue: "Emergency House Lockout (Deadbolt)",
    isEmergency: true,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="dispatch-form" className="py-20 bg-[#060a14] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Clock className="w-3.5 h-3.5" />
            <span>INSTANT WEB DISPATCH REQUEST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Request an On-Call Technician
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Prefer not to call or on low battery? Submit this priority ticket and an on-call locksmith will text/call your number within 90 seconds.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-blue-500/25 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-white">Dispatch Ticket Received!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Our on-duty Milwaukee technician is reviewing your location at <strong>{formData.address || "your address"}</strong> and will call/text <strong>{formData.phone}</strong> immediately.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-sm mx-auto text-xs text-slate-400">
                <span>For fastest response right now:</span>
                <a
                  href="tel:4012560941"
                  className="mt-2 block w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-colors"
                >
                  Call Dispatch: (401) 256-0941
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-400 hover:text-white underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Emergency Banner Toggle */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-sm text-white block">Urgency Status</strong>
                    <span className="text-xs text-slate-400">Is this an immediate lockout outside right now?</span>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isEmergency}
                    onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                  <span className="ml-2 text-xs font-mono font-bold text-amber-300 hidden sm:inline">
                    {formData.isEmergency ? "EMERGENCY NOW" : "STANDARD"}
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Warren"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Callback Phone (For Tech Arrival Text)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (414) 555-0192"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Street Address / Neighborhood */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Location / Address in Milwaukee
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2650 N Fratney St, Milwaukee"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Service Requested
                  </label>
                  <select
                    value={formData.lockIssue}
                    onChange={(e) => setFormData({ ...formData, lockIssue: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option>Emergency House Lockout (Deadbolt)</option>
                    <option>Jammed Deadbolt / Stuck Door</option>
                    <option>Broken Key Inside Deadbolt</option>
                    <option>Rekey Existing Deadbolts</option>
                    <option>Install High-Security Deadbolt</option>
                    <option>Install Smart / Keypad Deadbolt</option>
                  </select>
                </div>

              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Additional Details (Lock Brand, Apartment Unit, Door Type)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={2}
                    placeholder="e.g. Front door Schlage deadbolt, key is lost. Back door is also locked."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>By submitting, you confirm you are authorized to grant entry to the premises.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full amber-glow-btn py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-base text-black transition-all"
              >
                {loading ? (
                  <span>Transmitting to On-Call Tech...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 fill-black" />
                    <span>Send Priority Dispatch Request</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
