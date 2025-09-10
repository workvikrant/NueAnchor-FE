import React from "react";
import bgImage from "../../assets/StarsDetails/cat.png";
import img1 from "../../assets/StarsDetails/img1.png";
import img2 from "../../assets/StarsDetails/img2.png";
import img3 from "../../assets/StarsDetails/img3.png";
import img4 from "../../assets/StarsDetails/img4.png";
import img5 from "../../assets/StarsDetails/img5.png";
import img6 from "../../assets/StarsDetails/img6.png";

const images = [img1, img2, img3, img4, img5, img6];

const CTA = () => (
  <section
    className="relative py-16 overflow-hidden"
    style={{
      minHeight: "400px",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Circles with images */}
    <div>
      {/* Top left */}
      <img
        src={images[0]}
        alt="circle-1"
        className="absolute left-8 top-8 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      {/* Top right */}
      <img
        src={images[1]}
        alt="circle-2"
        className="absolute right-8 top-12 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      {/* Bottom left */}
      <img
        src={images[2]}
        alt="circle-3"
        className="absolute left-16 bottom-8 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      {/* Bottom right */}
      <img
        src={images[3]}
        alt="circle-4"
        className="absolute right-16 bottom-8 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      {/* Center left */}
      <img
        src={images[4]}
        alt="circle-5"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 h-20 rounded-full object-cover shadow-lg"
      />
      {/* Center right */}
      <img
        src={images[5]}
        alt="circle-6"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 h-20 rounded-full object-cover shadow-lg"
      />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-[#222] mb-4">
        No family should walk the autism journey alone
      </h3>
      <p className="text-lg text-[#444] mb-8">
        Join our community of families, educators, and advocates who believe in the power of understanding, support, and shared experiences.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="px-8 py-3 border border-gray-400 rounded-md font-semibold text-[#222] bg-white hover:bg-gray-50 transition"
        >
          Contact with us
        </a>
        <a
          href="#visit"
          className="px-8 py-3 rounded-md font-semibold text-[#144C84] transition"
          style={{ backgroundColor: "#FFD600" }}
        >
          Visit Site
        </a>
      </div>
    </div>
  </section>
);

export default CTA;