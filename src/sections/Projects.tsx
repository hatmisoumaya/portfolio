import React from 'react';

const projects = [
  {
    title: 'Appline - App Landing Page',
    description: 'A Tailwind-based landing page template for software and mobile apps.',
    image: '/projects/appline.png', // Make sure this path is correct
    tags: ['Tailwind CSS', 'Responsive', 'Clean UI'],
    link: '#',
  },
  {
    title: 'Dental E-commerce',
    description: 'A modern online store for dentists using React, Stripe & PostgreSQL.',
    image: '/projects/dental-ecom.png',
    tags: ['React', 'Stripe', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Admin Dashboard',
    description: 'Fully functional admin dashboard built with Next.js and Tailwind.',
    image: '/projects/admin-dashboard.png',
    tags: ['Next.js', 'Tailwind CSS', 'Dashboard'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gradient-to-l dark:from-black dark:to-gray-800 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
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
                  className="inline-block mt-3 text-sm text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
