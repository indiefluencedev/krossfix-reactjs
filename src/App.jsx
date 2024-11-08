import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductPage from './Pages/ProductPage';


import banner1 from './assets/productsimages/banner.png';
import banner2 from './assets/productsimages/banner.png';
import banner3 from './assets/productsimages/banner.png';
import banner4 from './assets/productsimages/banner.png';

import product1 from './assets/productsimages/products.png';
import product2 from './assets/productsimages/products.png';
import product3 from './assets/productsimages/products.png';
import product4 from './assets/productsimages/products.png';

// Product-specific data to pass to ProductPage
const productInfo = {
  "products1": {
    bannerImage: banner1,
    title: "Cleaner",
    description: "Description for Cleaner...",
    selectedProduct: "Cleaner",
    imageSrc: product1
  },
  "products2": {
    bannerImage: banner2,
    title: "Adhesive",
    description: "Description for Adhesive...",
    selectedProduct: "Adhesive",
    imageSrc: product2
  },
  "products3": {
    bannerImage: banner3,
    title: "Primer",
    description: "Description for Primer...",
    selectedProduct: "Primer",
    imageSrc: product3
  },
  "products4": {
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
      <FloatingWhatsApp
        phoneNumber={919817742069}
        showPopup={true}
        // avatar='/logo/indie-whatsapp.svg'
        accountName='Venu Gopal Singhal'
        statusMessage='indiefluence.in'
        chatMessage="Hey there!
      I'm Venu Gopal Singhal, Founder of Indiefluence.
      
      Just drop a text here and let's discuss how we can grow together!"
        notification={true}
        notificationDelay={1}
        chatboxHeight={410}
        messageDelay={1}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productType" element={<DynamicProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// updates cross check done status all ok 