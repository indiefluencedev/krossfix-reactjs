import React from 'react';

const InfoSection = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-center justify-between p-8">
      {/* Image Container */}
      <div className="w-1/2">
        <img src={imageSrc} alt={title} className="w-full h-auto" />
      </div>
      {/* Text Container */}
      <div className="w-1/2 pl-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default InfoSection;