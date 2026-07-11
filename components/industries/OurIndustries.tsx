"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

const industries = [
  {
    id: "01",
    name: "SAAS",
    subtitle: "Industry Leading Scheduling Rules Engine",
    description:
      "AI follows your practice's custom scheduling rules 100% accurately every time, reducing costly human agent training time and mistakes.",
    image: "/fintech.png",
  },
  {
    id: "02",
    name: "HEALTHCARE",
    subtitle: "Industry Leading Scheduling Rules Engine",
    description:
      "AI follows your practice's custom scheduling rules 100% accurately every time, reducing costly human agent training time and mistakes.",
    image: "/healthtech.png",
  },
  {
    id: "03",
    name: "FINTECH",
    subtitle: "Smart Financial Products Built for Scale",
    description:
      "We design secure, intuitive financial products — from digital wallets to trading platforms — that build user trust and drive engagement.",
    image: "/fintech.png",
  },
  {
    id: "04",
    name: "EDTECH",
    subtitle: "Learning Experiences That Actually Work",
    description:
      "We create learning platforms that keep students engaged, instructors empowered, and administrators informed — all in one digital ecosystem.",
    image: "/edutech.png",
  },
  {
    id: "05",
    name: "AUTOMOBILE",
    subtitle: "Driving the Future of Mobility UX",
    description:
      "From connected car interfaces to dealership management systems, we design digital touchpoints that enhance the modern automotive experience.",
    image: "/cartech.png",
  },
  {
    id: "06",
    name: "ENTERPRISE",
    subtitle: "Complexity Made Simple, at Scale",
    description:
      "Large-scale enterprise applications demand both rigour and clarity. We transform complex workflows into elegant, efficient digital tools.",
    image: "/biztech.png",
  },
];

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
          <p className="header-anim text-sm text-gray-500 mb-4 font-medium">
            Industries
          </p>
          <h1 className="header-anim text-[42px] md:text-[54px] lg:text-[64px] font-bold text-[#1a1a2e] leading-[1.05] tracking-tight max-w-5xl">
            Designing SaaS that users love and businesses grow with
          </h1>
        </Container>
      </section>

      {/* ─── INDUSTRY CARDS ─── */}
      <section className="pb-20 md:pb-28" ref={cardsRef}>
        <Container>
          <div className="flex flex-col gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="industry-row w-full flex flex-col md:flex-row overflow-hidden"
                style={{ height: "340px" }}
              >
                {/* LEFT: Image with right-edge blend */}
                <div className="card-img-panel relative w-full md:w-1/2 h-48 md:h-full flex-shrink-0 overflow-hidden bg-black">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.9) saturate(1.3)" }}
                  />
                  {/* Blend gradient: fades the right edge of the image into black */}
                  <div
                    className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, #000000)",
                    }}
                  />
                </div>

                {/* RIGHT: Dark panel */}
                <div className="card-text-panel w-full md:w-1/2 h-full bg-black flex flex-col justify-center px-6 md:px-8 lg:px-10 py-8">
                  <h2 className="text-white text-[32px] md:text-[38px] lg:text-[44px] font-bold tracking-tight mb-4">
                    {industry.name}
                  </h2>
                  <p className="text-white font-semibold text-lg mb-3 leading-snug">
                    {industry.subtitle}
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default OurIndustries;
