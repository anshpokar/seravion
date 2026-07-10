"use client";

import Container from "@/components/ui/Container";

const AboutHero = () => {
  return (
    <section className="bg-white pt-32 lg:pt-36">

      {/* Content */}
      <Container>

        {/* Label */}
        <p className="text-[15px] text-[#555] mb-5">
          About Us
        </p>

        {/* Heading */}
        <h1
  className="
    text-[#343A40]
    font-semibold
    tracking-[-0.045em]
    leading-[1.05]
    text-[40px]
    md:text-[56px]
    lg:text-[64px]
    max-w-[720px]
  "
>
  We're Creative Design &
  <br />
  Development Agency.
</h1>

      </Container>

      {/* Hero Image */}

      <div className="mt-10 w-full h-[420px] md:h-[560px] lg:h-[700px]">

        <img
          src="/aboutus.png"
          alt="About Hero"
          className="w-full h-full object-cover"
        />

      </div>

    </section>
  );
};

export default AboutHero;