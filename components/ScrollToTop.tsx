"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Do not render the button on the home page
  if (pathname === "/") {
    return null;
  }

  return (
    <div
      className={`fixed bottom-8 right-8 z-[150] transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <button suppressHydrationWarning
        onClick={scrollToTop}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full outline-none transition-transform hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        {/* Animated outer pinging ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#2B95FF] opacity-0 animate-ping group-hover:opacity-40" style={{ animationDuration: '2s' }} />
        
        {/* Glassmorphism base layer */}
        <div className="absolute inset-0 rounded-full bg-black/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(43,149,255,0.2)] group-hover:shadow-[0_0_30px_rgba(43,149,255,0.6)] group-hover:bg-[#2B95FF]/20 transition-all duration-300" />
        
        {/* Subtle glowing edge inside */}
        <div className="absolute inset-[1px] rounded-full bg-gradient-to-tr from-white/5 to-white/20 pointer-events-none" />

        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="relative z-10 w-6 h-6 text-[#2B95FF] group-hover:text-white transition-colors duration-300 drop-shadow-md"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
