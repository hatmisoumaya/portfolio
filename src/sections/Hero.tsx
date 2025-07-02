'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { TypingAnimation } from '../registry/magicui/typing-animation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-gradient-to-l bg-white bg-gradient-to-l from-gray-100 to-white dark:from-black dark:to-gray-700 pt-[13%] pb-[9%] px-6 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          {t('hero.role1')} <TypingAnimation>Sooumaya</TypingAnimation>,<br />
          {t('hero.role2')}
        </h1>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl">
          {t('hero.desc')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#portfolio"
            className="bg-gradient-to-r from-gray-900 to-primary hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            {t('hero.portfolio')}
          </a>
          <a
            href="#contact"
            className="border border-gray-800 dark:border-white text-gray-800 dark:text-white font-medium px-6 py-2 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {t('hero.hire')}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
