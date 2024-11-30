import React from 'react';
import stylesCompany from './ProtoHackers.module.css';
import { TeamMemberCardProps } from './types';

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageSrc,
  rating,
  starImageSrc,
  ratingImageSrc,
  bottomImageSrc
}) => {
  return (
    <div className={stylesCompany.memberContainer}>
      <div className={stylesCompany.memberBox} />
      <div className={stylesCompany.memberRating}>
        <img
          loading="lazy"
          src={imageSrc}
          alt="Team member rating"
          className={stylesCompany.memberRatingImage}
        />
        <div className={stylesCompany.memberScore}>{rating}</div>
        <img
          loading="lazy"
          src={starImageSrc}
          alt=""
          className={stylesCompany.memberStarIcon}
        />
      </div>
      <img
        loading="lazy"
        src={ratingImageSrc}
        alt=""
        className={stylesCompany.memberRatingStars}
      />
      <img
        loading="lazy"
        src={bottomImageSrc}
        alt=""
        className={stylesCompany.memberBottomImage}
      />
    </div>
  );
};