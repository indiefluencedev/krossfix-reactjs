import React from 'react';

const MobileHistory = () => {
  return (
    <div className="p-4 mt-20">
      <h2 className="text-3xl text-black font-bold mb-12 text-center">History</h2>
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {/* First Event */}
        <div className="flex md:contents">
          <div className="relative col-start-2 col-end-3 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              {/* Updated line color */}
              <div className="w-1 h-full bg-black"></div>
            </div>
            {/* Updated dot color */}
            <div className="absolute w-6 h-6 -mt-3 bg-[#6c6c6c] rounded-full top-1/2"></div>
          </div>
          <div className="relative col-start-3 col-end-10 p-4 my-6 bg-gray-200 text-gray-800 shadow-md rounded-lg max-w-[400px]">
            <h3 className="text-lg font-semibold lg:text-xl">Foundation of Vcube Chemicals</h3>
            <p className="mt-2 leading-6">
              <span className="text-orange-500 font-bold">2001-2002</span> - Established in Rewari, Haryana, Vcube emerged as a pioneer in the chemical industry, producing high-quality adhesives.
            </p>
            {/* Triangle on the left side */}
            <div className="absolute top-1/2 left-[-20px] rotate-180 transform -translate-y-1/2 h-0 w-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-gray-200"></div>
          </div>
        </div>

        {/* Second Event */}
        <div className="flex md:contents">
          <div className="relative col-start-2 col-end-3 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              {/* Updated line color */}
              <div className="w-1 h-full bg-black"></div>
            </div>
            {/* Updated dot color */}
            <div className="absolute w-6 h-6 -mt-3 bg-[#6c6c6c] rounded-full top-1/2"></div>
          </div>
          <div className="relative col-start-3 col-end-10 p-4 my-6 bg-gray-200 text-gray-800 shadow-md rounded-lg max-w-[400px]">
            <h3 className="text-lg font-semibold lg:text-xl">Launch of KrossFix Adhesives</h3>
            <p className="mt-2 leading-6">
              <span className="text-orange-500 font-bold">2018</span> - With a decade of expertise, Vcube Chemicals launched KrossFix to provide premium, customized solutions for the footwear industry.
            </p>
            {/* Triangle on the left side */}
            <div className="absolute top-1/2 left-[-20px] rotate-180 transform -translate-y-1/2 h-0 w-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-gray-200"></div>
          </div>
        </div>

        {/* Third Event */}
        <div className="flex md:contents">
          <div className="relative col-start-2 col-end-3 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              {/* Updated line color */}
              <div className="w-1 h-full bg-black"></div>
            </div>
            {/* Updated dot color */}
            <div className="absolute w-6 h-6 -mt-3 bg-[#6c6c6c] rounded-full top-1/2"></div>
          </div>
          <div className="relative col-start-3 col-end-10 p-4 my-6 bg-gray-200 text-gray-800 shadow-md rounded-lg max-w-[400px]">
            <h3 className="text-lg font-semibold lg:text-xl">State-of-the-Art Manufacturing Facility</h3>
            <p className="mt-2 leading-6">
              <span className="text-orange-500 font-bold">2020</span> - KrossFix established a world-class manufacturing facility in Nadiad GIDC, near Ahmedabad, to ensure the highest standards of quality and sustainability.
            </p>
            {/* Triangle on the left side */}
            <div className="absolute top-1/2 left-[-20px] rotate-180 transform -translate-y-1/2 h-0 w-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-gray-200"></div>
          </div>
        </div>

        {/* Fourth Event */}
        <div className="flex md:contents">
          <div className="relative col-start-2 col-end-3 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              {/* Updated line color */}
              <div className="w-1 h-full bg-black"></div>
            </div>
            {/* Updated dot color */}
            <div className="absolute w-6 h-6 -mt-3 bg-[#6c6c6c] rounded-full top-1/2"></div>
          </div>
          <div className="relative col-start-3 col-end-10 p-4 my-6 bg-gray-200 text-gray-800 shadow-md rounded-lg max-w-[400px]">
            <h3 className="text-lg font-semibold lg:text-xl">Market Leader in Footwear Adhesives</h3>
            <p className="mt-2 leading-6">
              <span className="text-orange-500 font-bold">2023</span> - Today, KrossFix has become a leading name in the Indian footwear adhesive sector, exceeding industry expectations with reliable, on-time delivery.
            </p>
            {/* Triangle on the left side */}
            <div className="absolute top-1/2 left-[-20px] rotate-180 transform -translate-y-1/2 h-0 w-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHistory;
