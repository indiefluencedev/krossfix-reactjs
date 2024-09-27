import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Queries = () => {
  const [isInView, setIsInView] = useState(false);
  const queriesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (queriesRef.current) {
      observer.observe(queriesRef.current);
    }

    return () => {
      if (queriesRef.current) {
        observer.unobserve(queriesRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Slightly faster animation speed
  };

  return (
    <motion.div
      ref={queriesRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
    >
      <h2 className="text-center text-xl md:text-3xl text-[#403b68] sm:text-2xl font-bold my-8">
        Got <span className="text-orange-500">Queries?</span> Get in Touch!
      </h2>
      
      {/* Form Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md shadow-md mb-4 sm:mb-0"
        />
        <input
          type="email"
          placeholder="Your Email ID"
          className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-md shadow-md"
        />
      </div>

      <textarea
        placeholder="Type your message here..."
        className="w-full p-4 border border-gray-300 rounded-md shadow-md h-40 mb-8"
      />

      {/* Submit Button */}
      <div className="text-center">
        <button
          className="bg-orange-500 text-white  font-semibold py-3 px-8 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </motion.div>
  );
};

export default Queries;
