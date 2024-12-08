import React from 'react';
import styles from './CreateListing.module.css';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, width = '834px' }) => (
  <div className={styles.inputContainer}>
    <label className={styles.inputLabel}>{label}:</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      style={{ width }}
      className={styles.inputField}
    />
  </div>
);
