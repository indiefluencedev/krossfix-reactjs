import React from 'react';
import image1 from '../assets/galleryimages/bag.jpg'; // Replace with actual image paths
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
  return (
    <div>
      <h2 className="gallery-heading">Gallery</h2> {/* Added heading */}
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
        <div className="grid-item item12"><img src={image3} alt="item" /></div>
        <div className="grid-item item12"><img src={image7} alt="item" /></div>
        <div className="grid-item item12"><img src={image1} alt="item" /></div>
      </div>
    </div>
  );
};

export default Gallery;
