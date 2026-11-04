import React from "react";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative selection:bg-blue-100 selection:text-[#1a3dd6]">
      {/* 1. STICKY DYNAMIC NAVBAR */}
      <Navbar cartCount={0} wishlistCount={0} />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl p-6 sm:p-12 border border-blue-100/60 shadow-xs text-center max-w-4xl mx-auto mt-4">
          <div className="inline-flex items-center gap-2 bg-[#1a3dd6] text-white text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            <span>✨</span> Next Step: Hero Carousel & Marquee
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            We Don't Just Print Products. <br className="hidden sm:inline" />
            <span className="text-[#1a3dd6]">We Print Happiness.</span>
          </h1>
         
        </div>
      </main>

      {/* Floating WhatsApp Action Button (Bottom-Right) */}
      <WhatsAppButton />
    </div>
  );
}
