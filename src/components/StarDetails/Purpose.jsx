import React from "react";
import purposeImg from "../assets/purpose.jpg";

const Purpose = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#111927] mb-4">
            Our Purpose
          </h2>
          <p className="text-[#575757]">
            To provide families with resources, therapies, and a supportive
            community that empowers children with autism to thrive.
          </p>
        </div>
        <img
          src={purposeImg}
          alt="Purpose"
          className="rounded-lg shadow w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Purpose;
