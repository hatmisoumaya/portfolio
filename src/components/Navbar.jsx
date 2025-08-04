import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { FaGlobe } from 'react-icons/fa6';

const Navbar = () => {
    const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };
const [lang, setLang] = useState(i18n.language);

useEffect(() => {
  const handleLangChange = (lng) => setLang(lng);
  i18n.on('languageChanged', handleLangChange);
  return () => i18n.off('languageChanged', handleLangChange);
}, []);
const LangSwitcher = () => (
  <button
    onClick={() => {
      const nextLang = i18n.language === 'en' ? 'fr' : 'en';
      
      i18n.changeLanguage(nextLang);
      setLang(nextLang); // <- this ensures re-render
    }}
    className="flex items-center gap-1 text-sm px-2 py-1.5 rounded-full hover:bg-white hover:text-[#1B3D2F] transition"
  >
    <FaGlobe size={14} /> {lang.toUpperCase()}
  </button>
);


  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] dark:text-gray-400 rounded-full
      ${isScrolled
        ? 'bg-white dark:bg-gradient-to-l dark:from-black dark:to-gray-800 text-gray-800 shadow-md'
        : 'bg-transparent dark:shadow-gray-900 shadow-lg'} z-50 px-4 py-2`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center pl-10 gap-2 text-xl bg-gradient-to-r from-gray-300  to-[#6366f1] bg-clip-text text-transparent font-poppins font-semibold text-gray-300">
          EL.HATMI
        </div>

        <ul className="hidden md:flex items-center space-x-6 dark:text-gray-400 text-sm font-bold">
          <li><a href="#home" className="hover:text-primary">{t('nav.home')}</a></li>
          <li><a href="#services" className="hover:text-primary">{t('nav.services')}</a></li>
          {/* <li><a href="#about" className="hover:text-primary">{t('nav.about')}</a></li> */}
          <li><a href="#projects" className="hover:text-primary">{t('nav.projects')}</a></li>
          <li>
            <a
              href="#contact"
              className="border border-gray-600 px-3 py-2 rounded-full hover:bg-gray-200 transition"
            >
              {t('nav.contact')}
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-3 pr-6">
          <LangSwitcher />
          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-full hover:bg-white hover:text-[#1B3D2F] transition"
          >
            {darkMode ? <HiOutlineSun size={16} /> : <HiOutlineMoon size={16} />}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#1B3D2F] text-white rounded-lg p-4 space-y-3">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block text-yellow-400">{t('nav.home')}</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="block">{t('nav.services')}</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block">{t('nav.about')}</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="block">{t('nav.projects')}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block bg-white text-[#1B3D2F] text-center px-4 py-2 rounded-full">
            {t('nav.contact')}
          </a>

          <div className="flex items-center justify-between pt-3">
            <LangSwitcher />
            <button
              onClick={toggleDarkMode}
              className="p-1.5 ml-3 border border-white rounded-full hover:bg-white hover:text-[#1B3D2F] transition"
            >
              {darkMode ? <HiOutlineSun size={16} /> : <HiOutlineMoon size={16} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
