import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; 
import { Link } from 'react-router-dom'; 
import { useInView } from 'react-intersection-observer'; 
import { FaArrowRight } from 'react-icons/fa';
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
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  // Define product details for future use (names, descriptions, and links)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      image: bottle1,
      link: '/products/products1'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      image: bottle2,
      link: '/products/products2'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      image: bottle3,
      link: '/products/products1' // Change to the actual product link later
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is the description for product 4.',
      image: bottle4,
      link: '/products/products2' // Change to the actual product link later
    }
  ];

  return (
    <div ref={ref} className="max-w-[1440px] mx-auto px-4">
      <h2 className="text-center mt-10 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-[#403b68] mb-6 lg:mb-14">
        Our Products
      </h2>

      <div className="block lg:hidden">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div className="flex justify-center" key={product.id}>
              <motion.div 
                className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[500px] w-[350px] sm:h-[600px] sm:w-[500px] md:h-[600px] md:w-[490px] mx-auto"
                initial="hidden"
                animate={activeSlide === index ? "visible" : "hidden"}
                variants={revealVariant}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div className="relative z-20 flex flex-col items-center md:mb-80 mb-64 pointer-events-none">
                  <p className="text-white md:text-[50px] text-center text-[40px] font-semibold">{product.name}</p>
                  <p className="text-white text-center  md:text-[28px] md:ml-9 md:mr-9 text-[25px] mb-2">{product.description}</p>
                  <span className="md:text-[250px] text-[200px] text-white font-semibold product-number">{index + 1}</span> {/* Added product-number class */}
                </div>
                <Link to={product.link} className="absolute inset-0 z-10 transition-opacity">
                  <motion.div 
                    className="absolute inset-0 transition-opacity no-opacity"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover larger-image" />
                  </motion.div>
                </Link>
                <Link 
                  to={product.link} 
                  className="flex md:mb-5 mb-8 items-center justify-center text-white font-semibold whitespace-nowrap z-20 view-product-btn"
                >
                  View More
                  <FaArrowRight className="ml-2 rotate-45 arrow-icon" />
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
        {products.map((product, index) => (
          <motion.a href={product.link} className="block flex-1" key={product.id} variants={revealVariant} transition={{ duration: 1, ease: "easeInOut" }}>
            <div className="flex flex-col justify-center items-center relative cursor-pointer bg-[#241F52] h-[250px] lg:h-full product-block">
              <div className="relative z-20 flex flex-col items-center pointer-events-none">
                <p className="text-white mt-4 text-lg sm:text-xl lg:text-xl font-semibold">{product.name}</p>
                <p className="text-white text-md text-center sm:text-lg lg:text-lg mb-2">{product.description}</p>
                <span className="text-[80px] sm:text-[100px] lg:text-[150px] xl:text-[200px] text-white font-bold product-number">{index + 1}</span>
              </div>
              <motion.div 
                className="absolute inset-0 z-10 opacity-0 hover:opacity-80 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </motion.div>
              <Link 
                  to={product.link} 
                  className="flex md:mb-5 mb-8 items-center justify-center text-white font-semibold whitespace-nowrap z-20 view-product-btn"
                >
                  View More
                  <FaArrowRight className="ml-2 rotate-45 arrow-icon" />
                </Link>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Removing hr line styles since they are commented out */
        @media (max-width: 1024px)  {
          .view-product-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 30;
            border: 2px solid white;
            padding: 8px 16px;
            border-radius: 20px;
            background-color: transparent;
            width: 140px;
            flex-direction: row;
            text-align: center;
          }
          .arrow-icon {
            transform: rotate(10deg);
            margin-left: auto;
          }
            /* Identify and remove possible borders or lines */
         .product-block {
           border: none !important; /* Remove any borders */
           box-shadow: none !important; /* Remove any shadow effects */
         }
       
         /* If there’s padding or margin causing the issue */
         .product-block {
           padding: 0 !important;
           margin: 0 !important;
         }

         /* Ensure no extra borders are present */
         .flex.flex-col.h-[500px] {
           border: none !important; /* Remove borders */
           box-shadow: none !important;
         }
        }

         @media (max-width: 1440px) {
           .view-product-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 30;
            border: 2px solid white;
            padding: 8px 16px;
            border-radius: 20px;
            background-color: transparent;
            width: 140px;
            flex-direction: row;
            text-align: center;
          }
          .arrow-icon {
            transform: rotate(1deg);
            margin-left: auto;
          }
         }

        @media (max-width: 768px) {
          .view-product-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 30;
            border: 2px solid white;
            padding: 8px 16px;
            border-radius: 20px;
            background-color: transparent;
            width: 140px;
            flex-direction: row;
            text-align: center;
          }
          .arrow-icon {
            transform: rotate(1deg);
            margin-left: auto;
          }
          .product-number {
            display: none;
          }
          .product-block {
            justify-content: flex-start;
          }
          .product-block p {
            margin-top: 20px;
          }
          .larger-image {
            transform: scale(1.3);
          }
          .no-opacity {
            opacity: 1 !important;
          }
        }

        @media (max-width: 480px) {
          .view-product-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 30;
            border: 2px solid white;
            padding: 8px 16px;
            border-radius: 20px;
            background-color: transparent;
            width: 140px;
            flex-direction: row;
            text-align: center;
          }
          .arrow-icon {
            transform: rotate(1deg);
            margin-left: auto;
          }
          .product-number {
            display: none;
          }
          .product-block {
            justify-content: flex-start;
          }
          .product-block p {
            margin-top: 20px;
          }
          .larger-image {
            transform: scale(1.2);
          }
          .no-opacity {
            opacity: 1 !important;
          }
          .flex.flex-col.h-[500px] {
            height: auto !important;
          }
        }

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
