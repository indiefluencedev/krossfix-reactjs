import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; 
import { Link } from 'react-router-dom'; 
import { useInView } from 'react-intersection-observer'; 
import bottle1 from '../assets/productsimages/5mockupkrossfix.png';
import bottle2 from '../assets/productsimages/6mockupkrossfix.png';
import bottle3 from '../assets/productsimages/5mockupkrossfix.png';
import bottle4 from '../assets/productsimages/6mockupkrossfix.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const ProductSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.10,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div ref={ref} className="max-w-[1440px] mx-auto px-4">
      <h2 className="text-center mt-10 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-[#403b68] mb-6 lg:mb-14">
        Our Products
      </h2>

      <div className="block lg:hidden">
        <Slider {...settings}>
          {[bottle1, bottle2, bottle3, bottle4].map((bottle, index) => (
            <div className="flex justify-center" key={index}>
              <motion.div 
                className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[500px] w-[350px] sm:h-[600px] sm:w-[500px] md:h-[600px] md:w-[490px] mx-auto"
                initial="hidden"
                animate={activeSlide === index ? "visible" : "hidden"}
                variants={revealVariant}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div className="relative z-20 flex flex-col items-center pointer-events-none">
                  <p className="text-white md:mt-20 md:text-[50px] text-[40px] font-semibold">Product Name {index + 1}</p>
                  <p className="text-white md:text-[30px] text-[25px] mb-2">Description {index + 1}</p>
                  <span className="md:text-[250px] text-[200px] text-white font-semibold product-number">{index + 1}</span> {/* Added product-number class */}
                </div>
                <Link to={`/products/products${index + 1}`} className="absolute inset-0 z-10 transition-opacity">
                  <motion.div 
                    className="absolute inset-0 transition-opacity"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 1.5 }}
                  >
                    <img src={bottle} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                </Link>
                <Link 
                  to={`/products/products${index + 1}`} 
                  className="absolute bottom-4 text-center bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full text-lg hidden sm:block view-product-btn"
                >
                  View Product
                </Link>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Original Layout for Desktop */}
      <motion.div 
        className="hidden lg:flex flex-row lg:h-[500px] overflow-hidden relative"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariant}
      >
        {[bottle1, bottle2, bottle3, bottle4].map((bottle, index) => (
          <motion.a href={`/products/products${index + 1}`} className="block flex-1" key={index} variants={revealVariant} transition={{ duration: 1, ease: "easeInOut" }}>
            <div className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[250px] lg:h-full product-block">
              <div className="relative z-20 flex flex-col items-center pointer-events-none">
                <p className="text-white mt-4 text-lg sm:text-xl lg:text-xl font-semibold">Product Name {index + 1}</p>
                <p className="text-white text-md sm:text-lg lg:text-lg mb-2">Description {index + 1}</p>
                <span className="text-[80px] sm:text-[100px] lg:text-[150px] xl:text-[200px] text-white font-bold product-number">{index + 1}</span> {/* Added product-number class */}
              </div>
              <motion.div 
                className="absolute inset-0 z-10 opacity-0 hover:opacity-80 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img src={bottle} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
              {index < 3 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[300px] bg-gray-400 opacity-50 hr-line" />
              )}
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        @media (min-width: 1024px) and (max-width: 1440px) {
          .hr-line {
            height: 300px !important;
          }
        }
        @media (max-width: 768px) {
          .view-product-btn {
            display: block;
            opacity: 1 !important;
            z-index: 30;
          }
        }
        /* Styles for hiding number on hover */
        .product-block:hover .product-number {
          opacity: 0;
        }
        .product-number {
          transition: opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ProductSection;
