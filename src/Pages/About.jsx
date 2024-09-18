import React, { useState, useEffect } from 'react';
import AboutHero from '../Components/Aboutcomponents/AboutHero';
import AboutUs from '../Components/Aboutcomponents/AboutUs';
import OurValues from '../Components/Aboutcomponents/OurValues';
import MobileOurValues from '../Components/Aboutcomponents/MobileOurValues';
import History from '../Components/HistoryComponnets/History';
import OurTeam from '../Components/Aboutcomponents/OurTeam';

const About = () => {
  // State to track screen width
  const [isMobile, setIsMobile] = useState(false);

  // Function to update the screen width
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 500); // If screen width is <= 768px, it's mobile
  };

  // useEffect to add event listener for screen resize
  useEffect(() => {
    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Add event listener on mount

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <AboutHero />
      <AboutUs />
      {/* Conditionally render based on screen size */}
      {isMobile ? <MobileOurValues /> : <OurValues />}
      <History /> 
      <OurTeam />
    </div>
  );
};

export default About;
