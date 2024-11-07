import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import aboutus from '../../assets/AboutHeroimages/aboutus.png'; // Ensure the correct path to the image

const AboutUs = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Intersection Observer to detect visibility of text
  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          textObserver.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the text component is visible
      }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          imageObserver.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the image component is visible
      }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, []);

  // Animation variants for the text and image
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 sm:py-16 relative z-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={isTextVisible ? 'visible' : 'hidden'}
          variants={textVariants}
          className="w-full md:w-1/2 md:pr-8"
        >
          <h2 className="text-4xl sm:text-4xl font-bold mb-6 text-gray-900 text-center md:text-left relative z-20">
            About Us
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 text-center md:text-left font-regular">
            We are a technology-driven organization with a team of highly qualified and committed individuals.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 text-center md:text-left font-regular">
            Each function is driven by competent and experienced staff to ensure effective implementation of the vision and mission of the organization in each of their areas of operations.
          </p>
          <p className="text-base sm:text-lg text-gray-700 text-center md:text-left font-regular">
            We are constantly developing our teams with the addition of industry veterans to accelerate the speed of development.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={isImageVisible ? 'visible' : 'hidden'}
          variants={imageVariants}
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
          <img
            src={aboutus}
            alt="About Us"
            className="w-full h-auto shadow-md rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
