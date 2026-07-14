// ==========================
// FILE: components/logostrip/logostrip.tsx
// ==========================
"use client";

const LOGOS = [
  { id: 1, name: "Akshar Decore", src: "/akshar-decore.png" },
  { id: 2, name: "Careerwale", src: "/careerwale.png" },
  { id: 3, name: "Gandhi Investmall", src: "/gandhi-investmall.png" },
  { id: 4, name: "HBR Tech", src: "/hbr-tech.png" },
  { id: 5, name: "Pestmed", src: "/pestmed-logo.png" },
  { id: 6, name: "SCCA", src: "/sspc-logo.png" },
  { id: 7, name: "Maitri", src: "/maitri-logo.png" },
  { id: 8, name: "Reelty", src: "/reelty logo.png" },
  { id: 9, name: "Sang", src: "/sang-logo.png" },
  { id: 10, name: "Leo9", src: "/leo9.png" },
  { id: 11, name: "Unique", src: "/unique.png" },
  { id: 12, name: "SCCA 1", src: "/scca-logo__1.png" },
  { id: 13, name: "Furrl", src: "/Furrl.png" },
  { id: 14, name: "Chimera", src: "/chimera.png" },
  { id: 15, name: "Carevo", src: "/CarevoLogo.png" },
];

const LogoStrip = () => {
  return (
    <section className="w-full bg-[#061018] py-12 overflow-hidden flex items-center relative">
      {/* Stronger fade effect on the left and right edges */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-[#061018] via-[#061018]/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-[#061018] via-[#061018]/80 to-transparent z-10 pointer-events-none"></div>
      
      {/* 
        The parent container is just a flex wrapper.
        The animation is applied to the two child containers instead.
      */}
      <div className="flex w-full">
        
        {/* FIRST SET OF LOGOS */}
        <div className="flex shrink-0 animate-marquee items-center justify-around min-w-full gap-16 md:gap-24 pr-16 md:pr-24">
          {LOGOS.map((logo) => (
            <div key={logo.id} className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-14 md:h-20 w-auto object-contain max-w-[220px] opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
            </div>
          ))}
        </div>

        {/* SECOND SET OF LOGOS (Exact duplicate for seamless looping) */}
        <div className="flex shrink-0 animate-marquee items-center justify-around min-w-full gap-16 md:gap-24 pr-16 md:pr-24" aria-hidden="true">
          {LOGOS.map((logo) => (
            <div key={`${logo.id}-duplicate`} className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-14 md:h-20 w-auto object-contain max-w-[220px] opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoStrip;