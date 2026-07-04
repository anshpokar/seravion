"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServiceSection = () => {
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);

  const servicesData = [
    {
      title: "Brand Identity",
      desc: "Interfaces that adapt, predict, and respond intelligently.",
      image: "/service1.png",
      bgColor: "#0337c7",
    },
    {
      title: "Custom development",
      desc: "Frontend + backend + AI integrations — built for performance and scalability.",
      image: "/servic2.png",
      bgColor: "#03299e",
    },
    {
      title: "Outbound Scheduling Support",
      desc: "Automate scheduling and save hours of administrative work daily.",
      image: "/service1.png",
      bgColor: "#08226b",
    },
    {
      title: "Appointment Reminder",
      desc: "Frontend + backend + AI integrations — built for performance and scalability.",
      image: "/servic2.png",
      bgColor: "#04113e",
    },
    {
      title: "AI-enhanced UX/UI design",
      desc: "Interfaces that adapt, predict, and respond intelligently.",
      image: "/service3.png",
      bgColor: "#050809",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");

      gsap.set(cards.slice(1), { yPercent: 100, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollWrapperRef.current,
          start: "top top",
          end: "+=300%", 
          pin: true,
          scrub: 1,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Step 1: Card 2 animates in
      tl.to(cards[1], {
        yPercent: 0,
        y: 80,
        ease: "none",
      }, "step-1");

      // Step 2: Cards 3, 4, 5 animate in TOGETHER
      tl.to([cards[2], cards[3], cards[4]], {
        yPercent: 0,
        y: (i, target) => {
          const cardIndex = cards.indexOf(target);
          return cardIndex * 80;
        },
        ease: "none",
      }, "step-2");

      // Pause at the end
      tl.to({}, { duration: 1 });

    }, scrollWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollWrapperRef} className="relative w-full overflow-hidden bg-white">
      <section className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
        
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between px-12 md:px-24 pt-[10vh] pb-24 md:pb-32 bg-white z-50">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-3 h-1.5 bg-blue-500 rounded-full"></span>
              <p className="text-[12px] tracking-[0.2em] text-gray-800 uppercase font-semibold">
                Our Services
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black tracking-tighter leading-[1.1] max-w-2xl">
              From motion design <br />
              to AI-powered <br />
              products
            </h2>
          </div>
          
          <div>
            <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-xl">
              we design and build interfaces for the future.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full relative bg-white overflow-hidden flex items-end"> 
          {/* Removed pl-6/pl-10 so container hits center, kept h-[90%] for your header room */}
          <div className="relative w-full h-[90%] pr-0 overflow-hidden"> 
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="service-card absolute inset-0 w-full h-full"
                style={{ zIndex: index + 1 }}
              >
                <div 
                  className="w-full h-[320px] xl:h-[380px] shadow-[-15px_0_30px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-between pt-6 md:pt-8 px-8 md:px-12 pb-8 md:pb-12 relative"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {/* Top Text */}
                  <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-white tracking-wide">
                    {item.title}
                  </h3>

                  {/* Bottom Content */}
                  <div className="flex justify-between items-end relative z-10">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[200px] md:max-w-[250px]">
                      {item.desc}
                    </p>
                    
                    <div className="w-28 h-28 md:w-40 md:h-40 xl:w-[200px] xl:h-[200px] absolute bottom-0 right-0 md:translate-x-4 md:translate-y-4">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain object-bottom right-0" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;