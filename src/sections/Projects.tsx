import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
{
    title: 'Arvisaok website',
    description: 'A modern WordPress website for an Arvisaok agency.',
    image: '/projects/arvisaok.png',
    tags: ['WordPress', 'Elemontor'],
    link: 'https://arvisaok.com',
  },
  {
    title: 'Pamia website',
    description: 'A modern online store for dentists using React, Stripe & PostgreSQL.',
    image: '/projects/pamia.png',
    tags: ['React', 'vite', 'Tailwind CSS'],
    link: 'https://pamia.es',
  }, {
    title: 'Dental E-commerce',
    description: 'A modern online store for dentists using React, Stripe & PostgreSQL.',
    image: '/projects/dental-ecom.jpg',
    tags: ['React', 'Stripe', 'PostgreSQL'],
    link: '#',
  },   {
    title: 'Dental E-commerce',
    description: 'A modern online store for dentists using React, Stripe & PostgreSQL.',
    image: '/projects/dental-ecom.jpg',
    tags: ['React', 'Stripe', 'PostgreSQL'],
    link: '#',
  }, 
 {
    title: 'Movio app',
    description: 'A modern movies app, built with Next.js and Tailwind CSS.',
    image: '/projects/movio.png',
    tags: ['Nextjs'],
    link: '#',
  },  {
    title: 'EasYmatch app',
    description: 'A modern AI job matching platform',
    image: '/projects/easymatch.png',
    tags: ['React', 'Stripe', 'PostgreSQL'],
    link: '#',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-l from-gray-100 to-white dark:bg-gradient-to-l dark:from-black dark:to-gray-800 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10 ">
      <h2 className="text-3xl pb-1 md:text-4xl text-center my-6  font-bold text-gray-900  bg-gradient-to-r from-gray-300 to-primary bg-clip-text text-transparent ">
          Projects
        </h2>
          <Swiper
  effect="coverflow"
  grabCursor
  centeredSlides={true}
  slidesPerView={3}
  loop={true}
  coverflowEffect={{
    rotate: 0,
    stretch: 20,
    depth: 200,
    modifier: 2.5,
    slideShadows: false,
  }}
  navigation
  modules={[EffectCoverflow, Navigation]}
  className="w-full max-w-6xl"
>

                  

          {projects.map((project, index) => (
      <SwiperSlide
  key={index}
  className="swiper-slide w-[260px] sm:w-[300px] md:w-[340px] transition-all pb-10 duration-300 ease-in-out"
>
  <div className="bg-white dark:bg-black rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 group">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-[250px]  p-2"
    />
    <div className="p-6 space-y-3">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 text-xs">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="inline-block mt-3 text-sm text-blue-400 hover:underline"
      >
        View Project →
      </a>
    </div>
  </div>
</SwiperSlide>

          ))} </Swiper>
       
      </div>
    </section>
  );
};

export default Projects;
