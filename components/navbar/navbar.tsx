"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[100]
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "bg-[#0a121e]/90 backdrop-blur-md py-3 border-b border-white/10"
            : "bg-white py-4"
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          <div className="flex flex-col leading-[1.1]">
            <span
              className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? "text-white" : "text-[#0a121e]"
              }`}
            >
              Seravion
            </span>

            <span
              className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Technologies
            </span>
          </div>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[13px] font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[13px] font-bold px-8 py-2.5 rounded-[10px] transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              Contact Us
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 transition-all ${
              scrolled ? "bg-white" : "bg-black"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />

          <span
            className={`w-6 h-0.5 transition-all ${
              scrolled ? "bg-white" : "bg-black"
            } ${menuOpen ? "opacity-0" : ""}`}
          />

          <span
            className={`w-6 h-0.5 transition-all ${
              scrolled ? "bg-white" : "bg-black"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 bg-[#0a121e] z-[90]
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
    </header>
  );
};

export default Navbar;