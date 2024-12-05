import React from 'react';
import { NavigationItem } from './NavigationItem';
import { UpdatedLogoWithText } from './UpdatedLogoWithText'; // Import the logo component
import styles from './ProfilePage.module.css';
import stylesNav from './styles.module.css'


const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Компании', path: '/company-profile' },
  { label: 'Сравнения', path: '/comparisons' },
  { label: 'Разместить заказ', path: '/place-order' }
];

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <header className={stylesNav.header}>
        <div className={stylesNav.logo}>
          <UpdatedLogoWithText /> {/* Insert the logo component */}
        </div>
        <nav className={stylesNav.navigation}>
          {navItems.map((item, index) => (
            <NavigationItem key={index} label={item.label} path={item.path} />
          ))}
        </nav>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/5e21fe3307867f72100232a124eb7da2c4229c46ad765a79b0f9f1783849bccc?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&" 
          alt="Profile Icon" 
          className={stylesNav.profileIcon} 
        />
      </header>

      <h1 className={styles.profileTitle}>Protohack</h1>

      <section className={styles.portfolio}>
        <h2>Портфолио:</h2>
        <div className={styles.portfolioContent}></div>
      </section>

      <section className={styles.description}>
        <h2>Описание:</h2>
        <div className={styles.descriptionContent}></div>
      </section>

      <section className={styles.tags}>
        <h2>Ваши теги:</h2>
        <div className={styles.tagsContent}></div>
      </section>

      <button className={styles.logoutButton}>Выйти</button>
    </div>
  );
};

export default ProfilePage;
