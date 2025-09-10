// src/components/StarDetails/Hero.jsx
import React from "react";
import heroChild from "../../assets/StarsDetails/hero-child.png"; // ✅ make sure this path and file extension are correct

const Hero = () => {
  return (
    <section className="relative w-full max-w-[1440px] h-[520px] mx-auto overflow-hidden">
      {/* Hero image */}
      <img
        src={heroChild}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F2937] opacity-[0.28]" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center px-[68px]">
        <div className="max-w-[600px] text-white">
          <span className="inline-block bg-[#FFD600] text-[#1F2937] px-4 py-2 rounded-full text-[13px] font-bold mb-6 tracking-wide font-figtree">
            NeuAnchor Stars
          </span>

          <h1 className="mt-2 text-[48px] leading-[56px] font-bold font-libre text-white">
            Empowering Families to
            <br />
            Navigate Autism with{" "}
            <span className="text-[#0b74a6]">Clarity & Confidence</span>
          </h1>

          <p className="mt-6 text-[18px] text-white/90 max-w-[480px] font-medium font-figtree">
            Guiding families, schools, and communities with two decades of lived
            experience and proven solutions.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="inline-block bg-[#0b74a6] hover:bg-[#095a85] text-white px-7 py-3 rounded-[8px] shadow font-bold text-[16px] font-figtree"
            >
              Visit Site
            </a>
            {/* Removed Learn More button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
