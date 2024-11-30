import React from 'react';
import styles from './ProtoHackers.module.css';
import { RatingCardProps } from './types';

export const RatingCard: React.FC<RatingCardProps> = ({
  rating,
  imageSrc,
  starImageSrc,
  ratingImageSrc,
  bottomImageSrc
}) => {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.ratingBox} />
      <div className={styles.ratingWrapper}>
        <div className={styles.ratingContent}>
          <div className={styles.ratingScore}>
            <img
              loading="lazy"
              src={imageSrc}
              alt="Rating score"
              className={styles.ratingImage}
            />
            <div>{rating}</div>
          </div>
          <img
            loading="lazy"
            src={ratingImageSrc}
            alt=""
            className={styles.ratingStars}
          />
        </div>
        <img
          loading="lazy"
          src={starImageSrc}
          alt=""
          className={styles.starIcon}
        />
      </div>
      <img
        loading="lazy"
        src={bottomImageSrc}
        alt=""
        className={styles.bottomImage}
      />
    </div>
  );
};