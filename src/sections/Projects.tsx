import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";


const projects = [
  {
    title: 'ArvisaOK Website',
    description: 'Official website for an educational agency that helps Moroccan students study in Spain with visa, university, and relocation support.',
    image: '/projects/arvisaok.png',
    tags: ['WordPress', 'Elementor', 'Multi-language'],
    link: 'https://arvisaok.com',
  },
  {
    title: 'Pamia Website',
    description: 'Corporate site for Pamia, a Barcelona-based food manufacturing company that produces dairy and bakery goods under the Esmilki brand.',
    image: '/projects/pamia.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Static Website'],
    link: 'https://pamia.es',
  },
      {
  title: 'Portfolio',
  description: 'A personal developer portfolio featuring a floating AI chatbot, project carousel, multi-language support, and modern UI/UX design.',
  image: '/projects/portfolio.png',
  tags: ['Next.js', 'Tailwind CSS', 'i18next', 'Chatbot', 'Groq', 'FastAPI'],
  link: '#',
},
  {
    title: 'Dental E-commerce',
    description: 'An e-commerce store for dental equipment, featuring Stripe integration, product management, and a secure checkout system.',
    image: '/projects/dental-ecom.jpg',
    tags: ['React', 'PostgreSQL', 'Stripe', 'Admin Panel'],
    link: '#',
  },
  {
    title: 'Dental E-commerce',
    description: 'An e-commerce store for dental equipment, featuring Stripe integration, product management, and a secure checkout system.',
    image: '/projects/dental-ecom.jpg',
    tags: ['React', 'PostgreSQL', 'Stripe', 'Admin Panel'],
    link: '#',
  },
  {
    title: 'Movio App',
    description: 'A sleek movie discovery app built with Next.js and Tailwind, allowing users to browse, watch trailers, and explore movie details.',
    image: '/projects/movio.png',
    tags: ['Next.js', 'Tailwind CSS', 'TMDB API'],
    link: '#',
  },
  {
    title: 'Easymatch App',
    description: 'An AI-powered job-matching platform that analyzes resumes and job descriptions to connect candidates with ideal roles.',
    image: '/projects/easymatch.png',
    tags: ['React', 'AI', 'FastAPI', 'Groq', 'PostgreSQL'],
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
  }}   breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
  navigation
  modules={[EffectCoverflow, Navigation]}
  className="w-full max-w-6xl"
>

                  

          {projects.map((project, index) => (
      <SwiperSlide
  key={index}
  className="swiper-slide w-[80%] sm:w-[90%] md:w-[80%] transition-all pb-10 duration-300 ease-in-out"
>
  <div className="bg-white dark:bg-black  rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 group">
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
