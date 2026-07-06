"use client";

import React, { useState, useEffect, useRef } from "react";

const countryCodes = [
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+91", label: "IN" },
  { code: "+61", label: "AU" },
  { code: "+81", label: "JP" },
  { code: "+49", label: "DE" },
  { code: "+33", label: "FR" },
  { code: "+86", label: "CN" },
  { code: "+55", label: "BR" },
  { code: "+7", label: "RU" },
  { code: "+27", label: "ZA" },
  { code: "+971", label: "AE" },
  { code: "+65", label: "SG" },
  { code: "+34", label: "ES" },
  { code: "+39", label: "IT" },
];

const ContactUs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+91");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative h-[92vh] w-full bg-[#071019] text-white">
      
      {/* BACKGROUNDS WRAPPER */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* GRID OVERLAY */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "106px 106px",
          }}
        />

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/contact_background.png"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* CONTENT */}
      <div className="relative z-30 h-full flex flex-col justify-end">
        
        {/* HERO TEXT */}
        <div className="px-[118px] pb-[42px]">
          <h1 className="text-[62px] leading-[0.98] tracking-[-0.06em] font-semibold max-w-[620px]">
            Have an idea?
            <br />
            TELL US
          </h1>
        </div>

        {/* BOTTOM PANELS */}
        <div className="flex w-full h-[185px]">
          
          {/* LEFT PANEL */}
          <div className="relative w-1/2">
            
            {/* PANEL BACKGROUNDS WRAPPER */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {/* BLUE + BLACK GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#244ea6] via-[#2d6cff] to-[#1a1a1a]" />

              {/* BLUR LIGHT */}
              <div className="absolute left-[280px] top-0 h-full w-[240px] bg-[#76a8ff] blur-[110px] opacity-60" />
            </div>

            <div className="relative z-10 h-full px-[115px] py-[28px] flex flex-col justify-between">
              
              {/* TOP LABEL */}
              <p className="text-[15px] text-white font-normal tracking-[-0.01em]">
                Test It Yourself
              </p>

              {/* BOTTOM AREA */}
              <div className="flex items-end justify-between">
                
                {/* INPUT */}
                <div className="relative w-[320px] h-[52px] bg-white/10 backdrop-blur-sm border border-white/10 flex items-center px-4 focus-within:border-white/30 transition-colors z-20">
                  
                  {/* Custom Glassmorphism Country Code Dropdown */}
                  <div 
                    ref={dropdownRef}
                    className="relative flex items-center border-r border-white/10 pr-2 h-3/5"
                  >
                    <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-1 bg-transparent text-white/90 text-[15px] font-normal outline-none pr-1"
                    >
                      {selectedCode}
                      <svg 
                        className="w-3 h-3 text-white/50 pointer-events-none transition-transform duration-200" 
                        style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>

                    {/* Glass Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-[40px] left-[-16px] w-[140px] max-h-[180px] overflow-y-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-md py-1 z-50 shadow-2xl flex flex-col scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        {countryCodes.map((c) => (
                          <button
                            key={c.code}
                            onClick={() => {
                              setSelectedCode(c.code);
                              setIsDropdownOpen(false);
                            }}
                            className="text-left px-4 py-2 text-white/90 text-[14px] hover:bg-white/20 transition-colors flex items-center justify-between"
                          >
                            <span>{c.label}</span>
                            <span className="text-white/50 text-[12px]">{c.code}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Phone Input */}
                  <input 
                    type="tel"
                    placeholder="Mobile Number"
                    className="bg-transparent text-white text-[15px] font-normal outline-none w-full placeholder:text-white/50 pl-3"
                  />
                </div>

                {/* BUTTON */}
                <button className="text-[32px] leading-none font-light underline underline-offset-[10px]">
                  Get a Call
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-1/2 bg-[#9CEC84] text-black">
            <div className="h-full px-[46px] py-[28px] flex flex-col">
              
              {/* TOP LABEL */}
              <p className="text-[15px] font-normal">
                See It in Action
              </p>

              {/* CENTER BUTTON */}
              <div className="flex-1 flex items-center justify-center">
                <button className="text-[32px] leading-none font-normal underline underline-offset-[10px]">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;