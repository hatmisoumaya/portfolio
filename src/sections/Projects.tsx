'use client';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

const images = [
  '/projects/arvisaok.png',
  '/projects/pamia.png',
  '/projects/portfolio.png',
  '/projects/dental-ecom.jpg',
  '/projects/dental-ecom.jpg',
  '/projects/movio.png',
  '/projects/easymatch.png',
];

const tags = [
  ['WordPress', 'Elementor', 'Multi-language'],
  ['React', 'Vite', 'Tailwind CSS', 'Static Website'],
  ['Next.js', 'Tailwind CSS', 'i18next', 'Chatbot', 'Groq', 'FastAPI'],
  ['React', 'PostgreSQL', 'Stripe', 'Admin Panel'],
  ['React', 'PostgreSQL', 'Stripe', 'Admin Panel'],
  ['Next.js', 'Tailwind CSS', 'TMDB API'],
  ['React', 'AI', 'FastAPI', 'Groq', 'PostgreSQL'],
];

const links = [
  'https://arvisaok.com',
  'https://pamia.es',
  '#',
  '#',
    '#',
  '#',
  '#',
];

const Projects = () => {
  const { t } = useTranslation();
  type ProjectItem = {
  title: string;
  description: string;
};

const projectList = t('projects.list', { returnObjects: true }) as ProjectItem[];

                  


  return (
    <section id="projects" className="bg-gradient-to-l from-gray-100 to-white dark:bg-gradient-to-l dark:from-black dark:to-gray-800 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10 ">
      <h2 className="text-3xl pb-1 md:text-4xl text-center my-6  font-bold text-gray-900  bg-gradient-to-r from-gray-300 to-primary bg-clip-text text-transparent ">
      {t('projects.title')}
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
  }}   breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
  navigation
  modules={[EffectCoverflow, Navigation]}
  className="w-full"
>


          {projectList.map((project, index) => (
            <SwiperSlide
  key={index}
  className="swiper-slide w-[260px] sm:w-[300px] md:w-[340px] transition-all pb-10 duration-300 ease-in-out"
>
              <div className="bg-white dark:bg-black rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 group">
                <img
                  src={images[index]}
                  alt={project.title}
                  className="w-full h-[250px] p-2"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {tags[index].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={links[index]}
                    className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                  >
                    {t('projects.view')}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
