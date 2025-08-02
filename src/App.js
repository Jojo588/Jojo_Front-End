import React, { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

   useEffect(() => {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);


  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const yOffset = -80;
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleScroll = {
    home: () => scrollToSection(homeRef),
    about: () => scrollToSection(aboutRef),
    skills: () => scrollToSection(skillsRef),
    projects: () => scrollToSection(projectsRef),
    experience: () => scrollToSection(experienceRef),
    contact: () => scrollToSection(contactRef),
  };

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    experience: experienceRef,
    contact: contactRef,
  };

useEffect(() => {
  // Force scroll to top on refresh or hard reload
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  // Also scroll to top on initial load
  window.scrollTo(0, 0);

  return () => {
    window.onbeforeunload = null;
  };
}, []);

  return (
    <div className="bg-gray-100 dark:bg-[#1A1A2E] text-[#EAEAEA] relative">
      <Header handleScroll={handleScroll} sectionRefs={sectionRefs} theme={theme} setTheme={setTheme}/>
      <div className="h-20" />
      <div ref={homeRef}><Home theme={theme} setTheme={setTheme}/></div>
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
};

export default App;
