'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-white bg-gradient-to-l from-gray-100 to-white dark:bg-gradient-to-l dark:from-black dark:to-gray-800 text-gray-800 dark:text-white"
    >
      <h2 className="text-3xl bg-gradient-to-r from-gray-300 to-primary bg-clip-text text-transparent md:text-4xl text-center font-bold mt-6 mb-6">
        {t('about.title')}
      </h2>

      {/* 👇 Social icons only visible on mobile (top of section) */}
      <div className="flex md:hidden justify-center gap-6 mb-6">
        <a href="https://github.com/hatmisoumaya" target="_blank" rel="noreferrer">
          <Github className="w-5 h-5 text-black dark:text-white" />
        </a>
        <a href="https://linkedin.com/in/soumaya-el-hatmi-837324246" target="_blank" rel="noreferrer">
          <Linkedin className="w-5 h-5 text-black dark:text-white" />
        </a>
        <a href="mailto:hatmi.soumayatech@gmail.com">
          <Mail className="w-5 h-5 text-black dark:text-white" />
        </a>
      </div>

      <div className="max-w-5xl  mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Main Text Card */}
        <div className="flex-1 relative rounded-2xl border border-white/10 bg-white/70 dark:bg-black backdrop-blur-md shadow-xl p-6 md:p-12">
          <p className="text-md leading-relaxed">
            <span className="font-semibold text-xl">{t('about.intro')} </span>
            <span className="font-semibold text-xl text-primary">{t('about.name')}</span>,<br />
            {t('about.description1')}
          </p>
          <p className="text-md leading-relaxed mt-4">{t('about.description2')}</p>
        </div>

        {/* Right: Vertical Social Bar on Desktop */}
        <div className="hidden md:flex flex-col gap-4 pt-7">
          <div className="flex flex-col bg-white/80 dark:bg-black backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg rounded-3xl p-4 space-y-4">
            <a href="https://github.com/hatmisoumaya" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 text-black dark:text-white" />
            </a>
            <a href="https://linkedin.com/in/soumaya-el-hatmi-837324246" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 text-black dark:text-white" />
            </a>
            <a href="mailto:hatmi.soumayatech@gmail.com">
              <Mail className="w-5 h-5 text-black dark:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
