import React from 'react';
import styles from './CreateListing.module.css';
import { UserTypeButtonProps } from './types';

export const UserTypeButton: React.FC<UserTypeButtonProps> = ({ text, bgColor }) => (
  <div className={styles.userTypeButton} style={{ backgroundColor: bgColor }}>
    {text}
  </div>
);