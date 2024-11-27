import React from 'react';
import styles from './CompanyProfile.module.css';
import { RatingProps } from './types';

export const RatingDisplay: React.FC<RatingProps> = ({
  score,
  ratingImage,
  starImage,
  verifiedImage,
  reviewImage
}) => {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.ratingScore}>
        <img
          src={ratingImage}
          alt="Rating score"
          className={styles.ratingImage}
        />
        <span>{score}</span>
      </div>
      <img
        src={starImage}
        alt="Star rating"
        className={styles.starImage}
      />
      <img
        src={verifiedImage}
        alt="Verified rating"
        className={styles.verifiedIcon}
      />
      <img
        src={reviewImage}
        alt="Review details"
        className={styles.reviewImage}
      />
    </div>
  );
};