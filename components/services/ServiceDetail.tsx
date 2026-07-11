"use client";

import Image from "next/image";
import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";
import type { ServiceData } from "@/lib/serviceData";
import Container from "@/components/ui/Container";

interface Props {
  service: ServiceData;
}

export default function ServiceDetail({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {

      // Header elements slide up on load
      const hEls = headerRef.current?.querySelectorAll(".h-anim");
      if (hEls?.length) {
        gsap.fromTo(hEls, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: "power3.out", delay: 0.15,
        });
      }

      // What We Do cards — curtain reveal
      const wdCards = whatWeDoRef.current?.querySelectorAll(".wd-card");
      wdCards?.forEach((card, i) => {
        gsap.fromTo(card,
          { clipPath: "inset(100% 0 0% 0)", y: 0 },
          {
            clipPath: "inset(0% 0 0% 0)",
            duration: 0.8, ease: "expo.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
      });

      // Overview text columns fade up
      const overviewEls = overviewRef.current?.querySelectorAll(".ov-anim");
      if (overviewEls?.length) {
        gsap.fromTo(overviewEls, { y: 35, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: overviewRef.current, start: "top 80%" },
        });
      }

      // Offer cards stagger in
      const offerCards = offerRef.current?.querySelectorAll(".offer-card");
      if (offerCards?.length) {
        gsap.fromTo(offerCards,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: offerRef.current, start: "top 82%" },
          }
        );
      }

      // Process steps slide up with stagger
      const stepEls = processRef.current?.querySelectorAll(".step-card");
      if (stepEls?.length) {
        gsap.fromTo(stepEls,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.65, ease: "power3.out",
            scrollTrigger: { trigger: processRef.current, start: "top 82%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, [service.slug]);

  return (
    <main className="bg-white min-h-screen">

      {/* ─── HERO HEADER ─── */}
      <section className="pt-28 pb-0" ref={headerRef}>
        <Container>
          <p className="h-anim text-sm text-[#555] font-medium mb-3">
            {service.category}
          </p>
          <h1 className="h-anim text-[40px] md:text-[56px] lg:text-[64px] font-bold text-[#1a1a1a] tracking-tight leading-[1.05] mb-4">
            {service.title}
          </h1>
          <p className="h-anim text-[#555] text-lg md:text-xl mb-10">
            {service.subtitle}
          </p>
        </Container>

        {/* Full-width Banner */}
        <div className="h-anim w-full h-[320px] md:h-[420px] lg:h-[480px] relative overflow-hidden">
          <Image
            src={service.bannerImage}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Blue credibility bar */}
        <div className="bg-[#1A3FD8] w-full py-4">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-white text-sm">
              <span className="text-white/70 whitespace-nowrap">We are a proud member, of the :</span>
              <span className="flex items-center gap-2">✓ Association of Trusted Business Consultants</span>
              <span className="flex items-center gap-2">✓ A+ BBB Rated – Arkansas</span>
            </div>
          </Container>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="pt-12 pb-14">
        <Container>
          <h2 className="text-center text-[32px] md:text-[40px] font-bold text-[#1a1a1a] mb-8">
            What We Do
          </h2>
        </Container>

        {/* Infinite horizontal scroll carousel */}
        <div className="overflow-hidden w-full" ref={whatWeDoRef}>
          <div
            className="flex gap-4 w-max pl-6"
            style={{ animation: "wd-scroll 18s linear infinite" }}
          >
            {/* Duplicate items 3× for seamless loop */}
            {[...service.whatWeDo, ...service.whatWeDo, ...service.whatWeDo].map((item, i) => (
              <div
                key={i}
                className="wd-card relative flex-shrink-0 overflow-hidden"
                style={{
                  width: "clamp(260px, 29vw, 400px)",
                  height: "400px",
                }}
              >
                {/* Image fills the full card */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />

                {/* White info panel overlaid at the bottom */}
                <div
                  className="absolute bottom-5 left-5 right-5 bg-white px-6 py-6 h-[140px] flex flex-col justify-start"
                >
                  <h3 className="text-[18px] font-bold text-[#122820] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#666] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyframe injection */}
        <style>{`
          @keyframes wd-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* ─── SERVICE OVERVIEW ─── */}
      <section className="pt-4 md:pt-6 pb-10 md:pb-14" ref={overviewRef}>
        <Container>
          <h2 className="ov-anim text-[28px] md:text-[36px] font-bold text-[#1a1a1a] mb-7">
            Service Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-12">
            {/* Left: Paragraphs */}
            <div className="ov-anim flex flex-col gap-5">
              {service.serviceOverview.paragraphs.map((p, i) => (
                <p key={i} className="text-[#444] text-[15px] leading-relaxed">{p}</p>
              ))}
            </div>
            {/* Right: Approach */}
            <div className="ov-anim">
              <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-6">
                {service.serviceOverview.approachTitle}
              </h3>
              <ul className="flex flex-col gap-5">
                {service.serviceOverview.approachSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#333]">
                    <span className="mt-0.5 text-[#1A3FD8] text-lg leading-none">⊙</span>
                    <span>
                      <strong>{step.label} —</strong> {step.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Two overview images */}
          <div className="ov-anim grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.serviceOverview.images.map((img, i) => (
              <div key={i} className="relative h-[260px] md:h-[320px] overflow-hidden">
                <Image src={img} alt={`Overview ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── WHAT WE OFFER ─── */}
      <section className="pt-4 md:pt-6 pb-10 md:pb-14 bg-white" ref={offerRef}>
        <Container>
          <h2 className="text-center text-[32px] md:text-[40px] font-bold text-[#1a1a1a] mb-7">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.whatWeOffer.map((offer, i) => (
              <div
                key={i}
                className="offer-card flex flex-col justify-between p-7 md:p-8"
                style={{
                  backgroundColor: i === 0 ? "#1A3FD8" : i === 1 ? "#0E2BA8" : "#091E78",
                  minHeight: "220px",
                }}
              >
                <h3 className="text-white text-[20px] md:text-[22px] font-bold leading-tight mb-6">
                  {offer.title}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {offer.bullets.map((b, bi) => (
                    <li key={bi} className="text-white/70 text-[13px]">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── GUIDED SECTION ─── */}
      <section className="pt-10 md:pt-14 pb-4 md:pb-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Graphic (Semicircle + Circle Image) */}
            <div className="flex items-center gap-0">
              {/* Blue Semicircle (right-facing) */}
              <div 
                className="flex-shrink-0 bg-[#0933C4] w-[110px] h-[220px] md:w-[140px] md:h-[280px]"
                style={{
                  borderTopRightRadius: "280px",
                  borderBottomRightRadius: "280px",
                }}
              />
              
              {/* Circle image */}
              <div className="flex-shrink-0 relative w-[220px] h-[220px] md:w-[280px] md:h-[280px]">
                <Image
                  src={service.guidedSection.image}
                  alt="Guided by process"
                  fill
                  sizes="(max-width: 768px) 220px, 280px"
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold text-[#1a1a1a] leading-tight whitespace-pre-line mb-4">
                {service.guidedSection.heading}
              </h2>
              <p className="text-[#555] text-base max-w-md leading-relaxed">
                {service.guidedSection.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── PROCESS STEPS ─── */}
      <section className="pt-4 md:pt-6 pb-6 md:pb-10" ref={processRef}>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {service.processSteps.map((step, i) => (
              <div
                key={i}
                className="step-card flex flex-col p-6 md:p-8 border border-[#e8e8e8] text-center"
              >
                <p className="text-[#999] text-[13px] font-mono mb-5">{step.number}</p>
                <h3 className="text-[#1a1a1a] text-[17px] font-bold leading-tight whitespace-pre-line mb-3">
                  {step.title}
                </h3>
                <p className="text-[#888] text-[13px] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FAQs ─── */}
      <section className="pt-6 md:pt-8 pb-20 md:pb-28">
        <Container>
          <h2 className="text-center text-[32px] md:text-[40px] font-bold text-[#1a1a1a] tracking-tight mb-14">
            FAQS
          </h2>
          <div className="flex flex-col divide-y divide-[#e8e8e8] max-w-4xl mx-auto">
            {service.faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button suppressHydrationWarning
                  className="w-full flex items-start justify-between gap-4 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[#999] group-hover:text-[#1A3FD8] transition-colors duration-200 text-sm font-medium w-6 flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#1a1a1a] group-hover:text-[#1A3FD8] transition-colors duration-200 text-[17px] md:text-[18px] font-medium">
                      {faq.question}
                    </span>
                  </div>
                  <span className="flex-shrink-0 mt-0.5 text-[#555] group-hover:text-[#1A3FD8] transition-colors duration-200">
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="mt-4 ml-12 text-[#555] text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

    </main>
  );
}
