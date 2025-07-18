import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa'
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";

const Header = ({ handleScroll, sectionRefs }) => {
  const [changeMenuOption, setChangeMenuOption] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollY = window.scrollY;
      const offset = 100; // Adjust for fixed header

      const entries = Object.entries(sectionRefs);
      for (let [key, ref] of entries) {
        if (!ref.current) continue;
        const sectionTop = ref.current.offsetTop - offset;
        const sectionBottom = sectionTop + ref.current.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setChangeMenuOption(key);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, [sectionRefs]);

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="flex justify-between items-center p-3 px-5 text-lg capitalize bg-[#1A1A2E] text-[#EAEAEA] shadow-md">
        {/* Logo */}
        <div
          className="lowercase text-2xl font-bold cursor-pointer"
          onClick={() => {
            setChangeMenuOption('home');
            handleScroll.home();
          }}
        >
          <span className="capitalize bg-[#FCA311] px-2 py-1 rounded text-[#1A1A2E]">j</span>oJo
        </div>

        {/* Nav Links */}
        <div className='max-md:hidden'>
        <ul className="flex gap-6 underline-offset-4 font-medium">
          {['about', 'skills', 'projects', 'experience'].map((section) => (
            <li
              key={section}
              className={`cursor-pointer py-2 relative transition duration-300 hover:text-[#FCA311]
              after:content-[''] after:block after:mx-auto after:mt-1 after:h-[2px] after:w-1/4 after:bg-[#FCA311]
              after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center
              ${changeMenuOption === section ? 'text-[#FCA311] after:scale-x-100 font-semibold' : ''}`}
              onClick={() => {
                setChangeMenuOption(section);
                handleScroll[section]();
              }}
            >
              {section}
            </li>
          ))}
        </ul>
        </div>

        {/* Contact Button */}
        <div>
          <button
            className="bg-[#FCA311] text-[#1A1A2E] font-semibold px-4 py-1 rounded-md hover:bg-[#ffbb33] transition duration-300 max-md:hidden"
            onClick={() => {
              setChangeMenuOption('contact');
              handleScroll.contact();
            }}
          >
            contact
          </button>
        </div>



        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className=" duration-300 md:hidden hover:px-1 hover:border-2">
            <button variant="ghost" size="icon">
              <FaBars className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1a1a2e] p-6 space-y-6 text-white md:hidden">
<ul className="mt-3 block gap-6 font-medium capitalize">
  {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
    <li
      key={section}
      className="cursor-pointer py-2 relative transition duration-300"
      onClick={() => {
        setChangeMenuOption(section);
        handleScroll[section]();
        setIsOpen(false);
      }}
    >
      <span
        className={`
          relative inline-block transition-colors duration-300
          ${changeMenuOption === section ? 'text-[#FCA311] font-semibold' : ''}
          after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0
          after:h-[2px] after:bg-[#FCA311]
          after:transition-transform after:duration-300 after:origin-left
          after:scale-x-0 hover:after:scale-x-100
          ${changeMenuOption === section ? 'after:scale-x-100' : ''}
        `}
        style={{ paddingBottom: '2px' }}
      >
        {section}
      </span>
    </li>
  ))}
</ul>
          </SheetContent>
        </Sheet>





      </div>
    </div>
  );
};

export default Header;
