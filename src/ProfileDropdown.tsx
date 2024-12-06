import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link из react-router-dom
import styles from './styles.module.css';

const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/5e21fe3307867f72100232a124eb7da2c4229c46ad765a79b0f9f1783849bccc?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&" 
        alt="Profile Icon" 
        className={styles.profileIcon} 
        onClick={toggleDropdown} 
      />
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <Link to="/profile" className={styles.dropdownItem}>Мой кабинет</Link>
          <Link to="/my-company" className={styles.dropdownItem}>Моя компания</Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
