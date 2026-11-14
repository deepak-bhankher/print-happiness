import React from "react";
import { Phone, Mail, MapPin, ChevronRight, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070f26] text-white border-t border-slate-800/80 mt-12 text-xs">
      {/* MAIN FOOTER CONTENT (4 Clean Columns Matching Navbar Sections) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/p2h-icon.png"
                alt="P2H Logo"
                className="h-9 w-auto object-contain bg-white rounded-lg p-0.5"
              />
              <div>
                <div className="text-base font-black tracking-tight text-white uppercase">
                  Print Happiness Hub
                </div>
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                  No.1 Trusted Customization Unit
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-[11px] leading-relaxed">
              Print Happiness Hub delivers premium quality customized printing solutions built on trust, precision, and complete customer satisfaction.
            </p>
          </div>

          {/* Column 2: Products & Categories (Exact match to Navbar) */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Categories
            </div>

            <ul className="space-y-2 text-slate-300 text-[11px]">
              <li>
                <a href="#mugs" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Custom Coffee Mugs</span>
                </a>
              </li>
              <li>
                <a href="#apparel" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Corporate T-Shirts & Polos</span>
                </a>
              </li>
              <li>
                <a href="#bottles" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Drinkware & Steel Bottles</span>
                </a>
              </li>
              <li>
                <a href="#welcome-kits" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Employee Welcome Kits & Combos</span>
                </a>
              </li>
              <li>
                <a href="#calendars" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>2026-2027 Custom Calendars</span>
                </a>
              </li>
              <li>
                <a href="#carry-bags" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Custom Printed Carry Bags</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (Exact match to Navbar items) */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </div>

            <ul className="space-y-2 text-slate-300 text-[11px]">
              <li>
                <a href="/" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Home Store</span>
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>About Our Brand</span>
                </a>
              </li>
              <li>
                <a href="#bulk-inquiry" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Bulk Quotes (50+ Pieces Slabs)</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Slab Pricing & Discounts</span>
                </a>
              </li>
              <li>
                <a href="#delivery" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Pan India Delivery (50+ Cities)</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <ChevronRight size={12} className="text-blue-400 shrink-0" />
                  <span>Contact & Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Works Facility */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Official Contact & Support
            </div>

            <div className="space-y-2.5 text-slate-300 text-[11px]">
              <div className="flex items-start gap-2">
                <Phone size={13} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Call / WhatsApp:</div>
                  <div className="text-slate-300 flex flex-wrap gap-x-2">
                    <a href="tel:+919541119612" className="hover:text-blue-400 transition-colors">9541119612</a>
                    <span>•</span>
                    <a href="tel:+918708863463" className="hover:text-blue-400 transition-colors">8708863463</a>
                    <span>•</span>
                    <a href="tel:+917419045272" className="hover:text-blue-400 transition-colors">7419045272</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail size={13} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email:</div>
                  <a
                    href="mailto:printhappinesshub@gmail.com"
                    className="hover:text-blue-400 transition-colors break-all"
                  >
                    printhappinesshub@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Works & Facility:</div>
                  <div className="text-slate-400 leading-relaxed text-[10.5px]">
                    Kalirawan, Mandi Adampur road Near Main Bus Stand, Kalirawan, Hisar, Haryana – 125052
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-slate-400">
                <User size={13} className="text-blue-400 shrink-0" />
                <div>
                  Owner: <strong className="text-slate-200">Tony Maral</strong>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT SUB-BAR */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © 2026 Print Happiness Hub. All rights reserved. • Owner: Tony Maral
          </div>
          <div className="text-slate-400">
            Serving 100+ Brands across 50+ Cities in India
          </div>
        </div>

      </div>
    </footer>
  );
}
