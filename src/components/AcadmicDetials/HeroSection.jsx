import React from "react";
import heroImg from "../../assets/AcadmicDetails/academics-hero.jpg";

const AcademicsHero = () => (
  <section
    className="w-full relative flex items-center justify-start"
    style={{
      minHeight: "432px",
      background: `url(${heroImg}) center right/cover no-repeat`,
      padding: "0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Left blue overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "55%",
        height: "100%",
        background: "linear-gradient(90deg, rgba(29,105,181,0.45) 80%, rgba(29,105,181,0.0) 100%)",
        zIndex: 1,
      }}
    />
    <div
      className="relative z-10 flex flex-col justify-center items-start py-16"
      style={{
        minHeight: "432px",
        marginLeft: "4vw", // Move text block further left
        maxWidth: "500px",
      }}
    >
      <span
        className="inline-block mb-6 px-5 py-2 rounded-full bg-white text-[#1D69B5] font-medium"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "15px",
        }}
      >
        NeuAnchor Academies
      </span>
      <h1
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "128%",
          letterSpacing: "0%",
          color: "#fff",
          marginBottom: "18px",
          width: "594px",
          height: "102px",
          verticalAlign: "middle",
          opacity: 1,
        }}
      >
        Certified Online Courses
        <br />
        for Future-Ready Learning
      </h1>
      <p
        style={{
          fontFamily: "'Figtree', sans-serif",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "128%",
          letterSpacing: "0%",
          color: "#fff", // Changed to white text
          width: "433px",
          height: "78px",
          verticalAlign: "middle",
          opacity: 1,
          marginBottom: "32px",
          padding: "0", // Removed padding
          borderRadius: "0", // Removed border radius
          boxSizing: "border-box",
        }}
      >
        Self-paced, globally benchmarked programs designed for corporates,
        institutions, and elite households.
      </p>
      <button
        type="button"
        className="hero-btn"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "150%",
          letterSpacing: "0%",
          background: "#FFD600",
          color: "#000000",
          border: "none",
          borderRadius: "8px",
          width: "234px",
          height: "50px",
          opacity: 1,
          paddingLeft: "16px",
          paddingRight: "16px",
          verticalAlign: "middle",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        Visit Site
      </button>
      <style>
        {`
          .hero-btn:hover {
            background: #FFD600;
            color: #000000;
          }
        `}
      </style>
    </div>
  </section>
);

export default AcademicsHero;