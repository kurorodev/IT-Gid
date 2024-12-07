import React from 'react';
import styles from '../Orders.module.css';
import { OrdersHeaderProps, NavigationProps } from '../types';

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className={styles.navigation}>
      <button
        className={`${styles.navButton} ${activeTab === 'pending' ? styles.active : ''}`}
        onClick={() => onTabChange('pending')}
      >
        Отложенные
      </button>
      <button
        className={`${styles.navButton} ${activeTab === 'history' ? styles.active : ''}`}
        onClick={() => onTabChange('history')}
      >
        История заказов
      </button>
    </div>
  );
};

export const OrdersHeader: React.FC<OrdersHeaderProps> = ({ title, iconUrl }) => {
  return (
    <div className={styles.ordersHeader}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{title}</h1>
        <img
          src={iconUrl}
          alt=""
          className={styles.titleIcon}
          loading="lazy"
        />
      </div>
    </div>
  );
};