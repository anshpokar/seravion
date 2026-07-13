"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

const services = [
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Solutions",
    description: "Embed intelligence into every layer with predictive analytics, NLP, and custom AI models.",
    image: "/s2.png",
    bgColor: "#0933C4",
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    description: "End-to-end applications built for speed, scalability, and robust performance.",
    image: "/s9.png",
    bgColor: "#08175E",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Intuitive, high-performance native and cross-platform mobile experiences.",
    image: "/s6.png",
    bgColor: "#0B2183",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Fast, scalable web apps built on the modern stack for long-term maintainability.",
    image: "/s4.png",
    bgColor: "#030A24",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Services",
    description: "Cloud-native infrastructure engineered for security, speed, and cost efficiency.",
    image: "/s3.png",
    bgColor: "#040605",
  },
  {
    slug: "erp-crm-development",
    title: "ERP & CRM Development",
    description: "Eliminate operational silos, automate business processes, and gain real-time visibility.",
    image: "/s10.png",
    bgColor: "#0933C4",
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    description: "Launch your SaaS product with the infrastructure, architecture, and product thinking it needs to grow.",
    image: "/s8.png",
    bgColor: "#08175E",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Design systems and experiences that convert, delight, and scale.",
    image: "/service1.png",
    bgColor: "#0B2183",
  },
  {
    slug: "iot-solutions",
    title: "IoT Solutions",
    description: "End-to-end IoT solutions from embedded firmware to cloud connectivity.",
    image: "/servic2.png",
    bgColor: "#030A24",
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    description: "Full lifecycle engineering for digital products, from ideation to global launch.",
    image: "/s12.png",
    bgColor: "#040605",
  },
  {
    slug: "dedicated-development-teams",
    title: "Dedicated Development Teams",
    description: "Access a pre-vetted, instantly deployable team of senior engineers and product specialists.",
    image: "/s13.png",
    bgColor: "#0933C4",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description: "Modernize legacy systems, implement automation, and digitize core operations.",
    image: "/service3.png",
    bgColor: "#08175E",
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    description: "Comprehensive maintenance, monitoring, and enhancement services for mission-critical systems.",
    image: "/s1.png",
    bgColor: "#0B2183",
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
                  sizes="(max-width: 768px) 130px, 160px"
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
