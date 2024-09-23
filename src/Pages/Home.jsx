import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

import Herosection from '../Components/Herosection';
import HomeAbout from '../Components/HomeAbout';
import HomeProducts from '../Components/HomeProducts';
import MobileHomeProducts from '../Components/MobileHomeProducts';
import Gallery from '../Components/Gallery';
import Reviews from '../Components/Reviews';
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

  return (
    <div>
      {/* Apply fade-in animation to each section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Herosection />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <HomeAbout />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        {isMobile ? <MobileHomeProducts /> : <HomeProducts />}
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Gallery />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Reviews />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Queries />
      </motion.div>
    </div>
  );
};

export default HomePage;
