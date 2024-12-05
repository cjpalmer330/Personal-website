import React from 'react'
import githubLogo from '../pictures/github-mark-white.svg';
import linkedInLogo from '../pictures/linkedIn.svg';
import codeWarsLogo from '../pictures/codewarsLogo.png';
import { Link } from "react-router-dom";

export default function SocialBar(){
  return(
    <div className="h-56">
      <header className="w-full text-xl bg-gray-900 overflow-hidden grid grid-rows-2 pr-4">
      <div className="z-40">
        <div className="w-full">
          <h3 className='absolute text-center font-mono font-bold p-4 whitespace-nowrap text-blue-300 text-5xl align-middle'>Christopher Palmer</h3>
        </div>
        <div alt="social Links" className="w-full pt-2 inset-0">
        <div className=' float-right p-2 pb-4'>
            <a
              href="https://www.codewars.com/users/cjpalmer330"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="codewars logo" className="flex-initial flex-2 w-20 shadow-lg !shadow-blue-500/70  !hover:shadow-blue-600/70 hover:shadow-xl hover:scale-110 transition-all duration-300 stroke-none rounded-2xl" src={codeWarsLogo}/>
            </a>
          </div>
          
          <div className='float-right p-2'>
            <a
            href="https://github.com/cjpalmer330"
            target="_blank"
            rel="noopener noreferrer"
            >
              <img alt="Github Logo" className="flex-initial object-scale-down w-20 shadow-lg shadow-blue-500/70 rounded-full hover:shadow-blue-600/70 hover:shadow-xl hover:scale-110 transition-all duration-300" src={githubLogo}/>
            </a>
          </div>

          <div className=' float-right p-2'>
            <a
              href="https://www.linkedin.com/in/christopher-palmer-bb48a6253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="LinkedIn Logo" className="flex-initial flex-2 w-20 shadow-lg shadow-blue-500/70 rounded-xl hover:shadow-blue-600/70 hover:shadow-xl hover:scale-110 transition-all duration-300" src={linkedInLogo}/>
            </a>
          </div>
        </div>
      </div>
      
      <nav>
        <div>
          <ul className='flex text-center w-full'>
          <li className='inline-block mt-2 mb-2 mr-2 ml-2 lg:mr-4 lg:ml-4 w-full'>
              <Link
              className="pt-2 pb-2 pl-4 pr-4 border border-blue-400 rounded-xl bg-transparent bg-gray-600 hover:bg-gray-700 hover:transition-all duration-200 text-white"
              to="/"
              >
                Home
              </Link>
            </li>
            <li className='inline-block mt-2 mb-2 mr-4 ml-4 w-full'>
              <Link
              className="pt-2 pb-2 pl-4 pr-4 border border-blue-400 rounded-xl bg-transparent bg-gray-600 hover:bg-gray-700 hover:transition-all duration-200 font-sans text-white whitespace-nowrap"
              to="/AboutMe"
              >About Me
              </Link>
            </li>
            <li className='inline-block mt-2 mb-2 mr-4 ml-4 w-full'>
              <Link
              className="bg-transparent hover:bg-gray-700 hover:transition-all duration-200 pt-2 pb-2 pl-4 pr-4 border bg-gray-600 border-blue-400 rounded-xl text-white font-sans"
              to="/Projects"
              >
                Projects
              </Link>
            </li>
            <li className='inline-block mt-2 mb-2 mr-4 ml-4 w-full'>
              <Link
              className="pt-2 pb-2 pl-4 pr-4 border border-blue-400 rounded-xl bg-transparent bg-gray-600 hover:bg-gray-700 hover:transition-all duration-200 text-white whitespace-nowrap"
              to="/Projects/PersonalWebsite"
              >
                This Website
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    </div>
    
  );
};