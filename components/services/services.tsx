// ==========================
// FILE: components/services/services.tsx
// ==========================
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const data = [
  {
    number: "01",
    title: "2,000+",
    desc1: "Projects Launched",
    image: "/image.png",
  },
  {
    number: "02",
    title: "5+",
    desc1: "Countries served",
    image: "/countriesServed.png",
  },
  {
    number: "03",
    title: "15+",
    desc1: "Years of Excellence",
    image: "/exceelence.png",
  },
  {
    number: "04",
    title: "98%",
    desc1: "Client Retention",
    image: "/retyention.png",
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
        panel.removeEventListener(
          "mouseenter",
          (panel as any).__enter
        );
        panel.removeEventListener(
          "mouseleave",
          (panel as any).__leave
        );
      });
    };
  }, []);

  return (
    <section className="w-full h-[calc(100vh-176px)] min-h-[500px] flex overflow-hidden">
      {/* LEFT TEXT */}
      <div className="w-[32%] bg-[#efefef] flex pt-12 pl-32 xl:pl-40 pr-8">
        <h1 className="text-[64px] leading-[1.1] font-semibold text-black tracking-tight">
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
            className={`flex-[1] relative cursor-pointer flex items-center justify-center text-center p-8 text-white
              ${
                i === 0
                  ? "bg-[#2f7df6]"
                  : i === 1
                  ? "bg-[#1c3faa]"
                  : i === 2
                  ? "bg-[#102a83]"
                  : "bg-[#061a5c]"
              }
            `}
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
              <h2 className="text-6xl xl:text-7xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="text-xl opacity-90">{item.desc1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;