import React from 'react';
import Logo from '../assets/footerimages/whitelogo.png'; // Ensure this path is correct
import { FaFacebookF, FaLinkedinIn, FaArrowRight } from 'react-icons/fa'; // For icons

const HomeFooter = () => {
  return (
    <footer className="bg-[#131C23] text-white py-8">
      <div className="container mx-auto px-4">
        {/* First Row: Logo and Contact Us */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* For 480px: Logo and Contact Us in the same row */}
          <div className="md:hidden flex items-center justify-between w-full">
            <img src={Logo} alt="KrossFix Logo" className="w-32" />
            <a href="#contact" className="flex items-center text-[#F19510] hover:text-[#f2980f]">
              Contact Us <FaArrowRight className="ml-2" />
            </a>
          </div>
          
          {/* For larger screens: Shoe Adhesive Manufacturing and Contact Us */}
          <h1 className="hidden md:block text-2xl md:text-4xl font-bold mb-4 md:mb-0 text-center md:text-left md:ml-10">
            Shoe Adhesive Manufacturing
          </h1>
          <a href="#contact" className="hidden md:flex items-center text-[#F19510] hover:text-[#f2980f] justify-center md:justify-end md:mr-10">
            Contact Us <FaArrowRight className="ml-2" />
          </a>
        </div>
        
        {/* Horizontal Line */}
        <hr className="border-t border-white-800 my-4" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo */}
          <div className="hidden md:block flex flex-col space-y-4 items-center md:items-start ml-10">
            <img src={Logo} alt="KrossFix Logo" width={150} height={50} />
          </div>

          {/* Column 2: Address and Social Media */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Address</h4>
            <p className='text-[#bebcbc] md:text-left'>
              V.P.O Mastapur, NH-352,<br />
              Distt. Rewari, Haryana, India<br />
              Pincode: 123401
            </p>
            <h4 className="text-lg font-semibold mt-6">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              {/* Facebook Icon with border */}
              <a href="#" className="text-white hover:text-[#f2980f] border border-[#F19510] p-2 rounded">
                <FaFacebookF />
              </a>
              {/* LinkedIn Icon with border */}
              <a href="#" className="text-white hover:text-[#f2980f] border border-[#F19510] p-2 rounded">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4 text-center  md:text-left">
            <h4 className="text-lg font-semibold">WhatsApp Us</h4>
            <p className='text-[#f2980f] ' >+91 70430-73333</p>
            <h4 className="text-lg font-semibold">Email</h4>
            <p className='text-[#f2980f] '>krossfix.vcpl@gmail.com</p>
          </div>

          {/* Column 4: Menu */}
          <div className="flex flex-col space-y-4 items-center md:items-end md:mr-16  md:text-left">
            <h4 className="text-lg font-semibold">Menu</h4>
            <a href="#home" className="text-[#f2980f] text-center relative">
              Home
              {/* Horizontal line below Home link */}
              <hr className="border-t-2 border-[#F19510] w-16 mx-auto mt-1" />
            </a>
            <a href="#about" className="text-[#bebcbc] hover:text-[#f2980f] text-center relative">About</a>
            <a href="#products" className="text-[#bebcbc] hover:text-[#f2980f] text-center relative">Products</a>
            <a href="#contact" className="text-[#bebcbc] hover:text-[#f2980f] text-center relative">Contact</a>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 text-center pt-4">
          <p className="text-[#bebcbc]">©2024 <a href="#" className='text-[#f2980f]'>Vcube Chemicals Pvt. Ltd.</a> All Rights Reserved.</p>
        </div>
      </div>

      {/* Custom CSS for 480px */}
      <style jsx>{`
        @media (max-width: 480px) {
          .container {
            padding-left: 10px;
            padding-right: 10px;
          }
          h1 {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default HomeFooter;
