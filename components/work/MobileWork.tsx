"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

export default function MobileWork() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        containerRef.current.querySelectorAll(".m-work-card")
      );

      if (cards.length === 0) return;

      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i + 1,
          y:
            i === 0
              ? 0
              : i === 1
              ? window.innerHeight * 0.7
              : window.innerHeight * 1.1,
          scale: 1,
          opacity: 1,
          transformOrigin: "top center",
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80px",
          end: `+=${cards.length * 110}%`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Card 0 -> Card 1 transition
      tl.to(
        cards[0],
        {
          y: -20,
          scale: 0.94,
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
          y: window.innerHeight * 0.7,
          duration: 1,
          ease: "none",
        },
        0
      );

      // Card 1 -> Card 2 transition
      if (cards.length > 2) {
        tl.to(
          cards[1],
          {
            y: -20,
            scale: 0.94,
            opacity: 0.5,
            duration: 1,
            ease: "none",
          },
          1.2
        );

        tl.to(
          cards[0],
          {
            y: -40,
            scale: 0.88,
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          1.2
        );

        tl.to(
          cards[2],
          {
            y: 0,
            duration: 1,
            ease: "none",
          },
          1.2
        );

        tl.to({}, { duration: 0.4 });
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Reelty: AI Real Estate Platform",
      desc: "An AI-powered marketplace that transforms property discovery and investment with intelligent recommendations and immersive digital experiences.",
      image: "/ReeltyDashbaord.png",
      stats: [
        { value: "12X", label: "Faster Discovery" },
        { value: "AI", label: "Intelligence" },
      ],
    },
    {
      title: "Shramjivi Sangathan Management",
      desc: "A comprehensive digital platform for union operations featuring AI-powered OCR for Marathi receipts, automated activity tracking, and centralized administration.",
      image: "/shramjivi landing.png",
      stats: [
        { value: "90%", label: "Faster Processing" },
        { value: "70%", label: "Less Admin" },
      ],
    },
    {
      title: "Carevo: Career Intelligence",
      desc: "Transforms career planning using neuroscience-backed assessments and real-time analytics to build dynamic, data-driven career roadmaps.",
      image: "/CarevoLanding.png",
      stats: [
        { value: "30+", label: "Decision Signals" },
        { value: "AI", label: "Career GPS" },
      ],
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-start bg-[#f5f5f5] pt-4 pb-12 px-4"
    >
      <Container>
        {/* HEADER SECTION */}
        <div className="m-work-header flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>
            <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">
              Our Work
            </p>
          </div>
          <h2 className="text-3xl font-bold text-black tracking-tight leading-[1.1]">
            Unseen Possibilities.
          </h2>
          <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
            Seravion is a people-first technology company focused on building
            innovative digital solutions that care about your business growth.
          </p>
          <div className="mt-1">
            <Link
              href="/work"
              suppressHydrationWarning
              className="inline-block border border-blue-500 text-blue-500 font-bold px-5 py-2 rounded-lg text-xs hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              View All Projects
            </Link>
          </div>
        </div>

        {/* CARDS CONTAINER (PINNED STACK) */}
        <div className="relative h-[480px] min-h-[460px] w-full">
          {projects.map((item, index) => (
            <div
              key={index}
              className="m-work-card absolute top-0 left-0 right-0 w-full bg-[#0d1116] rounded-none overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between h-[480px] min-h-[460px]"
              style={{ willChange: "transform" }}
            >
              <div className="p-5 pb-0 text-white">
                <h3 className="m-card-title text-xl font-bold mb-2 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="m-card-desc text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {item.desc}
                </p>

                {/* STATS */}
                <div className="m-card-stats flex items-center gap-4 border border-white/5 rounded-none p-3 bg-white/[0.02] w-fit mb-4">
                  <div>
                    <p className="text-base font-bold leading-none mb-1">
                      {item.stats[0].value}
                    </p>
                    <p className="text-gray-400 text-[8px] font-semibold tracking-wider uppercase">
                      {item.stats[0].label}
                    </p>
                  </div>
                  <div className="w-[1px] h-6 bg-white/10"></div>
                  <div>
                    <p className="text-base font-bold leading-none mb-1">
                      {item.stats[1].value}
                    </p>
                    <p className="text-gray-400 text-[8px] font-semibold tracking-wider uppercase">
                      {item.stats[1].label}
                    </p>
                  </div>
                </div>
              </div>

              {/* IMAGE CONTAINER */}
              <div className="w-full relative flex items-end justify-end pt-2 pl-4 pr-0 pb-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={`Feature UI ${index + 1}`}
                  className="m-card-img w-[110%] max-w-none object-contain object-right-bottom h-auto max-h-[220px] drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
