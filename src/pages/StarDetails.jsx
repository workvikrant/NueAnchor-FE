import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandHeader from "../components/StarDetails/BrandHeaders";
import HeroSection from "../components/StarDetails/HeroSection";
import About from "../components/StarDetails/OurPurpose";
import Categories from "../components/StarDetails/Services";
import WhyChoose from "../components/StarDetails/Stories";
import HowWeHelp from "../components/StarDetails/HowWeHelp";
import CTA from "../components/StarDetails/CTA";

const StarDetailPage = () => {
  return (
    <>
      <Header />
      <BrandHeader />
      <main className="bg-white">
        <HeroSection />
        <About />
        <Categories />
        <WhyChoose />
        <HowWeHelp />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default StarDetailPage;