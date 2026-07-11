"use client";

import Container from "@/components/ui/Container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LOGOS = [
  { id: 1,  name: "Amazon",    src: "/amazon-logo.png" },
  { id: 2,  name: "Google",    src: "/google_logo_grayed_7-1128x376_983de733_transparent-removebg-preview.png" },
  { id: 3,  name: "Meta",      src: "/Meta-logo.png" },
  { id: 4,  name: "Microsoft", src: "/microsoft-logo-png-transparent-background-11660471226dms6lxgzs1-removebg-preview.png" },
  { id: 5,  name: "Netflix",   src: "/netflix_PNG25.png" },
  { id: 6,  name: "OIP",       src: "/OIP-removebg-preview.png" },
  { id: 7,  name: "Oracle",    src: "/Oracle-Logotipo-1995-Presente-removebg-preview.png" },
  { id: 8,  name: "SpaceX",    src: "/SpaceX-Emblema-removebg-preview.png" },
  { id: 9,  name: "Tesla",     src: "/Tesla_Logo-removebg-preview.png" },
];

export default function AboutClients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        pillRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        stripRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      );
    }, containerRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24 overflow-hidden">

      {/* Heading */}
      <Container>
        <div ref={headerRef} className="max-w-[1000px] mx-auto text-center px-4 opacity-0">
          <h2 className="text-[#171717] text-[28px] md:text-[36px] leading-[1.2] font-normal tracking-normal mb-12">
            Help to brands growing up and show their
            <br className="hidden md:block" />
            success stories to the world
          </h2>
        </div>
      </Container>

      {/* Divider with Pill */}
      <div ref={pillRef} className="relative flex items-center justify-center mb-12 opacity-0">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#EFEFEF]"></div>
        </div>
        <div className="relative bg-white px-6 py-2 border border-[#EFEFEF] rounded-full shadow-sm">
          <span className="text-[#171717] font-semibold text-[13px] md:text-[14px]">
            We've 5,000+ Happiest Customer
          </span>
        </div>
      </div>

      {/* Animated Logo Strip — left to right */}
      <div ref={stripRef} className="w-full overflow-hidden relative opacity-0">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max" style={{ animation: "logo-rtl 28s linear infinite" }}>
          {/* Two sets for seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-10 md:px-14"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain max-w-[140px] opacity-50 hover:opacity-90 transition-opacity duration-300 grayscale"
              />
            </div>
          ))}
        </div>

        <style>{`
          @keyframes logo-rtl {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-[#EFEFEF] mt-12" />

    </section>
  );
}