import React from "react";
import servicesImg from "../../assets/StarsDetails/services-center.png"; // Make sure this path and filename are correct

const cardClass =
  "bg-[#FFFBEA] p-6 rounded-xl shadow border flex flex-col justify-between h-[220px] w-full";

const Services = () => (
  <section id="services" className="max-w-7xl mx-auto px-6 py-16">
    <h2
      className="text-center"
      style={{
        fontFamily: "Nunito, sans-serif",
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: "128%",
        letterSpacing: "0%",
        color: "#CE9400",
        margin: 0,
      }}
    >
      Services We Provide
    </h2>
    <p
      className="text-[#374151] text-center font-figtree font-normal text-[16px] leading-[128%] mb-10 mx-auto"
      style={{
        width: "812px",
        height: "20px",
        opacity: 1,
        letterSpacing: "0%",
      }}
    >
      Comprehensive support designed to empower families, students, schools, and
      communities in the autism journey.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left column */}
      <div className="flex flex-col gap-6">
        <div className={cardClass}>
          <div>
            <span className="inline-block bg-[#FFD600] p-2 rounded-lg mb-3">
              {/* Corrected Icon: Parent Guidance */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="14" fill="#FFD600" />
                <path
                  d="M9 17c0-1.657 1.343-3 3-3s3 1.343 3 3"
                  stroke="#AE1A1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="2" fill="#AE1A1E" />
                <circle cx="16" cy="12" r="2" fill="#AE1A1E" />
              </svg>
            </span>
            <h3 className="font-semibold text-[#AE1A1E] text-lg mb-2">
              Parent Guidance
            </h3>
            <p className="text-sm text-[#374151]">
              1:1 consultations, workshops, and comprehensive resources to support
              families at every stage of their autism journey.
            </p>
          </div>
        </div>
        <div className={cardClass}>
          <div>
            <span className="inline-block bg-[#FFD600] p-2 rounded-lg mb-3">
              {/* Corrected Icon: Student Support */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="14" fill="#FFD600" />
                <path
                  d="M14 9v10M9 14h10"
                  stroke="#AE1A1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <h3 className="font-semibold text-[#AE1A1E] text-lg mb-2">
              Student Support
            </h3>
            <p className="text-sm text-[#374151]">
              Academic & career guidance, life skills development, and personalized
              support plans for students with autism.
            </p>
          </div>
        </div>
      </div>
      {/* Center image */}
      <div className="flex justify-center items-center">
        <img
          src={servicesImg}
          alt="Children playing with blocks"
          style={{
            width: "384px",
            height: "477px",
            borderRadius: "16px",
            objectFit: "cover",
            opacity: 1,
            transform: "rotate(0deg)",
          }}
          className="shadow-lg"
        />
      </div>
      {/* Right column */}
      <div className="flex flex-col gap-6">
        <div className={cardClass}>
          <div>
            <span className="inline-block bg-[#FFD600] p-2 rounded-lg mb-3">
              {/* Corrected Icon: School Partnerships */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="14" fill="#FFD600" />
                <path
                  d="M9 15l5-5 5 5"
                  stroke="#AE1A1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <h3 className="font-semibold text-[#AE1A1E] text-lg mb-2">
              School Partnerships
            </h3>
            <p className="text-sm text-[#374151]">
              Teacher training, inclusion programs, and management advisory
              services to create supportive educational environments.
            </p>
          </div>
        </div>
        <div className={cardClass}>
          <div>
            <span className="inline-block bg-[#FFD600] p-2 rounded-lg mb-3">
              {/* Corrected Icon: Community & Awareness */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="14" fill="#FFD600" />
                <path
                  d="M14 9v10M9 14h10"
                  stroke="#AE1A1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <h3 className="font-semibold text-[#AE1A1E] text-lg mb-2">
              Community & Awareness
            </h3>
            <p className="text-sm text-[#374151]">
              Inspiring talks, community events, and shared stories that build
              understanding and acceptance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;