// ==========================
// FILE: components/services/services.tsx
// ==========================
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const data = [
  {
    number: "01",
    title: "2,000+",
    desc1: "Projects Launched",
    image: "/image.png",
    bgClass: "bg-[#2f7df6]",
    bgHex: "#2f7df6",
  },
  {
    number: "02",
    title: "5+",
    desc1: "Countries served",
    image: "/countriesServed.png",
    bgClass: "bg-[#1c3faa]",
    bgHex: "#1c3faa",
  },
  {
    number: "03",
    title: "15+",
    desc1: "Years of Excellence",
    image: "/exceelence.png",
    bgClass: "bg-[#102a83]",
    bgHex: "#102a83",
  },
  {
    number: "04",
    title: "98%",
    desc1: "Client Retention",
    image: "/retyention.png",
    bgClass: "bg-[#061a5c]",
    bgHex: "#061a5c",
  },
];

const Services = () => {
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);
  const bgRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const panels = panelsRef.current;
    const contents = contentsRef.current;

    const handleEnter = (activeIndex: number) => {
      panels.forEach((panel, index) => {
        gsap.killTweensOf(panel);
        gsap.killTweensOf(contents[index]);
        if (bgRefs.current[index]) gsap.killTweensOf(bgRefs.current[index]);

        gsap.to(panel, {
          flex: index === activeIndex ? 3 : 0.6,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(contents[index], {
          opacity: index === activeIndex ? 1 : 0,
          y: index === activeIndex ? 0 : 24,
          duration: 0.4,
          ease: "power3.out",
        });

        if (bgRefs.current[index]) {
          gsap.to(bgRefs.current[index], {
            opacity: index === activeIndex ? 1 : 0,
            duration: index === activeIndex ? 0.15 : 0.4,
            ease: "power3.out",
          });
        }
      });
    };

    const handleLeave = () => {
      panels.forEach((panel, index) => {
        gsap.killTweensOf(panel);
        gsap.killTweensOf(contents[index]);
        if (bgRefs.current[index]) gsap.killTweensOf(bgRefs.current[index]);

        gsap.to(panel, {
          flex: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(contents[index], {
          opacity: 0,
          y: 24,
          duration: 0.3,
          ease: "power3.out",
        });

        if (bgRefs.current[index]) {
          gsap.to(bgRefs.current[index], {
            opacity: 0,
            duration: 0.4,
            ease: "power3.out",
          });
        }
      });
    };

    panels.forEach((panel, index) => {
      const enter = () => handleEnter(index);
      const leave = () => handleLeave();

      panel.addEventListener("mouseenter", enter);
      panel.addEventListener("mouseleave", leave);

      (panel as any).__enter = enter;
      (panel as any).__leave = leave;
    });

    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("mouseenter", (panel as any).__enter);
        panel.removeEventListener("mouseleave", (panel as any).__leave);
      });
    };
  }, []);

  return (
    <section className="w-full">

      {/* ── MOBILE: 2×2 stat grid (hidden on md+) ── */}
      <div className="md:hidden bg-[#efefef] py-10 px-6">
        {/* Section heading */}
        <h2 className="text-[42px] leading-[1.1] font-semibold text-black tracking-tight mb-8">
          Proven <br />
          Results. <br />
          <span className="text-[#2f7df6]">Powerful</span> <br />
          <span className="text-[#2f7df6]">Impact.</span>
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {data.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-sm flex flex-col justify-between p-5 min-h-[160px]"
              style={{ backgroundColor: item.bgHex }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4), transparent), url(${item.image})` }}
              />
              <span className="relative z-10 text-white/80 text-sm font-medium">{item.number}</span>
              <div className="relative z-10">
                <p className="text-white text-4xl font-bold leading-none mb-1">{item.title}</p>
                <p className="text-white/80 text-sm">{item.desc1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: horizontal accordion (hidden below md) ── */}
      <div className="hidden md:flex w-full" style={{ height: "calc(100vh - 176px)", minHeight: "500px" }}>
        {/* LEFT TEXT */}
        <div className="w-[32%] bg-[#efefef] flex pt-12 pl-6 md:pl-10 lg:pl-12 pr-8">
          <h1 className="text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] font-semibold text-black tracking-tight">
            Proven <br />
            Results. <br />
            <span className="text-[#2f7df6]">Powerful</span> <br />
            <span className="text-[#2f7df6]">Impact.</span>
          </h1>
        </div>

        {/* PANELS */}
        <div className="flex-1 flex">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) panelsRef.current[i] = el;
              }}
              className={`flex-[1] relative cursor-pointer flex items-center justify-center text-center p-8 text-white ${item.bgClass}`}
            >
              {/* BACKGROUND IMAGE (Revealed on hover) */}
              <div
                ref={(el) => {
                  if (el) bgRefs.current[i] = el;
                }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 z-0"
                style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4), transparent), url(${item.image})` }}
              />

              {/* NUMBER */}
              <span className="absolute top-12 left-12 text-xl font-medium opacity-90 z-10">
                {item.number}
              </span>

              {/* BOTTOM LEFT CONTENT */}
              <div
                ref={(el) => {
                  if (el) contentsRef.current[i] = el;
                }}
                className="opacity-0 translate-y-6 flex flex-col items-start text-left absolute bottom-12 left-12 z-10"
              >
                <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2">
                  {item.title}
                </h2>

                <p className="text-lg xl:text-xl opacity-90">{item.desc1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;