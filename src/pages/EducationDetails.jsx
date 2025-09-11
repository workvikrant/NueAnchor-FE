import React, { useState } from 'react';

import HeroSection from '../components/EducationDetails/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SubHeader from '../components/UI/SubHeader.jsx';
import BrandsHeader from '../components/EducationDetails/BrandHeaders.jsx';
import AboutSection from '../components/EducationDetails/AboutSection.jsx';
import WhatWeDo from '../components/EducationDetails/WhatWeDo.jsx';
import WhyChoose from '../components/EducationDetails/WhyChoose.jsx';
import HeroBanner from '../components/EducationDetails/HeroBanner.jsx';
// import WhatWeOffer from '../components/EducationDetails/WhatWeOffer.jsx';
// import ProgramsSection from '../components/EducationDetails/ProgramsAndSession.jsx';
// import WhyItMatters from '../components/EducationDetails/WhyItMatters.jsx';

const EducationDetails = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBrandsHeader, setShowBrandsHeader] = useState(false);

  return (
    <section>
      <Header />
      <BrandsHeader />
      <HeroSection />
      <AboutSection />
      <WhatWeDo />
      <WhyChoose />
      <HeroBanner />
      {/* <WhatWeOffer /> */}
      {/* <WhyItMatters /> */}
      {/* <ProgramsSection /> */}
      <Footer />
    </section>
  );
};

export default EducationDetails;