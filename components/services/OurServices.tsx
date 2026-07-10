"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";

const services = [
  {
    title: "AI-enhanced UX/UI design",
    description: "Interfaces that adapt, predict, and respond intelligently.",
    image: "/service1.png",
    bgColor: "#0933C4", // Bright blue
  },
  {
    title: "Custom development",
    description: "Frontend + backend + AI integrations — built for performance and scalability.",
    image: "/service3.png",
    bgColor: "#08175E", // Dark blue
  },
  {
    title: "Brand Identity",
    description: "Interfaces that adapt, predict, and respond intelligently.",
    image: "/servic2.png",
    bgColor: "#0B2183", // Medium-dark blue
  },
  {
    title: "Outbound Scheduling Support",
    description: "Frontend + backend + AI integrations — built for performance and scalability.",
    image: "/service3.png",
    bgColor: "#030A24", // Very dark blue
  },
  {
    title: "Appointment Reminder",
    description: "Frontend + backend + AI integrations — built for performance and scalability.",
    image: "/service3.png",
    bgColor: "#040605", // Almost black
  },
];

export default function OurServices() {
  return (
    <main className="bg-white min-h-screen">
      <Container className="pt-24 pb-24">
      {/* Header Section */}
      <div className="mb-12">
        <p className="text-sm text-[#555] font-medium mb-2">
          Our Services
        </p>
        <h1 className="text-[42px] md:text-[58px] lg:text-[68px] font-semibold tracking-[-0.04em] leading-[1.05] text-[#1a1a1a]">
          From idea to market,
          <br />
          we've got you covered
        </h1>
      </div>

      {/* Custom Cards Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative w-full h-[280px] md:h-[300px] overflow-hidden p-6 md:p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: service.bgColor }}
          >
            {/* Card Title */}
            <h3 className="text-white text-[22px] md:text-[26px] font-semibold tracking-tight">
              {service.title}
            </h3>

            {/* Bottom Content Wrapper */}
            <div className="flex justify-between items-end w-full relative z-10">
              {/* Description */}
              <p className="text-white/80 text-[13px] md:text-[14px] max-w-[220px] leading-relaxed pb-1">
                {service.description}
              </p>

              {/* Icon Box */}
              <div className="relative w-[130px] h-[150px] md:w-[160px] md:h-[170px] rounded-lg overflow-hidden flex-shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </main>
  );
}
