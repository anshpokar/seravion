"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

const tabs = ["All Work", "AI Solutions", "ERP & CRM", "Web Application", "Mobile Application", "Enterprise Software", "Real Estate", "Healthcare"];

const projects = [
  {
    id: 1,
    category: ["All Work", "AI Solutions", "ERP & CRM", "Enterprise Software"],
    tags: ["#AI", "#ERP", "#CRM", "#SaaS"],
    title: "Seravion Connect",
    description: "AI-Powered ERP, CRM & Field Service Management Platform. An intelligent enterprise platform built specifically for service-driven businesses to automate sales, customer management, technician operations, inventory, billing, and business analytics.",
    techStack: ["Flutter", "React.js", "Django", "PostgreSQL", "AWS", "AI", "LangChain"],
    timeline: "18+ Months • SaaS Platform",
    results: [
      "80% faster field service ops",
      "AI-powered scheduling",
      "Real-time ERP & CRM",
      "Multi-branch management",
    ],
    image: "/ConnectProject-V2.png"
  },
  {
    id: 2,
    category: ["All Work", "Enterprise Software", "AI Solutions"],
    tags: ["#Digital Transformation", "#OCR AI", "#Union Management"],
    title: "Shramjivi Sangathan Maharashtra",
    description: "A comprehensive digital transformation platform enabling centralized member management, receipt tracking, activity monitoring, district-level administration, and intelligent reporting with AI-powered OCR technology.",
    techStack: ["Flutter", "React.js", "Python", "Django", "OCR AI", "AWS"],
    timeline: "12 Months • Enterprise Digital Transformation",
    results: [
      "90% faster receipt processing",
      "100% centralized management",
      "70% less admin work",
    ],
    image: "/SHRAMPROJECT.png",
  },
  {
    id: 3,
    category: ["All Work", "Real Estate", "AI Solutions"],
    tags: ["#Real Estate", "#AI Marketplace", "#PropTech"],
    title: "Reelty",
    description: "Reelty is a next-generation AI-powered real estate platform designed to transform how buyers, sellers, investors, and builders discover and interact with properties using intelligent recommendations and immersive digital experiences.",
    techStack: ["Next.js", "Flutter", "Python", "AWS"],
    timeline: "Product Development • SaaS Platform",
    results: [
      "12X faster property discovery",
      "AI-driven recommendations",
      "Verified property ecosystem",
    ],
    image: "/ReeltyProject_v2.png",
  },
  {
    id: 4,
    category: ["All Work", "Real Estate", "ERP & CRM"],
    tags: ["#Sales CRM", "#AI Intelligence", "#PropTech"],
    title: "Seravion Real Estate CRM",
    description: "A comprehensive CRM platform built for real estate developers, builders, and sales teams to automate lead management, sales pipelines, customer engagement, booking workflows, and business analytics.",
    techStack: ["React.js", "Flutter", "Django", "PostgreSQL", "AWS"],
    timeline: "Product Development • SaaS",
    results: [
      "AI-powered lead management",
      "Automated follow-ups",
      "Complete pipeline visibility",
    ],
    image: "/CRMProject_v2.png",
  },
  {
    id: 5,
    category: ["All Work", "Enterprise Software", "AI Solutions"],
    tags: ["#Go-To-Market", "#AI Analytics", "#SaaS"],
    title: "Ambit",
    description: "Ambit is an intelligent GTM platform designed to help organizations accelerate customer acquisition, optimize sales execution, and improve business growth using automation, AI insights, and data-driven decision-making.",
    techStack: ["React.js", "Node.js", "AI Analytics", "AWS"],
    timeline: "Enterprise SaaS Platform",
    results: [
      "Automated sales workflows",
      "AI-powered insights",
      "Intelligent engagement",
    ],
    image: "/Ambitproject.png",
  },
  {
    id: 6,
    category: ["All Work", "Healthcare", "Web Application"],
    tags: ["#Healthcare", "#EMR", "#Digital Platform"],
    title: "MedFaster",
    description: "MedFaster is a modern healthcare platform designed to simplify patient engagement, appointment scheduling, electronic medical records, healthcare administration, and digital healthcare services.",
    techStack: ["Flutter", "React.js", "Python", "AWS"],
    timeline: "Healthcare Digital Platform",
    results: [
      "Digital patient management",
      "Appointment automation",
      "Secure healthcare records",
    ],
    image: "/medstrrProject.png",
  },
  {
    id: 7,
    category: ["All Work", "AI Solutions", "Web Application"],
    tags: ["#Career Intelligence", "#AI Roadmap", "#EdTech"],
    title: "Carevo",
    description: "Carevo transforms career planning through artificial intelligence, neuroscience-backed assessments, predictive analytics, and personalized learning pathways to deliver dynamic, data-driven career roadmaps.",
    techStack: ["React.js", "Flutter", "Python AI", "Machine Learning"],
    timeline: "AI Product",
    results: [
      "AI-powered Career GPS",
      "30+ decision signals",
      "Personalized roadmap",
    ],
    image: "/CarevoProject.png",
  },
  {
    id: 8,
    category: ["All Work", "Web Application"],
    tags: ["#Interior Design", "#E-Commerce", "#Lead Generation"],
    title: "Akshar Decor",
    description: "A premium digital platform developed for Akshar Decor to showcase products, manage inquiries, streamline customer interactions, and strengthen online brand presence using modern UI and business automation.",
    techStack: ["Next.js", "React.js", "CMS", "AWS"],
    timeline: "Website & Business Platform",
    results: [
      "Premium digital experience",
      "Lead generation automation",
      "SEO-optimized architecture",
    ],
    image: "/aksharDecor.png",
  },
  {
    id: 9,
    category: ["All Work", "AI Solutions", "Enterprise Software"],
    tags: ["#Agentic AI", "#RAG", "#Enterprise Knowledge"],
    title: "Enterprise AI Assistant",
    description: "An advanced enterprise AI assistant built using Retrieval-Augmented Generation (RAG) and Agentic AI. It enables employees to interact with business data using natural language, instantly generate reports, and automate workflows.",
    techStack: ["Agentic AI", "LangChain", "OpenAI", "RAG", "FastAPI", "AWS"],
    timeline: "Enterprise AI Product",
    results: [
      "Instant AI-powered reporting",
      "Natural language access",
      "Automated workflows",
    ],
    image: "/service-tab.png",
  },
];
;

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("All Work");
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const filtered = projects.filter((p) => p.category.includes(activeTab));

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header: words slide up and fade in
      const headerEls = headerRef.current?.querySelectorAll(".h-anim");
      if (headerEls?.length) {
        gsap.fromTo(
          headerEls,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: "power3.out", delay: 0.1 }
        );
      }

      // 2. Tabs slide in from left
      const tabEls = tabsRef.current?.querySelectorAll("button");
      if (tabEls?.length) {
        gsap.fromTo(
          tabEls,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: { trigger: tabsRef.current, start: "top 90%" },
          }
        );
      }

      // 3. Project cards: curtain reveal from bottom + image zoom-out
      const cards = cardsRef.current?.querySelectorAll(".project-card");
      cards?.forEach((card) => {
        const img = card.querySelector(".project-img") as HTMLElement;
        const contentEls = card.querySelectorAll(".card-content-anim");

        gsap.set(card, { clipPath: "inset(100% 0 0% 0)" });
        gsap.set(img, { scale: 1.12 });
        gsap.set(contentEls, { y: 24, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 85%" },
        });

        tl.to(card, { clipPath: "inset(0% 0 0% 0)", duration: 0.85, ease: "expo.out" })
          .to(img, { scale: 1, duration: 1.3, ease: "power2.out" }, "<")
          .to(contentEls, {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.5,
            ease: "power3.out",
          }, "-=0.5");
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Container className="pt-24 pb-24">

      {/* HEADER */}
      <div className="mb-10" ref={headerRef}>
        <p className="h-anim text-sm text-[#555] font-medium mb-2">Our Work</p>
        <h1 className="h-anim text-[42px] md:text-[58px] lg:text-[68px] font-semibold tracking-[-0.04em] leading-[1.05] text-[#1a1a1a]">
          Explore Our Projects
        </h1>
      </div>

      {/* TABS */}
      <div className="flex items-center gap-3 mb-12 flex-wrap" ref={tabsRef}>
        {tabs.map((tab) => (
          <button suppressHydrationWarning
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
      <div className="flex flex-col gap-16" ref={cardsRef}>
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className="project-card flex flex-col lg:flex-row w-full"
            style={{ minHeight: "480px" }}
          >
            {/* LEFT: CONTENT PANEL */}
            <div className="w-full lg:w-1/2 bg-white p-10 lg:p-16 flex flex-col justify-between border border-[#e8e8e8]">

              {/* TOP */}
              <div>
                {/* TAGS */}
                <div className="card-content-anim flex flex-wrap gap-x-2 gap-y-1 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[12px] text-[#888]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h2 className="card-content-anim text-[26px] md:text-[32px] font-bold text-[#1a1a1a] leading-tight mb-4">
                  {project.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="card-content-anim text-[#444] text-[15px] leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* TECH + TIMELINE */}
                <div className="card-content-anim flex gap-12 mb-8">
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
                <div className="card-content-anim border-t border-[#ebebeb] pt-6">
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
              <div className="card-content-anim mt-10">
                <button suppressHydrationWarning className="bg-[#2B95FF] hover:bg-[#1D83E8] text-white font-medium px-7 py-3 rounded-md text-[15px] transition-colors">
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
                className="project-img relative flex-shrink-0 self-stretch"
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
                  loading={index <= 2 ? "eager" : "lazy"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </main>
  );
}
