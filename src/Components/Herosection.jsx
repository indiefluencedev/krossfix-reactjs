import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Background1 from '../assets/productsimages/7mockupkrossfix.png';
import Background2 from '../assets/productsimages/8mockupkrossfix.png';
import Background3 from '../assets/productsimages/9mockupkrossfix.png';
import Background4 from '../assets/productsimages/9mockupkrossfix.png';

const Herosection = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay]}
        className="w-full h-96 md:h-[500px] lg:h-[90vh]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Background1})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white px-4 md:px-16 lg:px-20">
              <h2 className="text-2xl sm:text-3xl md:text-3xl mt-10 font-bold mb-4 text-center md:text-left">
                Start adhesion right with KrossFix cleaners for pristine surfaces
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-center md:text-left">
                At Asian Paints, we offer the best waterproofing solutions.
              </p>
              <Link
                to="/products/cleaner"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 md:py-4 md:px-6 rounded-md font-bold flex items-center space-x-2 text-xs md:text-sm"
              >
                <span className="text-[10px] md:text-[13px]">Explore more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-4 md:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Background2})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white px-4 md:px-16 lg:px-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-10 text-center md:text-left">
                Quality adhesives, sustainable solutions — Made in India for India
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-center md:text-left">
                Asian Paints range of DIY products makes transformation easy.
              </p>
              <Link
                to="/products/adhesive"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 md:py-4 md:px-6 rounded-md font-bold flex items-center space-x-2 text-xs md:text-sm"
              >
                <span className="text-[10px] md:text-[13px]">Explore more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-4 md:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Background3})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white px-4 md:px-16 lg:px-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-10 text-center md:text-left">
                KrossFix Primers: Setting the foundation for durable adhesion
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-center md:text-left">
                At Asian Paints, we offer the best waterproofing solutions.
              </p>
              <Link
                to="/products/primer"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 md:py-4 md:px-6 rounded-md font-bold flex items-center space-x-2 text-xs md:text-sm"
              >
                <span className="text-[10px] md:text-[13px]">Explore more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-4 md:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Background4})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white px-4 md:px-16 lg:px-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-10 text-center md:text-left">
                Achieve superior bonds with high-performance KrossFix Hardeners
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-center md:text-left">
                At Asian Paints, we offer the best waterproofing solutions.
              </p>
              <Link
                to="/products/hardener"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 md:py-4 md:px-6 rounded-md font-bold flex items-center space-x-2 text-xs md:text-sm"
              >
                <span className="text-[10px] md:text-[13px]">Explore more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-4 md:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Herosection;
