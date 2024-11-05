import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Herosection from '../Components/Herosection';
import HomeAbout from '../Components/HomeAbout';
// import HomeProducts from '../Components/HomeProducts';
// import MobileHomeProducts from '../Components/MobileHomeProducts';
import ProductSection from '../Components/ProductSection';
import Gallery from '../Components/Gallery';
import Reviews from '../Components/Reviews';
import ProductCardSlider from '../Components/ProductCardSlider';
import Queries from '../Components/Queries';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 500);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile === null) {
    return <div>Loading...</div>;
  }

  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const Section = ({ children }) => (
    isMobile ? <div>{children}</div> : <motion.div initial="hidden" animate="visible" variants={fadeIn}>{children}</motion.div>
  );

  return (
    <div>
      {/* Apply fade-in animation to each section based on screen size */}
      <Section>
        <Herosection />
      </Section>

      <Section>
        <HomeAbout />
      </Section>

      {/* <Section>
        {isMobile ? <MobileHomeProducts /> : <HomeProducts />}
      </Section> */}

      <ProductSection />

      <Section>
        <Gallery />
      </Section>

      <Section>
        <Reviews />
      </Section>

      <Section>
        <ProductCardSlider />
      </Section>

      <Section>
        <Queries />
      </Section>
    </div>
  );
};

export default HomePage;
