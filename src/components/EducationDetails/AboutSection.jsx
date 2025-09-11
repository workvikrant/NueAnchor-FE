import React from "react";
import AboutImg from "../../assets/EducationDetailspage/AboutNeuAnchor.png"; // Use your actual image path

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-24 py-16 bg-white">
      {/* Image & Stats */}
      <div className="relative" style={{ width: "592px", height: "388px" }}>
        <img
          src={AboutImg}
          alt="NeuAnchor School Building"
          className="w-full h-full object-cover"
          style={{ borderRadius: "32px" }}
        />
        {/* Stat Cards */}
        <div className="absolute left-6 bottom-6 flex gap-4">
          <div className="bg-[#FFE7B2] rounded-[16px] px-5 py-3 shadow text-left border border-[#F5D9A6]">
            <div className="font-bold text-xl text-[#1D69B5]">20+</div>
            <div className="text-xs text-black font-semibold mt-1">
              Years in Education Consulting
            </div>
          </div>
          <div className="bg-[#FFE7B2] rounded-[16px] px-5 py-3 shadow text-left border border-[#F5D9A6]">
            <div className="font-bold text-xl text-[#1D69B5]">100+</div>
            <div className="text-xs text-black font-semibold mt-1">
              Teachers Trained
            </div>
          </div>
        </div>
      </div>
      {/* Text Content */}
      <div className="max-w-[520px] w-full">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#3A7F4B] mb-4 font-baskerville">
          About NeuAnchor Education
        </h2>
        <p className="text-base lg:text-lg text-black mb-4 leading-relaxed font-Figtree">
          NeuAnchor Education supports schools, trusts, and institutions in
          building comprehensive educational ecosystems that prepare students for
          tomorrow’s challenges.
        </p>
        <p className="text-base lg:text-lg text-black mb-4 leading-relaxed font-Figtree">
          With over two decades of experience, we’ve guided countless
          institutions through transformational journeys, helping them establish
          robust foundations, scale effectively, and innovate continuously.
        </p>
        <p className="text-base lg:text-lg text-black leading-relaxed font-Figtree">
          Our holistic approach combines strategic consulting, operational
          excellence, and educational innovation to create lasting impact in the
          communities we serve.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;