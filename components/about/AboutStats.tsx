"use client";

import Container from "@/components/ui/Container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const num1Ref = useRef<HTMLHeadingElement>(null);
  const num2Ref = useRef<HTMLHeadingElement>(null);
  const num3Ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Entrance animation for header and cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      tl.fromTo(headerRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [], 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" }, 
          "-=0.4"
        );

      // Number Counting Animation
      const counts = { num1: 0, num2: 0, num3: 0 };
      const countAnim = gsap.to(counts, {
        num1: 4.9,
        num2: 170,
        num3: 1.7,
        duration: 2,
        ease: "power2.out",
        paused: true,
        onUpdate: () => {
          if (num1Ref.current) num1Ref.current.innerHTML = counts.num1.toFixed(1);
          if (num2Ref.current) num2Ref.current.innerHTML = Math.round(counts.num2) + "+";
          if (num3Ref.current) num3Ref.current.innerHTML = counts.num3.toFixed(1) + "k";
        }
      });

      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 85%",
        once: true, // Only count up once
        onEnter: () => {
          countAnim.play();
        }
      });

    }, containerRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0033CC] py-12 lg:py-16">
      <Container>

        {/* Top Row: Heading and Label */}
        <div ref={headerRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 mb-12 md:mb-16 opacity-0">
          
          {/* Label */}
          <div className="md:col-span-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#63A5FF]" />
              <span className="text-[14px] md:text-[15px] font-medium text-white">
                Approach
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="md:col-span-9">
            <h2 className="text-white text-[32px] md:text-[44px] lg:text-[52px] font-medium max-w-[800px] leading-[1.1] tracking-[-0.02em]">
              We deliver creative ideas to a crowded world.
            </h2>
          </div>

        </div>

        {/* Bottom Row: Cards */}
        <div className="w-full">
          {/* Cards Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            
            <div className="bg-[#00269B] p-10 lg:p-14 opacity-0">
              <p className="text-white opacity-90 mb-4 text-[15px] lg:text-[16px]">
                35+ Google reviews
              </p>
              <h3 ref={num1Ref} className="text-white text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight">
                0.0
              </h3>
            </div>

            <div className="bg-[#00269B] p-10 lg:p-14 opacity-0">
              <p className="text-white opacity-90 mb-4 text-[15px] lg:text-[16px]">
                Clients world-wide
              </p>
              <h3 ref={num2Ref} className="text-white text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight">
                0+
              </h3>
            </div>

            <div className="bg-[#00269B] p-10 lg:p-14 opacity-0">
              <p className="text-white opacity-90 mb-4 text-[15px] lg:text-[16px]">
                Completed projects
              </p>
              <h3 ref={num3Ref} className="text-white text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight">
                0.0k
              </h3>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}