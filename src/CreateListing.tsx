import React, { useState } from 'react';
import stylesListing from './NewCreateListing.module.css';
import styles from './styles.module.css';
import { NavigationItem } from './NavigationItem';
import ProfileDropdown from './ProfileDropdown';
import { UserTypeButton } from './UserTypeButton';
import { PhotoUpload } from './PhotoUpload';
import { InputField } from './InputField';
import { UpdatedLogoWithText } from './UpdatedLogoWithText';
import { useNavigate } from 'react-router-dom';

const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Компании', path: '/company-profile' },
    { label: 'Сравнения', path: '/comparisons' },
    { label: 'Разместить заказ', path: '/place-order' }
];

export const CreateListing: React.FC = () => {
  const navigate = useNavigate(); // Инициализируйте navigate

  const handleProfileClick = () => {
    navigate('/profile'); // Перейдите на страницу профиля
  };

  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/main/company', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'token': 'GNd0c64~Q?naTXb}p1{V|lbh&~`#`&@&',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: [0],
          description: formData.description,
          email: 'string',
          inn: 'string',
          manager_telegram: 'string',
          name: formData.name,
          phone: 'string'
        })
      });

      if (response.ok) {
        alert('Объявление успешно размещено!');
        navigate('/'); // Перенаправление на главную страницу
      } else {
        alert('Ошибка при размещении объявления. Попробуйте снова.');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      alert('Произошла ошибка. Попробуйте снова.');
    }
  };

  return (
    <div className={stylesListing.container}>
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

      <section className={stylesListing.titleSection}>
        <h1 className={stylesListing.title}>
          Создание объявления
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/a807e103955aaafc1a87d568aab6a36db544dda1621262387763e33e40c3a903?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
            className={stylesListing.titleIcon}
            alt=""
          />
        </h1>
      </section>

      <section className={stylesListing.userTypeSection}>
        <UserTypeButton
          text="Заказчик"
          bgColor="rgba(0, 78, 130, 1)"
          selected={selectedUserType === 'Заказчик'}
          onClick={() => handleUserTypeClick('Заказчик')}
        />
        <UserTypeButton
          text="Исполнитель"
          bgColor="rgba(13, 136, 218, 1)"
          selected={selectedUserType === 'Исполнитель'}
          onClick={() => handleUserTypeClick('Исполнитель')}
        />
      </section>

      <main className={stylesListing.mainContent}>
