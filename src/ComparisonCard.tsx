import React from 'react';
import { ComparisonCardProps } from './types';
import styles from './ComparisonCard.module.css';

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ className }) => {
  return <div className={`${styles.card} ${className || ''}`} />;
};