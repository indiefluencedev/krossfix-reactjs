import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import bottle1 from '../assets/productsimages/bottle1.jpg';
import bottle2 from '../assets/productsimages/bottle2.jpg';
import bottle3 from '../assets/productsimages/bottle3.jpg';
import bottle4 from '../assets/productsimages/bottle4.jpg';
import bottle5 from '../assets/productsimages/bottle5.jpg';
import bottle6 from '../assets/productsimages/bottle4.jpg';
import bottle7 from '../assets/productsimages/bottle1.jpg';
import bottle8 from '../assets/productsimages/bottle2.jpg';
import bottle9 from '../assets/productsimages/bottle3.jpg';

const ProductCardSlider = () => {
  const products = [
    { id: 1, name: "Browningia Hertlingiana", description: "The juvenile specimens have a beautiful bluish hairy covering.", image: bottle1 },
    { id: 2, name: "Chlorophytum Comosum", description: "A common house plant known for its ability to clean air.", image: bottle2 },
    { id: 3, name: "Dracaena Trifasciata", description: "A low-maintenance plant with striking green-yellow leaves.", image: bottle3 },
    { id: 4, name: "Product 4", description: "This product has great features for home use.", image: bottle4 },
    { id: 5, name: "Product 5", description: "A perfect companion for your skin care routine.", image: bottle5 },
    { id: 6, name: "Product 6", description: "The most refreshing item in our lineup.", image: bottle6 },
    { id: 7, name: "Product 7", description: "Ideal for your daily hydration needs.", image: bottle7 },
    { id: 8, name: "Product 8", description: "A beautiful addition to your kitchen.", image: bottle8 },
    { id: 9, name: "Product 9", description: "Designed for convenience and style.", image: bottle9 },
  ];

  // State to track the active slide
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Display 5 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    arrows: false, // Remove swipe arrows
    beforeChange: (current, next) => setActiveIndex(next), // Update activeIndex before the slide changes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-4xl text-[#403b68] font-bold mb-6 text-center">Our Products</h2>
      <div className="max-w-[1440px] mx-auto">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={product.id} className="p-2">
              {/* Ensure equal spacing between cards */}
              <div
                className={`relative transition-all duration-700 ease-in-out bg-white rounded-lg shadow-md p-2 md:mx-20  mr-12 ml-10 ${ // Adjusted margin for equal spacing
                  index === activeIndex ? 'transform scale-105 z-20' : 'transform scale-90 z-10'
                }`}
                style={{
                  width: index === activeIndex ? "300px" : "280px", // Adjusted sizes for all cards
                  marginTop: index === activeIndex ? "0" : "190px",
                  height: index === activeIndex ? "450px" : "280px",
                  visibility: index === activeIndex ? 'visible' : 'visible', // All cards visible
                }}
              >
                {/* Product image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Overlay info for the active card */}
                {index === activeIndex && (
                  <div className="absolute bottom-6 mr-7 ml-5 bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-sm   text-gray-700">{product.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCardSlider;