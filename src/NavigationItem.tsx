import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link из react-router-dom
import styles from './styles.module.css';
import { NavigationItemProps } from './types';

export const NavigationItem: React.FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link to={path} className={styles.navItem}> {/* Используйте Link с атрибутом to */}
      {label}
    </Link>
  );
};