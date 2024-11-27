import React from 'react';
import styles from './styles.module.css';
import { ServiceCardProps } from './types';

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt="" className={styles.serviceIcon} />
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
      </div>
    </article>
  );
};