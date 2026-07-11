"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

const services = [
  {
    slug: "ux-ui-design",
    title: "AI-enhanced UX/UI design",
    description: "Interfaces that adapt, predict, and respond intelligently.",
    image: "/service1.png",
    bgColor: "#0933C4",
  },
  {
    slug: "custom-development",
    title: "Custom development",
    description: "Frontend + backend + AI integrations — built for performance and scalability.",
    image: "/service3.png",
    bgColor: "#08175E",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    description: "Interfaces that adapt, predict, and respond intelligently.",
    image: "/servic2.png",
    bgColor: "#0B2183",
  },
  {
    slug: "outbound-scheduling",
    title: "Outbound Scheduling Support",
    description: "Frontend + backend + AI integrations — built for performance and scalability.",
    image: "/service3.png",
    bgColor: "#030A24",
  },
  {
    slug: "appointment-reminder",
    title: "Appointment Reminder",
    description: "Frontend + backend + AI integrations — built for performance and scalability.",
    image: "/service3.png",
    bgColor: "#040605",
  },
];

export default function OurServices() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header: label + heading slide up
      const headerEls = headerRef.current?.querySelectorAll(".h-anim");
      if (headerEls?.length) {
        gsap.fromTo(
          headerEls,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out", delay: 0.1 }
        );
      }

      // 2. Service cards: staggered scale-up reveal with clip-path
      const cards = gridRef.current?.querySelectorAll(".service-card");
      cards?.forEach((card, i) => {
        const title = card.querySelector(".svc-title");
        const desc = card.querySelector(".svc-desc");
        const img = card.querySelector(".svc-img") as HTMLElement;

        gsap.set(card, { clipPath: "inset(100% 0 0% 0)", scale: 0.96 });
        gsap.set([title, desc], { y: 20, opacity: 0 });
        gsap.set(img, { scale: 1.15 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
          delay: i * 0.05,
        });

        tl.to(card, {
          clipPath: "inset(0% 0 0% 0)",
          scale: 1,
          duration: 0.75,
          ease: "expo.out",
        })
        .to(img, { scale: 1, duration: 1.2, ease: "power2.out" }, "<")
        .to([title, desc], {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
        }, "-=0.45");
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Container className="pt-24 pb-24">

      {/* Header Section */}
      <div className="mb-12" ref={headerRef}>
        <p className="h-anim text-sm text-[#555] font-medium mb-2">
          Our Services
        </p>
        <h1 className="h-anim text-[42px] md:text-[58px] lg:text-[68px] font-semibold tracking-[-0.04em] leading-[1.05] text-[#1a1a1a]">
          From idea to market,
          <br />
          we&apos;ve got you covered
        </h1>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" ref={gridRef}>
        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            className="service-card group relative w-full h-[280px] md:h-[300px] overflow-hidden p-6 md:p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-xl block"
            style={{ backgroundColor: service.bgColor }}
          >
            {/* Card Title */}
            <h3 className="svc-title text-white text-[22px] md:text-[26px] font-semibold tracking-tight">
              {service.title}
            </h3>

            {/* Bottom Content Wrapper */}
            <div className="flex justify-between items-end w-full relative z-10">
              {/* Description */}
              <p className="svc-desc text-white/80 text-[13px] md:text-[14px] max-w-[220px] leading-relaxed pb-1">
                {service.description}
              </p>

              {/* Icon Box */}
              <div className="svc-img relative w-[130px] h-[150px] md:w-[160px] md:h-[170px] rounded-lg overflow-hidden flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
    </main>
  );
}
