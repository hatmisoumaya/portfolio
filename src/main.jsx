import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n.js'; // Import before rendering anything
import App from './App.jsx';
import './index.css'; // ✅ Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
