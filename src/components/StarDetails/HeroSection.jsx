import React from "react";
import heroImg from "../../assets/IndianaG/hero.png";
import aboutPhoto from "../../assets/IndianaG/about.png";
import whychoosePhoto from "../../assets/IndianaG/whychoose.png";

;

const Hero = () => {
  return (
    <section className="relative">
      <img src={heroImg} alt="Hero" className="w-full h-[520px] object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold max-w-xl">
            Empowering Families to Navigate Autism with Clarity & Confidence
          </h1>
          <p className="mt-4 max-w-md text-sm md:text-base">
            Evidence-based guidance and compassionate support for every step of
            the journey.
          </p>
          <button className="mt-6 bg-[#1D69B5] px-6 py-3 rounded-md font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
