import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';  // Import the Navbar
import Footer from './Components/Layouts/Footer'; // Import the Footer
import Home from './Pages/Home';       //Import page components
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';

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
      <Footer />
    </Router>
  );
}

export default App;
