"use client";

import Container from "@/components/ui/Container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processData = [
  {
    title: (
      <>
        Problem
        <br />
        discovery
      </>
    ),
    items: [
      "Usability Studies",
      "User Interviews",
      "Stakeholder Interviews",
      "Competitive Research",
      "Insights Report",
      "User Journey",
    ],
  },
  {
    title: (
      <>
        Design
        <br />
        system ready
      </>
    ),
    items: [
      "Thinking Workshops",
      "Sitemaps",
      "Concepts",
      "Designs",
      "Prototypes",
      "Usability Studies",
    ],
  },
  {
    title: (
      <>
        Design
        <br />
        implementation
      </>
    ),
    items: [
      "Design",
      "Use Cases",
      "User Flows",
      "Various User Types",
      "Annotations",
      "Interactions",
    ],
  },
];

export default function AboutProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Animate top header
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate divider
      tl.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      // Animate process steps
      if (stepsRef.current) {
        const stepItems = Array.from(stepsRef.current.children);
        
        tl.fromTo(
          stepItems,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
          "-=0.4"
        );

        // Animate arrows after steps appear
        const arrows = gsap.utils.toArray('.process-arrow');
        tl.fromTo(
          arrows,
          { opacity: 0, scaleX: 0, transformOrigin: "left center" },
          { opacity: 1, scaleX: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" },
          "-=0.6"
        );
      }
    }, containerRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white pt-4 lg:pt-10 pb-10 lg:pb-16 overflow-hidden">
      <Container>
        {/* Top Row */}
        <div ref={headerRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 opacity-0">
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
              Method of making better result
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="border-t border-[#ECECEC] my-12 md:my-16" />

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">
          {/* Empty space aligning with the Label column */}
          <div className="hidden md:block md:col-span-3" />

          {/* Process Steps */}
          <div className="md:col-span-9">
            <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8 relative">
              {processData.map((step, index) => (
                <div key={index} className="relative z-10 opacity-0">
                  <div className="relative">
                    <h3 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium text-[#171717] leading-[1.2] mb-8">
                      {step.title}
                    </h3>

                    {/* Long Arrow (Only between items) */}
                    {index !== 2 && (
                      <div className="process-arrow hidden sm:block absolute top-[14px] left-[110px] md:left-[120px] lg:left-[160px] w-[80px] md:w-[110px] lg:w-[170px] z-[-1] pointer-events-none opacity-0">
                        <svg
                          viewBox="0 0 100 10"
                          preserveAspectRatio="none"
                          className="w-full h-[10px] text-[#171717] stroke-current"
                          overflow="visible"
                        >
                          <line x1="0" y1="5" x2="100" y2="5" strokeWidth="1.5" />
                          <polyline points="93,1 100,5 93,9" fill="none" strokeWidth="1.5" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[#555] text-[13px] md:text-[14px] leading-snug"
                      >
                        <span className="w-[4px] h-[4px] rounded-full bg-[#171717] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}