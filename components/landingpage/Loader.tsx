"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const percentRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const loaderContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Lock scrolling on body/html
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const progressObj = { value: 0 };

    // 2. Initial animations (fade in letters and logo)
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );

      gsap.to(".loader-char", {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
      });

      // 3. Fast simulated loading up to 85%
      const progressTimeline = gsap.to(progressObj, {
        value: 85,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
          const current = Math.floor(progressObj.value);
          if (percentRef.current) {
            percentRef.current.innerText = current.toString().padStart(2, "0");
          }
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${current}%`;
          }
        },
      });

      // 4. Asset preloading promises
      const fontsPromise = typeof document !== "undefined" ? document.fonts.ready : Promise.resolve();

      const imgPromise = new Promise((resolve) => {
        const img = new globalThis.Image();
        img.src = "/tab.png";
        img.onload = () => resolve(true);
        img.onerror = () => resolve(true); // Resolve anyway
      });

      const videoPromise = new Promise((resolve) => {
        const video = document.createElement("video");
        video.src = "/hero-video.mp4";
        video.preload = "auto";
        video.oncanplay = () => resolve(true);
        video.oncanplaythrough = () => resolve(true);
        video.onerror = () => resolve(true); // Resolve anyway
        setTimeout(() => resolve(true), 3500); // 3.5s timeout safety
      });

      // 5. Complete transition when everything is loaded
      Promise.all([fontsPromise, imgPromise, videoPromise]).then(() => {
        if (!loaderContainerRef.current) return;

        progressTimeline.kill();

        gsap.to(progressObj, {
          value: 100,
          duration: 0.4,
          ease: "power2.out",
          onUpdate: () => {
            if (!loaderContainerRef.current) return;
            const current = Math.floor(progressObj.value);
            if (percentRef.current) {
              percentRef.current.innerText = current.toString().padStart(2, "0");
            }
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${current}%`;
            }
          },
          onComplete: () => {
            if (!loaderContainerRef.current) return;
            // Exit animations
            const exitTl = gsap.timeline({
              onComplete: () => {
                // Restore scroll
                document.documentElement.style.overflow = "";
                document.body.style.overflow = "";
                onComplete();
              },
            });

            // Fade out center loader elements
            const elementsToAnimate = [
              percentRef.current?.parentElement,
              progressBarRef.current?.parentElement,
              logoRef.current,
            ].filter((el): el is HTMLElement => !!el);

            exitTl.to(
              [...elementsToAnimate, ".loader-char"],
              {
                opacity: 0,
                y: -15,
                duration: 0.35,
                stagger: 0.03,
                ease: "power2.in",
              }
            );

            // Curtain slide up to reveal landing page
            exitTl.to(
              loaderContainerRef.current,
              {
                yPercent: -100,
                duration: 0.75,
                ease: "power4.inOut",
              },
              "-=0.15"
            );
          },
        });
      });
    }, loaderContainerRef);

    return () => {
      ctx.revert();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderContainerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A1016] text-white select-none pointer-events-auto"
    >
      <div className="flex flex-col items-center text-center">
        {/* LOGO */}
        <div ref={logoRef} className="relative w-16 h-16 mb-5 opacity-0">
          <Image
            src="/seravionlogo.png"
            alt="Seravion Logo"
            fill
            priority
            className="object-contain filter drop-shadow-[0_0_15px_rgba(38,147,237,0.45)]"
          />
        </div>

        {/* BRAND NAME */}
        <h2 className="text-[12px] tracking-[0.45em] uppercase font-bold text-[#E5E9EC]/90 mb-8 flex gap-[0.1em]">
          {"SERAVION".split("").map((char, i) => (
            <span key={i} className="loader-char inline-block opacity-0 translate-y-3">
              {char}
            </span>
          ))}
        </h2>

        {/* PROGRESS BAR */}
        <div className="w-[180px] h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-3">
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#2693ED] to-[#60A5FA] shadow-[0_0_8px_#2693ed]"
          />
        </div>

        {/* PERCENTAGE */}
        <div className="text-[10px] font-mono tracking-[0.25em] text-[#2693ED]/90 font-medium">
          LOADING <span ref={percentRef}>00</span>%
        </div>
      </div>
    </div>
  );
}
