import React, { useState } from 'react';
import { motion } from 'framer-motion';
import homeproducts from '../assets/homeproducts.png'; // Replace with your actual image path

const products = [
  { id: 1, name: 'Product Name 01' },
  { id: 2, name: 'Product Name 02' },
  { id: 3, name: 'Product Name 03' },
  { id: 4, name: 'Product Name 04' },
  { id: 5, name: 'Product Name 05' },
];

const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const MobileHomeProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (newDirection) => {
    setCurrentIndex((prevIndex) => {
      if (newDirection > 0) {
        return prevIndex === products.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? products.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <div className="carousel-container" style={containerStyle}>
      <h2 style={headingStyle}>Our Products</h2>
      <div className="carousel" style={carouselStyle}>
        <motion.div
          className="card"
          style={cardStyle}
          key={products[currentIndex].id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              handleSwipe(1); // Swipe left
            } else if (swipe > swipeConfidenceThreshold) {
              handleSwipe(-1); // Swipe right
            }
          }}
        >
          <img src={homeproducts} alt="product" style={imageStyle} />
          <div style={purpleBoxStyle}>
            <h3 style={productNumberStyle}>0{products[currentIndex].id}</h3>
            <h3 style={productNameStyle}>{products[currentIndex].name}</h3>
          </div>
          <div style={rangeBoxStyle}>
            <span style={knowMoreStyle}>View More</span>
            <span style={arrowStyle}>→</span>
          </div>
        </motion.div>
      </div>
      {/* Dots for navigation */}
      <div className="dots" style={dotsContainerStyle}>
        {products.map((_, index) => (
          <span
            key={index}
            style={{
              ...dotStyle,
              backgroundColor: currentIndex === index ? '#F49610' : '#FBC078',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

// Inline styles with enforced opacity and background color
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: '500px',
  padding: '10px 0',
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const carouselStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'auto',
};

const cardStyle = {
  position: 'relative',
  width: '300px',
  height: '450px',
  overflow: 'hidden',
  backgroundColor: '#FFFFFF', // Solid white background to prevent overlay effect
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional shadow
  opacity: 1, // Ensure full opacity for the card
};

const imageStyle = {
  width: '100%',
  height: '70%',
  objectFit: 'cover',
  opacity: 1, // Set opacity to 1 to remove any transparency on the image
};

const purpleBoxStyle = {
  backgroundColor: '#312B69',
  color: '#F49610',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
  opacity: 1, // Ensure full opacity for the purple box
};

const productNumberStyle = {
  fontWeight: 'bold',
  fontSize: '24px',
  opacity: 1, // Ensure text has full opacity
};

const productNameStyle = {
  fontWeight: 'bold',
  fontSize: '18px',
  opacity: 1, // Ensure text has full opacity
};

const rangeBoxStyle = {
  backgroundColor: '#F49610',
  color: '#FFFFFF', // White text for contrast
  padding: '8px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  minHeight: '30px',
  opacity: 1, // Ensure full opacity for the range box
};

const knowMoreStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  opacity: 1, // Ensure full opacity for text
};

const arrowStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  opacity: 1, // Ensure full opacity for arrow
};

const dotsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
};

const dotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '0 5px',
  backgroundColor: '#FBC078',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
  opacity: 1, // Ensure full opacity for dots
};

export default MobileHomeProducts;
