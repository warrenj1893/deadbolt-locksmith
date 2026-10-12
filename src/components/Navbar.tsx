import React, { useState } from "react";
import { Lock, Phone, Menu, X, Shield, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#060a14]/90 backdrop-blur-md border-b border-blue-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Lock className="w-6 h-6 text-black" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                MILWAUKEE <span className="text-amber-400">DEADBOLT</span> CO.
              </div>
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                Residential &amp; Commercial Lock Specialists
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#deadbolt-tech" className="hover:text-amber-400 transition-colors">Deadbolt Tech</a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors">Instant Estimate</a>
            <a href="#coverage" className="hover:text-amber-400 transition-colors">Response Areas</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
          </div>

          {/* Direct Emergency Dispatch Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:4012560941"
              className="amber-glow-btn px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>(401) 256-0941</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090f1d] px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              Services &amp; Lockouts
            </a>
            <a
              href="#deadbolt-tech"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              Deadbolt Technology &amp; Picking
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              Arrival &amp; Price Calculator
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              Service Areas
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 font-medium"
            >
              FAQ
            </a>
          </div>
          <div className="pt-2 border-t border-slate-800">
            <a
              href="tel:4012560941"
              className="w-full amber-glow-btn py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-base"
            >
              <Phone className="w-5 h-5 fill-black" />
              <span>Call Dispatch: (401) 256-0941</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
