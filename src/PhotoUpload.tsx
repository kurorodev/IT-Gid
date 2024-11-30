import React from 'react';
import styles from './CreateListing.module.css';
import { PhotoUploadProps } from './types';

export const PhotoUpload: React.FC<PhotoUploadProps> = () => (
  <div className={styles.photoUpload}>
    <div>Добавить фото</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/099ff8c38f1c4ea49bfacbd7f6f0650c/c65c65b6e42a895d68105f9e0133c151eb71ab9b3eb69024f705726c8cc7eaa1?apiKey=099ff8c38f1c4ea49bfacbd7f6f0650c&"
      className={styles.uploadIcon}
      alt="Upload photo icon"
    />
  </div>
);