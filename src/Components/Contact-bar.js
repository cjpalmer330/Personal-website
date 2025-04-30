import React from 'react'
import { Link } from 'react-router-dom';

export default function ContactBar(){
  return(
    <div className="min-h-[10px] max-h-[200px] w-full grid grid-cols-3 bg-gradient-to-b to-blue-950 from-gray-900 justify-items-center z-20">
      <div className="text-white p-4 text-center grid grid-cols-4 h-24 col-start-2 col-span-1 gap-8 justify-items-center">
        <a className="w-32 border-2 border-blue-400 text-2xl pt-5 font-Hanuman font-bold rounded-full bg-blue-700 hover:bg-blue-600 transition-all duration-300"
        href="mailto:cjpalmer330@gmail.com"
        target="_blank"
        rel="noreferrer"
        >Email</a>
        <a 
        href="https://github.com/cjpalmer330"
        target="_blank"
        rel="noreferrer"
        className="w-32 border-2 border-blue-400 text-2xl pt-5 font-Hanuman font-bold rounded-full bg-blue-700 hover:bg-blue-600 transition-all duration-300"
        >
          Github
        </a>
        <a 
        href="https://www.linkedin.com/in/christopher-palmer-bb48a6253/"
        target="_blank"
        rel="noreferrer"
        className="w-32 border-2 border-blue-400 text-2xl pt-5 font-Hanuman font-bold rounded-full  bg-blue-700 hover:bg-blue-600 transition-all duration-300"
        >
          LinkedIn
        </a>
        <Link
          className="w-32 border-2 border-blue-400 text-2xl pt-5 font-Hanuman font-bold rounded-full  bg-blue-700 hover:bg-blue-600 transition-all duration-300"
          to="/resume-v4.pdf"
          >Resume
          </Link>
      </div>
    </div>
  );
};