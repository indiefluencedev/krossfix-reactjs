import React, { useState } from 'react';
import { motion } from 'framer-motion';
import homeproducts from '../assets/homeproducts.png'; // Use your image path

const HomeProducts = () => {
  const [selected, setSelected] = useState(1); // State to track the selected image

  const products = [
    { id: 1, name: 'Product Name 01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Product Name 02', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, name: 'Product Name 03', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, name: 'Product Name 04', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, name: 'Product Name 05', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    overflow: 'hidden',
    width: '100%',
    height: '500px', // Set height as 500px for all tabs
    margin: '50px auto', // Center the container
  };

  const productStyle = (id) => ({
    width: selected === id ? '900px' : '50px', // Set a fixed width for closed tabs and larger for selected
    height: '100%', // Set height to 100% of the container (500px)
    transition: 'width 0.5s ease-in-out',
    cursor: 'pointer',
    position: 'relative', // Positioning for the text overlay
    display: 'flex', // Flexbox for centering
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Hide overflow for images in smaller tabs
  });

  const textStyle = {
    backgroundColor: '#312B69', // Dark blue background
    color: '#F49610', // Orange text color
    height: '100px', // Set fixed height for the text box
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: '0', // Prevent shifting due to padding
    boxSizing: 'border-box', // Ensure padding doesn’t affect element sizing
    overflow: 'hidden', // Prevent overflow during transitions
  };

  const productNameStyle = {
    fontWeight: 'bold', // Make the product name bold
    fontSize: '18px',
    margin: 0, // Ensure no margin to prevent shifting
  };

  const numberStyle = {
    color: '#F49610', // Orange color for numbers
    fontWeight: 'bold',
    fontSize: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px', // Set height of the box for proper centering
    width: '100%', // Full width for centering
    textAlign: 'center',
    textShadow: '1px 1px 2px #312B69, 2px 2px 4px #312B69', // Adds stroke effect
    margin: 0, // Remove default margin
  };

  const imageStyle = {
    width: '100%', // Image takes the full width of its container
    height: '100%', // Image takes the full height of its container (500px)
    objectFit: 'cover', // Ensure the image covers the container while maintaining aspect ratio
  };

  return (
    <div>
      <h2 className="text-4xl text-[#403b68] font-bold mb-6 text-center mt-16">Our Products</h2>
      <div className="product-container desktop-view" style={containerStyle}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            style={productStyle(product.id)}
            onClick={() => setSelected(product.id)}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img src={homeproducts} alt={product.name} style={imageStyle} />
            {selected === product.id ? (
              <motion.div
                style={textStyle}
                initial={{ opacity: 0 }} // Smooth fade-in animation
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }} // Smoothen the text transition
              >
                <h3 style={productNameStyle}>{product.name}</h3>
                <p>{product.description}</p>
              </motion.div>
            ) : (
              <motion.div
                style={textStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3><span style={numberStyle}>{`0${product.id}`}</span></h3>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
