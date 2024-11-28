import React from 'react';
import styles from './styles.module.css';
import { NavigationItem } from './NavigationItem';
import { ImageSlider } from './components/ImageSlider';
import companyLogo from './assets/company-logo.png';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Компании', path: '/company-profile' },
  { label: 'Сравнения', path: '/comparisons' },
  { label: 'Разместить заказ', path: '/place-order' }
];

export const CompanyProfile: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log('Search value:', value);
  };

  return (
    <main className={styles.mainContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/36f953fc43c498825c741f3bc129941843a8236233cce1ace178dd247f15678e?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&" alt="" className={styles.logoImage} />
          <span className={styles.logoText}>IT-Гид</span>
        </div>
        <nav className={styles.navigation}>
          {navItems.map((item, index) => (
            <NavigationItem key={index} label={item.label} path={item.path} />
          ))}
        </nav>
        <img src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/5e21fe3307867f72100232a124eb7da2c4229c46ad765a79b0f9f1783849bccc?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&" alt="" className={styles.profileIcon} />
      </header>

      <div className={styles.titleContainer}>
      <h2 className={styles.companyTitle}>
    Компании
    <img src={companyLogo} alt="Логотип компании" className={styles.companyLogo} />
      </h2>
      </div>
     

      <section>
        <ImageSlider />
      </section>
    </main>
  );
};
