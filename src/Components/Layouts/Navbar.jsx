import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/Logo 1.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for "Products" dropdown
  const navbarRef = useRef(null); // Reference for the entire navbar

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on every location change
  }, [location.pathname]);

  // Close dropdown when clicking anywhere inside or outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close dropdown if click is outside navbar
      }
    };

    // Add event listener to detect clicks inside and outside the navbar
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Toggle the dropdown visibility
  const handleDropdownToggle = (e) => {
    e.stopPropagation(); // Prevent this event from closing the dropdown
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to check if the current path matches the given path
  const isActive = (path) => location.pathname === path;

  // Function to check if the current path is related to any product pages
  const isProductActive = (productPath) => location.pathname.includes(productPath);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto' },
  };

  return (
    <nav ref={navbarRef} className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
        
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 md:h-10" />
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-black focus:outline-none">
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Navbar links (Desktop) */}
        <div className={`hidden md:flex md:items-center space-x-4 lg:space-x-10`}>
          <Link
            to="/"
            className={`font-medium ${isActive('/') ? 'text-orange-500' : 'text-[#20212F] hover:text-orange-500'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-medium ${isActive('/about') ? 'text-orange-500' : 'text-[#20212F] hover:text-orange-500'}`}
          >
            About
          </Link>

          {/* Products with Click Dropdown */}
          <div className="relative">
            <div
              onClick={handleDropdownToggle}
              className={`flex items-center font-medium cursor-pointer ${isProductActive('/products') ? 'text-orange-500' : 'text-[#20212F] hover:text-orange-500'}`}
            >
              Products
              <FaChevronDown className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white  rounded shadow-lg text-center"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/products/products1"
                    className={`block px-4 py-2 ${isActive('/products/products1') ? 'text-orange-500' : 'text-gray-900 hover:bg-gray-100'}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                     Cleaner
                  </Link>
                  <Link
                    to="/products/products2"
                    className={`block px-4 py-2 ${isActive('/products/products2') ? 'text-orange-500' : 'text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    Adhesive
                  </Link>
                  <Link
                    to="/products/products3"
                    className={`block px-4 py-2 ${isActive('/products/products3') ? 'text-orange-500' : 'text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    Primers 
                  </Link>
                  <Link
                    to="/products/products4"
                    className={`block px-4 py-2 ${isActive('/products/products4') ? 'text-orange-500' : 'text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    Hardener
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Get in Touch Button (Desktop) */}
        <div className="hidden md:block">
          <button
            className="bg-orange-500 text-white py-2 px-4 lg:px-6 rounded hover:bg-orange-600"
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu */} 
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white h-screen md:hidden z-40 overflow-y-auto`}
        >
          <div className="flex flex-col items-start p-6">
            <Link
              to="/"
              className={`py-2 text-lg w-full border-b border-gray-300 font-medium ${isActive('/') ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}
              onClick={handleMenuToggle}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`py-2 text-lg w-full border-b border-gray-300 font-medium ${isActive('/about') ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}
              onClick={handleMenuToggle}
            >
              About
            </Link>

            {/* Products Dropdown (Mobile) */}
            <div className="py-2 w-full">
              <div
                onClick={handleDropdownToggle}
                className="flex justify-between items-center w-full text-lg border-b border-gray-300 pb-2 font-medium text-black cursor-pointer"
              >
                Products
                <FaChevronDown className={`ml-2 text-sm transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="mt-2 w-full bg-white rounded shadow-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to="/products/products1"
                      className={`block px-4 py-2 ${isActive('/products/products1') ? 'text-orange-500' : 'text-black hover:bg-gray-100'}`}
                      onClick={handleMenuToggle}
                    >
                      Solvent Based Cleaner
                    </Link>
                    <Link
                      to="/products/products2"
                      className={`block px-4 py-2 ${isActive('/products/products2') ? 'text-orange-500' : 'text-black hover:bg-gray-100'}`}
                      onClick={handleMenuToggle}
                    >
                      Water based adhesive
                    </Link>
                    <Link
                      to="/products/products3"
                      className={`block px-4 py-2 ${isActive('/products/products3') ? 'text-orange-500' : 'text-black hover:bg-gray-100'}`}
                      onClick={handleMenuToggle}
                    >
                      Thermoplastic hotmelt adhesive 
                    </Link>
                    <Link
                      to="/products/products4"
                      className={`block px-4 py-2 ${isActive('/products/products4') ? 'text-orange-500' : 'text-black hover:bg-gray-100'}`}
                      onClick={handleMenuToggle}
                    >
                      PU reactive hotmelt adhesive 
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
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
