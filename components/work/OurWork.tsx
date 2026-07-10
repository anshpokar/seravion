"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["All Work", "Web App", "Mobile App", "Website"];

const projects = [
  {
    id: 1,
    category: ["All Work", "Web App"],
    tags: ["#UX Audit", "#Product Redesign", "#Web Development"],
    title: "Comprehensive Scheduling Platform",
    techStack: ["React", "Python", "AWS"],
    timeline: "12 months, ongoing",
    results: [
      "2× faster user workflows",
      "50% shorter time-to-market",
      "Nominated for UX Design Award 2024",
    ],
    image: "/service-tab.png",
  },
  {
    id: 2,
    category: ["All Work", "Mobile App"],
    tags: ["#Health Tech", "#Mobile Development", "#iOS & Android"],
    title: "AI Health Monitoring Dashboard",
    techStack: ["React Native", "Node.js", "Firebase"],
    timeline: "8 months",
    results: [
      "4.8★ App Store rating",
      "200K+ active users",
      "Best Health App Award 2023",
    ],
    image: "/service-tab.png",
  },
  {
    id: 3,
    category: ["All Work", "Website"],
    tags: ["#FinTech", "#Web Design", "#Branding"],
    title: "Nexori — Smart Financial Platform",
    techStack: ["Next.js", "Stripe API", "Tailwind CSS"],
    timeline: "5 months",
    results: [
      "3× increase in conversions",
      "56K+ users onboarded in month 1",
      "Featured on Awwwards",
    ],
    image: "/service-tab.png",
  },
];

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("All Work");

  const filtered = projects.filter((p) => p.category.includes(activeTab));

  return (
    <main className="bg-white min-h-screen pt-24 pb-24 px-6 md:px-16 lg:px-24">

      {/* HEADER */}
      <div className="mb-10">
        <p className="text-sm text-[#555] font-medium mb-2">Our Work</p>
        <h1 className="text-[42px] md:text-[58px] lg:text-[68px] font-semibold tracking-[-0.04em] leading-[1.05] text-[#1a1a1a]">
          Explore Our Projects
        </h1>
      </div>

      {/* TABS */}
      <div className="flex items-center gap-3 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-200 border ${
              activeTab === tab
                ? "bg-black text-white border-black"
                : "bg-white text-[#444] border-[#ddd] hover:border-black hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className="flex flex-col gap-16">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row w-full"
            style={{ minHeight: "480px" }}
          >
            {/* LEFT: CONTENT PANEL */}
            <div className="w-full lg:w-1/2 bg-white p-10 lg:p-16 flex flex-col justify-between border border-[#e8e8e8]">

              {/* TOP */}
              <div>
                {/* TAGS */}
                <div className="flex flex-wrap gap-x-2 gap-y-1 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[12px] text-[#888]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h2 className="text-[26px] md:text-[32px] font-bold text-[#1a1a1a] leading-tight mb-8">
                  {project.title}
                </h2>

                {/* TECH + TIMELINE */}
                <div className="flex gap-12 mb-8">
                  <div>
                    <p className="text-[#2B95FF] text-[13px] font-semibold mb-1">
                      Tech Stack
                    </p>
                    <p className="text-[#222] text-[15px]">
                      {project.techStack.join(", ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#2B95FF] text-[13px] font-semibold mb-1">
                      Timeline
                    </p>
                    <p className="text-[#222] text-[15px]">{project.timeline}</p>
                  </div>
                </div>

                {/* RESULTS */}
                <div className="border-t border-[#ebebeb] pt-6">
                  <p className="text-[#2B95FF] text-[13px] font-semibold mb-3">
                    Results
                  </p>
                  <ul className="flex flex-col gap-[10px]">
                    {project.results.map((r) => (
                      <li key={r} className="text-[#1a1a1a] text-[15px] font-medium">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-10">
                <button className="bg-[#2B95FF] hover:bg-[#1D83E8] text-white font-medium px-7 py-3 rounded-md text-[15px] transition-colors">
                  Explore Project
                </button>
              </div>
            </div>

            {/* RIGHT: BLACK BG + TABLET FRAME */}
            <div className="w-full lg:w-1/2 bg-[#000000] flex items-center justify-end overflow-hidden relative self-stretch py-10">

              {/* Subtle dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* TABLET FRAME — slightly overflows right edge */}
              <div
                className="relative flex-shrink-0 self-stretch"
                style={{
                  width: "115%",
                  maxWidth: "900px",
                  borderRadius: "25px",
                  marginRight: "-20%",
                  overflow: "hidden",
                  background: "#080c12",
                  boxShadow: `
                    0 0 0 2px rgba(60,140,255,0.4),
                    0 0 0 4px rgba(60,140,255,0.15),
                    0 0 60px rgba(60,140,255,0.4),
                    0 0 120px rgba(60,140,255,0.2)
                  `,
                }}
              >
                {/* Top glow edge */}
                <div
                  className="absolute top-0 left-[10%] right-[10%] z-10 pointer-events-none"
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(80,170,255,1) 50%, transparent)",
                  }}
                />
                {/* Left glow edge */}
                <div
                  className="absolute left-0 top-[8%] bottom-[8%] z-10 pointer-events-none"
                  style={{
                    width: "1px",
                    background: "linear-gradient(180deg, transparent, rgba(80,170,255,0.8) 50%, transparent)",
                  }}
                />
                {/* Right glow edge */}
                <div
                  className="absolute right-0 top-[8%] bottom-[8%] z-10 pointer-events-none"
                  style={{
                    width: "1px",
                    background: "linear-gradient(180deg, transparent, rgba(80,170,255,0.8) 50%, transparent)",
                  }}
                />

                {/* Corner dots */}
                <div className="absolute top-3 left-3 w-[6px] h-[6px] rounded-full bg-white/15 z-10" />
                <div className="absolute top-3 right-3 w-[6px] h-[6px] rounded-full bg-white/15 z-10" />
                <div className="absolute bottom-3 left-3 w-[6px] h-[6px] rounded-full bg-white/15 z-10" />
                <div className="absolute bottom-3 right-3 w-[6px] h-[6px] rounded-full bg-white/15 z-10" />

                {/* PROJECT IMAGE */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
