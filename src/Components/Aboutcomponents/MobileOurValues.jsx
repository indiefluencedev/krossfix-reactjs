import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const MobileOurValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Array of values with icon and description
  const values = [
    {
      icon: <FaLightbulb size={30} />,
      description:
        'Ours is an industry where constant innovation is the key to competitive advantage. As such, we commit to consistent investment into R&D to bring to the market, products that offer superior properties and are safe for the environment. Ours is an industry where constant innovation is the key to competitive advantage.Ours is an industry where constant innovation is the key to competitive advantage.Ours is an industry where constant.',
    },
    {
      icon: <FaUsers size={30} />,
      description:
        'Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit. Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit.Teamwork drives our success. We believe in working together to achieve common goals and foster productivity and team spirit. Accountability ensures our.Teamwork drives our success.Teamwork drives our success.',
    },
    {
      icon: <FaClipboardCheck size={30} />,
      description:
        'Accountability ensures our integrity and commitment to our mission and values. We hold ourselves accountable for every decision and action we take. Accountability ensures our integrity and commitment to our mission and values.Accountability ensures our integrity and commitment to our mission and value. Accountability ensures our integrity and commitment to our mission and values.Accountability ensures our integrity and commitment .',
    },
  ];

  // Check if component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    const element = document.getElementById('mobile-our-values');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <motion.div
      id="mobile-our-values"
      className="max-w-full px-4 py-8 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeInOut' }} // Fade-in animation
    >
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-center mb-6">Our Values</h2>

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

        {/* Right Side - Shared Content Box with scrollable text */}
        <div
          className="flex justify-center items-center p-8 bg-gradient-to-r from-[#241F52] to-[#2F2568] text-white rounded-lg transition-all duration-500 ease-in-out shadow-lg custom-scrollbar"
          style={{ height: '300px', width: '100%', overflowY: 'auto' }} // Added overflowY for scroll
        >
          <p className="text-sm text-center mt-2 leading-relaxed">
            {values[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px; /* Width of the scrollbar */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.5); /* Color of the scrollbar thumb */
          border-radius: 5px; /* Rounded corners */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1); /* Background color of the track */
        }
      `}</style>
    </motion.div>
  );
};

export default MobileOurValues;
