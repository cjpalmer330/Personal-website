import React from 'react'
import SocialBar from '../Components/Social-bar';
import ContactBar from '../Components/Contact-bar';
import ProjectCard from '../Components/Project-Card';

//window.addEventListener('mousemove', e)
export default function Projects() {
  return (
    <div className="min-h-screen min-w-[900px] bg-gray-900">
      <SocialBar />
      
      <div className="overflow-hidden min-h-screen bg-gray-900 text-white font-mono min-w-[500px]">
        <div
        className="z-0">
          <div aria-hidden="true" className=" absolute inset-y-64 inset-x-64 w-32 h-[900px] rounded-full bg-gradient-to-b from-pink-600 to-blue-600 m-16 filter blur-2xl transform rotate-45">
          </div>
          <div aria-hidden="true" className="absolute inset-y-96 inset-x-[550px] w-32 filter blur-2xl h-[700px] transform rotate-45 rounded-full bg-gradient-to-b from-pink-600 to-blue-600 z-0 m-16">
          </div>
        </div>
        <div className="p-8 grid grid-rows-2 grid-cols-2 gap-16 text-center text-2xl opacity-90 min-h-[500px] w-full">
          <ProjectCard Title="Portfolio" blurb="This website was a spawn child of my time off during Thanksgiving. I started with only having ever done very minimal work with JS and HTML native. I decided creating a project of this type would help me learn the React-Tailwind tech stack!" link="/Projects/PersonalWebsite"/>
          
          <ProjectCard Title="Finance App" blurb="In an effort to learn Vue and get a bit more CSS/HTML practice under my belt I underwent another project with this finance app. It's goal was  to track your bank balance and cashflow throughout the month you help the user budget." />

          <ProjectCard Title="Airline Route Finder" blurb="In my first semester at UTD I took the requisite Data Structures and Algorithms course, which turned out being my favorite course of the year. Not only because of my amazing professor, but also because I was able to apply our in course topics to write an Airline flight planner!" link="/Projects/FlightPlanner"/>

          
        </div>
        <div  className="grid grid-cols-5 gap-0">
          <div className="mb-8 mt-12 col-end-5 min-w-[400px] col-start-3 ">
            <div className="rounded-3xl border-blue-500 border bg-gray-700 shadow-xl shadow-blue-600 p-4 transition-all duration-300 grid grid-rows-5 min-w-[350px] max-h-[550px] min-h-[100px]">
              <h1 className="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300">Technologies Used</h1>
              <h2 className="ml-6 mr-6 font-Hanuman text-lg text-left row-span-4 text-blue-200 font-bold">Libraries / Frameworks: React, Vue, TailwindCSS, chartJS, nuxt, vite
              <br></br>Languages Used: Java, Python, JS, C, SQL 
              <br/>Currently Learning: Rust, GO</h2>
            </div>
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  );
}

