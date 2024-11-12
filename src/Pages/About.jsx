import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import AboutHero from '../Components/Aboutcomponents/AboutHero';
import AboutUs from '../Components/Aboutcomponents/AboutUs';
import OurValues from '../Components/Aboutcomponents/OurValues';
import MobileOurValues from '../Components/Aboutcomponents/MobileOurValues';
import History from '../Components/HistoryComponnets/History';
import OurTeam from '../Components/Aboutcomponents/OurTeam';
import MobileHistory from '../Components/HistoryComponnets/MobileHistory';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div>
      {/* Apply fade-in animation to each section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <AboutHero />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <AboutUs />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        {/* Conditionally render based on screen size */}
        {isMobile ? <MobileOurValues /> : <OurValues />}
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        {/* Conditionally render History or MobileHistory */}
        {isMobile ? <MobileHistory /> : <History />}
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <OurTeam />
      </motion.div>
    </div>
  );
};

export default About;
