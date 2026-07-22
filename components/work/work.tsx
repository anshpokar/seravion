"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import MobileWork from "./MobileWork";

const Work = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!pinRef.current) return;

        const cards = gsap.utils.toArray<HTMLElement>(
          pinRef.current.querySelectorAll(".work-card")
        );

        cards.forEach((card, i) => {
          gsap.set(card, {
            zIndex: i,
            y:
              i === 0
                ? 0
                : i === 1
                ? window.innerHeight * 0.85
                : window.innerHeight * 1.2,
            scale: 1,
            opacity: 1,
            transformOrigin: "top center",
            force3D: true,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: `+=${cards.length * 130}%`,
            scrub: 0.5,
            pin: true,
            anticipatePin: 1.5,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          cards[0],
          {
            y: -30,
            scale: 0.95,
            opacity: 0.5,
            duration: 1,
            ease: "none",
          },
          0
        );

        tl.to(
          cards[1],
          {
            y: 0,
            duration: 1,
            ease: "none",
          },
          0
        );

        tl.to(
          cards[2],
          {
            y: window.innerHeight * 0.85,
            duration: 1,
            ease: "none",
          },
          0
        );

        if (cards.length > 2) {
          tl.to(
            cards[1],
            {
              y: -30,
              scale: 0.95,
              opacity: 0.5,
              duration: 1,
              ease: "none",
            },
            1.5
          );

          tl.to(
            cards[0],
            {
              y: -60,
              scale: 0.9,
              opacity: 0,
              duration: 1,
              ease: "none",
            },
            1.5
          );

          tl.to(
            cards[2],
            {
              y: 0,
              duration: 1,
              ease: "none",
            },
            1.5
          );

          // Add extra scrolling space at the end before unpinning
          tl.to({}, { duration: 0.5 });
        }
      });
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#f5f5f5] overflow-hidden">
      {/* MOBILE LAYOUT (< 1024px) */}
      <div className="block lg:hidden">
        <MobileWork />
      </div>

      {/* DESKTOP LAYOUT (>= 1024px) */}
      <div className="hidden lg:block">
        <div
          ref={pinRef}
          className="relative min-h-screen w-full flex flex-col items-center justify-start bg-[#f5f5f5] pt-12 md:pt-20 pb-20"
        >
          {/* HEADER TEXT */}
          <Container className="mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              {/* LEFT SIDE */}
              <div className="mb-4 md:mb-0 md:w-[55%]">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>
                  <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">
                    Our Work
                  </p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter whitespace-nowrap">
                  Unseen Possibilities.
                </h2>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Seravion is a people-first technology company focused on
                  building innovative digital
                  solutions that care about your business growth and product
                  success as much as you do
                </p>
                <Link
                  href="/work"
                  suppressHydrationWarning
                  className="border border-blue-500 text-blue-500 font-bold px-8 py-2.5 rounded-lg text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </Container>

          {/* CARDS CONTAINER */}
          <Container className="relative h-[65vh] min-h-[425px]">
            {[
              {
                title: (
                  <>
                    Reelty: AI Real <br />
                    Estate Platform
                  </>
                ),
                desc: "An AI-powered marketplace that transforms property discovery and investment with intelligent recommendations and immersive digital experiences.",
                image: "/ReeltyDashbaord.png",
                stats: [
                  { value: "12X", label: "Faster Discovery" },
                  { value: "AI", label: "Intelligence" },
                ],
              },
              {
                title: (
                  <>
                    Shramjivi Sangathan <br />
                    Management
                  </>
                ),
                desc: "A comprehensive digital platform for union operations featuring AI-powered OCR for Marathi receipts, automated activity tracking, and centralized administration.",
                image: "/shramjivi landing.png",
                stats: [
                  { value: "90%", label: "Faster Processing" },
                  { value: "70%", label: "Less Admin Work" },
                ],
              },
              {
                title: (
                  <>
                    Carevo: Career <br />
                    Intelligence
                  </>
                ),
                desc: "Transforms career planning using neuroscience-backed assessments and real-time analytics to build dynamic, data-driven career roadmaps.",
                image: "/CarevoLanding.png",
                stats: [
                  { value: "30+", label: "Decision Signals" },
                  { value: "AI", label: "Career GPS" },
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="work-card absolute top-0 left-0 right-0 mx-auto w-[95%] md:w-[92%] lg:w-[90%] max-w-[1400px] h-[65vh] min-h-[425px] bg-[#0d1116] shadow-2xl transition-none overflow-hidden flex flex-col md:flex-row"
                style={{ willChange: "transform" }}
              >
                {/* LEFT SIDE: TEXT */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-6 sm:p-10 lg:p-16 text-white">
                  <h3 className="text-2xl sm:text-3xl lg:text-[42px] xl:text-[48px] font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-lg xl:text-xl leading-relaxed mb-8 sm:mb-12 max-w-lg">
                    {item.desc}
                  </p>

                  {/* STATS BOX */}
                  <div className="flex items-center gap-6 xl:gap-10 border border-white/5 rounded-sm p-4 sm:p-6 xl:p-8 bg-transparent w-max">
                    <div>
                      <p className="text-2xl sm:text-[32px] xl:text-[36px] font-bold mb-1 leading-none">
                        {item.stats[0].value}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm font-semibold">
                        {item.stats[0].label}
                      </p>
                    </div>
                    <div className="w-[1px] h-8 sm:h-12 bg-white/10"></div>
                    <div>
                      <p className="text-2xl sm:text-[32px] xl:text-[36px] font-bold mb-1 leading-none">
                        {item.stats[1].value}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm font-semibold">
                        {item.stats[1].label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: IMAGE */}
                <div className="w-full md:w-1/2 h-full relative flex items-end justify-end pt-12 pl-4 md:pl-0 pr-0 pb-0">
                  <img
                    src={item.image}
                    alt={`Feature UI ${index + 1}`}
                    className="w-full h-[95%] md:h-[110%] md:w-[120%] max-w-none object-contain object-right-bottom drop-shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Work;