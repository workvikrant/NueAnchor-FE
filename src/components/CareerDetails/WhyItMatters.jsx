import React from 'react';
import avoidIcon from '../../assets/Why1.png';
import profileIcon from '../../assets/Why2.png';
import mentorIcon from '../../assets/Why3.png';

const whyItMattersData = [
  {
    id: 1,
    icon: avoidIcon,
    text: 'Avoids confusion and wrong career choices.',
  },
  {
    id: 2,
    icon: profileIcon,
    text: 'Builds strong, well-rounded profiles for top universities.',
  },
  {
    id: 3,
    icon: mentorIcon,
    text: 'Provides mentorship beyond traditional career counseling.',
  },
];

const WhyItMatters = () => (
  <section className="py-20 px-4 md:px-0 bg-[#EAF5FF]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-[32px] md:text-[38px] font-baskerville font-bold text-[#1D69B5] mb-2">
          Why It Matters
        </h2>
        <div className="w-32 h-[5px] bg-[#1D69B5] mx-auto rounded-full mb-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whyItMattersData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[16px] shadow-[0_4px_24px_rgba(29,105,181,0.08)] flex flex-row items-center px-7 py-8 min-w-[240px] max-w-[340px]"
          >
            <img src={item.icon} alt="" className="w-14 h-14 mr-4" />
            <p className="text-[#222] text-[18px] font-figtree font-medium text-left leading-snug w-[60%]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItMatters;