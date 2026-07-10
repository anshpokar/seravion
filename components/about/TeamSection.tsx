"use client";

import Container from "@/components/ui/Container";

export default function TeamSection() {
  const members = [
    {
      image: "/member1.png",
      name: "Ana Dina Belić",
      role: "Graphic Designer",
    },
    {
      image: "/member2.png",
      name: "Giuseppe Carbonara",
      role: "Brand Strategist",
    },
    {
      image: "/member3.png",
      name: "Vedran Starčić",
      role: "Jr. Designer",
    },
    {
      image: "/member4.png",
      name: "Izquierdo Bayà",
      role: "Creative Writer",
    },
    {
      image: "/member5.png",
      name: "Jared Silverman",
      role: "Graphic Designer",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-16 md:mb-20">

          <div className="flex-shrink-0 pt-1">
            <div className="flex items-center gap-3">
              <div className="w-7 h-[2px] bg-[#2F80ED]" />
              <span className="uppercase tracking-[0.35em] text-[11px] text-[#8C8C8C]">
                Team
              </span>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-[36px] md:text-[52px] lg:text-[66px] leading-[1.05] tracking-[-0.05em] font-medium text-[#222] max-w-[760px]">
              Meet the talented squad,
              behind the creativity
            </h2>
          </div>

        </div>

        {/* Team collage */}
        <img
          src="/team.png"
          alt="Team"
          className="w-full mb-12 md:mb-16"
        />

        {/* Team List */}
        <div>
          {members.map((member) => (
            <div
              key={member.name}
              className="flex items-center justify-between py-6 md:py-8 border-t border-[#ECECEC] gap-4"
            >
              <div className="flex items-center gap-4 md:gap-5 min-w-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                />
                <h3 className="text-[18px] md:text-[28px] font-medium text-[#222] truncate">
                  {member.name}
                </h3>
              </div>

              <p className="text-[#777] text-[14px] md:text-[18px] flex-shrink-0 hidden sm:block">
                {member.role}
              </p>

              <button className="text-xl md:text-[28px] transition hover:translate-x-1 hover:-translate-y-1 flex-shrink-0">
                ↗
              </button>
            </div>
          ))}

          <div className="border-b border-[#ECECEC]" />
        </div>

      </Container>
    </section>
  );
}