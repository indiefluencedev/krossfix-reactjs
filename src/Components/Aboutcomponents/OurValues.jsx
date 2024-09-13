import React, { useState } from 'react';
import { FaLightbulb, FaUsers, FaClipboardCheck } from 'react-icons/fa'; // Icons for idea, teamwork, accountability

const OurValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of values with icon and description
  const values = [
    {
      icon: <FaLightbulb size={50} />,
      description:
        'Ours is an industry where constant innovation is the key to competitive advantage. As such, we commit to consistent investment into R&D to bring to the market, products that offer superior properties and are safe for the environment.Ours is an industry where constant innovation is the key to competitive advantage. As such, we commit to consistent investment into R&D to bring to the market, products that offer superior properties and are safe for the environment.',
    },
    {
      icon: <FaUsers size={50} />,
      description:
        'Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit.Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit.Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit.Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit',
    },
    {
      icon: <FaClipboardCheck size={50} />,
      description:
        'Accountability ensures our integrity and commitment to our mission and values. We hold ourselves accountable for every decision and action we take.Accountability ensures our integrity and commitment to our mission and values. We hold ourselves accountable for every decision and action we take.Accountability ensures our integrity and commitment to our mission and values. We hold ourselves accountable for every decision and action we take.',
    },
  ];

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Our Value</h1>

      {/* Flexbox to separate icons and content */}
      <div className="flex flex-col md:flex-row mx-auto justify-center items-start relative">
        
        {/* Left Side - Icons */}
        <div className="relative flex flex-col space-y-10 w-full md:w-[100px] mt-5">
          {/* Moving rectangle attached to the text box */}
          <div
            className="absolute bg-[#241F52] rounded-md transition-all duration-500 ease-in-out z-0"
            style={{
              top: `${activeIndex * 110}px`, // Adjusted to fine-tune the position
              left: '0px', // Aligned to touch the left edge
              width: '120px', // Adjusted width to touch icons properly
              height: '100px', // Adjusted height
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          ></div>

          {/* Separated divs for each icon */}
          <div
            className="relative flex items-center justify-start cursor-pointer transition-colors duration-300 z-10 " // z-10 to bring icon above the rectangle
            onClick={() => setActiveIndex(0)}
          >
            <div className={`ml-10  ${activeIndex === 0 ? 'text-orange-500' : 'text-blue-500'}`}>
              <FaLightbulb size={50} />
            </div>
          </div>

          <div
            className="relative flex items-center justify-start cursor-pointer transition-colors duration-300 z-10"
            onClick={() => setActiveIndex(1)}
          >
            <div className={`ml-10 ${activeIndex === 1 ? 'text-orange-500' : 'text-blue-500'}`}>
              <FaUsers size={50} />
            </div>
          </div>

          <div
            className="relative flex items-center justify-start cursor-pointer transition-colors duration-300 z-10"
            onClick={() => setActiveIndex(2)}
          >
            <div className={`ml-10 ${activeIndex === 2 ? 'text-orange-500' : 'text-blue-500'}`}>
              <FaClipboardCheck size={50} />
            </div>
          </div>
        </div>

        {/* Right Side - Content Box */}
        <div className="w-[1074px]  md:w-4/6 mt-10 md:mt-0 items-center mr-10">
          <div
            className="relative bg-gradient-to-r from-[#241F52] to-[#2F2568] text-white p-8 rounded-lg transition-all duration-500 ease-in-out shadow-lg"
            style={{ height: '300px '}} // Set the height of the box to 300px
           
          >
            {/* Description dynamically changes based on active index */}
            <p className="text-xl leading-relaxed">
              {values[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
