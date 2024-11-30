import React from 'react';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};