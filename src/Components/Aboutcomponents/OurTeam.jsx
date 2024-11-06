import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import team1 from '../../assets/AboutHeroimages/team1.png';
import team2 from '../../assets/AboutHeroimages/team2.png';
import team3 from '../../assets/AboutHeroimages/team3.png';
import team4 from '../../assets/AboutHeroimages/team4.png';

const teamData = [
  { imgSrc: team1, name: 'John Doe', designation: 'CEO' },
  { imgSrc: team2, name: 'Jane Smith', designation: 'CTO' },
  { imgSrc: team3, name: 'Emily Johnson', designation: 'CFO' },
  { imgSrc: team4, name: 'Michael Brown', designation: 'COO' },
  { imgSrc: team1, name: 'John Doe', designation: 'CEO' },
  { imgSrc: team2, name: 'Jane Smith', designation: 'CTO' },
  { imgSrc: team3, name: 'Emily Johnson', designation: 'CFO' },
  { imgSrc: team4, name: 'Michael Brown', designation: 'COO' },
];

const OurTeam = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const teamRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth > 480 && window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (teamRef.current) observer.observe(teamRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === teamData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? teamData.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) nextSlide();
    else if (touchStartX - touchEndX < -50) prevSlide();
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0, position: 'absolute' }),
    center: { zIndex: 1, x: 0, opacity: 1, position: 'relative' },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0, position: 'absolute' }),
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.div
      ref={teamRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      className="text-center py-10"
    >
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-4xl text-[#403b68] font-bold md:mb-5 lg:mb-10">Our Team</h2>

        {/* Carousel for 480px and 768px */}
        {(isMobile || isTablet) ? (
          <div
            className="relative w-80 mx-auto h-[450px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex justify-center items-center h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentSlide}
                  className="relative p-4 bg-white shadow-md rounded-lg w-80 mx-auto"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                  }}
                >
                  <img
                    src={teamData[currentSlide].imgSrc}
                    alt={teamData[currentSlide].name}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <div className="text-center mt-4 bg-gray-100 p-2 rounded-b-lg">
                    <h3 className="text-lg font-bold">{teamData[currentSlide].name}</h3>
                    <p className="text-sm text-gray-600">{teamData[currentSlide].designation}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4 px-8">
              <button
                onClick={prevSlide}
                className="bg-gray-600 text-white p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity duration-200"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-600 text-white p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity duration-200"
              >
                <FaArrowRight size={20} />
              </button>
            </div>

            {/* Dots below the carousel */}
            <div className="flex justify-center mt-4 mb-4 space-x-2 absolute bottom-0 left-1/2 transform -translate-x-1/2">
              {teamData.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                  } cursor-pointer`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((teamMember, index) => (
              <div
                key={index}
                className="relative group overflow-hidden transform transition-transform duration-500 hover:rotate-x-12 hover:scale-105"
              >
                <img
                  src={teamMember.imgSrc}
                  alt={teamMember.name}
                  className="w-full h-60 object-cover transform group-hover:rotate-x-12 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-bold">{teamMember.name}</h3>
                    <p className="text-sm">{teamMember.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default OurTeam;
