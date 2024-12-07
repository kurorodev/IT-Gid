import React, { useState } from 'react';
import styles from './Orders.module.css';
import stylesNav from './styles.module.css'
import { OrdersHeader, Navigation } from './components/OrdersHeader';
import { OrderCard } from './components/OrdersCard';
import { UpdatedLogoWithText } from './UpdatedLogoWithText';
import { NavigationItem } from './NavigationItem';
import ProfileDropdown from './ProfileDropdown';


const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Компании', path: '/company-profile' },
    { label: 'Сравнения', path: '/comparisons' },
    { label: 'Разместить заказ', path: '/place-order' }
  ];

export const Orders: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'history'>('pending');

  const handlePayment = () => {
    // Payment handling logic
  };

  const orders = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  return (
    <div className={styles.ordersPage}>
      <div className={styles.container}>
        <div className={styles.content}>
        <header className={stylesNav.header}>
        <div className={stylesNav.logo}>
          <UpdatedLogoWithText />
        </div>
        <nav className={stylesNav.navigation}>
          {navItems.map((item, index) => (
            <NavigationItem key={index} label={item.label} path={item.path} />
          ))}
        </nav>
        <ProfileDropdown />
      </header>
          <div className={styles.ordersSection}>
            <OrdersHeader
              title="Заказы"
              iconUrl="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/2f252c3d22cbe754f9f460d94501c207a40c798684214f9eac853c40b99e0092?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
            />
            <Navigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            <div className={styles.ordersList}>
              {orders.map(order => (
                <OrderCard
                  key={order.id}
                  onPaymentClick={handlePayment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};