// ==========================
// FILE: components/landingpage/landing.tsx
// FINAL FIX — KEEP STICKY, REMOVE GSAP PIN (NO FUNCTIONALITY CHANGE)
// ==========================
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

const Landing = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
const initialTextRef = useRef<HTMLDivElement | null>(null);
const finalTextRef = useRef<HTMLDivElement | null>(null);
const deviceRef = useRef<HTMLDivElement | null>(null);
const videoWrapperRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const device = deviceRef.current;
const videoWrapper = videoWrapperRef.current;
const finalText = finalTextRef.current;

if (!device || !videoWrapper || !finalText) return;

      const getScale = () => {
        const rect = videoWrapper.getBoundingClientRect();
        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;
        // Return exact scale to cover the screen. No extra multiplier needed since transformOrigin is perfectly centered.
        return Math.max(scaleX, scaleY);
      };



      gsap.set(finalText, {
        y: 140,
        opacity: 0,
      });

      gsap.set(device, {
        scale: 1.0,
        y: 0,
        // Set transformOrigin to the exact center of the video wrapper (49.5% X, 47% Y) 
        // to guarantee perfectly symmetrical scaling without any edge gaps
        transformOrigin: "49.5% 47%",
        willChange: "transform, opacity",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1.6,
          pin: false,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: "none",
        },
      });

      tl.to(initialTextRef.current, {
        opacity: 0,
        y: -80,
        duration: 0.6,
      });

      tl.to(
        device,
        {
          scale: () => getScale(),
          // Shifted further down so the logo sits lower on the screen
          y: () => -window.innerHeight * 0.20,
          duration: 2.2,
        },
        0
      );

      tl.to(
        device.querySelector("img"),
        {
          opacity: 0,
          duration: 0.6,
        },
        1.4
      );

      tl.to(
        finalText,
        {
          opacity: 1,
          y: 0,
          duration: 2.0,
          ease: "power4.out",
        },
        // Changed from 2 to 2.8 so it waits for the 2.2s zoom to finish, plus an extra 0.6s scroll delay
        2.8
      );

      tl.to({}, { duration: 0.5 });
      tl.to({}, { duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[260vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* INITIAL TEXT */}
        <div
          ref={initialTextRef}
          className="absolute inset-x-0 top-[96px] lg:top-[110px] flex flex-col items-center justify-start text-center z-30 px-6"
        >
          <h1 className="font-medium text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] leading-[1.15] text-[#394247] max-w-4xl tracking-tight">
            The Digital Engineering Partner Built for What's Coming Next
          </h1>

          <button 
            suppressHydrationWarning 
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="mt-6 md:mt-8 bg-[#2693ED] hover:bg-[#1C72BB] text-white text-[15px] md:text-[16px] font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 leading-[1.4] transition-all shadow-sm hover:shadow-md active:scale-95 mx-auto"
          >
            Explore Work
            <ArrowDown className="w-5 h-5 text-white animate-bounce" />
          </button>
        </div>

        {/* FINAL TEXT */}
        <div
          ref={finalTextRef}
          className="absolute inset-0 z-30 px-6 md:px-16 will-change-transform pointer-events-none"
        >
          {/* LEFT SIDE CONTENT */}
          <div className="h-full flex flex-col justify-between max-w-xl pointer-events-auto">
            <div className="pt-24 md:pt-28">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-3 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-xs tracking-widest text-white">
                  ABOUT US
                </p>
              </div>

            <h1 className="mt-4 font-semibold text-3xl md:text-[42px] leading-[1.1] text-white">
              {/*We offer a full <br />
              range of business <br />
              and consulting */}
              Transforming Ambitious <br/>Ideas Into Intelligent <br />Digital Products.

              </h1>
            </div>

            <div className="pb-12">
              <p className="text-sm text-gray-300 max-w-[280px] mb-5 leading-relaxed">
                {/* Seravion is a people-first design studio that cares as much about your business and product as you do. */}
                Seravion Technologies is your end-to-end technology partner. We architect, build, and scale digital products that redefine industries.

              </p>

              <button suppressHydrationWarning className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg border border-white/20 text-sm hover:bg-white hover:border-white hover:text-black transition-all duration-300 font-medium">
                Know More
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: LATEST PROJECTS CARD */}
          <div className="hidden lg:block absolute bottom-12 right-6 md:right-16 w-[320px] bg-[#0A1016] border border-white/10 pointer-events-auto group cursor-pointer hover:border-white/30 transition-colors">
            <div className="relative w-full h-[160px] flex p-1 pb-0">
              {/* Left Image Placeholder */}
              <div className="w-1/2 bg-[#cfcfcf] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#0c1f4c] rounded-md opacity-90"></div>
                </div>
              </div>
              {/* Right Image Placeholder */}
              <div className="w-1/2 bg-black relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-24 bg-gray-900 rounded-xl border-4 border-gray-800"></div>
                </div>
              </div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-gradient-to-tr from-gray-700/80 to-gray-500/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
            
            <div className="py-5 text-center bg-[#0A1016]">
              <span className="text-white text-[15px] font-medium tracking-wide">
                Latest Projects <span className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </span>
            </div>
          </div>
        </div>

        {/* DEVICE */}
        <div className="absolute inset-x-0 bottom-[-40px] flex justify-center z-20 pointer-events-none">
          <div
            ref={deviceRef}
            className="relative w-[92%] md:w-[85%] lg:w-[80%] max-w-[850px] 2xl:max-w-[1050px] aspect-[896/380]"
          >
            <div
              ref={videoWrapperRef}
              className="absolute overflow-hidden rounded-[12px] shadow-inner z-0"
              style={{
                top: "2%",
                left: "18%",
                width: "63%",
                height: "90%",
              }}
            >
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <Image
              src="/tab.png"
              alt="Device"
              fill
              className="object-cover z-10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;