import React from 'react';
import styles from './styles.module.css';
import stylesCompany from './ProtoHackers.module.css'
import { NavigationItem, ProfileDropdown } from './NavigationItem';
import { RatingCard } from './RatingCard';
import { TeamMemberCard } from './TeamMemberCard';
import { HeroSection } from './HeroSection';
import companyLogo from './assets/company-logo.png';
import { UpdatedLogoWithText } from './UpdatedLogoWithText';
import { useNavigate } from 'react-router-dom';
import rigthArrow from './assets/Arrow 2.png'

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Компании', path: '/company-profile' },
  { label: 'Сравнения', path: '/comparisons' },
  { label: 'Разместить заказ', path: '/place-order' }
];

const ratingData = Array(12).fill({
  rating: "5.0",
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/3f359e893ddb3d1974fb199b7385bf29e76434fe54e138af595f675f23de422d?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
  starImageSrc: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/c4bef94e9ed3b433bf13e06813051d31b74b9ad454a60512616a29263c0b2157?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
  ratingImageSrc: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/7be88d8ed5ac18aa0c7c543c55ea7fc822843ec998130ce8cdc106a413a434e9?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
  bottomImageSrc: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/3e0229700db655d0bef77595838a0fcd8f9ad4d53e24c7acd3085f0e251e0996?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
});

const teamMemberData = Array(8).fill({
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/3f359e893ddb3d1974fb199b7385bf29e76434fe54e138af595f675f23de422d?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
  rating: "5.0",
  starImageSrc: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/c4bef94e9ed3b433bf13e06813051d31b74b9ad454a60512616a29263c0b2157?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
  ratingImageSrc: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/7be88d8ed5ac18aa0c7c543c55ea7fc822843ec998130ce8cdc106a413a434e9?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&",
  bottomImageSrc: "https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/3e0229700db655d0bef77595838a0fcd8f9ad4d53e24c7acd3085f0e251e0996?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
});

export const CompanyProfile: React.FC = () => {
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

      <div className={styles.titleContainer}>
      <h2 className={styles.companyTitle}>
    Компании
    <img src={companyLogo} alt="Логотип компании" className={styles.companyLogo} />
      </h2>
      </div>

<div className={stylesCompany.contentInner}>
  <div className={stylesCompany.companyHeader}>
    <HeroSection
      logoSrc="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/817b5c732052057ee7cb65aa9ce072d488dd6046217553d5ba0e6a0e72870be0?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
      backgroundSrc="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/6c0f50c4a300de11466737f9f4c7caa35ec796931495cf7948268ac74ab8d474?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
      teamName="Протохакерс"
      rating="5.0"
      starImageSrc="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/c50d495111a44123e5991fe254b6c83c0775901d8b10468f2e1de1000833d5f5?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
      description="Наша IT-команда — это группа увлеченных и талантливых специалистов, которые активно участвуют в олимпиадах и конкурсах по программированию. Мы объединяем опытных разработчиков, аналитиков и студентов, стремящихся к..."
    />
  </div>
              
              <div className={stylesCompany.teamSection}>
                <div className={stylesCompany.teamGrid}>
                  {teamMemberData.map((data, index) => (
                    <TeamMemberCard key={index} {...data} />
                  ))}
                </div>
              </div>
            </div>
    </main>
  );
};
