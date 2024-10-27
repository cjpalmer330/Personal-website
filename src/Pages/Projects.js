import React from 'react'
import SocialBar from '../Social-bar';
import {Link} from 'react-router-dom'

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
              THIS PORTFOLIO WEBSITE
            </h3>
            <h1>
              This website was a spawn child of my time off during Thanksgiving. I started with only having ever done very minimal work with JS and HTML native. I decided creating a project of this type would help me learn the React-Tailwind tech stack!
            </h1>
          </Link>
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border shadow-2xl shadow-slate-200/40 rounded-3xl"
          >
          <h3 className="text-3xl font-bold text-fuchsia-200 ">
            CUBE TIMER
          </h3>
          <h1>
            My first introduction to JavaScript and HTML was this personal Rubik's Cube Timer App. I decided on such a product as I had switched from an Android to an IPhone, which didn't have the app I was using at the time to time my Rubik's cube solves. So I decided to make my own!
          </h1>
          </Link>
          <Link
            className="pt-2 pb-2 pl-4 pr-4 border shadow-2xl shadow-slate-200/40 rounded-3xl hover:shadow-slate-400/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            to="/Projects/FlightPlanner"
          >
            <h3 className="text-3xl font-bold text-fuchsia-200 ">
              AIRLINE ROUTES
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
              Made a tool for myself
            </h1>
          </Link>
        </div>
      </body>
    </div>
  );
}

