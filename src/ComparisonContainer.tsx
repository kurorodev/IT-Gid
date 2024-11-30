import React from 'react';
import { ComparisonContainerProps } from './types';
import styles from './ComparisonContainer.module.css';

export const ComparisonContainer: React.FC<ComparisonContainerProps> = ({ children, className }) => {
  return <div className={`${styles.container} ${className || ''}`}>{children}</div>;
};