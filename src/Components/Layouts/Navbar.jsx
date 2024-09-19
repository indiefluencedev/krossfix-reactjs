import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Icons
import Logo from '../../assets/Logo 1.png'; // Update with your logo path

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Toggle the dropdown visibility
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 ml-3 md:h-10 md:ml-10" />
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-black focus:outline-none">
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Navbar links (Desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/" className="text-black hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-orange-500">
            About
          </Link>

          {/* Products with Click Dropdown */}
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="flex items-center text-black hover:text-orange-500"
            >
              Products
              <FaChevronDown className="ml-1 text-sm" />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-50 w-40">
                <Link
                  to="/products/products1"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Product 1
                </Link>
                <Link
                  to="/products/products2"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Product 2
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="text-black hover:text-orange-500">
            Contact Us
          </Link>
        </div>

        {/* Get in Touch Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 mr-10">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white h-screen md:hidden z-40`}
        >
          <div className="flex flex-col items-start p-6">
            <Link
              to="/"
              className="text-black hover:text-orange-500 py-2 text-lg w-full border-b border-gray-300"
              onClick={handleMenuToggle}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-orange-500 py-2 text-lg w-full border-b border-gray-300"
              onClick={handleMenuToggle}
            >
              About
            </Link>

            <div className="py-2 w-full">
              <button
                onClick={handleDropdownToggle}
                className="flex justify-between items-center text-black hover:text-orange-500 w-full text-lg border-b border-gray-300 pb-2"
              >
                Products
                <FaChevronDown className="ml-2 text-sm" />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-lg w-full">
                  <Link
                    to="/categories/category1"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={handleMenuToggle}
                  >
                    Product 1
                  </Link>
                  <Link
                    to="/categories/category2"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={handleMenuToggle}
                  >
                    Product 2
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-black hover:text-orange-500 py-2 text-lg w-full border-b border-gray-300"
              onClick={handleMenuToggle}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
