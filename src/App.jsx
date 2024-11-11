import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
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

import product1 from './assets/productsimages/products.png';
import product2 from './assets/productsimages/products.png';
import product3 from './assets/productsimages/products.png';
import product4 from './assets/productsimages/products.png';

// Product-specific data to pass to ProductPage
const productInfo = {
  "cleaner": {
    bannerImage: banner1,
    title: "Cleaner",
    description: "Cleaners are the first step in chemical adhesion, used to remove dirt, grease, or residues from surfaces to ensure proper adhesion during manufacturing processes. They play a crucial role in preparing surfaces for adhesives, enhancing bonding strength, and ensuring product durability. Our solvent-based cleaners excel at deep cleaning, effectively removing oils, contaminants, and residues to achieve spotless surfaces. Additionally, our BTX-free formulations are both safe and sustainable, creating robust bonds without the use of harmful chemicals. Trust KrossFix Cleaners to provide the perfect foundation for reliable and high-performance adhesive solutions. ",
    selectedProduct: "Cleaner",
    imageSrc: product1
  },
  "adhesive": {
    bannerImage: banner2,
    title: "Adhesive",
    description: "DeAdhesives are essential bonding agents used to join materials together, ensuring durability and strength in the final product. These are excessively used in the footwear industry, where strong and lasting bonds decide the overall performance and reliability of a product. By offering versatility and efficiency, adhesives streamline production, reduce the need for mechanical fasteners, and contribute to high-quality, durable end products.  At Krossfix, we offer specialized hardeners for solvent-based PU adhesives and primers, ensuring superior durability and performance for challenging applications. Our eco-friendly hardeners for water-based PU adhesives boost bonding strength while maintaining environmental sustainability. ",
    selectedProduct: "Adhesive",
    imageSrc: product2
  },
  "primer": {
    bannerImage: banner3,
    title: "Primer",
    description: "Primers are preparatory coatings applied to surfaces to enhance the adhesion of adhesives, ensuring stronger and longer-lasting bonds. They act as a bridge between the material and the adhesive, improving surface compatibility and bonding strength. By optimizing adhesion, primers enhance product performance, reduce failures, and ensure a smooth and efficient manufacturing process. Our specially formulated primers enhance adhesion and strengthen bonds for long-lasting footwear connections. We offer solvent-based primers for robust adhesion on challenging surfaces and eco-friendly water-based primers available in both 1- and 2-component formulas. Trust KrossFix Primers to provide reliable, high-performance solutions with reduced environmental impact.",
    selectedProduct: "Primer",
    imageSrc: product3
  },
  "hardener": {
    bannerImage: banner4,
    title: "Hardener",
    description: "Hardeners boost the strength, durability, and performance of adhesives by facilitating the curing process. They ensure robust, long-lasting bonds by enhancing resistance to stress, temperature, and environmental factors. By accelerating curing and boosting bond strength, hardeners contribute to efficient production processes and high-quality end products. Our hardeners are specifically designed to enhance adhesive strength and resilience, meeting the rigorous demands of footwear manufacturing. We offer two main types: Hardeners for Solvent-Based PU Adhesives/Primers, which are formulated to boost the performance, durability, and strength of solvent-based PU applications, and Hardeners for Water-Based PU Adhesives, eco-friendly solutions that increase bonding strength while maintaining environmental sustainability.",
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
        <Route path="/gallery" element={<GalleryPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// updates cross check done status all ok 