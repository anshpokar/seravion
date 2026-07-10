"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    src: "/main_testimonial.png",
    text: "Working with Seravion was a game changer for our business. Their team truly understands our vision and brings it to life with creativity and precision. We felt valued every step of the way!",
    name: "Ravi Yadav",
    company: "Company Name",
  },
  {
    id: 2,
    src: "/testimonial_2.png",
    text: "The level of detail and thought put into our project was outstanding. We couldn't be happier with the results and highly recommend their services to anyone looking to elevate their brand.",
    name: "Sarah Jenkins",
    company: "Tech Innovations",
  },
  {
    id: 3,
    src: "/testimonial_3.png",
    text: "From start to finish, the communication and execution were flawless. They delivered exactly what we needed, on time and within budget.",
    name: "Michael Chen",
    company: "Growth Partners",
  },
  {
    id: 4,
    src: "/testimonial_4.png",
    text: "An absolute pleasure to work with. The final product exceeded all of our expectations and has already started generating positive feedback from our users.",
    name: "Emily Carter",
    company: "Design Works",
  },
];

const Testimonials = () => {
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
    const idx = ((abs % testimonialsData.length) + testimonialsData.length) % testimonialsData.length;
    return { ...testimonialsData[idx], uniqueKey: `${testimonialsData[idx].id}-${abs}` };
  });

  return (
    <div className="h-[200vh]">
      <section className="sticky top-0 h-screen w-full bg-[#0a121e] text-white flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-[7px] rounded-full bg-[#1E90FF]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Testimonials
              </span>
            </div>
            <h2 className="text-[clamp(32px,5vw,64px)] font-bold leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:max-w-md">
            <p className="text-gray-400 text-[clamp(12px,1.3vw,16px)] leading-relaxed">
              Seravion is a people-first design studio that cares as much about your business and product as you do.
            </p>
            <button className="px-6 py-3 border border-white/20 text-sm md:text-base font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
              View All
            </button>
          </div>
        </div>

        {/* CARDS ROW */}
        <div
          className="relative flex flex-row items-end gap-4 md:gap-6 overflow-visible"
          style={{ minHeight: "clamp(300px, 45vh, 480px)" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedItems.map((item, index) => {
              const isMain = index === 0;
              return (
                <motion.div
                  key={item.uniqueKey}
                  layout
                  onClick={() => { if (!isMain) setStep(step + index); }}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80, transition: { duration: 0.25 } }}
                  transition={{
                    layout: { type: "spring", stiffness: 280, damping: 34 },
                    opacity: { duration: 0.3 },
                    x: { type: "spring", stiffness: 280, damping: 34 },
                  }}
                  className={`overflow-hidden border border-white/10 shadow-2xl shrink-0 ${
                    isMain
                      ? "flex flex-col sm:flex-row bg-[#17202A] cursor-default z-10"
                      : "bg-[#111922] cursor-pointer hover:border-white/25 z-0 transition-colors duration-200"
                  }`}
                  style={
                    isMain
                      ? {
                          width: "clamp(320px, 65vw, 960px)",
                          height: "clamp(280px, 42vh, 440px)",
                        }
                      : {
                          width: "clamp(64px, 8vw, 110px)",
                          aspectRatio: "1",
                          alignSelf: "flex-end",
                          marginBottom: "12px",
                          filter: "grayscale(0.4)",
                        }
                  }
                >
                  {/* Image */}
                  <div
                    className={`shrink-0 overflow-hidden ${isMain ? "h-[45%] sm:h-full" : "w-full h-full"}`}
                    style={isMain ? { width: "clamp(140px, 25vw, 360px)" } : {}}
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text — only on main card */}
                  <AnimatePresence>
                    {isMain && (
                      <motion.div
                        key="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.18, duration: 0.35 } }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        className="flex flex-col justify-between p-6 md:p-10 flex-1 overflow-hidden"
                      >
                        <div>
                          <Quote className="text-[#1E90FF] mb-4" size={28} fill="currentColor" />
                          <p className="text-gray-300 text-[clamp(13px,1.4vw,18px)] leading-relaxed line-clamp-4">
                            {item.text}
                          </p>
                        </div>
                        <div className="mt-5 pt-5 border-t border-white/10">
                          <h4 className="text-white font-bold text-base md:text-lg">{item.name}</h4>
                          <p className="text-gray-400 text-sm mt-1">{item.company}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex items-center gap-2 mt-8">
          {testimonialsData.map((_, i) => {
            const active = ((step % testimonialsData.length) + testimonialsData.length) % testimonialsData.length === i;
            return (
              <button
                key={i}
                onClick={() => setStep(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: active ? "32px" : "8px",
                  height: "8px",
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

export default Testimonials;
