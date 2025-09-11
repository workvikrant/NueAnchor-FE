import React from "react";
import heroBg from "../../assets/AcadmicDetails/your-image.png";

export default function TransformHero() {
  return (
    <>
      <style>{`
        .transform-hero-bg {
          width: 1440px;
          height: 524px;
          background: url('${heroBg}') center center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          margin: 0 auto;
          border-radius: 0;
        }
        .transform-hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(24, 28, 36, 0.56);
          z-index: 1;
          border-radius: 0;
        }
        .transform-hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .transform-hero-title {
          font-family: "Libre Baskerville", serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #fff;
          text-align: center;
          margin-bottom: 18px;
          line-height: 1.15;
        }
        .transform-hero-desc {
          font-family: "Inter", sans-serif;
          font-size: 1.08rem;
          color: #e5e7eb;
          text-align: center;
          margin-bottom: 32px;
          max-width: 600px;
        }
        .transform-hero-btn {
          width: 244px;
          height: 66px;
          background: #fff;
          color: #0071DC;
          font-family: "Inter", sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          padding-right: 22px;
          padding-left: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: background 0.2s;
        }
        .transform-hero-btn:hover {
          background: #eaf4ff;
        }
        @media (max-width: 1500px) {
          .transform-hero-bg {
            width: 100vw;
            min-width: 320px;
            height: 524px;
          }
        }
        @media (max-width: 700px) {
          .transform-hero-bg { width: 100vw; height: 340px; }
          .transform-hero-title { font-size: 1.5rem; }
          .transform-hero-btn { width: 100%; height: 54px; font-size: 1rem; }
        }
      `}</style>
      <div className="transform-hero-bg">
        <div className="transform-hero-overlay" />
        <div className="transform-hero-content">
          <div className="transform-hero-title">
            Transform Your Future with<br />Expert Led Learning
          </div>
          <div className="transform-hero-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </div>
          <button className="transform-hero-btn">
            Visit Site Now
          </button>
        </div>
      </div>
    </>
  );
}