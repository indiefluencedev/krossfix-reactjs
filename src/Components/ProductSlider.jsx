import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images directly
import product1 from '../assets/productsimages/perfume2.jpg';
import product2 from '../assets/productsimages/perfume2.jpg';
import product3 from '../assets/productsimages/perfume2.jpg';
import product4 from '../assets/productsimages/perfume2.jpg';
import product5 from '../assets/productsimages/perfume2.jpg';
import product6 from '../assets/productsimages/perfume2.jpg';
import product7 from '../assets/productsimages/perfume2.jpg';
import product8 from '../assets/productsimages/perfume2.jpg';
import product9 from '../assets/productsimages/perfume2.jpg';

const ProductSlider = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "Day Cream",
      description: "A nourishing day cream that keeps your skin hydrated and protected throughout the day.",
      image: product1
    },
    {
      id: 2,
      name: "Night Serum",
      description: "This night serum repairs and rejuvenates your skin while you sleep.",
      image: product2
    },
    {
      id: 3,
      name: "Whitening Lotion",
      description: "Brightens and evens out your skin tone with regular use.",
      image: product3
    },
    {
      id: 4,
      name: "Sunscreen SPF 50",
      description: "Protects your skin from harmful UV rays with broad-spectrum SPF 50.",
      image: product4
    },
    {
      id: 5,
      name: "Moisturizing Cream",
      description: "Deeply moisturizes and nourishes dry and sensitive skin.",
      image: product5
    },
    {
      id: 6,
      name: "Anti-Aging Serum",
      description: "Reduces fine lines and wrinkles for a youthful appearance.",
      image: product6
    },
    {
      id: 7,
      name: "Brightening Face Wash",
      description: "Gently cleanses and brightens your skin for a fresh look.",
      image: product7
    },
    {
      id: 8,
      name: "Hydrating Mist",
      description: "Refreshes and hydrates your skin with a single spritz.",
      image: product8
    },
    {
      id: 9,
      name: "Eye Cream",
      description: "Reduces dark circles and puffiness around the eyes.",
      image: product9
    }
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 slides by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Ensures center alignment
    centerPadding: "0px", // Removes extra padding for centered slides
    responsive: [
      {
        breakpoint: 1200, // Below 1200px
        settings: {
          slidesToShow: 3, // Display 3 slides
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 992, // Below 992px
        settings: {
          slidesToShow: 2, // Display 2 slides
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 1, // Display 1 slide
          slidesToScroll: 1,
          centerMode: false, // Disable center mode for mobile
          centerPadding: "0px", // Ensures no extra space on mobile
          arrows: false, // Optional: Hide arrows on mobile
        }
      }
    ]
  };

  // Animation variants for the product cards
  const productVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="bg-white py-24 overflow-hidden"> {/* Ensure no overflow */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Products
        </h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="px-4 py-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={productVariants}
              transition={{ delay: index * 0.2 }} // Staggered animation for each card
            >
              <div className="relative bg-gray-300 p-8 rounded-lg shadow-lg border-t-4 border-transparent transition transform hover:-translate-y-2 hover:shadow-2xl  max-w-xs mx-auto h-[300px] flex flex-col justify-end items-center"> {/* Medium height */}
                {/* Image inside the card */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-[200px] h-[450px] object-contain mt-20   " // Slightly larger image and positioned outside the card
                  style={{ background: 'white' }} // Inline style for extra support
                />
                {/* Orange Box with Arrow */}
                <div className="absolute bottom-4 right-4 bg-orange-500 w-14 h-14 flex items-center justify-center rounded">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M3.293 7.293a1 1 0 011.414 0L9 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {/* Text outside the card */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed px-4">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductSlider;
