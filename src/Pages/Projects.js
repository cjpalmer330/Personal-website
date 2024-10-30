import React from 'react'
import SocialBar from '../Social-bar';
import {Link} from 'react-router-dom'
import ContactBar from '../Contact-bar';

//window.addEventListener('mousemove', e)
export default function Projects() {
  return (
    <div className="Project h-screen">
      <SocialBar />
      <body className="overflow-hidden h-screen bg-gradient-to-b from-red-400 to-fuchsia-900 text-white font-mono">
        <div className="p-12 grid grid-rows-4 grid-cols-2 gap-16 text-center text-2xl ">
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border shadow-2xl shadow-slate-200/40 rounded-3xl hover:shadow-slate-400/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            to="/Projects/PersonalWebsite"
            >
            <h3 className="text-3xl font-bold text-fuchsia-200 ">
              Portfolio
            </h3>
            <h1>
              This website was a spawn child of my time off during Thanksgiving. I started with only having ever done very minimal work with JS and HTML native. I decided creating a project of this type would help me learn the React-Tailwind tech stack!
            </h1>
          </Link>
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border shadow-2xl hover:scale-105 shadow-slate-200/40 rounded-3xl transition-all duration-300"
            to="/Projects"
          >
          <h3 className="text-3xl font-bold text-fuchsia-200 ">
            Finance App
          </h3>
          <h1>
            In an effort to learn Vue and get a bit more CSS/HTML practice under my belt I underwent another project with this finance app. It's goal was  to track your bank balance and cashflow throughout the month you help the user budget.
          </h1>
          </Link>
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border shadow-2xl shadow-slate-200/40 rounded-3xl hover:shadow-slate-400/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            to="/Projects/FlightPlanner"
          >
            <h3 className="text-3xl font-bold text-fuchsia-200 ">
              Airline Routes
            </h3>
            <h1>
              In my first semester at UTD I took the requisite Data Structures and Algorithms course, which turned out being my favorite course of the year.Not only because of my amazing professor, but also because I was able to apply our in course topics to write an Airline flight planner!
            </h1>
          </Link>
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border shadow-2xl shadow-slate-200/40 rounded-3xl hover:shadow-slate-400/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            to="/Projects/GoodreadsClone"
          >
            <h3 className="text-3xl font-bold text-fuchsia-200">
              Goodreads Clone
            </h3>
            <h1>
              Started over a year ago and left un touched for a while before I picked it back up, my goodreads clone was a tool that I wanted. Much like most of my project ideas, they spawn out of necessity. I wanted a form of goodreads that showed me more statistics and information about the books I read. Simply as a curiosity exercise.
            </h1>
          </Link>
        </div>
      </body>
      <ContactBar />
    </div>
  );
}

