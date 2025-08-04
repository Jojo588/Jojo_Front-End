import React, { useState, useEffect } from 'react';
import me from '../images/Adobe Express - file1.png';
import profileStatements from './ProfileStatements';
import PortfolioThemeToggle from '../components/PortfolioThemeToggle';

const Home = ({ portfolioTheme, setPortfolioTheme }) => {
  const [currentProfileStatement, setCurrentProfileStatement] = useState(profileStatements[0].statement);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(true);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const random = profileStatements[Math.floor(Math.random() * profileStatements.length)].statement;
        setCurrentProfileStatement(random);
        setFade(true);
      }, 1000);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-fit mb-48 mx-14 bg-gray-100 dark:bg-[#1A1A2E] text-black dark:text-gray-100 max-sm:mx-6 max-sm:mb-48 max-lg:mx-10 max-lg:mb-40 transition-all duration-500">
      <div className="items-center capitalize">
        <div className="w-2/3 p-4 max-md:w-full">
          <h1 className="text-5xl font-bold leading-snug max-md:text-2xl">
            hello there,
            <span className="text-7xl text-[#FCA311] max-md:text-4xl"> i'm jojo</span>
          </h1>
          <h3 className="text-2xl mt-2 text-gray-600 dark:text-gray-400">frontend developer</h3>
        </div>
      </div>

      <div className="-mt-20 flex justify-center max-md:mt-0">
        <img
          src={me}
          alt="developer"
          className="w-1/2 object-cover rounded-xl shadow-lg max-md:h-80 max-sm:w-5/6"
        />
      </div>

      <div
        className={`absolute right-6 md:right-16 top-[35%] md:top-[40%] w-full md:w-1/3 text-right text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-medium transition-all duration-500 max-md:w-11/12 max-md:top-[118%] ${
          fade ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
        }`}
      >
        {currentProfileStatement}
      </div>

      <div className="flex justify-between items-center -mt-24 px-4">
        <h1 className="capitalize text-lg">
          <span className="text-3xl text-[#FCA311] font-semibold">2</span> years experience
        </h1>
      </div>

      <div className="max-md:hidden fixed bottom-8 left-4 z-50">
        <PortfolioThemeToggle portfolioTheme={portfolioTheme} setPortfolioTheme={setPortfolioTheme} />
      </div>
    </div>
  );
};

export default Home;
