"use client";

import Container from "@/components/ui/Container";

export default function AboutStats() {
  return (
    <section className="bg-[#0F36D8] py-20 md:py-28">
      <Container>

        {/* Heading */}
        <div className="flex items-center gap-3 mb-10 md:mb-12">
          <div className="w-7 h-[2px] bg-[#63A5FF]" />
          <p className="uppercase tracking-[0.35em] text-[11px] text-[#BFD6FF]">
            Approach
          </p>
        </div>

        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium max-w-3xl mb-12 md:mb-16 leading-tight">
          We deliver creative ideas to a crowded world.
        </h2>

        {/* Cards — responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">

          <div className="bg-[#1740DD] p-8 md:p-10">
            <p className="text-[#BFD6FF] mb-4 md:mb-6 text-sm md:text-base">
              35+ Google reviews
            </p>
            <h3 className="text-white text-5xl md:text-6xl font-semibold">
              4.9
            </h3>
          </div>

          <div className="bg-[#1740DD] p-8 md:p-10">
            <p className="text-[#BFD6FF] mb-4 md:mb-6 text-sm md:text-base">
              Clients world-wide
            </p>
            <h3 className="text-white text-5xl md:text-6xl font-semibold">
              170+
            </h3>
          </div>

          <div className="bg-[#1740DD] p-8 md:p-10">
            <p className="text-[#BFD6FF] mb-4 md:mb-6 text-sm md:text-base">
              Completed projects
            </p>
            <h3 className="text-white text-5xl md:text-6xl font-semibold">
              1.7k
            </h3>
          </div>

        </div>

      </Container>
    </section>
  );
}