import React from "react";
import { Lock, Phone, MapPin, Mail, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03060d] border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-black">
                <Lock className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <div className="font-display font-extrabold text-lg text-white">
                MILWAUKEE <span className="text-amber-400">DEADBOLT</span> CO.
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Milwaukee's dedicated residential deadbolt and home entryway specialists. Fast mobile dispatch, non-destructive lockpicking priority, and honest upfront flat pricing.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 max-w-md">
              <strong className="text-white block">Service Notice:</strong>
              We specialize exclusively in residential and commercial doors and deadbolts. We do not service cars or automotive lockouts at this time.
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Emergency Dispatch
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:4012560941" className="hover:text-white font-bold text-amber-400">
                  (401) 256-0941
                </a>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>2650 N Fratney St<br />Milwaukee, WI 53212</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>dispatch@milwaukeedeadbolt.com</span>
              </div>
            </div>
          </div>

          {/* Areas Covered */}
          <div className="space-y-3">
            <div className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Service Areas
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Riverwest &amp; Harambee</li>
              <li>East Side &amp; Historic Third Ward</li>
              <li>Bay View &amp; Walker's Point</li>
              <li>Wauwatosa &amp; West Allis</li>
              <li>Shorewood &amp; Whitefish Bay</li>
              <li>Glendale &amp; North Shore</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; 2026 Milwaukee Deadbolt Co. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Licensed, Bonded &amp; Insured Residential Locksmith Services</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
