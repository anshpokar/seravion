"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MobileIndustries from "./MobileIndustries";

const industries = [
  { name: "Healthcare", slug: "healthcare-healthtech", image: "/industries1.png" },
  { name: "FinTech", slug: "fintech-financial-services", image: "/industries2.png" },
  { name: "SaaS & Cloud", slug: "saas-cloud-products", image: "/industries3.png" },
  { name: "EdTech", slug: "edtech-learning-platforms", image: "/industries2.png" },
  { name: "Real Estate", slug: "real-estate-proptech", image: "/industries4.png" },
  { name: "HR Tech", slug: "hr-tech-future-of-work", image: "/industries6.png" },
];

const Industries = () => {
  const [activeItem, setActiveItem] = useState<string>(industries[0].name);

  return (
    <div className="w-full bg-[#0a121e]">
      {/* MOBILE VIEW (< 1024px) */}
      <div className="block lg:hidden">
        <MobileIndustries />
      </div>

      {/* DESKTOP VIEW (>= 1024px) */}
      <div className="hidden lg:block">
        <div className="h-[200vh]">
          <section className="sticky top-0 h-screen w-full bg-[#0a121e] text-white flex items-center overflow-hidden">
            <Container className="py-10 h-full flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-[35%_35%_30%] gap-6 w-full py-10 h-full max-h-[90vh] items-center">
                {/* LEFT COLUMN: Static Content */}
                <div className="flex flex-col justify-between h-full py-4">
                  <div>
                    <div className="flex items-center gap-3 mb-6 md:mb-10">
                      <div className="w-4 h-[7px] rounded-full bg-[#1E90FF]" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                        Industries
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight">
                      From motion design <br /> to AI-powered <br /> products
                    </h2>
                  </div>

                  <p className="text-gray-500 text-sm md:text-base max-w-[240px] leading-relaxed">
                    we design and build interfaces for the future.
                  </p>
                </div>

                {/* MIDDLE COLUMN: Interactive List */}
                <div className="flex flex-col border-l border-white/10 pl-8 md:pl-12 justify-center h-full">
                  {industries.map((item) => (
                    <Link
                      key={item.name}
                      href={`/industries/${item.slug}`}
                      onMouseEnter={() => setActiveItem(item.name)}
                      className="relative group py-4 md:py-6 cursor-pointer transition-colors duration-300 block"
                    >
                      <h3
                        className={`text-2xl md:text-3xl lg:text-[40px] font-bold transition-all duration-500 ease-out ${
                          activeItem === item.name
                            ? "text-white translate-x-2"
                            : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </h3>

                      <div className="absolute bottom-0 left-0 w-[70%] h-[1px] bg-white/10" />
                    </Link>
                  ))}
                </div>

                {/* RIGHT COLUMN: Industry Image */}
                <div className="hidden md:flex items-center justify-end relative h-full">
                  <div className="relative w-full max-h-[750px] aspect-[4/5] overflow-hidden rounded-sm">
                    {industries.map((item) => (
                      <img
                        key={item.name}
                        src={item.image}
                        alt={item.name}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                          activeItem === item.name ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none" />

                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_70px_#0a121e]" />
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_20px_#0a121e]" />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Industries;