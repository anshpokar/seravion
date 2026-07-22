"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const industries = [
  {
    name: "Healthcare",
    tagline: "HIPAA-Compliant AI & Telehealth Platforms",
    stat: "10M+ Patients",
    slug: "healthcare-healthtech",
    image: "/industries1.png",
    accent: "#1E90FF",
  },
  {
    name: "FinTech",
    tagline: "High-Speed Trading & Security Systems",
    stat: "$4.2B+ Volume",
    slug: "fintech-financial-services",
    image: "/industries2.png",
    accent: "#00d2ff",
  },
  {
    name: "SaaS & Cloud",
    tagline: "Cloud-Native Infrastructure & Automation",
    stat: "99.99% Uptime",
    slug: "saas-cloud-products",
    image: "/industries3.png",
    accent: "#3a86ff",
  },
  {
    name: "EdTech",
    tagline: "Interactive AI Learning & Dashboards",
    stat: "2M+ Learners",
    slug: "edtech-learning-platforms",
    image: "/industries4.png",
    accent: "#7000ff",
  },
  {
    name: "Real Estate",
    tagline: "PropTech Analytics & Smart Buildings",
    stat: "500K+ Properties",
    slug: "real-estate-proptech",
    image: "/industries2.png",
    accent: "#00f5d4",
  },
  {
    name: "HR Tech",
    tagline: "People Analytics & Workforce Automation",
    stat: "90% Time Saved",
    slug: "hr-tech-future-of-work",
    image: "/industries6.png",
    accent: "#ff007f",
  },
];

export default function MobileIndustries() {
  const [activeItem, setActiveItem] = useState<number>(0);
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
            end: "+=240%",
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const index = Math.min(
                Math.floor(self.progress * industries.length),
                industries.length - 1
              );
              setActiveItem(index);
            },
          },
        });

        tl.to({}, { duration: 2.5 });

        ScrollTrigger.refresh();
      }, containerRef);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  const current = industries[activeItem];
  const progressPercent = ((activeItem + 1) / industries.length) * 100;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-80px)] min-h-[620px] bg-[#070d18] text-white flex flex-col justify-between pt-3 pb-4 px-4 overflow-hidden select-none"
    >
      {/* Dynamic Futuristic Ambient Glow */}
      <div
        className="absolute top-1/4 -right-10 w-72 h-72 rounded-full blur-[100px] opacity-25 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: current.accent }}
      />
      <div
        className="absolute bottom-10 -left-10 w-64 h-64 rounded-full blur-[90px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: current.accent }}
      />

      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* 1. HEADER SECTION (CENTERED & MATCHING OTHER MOBILE SECTIONS) */}
        <div className="text-center flex flex-col items-center gap-1 pt-1 flex-shrink-0 px-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1.5 bg-[#1E90FF] rounded-full" />
            <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-semibold">
              Industries
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">
            From Motion Design <br /> to AI-Powered Products
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs mx-auto mt-0.5">
            We design and build interfaces for the future.
          </p>
        </div>

        {/* 2. INNOVATIVE GLASS DOCK TABS */}
        <div className="w-full overflow-x-auto no-scrollbar py-2.5 my-1 flex gap-2 flex-shrink-0">
          {industries.map((item, idx) => {
            const isActive = activeItem === idx;
            return (
              <button
                key={item.name}
                onClick={() => setActiveItem(idx)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(30,144,255,0.4)] scale-105"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
                {item.name}
              </button>
            );
          })}
        </div>

        {/* 3. HERO HOLOGRAPHIC SHOWCASE CARD */}
        <div className="flex-1 w-full min-h-[340px] relative mt-1">
          <Link
            href={`/industries/${current.slug}`}
            className="group relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#0b1424] flex flex-col justify-between p-5"
          >
            {/* Background Images Crossfade */}
            {industries.map((item, idx) => (
              <img
                key={item.name}
                src={item.image}
                alt={item.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  activeItem === idx
                    ? "opacity-100 scale-100 filter brightness-105"
                    : "opacity-0 scale-105"
                }`}
              />
            ))}

            {/* Edge Shadow & Cyber Mesh Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-[#070d18]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070d18]/40 via-transparent to-[#070d18]/80 pointer-events-none" />

            {/* TOP BAR: BADGES */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest text-blue-300 font-bold bg-[#070d18]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-500/30 shadow-md">
                0{activeItem + 1} / 0{industries.length}
              </span>

              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/30 shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {current.stat}
              </span>
            </div>

            {/* BOTTOM CONTENT: TITLE, TAGLINE & CTA */}
            <div className="relative z-10 pt-6">
              <div className="mb-2">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200"
                >
                  {current.tagline}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white tracking-tight leading-none mb-2 drop-shadow-md">
                {current.name}
              </h3>

              {/* ACTION LINK BUTTON */}
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
                <span className="text-xs text-gray-300 font-medium">
                  Tap to view platform & cases
                </span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/40 group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>

              {/* STEP PROGRESS BAR */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-3">
                <div
                  className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full shadow-[0_0_10px_#1E90FF]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
