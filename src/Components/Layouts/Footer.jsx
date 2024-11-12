import React, { useState } from 'react';
import Logo from '../../assets/footerimages/whitelogo.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io'; // Import the dropdown arrow icon

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <footer className="bg-[#131C23] text-white pt-12 pb-8 w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        {/* First Row: Logo and Contact Us */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 w-full">
          <div className="md:hidden flex items-center justify-between w-full">
            <img src={Logo} alt="KrossFix Logo" className="w-32" />
          </div>

          <h1 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-0 text-center md:text-left w-full">
            Shoe Adhesive Manufacturing
          </h1>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-700 w-full" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Column 1: Logo */}
          <div className="hidden md:flex flex-col space-y-4 items-center lg:items-start">
            <img src={Logo} alt="KrossFix Logo" width={150} height={50} />
          </div>

          {/* Column 2: Address and Social Media */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="text-[#bebcbc]">
              V.P.O Mastapur, NH-352,<br />
              Distt. Rewari, Haryana, India<br />
              Pincode: 123401
            </p>
            <h4 className="text-lg font-semibold mt-6">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="text-white hover:text-[#f2980f] border border-[#F19510] p-2 rounded">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-[#f2980f] border border-[#F19510] p-2 rounded">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">WhatsApp Us</h4>
            <p className="text-[#f2980f] mt-5"><a href="#">+91 70430-73333</a></p>
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-[#f2980f]"><a href="#">krossfix.vcpl@gmail.com</a></p>
          </div>

          {/* Column 4: Menu */}
          <div className="flex flex-col space-y-2 items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold">Menu</h4>
            <a href="#home" className="text-[#f2980f]">
              Home
              <hr className="border-t-2 border-[#F19510] w-12 mx-auto md:mx-0 mt-1" />
            </a>
            <a href="/about" className="text-[#bebcbc] hover:text-[#f2980f]">About</a>
            {/* Dropdown for Products */}
            <div className="relative ml-8 md:ml-0 w-[100px]">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-[#bebcbc] hover:text-[#f2980f] flex justify-between items-center w-[100px]"
              >
                <span>Products</span>
                <IoIosArrowDown
                  className={`ml-2 text-[#f2980f] transition-transform transform ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute -left-20 md:left-0 top-8 w-[200px] bg-[#131C23] border border-gray-700 shadow-lg rounded-md z-10">
                  <a href="/products/cleaner" className="block px-4 py-2 text-[#bebcbc] hover:text-[#f2980f]">Cleaner</a>
                  <a href="/products/adhesive" className="block px-4 py-2 text-[#bebcbc] hover:text-[#f2980f]">Adhesive</a>
                  <a href="/products/primer" className="block px-4 py-2 text-[#bebcbc] hover:text-[#f2980f]">Primer</a>
                  <a href="/products/hardener" className="block px-4 py-2 text-[#bebcbc] hover:text-[#f2980f]">Hardener</a>
                </div>
              )}
            </div>
            <a href="/contact" className="text-[#bebcbc] hover:text-[#f2980f]">Contact</a>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 text-center pt-4">
          <hr className="hr-mobile border-t border-gray-700 my-4" />
          <p className="text-[#bebcbc]">©2024 <a href="#" className="text-[#f2980f]">Vcube Chemicals Pvt. Ltd.</a> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
