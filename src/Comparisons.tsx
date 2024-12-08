import React from 'react';
import stylesNav from './styles.module.css';
import styles from './Comparisons.module.css'
import { ComparisonCard } from './ComparisonCard';
import ProfileDropdown from './ProfileDropdown';
import { UpdatedLogoWithText } from './UpdatedLogoWithText';
import { NavigationItem } from './NavigationItem';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Компании', path: '/company-profile' },
  { label: 'Сравнения', path: '/comparisons' },
  { label: 'Разместить заказ', path: '/place-order' }
];

export const Comparisons: React.FC = () => {
  return (
    <div className={styles.wrapper}>
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

          <div className={styles.comparisonSection}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>Сравнения</h1>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea69ce3a725b0cd9a7ca780e541640f3485be9efd00b1d831200340eefaa6834?placeholderIfAbsent=true&apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c"
                className={styles.titleIcon}
                alt="Comparison icon"
              />
            </div>
          </div>

          <p className={styles.subtitle}>Убрать схожие показатели</p>
          
          <div className={styles.iconContainer}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8737995c4f265e84d17a86fe1351cee09aa2a43d0d69c9d95b23fd1f577bd8a6?placeholderIfAbsent=true&apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c"
              className={styles.actionIcon}
              alt="Action icon"
            />
          </div>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonItem}>
              <div className={styles.circleContainer} />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bccfc20f522153911ee9e0194777425198b62be6898708bd6613adf8e240a51c?placeholderIfAbsent=true&apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c"
                className={styles.comparisonImage}
                alt="Comparison visualization"
              />
              <h2 className={styles.comparisonTitle}>Hack256</h2>
            </div>
            
            <div className={styles.comparisonItem}>
              <div className={styles.circleContainer} />
              <h2 className={styles.comparisonTitle}>Google</h2>
            </div>
          </div>

          <div className={styles.cardGrid}>
            <ComparisonCard backgroundColor="rgba(13, 136, 218, 1)" height={797} />
            <ComparisonCard backgroundColor="rgba(13, 136, 218, 1)" height={797} />
          </div>
        </div>
      </div>
    </div>
  );
};