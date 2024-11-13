import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../Components/Styles/GalleryPage.css';

// Import images
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

const GalleryPage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13,
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const GalleryPageContainer = isDesktop ? motion.div : 'div';

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Main Gallery Page */}
      <GalleryPageContainer className="GalleryPage-container mx-auto">
        <h2 className="pt-28 pb-5 mx-auto text-4xl font-semibold text-center">Gallery</h2>
        <div className="grid-container1">
          {images.map((image, index) => (
            <div
              key={index}
              className={`grid-item1 item${index + 1}`}
              onClick={() => openModal(index)}
            >
              <img src={image} alt={`Gallery Item ${index + 1}`} />
            </div>
          ))}
        </div>
      </GalleryPageContainer>

      {/* Modal for Full-View Image */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          {/* Close Button */}
          <button className="close-button" onClick={closeModal}>
            ×
          </button>

          {/* Modal Content */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="prev-button" onClick={showPrevImage}>
              ‹
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Full View ${currentImageIndex + 1}`}
              className="modal-image"
            />
            <button className="next-button" onClick={showNextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
