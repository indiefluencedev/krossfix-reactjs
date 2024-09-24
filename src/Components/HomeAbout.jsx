import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBullseye } from 'react-icons/fa'; // Icons from react-icons
import AboutImage from '../assets/image8.png'; // About Us Image

const HomeAbout = () => {
  const [activeTab, setActiveTab] = useState('vision'); // Set "vision" as the default active tab
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  const toggleContent = (tab) => {
    setActiveTab(tab); // Set the active tab to 'vision' or 'mission'
  };

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={aboutRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full max-w-screen-xl mx-auto px-4 lg:px-12 py-8 sm:py-12"
    >
      {/* About Us Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-left mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            Super Bond Adhesives, a leading adhesive manufacturing company with a rich history spanning over{' '}
            <span className='text-[#f97316] font-semibold'>four decades</span>.
          </p>
          <p className="text-lg mb-4">
            Since our establishment in <span className='text-[#f97316] font-semibold'>1974</span>, we have been dedicated to providing innovative adhesive solutions that
            cater to various industries and applications.
          </p>
          <p className="text-lg mb-4">
            Our commitment to <span className='text-[#f97316] font-semibold'>excellence, customer satisfaction, and continuous improvement</span> has made us a trusted
            partner for businesses worldwide.
          </p>

          {/* Vision and Mission Tabs in a Card Style */}
          <div className="p-5 rounded-lg shadow-lg border border-gray-100 bg-white h-[400px] md:h-[300px] lg:h-[350px]">
            <div className="flex flex-row justify-start gap-3 md:gap-8 py-3">
              {/* Vision Tab */}
              <div
                role="tab"
                aria-selected={activeTab === 'vision'}
                className={`md:w-[180px] w-[140px] flex items-center cursor-pointer p-4 rounded-lg transition-all duration-300 border-b-4 ${
                  activeTab === 'vision' ? 'bg-gray-100 border-orange-500' : 'border-transparent'
                }`}
                onClick={() => toggleContent('vision')}
              >
                <FaLightbulb
                  className={`text-2xl md:text-3xl ${
                    activeTab === 'vision' ? 'text-orange-500' : 'text-[#312b6a]'
                  }`}
                />
                <h3
                  className={`text-sm md:text-lg ml-4 font-semibold ${
                    activeTab === 'vision' ? 'text-orange-500' : 'text-[#312b6a]'
                  }`}
                >
                  Our Vision
                </h3>
              </div>

              {/* Mission Tab */}
              <div
                role="tab"
                aria-selected={activeTab === 'mission'}
                className={`md:w-[180px] w-[150px] flex items-center cursor-pointer p-4 rounded-lg transition-all duration-300 border-b-4 ${
                  activeTab === 'mission' ? 'bg-gray-100 border-orange-500' : 'border-transparent'
                }`}
                onClick={() => toggleContent('mission')}
              >
                <FaBullseye
                  className={`text-2xl md:text-3xl ${
                    activeTab === 'mission' ? 'text-orange-500' : 'text-[#312b6a]'
                  }`}
                />
                <h3
                  className={`text-sm md:text-lg ml-4 font-semibold ${
                    activeTab === 'mission' ? 'text-orange-500' : 'text-[#312b6a]'
                  }`}
                >
                  Our Mission
                </h3>
              </div>
            </div>

            {/* Vision and Mission Content */}
            <div className="text-[16px] md:text-[16px] relative h-[300px] md:h-[380px] lg:h-[250px]">
              {/* Vision Content */}
              <div
                className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${
                  activeTab === 'vision' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={activeTab !== 'vision'}
                role="tabpanel"
              >
                <p className="text-base md:text-[16px]">
                  At Super Bond, our vision is to be the global leader in adhesive manufacturing, delivering superior
                  quality products and unmatched service. We strive to empower our customers' success by providing
                  them with reliable, innovative, and sustainable adhesive solutions. Through continuous research,
                  development, and collaboration, we aim to anticipate and meet the evolving needs of our customers,
                  ensuring their satisfaction and loyalty.
                </p>
              </div>

              {/* Mission Content */}
              <div
                className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${
                  activeTab === 'mission' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={activeTab !== 'mission'}
                role="tabpanel"
              >
                <p className="text-base md:text-[16px] lg:text-[14px]">
                  Our mission is to develop, manufacture, and supply adhesive products of the highest quality, meeting
                  and exceeding industry standards. We are dedicated to providing innovative solutions that enhance our
                  customers' productivity, efficiency, and competitiveness. By investing in cutting-edge technology,
                  fostering a culture of excellence, and nurturing a highly skilled team, we aim to deliver superior
                  products and services that consistently surpass our customers' expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image with gap */}
        <div className="lg:w-1/2 lg:ml-12  md:mt-10 mt-5 lg:mt-0">
          <img
            src={AboutImage}
            alt="Factory Image"
            className="w-full max-h-[653px]  h-auto shadow-lg object-cover"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default HomeAbout;
