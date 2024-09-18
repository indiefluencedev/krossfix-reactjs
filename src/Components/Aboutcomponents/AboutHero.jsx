import React from 'react';
import abouthero from '../../assets/AboutHeroimages/abouthero.png';  // Correctly import the image

const AboutHero = () => {
  return (
    <div 
      className="relative bg-cover bg-center w-full h-64 sm:h-80 md:h-96 lg:h-[400px]" 
      style={{ 
        backgroundImage: `url(${abouthero})`,  // Use the imported image
        backgroundColor: '#333'  // Fallback color
      }}
    >
      
      {/* Darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Centered text with improved visibility */}
      <div className="relative z-20 flex justify-center items-center h-full">
        <h2 className="text-white text-4xl mt-10 sm:text-5xl md:text-6xl font-bold text-center">
          About
        </h2>
      </div>
    </div>
  );
}

export default AboutHero;
