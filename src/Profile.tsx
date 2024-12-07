import React from 'react';
import styles from './Profile.module.css';
import stylesNav from './styles.module.css'
import { EmployeeCard } from './components/EmployeeCard';
import { NavigationItem } from './NavigationItem';
import { Tag } from './components/Tag';
import { ArrowButton } from './components/ArrowButton';
import { UpdatedLogoWithText } from './UpdatedLogoWithText';
import ProfileDropdown from './ProfileDropdown';

const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Компании', path: '/company-profile' },
    { label: 'Сравнения', path: '/comparisons' },
    { label: 'Разместить заказ', path: '/place-order' }
  ];

export const Profile: React.FC = () => {
  return (
    <div className={stylesNav.mainContainer}>
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

      <main className={styles.mainContent}>
        <section className={styles.profileSection}>
          <div className={styles.companyInfo}>
            <h1 className={styles.companyName}>Protohack</h1>
            <div className={styles.companyLogo} />
          </div>
          
          <div className={styles.portfolioSection}>
            <h2 className={styles.sectionTitle}>Портфолио:</h2>
            <div className={styles.portfolioContent} />
          </div>

          <div className={styles.descriptionSection}>
            <h2 className={styles.sectionTitle}>Описание:</h2>
            <div className={styles.descriptionContent} />
          </div>

          <div className={styles.tagsSection}>
            <h2 className={styles.sectionTitle}>Ваши теги:</h2>
            <div className={styles.tagsGrid}>
              {[...Array(8)].map((_, index) => (
                <Tag key={index} />
              ))}
            </div>
          </div>

          <div className={styles.employeesSection}>
            <h2 className={styles.sectionTitle}>Сотрудники</h2>
            <div className={styles.employeesGrid}>
              <ArrowButton direction="left" />
              {[...Array(4)].map((_, index) => (
                <EmployeeCard key={index} />
              ))}
              <ArrowButton direction="right" />
            </div>
          </div>

          <button className={styles.logoutButton}>Выйти</button>
        </section>
      </main>
    </div>
  );
};