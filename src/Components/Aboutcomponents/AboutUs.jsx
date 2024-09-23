import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import aboutus from '../../assets/AboutHeroimages/aboutus.png'; // Ensure the correct path to the image

const AboutUs = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={aboutRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full max-w-screen-xl mx-auto px-4 py-10 sm:py-16 relative z-10"
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 md:pr-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center md:text-left relative z-20">About Us</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 text-center md:text-left font-semibold">
            We are a technology-driven organization with a team of highly qualified and committed individuals.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 text-center md:text-left font-semibold">
            Each function is driven by competent and experienced staff to ensure effective implementation of the vision and mission of the organization in each of their areas of operations. 
          </p>
          <p className="text-base sm:text-lg text-gray-700 text-center md:text-left font-semibold">
            We are constantly developing our teams with the addition of industry veterans to accelerate the speed of development.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src={aboutus} alt="About Us" className="w-full h-auto shadow-md rounded-lg object-cover"/>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
