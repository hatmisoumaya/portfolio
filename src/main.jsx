import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n.js'; // Import before rendering anything
import App from './App.jsx';
import './index.css'; // ✅ Tailwind CSS
// main.tsx or main.jsx or index.css
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/globals.css'
// import Chatbot from './components/Chatbot';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
          {/* <Chatbot /> */}

  </React.StrictMode>,
);
