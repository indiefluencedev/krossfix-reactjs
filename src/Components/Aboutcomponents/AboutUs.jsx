import React from 'react';
import aboutus from '../../assets/AboutHeroimages/aboutus.png'; // Ensure the correct path to the image

const AboutUs = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-10 sm:py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 md:pr-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center md:text-left">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-4 text-center md:text-left">
            We are a technology-driven organization with a team of highly qualified and committed individuals.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 text-center md:text-left">
            Each function is driven by competent and experienced staff to ensure effective implementation of the vision and mission of the organization in each of their areas of operations.
          </p>
          <p className="text-base sm:text-lg text-gray-700 text-center md:text-left">
            We are constantly developing our teams with the addition of industry veterans to accelerate the speed of development.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src={aboutus} alt="About Us" className="w-full h-auto shadow-md rounded-lg object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
