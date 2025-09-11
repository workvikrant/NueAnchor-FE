import React from "react";
import SetupImg from "../../assets/EducationDetailspage/SetupSolutions.png";
import StrategyImg from "../../assets/EducationDetailspage/StrategicGuidance.png";
import InclusiveImg from "../../assets/EducationDetailspage/InclusiveDesign.png";
import WorkshopImg from "../../assets/EducationDetailspage/WorkshopsTraining.png";

const cardData = [
  {
    img: SetupImg,
    title: "Complete Setup Solutions",
    desc:
      "End-to-end consultancy covering procedures, compliances, business plans, and curriculum development for new institutions.",
    bullets: [
      "Business Plan Development",
      "Regulatory Compliance",
      "Curriculum Design",
      "Infrastructure Planning",
    ],
    cardStyle: "border border-[#EAE7DE]",
  },
  {
    img: StrategyImg,
    title: "Strategic Guidance",
    desc:
      "Revenue model optimization, strategic partnerships, competitive pricing, and comprehensive marketing strategies.",
    bullets: [
      "Revenue Optimization",
      "Partnership Development",
      "Marketing Strategy",
      "Growth Planning",
    ],
    cardStyle: "border border-[#EAE7DE]",
  },
  {
    img: InclusiveImg,
    title: "Inclusive Education Design",
    desc:
      "Special needs integration, extracurricular program development, and comprehensive sports infrastructure planning.",
    bullets: [
      "Special Needs Support",
      "Activity Programs",
      "Sports Infrastructure",
      "Inclusive Policies",
    ],
    cardStyle: "border border-[#B6E2C6] bg-[#F7FBF9]",
  },
  {
    img: WorkshopImg,
    title: "Workshops & Training",
    desc:
      "Professional development programs designed for teachers, students, administrators, and educational leadership teams.",
    bullets: [
      "Teacher Development",
      "Leadership Training",
      "Student Programs",
      "Admin Workshops",
    ],
    cardStyle: "border border-[#EAE7DE]",
  },
];

const WhatWeDo = () => (
  <section className="px-6 lg:px-24 py-16 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <h2
      className="text-2xl lg:text-3xl font-bold text-[#3A7F4B] text-center"
      style={{
        fontFamily: "'Poppins', sans-serif",
        marginBottom: "24px", // gap between heading and subtitle
      }}
    >
      What We Do
    </h2>
    <p
      className="text-center"
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "128%",
        letterSpacing: "0%",
        maxWidth: "751px",
        margin: "0 auto",
        marginBottom: "40px", // gap between subtitle and cards
      }}
    >
      Comprehensive solutions to transform your educational institution and prepare students for tomorrow
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className={`bg-[#F7F7F7] rounded-[16px] shadow p-5 flex flex-col h-full ${card.cardStyle}`}
          style={{ minWidth: 240, maxWidth: 320 }}
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-[120px] object-cover rounded-[12px] mb-4"
            style={{ border: idx === 2 ? "2px solid #B6E2C6" : "none" }}
          />
          <h3
            className="mb-2"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "134%",
              letterSpacing: "0%",
              color: "#222",
              textAlign: "left",
              width: "273px",
              height: "27px",
              marginBottom: "12px",
              display: "block",
            }}
          >
            {card.title}
          </h3>
          <p
            className="text-sm text-black mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
          >
            {card.desc}
          </p>
          <ul className="list-none pl-0">
            {card.bullets.map((item, i) => (
              <li
                key={i}
                className="mb-1 flex items-start"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600, // semibold
                  fontSize: "14px",
                  lineHeight: "128%",
                  color: "#222",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#222",
                    borderRadius: "50%",
                    marginRight: "10px",
                    marginTop: "7px",
                    flexShrink: 0,
                  }}
                ></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDo;