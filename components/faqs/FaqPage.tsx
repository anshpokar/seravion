"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";

// ─── DATA ─────────────────────────────────────────────
const faqCategories = [
  {
    label: "General",
    faqs: [
      {
        q: "What industries do you serve?",
        a: "Partnering with this AI agency was one of the best decisions we've made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding of our business needs.",
      },
      {
        q: "How do you protect client data and privacy?",
        a: "We follow strict data governance policies, use end-to-end encryption, and comply with relevant regulations (GDPR, HIPAA, etc.) depending on your industry. All client data is stored securely with access restricted to authorised team members only.",
      },
      {
        q: "Do you provide support after the project is done?",
        a: "Yes. We offer post-launch support packages ranging from bug fixes and patches to full ongoing maintenance and feature development. Our team remains available as a long-term partner.",
      },
      {
        q: "How long does an average AI project take?",
        a: "Typical projects range from 6 to 16 weeks depending on scope and complexity. We will give you a detailed timeline estimate during the discovery phase, with milestones tracked transparently throughout.",
      },
      {
        q: "Is my data safe and secure?",
        a: "Absolutely. All client data is stored securely, with access restricted to authorised team members only. We sign NDAs before any project kickoff and maintain strict security protocols throughout the engagement.",
      },
    ],
  },
  {
    label: "Design & Development",
    faqs: [
      {
        q: "What design tools and technologies do you use?",
        a: "We primarily design in Figma and build with Next.js, React, TypeScript, and Node.js. Our stack is always chosen based on what best suits your product's needs and your team's future ability to maintain it.",
      },
      {
        q: "Do you build mobile apps as well?",
        a: "Yes, we develop cross-platform mobile applications using React Native, ensuring your product looks and performs natively on both iOS and Android.",
      },
      {
        q: "Will I own the code and designs after the project?",
        a: "Yes — full intellectual property ownership is transferred to you upon project completion and final payment. You receive all source files, design assets, and documentation.",
      },
      {
        q: "Can you work with our existing design system?",
        a: "Absolutely. We frequently embed into client teams and contribute to existing design systems. We'll audit your current system first to ensure consistency before extending it.",
      },
    ],
  },
  {
    label: "Pricing & Process",
    faqs: [
      {
        q: "How is pricing structured?",
        a: "We price projects on a fixed-scope or time-and-materials basis, depending on project complexity. After a discovery call we provide a detailed proposal with clear deliverables and payment milestones.",
      },
      {
        q: "What does your onboarding process look like?",
        a: "Our process starts with a discovery workshop to align on goals, users, and constraints. We then move into research, design, development, and testing sprints — with regular demos and feedback loops throughout.",
      },
      {
        q: "Do you offer retainer arrangements?",
        a: "Yes, we offer monthly retainer packages for ongoing design and development support, ideal for product teams that need consistent output without the overhead of hiring in-house.",
      },
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────
export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const headerRef = useRef<HTMLDivElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);

  const currentFaqs = faqCategories[activeCategory].faqs;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Header entrance
      const hEls = headerRef.current?.querySelectorAll(".h-anim");
      if (hEls?.length) {
        gsap.fromTo(hEls,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: "power3.out", delay: 0.15 }
        );
      }

      // FAQ rows fade in on scroll
      const rows = faqListRef.current?.querySelectorAll(".faq-row");
      if (rows?.length) {
        gsap.fromTo(rows,
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.07, duration: 0.6, ease: "power3.out",
            scrollTrigger: { trigger: faqListRef.current, start: "top 82%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Re-animate rows when category changes
  useLayoutEffect(() => {
    setOpenIndex(0);
    if (!faqListRef.current) return;
    const rows = faqListRef.current.querySelectorAll(".faq-row");
    gsap.fromTo(rows,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.07, duration: 0.55, ease: "power3.out" }
    );
  }, [activeCategory]);

  return (
    <main className="bg-white min-h-screen">

      {/* ─── HEADER ─── */}
      <section className="pt-28 pb-0" ref={headerRef}>
        <Container>
          <p className="h-anim text-sm text-[#888] font-medium mb-4 tracking-wide uppercase text-left">
            FAQ
          </p>
          <h1 className="h-anim text-[38px] md:text-[54px] lg:text-[62px] font-bold text-[#1a1a1a] tracking-tight leading-[1.05] mb-10 max-w-5xl">
            Harnessing Digital Transform a Roadmap Businesses
          </h1>
        </Container>

        {/* Full-width banner image — blue-tinted */}
        <div className="h-anim w-full relative overflow-hidden" style={{ height: "clamp(450px, 50vh, 600px)" }}>
          <Image
            src="/faq_banner.png"
            alt="FAQ Banner"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </section>

      {/* ─── CATEGORY TABS ─── */}
      <section className="pt-12 pb-0 border-b border-[#ebebeb]">
        <Container>
          <div className="flex items-center justify-center gap-0">
            {faqCategories.map((cat, i) => (
              <button
                key={i}
                suppressHydrationWarning
                onClick={() => setActiveCategory(i)}
                className={`px-6 py-3 text-[13px] font-semibold tracking-wide transition-all duration-200 border-b-2 ${
                  i === activeCategory
                    ? "border-[#1a1a1a] text-[#1a1a1a]"
                    : "border-transparent text-[#999] hover:text-[#555]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section className="pt-6 pb-24" ref={faqListRef}>
        <Container>
          <div className="flex flex-col divide-y divide-[#ebebeb] max-w-3xl mx-auto">
            {currentFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="faq-row">
                  <button
                    suppressHydrationWarning
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                  >
                    {/* Number + Question */}
                    <div className="flex items-start gap-8 md:gap-12">
                      <span className="text-[#bbb] text-[13px] font-mono font-medium w-6 flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[16px] md:text-[17px] font-semibold leading-snug transition-colors duration-200 ${
                          isOpen ? "text-[#1a1a1a]" : "text-[#1a1a1a] group-hover:text-[#1A3FD8]"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    {/* Icon */}
                    <span className="flex-shrink-0 mt-0.5 text-[#555] group-hover:text-[#1A3FD8] transition-colors duration-200">
                      {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isOpen ? "max-h-96 pb-7" : "max-h-0"
                    }`}
                  >
                    <p className="ml-14 md:ml-20 text-[#666] text-[14px] md:text-[15px] leading-[1.85]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

    </main>
  );
}
