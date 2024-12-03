import React from 'react';
import logo from './assets/it-gid-logo.png'; // Import the new logo

interface UpdatedLogoWithTextProps {
  className?: string; // Make className optional
}

export const UpdatedLogoWithText: React.FC<UpdatedLogoWithTextProps> = ({ className }) => {
  return (
    <div className={className}>
      <img loading="lazy" src={logo} alt="IT-Гид Logo" />
    </div>
  );
};
