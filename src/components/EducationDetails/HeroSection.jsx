import React from "react";
import Heroimg from "../../assets/EducationDetailspage/EducationHero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[420px] flex items-center bg-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Heroimg})` }}
      >
        {/* Adjusted gradient for less white on right side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.7) 65%, #EAE7DE 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-24 py-12 w-full max-w-[600px]">
        <span
          className="inline-block bg-[#FFE7B2] text-[#1D69B5] font-semibold text-xs shadow-sm"
          style={{
            width: "200px",
            height: "30px",
            borderRadius: "100px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#F5D9A6",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "28px",
            paddingRight: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
            opacity: 1,
          }}
        >
          NeuAnchor Education
        </span>
        <h1 className="text-3xl lg:text-4xl font-bold text-black mb-2 leading-tight font-baskerville">
          20+ Years of Experience in Building
        </h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#3A7F4B] mb-4 font-baskerville">
          Future-Ready Schools
        </h2>
        <p className="text-base lg:text-lg text-black mb-6 leading-relaxed font-Figtree">
          NeuAnchor Education supports schools, trusts, and institutions in
          building, scaling, and reimagining education for the future.
        </p>
        <div>
          <a
            href="#"
            className="inline-block bg-[#3A7F4B] text-white font-semibold rounded px-6 py-2 text-base shadow hover:bg-[#2e633a] transition"
          >
            Visit Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;