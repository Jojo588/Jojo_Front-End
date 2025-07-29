import React from 'react';
import img from '../images/Picsart_24-01-28_17-43-05-434x.jpg';

const AboutMe = () => {
  return (
    <section className="min-h-fit max-sm:mb-5 mt-15 mb-32 w-full items-center text-white bg-[#1a1a2e] px-6 py-16 md:px-24 max-md:py-10  max-lg:mb-20">
      <div className="max-w-6xl mx-auto6">
        <h1 className="text-center pb-10 text-4xl capitalize font-bold text-[#FCA311]">
          About Me
        </h1>
        <div className="flex gap-4 flex-col md:flex-row items-center md:items-start max-md:gap-8">
          <div className="md:w-1/3 flex justify-center ">
            <img
              src={img}
              alt="Author"
              className="w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover border-4 border-[#FCA311] shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-2/3 text-gray-300 text-xl leading-relaxed space-y-6 text-left md:text-justify max-sm:text-lg max-sm:tracking-tight">
            <p>
              I’m a <span className="text-white font-semibold capitalize">front-end developer</span> with a strong interest in creating immersive online experiences. I have more than two years of experience turning innovative designs into responsive, high-performing interfaces, and I hold a Bachelor of Science in Computer Science.
            </p>
            <p>
              I work with HTML, CSS, JavaScript, React, and TailwindCSS, concentrating on clean code, accessibility, and amazing user experience. I love translating complicated UI concepts into fluid, interactive apps.
            </p>
            <p>
              Outside of coding, I value collaboration, adaptability, and continuous learning. I’m actively looking to join teams where I can contribute to real-world products, grow my skills, and make meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
