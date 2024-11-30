import React from 'react';
import styles from './ProtoHackers.module.css';
import { TeamMemberCardProps } from './types';

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageSrc,
  rating,
  starImageSrc,
  ratingImageSrc,
  bottomImageSrc
}) => {
  return (
    <div className={styles.memberContainer}>
      <div className={styles.memberBox} />
      <div className={styles.memberRating}>
        <img
          loading="lazy"
          src={imageSrc}
          alt="Team member rating"
          className={styles.memberRatingImage}
        />
        <div className={styles.memberScore}>{rating}</div>
        <img
          loading="lazy"
          src={starImageSrc}
          alt=""
          className={styles.memberStarIcon}
        />
      </div>
      <img
        loading="lazy"
        src={ratingImageSrc}
        alt=""
        className={styles.memberRatingStars}
      />
      <img
        loading="lazy"
        src={bottomImageSrc}
        alt=""
        className={styles.memberBottomImage}
      />
    </div>
  );
};