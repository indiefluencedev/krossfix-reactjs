// src/Components/TableComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import cleanerData from '../Data/Cleaner.json';
import primerData from '../Data/Primer.json';
import adhesiveData from '../Data/Adhesive.json';
import hardenerData from '../Data/Hardener.json';
import '../Components/Styles/TableComponent.css';

// Map selected product to corresponding data
const productDataMap = {
  Cleaner: cleanerData.Cleaners,
  Primer: primerData.Primers,
  Adhesive: adhesiveData.Adhesive,
  Hardener: hardenerData.Hardener,
};

const TableComponent = ({ selectedProduct }) => {
  const products = productDataMap[selectedProduct] || [];

  // Group products by 'Type'
  const groupedData = products.reduce((acc, product) => {
    const type = product.Type || "Other";
    if (!acc[type]) acc[type] = [];
    acc[type].push(product);
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-4">
      {Object.keys(groupedData).map((type) => (
        <div key={type} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">{type}</h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {groupedData[type].map((product, index) => (
              <div key={index} className="border rounded-lg shadow p-4 bg-white">
                <h3 className="font-bold text-lg mb-2">{product['Product Code']}</h3>
                <p><strong>Use:</strong> {product.Use}</p>
                <p><strong>Appearance:</strong> {product.Appearance}</p>
                <p><strong>Viscosity:</strong> {product.Viscosity}</p>
                <p><strong>Characteristics:</strong> {product.Characteristics}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

TableComponent.propTypes = {
  selectedProduct: PropTypes.string.isRequired,
};

export default TableComponent;
