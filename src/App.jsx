import './i18n'; // Import before rendering anything
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import HighlightScroller from './components/HighlightScroller';
import Services from './sections/Services';
import Projects from './sections/Projects';
import AboutMe from './sections/About';
import Footer from './components/Footer';
import Contact from './sections/Contact';

function App() {
  const [isReady, setIsReady] = useState(false); // avoid FOUC

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark' || !theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setIsReady(true); // render only when theme is applied
  }, []);

  if (!isReady) return null; // prevents flash on initial render

  return (
    <div className="bg-background dark:bg-dark-bg text-text dark:text-text-light min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HighlightScroller />
      </main>
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
