"use client";

export default function AboutGallery() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="w-full px-4 md:px-6">

        {/* On mobile: 2-col grid. On md+: horizontal flex strip */}
        <div className="hidden md:flex gap-3 items-start">

          {/* Image 1 */}
          <div className="flex-[1.55]">
            <img
              src="/aboutus1.png"
              alt="Gallery 1"
              className="w-full h-[305px] object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="flex-[1.15]">
            <img
              src="/aboutus2.png"
              alt="Gallery 2"
              className="w-full h-[305px] object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="flex-[1.55]">
            <img
              src="/aboutus3.png"
              alt="Gallery 3"
              className="w-full h-[305px] object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="flex-[0.75]">
            <img
              src="/aboutus4.png"
              alt="Gallery 4"
              className="w-full h-[305px] object-cover"
            />
          </div>

        </div>

        {/* Mobile gallery: 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {["/aboutus1.png", "/aboutus2.png", "/aboutus3.png", "/aboutus4.png"].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-[180px] object-cover"
            />
          ))}
        </div>

      </div>
    </section>
  );
}