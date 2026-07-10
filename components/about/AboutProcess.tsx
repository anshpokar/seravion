"use client";

import Container from "@/components/ui/Container";

const processData = [
  {
    title: (
      <>
        Problem
        <br />
        discovery
      </>
    ),
    items: [
      "Usability Studies",
      "User Interviews",
      "Stakeholder Interviews",
      "Competitive Research",
      "Insights Report",
      "User Journey",
    ],
  },
  {
    title: (
      <>
        Design
        <br />
        system ready
      </>
    ),
    items: [
      "Thinking Workshops",
      "Sitemaps",
      "Concepts",
      "Designs",
      "Prototypes",
      "Usability Studies",
    ],
  },
  {
    title: (
      <>
        Design
        <br />
        implementation
      </>
    ),
    items: [
      "Design",
      "User Flows",
      "Various User Types",
      "Animations",
      "Interactions",
    ],
  },
];

export default function AboutProcess() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-[2px] bg-[#2F80ED]" />
          <span className="text-[11px] uppercase tracking-[0.35em] font-medium text-[#8C8C8C] whitespace-nowrap">
            Approach
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12 md:mb-16 tracking-tight">
          Method of making better result
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
          {processData.map((step, index) => (
            <div key={index}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
                {step.title}
              </h3>
              <ul className="space-y-4">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#666] text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {index !== 2 && (
                <div className="hidden lg:block mt-10 text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}