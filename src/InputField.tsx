import React from 'react';
import styles from './CreateListing.module.css';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({ label, width = '834px' }) => (
  <div className={styles.inputContainer}>
    <label className={styles.inputLabel}>{label}:</label>
    <div className={styles.inputField} style={{ width }} />
  </div>
);