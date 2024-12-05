import React from 'react'
import { Link } from 'react-router-dom';

export default function ContactBar(){
  return(
    <div className="min-h-[10px] max-h-[200px] w-full">
      <div className="text-white p-8 grid grid-cols-4 h-24 bg-gray-900 gap-8 items-center">
        <a className="border border-blue-400 text-center rounded-2xl bg-gray-600"
        href="mailto:cjpalmer330@gmail.com"
        target="_blank"
        rel="noreferrer"
        >cjpalmer330 @gmail.com</a>
        <a 
        href="https://github.com/cjpalmer330"
        target="_blank"
        rel="noreferrer"
        className="border border-blue-400 text-center rounded-2xl bg-gray-600 align-middle"
        >
          Github
        </a>
        <a 
        href="https://www.linkedin.com/in/christopher-palmer-bb48a6253/"
        target="_blank"
        rel="noreferrer"
        className="border border-blue-400 text-center rounded-2xl bg-gray-600 pt-0.5"
        >
          LinkedIn
        </a>
        <Link
          className="border border-blue-400 text-center rounded-2xl bg-gray-600 pt-0.5"
          to="/resume-v4.pdf"
          >Resume
          </Link>
      </div>
    </div>
  );
};