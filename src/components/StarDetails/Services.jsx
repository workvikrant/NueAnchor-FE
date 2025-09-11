import React from "react";
import servicesImg from "../../assets/StarsDetails/services-center.png";
import parentImg from "../../assets/StarsDetails/parent.png";
import studentImg from "../../assets/StarsDetails/student.png";
import schoolImg from "../../assets/StarsDetails/school.png";
import communityImg from "../../assets/StarsDetails/community.png";

const cardData = [
  {
    img: parentImg,
    title: "Parent Guidance",
    desc: "1:1 consultations, workshops, and comprehensive resources to support families at every stage of their autism journey.",
    iconBg: "#FFD600",
  },
  {
    img: studentImg,
    title: "Student Support",
    desc: "Academic & career guidance, life skills development, and personalized support plans for students with autism.",
    iconBg: "#FFD600",
  },
  {
    img: schoolImg,
    title: "School Partnerships",
    desc: "Teacher training, inclusion programs, and management advisory services to create supportive educational environments.",
    iconBg: "#FFD600",
  },
  {
    img: communityImg,
    title: "Community & Awareness",
    desc: "Inspiring talks, community events, and shared stories that build understanding and acceptance.",
    iconBg: "#FFD600",
  },
];

const Services = () => (
  <>
    <style>{`
      .services-title {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 40px;
        line-height: 128%;
        letter-spacing: 0%;
        color: #CE9400;
        margin: 0 0 16px 0;
        text-align: center;
      }
      .services-desc {
        font-family: 'Figtree', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 128%;
        color: #374151;
        text-align: center;
        width: 912px;
        margin: 0 auto 40px auto;
        opacity: 1;
      }
      .services-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        max-width: 1080px;
        margin: 0 auto;
      }
      .services-col {
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex: 1;
      }
      .services-card {
        background: #FFFBEA;
        border-radius: 16px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        border: 1px solid #F6E7C1;
        padding: 24px 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-height: 220px;
        height: 220px;
        width: 101%;
        justify-content: flex-start;
      }
      .services-icon-img {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        margin-bottom: 12px;
        object-fit: cover;
        background: #FFD600;
        display: block;
      }
      .services-card-title {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 18px;
        color: #1f1c1cff;
        margin-bottom: 8px;
      }
      .services-card-desc {
        font-family: 'Figtree', sans-serif;
        font-size: 15px;
        color: #374151;
        margin-bottom: 0;
      }
      .services-center-img {
        width: 384px;
        height: 457px;
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        display: block;
      }
      @media (max-width: 1200px) {
        .services-row { flex-direction: column; gap: 32px; }
        .services-center-img { width: 100%; max-width: 384px; }
        .services-desc { width: 100%; }
      }
      @media (max-width: 900px) {
        .services-row { flex-direction: column; gap: 24px; }
        .services-center-img { width: 100%; max-width: 320px; }
        .services-col { flex-direction: column; gap: 16px; }
      }
    `}</style>
    <section id="services" style={{ padding: "64px 0", background: "#fff" }}>
      <h2 className="services-title">Services We Provide</h2>
      <p className="services-desc">
        Comprehensive support designed to empower families, students, schools, and
        communities in the autism journey.
      </p>
      <div className="services-row">
        {/* Left column */}
        <div className="services-col">
          <div className="services-card">
            <img
              src={cardData[0].img}
              alt={cardData[0].title}
              className="services-icon-img"
            />
            <div className="services-card-title">{cardData[0].title}</div>
            <div className="services-card-desc">{cardData[0].desc}</div>
          </div>
          <div className="services-card">
            <img
              src={cardData[1].img}
              alt={cardData[1].title}
              className="services-icon-img"
            />
            <div className="services-card-title">{cardData[1].title}</div>
            <div className="services-card-desc">{cardData[1].desc}</div>
          </div>
        </div>
        {/* Center image */}
        <div>
          <img
            src={servicesImg}
            alt="Services Center"
            className="services-center-img"
          />
        </div>
        {/* Right column */}
        <div className="services-col">
          <div className="services-card">
            <img
              src={cardData[2].img}
              alt={cardData[2].title}
              className="services-icon-img"
            />
            <div className="services-card-title">{cardData[2].title}</div>
            <div className="services-card-desc">{cardData[2].desc}</div>
          </div>
          <div className="services-card">
            <img
              src={cardData[3].img}
              alt={cardData[3].title}
              className="services-icon-img"
            />
            <div className="services-card-title">{cardData[3].title}</div>
            <div className="services-card-desc">{cardData[3].desc}</div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Services;