import React from 'react';
import styles from './ProtoHackers.module.css';
import { HeroSectionProps } from './types';

export const HeroSection: React.FC<HeroSectionProps> = ({
  logoSrc,
  backgroundSrc,
  teamName,
  rating,
  starImageSrc,
  description
}) => {
  return (
    <div className={styles.heroContainer}>
      <img
        loading="lazy"
        src={logoSrc}
        alt="Company logo"
        className={styles.logo}
      />
      <div className={styles.heroContent}>
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
        loading="lazy"
        src={logoSrc}
        alt="Company logo"
        className={styles.logo}
      />
    </div>
  );
};