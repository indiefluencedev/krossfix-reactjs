// src/components/Banner/Banner.jsx
import React from 'react';

const Banner = ({ imageSrc, text }) => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-96 sm:h-72 md:h-96 lg:h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      {/* Banner Text */}
      <h2 className="relative mt-10 z-10 px-4 text-center text-white text-3xl  sm:text-xl md:text-3xl lg:text-4xl font-bold">
        {text}
      </h2>
    </div>
  );
};

export default Banner;
