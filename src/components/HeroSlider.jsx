import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const REAL_SLIDES = [
  {
    id: 1,
    title: "Premium White Coffee Mugs",
    subtitle: "325ml Sublimation Photographic Printing • Zero Defect Piece Box Packing",
    badge: "Best Seller • 100+ Brands Trust",
    price: "Slab Rates from ₹55 / piece",
    image: "/banners/slide_white_mugs.jpg",
    actionLink: "https://wa.me/919541119612?text=Hello%20Print%20Happiness%20Hub!%0AI%20would%20like%20to%20inquire%20about%20White%20Coffee%20Mugs.",
    buttonText: "Order Mugs",
  },
  {
    id: 2,
    title: "Inner & Handle Color Mugs",
    subtitle: "4-5 Vibrant Color Choices • Permanent Glossy Photo Finish",
    badge: "Trending Corporate Gift",
    price: "Bulk Discounts on 50+ Pieces",
    image: "/banners/slide_inner_mugs.jpg",
    actionLink: "https://wa.me/919541119612?text=Hello%20Print%20Happiness%20Hub!%0AI%20would%20like%20to%20inquire%20about%20Color%20Mugs.",
    buttonText: "View Colors",
  },
  {
    id: 3,
    title: "Custom Printed Collar T-Shirts",
    subtitle: "120, 160 & 200+ GSM • Perfect for Corporate Branding, Marathons & Events",
    badge: "Screen & Digital Apparel",
    price: "High-density long lasting print",
    image: "/banners/slide_tshirts.jpg",
    actionLink: "https://wa.me/919541119612?text=Hello%20Print%20Happiness%20Hub!%0AI%20would%20like%20to%20inquire%20about%20Corporate%20T-Shirts.",
    buttonText: "Explore T-Shirts",
  },
  {
    id: 4,
    title: "2026-2027 Custom Calendars",
    subtitle: "Premium Wall & Desk Calendars with Your Company Logo & Dates",
    badge: "New Season Corporate Gifting",
    price: "High Definition Multicolor Print",
    image: "/banners/slide_calendars.jpg",
    actionLink: "https://wa.me/919541119612?text=Hello%20Print%20Happiness%20Hub!%0AI%20would%20like%20to%20inquire%20about%20Custom%20Calendars.",
    buttonText: "Order Calendars",
  },
  {
    id: 5,
    title: "Custom Printed Carry Bags",
    subtitle: "Eco-Friendly Non-Woven & Paper Carry Bags for Stores, Exhibitions & Gifts",
    badge: "Retail & Event Packaging",
    price: "Heavy Duty Durable Quality",
    image: "/banners/slide_carry_bags.jpg",
    actionLink: "https://wa.me/919541119612?text=Hello%20Print%20Happiness%20Hub!%0AI%20would%20like%20to%20inquire%20about%20Custom%20Carry%20Bags.",
    buttonText: "View Carry Bags",
  },
];

// Extended list for TRUE infinite loop: [CloneLast, Slide1, Slide2, Slide3, Slide4, Slide5, CloneFirst]
const EXTENDED_SLIDES = [
  { ...REAL_SLIDES[REAL_SLIDES.length - 1], uniqueKey: "clone-last" },
  ...REAL_SLIDES.map((s) => ({ ...s, uniqueKey: `real-${s.id}` })),
  { ...REAL_SLIDES[0], uniqueKey: "clone-first" },
];

export default function HeroSlider() {
  // Start at index 1 (which corresponds to Slide 1)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const isTransitioningRef = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Next slide (seamless forward flow)
  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Previous slide
  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Handle seamless infinite loop jump on transition end
  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;

    // If we just slid forward past the last slide to the clone of the first slide
    if (currentIndex === EXTENDED_SLIDES.length - 1) {
      setWithTransition(false);
      setCurrentIndex(1); // Invisible instant jump back to real first slide
    }
    // If we just slid backward past the first slide to the clone of the last slide
    else if (currentIndex === 0) {
      setWithTransition(false);
      setCurrentIndex(REAL_SLIDES.length); // Invisible instant jump to real last slide
    }
  };

  // When transition is disabled for invisible loop jump, re-enable it on next render
  useEffect(() => {
    if (!withTransition) {
      const timer = setTimeout(() => {
        setWithTransition(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [withTransition]);

  // Auto-slide every 3 seconds (smooth right-to-left continuous infinite flow)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch Swipe for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Calculate active indicator dot index (0 to 4)
  const activeDotIndex =
    currentIndex === 0
      ? REAL_SLIDES.length - 1
      : currentIndex === EXTENDED_SLIDES.length - 1
      ? 0
      : currentIndex - 1;

  const goToDot = (index) => {
    if (isTransitioningRef.current) return;
    setWithTransition(true);
    setCurrentIndex(index + 1);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white md:bg-slate-50 md:py-5">
      {/* Outer Container: Mobile has 0 margin/padding, Desktop has max-w-7xl with rounded card */}
      <div
        className="w-full md:max-w-7xl md:mx-auto px-0 md:px-4 lg:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full overflow-hidden bg-white md:rounded-3xl md:shadow-xl md:border md:border-slate-200/80 md:bg-gradient-to-br md:from-[#071338] md:via-[#0d2260] md:to-[#071338]">
          
          {/* Infinite Track with smooth continuous transition */}
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: withTransition
                ? "transform 650ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {EXTENDED_SLIDES.map((slide, index) => (
              <div
                key={slide.uniqueKey}
                className="w-full shrink-0 relative overflow-hidden bg-white md:bg-transparent"
              >
                {/* ========================================================== */}
                {/* 1. MOBILE ONLY: 100% PURE POSTER IMAGE                     */}
                {/* Zero blue background, zero side spaces, fits full width!  */}
                {/* ========================================================== */}
                <div className="block md:hidden w-full aspect-[1275/1650] max-h-[580px] relative bg-white">
                  <a
                    href={slide.actionLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full h-full block cursor-pointer"
                    title={`Order ${slide.title} on WhatsApp`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-contain block bg-white"
                      loading={index === 1 ? "eager" : "lazy"}
                    />
                  </a>
                </div>

                {/* ========================================================== */}
                {/* 2. LAPTOP & TABLET (>= 768px): Side-by-Side                */}
                {/* Text has generous left-padding so arrows NEVER overlap!    */}
                {/* ========================================================== */}
                <div className="hidden md:flex flex-row items-center justify-between min-h-[420px] lg:min-h-[460px] pl-16 sm:pl-20 lg:pl-24 pr-12 lg:pr-16 py-8 text-white">
                  
                  {/* Left Text & Details (starts well clear of left arrow) */}
                  <div className="relative z-10 w-1/2 pr-6 flex flex-col justify-center text-left">
                    <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
                      {slide.badge}
                    </span>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight mb-3">
                      {slide.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed max-w-md">
                      {slide.subtitle}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-xs lg:text-sm font-bold text-white bg-white/10 border border-white/20 px-3 py-2 rounded-xl">
                        {slide.price}
                      </span>

                      <a
                        href={slide.actionLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#1a3dd6] hover:bg-blue-600 text-white text-xs lg:text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
                      >
                        <span>{slide.buttonText}</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Right Product Image Poster */}
                  <div className="relative z-10 w-1/2 flex items-center justify-center p-2">
                    <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-auto max-h-[380px] object-contain bg-white"
                        loading={index === 1 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Left Arrow Button (Clear from text on desktop, clean on mobile) */}
          <button
            onClick={handlePrev}
            className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-slate-900/65 hover:bg-slate-900 text-white backdrop-blur-xs flex items-center justify-center border border-white/20 active:scale-90 transition-all cursor-pointer shadow-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-slate-900/65 hover:bg-slate-900 text-white backdrop-blur-xs flex items-center justify-center border border-white/20 active:scale-90 transition-all cursor-pointer shadow-md"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10">
            {REAL_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToDot(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeDotIndex === i
                    ? "w-5 h-1.5 bg-[#1a3dd6] shadow-sm shadow-blue-400"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
