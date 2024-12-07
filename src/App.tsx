import React from 'react';
import './App.css';
import { HomePage } from './HomePage';
import { CompanyProfile } from './CompanyProfile';
import { Comparisons } from './Comparisons';
import { CreateListing } from './CreateListing';
import  LoginRegister from './LoginRegister';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Profile } from './Profile';
import { ProfilePage } from './ProfilePage';
import { Orders } from './Orders';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/place-order" element={<CreateListing />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/comparisons" element={<Comparisons />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/my-company" element={<Profile/>} />
          <Route path="/my-corsine" element={<Orders/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
