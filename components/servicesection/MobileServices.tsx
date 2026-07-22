"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

export default function MobileServices() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const servicesData = [
    {
      title: "AI & Machine Learning Solutions",
      desc: "Embed intelligence into every layer with predictive analytics, NLP, and custom AI models.",
      image: "/service1.png",
      bgColor: "#0337c7",
    },
    {
      title: "Full Stack Development",
      desc: "End-to-end applications built for speed, scalability, and robust performance.",
      image: "/servic2.png",
      bgColor: "#03299e",
    },
    {
      title: "Mobile App Development",
      desc: "Intuitive, high-performance native and cross-platform mobile experiences.",
      image: "/service3.png",
      bgColor: "#08226b",
    },
    {
      title: "Web Development",
      desc: "Fast, scalable web apps built on the modern stack for long-term maintainability.",
      image: "/s4.png",
      bgColor: "#04113e",
    },
    {
      title: "Cloud & DevOps Services",
      desc: "Cloud-native infrastructure engineered for security, speed, and cost efficiency.",
      image: "/service3.png",
      bgColor: "#050809",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        containerRef.current.querySelectorAll(".m-service-card")
      );

      if (cards.length === 0) return;

      // Card 0 starts visible at top
      gsap.set(cards[0], { opacity: 1, yPercent: 0, y: 0 });

      // Cards 1..4 start offscreen at bottom with opacity 0 so they don't leak below
      gsap.set(cards.slice(1), { opacity: 0, yPercent: 100, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80px",
          end: "+=320%",
          pin: true,
          scrub: 0.8,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Sequential entrance from bottom of section
      // Card 1 (Full Stack)
      tl.to(cards[1], {
        opacity: 1,
        yPercent: 0,
        y: 48,
        ease: "none",
        duration: 1,
      });

      // Card 2 (Mobile App)
      tl.to(cards[2], {
        opacity: 1,
        yPercent: 0,
        y: 96,
        ease: "none",
        duration: 1,
      });

      // Card 3 (Web Dev)
      tl.to(cards[3], {
        opacity: 1,
        yPercent: 0,
        y: 144,
        ease: "none",
        duration: 1,
      });

      // Card 4 (Cloud & DevOps — Last Card)
      tl.to(cards[4], {
        opacity: 1,
        yPercent: 0,
        y: 192,
        ease: "none",
        duration: 1,
      });

      // Hold space so the last card remains fully visible on screen before unpinning
      tl.to({}, { duration: 1 });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white pt-4 pb-12 px-4 min-h-screen flex flex-col justify-start"
    >
      <Container>
        {/* HEADER SECTION */}
        <div className="m-service-header flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>
            <p className="text-[10px] tracking-[0.2em] text-gray-800 uppercase font-semibold">
              Our Services
            </p>
          </div>
          <h2 className="text-3xl font-bold text-black tracking-tight leading-[1.1]">
            From motion design <br />
            to AI-powered products
          </h2>
          <p className="text-gray-600 text-xs leading-relaxed max-w-sm mt-1">
            we design and build interfaces for the future.
          </p>
        </div>

        {/* CARDS CONTAINER (WEB MATCHING STACK FRAME) */}
        <div className="relative w-full h-[500px] overflow-hidden">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="m-service-card absolute top-0 left-0 right-0 w-full h-[250px] shadow-lg overflow-hidden flex flex-col justify-between p-5 text-white rounded-none"
              style={{
                backgroundColor: item.bgColor,
                zIndex: index + 1,
                willChange: "transform, opacity",
              }}
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide mb-1">
                  {item.title}
                </h3>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <p className="text-gray-300 text-xs leading-relaxed max-w-[180px]">
                  {item.desc}
                </p>

                <div className="w-24 h-24 absolute bottom-0 right-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain object-right-bottom"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
