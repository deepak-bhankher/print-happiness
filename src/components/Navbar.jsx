import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  ChevronDown,
  Coffee,
  Shirt,
  Package,
  Gift,
  Calendar,
  ShoppingBag as BagIcon,
  Info,
  Phone,
  Sparkles,
} from "lucide-react";

const SEARCH_SUGGESTIONS = [
  { name: "Custom Coffee Mugs", category: "Mugs", desc: "White, Magic, Inner Color Mugs", link: "#mugs" },
  { name: "Corporate T-Shirts", category: "Apparel", desc: "Collar Polo, Round Neck 120-200 GSM", link: "#apparel" },
  { name: "Stainless Steel Bottles", category: "Drinkware", desc: "Laser Engraved Sippers & Flasks", link: "#bottles" },
  { name: "Employee Welcome Kits", category: "Combos", desc: "Curated Corporate Joining Kits", link: "#welcome-kits" },
  { name: "Calendars", category: "Stationery", desc: "Desk & Wall Logo Calendars", link: "#calendars" },
  { name: "Custom Carry Bags", category: "Packaging", desc: "Non-Woven & Paper Brand Bags", link: "#carry-bags" },
];

export default function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sticky header scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut '/' to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal or drawer is open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isSearchOpen]);

  const filteredSuggestions = searchQuery.trim()
    ? SEARCH_SUGGESTIONS.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : SEARCH_SUGGESTIONS;

  return (
    <>
      {/* MAIN STICKY NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2 border-b border-slate-200/80"
            : "bg-white py-2.5 sm:py-3 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            
            {/* MOBILE ONLY: Left Hamburger + Mobile Search Button */}
            <div className="flex md:hidden items-center gap-0.5">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-800 hover:text-[#1a3dd6] hover:bg-slate-100 rounded-lg active:scale-95 transition-all"
                aria-label="Open Menu"
              >
                <Menu size={22} strokeWidth={2.2} />
              </button>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-800 hover:text-[#1a3dd6] hover:bg-slate-100 rounded-lg active:scale-95 transition-all"
                aria-label="Search"
              >
                <Search size={21} strokeWidth={2.2} />
              </button>
            </div>

            {/* BRAND LOGO AREA */}
            <a href="/" className="flex items-center gap-2.5 select-none py-1 group shrink-0">
              <img
                src="/p2h-icon.png"
                alt="P2H Logo"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="hidden md:flex flex-col leading-tight">
                <span className="text-base lg:text-lg font-black tracking-tight text-[#0f172a] uppercase group-hover:text-[#1a3dd6] transition-colors">
                  Print Happiness Hub
                </span>
                <span className="text-[9.5px] font-bold text-[#1a3dd6] tracking-wider uppercase">
                  No.1 Trusted Customization Unit
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 shrink-0">
              <a
                href="/"
                className="px-3 py-1.5 text-sm font-semibold text-[#1a3dd6] hover:bg-blue-50 rounded-lg transition-colors"
              >
                Home
              </a>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#1a3dd6] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                  <span>Categories</span>
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <a
                    href="#mugs"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Coffee size={17} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Custom Coffee Mugs</div>
                      <div className="text-[10px] text-slate-400">White, Magic, Inner Color</div>
                    </div>
                  </a>
                  <a
                    href="#apparel"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Shirt size={17} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Corporate T-Shirts</div>
                      <div className="text-[10px] text-slate-400">Screen, Digital, Embroidery</div>
                    </div>
                  </a>
                  <a
                    href="#bottles"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Package size={17} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Drinkware & Bottles</div>
                      <div className="text-[10px] text-slate-400">Stainless Steel Laser Engraved</div>
                    </div>
                  </a>
                  <a
                    href="#welcome-kits"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Gift size={17} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Employee Welcome Kits</div>
                      <div className="text-[10px] text-slate-400">Curated Corporate Combos</div>
                    </div>
                  </a>
                  <a
                    href="#calendars"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Calendar size={17} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Calendars</div>
                      <div className="text-[10px] text-slate-400">Wall & Table Top Formats</div>
                    </div>
                  </a>
                  <a
                    href="#carry-bags"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <BagIcon size={17} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Custom Carry Bags</div>
                      <div className="text-[10px] text-slate-400">Non-Woven & Kraft Paper</div>
                    </div>
                  </a>
                </div>
              </div>

              <a
                href="#about"
                className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#1a3dd6] hover:bg-slate-50 rounded-lg transition-colors"
              >
                About Us
              </a>

              <a
                href="#contact"
                className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#1a3dd6] hover:bg-slate-50 rounded-lg transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* RIGHT SIDE (Compact Search, Wishlist, Cart) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Compact Sleek Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center gap-2 bg-slate-100 hover:bg-slate-200/70 border border-slate-200/80 text-slate-500 px-3 py-1.5 rounded-full text-xs font-medium transition-all group w-36 lg:w-44 cursor-pointer"
                title="Search products (/)"
              >
                <Search size={13} className="text-slate-400 group-hover:text-[#1a3dd6] transition-colors shrink-0" />
                <span className="truncate text-slate-500 group-hover:text-slate-700 text-[11px]">Search...</span>
                <kbd className="hidden lg:inline-flex ml-auto items-center justify-center h-4 px-1 text-[9px] font-semibold text-slate-400 bg-white border border-slate-200 rounded">
                  /
                </kbd>
              </button>

              {/* Wishlist Heart */}
              <button
                className="relative p-2 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg active:scale-90 transition-all"
                title="Wishlist"
              >
                <Heart size={21} strokeWidth={2.2} />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Bag Icon with Counter */}
              <a
                href="#cart"
                className="relative p-2 text-slate-700 hover:text-[#1a3dd6] hover:bg-blue-50 rounded-lg active:scale-90 transition-all"
                title="Your Cart"
              >
                <ShoppingBag size={21} strokeWidth={2.2} />
                <span className="absolute top-0.5 right-0.5 bg-[#1a3dd6] text-white text-[10px] font-black h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </a>

            </div>

          </div>
        </div>
      </header>

      {/* ==================================================== */}
      {/* 2. ULTRA-SMOOTH MOBILE SIDEBAR DRAWER                */}
      {/* ==================================================== */}
      <div
        className={`fixed inset-0 z-50 flex md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible delay-300"
        }`}
      >
        {/* Backdrop Overlay with Smooth Fade */}
        <div
          className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Panel with Springy Smooth Slide-In & Slide-Out */}
        <div
          className={`relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/p2h-icon.png" alt="Logo" className="h-8 w-auto object-contain" />
              <div className="leading-tight">
                <div className="text-sm font-black text-slate-900 uppercase">Print Happiness Hub</div>
                <div className="text-[9px] font-bold text-[#1a3dd6]">No.1 Customization Unit</div>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-md hover:bg-slate-100 active:scale-95 transition-all"
            >
              <X size={19} />
            </button>
          </div>

          {/* Clean Category Links */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-2 pb-1">
              Products & Categories
            </div>

            <a
              href="#mugs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] active:scale-98 transition-all"
            >
              <div className="flex items-center gap-3">
                <Coffee size={17} className="text-[#1a3dd6]" />
                <span className="text-sm font-semibold">Custom Coffee Mugs</span>
              </div>
              <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
                Popular
              </span>
            </a>

            <a
              href="#apparel"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] active:scale-98 transition-all"
            >
              <Shirt size={17} className="text-[#1a3dd6]" />
              <span className="text-sm font-semibold">Corporate T-Shirts</span>
            </a>

            <a
              href="#bottles"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] active:scale-98 transition-all"
            >
              <Package size={17} className="text-[#1a3dd6]" />
              <span className="text-sm font-semibold">Drinkware & Bottles</span>
            </a>

            <a
              href="#welcome-kits"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] active:scale-98 transition-all"
            >
              <Gift size={17} className="text-[#1a3dd6]" />
              <span className="text-sm font-semibold">Welcome Kits & Combos</span>
            </a>

            <a
              href="#calendars"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] active:scale-98 transition-all"
            >
              <Calendar size={17} className="text-[#1a3dd6]" />
              <span className="text-sm font-semibold">2026-2027 Calendars</span>
            </a>

            <a
              href="#carry-bags"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] active:scale-98 transition-all"
            >
              <BagIcon size={17} className="text-[#1a3dd6]" />
              <span className="text-sm font-semibold">Custom Carry Bags</span>
            </a>

            <div className="pt-3 border-t border-slate-100 mt-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pb-1">
                Company
              </div>

              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 text-sm font-semibold active:scale-98 transition-all"
              >
                <Info size={17} className="text-slate-500" />
                <span>About Our Brand</span>
              </a>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 text-sm font-semibold active:scale-98 transition-all"
              >
                <Phone size={17} className="text-slate-500" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="p-3 border-t border-slate-100 bg-slate-50 space-y-2">
            <a
              href="https://wa.me/919541119612?text=Hello%20Print%20Happiness%20Hub!%0AI%20would%20like%20to%20inquire%20about%20custom%20printing%20orders."
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-3 rounded-lg text-xs transition-all active:scale-98 shadow-xs"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-4.52 4.07c-.18 0-.47.07-.72.34-.25.28-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.87.14.18 1.95 2.97 4.72 4.17.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.53-.32-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.23-.55-.46-.47-.63-.48z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <div className="text-center text-[10px] text-slate-400">
              Kalirawan, Haryana • Serving 100+ Brands
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================== */}
      {/* 3. BIGGER & SMARTER SEARCH MODAL WITH LIVE AUTOCOMPLETE   */}
      {/* ========================================================== */}
      <div
        className={`fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-3 sm:px-4 transition-all duration-200 ${
          isSearchOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible delay-200"
        }`}
      >
        <div
          className={`fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200 ease-out ${
            isSearchOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsSearchOpen(false)}
        />

        <div
          className={`relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden z-10 border border-slate-200 transition-all duration-200 ease-out ${
            isSearchOpen
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 -translate-y-3"
          }`}
        >
          {/* Compact Input Header */}
          <div className="p-3 sm:p-3.5 border-b border-slate-100 flex items-center gap-2.5 bg-slate-50/70">
            <Search size={18} className="text-[#1a3dd6] shrink-0" />
            <input
              type="text"
              autoFocus={isSearchOpen}
              placeholder="Search custom mugs, t-shirts, bottles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm sm:text-base font-semibold text-slate-900 placeholder-slate-400 outline-none bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-slate-400 hover:text-slate-600 px-2 py-0.5 bg-slate-200/60 rounded"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-200/60 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search Content / Results */}
          <div className="p-3 max-h-[320px] overflow-y-auto">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>{searchQuery ? "Matching Products" : "Popular Custom Products"}</span>
              <span className="text-[10px] text-blue-600 font-semibold flex items-center gap-1">
                <Sparkles size={11} /> 100+ Corporate Products
              </span>
            </div>

            <div className="space-y-1.5">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 text-slate-800 hover:text-[#1a3dd6] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-blue-100/70 text-[#1a3dd6] flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#1a3dd6] group-hover:text-white transition-colors">
                        {item.category[0]}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-[#1a3dd6]">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-[#1a3dd6] font-semibold flex items-center gap-1">
                      <span>View</span>
                      <span>→</span>
                    </span>
                  </a>
                ))
              ) : (
                <div className="text-center py-8 text-slate-400 text-sm">
                  No products matching "{searchQuery}". Try "mugs", "t-shirts", or "bottles".
                </div>
              )}
            </div>

            {/* Quick Pills */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-400 font-medium text-[11px]">Trending:</span>
              {["Coffee Mugs", "Collar T-Shirts", "Magic Mugs", "Steel Bottles", "Calendars", "Carry Bags"].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="bg-slate-100 hover:bg-blue-50 hover:text-[#1a3dd6] px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 transition-colors"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
