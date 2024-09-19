import React from 'react';
import dottedmap from '../../assets/ContactUsiamges/dotedmap.png'; // Background map
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // For icons

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
            <h2 className="text-5xl font-bold mb-6">Reach Us</h2>
            <p className="text-gray-600 mb-4 text-lg">
              <strong>Our page is the perfect place for you to get in touch with us! Our page is the perfect place for you to get in touch with us!</strong>
              <br /> <br />
              Whether you have a question, or feedback, or simply want to say hello, we’re here to help. You can reach us by phone, email, or by filling out our contact form on this page. We’re always happy to hear from our visitors and will do our best to respond as quickly as possible.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              We’re committed to providing a positive user experience, and we’re here to help you in any way we can. So, if you have something on your mind, please don’t hesitate to reach out. We’re looking forward to hearing from you!
            </p>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-400 my-4" />

            {/* Address and WhatsApp Info */}
            <div className="hidden sm:flex justify-between mb-6">
              <div>
                <h3 className="font-bold mb-2 text-lg">Address</h3>
                <p className="text-gray-600 text-lg">
                  V.P.O Mastapur, NH-352, <br />
                  Distt. Rewari, Haryana, India <br />
                  Pincode: 123401
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-lg">WhatsApp Us</h3>
                <p className="text-gray-600 hover:text-[#f2980f] text-lg">
                  <a href="#">+91 70430-73333</a>
                </p>
              </div>
            </div>

            {/* Email and Social Media Icons */}
            <div className="hidden sm:flex justify-between mb-6">
              <div>
                <h3 className="font-bold mb-2 text-lg">Email</h3>
                <p className="text-gray-500 hover:text-[#f2980f] text-lg">
                  <a href="#">krossfix.vcpl@gmail.com</a>
                </p>
              </div>
              <div className="mr-10">
                <h4 className="text-lg font-semibold">Follow Us</h4>
                <div className="flex justify-center md:justify-start space-x-4 mt-2">
                  <a href="#" className="text-black hover:text-[#f2980f] border border-[#F19510] p-2 rounded">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-black hover:text-[#f2980f] border border-[#F19510] p-2 rounded">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full  md:w-[45%] md:p-12 bg-gray-900 text-white p-10 rounded-lg shadow-lg">
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
        </div>
      </div>

      {/* Map Section */}
      <div className="m-10 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.396701861681!2d76.60832157919043!3d28.286304737485455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4fa447ea1ba7%3A0x3c3a85df38311445!2sNH352%2C%20Mastapur%2C%20Haryana!5e0!3m2!1sen!2sin!4v1726728260265!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-[1240px] h-[500px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ReachUs;
