import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';  // Import the Navbar

import Home from './Pages/Home';       //Import page components
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import HomeFooter from './Components/HomeFooter';

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
        <Route path="/products" element={<Products />} />
      </Routes>
      <HomeFooter/>
    </Router>
  );
}

export default App;
