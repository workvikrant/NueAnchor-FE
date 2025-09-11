import React from "react";

export default function HowItWorks() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Libre+Baskerville:wght@700&display=swap');
        .hiw-main {
          display: flex;
          align-items: flex-start;
          justify-content: center; /* Center the section */
          gap: 64px;
          padding: 0;
          background: #fff;
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          width: 100%;
        }
        .hiw-left {
          background: linear-gradient(90deg, #00488D 0%, #0071DC 76.92%);
          border-radius: 8px;
          padding-top: 35px;
          padding-right: 40px;
          padding-bottom: 35px;
          padding-left: 40px;
          color: #fff;
          width: 496px;
          height: 286px;
          min-width: 496px;
          min-height: 286px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          gap: 24px;
          opacity: 1;
          transform: rotate(0deg);
          margin-left: 48px; /* Shift blue block right */
        }
        .hiw-leftTitle {
          font-family: "Libre Baskerville", serif;
          font-size: 1.7rem;
          font-weight: 700;
          margin-bottom: 0;
          line-height: 1.3;
        }
        .hiw-leftDesc {
          font-size: 1.05rem;
          font-weight: 400;
          margin-bottom: 0;
          line-height: 1.5;
        }
        .hiw-ctaBtn {
          background: #fff;
          color: #0071DC;
          font-weight: 600;
          border-radius: 6px;
          padding: 10px 24px;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: background 0.2s;
          margin-top: 8px;
          align-self: flex-start;
        }
        .hiw-ctaBtn:hover {
          background: #eaf4ff;
        }
        .hiw-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 10px;
        }
        .hiw-title {
          font-family: "Libre Baskerville", serif;
          font-size: 2rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 18px;
        }
        .hiw-stepsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 32px;
        }
        .hiw-step {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hiw-stepNum {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-weight: 700;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0;
        }
        .hiw-stepNum.step1 { background: #F3F3FE; color: #6C63FF; }
        .hiw-stepNum.step2 { background: #FFF4F2; color: #FF6C63; }
        .hiw-stepNum.step3 { background: #FFF4F2; color: #FF6C63; }
        .hiw-stepNum.step4 { background: #F2FFF4; color: #2ECC40; }
        .hiw-stepText {
          font-size: 1.08rem;
          color: #222;
          font-weight: 500;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .hiw-main { flex-direction: column; gap: 32px; }
          .hiw-left { width: 100%; min-width: 0; height: auto; min-height: 0; }
          .hiw-right { padding-top: 0; }
          .hiw-stepsGrid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
      <section className="hiw-main" aria-label="How It Works" style={{marginBottom: '0px'}}>
        <div className="hiw-left">
          <div className="hiw-leftTitle">Your Learning Journey in<br />4 Simple Steps</div>
          <div className="hiw-leftDesc">
            Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
          </div>
          <button className="hiw-ctaBtn">Join Now</button>
        </div>
        <div className="hiw-right">
          <div className="hiw-title">How It Works</div>
          <div className="hiw-stepsGrid">
            <div className="hiw-step">
              <div className="hiw-stepNum step1">1</div>
              <div className="hiw-stepText">Browse our courses</div>
            </div>
            <div className="hiw-step">
              <div className="hiw-stepNum step2">2</div>
              <div className="hiw-stepText">Enroll securely online</div>
            </div>
            <div className="hiw-step">
              <div className="hiw-stepNum step3">3</div>
              <div className="hiw-stepText">Learn through engaging modules &amp; practice</div>
            </div>
            <div className="hiw-step">
              <div className="hiw-stepNum step4">4</div>
              <div className="hiw-stepText">Earn a verified certificate<br />(digital &amp; physical)</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}