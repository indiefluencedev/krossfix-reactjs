import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/galleryimages/bag.jpg'; 
import image2 from '../assets/galleryimages/basket.jpg';
import image3 from '../assets/galleryimages/colorshoe.jpg';
import image4 from '../assets/galleryimages/cream.jpg';
import image5 from '../assets/galleryimages/game.jpg';
import image6 from '../assets/galleryimages/leatherbag.jpg';
import image7 from '../assets/galleryimages/light.jpg';
import image8 from '../assets/galleryimages/medicine.jpg';
import image9 from '../assets/galleryimages/shoes.jpg';
import image10 from '../assets/galleryimages/watch.jpg';
import image11 from '../assets/galleryimages/bag2.jpg';
import image12 from '../assets/galleryimages/whitecream.jpg';
import '../Components/Styles/Gallery.css';

const Gallery = () => {
  const [isInView, setIsInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const GalleryContainer = isDesktop ? motion.div : 'div';

  return (
    <GalleryContainer
      ref={galleryRef}
      initial={isDesktop ? 'hidden' : undefined}
      animate={isInView && isDesktop ? 'visible' : undefined}
      variants={isDesktop ? containerVariants : undefined}
      className="gallery-container mx-auto"
    >
      <h2 className="gallery-heading">Gallery</h2>
      <div className="grid-container">
        <div className="grid-item item1"><img src={image1} alt="item" /></div>
        <div className="grid-item item2"><img src={image2} alt="item" /></div>
        <div className="grid-item item3"><img src={image3} alt="item" /></div>
        <div className="grid-item item4"><img src={image4} alt="item" /></div>
        <div className="grid-item item5"><img src={image5} alt="item" /></div>
        <div className="grid-item item6"><img src={image6} alt="item" /></div>
        <div className="grid-item item7"><img src={image7} alt="item" /></div>
        <div className="grid-item item8"><img src={image8} alt="item" /></div>
        <div className="grid-item item9"><img src={image9} alt="item" /></div>
        <div className="grid-item item10"><img src={image10} alt="item" /></div>
        <div className="grid-item item11"><img src={image11} alt="item" /></div>
        <div className="grid-item item12"><img src={image12} alt="item" /></div>
        <div className="grid-item item13"><img src={image3} alt="item" /></div>
        <div className="grid-item item14"><img src={image7} alt="item" /></div>
        <div className="grid-item item15"><img src={image1} alt="item" /></div>
        <div className="grid-item item16"><img src={image2} alt="item" /></div>
        <div className="grid-item item17"><img src={image8} alt="item" /></div>
      </div>
    </GalleryContainer>
  );
};

export default Gallery;
