import React, { useState } from 'react';

import HeroSection from '../components/AcadmicDetials/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SubHeader from '../components/UI/SubHeader.jsx';
import BrandsHeader from '../components/AcadmicDetials/BrandHeaders.jsx';
//import WhatWeOffer from '../components/AcadmicDetials/WhatWeOffer.jsx';
import AcademicGrowth from '../components/AcadmicDetials/AcademicGrowth.jsx';
import PopularCategories from '../components/AcadmicDetials/PopularCategories.jsx';
import WhyChooseUs from '../components/AcadmicDetials/WhyChooseUs.jsx';
import HowItWorks from '../components/AcadmicDetials/HowItWorks.jsx';
import TransformHero from '../components/AcadmicDetials/TransformHero.jsx';

//import WhyItMatters from '../components/AcadmicDetials/WhyItMatters.jsx';

import HeroSection1 from '../components/AcadmicDetials/HeroSection.jsx';
//import { LearningPlatform } from '../components/UI/LearningPlatform.jsx';

// Add this style globally or in your CSS file
// .section-gap { margin-top: 48px; }

const AcademiesDetails = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBrandsHeader, setShowBrandsHeader] = useState(false);
  return (
    <section>
      <Header />
      <BrandsHeader />
      <HeroSection1 />
      <div className="section-gap" />
      <AcademicGrowth />
      <div className="section-gap" />
      <PopularCategories />
      <div className="section-gap" />
      <WhyChooseUs />
      <div className="section-gap" />
      <HowItWorks />
      <div className="section-gap" />
      <TransformHero />
      <Footer />
    </section>
  );
};

export default AcademiesDetails;