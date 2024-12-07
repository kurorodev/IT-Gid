import React from 'react';
import styles from '../Profile.module.css';
import { TagProps } from '../types';

export const Tag: React.FC<TagProps> = ({ className }) => (
  <div className={`${styles.tag} ${className || ''}`} role="button" tabIndex={0} />
);