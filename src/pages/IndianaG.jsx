import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandHeader from "../components/IndianaG/BrandHeader"; // optional subnav
import HeroSection from "../components/IndianaG/HeroSection";
import About from "../components/IndianaG/About";
import Categories from "../components/IndianaG/Categories";
import WhyChoose from "../components/IndianaG/WhyChoose";

const IndianaGPage = () => {
  return (
    <>
      <Header />
      <BrandHeader />
      <main className="bg-white">
        <HeroSection />
        <About />
        <Categories />
        <WhyChoose />
      </main>
      <Footer />
    </>
  );
};

export default IndianaGPage;
