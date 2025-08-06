'use client';

import { useTranslation } from 'react-i18next';
import {
  CardHeader,
  CardTitle,
  CardDescription,
} from '../components/Card.jsx';
import { BorderBeam } from '../registry/magicui/border-beam.tsx';
import { Layout, Server, Smartphone, Cloud } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: t('services.items.frontend.title'),
      description: t('services.items.frontend.desc'),
    },
    {
      icon: <Server className="h-6 w-6 text-[#e48dff]" />,
      title: t('services.items.backend.title'),
      description: t('services.items.backend.desc'),
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#86cad6]" />,
      title: t('services.items.mobile.title'),
      description: t('services.items.mobile.desc'),
    },
    {
      icon: <Cloud className="h-6 w-6 text-[#74aff7]" />,
      title: t('services.items.devops.title'),
      description: t('services.items.devops.desc'),
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white dark:bg-black bg-gradient-to-l from-gray-100 to-white dark:from-black dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-gray-300 to-primary bg-clip-text text-transparent mb-12">
          {t('services.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 lg:gap-14">
          {services.map((service, index) => (
            <BorderBeam key={index}>
              <div className="relative pt-16 pb-6 px-4 sm:px-6">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="p-4 bg-white dark:bg-neutral-800 rounded-full shadow-lg ring-1 ring-gray-200 dark:ring-neutral-700">
                    {service.icon}
                  </div>
                </div>

                <CardHeader className="z-10 relative flex flex-col items-center text-center space-y-2">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </div>
            </BorderBeam>
          ))}
        </div>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-16 px-4 sm:px-0">
          {t('services.message')}
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-white bg-primary hover:bg-primary-dark rounded-full shadow transition"
          >
            {t('services.workTogether')}
          </a>
        </div>
      </div>
    </section>
  );
}
