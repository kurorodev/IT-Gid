// ImageSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import styles from '../styles.module.css';

const images = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
  // Добавьте свои изображения здесь
];

export const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className={styles.sliderImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
