"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Work +", href: "/work" },
  { name: "Industries +", href: "/industries" },
  { name: "Services +", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 80);

      // Hide if scrolling down and past 100px, show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the navbar should actually be hidden (never hide on home page)
  const shouldHide = hidden && pathname !== "/";

  return (
    <>
      {/* LAYER 1: NORMAL BLEND MODE (Logo Icon, Button) */}
      <header
        className={`
          fixed top-0 left-0 w-full z-[100] pointer-events-none
          transition-transform duration-300 ease-in-out
          ${scrolled ? "py-3" : "py-4"}
          ${shouldHide ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="max-w-[1600px] w-full mx-auto relative flex items-center justify-between px-6 md:px-10 lg:px-12">
          
          {/* LEFT: LOGO AREA */}
          <div className="flex shrink-0 justify-start">
            <Link href="/" className="flex items-center gap-2.5 pointer-events-auto">
              {/* Visible Logo Icon */}
              <div className="flex items-center justify-center">
                <Image 
                  src="/seravionlogo.png" 
                  alt="Seravion Logo" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              {/* Invisible Text for correct spacing */}
              <div className="flex flex-col opacity-0 select-none justify-center">
                <span className=" text-[19px] leading-none tracking-tight font-semibold">Seravion</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-medium mt-1">Technologies</span>
              </div>
            </Link>
          </div>

          {/* CENTER: DESKTOP NAVIGATION (Invisible for spacing) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-4 lg:gap-6 xl:gap-8 opacity-0 select-none whitespace-nowrap">
            {navLinks.map((item) => (
              <span key={item.name} className="text-[14px] lg:text-[16px] font-normal leading-[1.4] tracking-normal">
                {item.name}
              </span>
            ))}
          </nav>

          {/* RIGHT: CONTACT BUTTON & MOBILE MENU */}
          <div className="flex shrink-0 justify-end items-center gap-6">
            {/* CONTACT BUTTON */}
            <div className="hidden md:block pointer-events-auto">
              <Link href="/contact">
                <button className="bg-[#2693ED] hover:bg-[#1C72BB] text-white text-[14px] lg:text-[16px] font-bold w-[130px] lg:w-[159px] h-[48px] lg:h-[54px] rounded-[8px] flex items-center justify-center leading-[1.4] transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON (Invisible for spacing) */}
            <button className="md:hidden flex flex-col gap-1.5 opacity-0 select-none">
              <span className="w-6 h-0.5 bg-white" />
              <span className="w-6 h-0.5 bg-white" />
              <span className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* LAYER 2: MIX BLEND DIFFERENCE (Text, Hamburger) */}
      <header
        className={`
          fixed top-0 left-0 w-full z-[101] pointer-events-none mix-blend-difference text-white
          transition-transform duration-300 ease-in-out
          ${scrolled ? "py-3" : "py-4"}
          ${shouldHide ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="max-w-[1600px] w-full mx-auto relative flex items-center justify-between px-6 md:px-10 lg:px-12">
          
          {/* LEFT: LOGO AREA */}
          <div className="flex shrink-0 justify-start">
            <Link href="/" className="flex items-center gap-2.5 pointer-events-auto">
              {/* Invisible Logo Icon for spacing */}
              <div className="w-12 h-12 opacity-0" />
              
              {/* Visible text */}
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-[19px] leading-none tracking-tight transition-colors duration-300">
                  Seravion
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 opacity-70 mt-1">
                  Technologies
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-4 lg:gap-6 xl:gap-8 pointer-events-auto whitespace-nowrap">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[14px] lg:text-[16px] font-normal leading-[1.4] tracking-normal transition-colors duration-300 hover:opacity-70"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT: CONTACT BUTTON & MOBILE MENU */}
          <div className="flex shrink-0 justify-end items-center gap-6">
            {/* CONTACT BUTTON (Invisible for spacing) */}
            <div className="hidden md:block opacity-0 select-none">
              <button className="w-[130px] lg:w-[159px] h-[48px] lg:h-[54px] flex items-center justify-center text-[14px] lg:text-[16px] font-bold leading-[1.4] border border-transparent">
                Contact Us
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden flex flex-col gap-1.5 pointer-events-auto"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`w-6 h-0.5 transition-all bg-white ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-6 h-0.5 transition-all bg-white ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 transition-all bg-white ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 bg-[#0a121e] z-[99]
          flex flex-col items-center justify-center gap-8
          transition-transform duration-500 ease-in-out md:hidden
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-2xl font-bold text-white hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          <button className="mt-4 bg-[#3B82F6] text-white text-lg font-bold px-12 py-4 rounded-xl">
            Contact Us
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;