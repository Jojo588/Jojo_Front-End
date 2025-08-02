import React, { useEffect, useState } from 'react';
import { FaBars, FaInfoCircle, FaTools, FaTasks, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "../components/ui/Sheet";
import { Button } from "../components/ui/Button";
import ThemeToggle from "../components/ThemeToggle";

const Header = ({ handleScroll, sectionRefs, theme, setTheme }) => {
  const [changeMenuOption, setChangeMenuOption] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const sectionIcons = {
    about: <FaInfoCircle />,
    skills: <FaTools />,
    projects: <FaTasks />,
    experience: <FaBriefcase />,
    contact: <FaEnvelope />,
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollY = window.scrollY;
      const offset = 100;

      for (let [key, ref] of Object.entries(sectionRefs)) {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 765) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="flex justify-between items-center p-3 px-5 text-lg capitalize bg-gray-100 dark:bg-[#1A1A2E] text-black dark:text-gray-100 shadow-md transition-all duration-500">
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

        {/* Nav Links (Desktop) */}
        <div className="max-md:hidden">
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

        {/* Contact Button (Desktop) */}
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
          <SheetTrigger asChild className="duration-300 p-1 md:hidden">
            <Button variant="ghost" size="icon">
              <FaBars className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-gray-100 dark:bg-[#1A1A2E] p-6 space-y-6 text-black dark:text-white transition-all duration-500">
            <SheetTitle className="visually-hidden">Main Menu</SheetTitle>
            <SheetDescription className="visually-hidden">
              Select a page to visit or manage your account.
            </SheetDescription>

            <ul className="mt-3 block gap-6 font-medium capitalize overflow-y-auto max-h-[calc(100vh-100px)] hide-scrollbar">
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
                      relative inline-block transition-all duration-500
                      ${changeMenuOption === section ? 'text-[#FCA311] font-semibold' : ''}
                      after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0
                      after:h-[2px] after:bg-[#FCA311]
                      after:transition-transform after:duration-300 after:origin-left
                      after:scale-x-0 hover:after:scale-x-100
                      ${changeMenuOption === section ? 'after:scale-x-100' : ''}
                    `}
                    style={{ paddingBottom: '2px' }}
                  >
                    <div className="inline-flex items-center gap-2">
                      {sectionIcons[section]}
                      {section}
                    </div>
                  </span>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-4">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
