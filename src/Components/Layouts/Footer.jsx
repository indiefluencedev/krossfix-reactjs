import React from 'react';
import Logo from '../../assets/footerimages/whitelogo.png'; // Ensure this path is correct
import { FaFacebookF, FaLinkedinIn, FaArrowRight } from 'react-icons/fa'; // For icons

const Footer = () => {
  return (
    <footer className="bg-[#131C23] text-white pt-12 pb-8 w-full"> {/* Added more padding to the top */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        {/* First Row: Logo and Contact Us */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 w-full">
          {/* For 480px: Logo and Contact Us in the same row */}
          <div className="md:hidden flex items-center justify-between w-full">
            <img src={Logo} alt="KrossFix Logo" className="w-32" />
            <a href="#contact" className="flex items-center text-[#F19510] hover:text-[#f2980f] whitespace-nowrap">
              Contact Us <FaArrowRight className="ml-2 rotate-45" />
            </a>
          </div>

          {/* For larger screens: Shoe Adhesive Manufacturing and Contact Us */}
          <h1 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-0 text-center md:text-left w-full">
            Shoe Adhesive Manufacturing
          </h1>
          <a href="/contact" className="hidden md:flex items-center text-[#F19510] hover:text-[#f2980f] justify-center md:justify-end md:mr-10 whitespace-nowrap">
            Contact Us <FaArrowRight className="ml-2 rotate-45 " />
          </a>
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
              {/* Horizontal line below Home link */}
              <hr className="border-t-2 border-[#F19510] w-12 mx-auto md:mx-0 mt-1" />
            </a>
            <a href="#about" className="text-[#bebcbc] hover:text-[#f2980f]">About</a>
            <a href="#products" className="text-[#bebcbc] hover:text-[#f2980f]">Products</a>
            <a href="#contact" className="text-[#bebcbc] hover:text-[#f2980f]">Contact</a>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-8 text-center pt-4">
          {/* Horizontal line only visible in 480px */}
          <hr className="hr-mobile border-t border-gray-700 my-4" />
          <p className="text-[#bebcbc]">©2024 <a href="#" className="text-[#f2980f]">Vcube Chemicals Pvt. Ltd.</a> All Rights Reserved.</p>
        </div>
      </div>

      {/* Custom CSS for 480px */}
      <style jsx>{`
        @media (max-width: 480px) {
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }
          h1 {
            display: none;
          }
          /* Show hr line for mobile only */
          .hr-mobile {
            display: block;
          }
        }

        @media (min-width: 481px) {
          /* Hide the hr for larger screens */
          .hr-mobile {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
