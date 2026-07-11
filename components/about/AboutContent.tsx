"use client";

import Container from "@/components/ui/Container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

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
      ).fromTo(
        bottomRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }, containerRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white pt-8 lg:pt-12 pb-8 lg:pb-12 overflow-hidden">
      <Container>

        {/* Top Row */}
        <div ref={headerRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 opacity-0">

          {/* Label */}
          <div className="md:col-span-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#2F80ED]" />
              <span className="uppercase text-[11px] md:text-[12px] tracking-[0.35em] text-[#8C8C8C] font-medium whitespace-nowrap">
                About Studio
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="md:col-span-9">
            <h2 className="text-[32px] md:text-[44px] lg:text-[66px] leading-[1.08] tracking-[-0.04em] font-semibold text-[#171717] max-w-[980px]">
              Crafting digital products with a<br className="hidden lg:block" />
              unique vision of making user<br className="hidden lg:block" />
              experience better.
            </h2>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#ECECEC] my-12 md:my-16" />

        {/* Bottom Row */}
        <div ref={bottomRef} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 opacity-0">

          {/* Empty space aligning with the Label column */}
          <div className="hidden md:block md:col-span-3" />

          {/* Bullet List (Aligns perfectly with Heading) */}
          <div className="md:col-span-4">
            <ul className="space-y-4 md:space-y-5">
              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#1a1a1a] flex-shrink-0" />
                <span className="text-[24px] md:text-[32px] leading-none font-medium text-[#1a1a1a]">
                  Art Direction
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#1a1a1a] flex-shrink-0" />
                <span className="text-[24px] md:text-[32px] leading-none font-medium text-[#1a1a1a]">
                  Capability
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#1a1a1a] flex-shrink-0" />
                <span className="text-[24px] md:text-[32px] leading-none font-medium text-[#1a1a1a]">
                  Sustainability
                </span>
              </li>
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="md:col-span-5">
            <div className="space-y-8 md:space-y-10 max-w-[500px]">
              <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#5E5E5E]">
                Seravion is the first and only creative agency for your
                real exploration. It's one private place to save everything
                you can realize about digital beautifully design.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#5E5E5E]">
                As a global creative agency, we understand the importance
                of staying ahead of the game. That's why we partner with
                some of the world's best talent to bring fresh ideas.
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default AboutContent;