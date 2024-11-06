// src/Components/TableComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import cleanerData from '../Data/Cleaner.json';
import primerData from '../Data/Primer.json';
import adhesiveData from '../Data/Adhesive.json';
import hardenerData from '../Data/Hardener.json';

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

  // Sort each group by 'Product Code' and sort groups by number of items in ascending order
  const sortedGroups = Object.entries(groupedData)
    .sort(([, groupA], [, groupB]) => groupA.length - groupB.length)
    .map(([type, items]) => ({
      type,
      items: items.sort((a, b) => a['Product Code'].localeCompare(b['Product Code'])),
    }));

  // Define heading text based on the selected product type
  const productTypeHeadingMap = {
    Cleaner: "List of Cleaners",
    Primer: "List of Primers",
    Adhesive: "List of Adhesives",
    Hardener: "List of Hardeners",
  };

  return (
    <div className="container mx-auto p-4">
      {/* Main Heading */}
      <h2 className="text-4xl  text-[#312B69] font-bold text-center mb-6 md:fontsize-36px fontsize-36px" >
        {productTypeHeadingMap[selectedProduct] || "Product List"}
        <hr className="mt-1  border-[#312B69] md:w-[300px] w-[300px] mx-auto" style={{ borderTopWidth: "3px" }} />
      </h2>
      

      {sortedGroups.map(({ type, items }, index) => (
        <div key={type} className="mb-8">
          {/* Group Title with Numbering */}
          <h2 className="font-bold mb-4 mt-16 text-left" style={{ fontSize: "32px", color: "#312B69" }}>
            {index + 1}. {type}
          </h2>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((product, idx) => (
              <div key={idx} className="flex border shadow bg-white" style={{ minHeight: "250px", borderRadius: "5px" }}>
                {/* Product Code on the left in vertical layout with margin and spacing */}
                <div
                  className="flex items-center justify-center px-4"
                  style={{
                    color: "#312B69",
                    minWidth: "70px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <span
                    className="font-bold"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "28px",
                      letterSpacing: "1.5px",
                      lineHeight: "1.5",
                    }}
                  >
                    {product['Product Code']}
                  </span>
                </div>

                {/* Product details */}
                <div className="p-4 flex-grow">
                  <p><strong>Use:</strong> <br /> <span className="text-[#6D6D6D]">{product.Use}</span></p>

                  <hr className="my-2 border-black" style={{ borderTopWidth: "2px" }} />
                  <p><strong>Appearance:</strong> <br /> <span className="text-[#6D6D6D]">{product.Appearance}</span></p>

                  <hr className="my-2 border-black" style={{ borderTopWidth: "2px" }} />
                  <p><strong>Viscosity:</strong> <br /> <span className="text-[#6D6D6D]">{product.Viscosity}</span></p>

                  <hr className="my-2 border-black" style={{ borderTopWidth: "2px" }} />
                  <p><strong>Characteristics:</strong> <br /> <span className="text-[#6D6D6D]">{product.Characteristics}</span></p>
                </div>
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
