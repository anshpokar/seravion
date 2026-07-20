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
      // 1. Header Entrance Animation
      const header = containerRef.current?.querySelector(".m-work-header");
      if (header) {
        gsap.fromTo(
          header.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: header,
              start: "top 90%",
            },
          }
        );
      }

      // 2. Card ScrollTrigger Animations
      const cards = gsap.utils.toArray<HTMLElement>(".m-work-card");
      cards.forEach((card) => {
        const title = card.querySelector(".m-card-title");
        const desc = card.querySelector(".m-card-desc");
        const stats = card.querySelector(".m-card-stats");
        const img = card.querySelector(".m-card-img");

        // Set initial state via GSAP to prevent style conflicts
        gsap.set(card, { opacity: 0, y: 55 });
        gsap.set([title, desc, stats], { opacity: 0, y: 15 });
        gsap.set(img, { opacity: 0, y: 30, scale: 0.96 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });

        tl.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        })
          .to(
            [title, desc, stats],
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.35"
          )
          .to(
            img,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: "power2.out",
            },
            "-=0.25"
          );
      });
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
    <div ref={containerRef} className="py-16 px-5">
      <Container>
        {/* HEADER SECTION */}
        <div className="m-work-header flex flex-col gap-5 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>
            <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">
              Our Work
            </p>
          </div>
          <h2 className="text-[32px] font-bold text-black tracking-tight leading-[1.1] mb-2">
            Unseen Possibilities.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            Seravion is a people-first technology company focused on building
            innovative digital solutions that care about your business growth and
            product success as much as you do.
          </p>
          <Link
            href="/work"
            suppressHydrationWarning
            className="w-full text-center border border-blue-500 text-blue-500 font-bold px-6 py-3 rounded-lg text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 whitespace-nowrap mt-2"
          >
            View All Projects
          </Link>
        </div>

        {/* CARDS FEED */}
        <div className="flex flex-col gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="m-work-card w-full bg-[#0d1116] rounded-3xl overflow-hidden border border-white/5 shadow-xl flex flex-col justify-between"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="p-7 pb-0 text-white">
                <h3 className="m-card-title text-xl sm:text-2xl font-bold mb-3 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="m-card-desc text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* STATS */}
                <div className="m-card-stats flex items-center gap-5 border border-white/5 rounded-xl p-4 bg-white/[0.02] w-fit mb-6">
                  <div>
                    <p className="text-lg font-bold leading-none mb-1">
                      {item.stats[0].value}
                    </p>
                    <p className="text-gray-400 text-[9px] font-semibold tracking-wider uppercase">
                      {item.stats[0].label}
                    </p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10"></div>
                  <div>
                    <p className="text-lg font-bold leading-none mb-1">
                      {item.stats[1].value}
                    </p>
                    <p className="text-gray-400 text-[9px] font-semibold tracking-wider uppercase">
                      {item.stats[1].label}
                    </p>
                  </div>
                </div>
              </div>

              {/* IMAGE CONTAINER */}
              <div className="w-full relative flex items-end justify-center pt-4 px-4 overflow-hidden rounded-b-3xl">
                <img
                  src={item.image}
                  alt={`Feature UI ${index + 1}`}
                  className="m-card-img w-[90%] object-contain object-bottom h-auto max-h-[220px] drop-shadow-2xl rounded-t-xl"
                  style={{ willChange: "transform, opacity" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
