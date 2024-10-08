import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Background1 from '../assets/productsimages/7mockupkrossfix.png'; // Replace with actual path
import Background2 from '../assets/productsimages/8mockupkrossfix.png';   // Replace with actual path
import Background3 from '../assets/productsimages/9mockupkrossfix.png'; // Replace with actual path

const Herosection = () => {
  return (
    <div className="w-full"> {/* Ensure full width container without max-width */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay]}
        className="w-full h-96 md:h-[500px] lg:h-[90vh]" // Maintain the height but ensure full width
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Background1})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white px-4 md:px-16 lg:px-20"> {/* Adjust text alignment and padding */}
              <h2 className="text-3xl sm:text-3xl md:text-4xl mt-10 font-bold mb-4 text-center md:text-left"> {/* Change text alignment */}
                A range of smart waterproofing solutions
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-center md:text-left"> {/* Change text alignment */}
                At Asian Paints, we offer the best waterproofing solutions.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-bold flex items-center space-x-2">
                <span>Explore more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white px-4 md:px-16 lg:px-20"> {/* Adjust text alignment and padding */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-10 text-center md:text-left"> {/* Change text alignment */}
                Transform your space easily with DIY products
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-center md:text-left"> {/* Change text alignment */}
                Asian Paints range of DIY products makes transformation easy.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-bold flex items-center space-x-2">
                <span>Explore more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white px-4 md:px-16 lg:px-20"> {/* Adjust text alignment and padding */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-10 text-center md:text-left"> {/* Change text alignment */}
                A range of smart waterproofing solutions
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-center md:text-left"> {/* Change text alignment */}
                At Asian Paints, we offer the best waterproofing solutions.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-bold flex items-center space-x-2">
                <span>Explore more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Herosection;
