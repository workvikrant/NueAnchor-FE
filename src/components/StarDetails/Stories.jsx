import React from "react";
import storyImg from "../assets/story.jpg";

const Stories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-[#111927] mb-4">
            Stories That Inspire
          </h3>
          <p className="text-[#575757]">
            Read about families who have transformed their journey with the help
            of NeuAnchor’s guidance.
          </p>
        </div>
        <img src={storyImg} alt="Stories" className="rounded-lg shadow" />
      </div>
    </section>
  );
};

export default Stories;
