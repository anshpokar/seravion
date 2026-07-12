"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import type { IndustryData } from "@/lib/industryData";
import Container from "@/components/ui/Container";

interface Props {
  industry: IndustryData;
}

export default function IndustryDetail({ industry }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Header fade-up on load
      const hEls = headerRef.current?.querySelectorAll(".h-anim");
      if (hEls?.length) {
        gsap.fromTo(
          hEls,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: "power3.out", delay: 0.15 }
        );
      }

      // Content paragraphs fade up
      const cEls = contentRef.current?.querySelectorAll(".c-anim");
      if (cEls?.length) {
        gsap.fromTo(
          cEls,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: contentRef.current, start: "top 82%" },
          }
        );
      }

      // Results counters
      const resultEls = resultsRef.current?.querySelectorAll(".result-item");
      if (resultEls?.length) {
        gsap.fromTo(
          resultEls,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.12, duration: 0.65, ease: "power3.out",
            scrollTrigger: { trigger: resultsRef.current, start: "top 85%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, [industry.slug]);

  return (
    <main className="bg-white min-h-screen">

      {/* ─── HERO HEADER ─── */}
      <section className="pt-28 pb-0" ref={headerRef}>
        <Container>
          <p className="h-anim text-sm text-[#888] font-medium mb-3 tracking-wide uppercase">
            {industry.name}
          </p>
          <h1 className="h-anim text-[38px] md:text-[54px] lg:text-[62px] font-bold text-[#1a1a1a] tracking-tight leading-[1.05] mb-10 max-w-3xl">
            {industry.tagline}
          </h1>
        </Container>

        {/* Full-width hero image */}
        <div
          className="h-anim w-full relative overflow-hidden"
          style={{ height: "clamp(400px, 50vh, 640px)" }}
        >
          <Image
            src={industry.heroImage}
            alt={industry.name}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Subtle dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </section>

      {/* ─── MAIN BODY: LEFT TEXT + RIGHT SIDEBAR ─── */}
      <section className="pt-14 pb-16 md:pb-24" ref={contentRef}>
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

            {/* LEFT: Main content */}
            <div className="flex-1 min-w-0">

              {/* Challenge */}
              <div className="c-anim mb-10">
                {industry.challenge.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#444] text-[15px] leading-[1.85] mb-5">
                    {p}
                  </p>
                ))}
              </div>

              {/* Our Role */}
              <div className="c-anim">
                <h2 className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] mb-5">
                  {industry.ourRole.heading}
                </h2>
                {industry.ourRole.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#444] text-[15px] leading-[1.85] mb-5">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT: Sidebar — related industries */}
            <div className="lg:w-[280px] xl:w-[320px] flex-shrink-0">
              <div className="sticky top-28">
                <div className="flex flex-col divide-y divide-[#e8e8e8]">
                  {industry.relatedIndustries.map((rel) => {
                    const isActive = rel.slug === industry.slug;
                    return (
                      <Link
                        key={rel.slug}
                        href={`/industries/${rel.slug}`}
                        className={`group flex items-center justify-between py-4 transition-colors duration-200 ${
                          isActive
                            ? "text-[#1a1a1a] pointer-events-none"
                            : "text-[#999] hover:text-[#1a1a1a]"
                        }`}
                      >
                        <span
                          className={`text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 ${
                            isActive ? "text-[#1a1a1a]" : "text-[#bbb] group-hover:text-[#1a1a1a]"
                          }`}
                        >
                          {rel.name}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className={`transition-all duration-200 flex-shrink-0 ${
                            isActive
                              ? "text-[#1a1a1a]"
                              : "text-[#ccc] group-hover:text-[#1a1a1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="py-14 md:py-20 bg-[#1A3FD8]" ref={resultsRef}>
        <Container>
          <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-3">
            Impact
          </p>
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-14">
            Results that speak for themselves
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
            {industry.results.map((result, i) => (
              <div key={i} className="result-item flex flex-col md:px-10 first:pl-0">
                <span className="text-[40px] md:text-[52px] font-bold text-white leading-none mb-2">
                  {result.metric}
                </span>
                <span className="text-white/60 text-[13px] leading-snug">
                  {result.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-sm text-[#888] font-medium tracking-widest uppercase mb-3">
                Ready to start?
              </p>
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#1a1a1a] leading-tight max-w-xl">
                Let's build something great in {industry.name} together.
              </h2>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-[#1A3FD8] hover:bg-[#1532b0] text-white font-bold text-[15px] px-8 py-4 transition-colors duration-300 inline-flex items-center gap-2 group"
            >
              Get in Touch
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Container>
      </section>

    </main>
  );
}
