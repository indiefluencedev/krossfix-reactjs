import React from 'react';
import abouthero from '../../assets/AboutHeroimages/abouthero.png';

const AboutHero = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-64 sm:h-80 md:h-80 lg:h-[400px]" 
      style={{ backgroundImage: `url(${abouthero})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-20 sm:mt-16 md:mt-20">
          About
        </h1>
      </div>
    </div>
  );
}

export default AboutHero;
