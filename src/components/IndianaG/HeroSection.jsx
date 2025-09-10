// src/components/IndianaG/HeroSection.jsx
import React from "react";
import heroImg from "../../assets/IndianaG/indiana-hero.png";


 // make sure this path & filename are exact

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1440px] h-[520px] mx-auto overflow-hidden">
      {/* Hero image */}
      <img
        src={heroImg}
        alt="Gift wrapping hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F2937] opacity-[0.28]" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center px-[68px]">
        <div className="max-w-[600px] text-white">
          <span className="inline-block bg-[#FFD600] text-[#1F2937] px-4 py-2 rounded-full text-[13px] font-bold mb-6 tracking-wide font-figtree">
            Indiana G
          </span>

          <h1 className="mt-2 text-[48px] leading-[56px] font-bold font-libre text-white">
            Crafted with love,
            <br />
            delivered with sweetness.
          </h1>

          <p className="mt-6 text-[18px] text-white/90 max-w-[480px] font-medium font-figtree">
            Personalized and thoughtful gifts designed for every occasion —
            blending tradition with modern elegance.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="inline-block bg-[#AE1A1E] hover:bg-[#8C1518] text-white px-7 py-3 rounded-[8px] shadow font-bold text-[16px] font-figtree"
            >
              Visit Site
            </a>
            <a
              href="#about"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-[8px] font-bold text-[16px] font-figtree"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
