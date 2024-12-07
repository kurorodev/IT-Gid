import React from 'react';
import styles from './ProtoHackers.module.css';
import { HeroSectionProps } from './types';
import leftArrow from './assets/arrow 3.png'
import rightArrow from './assets/arrow 2.png'

export const HeroSection: React.FC<HeroSectionProps> = ({
  logoSrc,
  backgroundSrc,
  teamName,
  rating,
  starImageSrc,
  description,
}) => {
  const handlePrevClick = () => {
    // Add logic for previous slide
  };

  const handleNextClick = () => {
    // Add logic for next slide
  };

  return (
    <div className={styles.heroContainer} style={{ position: 'relative' }}>
      <div className={styles.heroContent}>
        <img
          loading="lazy"
          src={logoSrc}
          alt="Company logo"
          className={styles.logo}
        />
        <img
          loading="lazy"
          src={backgroundSrc}
          alt=""
          className={styles.heroBackground}
        />
        <div className={styles.heroText}>
          <div className={styles.teamName}>{teamName}</div>
          <div className={styles.ratingWrapper}>
            <div className={styles.rating}>{rating}</div>
            <img
              loading="lazy"
              src={starImageSrc}
              alt="Rating star"
              className={styles.starIcon}
            />
          </div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <img
        loading='lazy'
        src={leftArrow}
        alt="Left Arrow"
        className={styles.leftArrow}
        onClick={handlePrevClick}
        style={{ cursor: 'pointer', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
      />
      <img
        loading='lazy'
        src={rightArrow}
        alt="Right Arrow"
        className={styles.rightArrow}
        onClick={handleNextClick}
        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
  );
};
