import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Background1 from '../assets/paint.jpg'; // Replace with actual path
import Background2 from '../assets/box.jpg';   // Replace with actual path
import Background3 from '../assets/image 16.png'; // Replace with actual path

const Herosection = () => {
  return (
   <div className="relative">
     <Swiper
       spaceBetween={0}
       slidesPerView={1}
       loop={true}
       autoplay={{ delay: 4000 }}
       modules={[Autoplay]}
       className="w-full h-96 md:h-[500px] lg:h-[550px]"  
     >
       <SwiperSlide>
         <div
           className="h-full bg-cover bg-center"
           style={{ backgroundImage: `url(${Background1})` }}
         >
           <div className="absolute inset-0 bg-black bg-opacity-60"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
             <h1 className="text-2xl sm:text-3xl md:text-4xl mt-10 font-bold text-center mb-4">
               A range of smart waterproofing solutions
             </h1>
             <p className="text-base sm:text-lg md:text-xl text-center mb-8">
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

       <SwiperSlide>
         <div
           className="h-full bg-cover bg-center"
           style={{ backgroundImage: `url(${Background2})` }}
         >
           <div className="absolute inset-0 bg-black bg-opacity-60"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 mt-10">
               Transform your space easily with DIY products
             </h1>
             <p className="text-base sm:text-lg md:text-xl text-center mb-8">
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

       <SwiperSlide>
         <div
           className="h-full bg-cover bg-center"
           style={{ backgroundImage: `url(${Background3})` }}
         >
           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 mt-10">
               A range of smart waterproofing solutions
             </h1>
             <p className="text-base sm:text-lg md:text-xl text-center mb-8">
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
  )
}

export default Herosection;
