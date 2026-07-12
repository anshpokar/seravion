"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const testimonialsData = [
  { 
    id: 1, 
    src: "/main_testimonial.png",
    text: "I had the pleasure of working with Kanhaiya on the development of my business website and I couldn’t be happier with the outcome. From our first conversation, Kanhaiya demonstrated a sharp understanding of both design aesthetics and strategic functionality, translating abstract ideas into a clean, intuitive, and high-performing website. What stood out most was his ability to listen deeply and iterate quickly. Whether it was refining the user journey, optimizing for mobile, or aligning the visual language with our GTM narrative, Kanhaiya brought both technical precision and creative insight to every step.",
    name: "Dushyant Arora",
    company: "Founder & MD - Ambit GTM"
  },
  { 
    id: 2, 
    src: "/testimonial_2.png",
    text: "Working with Seravion was a game-changer for our Carevo app. They understood our vision, delivered a sleek and intuitive design, and ensured a smooth user experience. Their team was proactive, communicative, and always ready to go the extra mile. Highly recommend!",
    name: "Founder",
    company: "Founder & CEO - Carevo"
  },
  { 
    id: 3, 
    src: "/testimonial_3.png",
    text: "Partnering with Seravion truly elevated our SCCA app. They grasped our goals quickly and crafted a clean, user-friendly design that exceeded our expectations. The collaboration was seamless — their team was responsive, collaborative, and consistently went above and beyond. We’re thrilled with the results and would definitely recommend them!",
    name: "Prem Rathod",
    company: "Founder & CEO SCCA Argo LLP"
  },
  { 
    id: 4, 
    src: "/testimonial_4.png",
    text: "Seravion Technologies delivered a highly scalable digital platform that completely transformed our union's operations across Maharashtra. The AI-powered OCR automation significantly reduced manual effort, while the centralized member management system provided complete visibility from state to village level. Their technical expertise, commitment, and understanding of our requirements exceeded our expectations.",
    name: "Leadership Team",
    company: "Shramjivi Sangathan Union, Maharashtra"
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
    <section className="sticky top-0 h-screen w-full bg-[#0a121e] text-white flex flex-col pt-[12vh] lg:pt-[15vh] pb-10 overflow-hidden">
      <Container>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
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
          
          <button suppressHydrationWarning className="px-6 md:px-8 py-3 border border-white/20 rounded-none text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
            View All
          </button>
        </div>
      </div>

      {/* MAIN TESTIMONIAL CONTENT */}
      <div 
        className="relative flex flex-row items-end w-full gap-3 md:gap-6 lg:gap-8 overflow-visible min-h-[400px] md:min-h-[300px] lg:min-h-[350px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="popLayout">
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
                className={`shadow-2xl border shrink-0 ${
                  isMain 
                    ? "relative w-[90vw] md:w-[65vw] lg:w-full lg:max-w-[900px] xl:max-w-[1050px] h-auto md:h-[350px] lg:h-[40vh] lg:min-h-[380px] lg:max-h-[480px] flex flex-col md:flex-row bg-[#17202A] cursor-default border-white/10 z-10 overflow-visible" 
                    : "relative w-16 md:w-24 lg:w-32 xl:w-40 aspect-square cursor-pointer grayscale hover:grayscale-0 mb-0 lg:mb-2 border-white/10 z-0 overflow-hidden"
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
                  className={`${isMain ? 'w-full md:w-2/5 h-56 md:h-full shrink-0' : 'w-full h-full shrink-0'}`}
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
                      className="w-full md:w-3/5 h-auto md:h-full p-6 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-between shrink-0"
                    >
                      <div className="relative group cursor-help z-50">
                        <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed line-clamp-4 md:line-clamp-5 xl:line-clamp-6">
                          {testimonial.text}
                        </p>
                        
                        {/* Custom Glassmorphism Tooltip */}
                        <div className="absolute left-0 bottom-full mb-2 w-full md:w-[120%] z-[100] 
                                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                      transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                                      bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
                                      rounded-xl p-4 md:p-6 text-white text-sm md:text-base leading-relaxed pointer-events-none">
                          {testimonial.text}
                        </div>
                      </div>
                      
                      <div className="mt-6 md:mt-0">
                        <h4 className="text-white font-bold text-base md:text-lg lg:text-xl">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-1.5">
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
      </Container>
    </section>
    </div>
  );
};

export default Testimonials;