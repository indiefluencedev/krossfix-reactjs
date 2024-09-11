import React, { useState } from 'react';
import { FaLightbulb, FaBullseye } from 'react-icons/fa'; // Icons from react-icons
import AboutImage from '../assets/image8.png'; // About Us Image

const HomeAbout = () => {
  const [activeTab, setActiveTab] = useState('vision'); // Set "vision" as the default active tab

  const toggleContent = (tab) => {
    setActiveTab(tab); // Set the active tab to 'vision' or 'mission'
  };

  return (
    <div className="container max-w-[1240px] mx-auto px-4 lg:px-12 py-8 sm:py-12">
      {/* About Us Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-left mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            Super Bond Adhesives, a leading adhesive manufacturing company with a rich history spanning over{' '}
            <strong>four decades</strong>.
          </p>
          <p className="text-lg mb-4">
            Since our establishment in 1974, we have been dedicated to providing innovative adhesive solutions that
            cater to various industries and applications.
          </p>
          <p className="text-lg mb-4">
            Our commitment to excellence, customer satisfaction, and continuous improvement has made us a trusted
            partner for businesses worldwide.
          </p>

          {/* Vision and Mission Tabs in a Card Style */}
          <div className="md:h-80 p-6 rounded-lg shadow-lg border md:border-gray-200 border-gray-100 bg-white">
            <div className="flex flex-row md:flex-row justify-start gap-3 md:gap-8 py-3 md:py-6">
              {/* Vision Tab */}
              <div
                role="tab"
                aria-selected={activeTab === 'vision'}
                className={`md:w-[200px] w-[140px] flex items-center cursor-pointer p-4 rounded-lg transition-all duration-300 border-b-4 ${
                  activeTab === 'vision' ? 'bg-gray-100 border-orange-500' : 'border-transparent'
                }`}
                onClick={() => toggleContent('vision')}
              >
                <FaLightbulb
                  className={`md:text-4xl text-2xl ${
                    activeTab === 'vision' ? 'text-orange-500' : 'text-gray-500'
                  }`}
                />
                <h3
                  className={`md:text-xl text-sm ml-4 ${
                    activeTab === 'vision' ? 'text-orange-500' : 'text-black'
                  }`}
                >
                  Our Vision
                </h3>
              </div>

              {/* Mission Tab */}
              <div
                role="tab"
                aria-selected={activeTab === 'mission'}
                className={`md:w-[200px] w-[150px] flex items-center cursor-pointer p-4  rounded-lg transition-all duration-300 border-b-4 ${
                  activeTab === 'mission' ? 'bg-gray-100 border-orange-500' : 'border-transparent'
                }`}
                onClick={() => toggleContent('mission')}
              >
                <FaBullseye
                  className={`md:text-4xl text-2xl ${
                    activeTab === 'mission' ? 'text-orange-500' : 'text-gray-500'
                  }`}
                />
                <h3
                  className={`md:text-xl text-sm ml-4 ${
                    activeTab === 'mission' ? 'text-orange-500' : 'text-black'
                  }`}
                >
                  Our Mission
                </h3>
              </div>
            </div>

            {/* Vision and Mission Content */}
            <div className="mt-4 text-sm relative h-[200px]"> {/* Fixed height for smooth transitions */}
              {/* Vision Content */}
              <div
                className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${
                  activeTab === 'vision' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={activeTab !== 'vision'}
                role="tabpanel"
              >
                {activeTab === 'vision' && (
                  <p>
                    At Super Bond, our vision is to be the global leader in adhesive manufacturing, delivering superior
                    quality products and unmatched service. We strive to empower our customers' success by providing
                    them with reliable, innovative, and sustainable adhesive solutions. Through continuous research,
                    development, and collaboration, we aim to anticipate and meet the evolving needs of our customers,
                    ensuring their satisfaction and loyalty.
                  </p>
                )}
              </div>

              {/* Mission Content */}
              <div
                className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${
                  activeTab === 'mission' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={activeTab !== 'mission'}
                role="tabpanel"
              >
                {activeTab === 'mission' && (
                  <p>
                    Our mission is to develop, manufacture, and supply adhesive products of the highest quality, meeting
                    and exceeding industry standards. We are dedicated to providing innovative solutions that enhance our
                    customers' productivity, efficiency, and competitiveness. By investing in cutting-edge technology,
                    fostering a culture of excellence, and nurturing a highly skilled team, we aim to deliver superior
                    products and services that consistently surpass our customers' expectations.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image with gap */}
        <div className="lg:w-1/2 lg:ml-12 md:mt-10 mt-5 lg:mt-0">
          <img
            src={AboutImage}
            alt="Factory Image"
            className="w-full max-h-[653px] h-auto shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
