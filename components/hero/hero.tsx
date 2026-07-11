import Image from "next/image";
const Hero = () => {
 return (
   <section className="relative min-h-screen bg-white flex flex-col items-center justify-start pt-32 pb-0 overflow-hidden">
     {/* Background subtle grid */}
     <div
       className="absolute inset-0 opacity-[0.03]"
       style={{
         backgroundImage:
           "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
         backgroundSize: "60px 60px",
       }}
     />
     {/* Badge */}
     <div className="relative z-10 flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
       <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
       Digital Experience Agency
     </div>
     {/* Headline */}
     <div className="relative z-10 text-center max-w-5xl px-6">
       <h1 className="font-semibold text-[42px] md:text-[72px] lg:text-[80px] leading-[1.1] text-black tracking-tight">
         Engineering the future of
         <br />
         <span className="text-blue-600">digital experience</span>
       </h1>
       <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
         We design and build transformative digital products that help businesses grow, innovate, and lead in the modern age.
       </p>
       {/* CTAs */}
       <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
         <button suppressHydrationWarning className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300">
           Explore Works
         </button>
         <button suppressHydrationWarning className="text-gray-700 hover:text-black text-sm font-medium px-8 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 transition-all flex items-center gap-2">
           <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
             <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
               <path d="M1 1L7 5L1 9V1Z" fill="#3B82F6" />
             </svg>
           </span>
           Watch Showreel
         </button>
       </div>
     </div>
     {/* Trust Badges */}
     <div className="relative z-10 mt-10 flex items-center gap-6 text-xs text-gray-400">
       <div className="flex items-center gap-1.5">
         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
           <path d="M7 1L8.5 5H13L9.5 7.5L10.5 11.5L7 9L3.5 11.5L4.5 7.5L1 5H5.5L7 1Z" fill="#F59E0B" />
         </svg>
         <span>4.9/5 Rating</span>
       </div>
       <span className="w-px h-4 bg-gray-200" />
       <span>50+ Projects Delivered</span>
       <span className="w-px h-4 bg-gray-200" />
       <span>12+ Countries</span>
     </div>
     {/* Device Mockup */}
     <div className="relative z-10 w-full max-w-5xl mx-auto mt-12 px-4">
       <div className="relative w-full" style={{ paddingBottom: "58%" }}>
         {/* Glow effect */}
         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-50 to-transparent z-0 rounded-b-3xl" />
         {/* Device image */}
         <div className="absolute inset-0 flex items-end justify-center">
           <div className="relative w-full h-full">
             <Image
               src="/placeholder.png"
               alt="Seravion Platform Preview"
               fill
               className="object-contain object-bottom"
               priority
             />
             {/* Screen overlay with video */}
             <div className="absolute inset-x-[12%] top-[4%] bottom-[8%] overflow-hidden rounded-[12px]">
               <video
                 src="/hero-video.mp4"
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};
export default Hero;

