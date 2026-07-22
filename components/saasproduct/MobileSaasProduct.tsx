"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

export default function MobileSaasProduct() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80px",
            end: "+=220%",
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Entrance of 2 Mobile Images (Middle)
        tl.fromTo(
          [".m-saas-mobile-left", ".m-saas-mobile-right"],
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "none", stagger: 0.2 },
          "start"
        );

        // 2. Entrance of Bottom Rectangle Tablet Image
        tl.fromTo(
          ".m-saas-rect",
          { y: 80, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "none" },
          "start+=0.3"
        );

        // Hold pin state so user observes pinned screen on scroll
        tl.to({}, { duration: 1.2 });

        ScrollTrigger.refresh();
      }, containerRef);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-80px)] min-h-[600px] bg-white flex flex-col justify-between pt-2 pb-0 px-0 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/shadow.png"
          alt="Background Glow"
          className="w-full h-full object-bottom object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* 1. HEADER SECTION (TOP) */}
        <div className="m-saas-header text-center flex flex-col items-center gap-1 pt-1 flex-shrink-0 px-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>
            <p className="text-[10px] tracking-[0.2em] text-gray-800 uppercase font-semibold">
              SaaS Platform
            </p>
          </div>

          <h2 className="text-2xl font-bold text-black tracking-tight leading-tight">
            Seravion Connect
          </h2>
          <h3 className="text-xs font-semibold text-blue-600">
            AI-Powered ERP, CRM & Enterprise Automation
          </h3>
          <p className="text-gray-600 text-[11px] max-w-xs mx-auto leading-relaxed mt-0.5">
            Delivering powerful AI-driven ERP, CRM, and workflow automation to
            simplify operations.
          </p>

          {/* STATS COUNTER */}
          <div className="flex justify-center items-center gap-3 my-1 border border-gray-100 rounded-xl p-2 bg-white/90 backdrop-blur-sm shadow-sm w-full max-w-xs">
            <div className="text-center flex-1">
              <span className="block text-base font-bold text-black">20X</span>
              <span className="text-[8px] text-gray-500 uppercase tracking-wider font-semibold">
                Faster
              </span>
            </div>
            <div className="w-[1px] h-5 bg-gray-200"></div>
            <div className="text-center flex-1">
              <span className="block text-base font-bold text-black">120%</span>
              <span className="text-[8px] text-gray-500 uppercase tracking-wider font-semibold">
                Growth
              </span>
            </div>
            <div className="w-[1px] h-5 bg-gray-200"></div>
            <div className="text-center flex-1">
              <span className="block text-base font-bold text-black">90%</span>
              <span className="text-[8px] text-gray-500 uppercase tracking-wider font-semibold">
                Less Admin
              </span>
            </div>
          </div>

          <button
            suppressHydrationWarning
            className="px-4 py-1 border border-blue-400 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition-all text-xs"
          >
            Know More
          </button>
        </div>

        {/* 2. MIDDLE AREA: 2 MOBILE IMAGES */}
        <div className="flex gap-3.5 w-full justify-center items-center my-3 max-w-[350px] mx-auto flex-shrink-0">
          <div className="m-saas-mobile-left w-[45%] shadow-xl rounded-3xl overflow-hidden border border-gray-100 bg-white">
            <img
              src="/mobile3.png"
              alt="Mobile 1"
              className="w-full h-auto block rounded-3xl"
            />
          </div>
          <div className="m-saas-mobile-right w-[47%] shadow-xl rounded-3xl overflow-hidden border border-gray-100 bg-white">
            <img
              src="/mobile4.png"
              alt="Mobile 2"
              className="w-full h-auto block rounded-3xl"
            />
          </div>
        </div>

        {/* 3. BOTTOM AREA: RECTANGLE TABLET IMAGE ANCHORED AT BOTTOM OF SCREEN (TRUE ZERO PADDING FULL SCREEN WIDTH) */}
        <div className="m-saas-rect relative z-10 w-full rounded-t-2xl overflow-hidden shadow-2xl flex-shrink-0 mt-auto">
          <img
            src="/tab-saaspage.png"
            alt="Tablet Frame"
            className="w-full h-auto block relative z-0"
          />
          <div className="absolute inset-0 z-10 flex justify-center px-[2%] pt-[4%] pb-[2%] pointer-events-none">
            <img
              src="/connectLanding.png"
              alt="Seravion Connect Dashboard"
              className="w-[96%] h-[105%] object-top object-cover rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
