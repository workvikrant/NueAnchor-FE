import React from "react";

const services = [
  {
    title: "Therapies & Programs",
    desc: "Personalized therapy tailored for each child.",
  },
  {
    title: "Family Support",
    desc: "Guidance and resources to help parents and caregivers.",
  },
  {
    title: "Community Engagement",
    desc: "Events and programs to build inclusivity.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#E0F0FF] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h3 className="text-2xl font-bold text-[#111927] mb-8">
          Services We Provide
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h4 className="font-semibold text-[#111927] mb-2">{s.title}</h4>
              <p className="text-[#575757] text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
