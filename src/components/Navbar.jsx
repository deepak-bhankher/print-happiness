import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  Phone,
  MessageCircle,
  ChevronDown,
  Coffee,
  Shirt,
  Package,
  Gift,
  Info,
} from "lucide-react";

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0b1a48] text-white text-[11px] py-1.5 px-4 font-medium border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>Bulk Printing Slabs: Flat Discounts on 100+ Pieces</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-slate-300">Pan India Delivery</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-300 text-xs">
            <a
              href="tel:+919541119612"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={11} className="text-emerald-400" />
              <span>+91 9541119612</span>
            </a>
            <a
              href="https://wa.me/919541119612"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors font-semibold"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="text-emerald-400">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-4.52 4.07c-.18 0-.47.07-.72.34-.25.28-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.87.14.18 1.95 2.97 4.72 4.17.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.53-.32-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.23-.55-.46-.47-.63-.48z"/>
              </svg>
              <span>WhatsApp: +91 9541119612</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY NAVBAR (Ultra-Clean) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2 border-b border-slate-200/80"
            : "bg-white py-2.5 sm:py-3 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            
            {/* MOBILE ONLY: Left Hamburger + Search */}
            <div className="flex md:hidden items-center gap-0.5">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-800 hover:text-[#1a3dd6] hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={22} strokeWidth={2.2} />
              </button>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-800 hover:text-[#1a3dd6] hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search size={21} strokeWidth={2.2} />
              </button>
            </div>

            {/* BRAND LOGO AREA */}
            <a href="/" className="flex items-center gap-2.5 select-none py-1">
              <img
                src="/p2h-icon.png"
                alt="P2H Logo"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />

              <div className="hidden md:flex flex-col leading-tight">
                <span className="text-lg lg:text-xl font-black tracking-tight text-[#0f172a] uppercase">
                  Print Happiness Hub
                </span>
                <span className="text-[10px] font-bold text-[#1a3dd6] tracking-wider uppercase">
                  No.1 Trusted Customization Unit
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <a
                href="/"
                className="px-3.5 py-1.5 text-sm font-semibold text-[#1a3dd6] hover:bg-blue-50 rounded-lg transition-colors"
              >
                Home
              </a>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#1a3dd6] hover:bg-slate-50 rounded-lg transition-colors">
                  <span>Categories</span>
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href="#mugs"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Coffee size={18} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Custom Coffee Mugs</div>
                      <div className="text-[10px] text-slate-400">White, Magic, Inner Color</div>
                    </div>
                  </a>
                  <a
                    href="#apparel"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Shirt size={18} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Corporate T-Shirts</div>
                      <div className="text-[10px] text-slate-400">Screen, Digital, Embroidery</div>
                    </div>
                  </a>
                  <a
                    href="#bottles"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Package size={18} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Drinkware & Bottles</div>
                      <div className="text-[10px] text-slate-400">Engraved Stainless Steel</div>
                    </div>
                  </a>
                  <a
                    href="#welcome-kits"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#1a3dd6] transition-colors"
                  >
                    <Gift size={18} className="text-[#1a3dd6]" />
                    <div>
                      <div className="text-xs font-bold">Employee Welcome Kits</div>
                      <div className="text-[10px] text-slate-400">Curated Corporate Combos</div>
                    </div>
                  </a>
                </div>
              </div>

              <a
                href="#about"
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#1a3dd6] hover:bg-slate-50 rounded-lg transition-colors"
              >
                About Us
              </a>

              <a
                href="#contact"
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#1a3dd6] hover:bg-slate-50 rounded-lg transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* RIGHT SIDE ICONS (Search, Wishlist, Cart) */}
            <div className="flex items-center gap-1 sm:gap-2">
              
              {/* Desktop Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-600 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
              >
                <Search size={14} />
                <span className="hidden lg:inline">Search products...</span>
              </button>

              {/* Wishlist Heart */}
              <button
                className="relative p-2 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
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
                className="relative p-2 text-slate-700 hover:text-[#1a3dd6] hover:bg-blue-50 rounded-lg transition-colors"
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

      {/* 3. CLEAN MOBILE SIDEBAR DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col z-10">
            
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
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-md hover:bg-slate-100"
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
                className="flex items-center justify-between p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] transition-colors"
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
                className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] transition-colors"
              >
                <Shirt size={17} className="text-[#1a3dd6]" />
                <span className="text-sm font-semibold">Corporate T-Shirts</span>
              </a>

              <a
                href="#bottles"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] transition-colors"
              >
                <Package size={17} className="text-[#1a3dd6]" />
                <span className="text-sm font-semibold">Drinkware & Bottles</span>
              </a>

              <a
                href="#welcome-kits"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#1a3dd6] transition-colors"
              >
                <Gift size={17} className="text-[#1a3dd6]" />
                <span className="text-sm font-semibold">Welcome Kits & Combos</span>
              </a>

              <div className="pt-3 border-t border-slate-100 mt-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pb-1">
                  Company
                </div>

                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 text-sm font-semibold"
                >
                  <Info size={17} className="text-slate-500" />
                  <span>About Our Brand</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 text-sm font-semibold"
                >
                  <Phone size={17} className="text-slate-500" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-3 border-t border-slate-100 bg-slate-50 space-y-2">
              <a
                href="https://wa.me/919541119612"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-3 rounded-lg text-xs transition-colors shadow-xs"
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
      )}

      {/* 4. EXPANDABLE SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setIsSearchOpen(false)}
          />

          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl p-4 sm:p-5 z-10 border border-slate-100">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
              <Search size={20} className="text-[#1a3dd6]" />
              <input
                type="text"
                autoFocus
                placeholder="Search coffee mugs, t-shirts, bottles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-base font-semibold text-slate-900 placeholder-slate-400 outline-none bg-transparent"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Suggestions Pills */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-400 font-medium">Quick search:</span>
              <button
                onClick={() => setSearchQuery("Ceramic Coffee Mug")}
                className="bg-slate-100 hover:bg-blue-50 hover:text-[#1a3dd6] px-2.5 py-1 rounded-md font-semibold text-slate-600 transition-colors"
              >
                Ceramic Mug
              </button>
              <button
                onClick={() => setSearchQuery("Corporate T-Shirt")}
                className="bg-slate-100 hover:bg-blue-50 hover:text-[#1a3dd6] px-2.5 py-1 rounded-md font-semibold text-slate-600 transition-colors"
              >
                T-Shirts
              </button>
              <button
                onClick={() => setSearchQuery("Magic Mug")}
                className="bg-slate-100 hover:bg-blue-50 hover:text-[#1a3dd6] px-2.5 py-1 rounded-md font-semibold text-slate-600 transition-colors"
              >
                Magic Mug
              </button>
              <button
                onClick={() => setSearchQuery("Steel Bottle")}
                className="bg-slate-100 hover:bg-blue-50 hover:text-[#1a3dd6] px-2.5 py-1 rounded-md font-semibold text-slate-600 transition-colors"
              >
                Bottles
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
