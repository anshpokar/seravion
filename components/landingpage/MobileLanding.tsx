"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

const MobileLanding = ({ startAnimation = true }: { startAnimation?: boolean }) => {
  const containerRef  = useRef<HTMLDivElement | null>(null);
  const lineRef       = useRef<HTMLDivElement | null>(null);
  const wordsRef      = useRef<HTMLDivElement | null>(null);
  const subRef        = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);
  const finalRef      = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!startAnimation) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const words = wordsRef.current
        ? Array.from(wordsRef.current.querySelectorAll<HTMLElement>(".word-wrap"))
        : [];

      // ── ALL initial states ──
      // Each word starts below its overflow:hidden parent, tilted (skewX)
      gsap.set(words[0], { y: "108%", skewX: -8 });   // BUILD.
      gsap.set(words[1], { y: "108%", skewX:  0 });   // SHIP.
      gsap.set(words[2], { y: "108%", skewX:  8 });   // SCALE.
      gsap.set(lineRef.current,  { scaleX: 0, transformOrigin: "left center" });
      gsap.set([subRef.current, scrollHintRef.current], { opacity: 0, y: 14 });
      gsap.set(finalRef.current, { opacity: 0, y: 50 });

      // ── ENTRANCE ──
      const intro = gsap.timeline({ delay: 0.15 });

      // Line draws in
      intro.to(lineRef.current, { scaleX: 1, duration: 0.6, ease: "power3.inOut" });

      // Words clip-reveal from below — skew straightens out as they arrive
      intro.to(words[0], { y: "0%", skewX: 0, duration: 0.9, ease: "expo.out" }, "-=0.25");
      intro.to(words[1], { y: "0%", skewX: 0, duration: 0.9, ease: "expo.out" }, "-=0.75");
      intro.to(words[2], { y: "0%", skewX: 0, duration: 0.9, ease: "expo.out" }, "-=0.75");

      // Labels fade in
      intro.to(
        [subRef.current, scrollHintRef.current],
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out" },
        "-=0.45"
      );

      // ── SCROLL: words scatter out, final content rises in ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1400",
          scrub: 1.2,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      // BUILD exits left + up
      tl.to(words[0], { x: "-90%", y: "-30px", opacity: 0, skewX: -6, duration: 0.6 }, 0);
      // SHIP exits straight up
      tl.to(words[1], { y: "-60px", opacity: 0, duration: 0.5 }, 0.06);
      // SCALE exits right + up
      tl.to(words[2], { x: "90%", y: "-30px", opacity: 0, skewX: 6, duration: 0.6 }, 0.03);

      // Meta labels fade out
      tl.to(
        [subRef.current, scrollHintRef.current, lineRef.current],
        { opacity: 0, duration: 0.3 },
        0
      );

      // Final content rises in
      tl.to(
        finalRef.current,
        { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" },
        0.5
      );

      tl.to({}, { duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, [startAnimation]);

  return (
    <div
      ref={containerRef}
      style={{ height: "215vh", background: "#0a0a0a", position: "relative" }}
    >
      {/* ── STICKY VIEWPORT ── */}
      <div style={{ position: "sticky", top: 0, height: "100dvh", overflow: "hidden" }}>

        {/* Black background */}
        <div style={{ position: "absolute", inset: 0, background: "#0a0a0a", zIndex: 0 }} />

        {/* ══════ PHASE 1: BIG WORDS ══════ */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          {/* Horizontal rule */}
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              top: "88px",
              left: 0,
              right: 0,
              height: "1px",
              background: "rgba(255,255,255,0.13)",
              transform: "scaleX(0)",
              transformOrigin: "left center",
            }}
          />

          {/* BUILD / SHIP / SCALE */}
          <div
            ref={wordsRef}
            style={{ position: "absolute", left: "24px", right: "24px", top: "106px" }}
          >
            {(["BUILD.", "SHIP.", "SCALE."] as const).map((word, i) => {
              const skews = [-8, 0, 8];
              return (
                <div
                  key={word}
                  style={{ overflow: "hidden", lineHeight: 0.9, marginBottom: "2px" }}
                >
                  <span
                    className="word-wrap"
                    style={{
                      display: "block",
                      fontSize: "clamp(72px, 22vw, 110px)",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      lineHeight: 0.9,
                      color: i === 1 ? "#2693ED" : "#ffffff",
                      transform: `translateY(108%) skewX(${skews[i]}deg)`,
                    }}
                  >
                    {word}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom meta */}
          <div
            style={{
              position: "absolute",
              bottom: "38px",
              left: "24px",
              right: "24px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              pointerEvents: "auto",
            }}
          >
            <div ref={subRef} style={{ opacity: 0, transform: "translateY(14px)" }}>
              <p style={{
                fontSize: "9px",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                fontWeight: 500,
                lineHeight: 1.7,
                margin: 0,
              }}>
                Seravion<br />Technologies
              </p>
            </div>

            <div ref={scrollHintRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0, transform: "translateY(14px)" }}>
              <span style={{
                fontSize: "8px",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.22)",
                textTransform: "uppercase",
                fontWeight: 500,
                writingMode: "vertical-rl",
              }}>Scroll</span>
              <div style={{
                width: "1px",
                height: "30px",
                background: "rgba(255,255,255,0.13)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  background: "rgba(255,255,255,0.55)",
                  animation: "scrollLine 1.8s ease-in-out infinite",
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* ══════ PHASE 2: FINAL CONTENT (over dark bg) ══════ */}
        <div
          ref={finalRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 30,
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "88px 24px 44px",
            opacity: 0,
            transform: "translateY(50px)",
          }}
        >
          {/* ── TOP: eyebrow + headline ── */}
          <div>
            <p style={{
              fontSize: "9px",
              letterSpacing: "0.26em",
              color: "rgba(255,255,255,0.42)",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "14px",
            }}>
              — About Us
            </p>

            <h2 style={{
              fontSize: "clamp(26px, 7.2vw, 34px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: 0,
            }}>
              Transforming Ambitious
              <br />Ideas Into Intelligent
              <br /><span style={{ color: "#2693ED" }}>Digital Products.</span>
            </h2>
          </div>

          {/* ── MIDDLE: masked video — edges dissolve into bg ── */}
          <div style={{ display: "flex", justifyContent: "center", flex: 1, alignItems: "center", padding: "8px 0" }}>
            <div
              style={{
                position: "relative",
                width: "95%",
                maxWidth: "360px",
                aspectRatio: "3/4",
                /* NO overflow:hidden, NO border-radius — mask controls the shape */
                /* Stacked masks: left-right fade AND top-bottom fade, intersected */
                maskImage: [
                  "linear-gradient(to right,  transparent 0%, black 18%, black 82%, transparent 100%)",
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                ].join(", "),
                WebkitMaskImage: [
                  "linear-gradient(to right,  transparent 0%, black 18%, black 82%, transparent 100%)",
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
                ].join(", "),
                maskComposite: "intersect",
                WebkitMaskComposite: "destination-in",
              }}
            >
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "0px",   /* no hard clip */
                }}
              />
            </div>
          </div>


          {/* ── BOTTOM: description + CTAs ── */}
          <div style={{ pointerEvents: "auto" }}>
            <p style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              maxWidth: "250px",
              marginBottom: "20px",
            }}>
              End-to-end engineering for teams that refuse to settle for average.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
              <Link
                href="/work"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#ffffff",
                  borderBottom: "1px solid rgba(255,255,255,0.25)",
                  paddingBottom: "2px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  letterSpacing: "0.01em",
                }}
              >
                See Our Work
                <ArrowDown style={{ width: 12, height: 12, transform: "rotate(-90deg)" }} />
              </Link>
              <Link
                href="/about"
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.38)",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MobileLanding;
