import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Use FaChevronDown for the dropdown icon
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/Logo 1.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on every location change
  }, [location.pathname]); // Dependency on location's pathname

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Toggle the dropdown visibility
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to check if the current path matches the given path
  const isActive = (path) => location.pathname === path;

  // Function to check if the current path includes the given prefix
  const isPrefixActive = (prefix) => location.pathname.startsWith(prefix);

  // Variants for Framer Motion
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
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
        <div className={`hidden md:flex md:items-center space-x-4 lg:space-x-10 `}>
          <Link
            to="/"
            className={`font-medium ${
              isActive('/') ? 'text-orange-500' : 'text-[#20212F] hover:text-orange-500'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-medium ${
              isActive('/about') ? 'text-orange-500' : 'text-[#20212F] hover:text-orange-500'
            }`}
          >
            About
          </Link>

          {/* Products with Click Dropdown */}
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className={`flex items-center font-medium ${
                isPrefixActive('/products') ? 'text-orange-500' : 'text-[#20212F] hover:text-orange-500'
              }`}
            >
              Products
              <motion.div
                initial="closed"
                animate={isDropdownOpen ? 'open' : 'closed'}
                variants={iconVariants}
                transition={{ duration: 0.3 }}
              >
                {/* Styled FaChevronDown to resemble the simple triangle */}
                <FaChevronDown className="ml-1 text-sm" style={{ transform: 'scaleX(1.2)', marginTop: '1px' }} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-50 w-40"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  transition={{ duration: 0.3 }}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to="/products/products1"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)} // Close dropdown on click
                  >
                    Product 1
                  </Link>
                  <Link
                    to="/products/products2"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)} // Close dropdown on click
                  >
                    Product 2
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
            onClick={() => navigate('/contact')} // Navigate to contact page
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white h-screen md:hidden z-40 overflow-y-auto`} 
        >
          <div className="flex flex-col items-start p-6">
            <Link
              to="/"
              className={`py-2 text-lg w-full border-b border-gray-300 font-medium ${
                isActive('/') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
              onClick={handleMenuToggle}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`py-2 text-lg w-full border-b border-gray-300 font-medium ${
                isActive('/about') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
              onClick={handleMenuToggle}
            >
              About
            </Link>

            <div className="py-2 w-full">
              <button
                onClick={handleDropdownToggle}
                className={`flex justify-between items-center w-full text-lg border-b border-gray-300 pb-2 font-medium ${
                  isPrefixActive('/products') ? 'text-orange-500' : 'text-black hover:text-orange-500'
                }`}
              >
                Products
                <motion.div
                  initial="closed"
                  animate={isDropdownOpen ? 'open' : 'closed'}
                  variants={iconVariants}
                  transition={{ duration: 0.3 }}
                >
                  {/* Styled FaChevronDown to resemble the simple triangle */}
                  <FaChevronDown className="ml-2 text-sm" style={{ transform: 'scaleX(1.2)', marginTop: '1px' }} />
                </motion.div>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="mt-2 bg-white shadow-lg rounded-lg w-full"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.3 }}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to="/products/products1"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      onClick={handleMenuToggle}
                    >
                      Product 1
                    </Link>
                    <Link
                      to="/products/products2"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      onClick={handleMenuToggle}
                    >
                      Product 2
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
