import React from "react";
import helpImg from "../assets/help.jpg";

const HowWeHelp = () => {
  return (
    <section
      className="py-16"
      style={{
        background:
          "linear-gradient(279.59deg, #FFF7E3 0%, #E8FFEF 99.14%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src={helpImg} alt="Help" className="rounded-lg shadow" />
        <div>
          <h3 className="text-2xl font-bold text-[#111927] mb-4">
            How We Help
          </h3>
          <p className="text-[#575757]">
            Our holistic approach combines therapies, family training, and
            community awareness to create lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
