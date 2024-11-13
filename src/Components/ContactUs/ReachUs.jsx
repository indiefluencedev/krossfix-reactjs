import React from 'react';
import dottedmap from '../../assets/ContactUsiamges/dotedmap.png'; // Background map
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Importing alternative icons

const ReachUs = () => {
  return (
    <div>
      {/* Reach Us Section */}
      <div className="relative py-12">
        {/* Background Image with opacity via pseudo-element */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
          style={{
            backgroundImage: `url(${dottedmap})`,
          }}
        ></div>

        {/* 1240px Max Width Container */}
        <div className="relative z-10 max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12">
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl text-[#403b68] font-bold mb-6">Reach Us</h2>
            <p className="text-gray-600 mb-4 text-lg">
              <strong>Our page is the perfect place for you to get in touch with us!</strong>
            </p>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-400 my-4" />

            {/* Address and Contact Details - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 hidden sm:grid">
              {/* First Column - WhatsApp & Address */}
              <div>
                <h3 className="font-bold mb-2 text-lg">WhatsApp Us</h3>
                <p className="text-gray-600 hover:text-[#f2980f] text-[15px]">
                  <a href="#">+91 70430-73333</a>
                </p>
                <h3 className="font-bold mt-4 mb-2 text-lg">Address</h3>
                <p className="text-gray-600 text-[15px]">
                  V.P.O Mastapur, NH-352, <br />
                  Distt. Rewari, Haryana, India <br />
                  Pincode: 123401
                </p>
              </div>

              {/* Second Column - Email & Follow Us */}
              <div>
                <h3 className="font-bold mb-2 text-lg">Email</h3>
                <p className="text-gray-500 hover:text-[#f2980f] text-[15px]">
                  <a href="#">krossfix.vcpl@gmail.com</a>
                </p>
                <h3 className="font-bold mt-4 mb-2 text-lg">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-black hover:text-[#f2980f] border border-[#F19510] p-2 rounded">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-black hover:text-[#f2980f] border border-[#F19510] p-2 rounded">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Embed Map */}
            <div className="mt-4 hidden md:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.396701861681!2d76.60832157919043!3d28.286304737485455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4fa447ea1ba7%3A0x3c3a85df38311445!2sNH352%2C%20Mastapur%2C%20Haryana!5e0!3m2!1sen!2sin!4v1726728260265!5m2!1sen!2sin"
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md shadow-lg"
              ></iframe>
            </div>
          </div> 

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-[45%] md:p-12 bg-gray-900 text-white p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
            <form>
              <div className="mb-6">
                <label className="block text-lg mb-3" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-orange-500 transition-all text-white text-lg"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg mb-3" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-orange-500 transition-all text-white text-lg"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg mb-3" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-orange-500 transition-all text-white text-lg"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg mb-3" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-orange-500 transition-all text-white text-lg"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg mb-3" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-orange-500 transition-all text-white text-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition-colors text-lg"
              >
                Send a Message &rarr;
              </button>
            </form>


          </div>

          <div className="mt-4 md:hidden mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.396701861681!2d76.60832157919043!3d28.286304737485455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4fa447ea1ba7%3A0x3c3a85df38311445!2sNH352%2C%20Mastapur%2C%20Haryana!5e0!3m2!1sen!2sin!4v1726728260265!5m2!1sen!2sin"
                width="350"
                height="440"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md shadow-lg"
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
