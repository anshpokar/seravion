"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

const industries = [
  {
    id: "01",
    slug: "healthcare-healthtech",
    name: "HEALTHCARE & HEALTHTECH",
    subtitle: "Improving Patient Outcomes with Technology",
    description: "We build HIPAA-compliant digital health platforms, patient engagement solutions, clinical workflow automation, and AI-powered diagnostics tools. Our healthcare engineers bridge clinical knowledge with technology to create products that genuinely improve patient outcomes.",
    image: "/industries1.png",
  },
  {
    id: "02",
    slug: "fintech-financial-services",
    name: "FINTECH & FINANCIAL",
    subtitle: "Secure, Compliant, and Scalable Solutions",
    description: "We engineer secure, compliant, and scalable financial technology solutions — from payment platforms and digital banking to investment tools and InsurTech products. Our FinTech team understands regulatory complexity, real-time data requirements, and the trust architecture that financial products demand.",
    image: "/industries2.png",
  },
  {
    id: "03",
    slug: "saas-cloud-products",
    name: "SAAS & CLOUD PRODUCTS",
    subtitle: "Architecting Multi-Tenant Platforms",
    description: "SaaS is in our DNA. We architect multi-tenant platforms, implement subscription billing, build product analytics, and help SaaS companies scale from first revenue to enterprise contracts.",
    image: "/industries3.png",
  },
  {
    id: "04",
    slug: "edtech-learning-platforms",
    name: "EDTECH & LEARNING",
    subtitle: "Education Technology that Scales",
    description: "From adaptive learning engines and LMS platforms to virtual classrooms and assessment tools — we build education technology that scales from thousands to millions of learners without sacrificing the experience.",
    image: "/industries4.png",
  },
  {
    id: "05",
    slug: "real-estate-proptech",
    name: "REAL ESTATE & PROPTECH",
    subtitle: "Digital Platforms for the Modern Era",
    description: "Digital platforms for property listing, CRM for real estate teams, virtual tour technology, and data-driven valuation tools — we help real estate businesses operate and grow in the digital era.",
    image: "/industries1.png",
  },
  {
    id: "06",
    slug: "hr-tech-future-of-work",
    name: "HR TECH & FUTURE WORK",
    subtitle: "Smarter Decisions and Better Workplaces",
    description: "We build applicant tracking systems, employee experience platforms, workforce analytics, and AI-powered talent intelligence tools that help HR teams make smarter decisions and create workplaces people love.",
    image: "/industries6.png",
  },
  {
    id: "07",
    slug: "logistics-supply-chain",
    name: "LOGISTICS & SUPPLY CHAIN",
    subtitle: "Intelligent Platforms with Real-Time Tracking",
    description: "We develop intelligent logistics platforms with real-time tracking, route optimization, warehouse management, and predictive analytics. Our solutions reduce operational costs and create visibility across even the most complex supply chains.",
    image: "/industries7.png",
  },
  {
    id: "08",
    slug: "ecommerce-retail",
    name: "E-COMMERCE & RETAIL",
    subtitle: "Next-Generation Commerce Experiences",
    description: "We build next-generation commerce experiences — from headless storefronts and personalization engines to inventory systems and omnichannel platforms — that convert browsers into buyers and buyers into loyalists.",
    image: "/industries1.png",
  },
  {
    id: "09",
    slug: "manufacturing-industry-4",
    name: "MANUFACTURING & IND 4.0",
    subtitle: "Unlocking Value from the Shop Floor",
    description: "IoT-enabled factory monitoring, predictive maintenance systems, digital twin solutions, and supply chain visibility platforms — we help manufacturers unlock the value of data from the shop floor to the boardroom.",
    image: "/industries2.png",
  },
  {
    id: "10",
    slug: "travel-hospitality",
    name: "TRAVEL & HOSPITALITY",
    subtitle: "Competing in a Digital Market",
    description: "From booking engines and dynamic pricing platforms to loyalty programs and guest experience applications — we build technology that helps travel and hospitality businesses compete in a highly digital, customer-driven market.",
    image: "/industries3.png",
  },
  {
    id: "11",
    slug: "insurance-insurtech",
    name: "INSURANCE & INSURTECH",
    subtitle: "Modernizing How Insurers Operate",
    description: "We develop policy management platforms, claims automation, AI-powered underwriting tools, and customer-facing insurance portals that modernize how insurers operate and engage their customers.",
    image: "/industries4.png",
  },
  {
    id: "12",
    slug: "media-entertainment",
    name: "MEDIA & ENTERTAINMENT",
    subtitle: "Powering Modern Media Businesses",
    description: "OTT platforms, content management systems, audience analytics, interactive experiences, and creator tools — we build the technology infrastructure that powers modern media businesses.",
    image: "/industries1.png",
  },
];
;

const OurIndustries = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        headerRef.current?.querySelectorAll(".header-anim") ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" }
      );

      // Cinematic curtain reveal per card
      const cards = cardsRef.current?.querySelectorAll(".industry-row");
      cards?.forEach((card) => {
        const imgPanel = card.querySelector(".card-img-panel");
        const img = card.querySelector(".card-img-panel img") as HTMLElement;
        const textPanel = card.querySelector(".card-text-panel");
        const textChildren = textPanel?.children ?? [];

        // Initial states
        gsap.set(card, { clipPath: "inset(100% 0 0% 0)" });
        gsap.set(img, { scale: 1.18 });
        gsap.set(Array.from(textChildren), { y: 28, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        });

        // 1. Curtain rises: clip-path wipes the card into view from bottom
        tl.to(card, {
          clipPath: "inset(0% 0 0% 0)",
          duration: 0.85,
          ease: "expo.out",
        })
        // 2. Simultaneously: image zooms gently out to natural size (depth effect)
        .to(img, {
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
        }, "<")
        // 3. Text children stagger in after card is revealed
        .to(Array.from(textChildren), {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.55,
          ease: "power3.out",
        }, "-=0.5");
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* ─── HEADER ─── */}
      <section className="pt-24 pb-12 md:pb-16" ref={headerRef}>
        <Container>
          <p className="header-anim text-sm text-gray-500 mb-4 font-bold tracking-widest ">
            Industries We Serve
          </p>
          <h1 className="header-anim text-[42px] md:text-[54px] lg:text-[64px] font-bold text-[#1a1a2e] leading-[1.05] tracking-tight max-w-5xl mb-6">
            Deep Domain Expertise.<br /> Delivered At Scale.
          </h1>
          <p className="header-anim text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            We bring vertical-specific knowledge and horizontal engineering excellence to every industry we serve.
          </p>
        </Container>
      </section>

      {/* ─── INDUSTRY CARDS ─── */}
      <section className="pb-20 md:pb-28" ref={cardsRef}>
        <Container>
          <div className="flex flex-col gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}`}
                className="industry-row w-full flex flex-col md:flex-row overflow-hidden group cursor-pointer rounded-xl md:rounded-none bg-black h-auto md:h-[340px]"
              >
                {/* LEFT: Image panel */}
                <div className="card-img-panel relative w-full md:w-1/2 h-56 sm:h-64 md:h-full flex-shrink-0 overflow-hidden bg-black">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.95) saturate(1.2)" }}
                  />
                  {/* Blend gradient: Desktop right edge blend ONLY */}
                  <div
                    className="hidden md:block absolute inset-y-0 right-0 w-1/2 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, #000000)",
                    }}
                  />
                </div>

                {/* RIGHT: Dark text panel */}
                <div className="card-text-panel w-full md:w-1/2 bg-black flex flex-col justify-center px-6 md:px-8 lg:px-10 py-6 md:py-8 transition-colors duration-300 group-hover:bg-[#0f0f0f]">
                  <h2 className="text-white text-2xl md:text-[38px] lg:text-[44px] font-bold tracking-tight mb-2 md:mb-4">
                    {industry.name}
                  </h2>
                  <p className="text-white/90 font-semibold text-sm md:text-lg mb-3 leading-snug">
                    {industry.subtitle}
                  </p>
                  {/* HIDE DESCRIPTION ON MOBILE - SHOW ON DESKTOP ONLY */}
                  <p className="hidden md:block text-gray-400 text-base leading-relaxed max-w-sm mb-6">
                    {industry.description}
                  </p>
                  <span className="text-[#1A3FD8] text-xs md:text-sm font-semibold tracking-wide uppercase flex items-center gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 md:mt-0">
                    Explore Industry →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default OurIndustries;
