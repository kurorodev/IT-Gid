import React from 'react';
import stylesListing from './CreateListing.module.css';
import styles from './styles.module.css'
import { NavigationItem } from './NavigationItem';
import { UserTypeButton } from './UserTypeButton';
import { PhotoUpload } from './PhotoUpload';
import { InputField } from './InputField';

const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Компании', path: '/company-profile' },
    { label: 'Сравнения', path: '/comparisons' },
    { label: 'Разместить заказ', path: '/place-order' }
  ];

export const CreateListing: React.FC = () => {
  return (
    <div className={stylesListing.container}>
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
        <UserTypeButton text="Я заказчик" bgColor="rgba(0, 78, 130, 1)" />
        <UserTypeButton text="Я программист" bgColor="rgba(13, 136, 218, 1)" />
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

        <form className={stylesListing.listingForm}>
          <InputField label="Название" />
          <InputField label="Категория" />
          <InputField label="Цена" width="249px" />
          
          <label className={stylesListing.descriptionLabel}>Описание:</label>
          <div className={stylesListing.descriptionField} />
          
          <button type="submit" className={stylesListing.submitButton}>
            Разместить
          </button>
        </form>
      </main>
    </div>
  );
};