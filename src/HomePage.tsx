import React from 'react';
import styles from './styles.module.css';
import { ServiceCard } from './ServiceCard';
import { SearchBar } from './SearchBar';
import { NavigationItem } from './NavigationItem';

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/636a2f5ae7266fa7d13d4e7d30967e99dfc85f42e02630555ce4fa1ab99676ac?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
    title: "Это просто",
    description: "Легкая и быстрая оплата"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/7518c5865a5280f4b060f7e1d2008cd4d7737f83967cd3c0fb2978448d8751e9?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
    title: "Это помощь",
    description: "Очень быстрая и отзывчивая поддержка"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/20239f113c75aca37c64ec716093407e356f86acdccbac3578bc5f28f3289d9a?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
    title: "Все ясно",
    description: "Фиксированная цена"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/ee0509a40f4fcf9c7613c564250606447e7ccb4b9e1e3eb2c88be99a913f5d65?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
    title: "Это безопасно",
    description: "Каждый продавец проверен лично нами"
  }
];

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Компании', path: '/company-profile' }, // Измените путь на '/company-profile'
  { label: 'Сравнения', path: '/comparisons' },
  { label: 'Разместить заказ', path: '/place-order' }
];

export const HomePage: React.FC = () => {
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

      <section className={styles.hero}>
        <img src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/995b3b66f722bac4faf8977f1041467df0cfcaf97b6564ee86371f1bb95a5425?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&" alt="" className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            IT-Гид: Ваш навигатор в мире IT-услуг Самары!
          </h1>
          <p className={styles.heroSubtitle}>
            Сайт для поиска и продажи IT-услуг.
          </p>
        </div>
      </section>

      <section className={styles.services}>
        <h2 className={styles.servicesTitle}>
          Почему выбирают именно наш сервис?
        </h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className={styles.search}>
        <SearchBar
          placeholder="Что ищем сегодня?"
          onSearch={handleSearch}
        />
      </section>

      <section className={styles.categories}>
        <h2 className={styles.categoriesTitle}>Категории:</h2>
        <div className={styles.categoriesGrid}>
          {Array(15).fill(null).map((_, index) => (
            <div key={index} className={styles.categoryItem} />
          ))}
        </div>
      </section>

      <section className={styles.leaders}>
        <h2 className={styles.leadersTitle}>Наши лидеры!</h2>
        <div className={styles.leadersGrid} />
      </section>
    </main>
  );
};