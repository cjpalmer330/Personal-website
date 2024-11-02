import React from 'react'
import SocialBar from '../Social-bar';
import {Link} from 'react-router-dom'
import ContactBar from '../Contact-bar';

//window.addEventListener('mousemove', e)
export default function Projects() {
  return (
    <div className="Project h-screen">
      <SocialBar />
      
      <body className="overflow-hidden h-screen bg-slate-900 text-white font-mono">
        <div
        class="z-0">
          <div aria-hidden="true" className="transition-transform duration-1000 absolute    inset-y-24 inset-x-56 w-32 rounded-full rotate-45 bg-gradient-to-b from-pink-600    to-blue-600 blur-3xl">
          </div>
          <div aria-hidden="true" className="absolute inset-y-96 inset-x-[550px] w-32 h-  [500px]   rotate-45 rounded-full bg-gradient-to-b from-pink-600 to-blue-600   blur-3xl z-0">
          </div>
        </div>
        <div className="p-12 grid grid-rows-4 grid-cols-2 gap-16 text-center text-2xl opacity-90">
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border shadow-2xl hover:scale-105 shadow-slate-200/40 rounded-3xl transition-all duration-300 bg-slate-700 border-blue-400"
            to="/Projects/PersonalWebsite"
            >
            <h3 className="text-3xl font-bold font-sans text-blue-300 ">
              Portfolio
            </h3>
            <h1
            class="font-sans text-slate-300">
              This website was a spawn child of my time off during Thanksgiving. I started with only having ever done very minimal work with JS and HTML native. I decided creating a project of this type would help me learn the React-Tailwind tech stack!
            </h1>
          </Link>
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border shadow-2xl hover:scale-105 border-blue-400 shadow-slate-200/40 rounded-3xl transition-all duration-300 bg-slate-700"
            to="/Projects"
          >
            <h3 className="text-3xl font-bold font-sans text-blue-300 ">
              Finance App
            </h3>
            <h1 class="font-sans text-slate-200">
              In an effort to learn Vue and get a bit more CSS/HTML practice under my belt I underwent another project with this finance app. It's goal was  to track your bank balance and cashflow throughout the month you help the user budget.
            </h1>
          </Link>
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border border-blue-400 shadow-2xl hover:scale-105 shadow-slate-200/40 rounded-3xl transition-all duration-300 bg-slate-700"
            to="/Projects/FlightPlanner"
          >
            <h3 className="text-3xl font-bold font-sans text-blue-300 ">
              Airline Route Finder
            </h3>
            <h1
            class="font-sans text-slate-200">
              In my first semester at UTD I took the requisite Data Structures and Algorithms course, which turned out being my favorite course of the year.Not only because of my amazing professor, but also because I was able to apply our in course topics to write an Airline flight planner!
            </h1>
          </Link>
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border border-blue-400 shadow-2xl hover:scale-105 shadow-blue-200/40 rounded-3xl transition-all duration-300 bg-slate-700"
            to="/Projects/GoodreadsClone"
          >
            <h3 className="text-3xl font-bold font-sans text-blue-300">
              Goodreads Clone
            </h3>
            <h1
            class="text-slate-200 font-sans">
              Started over a year ago and left un touched for a while before I picked it back up, my goodreads clone was a tool that I wanted. Much like most of my project ideas, they spawn out of necessity. I wanted a form of goodreads that showed me more statistics and information about the books I read. Simply as a curiosity exercise.
            </h1>
          </Link>
        </div>
      </body>
      <ContactBar />
    </div>
  );
}

