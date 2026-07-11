"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scrolls horizontally from right to left as the user scrolls down the page
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  const images = [
    { 
      src: "/about corousel 1.png", 
      w: "w-[70vw] md:w-[45vw] lg:w-[35vw]", 
      height: "h-[320px] md:h-[520px] lg:h-[640px]" 
    },
    { 
      src: "/about us corousel 2_talent squad 4.png", 
      w: "w-[50vw] md:w-[35vw] lg:w-[25vw]", 
      height: "h-[220px] md:h-[360px] lg:h-[420px]" 
    },
    { 
      src: "/about corousel 3.png", 
      w: "w-[70vw] md:w-[45vw] lg:w-[35vw]", 
      height: "h-[280px] md:h-[440px] lg:h-[500px]" 
    },
    { 
      src: "/about corousel 4.png", 
      w: "w-[40vw] md:w-[25vw] lg:w-[20vw]", 
      height: "h-[300px] md:h-[480px] lg:h-[560px]" 
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white pb-16 md:pb-24 overflow-hidden">
      <div className="w-full relative">
        <motion.div 
          className="flex w-max gap-2 md:gap-3 items-start" 
          style={{ x }}
        >
          {/* Two sets of images to ensure we have enough content to scroll through */}
          {[...images, ...images].map((img, i) => (
            <div key={i} className={`flex-shrink-0 ${img.w}`}>
              <img
                src={img.src}
                alt={`Gallery image ${i + 1}`}
                className={`w-full object-cover ${img.height}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}