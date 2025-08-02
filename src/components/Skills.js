import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaReact,
  FaGitAlt,
  FaWordpress
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="h-fit mt-14 mb-40 mx-14 bg-gray-100 dark:bg-[#1A1A2E] py-10 max-md:py-2 max-sm:mb-28 transition-all duration-500">
      <h1 className="text-center pb-10 text-4xl capitalize font-bold text-[#FCA311]">Skills</h1>

      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        {/* Frontend & Backend */}
        <div className="bg-gray-100 dark:bg-[#16213E] border border-[#FCA311] p-6 text-center rounded-xl shadow-md hover:shadow-lg transition">
          <h1 className="text-2xl font-semibold mb-6 text-black dark:text-gray-100">Frontend & Backend</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex gap-3 items-center">
              <FaHtml5 className="text-orange-500 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">HTML</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaCss3Alt className="text-blue-500 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">CSS</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaJsSquare className="text-yellow-400 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">JavaScript</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaPython className="text-blue-300 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">Python</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaDatabase className="text-gray-400 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">SQL</p>
            </div>
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="bg-gray-100 dark:bg-[#16213E] border border-[#FCA311] p-6 text-center rounded-xl shadow-md hover:shadow-lg transition">
          <h1 className="text-2xl font-semibold mb-6 text-black dark:text-gray-100">Frameworks & Tools</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex gap-3 items-center">
              <FaReact className="text-blue-400 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">React</p>
            </div>
            <div className="flex gap-3 items-center">
              <SiTailwindcss className="text-cyan-400 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">Tailwind CSS</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaGitAlt className="text-red-500 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">Git</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaWordpress className="text-indigo-400 text-4xl" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">WordPress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
