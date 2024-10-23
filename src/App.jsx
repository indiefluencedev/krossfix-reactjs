import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';  // Import the Navbar

import Home from './Pages/Home';       //Import page components
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products1 from './Pages/Products1';
import Products2 from './Pages/Products2';
import Products3 from './Pages/Products3';
import Products4 from './Pages/Products4';
import Footer from './Components/Layouts/Footer';

function App() {
  return (
    <Router>
      {/* Navbar will appear on all pages */}
      <Navbar />
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/products1" element={<Products1 />} />
        <Route path="/products/products2" element={<Products2 />} />
        <Route path="/products/products3" element={<Products3 />} />
        <Route path="/products/products4" element={<Products4 />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
