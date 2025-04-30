import React from 'react'
import githubLogo from '../pictures/github-mark-white.svg';
import linkedInLogo from '../pictures/linkedIn.svg';
import codeWarsLogo from '../pictures/codewarsLogo.png';
import burgerMenu from '../pictures/burger-menu.svg';
import { Link } from "react-router-dom";

export default function SocialBar(){
  return(
    <div>
      <header className=" h-56 w-full text-xl bg-gradient-to-b to-gray-900 to from-blue-800  overflow-hidden grid grid-rows-2 pr-4">
        <div className="z-40">
          <div className="w-full">
            <h3 className='absolute text-center font-mono font-bold p-4 whitespace-nowrap text-blue-300 text-5xl align-middle'>Chris Palmer</h3>
          </div>
          {/* Github, linkedin, and codewars logos/links */}
          <div alt="social Links" className="md:float-right sm:w-full pt-2 inset-0">
            <div className=' float-right p-2 pb-4'>
              <a
                href="https://www.codewars.com/users/cjpalmer330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="codewars logo" className="flex-initial flex-2 w-20 shadow-lg !shadow-blue-800/70  !hover:shadow-blue-800 hover:shadow-xl hover:scale-110 transition-all duration-300 stroke-none rounded-2xl" src={codeWarsLogo}/>
              </a>
            </div>
            
            <div className='float-right p-2'>
              <a
              href="https://github.com/cjpalmer330"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img alt="Github Logo" className="flex-initial object-scale-down w-20 shadow-lg shadow-blue-800 rounded-full hover:shadow-blue-600/70 hover:shadow-xl hover:scale-110 transition-all duration-300" src={githubLogo}/>
              </a>
            </div>

            <div className=' float-right p-2'>
              <a
                href="https://www.linkedin.com/in/christopher-palmer-bb48a6253/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="LinkedIn Logo" className="flex-initial flex-2 w-20 shadow-lg shadow-blue-500/70 rounded-xl hover:shadow-blue-800 hover:shadow-xl hover:scale-110 transition-all duration-300" src={linkedInLogo}/>
              </a>
            </div>
          </div>
        </div>
        {/* Nav bar area and hamburger menu */}
        {/* trying to make a collapsable hamburger menu when the screen size is really small*/}
        <div className="flex md:hidden justify-center">
          <img src={burgerMenu} alt="collapsed social menu"/>
          <div className='md:hidden'>
          </div>
        </div>
        <nav className="hidden justify-center md:flex">
          <div className="grid grid-cols-5">
            <ul className='text-center w-full col-start-2 col-span-3 grid grid-cols-4 gap-6'>
              <Link
                className="w-48 h-16 border-2 border-blue-400 text-white text-2xl pt-5 font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300"
                to="/"
                >
                  Home
              </Link>
              <Link
                className="w-48 h-16 border-2 border-blue-400 text-white text-2xl pt-5 font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300"
                to="/AboutMe"
                >About Me
              </Link>
              <Link
                className="w-48 h-16 border-2 border-blue-400 text-white text-2xl pt-5 font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300"
                to="/Projects"
                >
                  Projects
              </Link>
              <Link
                className="w-48 h-16 border-2 border-blue-400 text-white text-2xl pt-5 font-Hanuman font-bold rounded-full bg-blue-600 hover:bg-blue-400 transition-all duration-300"
                to="/Projects/PersonalWebsite"
                >
                  This Website
              </Link>
            </ul>
            <button className="w-16 sm:hidden"
            >
              test</button>
          </div>
        </nav>
      </header>
    </div>
    
  );
};