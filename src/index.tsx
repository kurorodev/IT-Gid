import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Импортируйте Router
import './index.css';
import { App } from './App'; // Создайте новый компонент App для маршрутизации
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <App /> {/* Оберните ваш компонент App в Router */}
    </Router>
  </React.StrictMode>
);

reportWebVitals();