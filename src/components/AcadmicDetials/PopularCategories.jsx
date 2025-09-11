import React from "react";
// Replace these imports with your actual image paths
import marketingIcon from "../../assets/AcadmicDetails/marketing.png";
import businessIcon from "../../assets/AcadmicDetails/business.png";
import creativeIcon from "../../assets/AcadmicDetails/creative.png";
import aiIcon from "../../assets/AcadmicDetails/ai.png";
import financeIcon from "../../assets/AcadmicDetails/finance.png";
import intelligenceIcon from "../../assets/AcadmicDetails/intelligence.png";

const categories = [
  { icon: marketingIcon, label: "Marketing & Branding" },
  { icon: businessIcon, label: "Business Development" },
  { icon: creativeIcon, label: "Creative & Design" },
  { icon: aiIcon, label: "AI, ML & Data Science" },
  { icon: financeIcon, label: "Finance & Accounting" },
  { icon: intelligenceIcon, label: "Business Intelligence" },
];

const PopularCategories = () => (
  <section
    style={{
      background: "#fff",
      padding: "40px 0 32px 0",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontFamily: "'Libre Baskerville', serif",
        fontWeight: 700,
        fontSize: "24px", // reduced heading font size
        lineHeight: "130%",
        color: "#222",
        marginBottom: "12px",
      }}
    >
      Popular Categories Across the Platform
    </h2>

    <div
      style={{
        width: "60px",
        height: "4px",
        background: "#1D69B5",
        borderRadius: "2px",
        margin: "0 auto 32px auto",
      }}
    />

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        flexWrap: "wrap",
        marginTop: "16px",
      }}
    >
      {categories.map((cat) => (
        <div
          key={cat.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "164px", // fixed width per figma
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: "1px dotted #D9D9D9", // dotted border as you wanted
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
              background: "#fff",
            }}
          >
            <img
              src={cat.icon}
              alt={cat.label}
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </div>

          <span
            style={{
              fontFamily: "Inter, 'Figtree', sans-serif",
              fontWeight: 600, // Semi Bold
              fontSize: "14px", // smaller so text fits in one line
              lineHeight: "18px",
              textTransform: "capitalize",
              color: "#222",

              width: "164px",
              height: "19px",
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              textAlign: "center",
              verticalAlign: "middle",
              boxSizing: "border-box",
            }}
          >
            {cat.label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default PopularCategories;
