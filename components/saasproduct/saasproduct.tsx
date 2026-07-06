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
      <div className="relative z-20 text-center max-w-4xl px-6 pt-[12vh] md:pt-[15vh] flex-shrink-0 mb-[2vh]">
        <h2 className="text-[32px] md:text-[42px] font-bold text-black tracking-tight mb-2">
          Our SAAS Product
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-none mx-auto mb-6 leading-relaxed md:whitespace-nowrap">
          Seravion is a people-first design studio that cares as much about your business and product as you do.
        </p>
        <button className="px-8 py-2 border border-blue-400 text-blue-500 font-semibold rounded-lg hover:bg-blue-50/50 transition-all duration-300 text-xs">
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
              src="/imageinsidetab.png" 
              alt="Dashboard Content" 
              className="w-[96%] h-[105%] object-top object-cover rounded-t-[0.8rem] md:rounded-t-[1.1rem]"
            />
          </div>
        </div>

        {/* 3. FLOATING ASSETS */}
        <div 
          ref={(el) => {
  floatRefs.current[0] = el;
}}
          className="absolute -left-[20%] md:-left-[30%] top-[2%] w-[25%] md:w-[12%] z-30"
        >
          <img src="/image 8.png" alt="Icon Left" className="w-full h-auto" />
        </div>

        <div 
          ref={(el) => {
  floatRefs.current[1] = el;
}}
          className="absolute -left-[15%] md:-left-[25%] bottom-[25%] w-[35%] md:w-[25%] z-30 rounded-xl overflow-hidden"
        >
          <img src="/Rectangle 32.png" alt="Stats Left" className="w-full h-auto" />
        </div>

        <div 
          ref={(el) => {
  floatRefs.current[2] = el;
}}
          className="absolute -right-[15%] md:-right-[22%] top-[5%] w-[35%] md:w-[22%] z-30 rounded-xl overflow-hidden"
        >
          <img src="/Rectangle 33.png" alt="Stats Right" className="w-full h-auto" />
        </div>

        <div 
          ref={(el) => {
  floatRefs.current[3] = el;
}}
          className="absolute -right-[20%] md:-right-[28%] bottom-[10%] w-[20%] md:w-[11%] z-30"
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