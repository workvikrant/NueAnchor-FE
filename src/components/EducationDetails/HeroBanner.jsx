import React from "react";
import bgImg from "../../assets/EducationDetailspage/hero-bg.png";

const HeroBanner = () => {
  return (
    <section
      aria-label="NeuAnchor Education Hero Banner"
      className="w-full overflow-hidden relative flex items-center justify-center"
      style={{
        background: `url(${bgImg}) center/cover no-repeat`,
        minHeight: "254px",
        padding: "48px 0",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(29,105,181,0.75) 0%, rgba(58,127,75,0.75) 100%)",
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1100px] text-center">
        <h1
          className="mx-auto font-bold text-white leading-tight"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "28px",
          }}
        >
          <span className="block sm:text-[32px] md:text-[36px] lg:text-[40px]">
            Let's Build the School of Tomorrow, Today
          </span>
        </h1>

        <p
          className="mx-auto text-white mt-4 max-w-[820px] leading-relaxed"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "15px",
          }}
        >
          Partner with NeuAnchor Education for a smarter, future-ready approach
          to educational excellence. Transform your institution with proven
          strategies and expert guidance.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-center gap-6">
          {/* Outline button — now same size as Visit Site */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md h-12 w-[170px] box-border px-6 font-medium border-2 border-white text-white transition-all duration-200 hover:bg-white hover:text-[#3A7F4B] hover:border-[#3A7F4B]"
          >
            Connect with Us
          </button>

          {/* Solid button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md h-12 w-[170px] box-border px-6 font-semibold bg-white text-[#3A7F4B] transition-all duration-200 hover:bg-[#3A7F4B] hover:text-white"
          >
            Visit Site
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
