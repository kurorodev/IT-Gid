import React from 'react';
import styles from './ProfilePage.module.css';
import stylesNav from './styles.module.css'
import { ProfileData } from './types';
import { UpdatedLogoWithText } from './UpdatedLogoWithText';
import { NavigationItem } from './NavigationItem';
import ProfileDropdown from './ProfileDropdown';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Компании', path: '/company-profile' },
  { label: 'Сравнения', path: '/comparisons' },
  { label: 'Разместить заказ', path: '/place-order' }
];

const profileData: ProfileData = {
  name: "Иван Морозов",
  portfolio: ["Portfolio 1", "Portfolio 2"],
  description: ""
};

export const ProfilePage: React.FC = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.content}>

        <main className={styles.profileCard}>
          <h1 className={styles.profileName}>{profileData.name}</h1>
          
          <section className={styles.portfolioSection}>
            <h2 className={styles.portfolioTitle}>Портфолио:</h2>
          </section>
          
          <div className={styles.portfolioContent}>
            <div className={styles.portfolioImage1} role="img" aria-label="Portfolio example 1" />
            <div className={styles.portfolioImage2} role="img" aria-label="Portfolio example 2" />
          </div>
          
          <section className={styles.descriptionSection}>
            <h2 className={styles.descriptionTitle}>Описание:</h2>
            <div className={styles.descriptionContent} />
            <button className={styles.logoutButton}>Выйти</button>
          </section>
        </main>
      </div>
    </div>
  );
};