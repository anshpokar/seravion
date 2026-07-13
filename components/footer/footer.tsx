"use client";

import React from "react";
import Link from "next/link";
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

            <p className="text-[14px] md:text-[16px] leading-[1.45] text-white/45 font-normal">
              Seravion Technologies is a global digital engineering company delivering premium software, AI solutions, and product engineering services to startups, scaleups, and enterprises worldwide. Built in India. Trusted globally.
            </p>
            <p className="mt-6 text-[12px] md:text-[13px] text-white/40 font-medium tracking-wide">
              ISO-Certified &nbsp;|&nbsp; NDA-Protected &nbsp;|&nbsp; SLA-Backed &nbsp;|&nbsp; Agile Delivery &nbsp;|&nbsp; Global Teams
            </p>
          </div>

          {/* NAVIGATE */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-6">Navigate</p>

            <div className="flex flex-col gap-3 md:gap-4 text-[15px] md:text-[18px]">
              <Link href="/about" className="hover:text-white/70 transition-colors">About Us</Link>
              <Link href="/work" className="hover:text-white/70 transition-colors">Works</Link>
              <Link href="/industries" className="hover:text-white/70 transition-colors">Industries</Link>
              <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Blogs</Link>
              <Link href="/faqs" className="hover:text-white/70 transition-colors">FAQs</Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-6">Services</p>

            <div className="flex flex-col gap-3 md:gap-4 text-[15px] md:text-[18px]">
              <Link href="/services/ai-machine-learning" className="hover:text-white/70 transition-colors">AI & Machine Learning</Link>
              <Link href="/services/full-stack-development" className="hover:text-white/70 transition-colors">Full Stack Development</Link>
              <Link href="/services/mobile-app-development" className="hover:text-white/70 transition-colors">Mobile App Development</Link>
              <Link href="/services/web-development" className="hover:text-white/70 transition-colors">Web Development</Link>
              <Link href="/services/cloud-devops" className="hover:text-white/70 transition-colors">Cloud & DevOps</Link>
              <Link href="/services/erp-crm-development" className="hover:text-white/70 transition-colors">ERP & CRM</Link>
              <Link href="/services/saas-product-development" className="hover:text-white/70 transition-colors">SaaS Product</Link>
              <Link href="/services/ui-ux-design" className="hover:text-white/70 transition-colors">UI/UX Design</Link>
              <Link href="/services/iot-solutions" className="hover:text-white/70 transition-colors">IoT Solutions</Link>
              <Link href="/services/product-engineering" className="hover:text-white/70 transition-colors">Product Engineering</Link>
              <Link href="/services/dedicated-development-teams" className="hover:text-white/70 transition-colors">Dedicated Teams</Link>
              <Link href="/services/digital-transformation" className="hover:text-white/70 transition-colors">Digital Transformation</Link>
              <Link href="/services/maintenance-support" className="hover:text-white/70 transition-colors">Maintenance & Support</Link>
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
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 md:mt-[90px] gap-8 sm:gap-6">
          
          {/* START A PROJECT */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-8">Start a Project or General Inquiries</p>
            <a
              href="mailto:hello@seravion.com"
              className="text-lg md:text-[22px] lg:text-[26px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em] hover:text-white/70 transition-colors break-all"
            >
              sales@seraviontechnologies.com
            </a>
          </div>

          {/* JOIN OUR TEAM */}
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-8">Join Our Team</p>
            <a
              href="mailto:careers@seravion.com"
              className="text-lg md:text-[22px] lg:text-[26px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em] hover:text-white/70 transition-colors break-all"
            >
              hr@seraviontechnologies.com
            </a>
          </div>

          {/* GENERAL INQUIRIES
          <div>
            <p className="text-white/35 text-[13px] md:text-[15px] mb-4 md:mb-8">General Inquiries</p>
            <a
              href="mailto:info@seravion.com"
              className="text-lg md:text-[22px] lg:text-[26px] leading-none underline underline-offset-[8px] font-light tracking-[-0.04em] hover:text-white/70 transition-colors break-all"
            >
              info@seravion.com
            </a>
          </div> */}
        </div>
      </Container>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5">
        <Container className="min-h-[72px] py-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* COPYRIGHT & LEGAL */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <p className="text-white/35 text-[13px] md:text-[14px]">
              © 2026 Seravion Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-white/35 text-[13px] md:text-[14px]">
              <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="#" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
            </div>
          </div>

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