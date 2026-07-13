"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SaasProduct = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Entry Animation on Scroll
      gsap.from(".saas-animate", {
        y: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".saas-animate",
          start: "top 90%",
        },
      });

      // 2. Continuous Floating Animation
      floatRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: -12,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[200vh]">
    <section ref={sectionRef} className="sticky top-0 min-h-[700px] h-[100svh] w-full flex flex-col items-center justify-between overflow-hidden bg-white">
      
      {/* BACKGROUND IMAGE ASSET */}
      <div className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none select-none">
        <img 
          src="/shadow.png" 
          alt="Background Glow" 
          className="w-full h-full object-bottom object-cover opacity-200"
        />
      </div>

      {/* 1. HEADER SECTION */}
      <div className="relative z-20 text-center max-w-5xl px-6 pt-[8vh] md:pt-[10vh] flex-shrink-0 mb-[1vh]">
        <h2 className="text-[28px] md:text-[38px] font-bold text-black tracking-tight leading-tight">
          Seravion Connect
        </h2>
        <h3 className="text-sm md:text-lg font-semibold text-blue-600 mb-3">
          AI-Powered ERP, CRM & Enterprise Automation
        </h3>
        <p className="text-gray-600 text-xs md:text-sm max-w-3xl mx-auto mb-4 leading-relaxed">
          Delivering powerful AI-driven ERP, CRM, and workflow automation to simplify operations and accelerate growth. A people-first platform for the modern world.
        </p>
        
        <div className="flex justify-center items-center gap-6 md:gap-10 mb-4">
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-bold text-black">20X</span>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Faster</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-200"></div>
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-bold text-black">120%</span>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Growth</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-200"></div>
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-bold text-black">90%</span>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-semibold">Manual Work Reduced</span>
          </div>
        </div>

        <button suppressHydrationWarning className="px-6 py-2 border border-blue-400 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 transition-all text-xs">
          Know More
        </button>
      </div>

      {/* 2. MAIN VISUAL AREA */}
      <div className="saas-animate relative z-10 w-[85%] md:w-[65%] lg:w-[60%] max-w-[900px] flex items-end mt-4">
        
        {/* CENTRAL IPAD */}
        <div className="relative z-10 w-full rounded-t-[2.5rem] overflow-hidden translate-y-2">
          {/* Base iPad Frame */}
          <img 
            src="/tab-saaspage.png" 
            alt="Tablet Frame" 
            className="w-full h-auto block relative z-0"
          />
          
          {/* DASHBOARD IMAGE ALIGNMENT */}
          <div className="absolute inset-0 z-10 flex justify-center px-[2%] pt-[4%] pb-[2%] pointer-events-none">
            <img 
              src="/seravionconnect.jpeg" 
              alt="Seravion Connect Dashbaord" 
              className="w-[96%] h-[105%] object-top object-cover rounded-t-[0.8rem] md:rounded-t-[1.1rem]"
            />
          </div>
        </div>

        {/* 3. FLOATING ASSETS */}
        <div 
          ref={(el) => {
  floatRefs.current[0] = el;
}}
          className="absolute -left-[15%] md:-left-[35%] top-[2%] w-[25%] md:w-[12%] z-30"
        >
          <img src="/image 8.png" alt="Icon Left" className="w-full h-auto" />
        </div>

        <div 
          ref={(el) => {
  floatRefs.current[1] = el;
}}
          className="absolute -left-[15%] md:-left-[25%] bottom-[25%] w-[35%] md:w-[25%] z-30 rounded-xl overflow-hidden"
        >
          <img src="/mobile1.png" alt="Stats Left" className="w-full h-auto" />
        </div>

        <div 
          ref={(el) => {
  floatRefs.current[2] = el;
}}
          className="absolute -right-[5%] md:-right-[25%] bottom-[25%] w-[35%] md:w-[25%] z-30 rounded-xl overflow-hidden"
        >
          <img src="/mobile1.png" alt="Stats Right" className="w-full h-auto" />
        </div>

        <div 
          ref={(el) => {
  floatRefs.current[3] = el;
}}
          className="absolute -right-[20%] md:-right-[38%] bottom-[20%] w-[20%] md:w-[11%] z-30"
        >
          <img src="/image 7.png" alt="Icon Right" className="w-full h-auto rotate-[12deg]" />
        </div>
      </div>

      {/* SMALL TRANSLUCENT BORDER AT THE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-[15px] bg-black/5 backdrop-blur-sm z-50" />
    </section>
    </div>
  );
};

export default SaasProduct;