import React from 'react';
import styles from './CompanyProfile.module.css';
import { CompanyCard } from './CompanyCard';
import { CompanyHeader } from './CompanyHeader';
import { SearchBar } from './SearchBar';
import { NavigationItem } from './NavigationItem';

const ratingData = {
  score: "5.0",
  ratingImage: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/3f359e893ddb3d1974fb199b7385bf29e76434fe54e138af595f675f23de422d?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
  starImage: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/7be88d8ed5ac18aa0c7c543c55ea7fc822843ec998130ce8cdc106a413a434e9?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
  verifiedImage: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/c4bef94e9ed3b433bf13e06813051d31b74b9ad454a60512616a29263c0b2157?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&", 
  reviewImage: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/3e0229700db655d0bef77595838a0fcd8f9ad4d53e24c7acd3085f0e251e0996?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
};

const companyCards = Array(16).fill(null).map(() => ({
  rating: ratingData
}));

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
    <main className={styles.profileContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/36f953fc43c498825c741f3bc129941843a8236233cce1ace178dd247f15678e?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
            alt="IT-Гид Logo"
            className={styles.logoImage}
          />
          <span className={styles.logoText}>IT-Гид</span>
        </div>
        <nav className={styles.navigation}>
          {navItems.map((item, index) => (
            <NavigationItem key={index} label={item.label} path={item.path} />
          ))}
        </nav>
      </header>

      <section className={styles.headerSection}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>Компании</h2>
        </div>
      </section>

      <CompanyHeader
        name="Протохакерс"
        rating="5.0"
        description="Наша IT-команда — это группа увлеченных и талантливых специалистов, которые активно участвуют в олимпиадах и конкурсах по программированию. Мы объединяем опытных разработчиков, аналитиков и студентов, стремящихся к..."
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/6c0f50c4a300de11466737f9f4c7caa35ec796931495cf7948268ac74ab8d474?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
        starIcon="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/c50d495111a44123e5991fe254b6c83c0775901d8b10468f2e1de1000833d5f5?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
      />

      <section className={styles.searchSection}>
        <SearchBar
          placeholder="Что ищем сегодня?"
          onSearch={handleSearch}
        />
      </section>

      <section className={styles.cardsSection}>
        <h2 className={styles.cardsTitle}>Наши компании</h2>
        <div className={styles.cardsGrid}>
          {companyCards.map((card, index) => (
            <CompanyCard key={index} rating={card.rating} />
          ))}
        </div>
      </section>
    </main>
  );
};

// Add this empty export statement to make it a module
export {};