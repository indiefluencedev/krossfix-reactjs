// src/Pages/ProductPage.jsx
import React from 'react';
import PropTypes from 'prop-types';
// import Banner from '../Components/Banner';
import InfoSection from '../Components/ProductsPages/InfoSection';
import TableComponent from '../Components/TableComponents';

const ProductPage = ({ bannerImage, title, description, selectedProduct, imageSrc }) => {
  return (
    <div className="pt-10">
      {/* <Banner imageSrc={bannerImage} text={title} /> */}
      <div className="max-w-screen-xl mx-auto pt-10">
        <InfoSection imageSrc={imageSrc} title={title} description={description} />
        <TableComponent selectedProduct={selectedProduct} />
      </div>
    </div>
  );
};

// Define prop types for validation
ProductPage.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selectedProduct: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ProductPage;
