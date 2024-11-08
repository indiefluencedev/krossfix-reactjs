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
import image13 from '../assets/galleryimages/colorshoe.jpg';
import '../Components/Styles/GalleryPage.css';

const GalleryPage = () => {
  const [isInView, setIsInView] = useState(true); // Temporarily set to true to bypass observer
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const GalleryPageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  const GalleryPageContainer = isDesktop ? motion.div : 'div';

  return (
    <GalleryPageContainer
      ref={GalleryPageRef}
    //   initial={isDesktop ? 'hidden' : undefined}
    //   animate={isInView && isDesktop ? 'visible' : undefined}
    //   variants={isDesktop ? containerVariants : undefined}
      className="GalleryPage-container mx-auto"
    >
      <h2 className="pt-28"></h2>
      <div className="grid-container1">
        <div className="grid-item1 item1"><img src={image1} alt="Bag" /></div>
        <div className="grid-item1 item2"><img src={image2} alt="Basket" /></div>
        <div className="grid-item1 item3"><img src={image3} alt="Colorful Shoe" /></div>
        <div className="grid-item1 item4"><img src={image4} alt="Cream" /></div>
        <div className="grid-item1 item5"><img src={image5} alt="Game" /></div>
        <div className="grid-item1 item6"><img src={image6} alt="Leather Bag" /></div>
        <div className="grid-item1 item7"><img src={image7} alt="Light" /></div>
        <div className="grid-item1 item8"><img src={image8} alt="Medicine" /></div>
        <div className="grid-item1 item9"><img src={image9} alt="Shoes" /></div>
        <div className="grid-item1 item10"><img src={image10} alt="Watch" /></div>
        <div className="grid-item1 item11"><img src={image11} alt="Bag 2" /></div>
        <div className="grid-item1 item12"><img src={image12} alt="White Cream" /></div>
        <div className="grid-item1 item13"><img src={image13} alt="Colorful shoe" /></div>
      </div>
    </GalleryPageContainer>
  );
};

export default GalleryPage;
