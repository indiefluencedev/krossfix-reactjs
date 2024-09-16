import React, { useState } from 'react';
import { FaLightbulb, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const MobileOurValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of values with icon and description
  const values = [
    {
      icon: <FaLightbulb size={30} />,
      description:
        'Ours is an industry where constant innovation is the key to competitive advantage. As such, we commit to consistent investment into R&D to bring to the market, products that offer superior properties and are safe for the environment. Ours is an industry where constant innovation is the key to competitive advantage.Ours is an industry where constant innovation is the key to competitive advantage.',
    },
    {
      icon: <FaUsers size={30} />,
      description:
        'Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit. Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit.We believe in working together to achieve common goals and foster productivity and team spirit.',
    },
    {
      icon: <FaClipboardCheck size={30} />,
      description:
        'Accountability ensures our integrity and commitment to our mission and values. We hold ourselves accountable for every decision and action we take. Accountability ensures our integrity and commitment to our mission and values. We hold ourselves accountable for every decision and action we take.We hold ourselves accountable for every decision and action we take.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <h1 className="text-2xl font-bold text-center mb-6 mt-20">Our Values</h1>

      {/* Flexbox to separate icons and content */}
      <div className="flex flex-row justify-start items-center relative space-x-4">
        
        {/* Moving Rectangle Behind Icons */}
        <div
          className="absolute bg-[#241F52] rounded-md transition-all duration-500 ease-in-out z-0"
          style={{
            top: `${activeIndex * 110}px`,  // Adjust this value to align with the icon height and spacing
            left: '0px',
            width: '80px',  // Adjust width to fit behind the icons
            height: '80px', // Adjust height to fit behind the icons
            borderRadius: '10px',
          }}
        ></div>

        {/* Left Side - Icons aligned vertically */}
        <div className="flex flex-col justify-between items-center space-y-20 relative z-10">
          {values.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transition-colors duration-300 ${
                activeIndex === index ? 'text-orange-500' : 'text-blue-500'
              }`}
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* Right Side - Shared Content Box with increased width and centered text */}
        <div className="flex justify-center items-center p-8 bg-gradient-to-r from-[#241F52] to-[#2F2568] text-white rounded-lg transition-all duration-500 ease-in-out shadow-lg" 
             style={{ height: '300px', width: '100%' }}  // Set width to 100% for full space usage
        >
          <p className="text-sm text-center leading-relaxed">
            {values[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileOurValues;
