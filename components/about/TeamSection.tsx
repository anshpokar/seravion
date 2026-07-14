"use client";

import Container from "@/components/ui/Container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const squadMembers = [
  { name: "John Richards", role: "Founder & CEO", image: "/talented squad 1.png" },
  { name: "Nicky Jones", role: "Accountant", image: "/taledted squad 2.png" },
  { name: "James Danglars", role: "PR Manager", image: "/talented squad 3.png" },
  { name: "Adam Levine", role: "Marketing Executive", image: "/about us corousel 2_talent squad 4.png" },
];

const members = [
  { image: "/talented squad 1.png", name: "Ana Dina Belić",       role: "Graphic Designer"  },
  { image: "/taledted squad 2.png", name: "Giuseppe Carbonara",   role: "Brand Strategist"  },
  { image: "/talented squad 3.png", name: "Vedran Starčić",       role: "Jr. Designer"      },
  { image: "/member4.png", name: "Izquierdo Bayà",       role: "Creative Writer"   },
  { image: "/member5.png", name: "Jared Silverman",      role: "Graphic Designer"  },
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Squad grid staggered animation
      if (gridRef.current) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Team list staggered animation
      if (listRef.current) {
        // Exclude the bottom border div from stagger if possible, or just animate all
        const listItems = Array.from(listRef.current.children);
        gsap.fromTo(
          listItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, containerRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white pt-4 lg:pt-8 pb-20 lg:pb-28 overflow-hidden">
      <Container>

        {/* Top Row: Heading and Label */}
        <div ref={headerRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 mb-12 md:mb-16 opacity-0">
          
          {/* Label */}
          <div className="md:col-span-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#2F80ED]" />
              <span className="text-[14px] md:text-[15px] font-medium text-[#171717]">
                Team
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="md:col-span-9">
            <h2 className="text-[#171717] text-[36px] md:text-[56px] lg:text-[72px] font-normal max-w-full leading-[1.2] tracking-normal">
              Meet the talented Duo, behind the creativity
            </h2>
          </div>

        </div>

        {/* Squad Grid: 4 columns */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          
          {/* 1. CEO Image */}
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[4/5] group rounded-sm opacity-0">
            <img src="/suraj.webp" alt="Founder & CEO" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/30 backdrop-blur-md p-4 lg:p-5 rounded-sm">
                <h3 className="text-white font-medium text-[16px] lg:text-[18px] mb-1">Kanhaiyalal Sonar</h3>
                <p className="text-white/80 text-[12px] lg:text-[13px]">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* 2. CEO Details */}
          <div className="bg-[#f5f5f5] p-6 lg:p-8 flex flex-col justify-center rounded-sm opacity-0 aspect-[4/5] lg:aspect-[4/5]">
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-[#171717]">Visionary Leadership</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              With extensive experience in digital innovation, Kanhaiyalal leads the vision for our transformative digital products. He believes in people-first technology.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Building innovative digital solutions that care about your business growth as much as you do."
            </p>
          </div>

          {/* 3. Advisory Image */}
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[4/5] group rounded-sm opacity-0">
            <img src="/Dhruvin.png" alt="Advisory" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/30 backdrop-blur-md p-4 lg:p-5 rounded-sm">
                <h3 className="text-white font-medium text-[16px] lg:text-[18px] mb-1">Dhruvin Shah</h3>
                <p className="text-white/80 text-[12px] lg:text-[13px]">Lead Advisor</p>
              </div>
            </div>
          </div>

          {/* 4. Advisory Details */}
          <div className="bg-[#f5f5f5] p-6 lg:p-8 flex flex-col justify-center rounded-sm opacity-0 aspect-[4/5] lg:aspect-[4/5]">
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-[#171717]">Strategic Guidance</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our advisory board brings decades of industry experience, ensuring our solutions are grounded in practical business needs and market realities.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Empowering teams with actionable insights and forward-thinking strategies."
            </p>
          </div>

        </div>

        {/* Team list
        <div ref={listRef}>
          {members.map((member) => (
            <div
              key={member.name}
              className="grid grid-cols-12 items-center py-6 md:py-8 border-t border-[#ECECEC] gap-4 group cursor-pointer opacity-0"
            >
              <div className="col-span-10 sm:col-span-6 md:col-span-5 flex items-center gap-6 md:gap-8 min-w-0 relative group/avatar">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                />
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#171717] truncate group-hover:text-[#2F80ED] transition-colors duration-200">
                  {member.name}
                </h3>

                <div className="absolute left-[80px] bottom-full mb-4 w-[220px] aspect-[3/4] rounded-md overflow-hidden opacity-0 pointer-events-none group-hover/avatar:opacity-100 group-hover/avatar:-translate-y-2 transition-all duration-300 z-50 shadow-2xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/30 backdrop-blur-md p-3 rounded-sm">
                      <h3 className="text-white font-medium text-[15px] mb-0.5">
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-[12px]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex col-span-5 md:col-span-6 justify-start pl-4 md:pl-10">
                <p className="text-[#5E5E5E] text-[14px] md:text-[15px] flex-shrink-0">
                  {member.role}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1 flex justify-end">
                <button suppressHydrationWarning className="text-[20px] md:text-[24px] text-[#171717] flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  ↗
                </button>
              </div>
            </div>
          ))}
          <div className="border-t border-[#ECECEC]" />
        </div> 
        */}

      </Container>
    </section>
  );
}