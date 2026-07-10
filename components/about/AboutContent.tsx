"use client";

import Container from "@/components/ui/Container";

const AboutContent = () => {
  return (
    <section className="bg-white py-20 lg:py-36">
      <Container>

        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">

          {/* Label */}
          <div className="flex-shrink-0 pt-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#2F80ED]" />
              <span className="uppercase text-[10px] tracking-[0.35em] text-[#8C8C8C] font-medium whitespace-nowrap">
                About Studio
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex-1">
            <h2 className="text-[32px] md:text-[44px] lg:text-[66px] leading-[1.08] tracking-[-0.04em] font-semibold text-[#171717] max-w-[980px]">
              Crafting digital products with a
              unique vision of making user
              experience better.
            </h2>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#ECECEC] my-12 md:my-16" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">

          {/* Bullet List */}
          <div className="flex-shrink-0 md:pl-[calc(100%/6)]">
            <ul className="space-y-4 md:space-y-5">
              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-black flex-shrink-0" />
                <span className="text-[24px] md:text-[34px] leading-none font-medium">
                  Art Direction
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-black flex-shrink-0" />
                <span className="text-[24px] md:text-[34px] leading-none font-medium">
                  Capability
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-[7px] h-[7px] rounded-full bg-black flex-shrink-0" />
                <span className="text-[24px] md:text-[34px] leading-none font-medium">
                  Sustainability
                </span>
              </li>
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="flex-1">
            <div className="space-y-8 md:space-y-10 max-w-[560px]">
              <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#5E5E5E]">
                Seravion is the first and only creative agency for your
                real exploration. It's one private place to save everything
                you can realize about digital beautifully design.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#5E5E5E]">
                As a global creative agency, we understand the importance
                of staying ahead of the game. That's why we partner with
                some of the world's best talent to bring fresh ideas.
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default AboutContent;