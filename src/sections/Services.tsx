'use client';

import {
  CardHeader,
  CardTitle,
  CardDescription,
} from '../components/Card.jsx';
import { BorderBeam } from '../registry/magicui/border-beam.tsx';
import { Layout, Server, Smartphone, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Layout className="h-6 w-6 text-primary" />,
    title: 'Frontend Development',
    description:
      'Crafting intuitive and high-performance UIs that deliver seamless experiences across devices.',
  },
  {
    icon: <Server className="h-6 w-6 text-[#e48dff]" />,
    title: 'Backend Development',
    description:
      'Building robust, secure, and scalable server-side systems for smooth and powerful app operations.',
  },
  {
    icon: <Smartphone className="h-6 w-6 text-[#86cad6]" />,
    title: 'Mobile App Development',
    description:
      'Developing fast, elegant, and responsive mobile apps tailored for both iOS and Android platforms.',
  },
  {
    icon: <Cloud className="h-6 w-6 text-[#74aff7]" />,
    title: 'DevOps & Deployment',
    description:
      'Managing CI/CD pipelines, Docker, VPS hosting, and performance tuning to ensure uptime and stability.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white dark:bg-black bg-gradient-to-l from-gray-100 to-white dark:from-black dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-gray-300 to-primary bg-clip-text text-transparent mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 lg:gap-14">
          {services.map((service, index) => (
            <BorderBeam key={index}>
              <div className="relative pt-16 pb-6 px-4 sm:px-6">
                {/* Floating Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="p-4 bg-white dark:bg-neutral-800 rounded-full shadow-lg ring-1 ring-gray-200 dark:ring-neutral-700">
                    {service.icon}
                  </div>
                </div>

                {/* Card content */}
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
          Whether you're a startup, agency, or individual with a bold idea — I'm here to help you bring it to life with thoughtful design and scalable tech.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-white bg-primary hover:bg-primary-dark rounded-full shadow transition"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
