import React from "react";
import chooseImg from "../../assets/AcadmicDetails/whychoose.png";

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Libre+Baskerville:wght@700&display=swap');

        .wc-container {
          position: relative;
          min-height: 480px; /* reduced vertical space */
          box-sizing: border-box;
          background: #fff;
          padding-top: 0px;
        }

        .wc-leftFrame {
          position: absolute;
          width: 461px;
          height: 595.25px;
          top: 0px;           /* move up */
          left: 95px;
          transform: rotate(0deg);
          opacity: 1;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .wc-title {
          font-family: "Libre Baskerville", serif;
          font-weight: 700;
          font-size: 26px;
          color: #222222;
          margin: 0 0 8px 0;
        }

        .wc-underline {
          width: 60px;
          height: 4px;
          background: #1D69B5;
          border-radius: 2px;
          margin-bottom: 24px;
        }

        .wc-features {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 8px;
          font-family: "Inter", sans-serif;
          color: #222222;
        }

        .wc-highlightBox {
          background: #EAF4FF;
          padding: 16px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #0F1724;
          box-shadow: inset 6px 0 0 0 rgba(29,105,181,0.08);
          max-width: 420px;
        }

        .wc-featureText {
          margin: 0;
          font-size: 16px;
          line-height: 26px;
          max-width: 420px;
          font-weight: 400;
          color: #222222;
        }

        .wc-imageWrap {
          position: absolute;
          width: 500px;
          height: 400px;
          top: 5px;           /* move up */
          left: 727px;
          border-radius: 14.91px;
          overflow: hidden;
          transform: rotate(0deg);
          opacity: 1;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.02);
          background: #eee;
        }

        .wc-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .wc-badge {
          position: absolute;
          left: 28px;
          bottom: 28px;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: #FFD233;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.10);
        }

        .wc-badgeNumber {
          font-family: "Inter", sans-serif;
          font-weight: 800;
          font-size: 30px;
          color: #111827;
          margin-bottom: 4px;
        }

        .wc-badgeText {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #111827;
        }

        @media (max-width: 1200px) {
          .wc-imageWrap, .wc-leftFrame {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
          }
          .wc-imageWrap { height: 420px; border-radius: 12px; }
          .wc-leftFrame { height: auto; }
          .wc-container { min-height: auto; padding: 48px 24px; }
        }
      `}</style>

      <section className="wc-container" aria-label="Why choose us section">
        <div className="wc-leftFrame" aria-hidden={false}>
          <h2 className="wc-title">Why Choose Us</h2>
          <div className="wc-underline" />

          <div className="wc-features">
            <div className="wc-highlightBox">
              Certified & globally benchmarked content.
            </div>

            <p className="wc-featureText">
              Flexible self-learning, accessible anytime, anywhere.
            </p>

            <p className="wc-featureText">
              Designed for both individual growth and organizational upskilling.
            </p>

            <p className="wc-featureText">
              Backed by 20+ years of expertise in education innovation.
            </p>
          </div>
        </div>

        <div className="wc-imageWrap" aria-hidden>
          <img src={chooseImg} alt="Why choose us" className="wc-image" />
          <div className="wc-badge" aria-hidden>
            <div className="wc-badgeNumber">200+</div>
            <div className="wc-badgeText">Courses</div>
          </div>
        </div>
      </section>
    </>
  );
}
