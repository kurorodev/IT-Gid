import React from 'react';
import { LogoProps } from './types';

export const LogoWithText: React.FC<LogoProps> = ({ src, alt, className, logoText }) => {
  return (
    <div className={className}>
      <img loading="lazy" src={src} alt={alt} />
      <span>{logoText}</span>
    </div>
  );
};
