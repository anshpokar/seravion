"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

// ─── DATA ─────────────────────────────────────────────
const allBlogs = [
  {
    id: 1,
    slug: "innovative-solutions-business-success",
    category: "Graphic Design",
    title: "Innovative Solutions for every Business Success.",
    date: { day: "28", month: "FEB" },
    image: "/blog_1.png",
  },
  {
    id: 2,
    slug: "harnessing-digital-transform-roadmap",
    category: "Digital Strategy",
    title: "Harnessing Digital Transformation as a Roadmap for Businesses.",
    date: { day: "22", month: "FEB" },
    image: "/blog_2.png",
  },
  {
    id: 3,
    slug: "mastering-change-management",
    category: "Management",
    title: "Mastering Change Management Lessons for Businesses.",
    date: { day: "18", month: "FEB" },
    image: "/blog_3.png",
  },
  {
    id: 4,
    slug: "future-of-saas-architecture",
    category: "Software Engineering",
    title: "The Future of SaaS Architecture: Microservices vs Monoliths.",
    date: { day: "12", month: "FEB" },
    image: "/blog_4.png",
  },
  {
    id: 5,
    slug: "ui-ux-accessibility",
    category: "UI/UX Design",
    title: "Designing for Everyone: The Importance of Web Accessibility.",
    date: { day: "05", month: "FEB" },
    image: "/blog_1.png",
  },
  {
    id: 6,
    slug: "ai-driven-marketing",
    category: "Marketing",
    title: "How AI is Revolutionizing Digital Marketing Strategies.",
    date: { day: "30", month: "JAN" },
    image: "/blog_2.png",
  },
  {
    id: 7,
    slug: "ux-design-principles",
    category: "Product Design",
    title: "UX Design Principles that Drive Real Business Results.",
    date: { day: "24", month: "JAN" },
    image: "/blog_3.png",
  },
  {
    id: 8,
    slug: "building-saas-products",
    category: "Product Management",
    title: "Building SaaS Products Users Love from Day One.",
    date: { day: "18", month: "JAN" },
    image: "/blog_4.png",
  },
  {
    id: 9,
    slug: "ai-in-product-design",
    category: "Artificial Intelligence",
    title: "How AI is Reshaping the Future of Product Design.",
    date: { day: "10", month: "JAN" },
    image: "/blog_1.png",
  },
];

const ITEMS_PER_PAGE = 6;
const totalPages = Math.ceil(allBlogs.length / ITEMS_PER_PAGE);

// ─── COMPONENT ────────────────────────────────────────
const OurBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageBlogs = allBlogs.slice(start, start + ITEMS_PER_PAGE);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Header
      const hEls = headerRef.current?.querySelectorAll(".h-anim");
      if (hEls?.length) {
        gsap.fromTo(hEls, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out", delay: 0.1,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  // Re-animate cards when page changes or scrolls into view
  useLayoutEffect(() => {
    if (!gridRef.current) return;
    
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".blog-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.12, 
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%", 
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ─── HEADER ─── */}
      <section className="pt-28 pb-12 md:pb-16" ref={headerRef}>
        <Container>
          <p className="h-anim text-sm text-[#888] font-medium mb-4 tracking-wide">
            Blogs
          </p>
          <h1 className="h-anim text-[40px] md:text-[54px] lg:text-[64px] font-bold text-[#1a1a1a] tracking-tight leading-[1.05]">
            Expert articles
          </h1>
        </Container>
      </section>

      {/* ─── GRID ─── */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
          >
            {pageBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="blog-card group flex flex-col gap-5"
              >
                {/* Image with date badge */}
                <div className="relative w-full overflow-hidden aspect-[16/10]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Date badge — top-left (Glassmorphism) */}
                  <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-md border border-white/20 px-3 py-2.5 flex flex-col items-center justify-center min-w-[56px] min-h-[64px]">
                    <span className="text-white text-[22px] font-bold leading-none shadow-sm">
                      {blog.date.day}
                    </span>
                    <span className="text-white text-[11px] font-bold tracking-widest uppercase mt-1 shadow-sm">
                      {blog.date.month}
                    </span>
                  </div>
                </div>

                {/* Meta + title */}
                <div className="flex flex-col items-start gap-3">
                  <span className="border border-[#e8e8e8] text-[#555] text-[11px] px-2 py-1 font-medium tracking-wide">
                    {blog.category}
                  </span>
                  <h2 className="text-[#1a1a1a] text-[18px] md:text-[20px] font-semibold leading-snug group-hover:text-[#1A3FD8] transition-colors duration-200">
                    {blog.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          {/* ─── PAGINATION ─── */}
          <div className="flex items-center justify-center gap-2 mt-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                suppressHydrationWarning
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full text-[13px] font-semibold border transition-all duration-200 ${
                  page === currentPage
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-white text-[#1a1a1a] border-[#e0e0e0] hover:border-[#1a1a1a]"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next arrow */}
            <button
              suppressHydrationWarning
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#1a1a1a] hover:border-[#1a1a1a] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowUpRight size={15} />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default OurBlogs;
