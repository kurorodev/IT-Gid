import React from 'react';
import styles from './styles.module.css';
import { SearchBarProps } from './types';

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  return (
    <form className={styles.searchContainer} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchInput" className={styles.visuallyHidden}>
        {placeholder}
      </label>
      <input
        id="searchInput"
        type="search"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/3aa9d875478beaaeaed6af6cc028c29a55f0d83adad544276817d2e7d3ac7f95?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
        alt="Search"
        className={styles.searchIcon}
      />
    </form>
  );
};