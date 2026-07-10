"use client";

import Container from "@/components/ui/Container";

export default function AboutClients() {
  return (
    <section className="bg-white py-16 md:py-24">

      {/* Heading */}
      <Container>
        <div className="max-w-[900px] mx-auto text-center px-4">
          <h2 className="text-[#2E2E2E] text-[32px] md:text-[44px] lg:text-[54px] leading-[1.1] font-medium">
            Help to brands growing up and show their
            <br />
            success stories to the world
          </h2>
        </div>
      </Container>

      {/* Logo Strip — full width */}
      <div className="w-full overflow-hidden py-12">
        <img
          src="/logostripabout.png"
          alt="Client Logos"
          className="w-full object-contain"
        />
      </div>

    </section>
  );
}