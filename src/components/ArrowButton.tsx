import React from 'react';
import styles from '../Profile.module.css';
import { ArrowButtonProps } from '../types';

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => (
  <img
    src={`http://b.io/ext_${direction === 'left' ? '3' : '4'}-`}
    alt={`${direction} arrow`}
    className={styles.arrowButton}
    onClick={onClick}
    role="button"
    tabIndex={0}
  />
);