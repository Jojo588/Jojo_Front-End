import React,{useState, useEffect} from 'react'
import me from '../images/Adobe Express - file1.png'
import profileStatements from './ProfileStatements';
import ThemeToggle from "../components/ThemeToggle";


const Home = ({theme, setTheme}) => {
  const [currentProfileStatement, setCurrentProfileStatement] = useState(profileStatements[0].statement);
    const [fade, setFade] = useState(true);
    
useEffect(() => {
  // Start by fading in
  setFade(true);

  const interval = setInterval(() => {
    // 1️⃣ Fade out over 1s
    setFade(false);

    // 2️⃣ After 1s fade-out, change text & start 3s fade-in
    setTimeout(() => {
      const random = profileStatements[Math.floor(Math.random() * profileStatements.length)].statement;
      setCurrentProfileStatement(random);
      setFade(true); // this triggers 3s fade-in
    }, 1000); // ⏱ 1 second for fade-out
  }, 7000); // Total loop = 1s fade-out + 3s visible fade-in

  return () => clearInterval(interval);
}, []);


  return (
    <div className='relative h-fit mb-48 mx-14 bg-[#1A1A2E] text-[#EAEAEA] max-sm:mx-6 max-sm:mb-48 max-lg:mx-10 max-lg:mb-40'>
      <div className='items-center capitalize'>
        <div className='w-2/3 p-4 max-md:w-full'>
          <h1 className='text-5xl font-bold leading-snug max-md:text-2xl'>
            hello there,
            <span className='text-7xl text-[#FCA311] max-md:text-4xl'> i'm jojo</span>
          </h1>
          <h3 className='text-2xl mt-2 text-[#C5C5C5]'>frontend developer</h3>
        </div>
      </div>

      <div className='-mt-20 flex justify-center max-md:mt-0'>
        <img
          src={me}
          alt='developer'
          className='w-1/2 object-cover rounded-xl shadow-lg max-md:h-80 max-sm:w-5/6'
        />
      </div>
      <div
        className={`absolute right-6 md:right-16 top-[35%] md:top-[40%] w-full md:w-1/3 text-right text-[#C5C5C5] text-lg sm:text-xl font-medium transition-all duration-500 max-md:w-11/12 max-md:top-[118%]   ${
          fade ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
        }`}
      >
        {currentProfileStatement}
      </div>

      <div className='flex justify-between items-center -mt-24 px-4'>
        <h1 className='capitalize text-lg'>
          <span className='text-3xl text-[#FCA311] font-semibold'>2</span> years experience
        </h1>
      </div>
      <div className='max-md:hidden fixed bottom-8 left-4 z-50 '>
      <ThemeToggle theme={theme} setTheme={setTheme}/>
      </div>
    </div>
  )
}

export default Home
