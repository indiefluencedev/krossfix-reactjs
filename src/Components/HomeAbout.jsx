import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBullseye } from 'react-icons/fa'; // Icons from react-icons
import AboutImage from '../assets/image8.png'; // About Us Image

const HomeAbout = () => {
  const [activeTab, setActiveTab] = useState('vision'); // State for controlling the active tab
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Function to toggle between 'vision' and 'mission' tabs
  const toggleContent = (tab) => {
    setActiveTab(tab);
  };

  // Use Intersection Observer to detect when the text and image are visible
  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          textObserver.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.5, // Trigger when 30% of the text component is visible
      }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          imageObserver.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.5, // Trigger when 30% of the image component is visible
      }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, []);

  // Animation variants for the text and image
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-12 py-8 sm:py-12">
      {/* About Us Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          ref={textRef}
          className="lg:w-1/2 text-left mb-10 lg:mb-0"
          initial="hidden"
          animate={isTextVisible ? 'visible' : 'hidden'}
          variants={textVariants}
        >
          <h2 className="md:text-4xl text-[30px] text-[#403b68] font-bold mb-6">About Us</h2>
          <p className="md:text-[16px] text-[14px] text-[#202020] mb-4">
            {/* Super Bond Adhesives, a leading adhesive manufacturing company with a rich history spanning over{' '}
            <span className='text-[#f97316] font-semibold'>four decades</span>. */}
            KrossFix Adhesives, backed by Vcube Chemicals, has been a trusted provider of advanced adhesive solutions for the footwear industry since 2018. We specialize in tailor-made adhesives that enhance durability and performance, developed in-house to meet precise industry needs. Supported by Vcube Chemicals&apos; decades of expertise and our focus on reliable, on-time delivery, KrossFix ensures consistent quality and innovation. Our solutions are designed to streamline manufacturing processes while meeting the unique demands of the footwear sector.


          </p>
          {/* <p className="text-lg mb-4">
            Since our establishment in <span className='text-[#f97316] font-semibold'>1974</span>, we have been dedicated to providing innovative adhesive solutions that
            cater to various industries and applications.
          </p> */}
          {/* <p className="text-lg mb-4">
            Our commitment to <span className='text-[#f97316] font-semibold'>excellence, customer satisfaction, and continuous improvement</span> has made us a trusted
            partner for businesses worldwide.
          </p> */}

          {/* Vision and Mission Tabs in a Card Style */}
          <div className="p-5 rounded-lg shadow-lg border border-gray-100 bg-white h-[440px] md:h-[300px] lg:h-[350px]">
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
                  className={`text-[13px] md:text-[17px] ml-4 xl:text-[17px]  font-semibold ${
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
                  className={`text-[13px] md:text-[17px] xl:text-[17px] ml-4 font-semibold ${
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
                <p className="text-base text-[#202020] lg:text-[14px] xl:text-[15px] md:text-[16px] text-[13px] md:font-medium">
                Since launching in 2018, KrossFix has been dedicated to transforming India's footwear manufacturing with locally-made adhesives that meet global standards. Committed to quality and customer-centric solutions, we deliver personalized support to ensure efficient quality and smooth production process. With our commitment to quality and Vocal for Local drive, we are a 'Make In India' initiative, and we take great pride in our customer-centric philosophy. 
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
                <p className="text-base text-[#202020] lg:text-[14px] xl:text-[15px] md:text-[16px] text-[13px] md:font-medium">
                We aspire to become the foremost provider of innovative and sustainable adhesive solutions, revolutionizing the footwear industry with products that prioritize quality, performance, and environmental responsibility. Our vision is to empower manufacturers with advanced adhesives that enhance product durability and streamline processes while contributing to a greener, more sustainable future for the industry. At KrossFix, we are committed to driving progress and fostering partnerships that create lasting value.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image with gap */}
        <motion.div
          ref={imageRef}
          className="lg:w-1/2 lg:ml-12  md:mt-10 mt-5 lg:mt-0"
          initial="hidden"
          animate={isImageVisible ? 'visible' : 'hidden'}
          variants={imageVariants}
        >
          <img
            src={AboutImage}
            alt="Factory Image"
            className="w-full max-h-[653px]  h-auto shadow-lg object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default HomeAbout;
