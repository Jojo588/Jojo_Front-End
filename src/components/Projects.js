import { useState } from "react"
import ReactWithTailwind from "./ReactWithTailwind"
import ReactWithCss3 from "./ReactWithCss3"
import JsWithCss3 from "./JsWithCss3"
import ReactwithtailwindList from "./ReactwithtailwindList"
import Reactwithcsslist from "./Reactwithcsslist"
import jswithcsslist from "./jswithcsslist"


const Projects = () => {
  const [changeProject, setChangeProject] = useState(1)

  return (
    <div className="h-fit ml-14 mr-14 bg-[#1A1A2E] mb-20 max-md:mt-10 max-sm:mx-2">
      <h1 className="text-center text-4xl font-bold text-[#FCA311] mb-8">Projects</h1>

      <ul className="flex justify-between items-center gap-10 text-lg capitalize text-[#C5C5C5]">
        <li
          className={`w-1/3 text-center cursor-pointer py-2 relative transition duration-300 hover:text-[#FCA311] 
            after:content-[''] after:block after:mx-auto after:mt-1 after:h-[2px] after:w-1/4 after:bg-[#FCA311] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center ${
              changeProject === 1 ? "text-[#FCA311] after:scale-x-100 font-semibold" : ""
            }`}
          onClick={() => setChangeProject(1)}
        >
          {`react with tailwind (${ReactwithtailwindList.length})`}
        </li>

        <li
          className={`w-1/3 text-center cursor-pointer py-2 relative transition duration-300 hover:text-[#FCA311] 
            after:content-[''] after:block after:mx-auto after:mt-1 after:h-[2px] after:w-1/4 after:bg-[#FCA311] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center ${
              changeProject === 2 ? "text-[#FCA311] after:scale-x-100 font-semibold" : ""
            }`}
          onClick={() => setChangeProject(2)}
        >
          {`react with css3 (${Reactwithcsslist.length})`}
        </li>

        <li
          className={`w-1/3 text-center cursor-pointer py-2 relative transition duration-300 hover:text-[#FCA311] 
            after:content-[''] after:block after:mx-auto after:mt-1 after:h-[2px] after:w-1/4 after:bg-[#FCA311] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center ${
              changeProject === 3 ? "text-[#FCA311] after:scale-x-100 font-semibold" : ""
            }`}
          onClick={() => setChangeProject(3)}
        >
          {`javascript with css3 (${jswithcsslist.length})`}
        </li>
      </ul>

      {/* Render all carousels but only show one at a time */}
      <div className="relative">
        <div
          className={`transition-opacity duration-300 ${changeProject === 1 ? "opacity-100 visible" : "opacity-0 invisible absolute inset-0"}`}
        >
          <ReactWithTailwind
          ReactwithtailwindList={ReactwithtailwindList}
          />
        </div>
        <div
          className={`transition-opacity duration-300 ${changeProject === 2 ? "opacity-100 visible" : "opacity-0 invisible absolute inset-0"}`}
        >
          <ReactWithCss3
          Reactwithcsslist={Reactwithcsslist}
          />
        </div>
        <div
          className={`transition-opacity duration-300 ${changeProject === 3 ? "opacity-100 visible" : "opacity-0 invisible absolute inset-0"}`}
        >
          <JsWithCss3
          jswithcsslist={jswithcsslist}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
