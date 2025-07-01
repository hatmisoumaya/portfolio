import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiNextdotjs, SiDotnet } from 'react-icons/si';

const techStack = [
  { name: 'React', icon: <FaReact size={18} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={18} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
  { name: '.NET Core', icon: <SiDotnet size={18} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={18} /> },
  { name: 'Docker', icon: <FaDocker size={18} /> },
  { name: 'Git', icon: <FaGitAlt size={18} /> },
  { name: 'HTML5', icon: <FaHtml5 size={18} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={18} /> },
  { name: 'Node.js', icon: <FaNodeJs size={18} /> },
];

const HighlightScroller = () => {
  const loopedTech = [...techStack, ...techStack]; // repeat for seamless scroll

  return (
    <div className="relative">
      {/* Angled Green Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-primary to-gray-900 transform -skew-y-2 origin-top z-0" />

      {/* Scrolling Highlight Bar */}
      <div className="relative z-10 bg-white shadow-lg dark:bg-black py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap font-semibold text-sm md:text-base gap-8">
          {loopedTech.map((item, index) => (
            <div
              key={index}
              className="text-gray-600 dark:text-gray-400 flex items-center gap-2 px-4"
            >
              <span className="text-gray-400 dark:text-gray-400">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightScroller;
