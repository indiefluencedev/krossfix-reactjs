// src/pages/Products/Products1.jsx
import React from 'react';
import Banner from '../Components/Banner'; // Adjust the path if necessary
import InfoSection from '../Components/ProductsPages/InfoSection'; // Adjust the path if necessary
import bannerImage from '../assets/productsimages/banner.png';
import productImage from '../assets/productsimages/products.png';
import TableComponent from '../Components/TableComponents'; // Adjust the path if necessary

const Products1 = () => {
  return (
    <div className='pt-10'>
      {/* Banner Section */}
      <Banner
        imageSrc={bannerImage}
        text="Solvent Based Cleaner"
      />
      
      {/* Info Section */}
      <div className="max-w-screen-xl mx-auto">
        <InfoSection
          imageSrc={productImage}
          title="Solvent Based Cleaners"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula."
        />

        {/* Table Component with selectedProduct prop */}
        <TableComponent selectedProduct="Product 1" /> {/* Pass 'Product 1' as the selected product */}
      </div>
    </div>
  );
};

export default Products1;
