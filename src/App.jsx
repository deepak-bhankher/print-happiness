import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative selection:bg-blue-100 selection:text-[#1a3dd6] flex flex-col justify-between">
      <div>
        {/* 1. STICKY NAVBAR */}
        <Navbar cartCount={0} wishlistCount={0} />

        {/* 2. 3-SECOND SMOOTH AUTO-SLIDER HERO SECTION (Pure Image on Mobile, Side-by-Side on Desktop) */}
        <HeroSlider />
      </div>

      {/* 3. SLEEK VERIFIED BUSINESS FOOTER (Matches Navbar Sections, Zero Green Text) */}
      <Footer />

      {/* 4. FLOATING WHATSAPP ACTION BUTTON */}
      <WhatsAppButton />
    </div>
  );
}
