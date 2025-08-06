'use client';

import { useTranslation } from 'react-i18next';
import { TypingAnimation } from '../registry/magicui/typing-animation';
import { Github, Linkedin, Mail } from 'lucide-react';
import { BorderBeam } from '../registry/magicui/border-beam.tsx';

const Hero = () => {
  const { t } = useTranslation();

  return (
<section className="bg-white dark:bg-gradient-to-l bg-white bg-gradient-to-l from-gray-100 to-white dark:from-black dark:to-gray-700 pt-[30%] md:pt-[16%] pb-[9%] px-6 md:px-16">
      <div className="max-w-4xl mx-auto  flex flex-col items-center text-center space-y-6">
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
        <BorderBeam > <a
            href="#contact"
            className="text-gray-800 dark:text-white font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {t('hero.hire')}
          </a></BorderBeam>
           <a href="https://github.com/hatmisoumaya" target="_blank" rel="noreferrer">
      <Github className="w-5 h-5 my-4 text-black dark:text-white" />
    </a>
    <a href="https://linkedin.com/in/soumaya-el-hatmi-837324246" target="_blank" rel="noreferrer">
      <Linkedin className="w-5 h-5 my-4 text-black dark:text-white" />
    </a>
    <a href="mailto:hatmi.soumayatech@gmail.com">
      <Mail className="w-5 h-5 my-4 text-black dark:text-white" />
    </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
