// CreateListing.tsx

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
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);
const [formData, setFormData] = useState<Record<string, any>>({
  avatar: [],
  description: '',
  email: '',
  inn: '',
  manager_telegram: '',
  name: '',
  phone: '',
  category: '',
  price: ''
});

  const handleUserTypeClick = (userType: string) => {
    setSelectedUserType(userType === selectedUserType ? null : userType);
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // Form validation
  const requiredFields = ['name', 'category', 'price', 'description'];
  const hasEmptyFields = requiredFields.some(field => !formData[field]);

  if (hasEmptyFields) {
    alert('Please fill in all required fields.');
    return;
  }

  const url = 'http://localhost:8000/main/company';
  const headers = {
    'Accept': 'application/json',
    'token': 'GNd0c64~Q?naTXb}p1{V|lbh&~`#`&@&',
    'Content-Type': 'application/json'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    const responseData = await response.json();
    console.log('Success:', responseData);
    // Дополнительные действия после успешной отправки, например, перенаправление
    navigate('/success'); // Замените на нужный путь
  } catch (error) {
    console.error('Error:', error);
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
        <div className={stylesListing.photoGrid}>
          <div className={stylesListing.photoColumn}>
            <div className={stylesListing.photoPreview}>
              <div className={stylesListing.photoPreviewInner}>
                <div className={stylesListing.photoPreviewBox} />
              </div>
            </div>
          </div>
          <div className={stylesListing.uploadColumn}>
            <PhotoUpload />
          </div>
        </div>

        <form className={stylesListing.listingForm} onSubmit={handleSubmit}>
          <InputField label="Название" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Категория" name="category" value={formData.category} onChange={handleChange} />
          <InputField label="Цена" name="price" value={formData.price} onChange={handleChange} width="249px" />

          <label className={stylesListing.descriptionLabel}>Описание:</label>
          <textarea 
            className={stylesListing.descriptionField}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit" className={stylesListing.submitButton}>
            Разместить
          </button>
        </form>
      </main>
    </div>
  );
};