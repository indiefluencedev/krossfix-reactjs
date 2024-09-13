import React, { useState } from 'react';
import { motion } from 'framer-motion';
import homeproducts from '../assets/homeproducts.png'; // Use your image path

const products = [
  { id: 1, name: 'Product Name 01' },
  { id: 2, name: 'Product Name 02' },
  { id: 3, name: 'Product Name 03' },
  { id: 4, name: 'Product Name 04' },
  { id: 5, name: 'Product Name 05' },
];

const swipeConfidenceThreshold = 100; // Threshold for determining swipe direction
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const MobileHomeProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to handle swipe
  const handleSwipe = (newDirection) => {
    setCurrentIndex((prevIndex) => {
      if (newDirection > 0) {
        return prevIndex === products.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? products.length - 1 : prevIndex - 1;
      }
    });
  };

  // Adding event listener for window resize to get the current width
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Conditional Framer Motion animation only for 480px screen width
  const animationProps = windowWidth <= 480 ? {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  } : {};

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
          {...animationProps} // Apply animation props conditionally for 480px
        >
          <img src={homeproducts} alt="product" style={imageStyle} />
          <div style={purpleBoxStyle}>
            <h3 style={productNumberStyle}>0{products[currentIndex].id}</h3>
            <h3 style={productNameStyle}>{products[currentIndex].name}</h3>
          </div>
          <div style={rangeBoxStyle}>
            <span style={knowMoreStyle}>Know More</span>
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

// Inline styles for the container, carousel, and elements (same design as before)
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: '500px',
  padding: '10px 0', // Adjusted padding
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px', // Reduced space between heading and card carousel
};

const carouselStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'auto', // Adjust height to fit content
};

const cardStyle = {
  position: 'relative',
  width: '300px',
  height: '450px', // Adjust height to remove extra white space
  overflow: 'hidden',
  backgroundColor: '#fff',
};

const imageStyle = {
  width: '100%',
  height: '70%', // Adjusted height to fit the image well
  objectFit: 'cover',
};

const purpleBoxStyle = {
  backgroundColor: '#312B69',
  color: '#F49610',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px', // Increased height to make the purple box larger
};

const productNumberStyle = {
  fontWeight: 'bold',
  fontSize: '24px',
};

const productNameStyle = {
  fontWeight: 'bold',
  fontSize: '18px',
};

const rangeBoxStyle = {
  backgroundColor: '#F49610',
  color: '#fff',
  padding: '8px', // Reduced padding to make the orange box smaller
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  minHeight: '30px', // Reduced minimum height for a smaller orange box
};

const knowMoreStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
};

const arrowStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
};

const dotsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px', // Reduced margin between card and dots
};

const dotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '0 5px',
  backgroundColor: '#FBC078', // Default light orange
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
};

export default MobileHomeProducts;
