import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from 'react-lazyload';
import reviewImage1 from '../assets/reviewsimages/re1.png';
import reviewImage2 from '../assets/reviewsimages/re2.png';
import reviewImage3 from '../assets/reviewsimages/re3.png';
import reviewImage4 from '../assets/reviewsimages/review4.png';
import '../Components/Styles/Review.css'; // Custom styles

const testimonials = [
  {
    text: "We have been using KrossFix adhesives from Vcube Chemicals for our footwear production, and the results have been outstanding. The quality and reliability of their products have significantly improved our product quality. Their team provides excellent support and ensures we always have what we need. We highly recommend KrossFix adhesives for any shoe manufacturing needs.",
    image: reviewImage1,
    name: 'Sanjiv Singhal',
    company: 'GLAMOUR FOOTWEAR',
  },
  {
    text: "Using KrossFix adhesives has significantly improved our footwear production, delivering an absolutely unbeatable quality for our shoes and other footwear lines. The adhesives' strength and durability is exceptional and something which is very hard to find. Their commitment to quality and customer satisfaction makes them a trusted partner in our manufacturing process.",
    image: reviewImage2,
    name: 'Saurabh Bairathi',
    company: 'BAIRATHI SHOE COMPANY',
  },
  {
    text: "KrossFix adhesives by Vcube Chemicals have significantly enhanced our production standards. Their products consistently deliver strong and reliable bonds, which is crucial for our footwear manufacturing. We highly recommend KrossFix for any adhesive requirements in the footwear industry.",
    image: reviewImage3,
    name: 'Sawan Aggarwal',
    company: 'RIVALDO',
  },
  {
    text: "KrossFix adhesives have exceeded our expectations in terms of performance and reliability. Vcube Chemicals has provided us with top-notch products and excellent customer service, ensuring we meet our production goals efficiently. We highly recommend KrossFix adhesives for their superior quality and the dedicated support team behind them.",
    image: reviewImage4,
    name: 'Sumit Goel',
    company: 'Globe Footwear (Striker)',
  }
];

const PrevArrow = ({ className, style, onClick }) => (
  <FaArrowLeft className={className} style={{ ...style, display: 'block', color: 'black' }} onClick={onClick} />
);

const NextArrow = ({ className, style, onClick }) => (
  <FaArrowRight className={className} style={{ ...style, display: 'block', color: 'black' }} onClick={onClick} />
);

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,  // Show 3 cards on larger screens
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 2,  // Show 2 cards for screens <= 1024px
        },
      },
      {
        breakpoint: 768,  // Adjust the 768px screen setting
        settings: {
          infinite: true,
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 2,  // Show 2 cards for screens <= 768px
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1,  // Show 1 card for screens <= 480px
        },
      },
    ],
    appendDots: dots => (
      <div style={{ marginBottom: '30px' }}>
        <ul> {dots} </ul>
      </div>
    ),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.div
      ref={carouselRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="mx-auto" // Centering the container
    >
      <div className='w-full md:px-4 lg:px-8 mx-auto'>
        <div className='w-full mx-auto mt-12 md:mt-16'>
          <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>Reviews</h2>
          {/* Container with max-width for 1440px screens */}
          <div className='w-full mx-auto' style={{ maxWidth: '1240px' }}>
            <Slider {...settings} className="slider-with-margin">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="py-5"
                  style={{ transition: 'transform 0.5s' }}
                >
                  <div className="relative bg-white shadow-lg rounded-md overflow-hidden p-4" style={{ height: '430px', maxWidth: '300px', margin: '0 auto', marginBottom: '10px', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
                    <div className="text-orange-500 text-4xl mb-2 text-center">
                      <FaQuoteLeft />
                    </div>
                    <div className="p-2 text-center overflow-auto custom-scrollbar" style={{ maxHeight: '150px' }}>
                      <p className="text-gray-600 text-sm">{testimonial.text}</p>
                    </div>
                    <LazyLoad height={100} offset={100} once>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 object-cover rounded-full mx-auto mb-2 mt-8"
                      />
                    </LazyLoad>
                    <div className="p-2 text-center">
                      <h3 className="text-sm font-semibold mt-2">{testimonial.name}</h3>
                      <p className="text-sm text-orange-500">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsCarousel;
