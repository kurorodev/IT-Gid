import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import styles from './styles.module.css';
import { ServiceCard } from './ServiceCard';
import { SearchBar } from './SearchBar';
import { NavigationItem } from './NavigationItem';
import { UpdatedLogoWithText } from './UpdatedLogoWithText';
import ProfileDropdown from './ProfileDropdown';

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

const categories: { title: string; description: string }[] = [
  { title: "Web Development", description: "Build and maintain websites" },
  { title: "Mobile App Development", description: "Develop mobile applications" },
  { title: "Software Testing", description: "Ensure software quality" },
  { title: "Data Analysis", description: "Analyze and interpret data" },
  { title: "Cloud Services", description: "Manage cloud infrastructure" },
  { title: "Cybersecurity", description: "Protect against cyber threats" },
  { title: "DevOps", description: "Streamline development and operations" },
  { title: "UI/UX Design", description: "Create user-friendly interfaces" },
  { title: "Database Management", description: "Manage and optimize databases" },
  { title: "AI and Machine Learning", description: "Develop intelligent systems" },
  { title: "Project Management", description: "Plan and execute projects" },
  { title: "Network Administration", description: "Manage network infrastructure" },
  { title: "IT Consulting", description: "Provide expert advice" },
  { title: "IT Support", description: "Offer technical support" },
  { title: "IT Training", description: "Train and educate users" }
];

const leaders = [
  { name: 'Team A', rating: Math.floor(Math.random() * 5) + 1 },
  { name: 'Team B', rating: Math.floor(Math.random() * 5) + 1 },
  { name: 'Team C', rating: Math.floor(Math.random() * 5) + 1 },
  { name: 'Team D', rating: Math.floor(Math.random() * 5) + 1 },
  { name: 'Team E', rating: Math.floor(Math.random() * 5) + 1 }
];

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Компании', path: '/company-profile' },
  { label: 'Сравнения', path: '/comparisons' },
  { label: 'Разместить заказ', path: '/place-order' }
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate(); // Инициализируйте navigate

  const handleSearch = (value: string) => {
    console.log('Search value:', value);
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Перейдите на страницу профиля
  };

  return (
    <main className={styles.mainContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <UpdatedLogoWithText />
        </div>
        <nav className={styles.navigation}>
          {navItems.map((item, index) => (
            <NavigationItem key={index} label={item.label} path={item.path} />
          ))}
        </nav>
        <ProfileDropdown />
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
  {categories.map((category: { title: string }, index: number) => (
    <div key={index} className={styles.categoryItem}>
      <h3>{category.title}</h3>
    </div>
  ))}
</div>
      </section>

<section className={styles.leaders}>
  <h2 className={styles.leadersTitle}>Наши лидеры!</h2>
  <div className={styles.leadersGrid}>
    {leaders.map((leader, index) => (
      <div key={index} className={styles.leaderItem}>
        <h3>{leader.name}</h3>
        <p>Рейтинг: {leader.rating}</p>
      </div>
    ))}
  </div>
</section>
    </main>
  );
};
