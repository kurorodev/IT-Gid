import React from 'react';
import stylesCompany from './ProtoHackers.module.css';
import { RatingCardProps } from './types';

export const RatingCard: React.FC<RatingCardProps> = ({
  rating,
  imageSrc,
  starImageSrc,
  ratingImageSrc,
  bottomImageSrc
}) => {
  return (
    <div className={stylesCompany.ratingContainer}>
      <div className={stylesCompany.ratingBox} />
      <div className={stylesCompany.ratingWrapper}>
        <div className={stylesCompany.ratingContent}>
          <div className={stylesCompany.ratingScore}>
            <img
              loading="lazy"
              src={imageSrc}
              alt="Rating score"
              className={stylesCompany.ratingImage}
            />
            <div>{rating}</div>
          </div>
          <img
            loading="lazy"
            src={ratingImageSrc}
            alt=""
            className={stylesCompany.ratingStars}
          />
        </div>
        <img
          loading="lazy"
          src={starImageSrc}
          alt=""
          className={stylesCompany.starIcon}
        />
      </div>
      <img
        loading="lazy"
        src={bottomImageSrc}
        alt=""
        className={stylesCompany.bottomImage}
      />
    </div>
  );
};