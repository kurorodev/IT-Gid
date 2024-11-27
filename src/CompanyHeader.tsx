import React from 'react';
import styles from './CompanyProfile.module.css';
import { CompanyHeaderProps } from './types';

export const CompanyHeader: React.FC<CompanyHeaderProps> = ({
  name,
  rating,
  description,
  backgroundImage,
  starIcon
}) => {
  return (
    <header className={styles.companyHeader}>
      <img
        src={backgroundImage}
        alt=""
        className={styles.headerBackground}
      />
      <div className={styles.headerContent}>
        <h1 className={styles.companyName}>{name}</h1>
        <div className={styles.ratingWrapper}>
          <span className={styles.ratingScore}>{rating}</span>
          <img src={starIcon} alt="Rating star" className={styles.starIcon} />
        </div>
      </div>
      <p className={styles.companyDescription}>{description}</p>
    </header>
  );
};