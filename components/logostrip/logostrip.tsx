// ==========================
// FILE: components/logostrip/logostrip.tsx
// ==========================
"use client";

const LOGOS = [
  { id: 1, name: "Amazon", src: "/amazon-logo.png" },
  { id: 2, name: "Google", src: "/google_logo_grayed_7-1128x376_983de733_transparent-removebg-preview.png" },
  { id: 3, name: "Meta", src: "/Meta-logo.png" },
  { id: 4, name: "Microsoft", src: "/microsoft-logo-png-transparent-background-11660471226dms6lxgzs1-removebg-preview.png" },
  { id: 5, name: "Netflix", src: "/netflix_PNG25.png" },
  { id: 6, name: "OIP", src: "/OIP-removebg-preview.png" },
  { id: 7, name: "Oracle", src: "/Oracle-Logotipo-1995-Presente-removebg-preview.png" },
  { id: 8, name: "SpaceX", src: "/SpaceX-Emblema-removebg-preview.png" },
  { id: 9, name: "Tesla", src: "/Tesla_Logo-removebg-preview.png" },
];

const LogoStrip = () => {
  return (
    <section className="w-full bg-[#061018] py-16 overflow-hidden flex items-center relative">
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
                className="h-10 md:h-12 w-auto object-contain max-w-[160px] opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
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
                className="h-10 md:h-12 w-auto object-contain max-w-[160px] opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoStrip;