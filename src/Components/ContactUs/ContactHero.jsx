import React from 'react';
import banner from '../../assets/ContactUsiamges/banner.png'; // Ensure correct path to image

const ContactHero = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px]">
      {/* Background Image */}
      <img
        src={banner} 
        alt="Contact Us Banner"
        className="w-full h-full object-cover"
        style={{ zIndex: 1 }} // Set the z-index for the image to ensure it's behind the text
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center" 
           style={{ zIndex: 2 }}> {/* Overlay z-index higher than the image */}
        {/* Text Content */}
        <h2 className="text-white mt-10 text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" 
            style={{ zIndex: 3 }}>
          Contact Us
        </h2>
      </div>
    </div>
  );
};

export default ContactHero;
