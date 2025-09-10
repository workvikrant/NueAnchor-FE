import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Purpose from "../components/Purpose";
import Services from "../components/Services";
import HowWeHelp from "../components/HowWeHelp";
import Stories from "../components/Stories";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const AutismHome = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Purpose />
      <Services />
      <HowWeHelp />
      <Stories />
      <CTA />
      <Footer />
    </div>
  );
};

export default AutismHome;
