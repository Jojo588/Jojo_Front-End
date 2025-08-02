import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'Ghana Ports and Harbours Authority',
      date: 'Oct 2021 – Dec 2021',
      description:
        'Worked on responsive user interfaces using React and TailwindCSS. Collaborated with UI/UX designers to bring mockups to life.',
    },
    {
      role: 'Compliance Officer (IT Support)',
      company: 'Ghana Revenue Authority',
      date: 'Nov 2023 – Sep 2024',
      description:
        'Enhanced front-end web features to improve user experience and accessibility across internal platforms. Provided technical support to staff, resolving day-to-day IT issues to ensure smooth operations within the department.',
    },
    {
      role: 'Freelance Developer',
      company: 'Self-employed',
      date: '2022 – 2025',
      description:
        'Built landing pages, personal portfolios, and small business sites. Managed hosting, deployment, and version control.',
    },
  ];

  return (
    <section className="min-h-fit mt-15 mb-20 px-6 py-12 md:px-20 bg-gray-100 dark:bg-[#1A1A2E] text-black dark:text-gray-100 transition-all duration-500 max-sm:mb-10">
      <h1 className="text-center text-4xl font-semibold capitalize mb-12 text-[#FCA311]">
        My Work Experience
      </h1>

      <div className="relative border-l-4 border-[#FCA311] pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-3 top-1.5 w-6 h-6 bg-[#FCA311] rounded-full border-4 border-white dark:border-[#1A1A2E] shadow-md"></div>
            <div className="ml-5">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400 italic">
                {exp.company} • {exp.date}
              </span>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
