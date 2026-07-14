"use client";

import Container from "@/components/ui/Container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Text entrance animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
      );

      // Replicate the smooth scale animation from the landing page
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1, // Smooth scrub like the landing page
          },
        }
      );
    }, containerRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white pt-20 lg:pt-24">
      {/* Content */}
      <Container>
        <div ref={textRef}>
          {/* Label */}
          <p className="text-[15px] text-[#555] mb-5">About Us</p>

          {/* Heading */}
          <h1 className="text-[#343A40] font-semibold tracking-[-0.045em] leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px] max-w-[800px]">
            We're your Strategic Digital
            <br className="hidden md:block" />
            Engineering Partner.
          </h1>
        </div>
      </Container>

      {/* Hero Image */}
      <div className="mt-10 w-full h-[420px] md:h-[560px] lg:h-[700px] overflow-hidden">
        <img
          ref={imageRef}
          src="/aboutus.png"
          alt="About Hero"
          className="w-full h-full object-cover transform-gpu"
        />
      </div>
    </section>
  );
};

export default AboutHero;