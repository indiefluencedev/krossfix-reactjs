import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import data from '../Data/Product.json'; // Adjust the path as necessary

const TableComponent = ({ selectedProduct }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load data from the JSON file
    setCategories(data.categories);
  }, []);

  const renderTableHeaders = (product) => {
    return Object.keys(product).map((key, index) => (
      <th
        key={index}
        className="border px-4 py-2 bg-[#334966] text-center font-semibold text-white"
      >
        {key}
      </th>
    ));
  };

  const renderTableRows = (products) => {
    return products.map((product, index) => (
      <tr key={index} className="even:bg-[#EBEEF2]">
        {Object.entries(product).map(([key, value], idx) => (
          <td
            key={idx}
            className={`border px-4 py-2 text-center text-black ${
              key === 'Product Code'
                ? 'font-bold text-lg'
                : 'text-base'
            }`}
            style={{ fontSize: key === 'Product Code' ? '16px' : '14px' }}
          >
            {value}
          </td>
        ))}
      </tr>
    ));
  };

  // Filter to only show the selected category
  const selectedCategory = categories.find(
    (category) => category.categoryName === selectedProduct
  );

  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 }, // Initial state
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Animation
  };

  return (
    <div className="container mx-auto p-4">
      {selectedCategory ? (
        <motion.div
          key={selectedCategory.categoryName}
          className="mb-8 shadow-lg rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn} // Apply fade-in animation
        >
          {/* Apply horizontal scroll effect for 480px screen */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-blue-200 min-w-[800px]">
              <thead>
                <tr className="text-sm lg:text-base">
                  {selectedCategory.products.length > 0 &&
                    renderTableHeaders(selectedCategory.products[0])}
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-base lg:text-lg">
                {renderTableRows(selectedCategory.products)}
              </tbody>
            </table>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          No products available for {selectedProduct}
        </motion.div>
      )}
    </div>
  );
};

export default TableComponent;
