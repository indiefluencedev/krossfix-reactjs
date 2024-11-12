import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const OurValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Array of values with icon and description
  const values = [
    {
      icon: <FaLightbulb size={50} />,
      description:
        ' At KrossFix, innovation is at the core of everything we do. We believe in delivering top-notch adhesive solutions that not only meet industry standards but also advance environmental care. Our mission is to simplify processes for our customers through tailored support that boosts efficiency and fosters innovation. We are proud to be part of the Make in India movement, championing local manufacturing with our Vocal for Local approach. We offer world-class, innovative adhesives made right here in India. With integrity, reliability, and strong partnerships, we aim to create lasting value and build a more sustainable, self-reliant future driven by innovation.',
    },
    {
      icon: <FaUsers size={50} />,
      description:
        '  Teamwork is the cornerstone of our success. By uniting the efforts of our customers, partners, and a dedicated team, we deliver superior quality adhesives that surpass industry standards and address environmental concerns. Our collaborative spirit simplifies workflows for clients, offering personalized support to enhance efficiency and drive innovation. Together, we strive to create sustainable solutions that not only meet present needs but also shape a better future for the industry. With a shared vision and unwavering commitment, we continually push boundaries to achieve excellence in every endeavor. ',
    },
    {
      icon: <FaClipboardCheck size={50} />,
      description:
        ' At KrossFix, accountability is at the heart of everything we do, upheld with the highest regard as we deliver quality and integrity. Ensuring transparency in every aspect of our business, we consistently fulfill promises, prioritize customer satisfaction, and build lasting trust. Our strict quality controls and ethical practices reflect our commitment to responsibility, reliability, and excellence in every adhesive solution we provide. Through these values, we aim to strengthen long-term partnerships and drive meaningful impact across the industry, contributing to a more sustainable and innovative future.',
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

    const element = document.getElementById('our-values-section');
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
      id="our-values-section"
      className="container mx-auto max-w-screen-xl px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeInOut' }} // Fade-in animation
    >
      {/* Section Title */}
      <h1 className="text-4xl text-[#403b68] font-bold text-center mb-8">Our Values</h1>

      {/* Flexbox to separate icons and content */}
      <div className="flex flex-col md:flex-row mx-auto justify-center items-start relative">
        
        {/* Left Side - Icons */}
        <div className="relative flex flex-col w-full md:w-[100px] md:h-[350px] justify-between">
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
            className="relative flex items-center justify-center cursor-pointer transition-colors duration-300 z-10"
            onClick={() => setActiveIndex(0)}
          >
            <div className={`absolute top-8 flex justify-center items-center ${activeIndex === 0 ? 'text-orange-500' : 'text-blue-500'}`}>
              <FaLightbulb size={50} />
            </div>
          </div>

          <div
            className="relative flex items-center justify-center cursor-pointer transition-colors duration-300 z-10"
            onClick={() => setActiveIndex(1)}
          >
            <div className={`absolute top-[-40px] flex justify-center items-center ${activeIndex === 1 ? 'text-orange-500' : 'text-blue-500'}`}>
              <FaUsers size={50} />
            </div>
          </div>

          <div
            className="relative flex items-center justify-center cursor-pointer transition-colors duration-300 z-10"
            onClick={() => setActiveIndex(2)}
          >
            <div className={`absolute top-[-105px] flex justify-center items-center ${activeIndex === 2 ? 'text-orange-500' : 'text-blue-500'}`}>
              <FaClipboardCheck size={50} />
            </div>
          </div>
        </div>

        {/* Right Side - Content Box */}
        <div className="md:w-[1074px] w-[280px] h-auto mt-10 md:mt-0 items-center md:mr-0 ">
          <div
            className="relative bg-gradient-to-r from-[#241F52] to-[#2F2568] text-white p-0 rounded-lg transition-all duration-500 ease-in-out shadow-lg"
            style={{
              height: '320px', 
              overflowY: 'auto', // Enable scrolling for smaller screen
              padding: '16px', // Ensure padding for the text
              
            }} 
          >
            {/* Description dynamically changes based on active index */}
            <p className="md:text-lg text-[12px]  leading-relaxed font-regular lg:px-10 lg:py-10 md:px-5 md:py-2  text-left margin-top-[50px] md:mt-0"> {/* Adjusted padding, margin-top and font-size */}
              {values[activeIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Media queries for 1024px and 1440px screen sizes */}
      <style jsx>{`
        @media (min-width: 1024px) {
          p {
            margin-top: 20px; /* Add margin-top for 1024px frame */
          }
        }

        @media (min-width: 1440px) {
          p {
            margin-top: 30px; /* Add margin-top for 1440px frame */
          }
        }
      `}</style>
    </motion.div>
  );
};

export default OurValues;
