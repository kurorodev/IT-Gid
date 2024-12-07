import React from 'react';
import styles from '../Orders.module.css';
import { OrderCardProps } from '../types';

export const OrderCard: React.FC<OrderCardProps> = ({
  imageUrl,
  paymentAmount,
  onPaymentClick
}) => {
  return (
    <div className={styles.orderCard}>
      <div className={styles.orderContent}>
        <div className={styles.orderImageColumn}>
          <div className={styles.orderImage} />
        </div>
        <div className={styles.orderDetailsColumn}>
          <div className={styles.orderDetails}>
            <div className={styles.orderTitle} />
            <div className={styles.orderDescription} />
            <div className={styles.orderInfo} />
            <div className={styles.orderStatus} />
            <div className={styles.paymentSection}>
              <div className={styles.paymentAmount} />
              <button 
                className={styles.paymentButton}
                onClick={onPaymentClick}
                aria-label="Proceed to payment"
              >
                К оплате
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/c45ed3065cfee425da8a7d61dd13ba9546a8f8b24e0d677d06d108fc1b83c87c?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
        alt=""
        className={styles.orderIcon}
      />
    </div>
  );
};