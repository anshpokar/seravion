"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogsData = [
  {
    id: 1,
    title: "Seravion is a people-first design studio that cares",
    date: "16th Jan 2026",
    image: "/blog_1.png",
  },
  {
    id: 2,
    title: "The future of digital experience and AI integration",
    date: "18th Jan 2026",
    image: "/blog_2.png",
  },
  {
    id: 3,
    title: "How motion design impacts user engagement",
    date: "20th Jan 2026",
    image: "/blog_3.png",
  },
  {
    id: 4,
    title: "Building scalable SaaS architectures for tomorrow",
    date: "22nd Jan 2026",
    image: "/blog_4.png",
  },
];

const Blogs = () => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const lastWheelTime = useRef(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => setStep((p) => p + 1), 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 700) return;
    if (Math.abs(e.deltaX) > 20) {
      setStep((p) => (e.deltaX > 0 ? p + 1 : p - 1));
      lastWheelTime.current = now;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) setStep((p) => (diff > 0 ? p + 1 : p - 1));
    setIsPaused(false);
  };

  const displayedItems = Array.from({ length: 4 }).map((_, i) => {
    const abs = step + i;
    const idx = ((abs % blogsData.length) + blogsData.length) % blogsData.length;
    return { ...blogsData[idx], uniqueKey: `${blogsData[idx].id}-${abs}` };
  });

  return (
    <div className="h-[200vh]">
      <section className="sticky top-0 h-screen w-full bg-[#0a121e] text-white flex flex-col justify-start px-6 md:px-16 lg:px-24 pt-20 pb-10 overflow-hidden">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-[7px] rounded-full bg-[#1E90FF]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Blogs
              </span>
            </div>
            <h2 className="text-[clamp(28px,4vw,54px)] font-bold leading-tight">
              Latest Blog
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:max-w-md">
            <p className="text-gray-400 text-[clamp(11px,1.2vw,14px)] leading-relaxed">
              Seravion is a people-first design studio that cares as much about your business and product as you do.
            </p>
            <button className="px-6 py-3 border border-white/20 text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
              View All
            </button>
          </div>
        </div>

        {/* CARDS ROW */}
        <div
          className="relative flex flex-row items-center gap-3 md:gap-5 overflow-visible"
          style={{ minHeight: "clamp(280px, 46vh, 520px)" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedItems.map((blog, index) => {
              const isMain = index === 0;
              return (
                <motion.div
                  key={blog.uniqueKey}
                  layout
                  onClick={() => { if (!isMain) setStep(step + index); }}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60, transition: { duration: 0.25 } }}
                  transition={{
                    layout: { type: "spring", stiffness: 280, damping: 34 },
                    opacity: { duration: 0.3 },
                    x: { type: "spring", stiffness: 280, damping: 34 },
                  }}
                  className={`overflow-hidden shrink-0 flex flex-col bg-[#1c2530] ${
                    isMain
                      ? "cursor-default shadow-2xl z-10"
                      : "cursor-pointer hover:brightness-110 z-0 transition-all duration-200"
                  }`}
                  style={
                    isMain
                      ? {
                          width: "clamp(240px, 38vw, 460px)",
                          height: "clamp(280px, 46vh, 520px)",
                        }
                      : {
                          width: "clamp(140px, 22vw, 300px)",
                          height: "clamp(220px, 36vh, 420px)",
                        }
                  }
                >
                  {/* Image */}
                  <div
                    className="w-full overflow-hidden shrink-0"
                    style={{ height: isMain ? "clamp(150px, 26vh, 300px)" : "clamp(120px, 20vh, 240px)" }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between p-4 md:p-5 flex-1">
                    <h3
                      className="text-white font-medium leading-snug"
                      style={{ fontSize: isMain ? "clamp(13px,1.3vw,20px)" : "clamp(11px,1.1vw,16px)" }}
                    >
                      {blog.title}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-gray-400 text-[clamp(10px,0.9vw,13px)]">{blog.date}</span>
                      <ArrowUpRight className="text-gray-400 shrink-0" size={isMain ? 18 : 15} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex items-center gap-2 mt-5">
          {blogsData.map((_, i) => {
            const active = ((step % blogsData.length) + blogsData.length) % blogsData.length === i;
            return (
              <button
                key={i}
                onClick={() => setStep(i)}
                aria-label={`Go to blog ${i + 1}`}
                style={{
                  width: active ? "26px" : "7px",
                  height: "7px",
                  borderRadius: "9999px",
                  backgroundColor: active ? "#1E90FF" : "rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>

      </section>
    </div>
  );
};

export default Blogs;

