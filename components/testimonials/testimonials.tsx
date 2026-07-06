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
    company: "Company Name"
  },
  { 
    id: 2, 
    src: "/testimonial_2.png",
    text: "The level of detail and thought put into our project was outstanding. We couldn't be happier with the results and highly recommend their services to anyone looking to elevate their brand.",
    name: "Sarah Jenkins",
    company: "Tech Innovations"
  },
  { 
    id: 3, 
    src: "/testimonial_3.png",
    text: "From start to finish, the communication and execution were flawless. They delivered exactly what we needed, on time and within budget.",
    name: "Michael Chen",
    company: "Growth Partners"
  },
  { 
    id: 4, 
    src: "/testimonial_4.png",
    text: "An absolute pleasure to work with. The final product exceeded all of our expectations and has already started generating positive feedback from our users.",
    name: "Emily Carter",
    company: "Design Works"
  },
];

const Testimonials = () => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Ref for wheel throttle
  const lastWheelTime = useRef(0);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 5000); // Intact for at least 4-5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle trackpad/mouse horizontal scroll
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 600) return; // 600ms throttle to prevent crazy fast spinning

    if (Math.abs(e.deltaX) > 20) {
      if (e.deltaX > 0) {
        setStep((prev) => prev + 1);
      } else {
        setStep((prev) => prev - 1);
      }
      lastWheelTime.current = now;
    }
  };

  // Handle mobile touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true); // pause auto-play while swiping
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // 50px threshold for swipe
      if (diff > 0) {
        setStep((prev) => prev + 1); // swiped left -> next
      } else {
        setStep((prev) => prev - 1); // swiped right -> prev
      }
    }
    setIsPaused(false);
  };

  // Create an array of exactly 4 displayed items (1 active, 3 thumbnails)
  const displayedItems = Array.from({ length: 4 }).map((_, i) => {
    const absoluteIndex = step + i;
    // Safely handle negative modulo for when user scrubs backward
    const dataIndex = ((absoluteIndex % testimonialsData.length) + testimonialsData.length) % testimonialsData.length;
    return {
      ...testimonialsData[dataIndex],
      uniqueKey: `${testimonialsData[dataIndex].id}-${absoluteIndex}`
    };
  });

  return (
    <div className="h-[200vh]">
    <section className="sticky top-0 h-screen w-full bg-[#0a121e] text-white flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-[7px] rounded-full bg-[#1E90FF]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold leading-tight">
            What Our Client Say's
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 md:max-w-xl">
          {/* TEXT FIELD WITH CONTROLLED LINE BREAKS */}
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            <span className="md:block">Seravion is a people-first design studio that cares as much </span>
            <span className="md:block">about your business and product as you do.</span>
          </p>
          
          <button className="px-6 md:px-8 py-3 border border-white/20 rounded-none text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
            View All
          </button>
        </div>
      </div>

      {/* MAIN TESTIMONIAL CONTENT */}
      <div 
        className="relative flex flex-row items-end w-full max-w-[1400px] gap-3 md:gap-6 lg:gap-8 overflow-visible pl-2 md:pl-4 min-h-[450px] md:min-h-[300px] lg:min-h-[350px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="sync">
          {displayedItems.map((testimonial, index) => {
            const isMain = index === 0;

            return (
              <motion.div
                layout
                key={testimonial.uniqueKey}
                onClick={() => {
                  if (!isMain) {
                    setStep(step + index);
                  }
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                className={`overflow-hidden shadow-2xl border shrink-0 ${
                  isMain 
                    ? "relative w-[85vw] md:w-[55vw] lg:w-full lg:max-w-[750px] h-auto md:h-[300px] lg:h-[350px] flex flex-col md:flex-row bg-[#17202A] cursor-default border-white/10 z-10" 
                    : "relative w-14 md:w-20 lg:w-32 aspect-square cursor-pointer grayscale hover:grayscale-0 mb-0 lg:mb-2 border-white/10 z-0"
                }`}
                transition={{
                  layout: { type: "tween", duration: 0.8, ease: "easeInOut" },
                  x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                  opacity: { type: "tween", duration: 0.6, ease: "easeInOut" }
                }}
              >
                {/* Image Side */}
                <motion.div 
                  layout
                  className={`${isMain ? 'w-full md:w-2/5 h-48 md:h-full shrink-0' : 'w-full h-full shrink-0'}`}
                  transition={{
                    layout: { type: "tween", duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <img 
                    src={testimonial.src} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover block"
                  />
                </motion.div>

                {/* Text Side (only visible when main) */}
                <AnimatePresence>
                  {isMain && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="w-full md:w-3/5 h-auto md:h-full p-5 md:p-8 lg:p-10 flex flex-col justify-between shrink-0"
                    >
                      <div>
                        <Quote className="text-white w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mb-3 md:mb-4" fill="currentColor" />
                        <p className="text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                      
                      <div className="mt-4 md:mt-0">
                        <h4 className="text-white font-bold text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-[10px] md:text-xs mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
    </section>
    </div>
  );
};

export default Testimonials;