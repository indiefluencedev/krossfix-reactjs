import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import the slider component
import { Link } from 'react-router-dom'; // Import Link from React Router
import bottle1 from '../assets/productsimages/bottle1.jpg';
import bottle2 from '../assets/productsimages/bottle2.jpg';
import bottle3 from '../assets/productsimages/bottle3.jpg';
import bottle4 from '../assets/productsimages/bottle5.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel CSS files

const ProductSection = () => {
  // State to keep track of the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Slider settings for mobile view
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    beforeChange: (current, next) => setActiveSlide(next), // Update the active slide
  };

  // Animation variants for reveal
  const revealVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* Heading */}
      <h2 className="text-center mt-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6 lg:mb-14">
        Our Products
      </h2>

      {/* Carousel for Mobile */}
      <div className="block lg:hidden">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="flex justify-center">
            <motion.div 
              className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[500px] w-[350px] sm:h-[600px] sm:w-[500px] md:h-[700px] md:w-[600px] mx-auto" // Updated sizes for 480px and 768px
              initial="hidden"
              animate={activeSlide === 0 ? "visible" : "hidden"} // Animation trigger based on active slide
              variants={revealVariant}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Text Layer */}
              <div className="relative z-20 flex flex-col items-center pointer-events-none">
                <p className="text-white md:mt-20 md:text-[50px] text-[40px] font-semibold">Product Name 1</p>
                <p className="text-white md:text-[30px] text-[25px] mb-2 ">Pixel Perfect</p>
                <span className="md:text-[300px] text-[200px] text-white font-semibold">1</span>
              </div>
              {/* Image Layer with Link */}
              <Link to="/product1" className="absolute inset-0 z-10 transition-opacity">
                <motion.div 
                  className="absolute inset-0 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={bottle1} alt="Product 1" className="w-full h-full object-cover" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
          
          {/* Slide 2 */}
          <div className="flex justify-center">
            <motion.div 
              className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[500px] w-[350px] sm:h-[600px] sm:w-[500px] md:h-[700px] md:w-[600px] mx-auto" // Updated sizes for 480px and 768px
              initial="hidden"
              animate={activeSlide === 1 ? "visible" : "hidden"} // Animation trigger based on active slide
              variants={revealVariant}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Text Layer */}
              <div className="relative z-20 flex flex-col items-center pointer-events-none">
                <p className="text-white md:mt-20 md:text-[50px] text-[40px] font-semibold">Product Name 2</p>
                <p className="text-white md:text-[30px] text-[25px] mb-2">Android & iOS</p>
                <span className="md:text-[300px] text-[200px] text-white font-semibold">2</span>
              </div>
              {/* Image Layer with Link */}
              <Link to="/product2" className="absolute inset-0 z-10 transition-opacity">
                <motion.div 
                  className="absolute inset-0 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={bottle2} alt="Product 2" className="w-full h-full object-cover" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
          
          {/* Slide 3 */}
          <div className="flex justify-center">
            <motion.div 
              className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[500px] w-[350px] sm:h-[600px] sm:w-[500px] md:h-[700px] md:w-[600px] mx-auto" // Updated sizes for 480px and 768px
              initial="hidden"
              animate={activeSlide === 2 ? "visible" : "hidden"} // Animation trigger based on active slide
              variants={revealVariant}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Text Layer */}
              <div className="relative z-20 flex flex-col items-center pointer-events-none">
                <p className="text-white md:mt-20 md:text-[50px] text-[40px] font-semibold">Product Name 3</p>
                <p className="text-white md:text-[30px] text-[25px] mb-2">Trendy Design</p>
                <span className="md:text-[300px] text-[200px] text-white font-semibold">3</span>
              </div>
              {/* Image Layer with Link */}
              <Link to="/product3" className="absolute inset-0 z-10 transition-opacity">
                <motion.div 
                  className="absolute inset-0 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={bottle3} alt="Product 3" className="w-full h-full object-cover" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
          
          {/* Slide 4 */}
          <div className="flex justify-center">
            <motion.div 
              className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[500px] w-[350px] sm:h-[600px] sm:w-[500px] md:h-[700px] md:w-[600px] mx-auto" // Updated sizes for 480px and 768px
              initial="hidden"
              animate={activeSlide === 3 ? "visible" : "hidden"} // Animation trigger based on active slide
              variants={revealVariant}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Text Layer */}
              <div className="relative z-20 flex flex-col items-center pointer-events-none">
                <p className="text-white md:mt-20 mt-10 md:text-[50px] text-[40px] font-semibold">Product Name 4</p>
                <p className="text-white md:text-[30px] text-[25px] mb-2">100% Custom</p>
                <span className="md:text-[300px] text-[200px] text-white font-semibold">4</span>
              </div>
              {/* Image Layer with Link */}
              <Link to="/product4" className="absolute inset-0 z-10 transition-opacity">
                <motion.div 
                  className="absolute inset-0 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={bottle4} alt="Product 4" className="w-full h-full object-cover" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </Slider>
      </div>

      {/* Original Layout for Desktop */}
      <div className="hidden lg:flex flex-row lg:h-[500px] overflow-hidden relative">
        {/* Block 1 */}
        <a href="/product1" className="block flex-1">
          <motion.div 
            className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[250px] lg:h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Text Layer */}
            <div className="relative z-20 flex flex-col items-center pointer-events-none">
              <p className="text-white mt-4 text-lg sm:text-xl lg:text-xl font-semibold">Product Name 1</p>
              <p className="text-white text-md sm:text-lg lg:text-lg mb-2">Pixel Perfect</p>
              <span className="text-[80px] sm:text-[100px] lg:text-[150px] xl:text-[200px] text-white font-bold">1</span>
            </div>
            {/* Image Layer */}
            <motion.div 
              className="absolute inset-0 z-10 opacity-0 hover:opacity-80 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
            >
              <img src={bottle1} alt="Product 1" className="w-full h-full object-cover" />
            </motion.div>
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[300px] bg-gray-400 opacity-50" />
          </motion.div>
        </a>

        {/* Block 2 */}
        <a href="/product2" className="block flex-1">
          <motion.div 
            className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[250px] lg:h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Text Layer */}
            <div className="relative z-20 flex flex-col items-center pointer-events-none">
              <p className="text-white mt-4 text-lg sm:text-xl lg:text-xl font-semibold">Product Name 2</p>
              <p className="text-white text-md sm:text-lg lg:text-lg mb-2">Android & iOS</p>
              <span className="text-[80px] sm:text-[100px] lg:text-[150px] xl:text-[200px] text-white font-bold">2</span>
            </div>
            {/* Image Layer */}
            <motion.div 
              className="absolute inset-0 z-10 opacity-0 hover:opacity-80 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
            >
              <img src={bottle2} alt="Product 2" className="w-full h-full object-cover" />
            </motion.div>
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[300px] bg-gray-400 opacity-50" />
          </motion.div>
        </a>

        {/* Block 3 */}
        <a href="/product3" className="block flex-1">
          <motion.div 
            className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[250px] lg:h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Text Layer */}
            <div className="relative z-20 flex flex-col items-center pointer-events-none">
              <p className="text-white mt-4 text-lg sm:text-xl lg:text-xl font-semibold">Product Name 3</p>
              <p className="text-white text-md sm:text-lg lg:text-lg mb-2">Trendy Design</p>
              <span className="text-[80px] sm:text-[100px] lg:text-[150px] xl:text-[200px] text-white font-bold">3</span>
            </div>
            {/* Image Layer */}
            <motion.div 
              className="absolute inset-0 z-10 opacity-0 hover:opacity-80 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
            >
              <img src={bottle3} alt="Product 3" className="w-full h-full object-cover" />
            </motion.div>
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[300px] bg-gray-400 opacity-50" />
          </motion.div>
        </a>

        {/* Block 4 */}
        <a href="/product4" className="block flex-1">
          <motion.div 
            className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[250px] lg:h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Text Layer */}
            <div className="relative z-20 flex flex-col items-center pointer-events-none">
              <p className="text-white mt-4 text-lg sm:text-xl lg:text-xl font-semibold">Product Name 4</p>
              <p className="text-white text-md sm:text-lg lg:text-lg mb-2">100% Custom</p>
              <span className="text-[80px] sm:text-[100px] lg:text-[150px] xl:text-[200px] text-white font-bold">4</span>
            </div>
            {/* Image Layer */}
            <motion.div 
              className="absolute inset-0 z-10 opacity-0 hover:opacity-80 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
            >
              <img src={bottle4} alt="Product 4" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default ProductSection;
