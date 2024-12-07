import React from 'react';
import styles from '../Profile.module.css';
import { EmployeeCardProps } from '../types';

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ imageUrl }) => (
  <div className={styles.employeeCard} role="img" aria-label="Employee profile">
    {imageUrl && <img src={imageUrl} alt="" className={styles.employeeImage} />}
  </div>
);