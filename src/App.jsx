import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductPage from './Pages/ProductPage';
import GalleryPage from './Pages/GalleryPage';


import banner1 from './assets/productsimages/banner.png';
import banner2 from './assets/productsimages/banner.png';
import banner3 from './assets/productsimages/banner.png';
import banner4 from './assets/productsimages/banner.png';

import product1 from'./assets/productsimages/products.png';
import product2 from './assets/productsimages/products.png';
import product3 from './assets/productsimages/products.png';
import product4 from './assets/productsimages/products.png';

// Product-specific data to pass to ProductPage
const productInfo = {
  "cleaner": {
    bannerImage: banner1,
    title: "Cleaner",
    description: "Description for Cleaner...",
    selectedProduct: "Cleaner",
    imageSrc: product1
  },
  "adhesive": {
    bannerImage: banner2,
    title: "Adhesive",
    description: "Description for Adhesive...",
    selectedProduct: "Adhesive",
    imageSrc: product2
  },
  "primer": {
    bannerImage: banner3,
    title: "Primer",
    description: "Description for Primer...",
    selectedProduct: "Primer",
    imageSrc: product3
  },
  "hardener": {
    bannerImage: banner4,
    title: "Hardener",
    description: "Description for Hardener...",
    selectedProduct: "Hardener",
    imageSrc: product4
  },
};

function DynamicProductPage() {
  const { productType } = useParams();
  const productData = productInfo[productType];

  return productData ? (
    <ProductPage {...productData} />
  ) : (
    <div>Product not found</div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productType" element={<DynamicProductPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// updates cross check done status all ok 