"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

const blogsData = [
  {
    id: 1,
    title: "Seravion is a people-first design studio that cares",
    date: "16th Jan 2026",
    image: "/blog_1.png"
  },
  {
    id: 2,
    title: "The future of digital experience and AI integration",
    date: "18th Jan 2026",
    image: "/blog_2.png"
  },
  {
    id: 3,
    title: "How motion design impacts user engagement",
    date: "20th Jan 2026",
    image: "/blog_3.png"
  },
  {
    id: 4,
    title: "Building scalable SaaS architectures for tomorrow",
    date: "22nd Jan 2026",
    image: "/blog_4.png"
  },
];

const Blogs = () => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const lastWheelTime = useRef(0);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scrub Handlers
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 600) return;

    if (Math.abs(e.deltaX) > 20) {
      if (e.deltaX > 0) {
        setStep((prev) => prev + 1);
      } else {
        setStep((prev) => prev - 1);
      }
      lastWheelTime.current = now;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setStep((prev) => prev + 1);
      } else {
        setStep((prev) => prev - 1);
      }
    }
    setIsPaused(false);
  };

  const displayedItems = Array.from({ length: 4 }).map((_, i) => {
    const absoluteIndex = step + i;
    const dataIndex = ((absoluteIndex % blogsData.length) + blogsData.length) % blogsData.length;
    return {
      ...blogsData[dataIndex],
      uniqueKey: `${blogsData[dataIndex].id}-${absoluteIndex}`
    };
  });

  return (
    <div className="h-[200vh]">
    <section className="sticky top-0 h-screen w-full bg-[#0a121e] text-white flex flex-col justify-start pt-20 md:pt-24 pb-12 overflow-hidden">
      <Container>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-[7px] rounded-full bg-[#1E90FF]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              Blogs
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold leading-tight">
            Latest Blog
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 md:max-w-xl">
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            <span className="md:block">Seravion is a people-first design studio that cares as much</span>
            <span className="md:block">about your business and product as you do.</span>
          </p>
          
          <Link href="/blog" suppressHydrationWarning className="px-6 md:px-8 py-3 border border-white/20 rounded-none text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
            View All
          </Link>
        </div>
      </div>

      {/* MAIN CAROUSEL CONTENT */}
      <div 
        className="relative flex flex-row items-center w-full gap-4 md:gap-6 lg:gap-8 overflow-visible min-h-[400px] md:min-h-[500px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="popLayout">
          {displayedItems.map((blog, index) => {
            const isMain = index === 0;

            return (
              <motion.div
                layout
                key={blog.uniqueKey}
                onClick={() => {
                  if (!isMain) {
                    setStep(step + index);
                  }
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                className={`overflow-hidden shadow-xl shrink-0 flex flex-col bg-[#1c2530] ${
                  isMain 
                    ? "relative w-[85vw] md:w-[60vw] lg:w-[440px] h-auto md:h-[460px] cursor-default z-10" 
                    : "relative w-[65vw] md:w-[40vw] lg:w-[320px] h-auto md:h-[380px] cursor-pointer hover:brightness-110 z-0"
                }`}
                transition={{
                  layout: { type: "tween", duration: 0.8, ease: "easeInOut" },
                  x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                  opacity: { type: "tween", duration: 0.6, ease: "easeInOut" }
                }}
              >
                {/* Image Section */}
                <motion.div 
                  layout
                  className={`w-full overflow-hidden shrink-0 ${isMain ? 'h-[240px] md:h-[280px]' : 'h-[180px] md:h-[200px]'}`}
                  transition={{
                    layout: { type: "tween", duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover block"
                  />
                </motion.div>

                {/* Text Section */}
                <motion.div
                  layout
                  className="flex flex-col justify-between p-5 md:p-6 flex-1 shrink-0"
                >
                  <h3 className={`text-white font-medium ${isMain ? 'text-lg md:text-xl lg:text-2xl' : 'text-base md:text-lg lg:text-xl'} leading-snug`}>
                    {blog.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-4 md:mt-6">
                    <span className="text-gray-400 text-xs md:text-sm">{blog.date}</span>
                    <ArrowUpRight className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      </Container>
    </section>
    </div>
  );
};

export default Blogs;