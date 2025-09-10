// src/components/IndianaG/About.jsx
import React from "react";
import aboutPhoto from "../../assets/IndianaG/about.png";

const About = () => {
  return (
    <section
      className="mt-12 md:mt-24 pt-12 pb-12 bg-[#F8F3EF]" // Figma bg color
      id="about"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:min-h-[512px]">
          {/* IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-2xl shadow-lg h-64 md:h-[512px] w-full max-w-[480px]">
              <img
                src={aboutPhoto}
                alt="Person unwrapping gift - Indiana G about"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="md:pl-8">
            <h3 className="text-[32px] md:text-[40px] font-bold mb-3 text-[#1F2937] font-figtree">
              About us
            </h3>
            <h4 className="mb-6 text-[24px] font-bold text-[#A21114] font-figtree">
              Gifting with Grace & Meaning
            </h4>
            <p className="mb-6 text-[18px] font-medium text-[#1F2937] font-figtree">
              At Indiana G, we believe that every gift should speak from the heart.
              Rooted in tradition yet designed for the modern woman, our gift sets are
              more than just products — they’re curated experiences meant to delight,
              pamper, and inspire. Whether it's a celebration, a gesture of love, or a
              token of gratitude, each box is thoughtfully crafted to make her feel
              truly special.
            </p>
            <p className="mb-0 text-[18px] font-semibold text-[#A21114] font-figtree">
              With high-quality ingredients, elegant packaging, and a touch of luxury —
              Indiana G is your go-to choice for gifting with purpose and poise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
