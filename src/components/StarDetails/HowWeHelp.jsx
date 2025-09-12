import React from 'react';
import howWeHelpImg from '../../assets/StarsDetails/how-we-help.png';
import awarenessIcon from '../../assets/StarsDetails/awareness.png';
import guidanceIcon from '../../assets/StarsDetails/guidance.png';
import empowermentIcon from '../../assets/StarsDetails/empowerment.png';

const CARD_DATA = [
  {
    icon: <img src={awarenessIcon} alt="Awareness Icon" style={{ width: 32, height: 32 }} />,
    title: "Awareness",
    desc: "Helping parents recognize individualized autism signs, providing clarity in moments of uncertainty."
  },
  {
    icon: <img src={guidanceIcon} alt="Guidance Icon" style={{ width: 32, height: 32 }} />,
    title: "Guidance",
    desc: "Structured pathways through therapy options, technology decisions, and career development."
  },
  {
    icon: <img src={empowermentIcon} alt="Empowerment Icon" style={{ width: 32, height: 32 }} />,
    title: "Empowerment",
    desc: "Equipping individuals and families to advocate and flourish in enriched, supportive environments."
  }
];

const HowWeHelp = () => (
  <section id="how" className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
      {/* Left image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={howWeHelpImg}
          alt="Group support"
          style={{
            width: '592px',
            height: '388px',
            borderRadius: '32px',
            objectFit: 'cover',
            opacity: 1,
          }}
          className="shadow"
        />
      </div>
      {/* Right content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-semibold text-[#D4A019] mb-2">How We Help</h2>
        <p className="text-gray-700 mb-6">
          Our three-pillar approach ensures comprehensive support for every family and community we serve.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CARD_DATA.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-5 flex flex-col items-start">
              <div className="mb-3">{card.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-1">{card.title}</h4>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowWeHelp;