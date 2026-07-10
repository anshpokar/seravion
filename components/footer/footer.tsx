"use client";

import React from "react";
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Container from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#030b14] text-white overflow-hidden">
      
      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />

      {/* MAIN CONTENT */}
      <Container className="pt-12 md:pt-[54px] pb-10 md:pb-[42px]">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr] gap-8 lg:gap-[90px]">
          
          {/* LOGO + DESC — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/footer_logo.png"
              alt="Seravion"
              className="w-[140px] md:w-[175px] mb-6"
            />

            <p className="max-w-[290px] text-[14px] md:text-[16px] leading-[1.45] text-white/45 font-normal">
              Seravion improves access, generates
              savings, and increases efficiency for both
              your practice and your patients.
            </p>
          </div>

          {/* NAVIGATE */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-6">Navigate</p>

            <div className="flex flex-col gap-3 md:gap-4 text-[15px] md:text-[18px]">
              <a href="#" className="hover:text-white/70 transition-colors">About Us</a>
              <a href="#" className="hover:text-white/70 transition-colors">Works</a>
              <a href="#" className="hover:text-white/70 transition-colors">Industries</a>
              <a href="#" className="hover:text-white/70 transition-colors">Services</a>
              <a href="#" className="hover:text-white/70 transition-colors">Blogs</a>
              <a href="#" className="hover:text-white/70 transition-colors">FAQs</a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-6">Services</p>

            <div className="flex flex-col gap-3 md:gap-4 text-[15px] md:text-[18px]">
              <a href="#" className="hover:text-white/70 transition-colors">UX/UI Design</a>
              <a href="#" className="hover:text-white/70 transition-colors">Development</a>
              <a href="#" className="hover:text-white/70 transition-colors">Brand Identity</a>
              <a href="#" className="hover:text-white/70 transition-colors">Scheduling</a>
              <a href="#" className="hover:text-white/70 transition-colors">Reminders</a>
            </div>
          </div>

          {/* FOLLOW */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-6">Follow</p>

            <div className="flex flex-col gap-3 md:gap-4 text-[15px] md:text-[18px]">
              <a href="#" className="hover:text-white/70 transition-colors">Facebook</a>
              <a href="#" className="hover:text-white/70 transition-colors">Linkedin</a>
              <a href="#" className="hover:text-white/70 transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 md:mt-[90px] gap-8 sm:gap-0">
          
          {/* CALL */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-10">Call Us</p>

            <a
              href="tel:2059083709"
              className="text-xl md:text-[24px] lg:text-[30px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em] hover:text-white/70 transition-colors"
            >
              (205) 908–3709
            </a>
          </div>

          {/* EMAIL */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-10">Contact Us</p>

            <a
              href="mailto:info@transform9.com"
              className="text-xl md:text-[24px] lg:text-[30px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em] hover:text-white/70 transition-colors break-all"
            >
              info@transform9.com
            </a>
          </div>

          {/* LOCATION */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-10">Location</p>

            <a
              href="#"
              className="text-xl md:text-[24px] lg:text-[30px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em] hover:text-white/70 transition-colors"
            >
              Bengaluru, India
            </a>
          </div>
        </div>
      </Container>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5">
        <Container className="min-h-[72px] py-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* COPYRIGHT */}
          <p className="text-white/35 text-[13px] md:text-[15px]">
            © 2026 Seravion. All Rights Reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3">
            
            <div className="w-[38px] h-[38px] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors">
              <FaYoutube className="text-[15px]" />
            </div>

            <div className="w-[38px] h-[38px] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors">
              <FaLinkedinIn className="text-[15px]" />
            </div>

            <div className="w-[38px] h-[38px] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors">
              <FiX className="text-[15px]" />
            </div>

            <div className="w-[38px] h-[38px] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors">
              <FaInstagram className="text-[15px]" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;