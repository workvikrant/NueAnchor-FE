import React from "react";
import growthImg from "../../assets/EducationDetailspage/growth.png";
import policyImg from "../../assets/EducationDetailspage/policy.png";
import uspImg from "../../assets/EducationDetailspage/usp.png"
import expertiseImg from "../../assets/EducationDetailspage/experties.png"

// Replace these SVGs with the exact SVG code exported from Figma
const icons = [
  (
    <div
      style={{
        background: "#DFF1E6",
        borderRadius: "12px",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Paste the exact "growth/leaf" SVG from Figma here */}
      <img src={growthImg} alt="Growth Icon" />
    </div>
  ),
  (
    <div
      style={{
        background: "#F3F6F2",
        borderRadius: "12px",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Paste the exact "certificate/policy" SVG from Figma here */}
      <img src={policyImg} alt="Policy Icon" />
    </div>
  ),
  (
    <div
      style={{
        background: "#F3F6F2",
        borderRadius: "12px",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Paste the exact "star/USP" SVG from Figma here */}
      <img src={uspImg} alt="USP Icon" />
    </div>
  ),
  (
    <div
      style={{
        background: "#F3F6F2",
        borderRadius: "12px",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Paste the exact "medal/expertise" SVG from Figma here */}
      <img src={expertiseImg} alt="Expertise Icon" />
    </div>
  ),
  (
    <div
      style={{
        background: "#F3F6F2",
        borderRadius: "12px",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="file:///C:/Users/admin/Downloads/Vector.svg" alt="Vector Icon" />
      <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0003 2.25L15.1045 14.25L2.16699 15.2083L12.0837 23.5833L8.97949 36.1667L20.0003 29.3333M20.0003 2.25L24.8962 14.25L37.8337 15.2083L27.917 23.5833L31.0212 36.1667L20.0003 29.3333" stroke="#55794A" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  ),
];

const cards = [
  {
    title: "Faster Growth with Expert Guidance",
    desc: "Accelerate your institution’s development with our proven methodologies and strategic insights gained from 20+ years of experience.",
    bg: "#DFF1E6",
    img: growthImg,
  },
  {
    title: "Policy-Compliant Frameworks",
    desc: "Navigate complex regulations effortlessly with our comprehensive compliance solutions and up-to-date policy frameworks.",
    bg: "#fff",
    img: policyImg,
  },
  {
    title: "Unique USPs for Every School",
    desc: "Develop distinctive value propositions that set your institution apart in the competitive educational landscape.",
    bg: "#fff",
    img: uspImg,
  },
  {
    title: "20+ Years of Proven Expertise",
    desc: "Benefit from our extensive track record of successful transformations and deep understanding of educational challenges.",
    bg: "#fff",
    img: expertiseImg,
  },
];

const WhyChoose = () => (
  <section className="px-6 lg:px-24 py-16 bg-white">
    <h2
      className="text-center"
      style={{
        fontFamily: "'Figtree', sans-serif",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "120%",
        color: "#3A7F4B",
        marginBottom: "16px",
      }}
    >
      Why Choose NeuAnchor Education?
    </h2>
    <p
      className="text-center"
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "128%",
        color: "#222",
        marginBottom: "48px",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      Partner with us to unlock your institution's full potential and create lasting educational impact.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="rounded-[16px] shadow flex flex-col items-start p-6"
          style={{
            background: card.bg,
            minWidth: "220px",
            maxWidth: "260px",
            height: "100%",
          }}
        >
          <div className="mb-4">
            <img src={card.img} alt={card.title} style={{ width: 56, height: 56, borderRadius: 12, objectFit: "cover" }} />
          </div>
          <h3
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "130%",
              color: "#222",
              marginBottom: "10px",
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "140%",
              color: "#222",
            }}
          >
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChoose;