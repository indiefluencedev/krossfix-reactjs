// src/components/ProductsPages/InfoSection.jsx
import React from 'react';

const InfoSection = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8">
      {/* Text Container */}
      <div className="lg:w-3/5 w-full lg:pr-8 mb-8 lg:mb-0">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">
          {description}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit.
        </p>
      </div>
      {/* Image Container */}
      <div className="lg:w-2/5 w-full">
        <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default InfoSection;
