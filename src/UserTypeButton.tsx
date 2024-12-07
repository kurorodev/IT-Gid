import React from 'react';
import styles from './CreateListing.module.css';
import { UserTypeButtonProps } from './types';

export const UserTypeButton: React.FC<UserTypeButtonProps> = ({ text, selected, onClick }) => (
  <div
    className={styles.userTypeButton}
    style={{
      backgroundColor: selected ? '#004E82' : '#0D88DA',
      color: 'white',
    }}
    onClick={onClick}
  >
    {text}
  </div>
);
