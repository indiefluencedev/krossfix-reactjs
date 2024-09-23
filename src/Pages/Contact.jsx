import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import ContactHero from '../Components/ContactUs/ContactHero';
import ReachUs from '../Components/ContactUs/ReachUs';

const Contact = () => {
  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 }, // Initial state
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Animated state
  };

  return (
    <div>
      {/* Apply fade-in animation to each section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <ContactHero />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <ReachUs />
      </motion.div>
    </div>
  );
};

export default Contact;
