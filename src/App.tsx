// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { CompanyProfile } from './CompanyProfile'; // Импортируйте ваш компонент CompanyProfile
import { Comparisons } from './Comparisons';
import { CreateListing } from './CreateListing';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/company-profile" element={<CompanyProfile />} />
      <Route path="/comparisons" element={<Comparisons />} />
      <Route path= "/place-order" element={<CreateListing/>} />
      {/* Добавьте другие маршруты по мере необходимости */}
    </Routes>
  );
};