"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SaasProduct = () => {
  const sectionRef = useRef<HTMLSelectElement | null>(null);
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const handRef = useRef<HTMLImageElement | null>(null);
  const crmRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Floating animation
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

      // 2. Scroll Swipe Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Ensure initial states
      gsap.set(handRef.current, { yPercent: 120, xPercent: 20 });
      gsap.set(crmRef.current, { clipPath: "inset(0 0 0 100%)" });

      // Step 1: Hand rises up (kept low so it's not fully visible)
      tl.to(handRef.current, {
        yPercent: 40,
        duration: 1,
        ease: "power2.out",
      });

      // Step 2: Hand swipes left a very small distance WHILE CRM reveals
      tl.to(handRef.current, {
        xPercent: -20, // Short swipe distance
        duration: 2.5,
        ease: "none",
      }, "swipe");

      tl.to(crmRef.current, {
        clipPath: "inset(0 0 0 0%)", // Reveal from right to left
        duration: 2.5,
        ease: "none",
      }, "swipe");

      // Step 3: Hand drops down
      tl.to(handRef.current, {
        yPercent: 120,
        duration: 1,
        ease: "power2.in",
      });

      // Pause at end
      tl.to({}, { duration: 0.5 });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef as any} className="relative h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-white">

      {/* BACKGROUND IMAGE ASSET */}
      <div className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none select-none">
        <img
          src="/shadow.png"
          alt="Background Glow"
          className="w-full h-full object-bottom object-cover opacity-200"
        />
      </div>

      {/* 1. HEADER SECTION */}
      <div className="relative z-20 text-center max-w-4xl px-6 pt-24 md:pt-32 flex-shrink-0 mb-8">
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
      <div className="relative z-10 w-full max-w-[900px] px-10 flex items-end">

        {/* CENTRAL IPAD */}
        <div className="relative z-10 w-full rounded-t-[2.5rem] overflow-hidden translate-y-2">
          {/* Base iPad Frame */}
          <img
            src="/tab-saaspage.png"
            alt="Tablet Frame"
            className="w-full h-auto block relative z-0"
          />

          {/* DASHBOARD IMAGE ALIGNMENT */}
          <div className="absolute inset-0 z-10 pointer-events-none pt-[4.5%] px-[3%]">
            <div className="relative w-full h-[105%] rounded-t-[0.8rem] md:rounded-t-[1.1rem] overflow-hidden">
              <img
                src="/imageinsidetab.png"
                alt="Dashboard Content"
                className="absolute inset-0 w-full h-full object-top object-cover"
              />
              {/* The new CRM dashboard that gets revealed */}
              <img
                ref={crmRef}
                src="/CRM.png"
                alt="CRM Content"
                className="absolute inset-0 w-full h-full object-top object-cover z-10"
                style={{ clipPath: "inset(0 0 0 100%)" }}
              />
            </div>
          </div>
        </div>

        {/* 3. FLOATING ASSETS */}
        <div
          ref={(el) => { floatRefs.current[0] = el; }}
          className="absolute -left-70 top-[2%] w-157px md:w-28 z-30"
        >
          <img src="/image 8.png" alt="Icon Left" className="w-full h-auto" />
        </div>

        <div
          ref={(el) => { floatRefs.current[1] = el; }}
          className="absolute -left-53 bottom-[25%] w-32 md:w-55 z-30 rounded-xl overflow-hidden"
        >
          <img src="/Rectangle 32.png" alt="Stats Left" className="w-full h-auto" />
        </div>

        <div
          ref={(el) => { floatRefs.current[2] = el; }}
          className="absolute -right-50 top-[5%] w-32 md:w-50 z-30 rounded-xl overflow-hidden"
        >
          <img src="/Rectangle 33.png" alt="Stats Right" className="w-full h-auto" />
        </div>

        <div
          ref={(el) => { floatRefs.current[3] = el; }}
          className="absolute -right-65 bottom-[10%] w-16 md:w-24 z-30"
        >
          <img src="/image 7.png" alt="Icon Right" className="w-full h-auto rotate-[12deg]" />
        </div>

        {/* 4. THE ROBOT HAND */}
        <img
          ref={handRef}
          src="/robot-hand.png"
          alt="Robot Hand"
          className="absolute z-50 w-64 md:w-[400px] xl:w-[500px] bottom-0 right-0 pointer-events-none"
        />

      </div>

      {/* SMALL TRANSLUCENT BORDER AT THE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-[15px] bg-black/5 backdrop-blur-sm z-50" />
    </section>
  );
};

export default SaasProduct;