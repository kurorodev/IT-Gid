import React from 'react';
import styles from './CompanyProfile.module.css';
import { RatingDisplay } from './RatingDisplay';
import { CompanyCardProps } from './types';

export const CompanyCard: React.FC<CompanyCardProps> = ({ rating }) => {
  return (
    <article className={styles.companyCard}>
      <div className={styles.cardContent} />
      <RatingDisplay {...rating} />
    </article>
  );
};