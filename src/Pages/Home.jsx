import React, { useState, useEffect } from 'react';

import Herosection from '../Components/Herosection';
import HomeAbout from '../Components/HomeAbout';
import HomeProducts from '../Components/HomeProducts';
import MobileHomeProducts from '../Components/MobileHomeProducts';
import Gallery from '../Components/Gallery';
import Reviews from '../Components/Reviews';
import Queries from '../Components/Queries';


const HomePage = () => {
  const [isMobile, setIsMobile] = useState(null); // Use null initially to avoid premature rendering

  useEffect(() => {
    // Function to handle screen resizing and update isMobile state
    const handleResize = () => {
      // Check if window is available (browser environment)
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 500); // Update based on screen width
      }
    };

    // Call handleResize once to set the initial value
    handleResize();

    // Listen to resize events
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Return null or loading indicator until the initial screen size is determined
  if (isMobile === null) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div>
      <Herosection />
      <HomeAbout />
     
       

      {/* Conditionally render MobileHomeProducts or HomeProducts */}
      {isMobile ? <MobileHomeProducts /> : <HomeProducts />}
      <Gallery />
      <Reviews /> 
      <Queries />
      
    </div>
  );
};

export default HomePage;
