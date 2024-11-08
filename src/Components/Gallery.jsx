import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/galleryimages/bag.jpg'; 
import image2 from '../assets/galleryimages/basket.jpg';
import image3 from '../assets/galleryimages/colorshoe.jpg';
import image4 from '../assets/galleryimages/cream.jpg';
import image5 from '../assets/galleryimages/game.jpg';
import '../Components/Styles/Gallery.css';

const GalleryPage = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="GalleryPage-container mx-auto">
      <h2 className="text-4xl mx-auto text-center font-semibold mb-10 mt-20">Gallery</h2>
      <div className="grid-container">
        <div className="grid-item item1" onClick={handleViewAllClick}>
          <img src={image1} alt="Bag" />
          <div className="view-all-overlay"><a href="/gallery">View All</a></div>
        </div>
        <div className="grid-item item2" onClick={handleViewAllClick}>
          <img src={image2} alt="Basket" />
          <div className="view-all-overlay"><a href="/gallery">View All</a></div>
        </div>
        <div className="grid-item item3" onClick={handleViewAllClick}>
          <img src={image3} alt="Colorful Shoe" />
          <div className="view-all-overlay"><a href="/gallery">View All</a></div>
        </div>
        <div className="grid-item item4" onClick={handleViewAllClick}>
          <img src={image4} alt="Cream" />
          <div className="view-all-overlay"><a href="/gallery">View All</a></div>
        </div>
        <div className="grid-item item5" onClick={handleViewAllClick}>
          <img src={image5} alt="Game" />
          <div className="view-all-overlay"><a href="/gallery">View All</a></div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
