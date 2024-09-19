import React from 'react';
// import '../Components/ProductsPages/Products1';
// import Products1 from '../Components/ProductsPages/Productsheader';
import InfoSection from '../Components/ProductsPages/InfoSection'

const Products = () => {
  return (
    <div className='pt-10'  >
      <InfoSection
      imageSrc="https://via.placeholder.com/400"
      title="Solvent Based Cleaners"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eleifend massa, nec blandit velit. Proin ut magna ac eros feugiat vehicula."
    />
    </div>
  );
};

export default Products;
