import React from 'react';
import { Logo } from './Logo';
import { NavigationItem } from './NavigationItem'; // Добавлено
import { ComparisonCard } from './ComparisonCard';
import styles from './Comparisons.module.css';

export const Comparisons: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
      <div className={styles.headerContent}>
          <div className={styles.titleColumn}>
            <h1 className={styles.title}>Сравнения</h1>
          </div>
          <div className={styles.logoColumn}>
            <Logo src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/ae963561ed1fad4ec1db1222c6235d653ce1876b77170f65bf67b4fc12b218e1?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&" alt="Company logo" className={styles.logo} />
          </div>
        </div>
      </div>
      
      <h2 className={styles.subtitle}>Убрать схожие показатели</h2>
      
      <div className={styles.iconWrapper}>
        <Logo src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/8737995c4f265e84d17a86fe1351cee09aa2a43d0d69c9d95b23fd1f577bd8a6?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&" alt="Feature icon" className={styles.icon} />
      </div>

      <div className={styles.comparisonGrid}>
        <ComparisonCard />
        <ComparisonCard />
      </div>
    </div>
  );
}