"use client";

import Container from "@/components/ui/Container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processData = [
  {
    number: "01",
    title: "Discovery &\nAlignment",
    items: [
      "Stakeholder interviews & workshops",
      "Technical feasibility assessment",
      "Competitive landscape analysis",
      "Risk identification & mitigation",
    ],
  },
  {
    number: "02",
    title: "Strategy &\nRoadmap",
    items: [
      "Product vision & strategy definition",
      "Technology stack recommendation",
      "Resource & team structure planning",
      "Sprint-by-sprint delivery roadmap",
    ],
  },
  {
    number: "03",
    title: "Architecture &\nSystem Design",
    items: [
      "Cloud architecture design",
      "Database & data model design",
      "API & integration design",
      "Security & compliance framework",
    ],
  },
  {
    number: "04",
    title: "Design\nSprint",
    items: [
      "User research & persona development",
      "Information architecture & user flows",
      "Wireframes & interactive prototypes",
      "Design system creation",
    ],
  },
  {
    number: "05",
    title: "Agile\nDevelopment",
    items: [
      "Feature development with code reviews",
      "Pair programming for complex features",
      "Continuous integration & feature flags",
      "Sprint reviews with stakeholders",
    ],
  },
  {
    number: "06",
    title: "QA & Test\nAutomation",
    items: [
      "Unit, integration & E2E automation",
      "Performance & load testing",
      "Security penetration testing",
      "Cross-device & browser validation",
    ],
  },
  {
    number: "07",
    title: "Deployment\n& Launch",
    items: [
      "Blue/green & canary deployments",
      "Infrastructure-as-code provisioning",
      "Observability & alerting setup",
      "Launch readiness sign-off",
    ],
  },
  {
    number: "08",
    title: "Scale &\nImprovement",
    items: [
      "Production monitoring & response",
      "Performance optimization sprints",
      "Feature iteration from analytics",
      "Scaling architecture reviews",
    ],
  },
];

export default function AboutProcess() {
  const sectionRef  = useRef<HTMLDivElement>(null); // pinned element
  const railRef     = useRef<HTMLDivElement>(null); // the moving strip
  const headerRef   = useRef<HTMLDivElement>(null);
  const dividerRef  = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ── 1. Header fade-in (normal scroll trigger, no pin) ───────────────
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // ── 2. Horizontal scrub — scrollTrigger lives INSIDE gsap.to ────────
      const getScrollAmount = () => {
        if (!railRef.current) return 0;
        const distance = railRef.current.scrollWidth - window.innerWidth + 100; // 100px extra for right padding
        return distance > 0 ? distance : 0;
      };

      gsap.to(railRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,                    // pin the whole section
          start: "top 60px",
          // scroll distance = how far the rail needs to travel
          end: () => `+=${getScrollAmount()}`,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // sectionRef is both the pin-trigger and the pinned element
    <section
      ref={sectionRef}
      className="relative bg-white will-change-transform"
      // must NOT have overflow:hidden — that breaks pin spacer
    >
      {/* ── Static header ───────────────────────────────────────────── */}
      <Container>
        <div
          ref={headerRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 pt-10 lg:pt-16 opacity-0"
        >
          {/* Label */}
          <div className="md:col-span-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#2F80ED]" />
              <span className="text-[14px] md:text-[15px] font-medium text-[#171717]">
                Approach
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="md:col-span-9">
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.08] tracking-[-0.04em] font-semibold text-[#171717] max-w-[900px]">
              How We Turn Vision Into Reality
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="border-t border-[#ECECEC] mt-10 mb-10 md:mb-12"
        />
      </Container>

      {/* ── Horizontal rail ─────────────────────────────────────────── */}
      {/*
        overflow-hidden on THIS wrapper clips the overflowing cards.
        The section itself must stay overflow-visible for pin to work.
      */}
      <div className="overflow-hidden pb-14 lg:pb-20 px-4 md:px-8 lg:px-16">
        <div
          ref={railRef}
          className="flex gap-8"
          style={{ width: "max-content" }}
        >
          {processData.map((step, index) => (
            <div
              key={step.number}
              className="relative flex-shrink-0 w-[280px] md:w-[320px] lg:w-[340px]"
            >
              {/* Step number */}
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#2F80ED] font-semibold mb-4 block">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-[22px] md:text-[26px] font-semibold text-[#171717] leading-[1.2] mb-6 whitespace-pre-line">
                {step.title}
              </h3>



              {/* Divider */}
              <div className="w-full h-[1px] bg-[#ECECEC] mb-6" />

              {/* Bullet items */}
              <ul className="space-y-3">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#555] text-[13px] md:text-[14px] leading-snug"
                  >
                    <span className="w-[4px] h-[4px] rounded-full bg-[#2F80ED] flex-shrink-0 mt-[6px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}