import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const InfoSection = ({ imageSrc, title, description }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Intersection Observer to detect visibility of text and image
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
    <div className="flex flex-col lg:flex-row items-center justify-between p-8">
      {/* Text Container */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={isTextVisible ? 'visible' : 'hidden'}
        variants={textVariants}
        className="lg:w-3/5 w-full lg:pr-8 mb-8 lg:mb-0"
      >
        <h2 className="text-4xl md:text-5xl text-[#403b68]  font-bold mb-4">{title}</h2>
        <p className="text-gray-800 font-medium mb-4">
          {description}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. */}
        </p>
      </motion.div>
      
      {/* Image Container */}
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={isImageVisible ? 'visible' : 'hidden'}
        variants={imageVariants}
        className="lg:w-2/5 w-full"
      >
        <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
      </motion.div>
    </div>
  );
};

export default InfoSection;
