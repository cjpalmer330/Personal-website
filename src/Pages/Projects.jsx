import React from 'react'
import SocialBar from '../Components/Social-bar';
import ContactBar from '../Components/Contact-bar';
import ProjectCard from '../Components/Project-Card';
import profilePicture from '../pictures/profile.jpg';
import orbitPreview from '../pictures/Orbit-Preview.png';

//window.addEventListener('mousemove', e)
export default function Projects() {
  return (
    <div className="min-h-screen min-w-[900px] bg-gray-900">
      <SocialBar />
      
      <div className="overflow-hidden min-h-screen bg-gradient-to-b from-blue-800 to-blue-950 text-white font-mono min-w-[500px]">
        <div
        className="z-0">
          {/*Background decorative elements*/}
          {/* <div aria-hidden="true" className=" absolute inset-y-64 inset-x-64 w-32 h-[900px] rounded-full bg-gradient-to-b from-pink-600 to-blue-600 m-16 filter blur-2xl transform rotate-45">
          </div>
          <div aria-hidden="true" className="absolute inset-y-96 inset-x-[550px] w-32 filter blur-2xl h-[700px] transform rotate-45 rounded-full bg-gradient-to-b from-pink-600 to-blue-600 z-0 m-16">
          </div>
          <svg viewBox="-30 -30 210 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[800px] h-[800px] z-0 inset-x-[800px] inset-y-[200px] blur-2xl fill-fuchsia-600 opacity-70">
            <path d="M40.6,-53.1C51.6,-39.2,58.8,-25.4,64.8,-8.9C70.7,7.6,75.4,26.9,66.8,35.4C58.1,43.8,36.1,41.3,18.3,45.9C0.5,50.5,-13.2,62.2,-21.3,59C-29.4,55.9,-32,37.9,-37.8,23.8C-43.6,9.7,-52.5,-0.6,-55,-13.7C-57.5,-26.9,-53.5,-42.9,-43.2,-57C-33,-71,-16.5,-83.1,-0.8,-82.1C14.8,-81.1,29.6,-67,40.6,-53.1Z" transform="translate(100 100)" />
          </svg> */}
        </div>
        {/* Project Cards */}
        <div className="p-8 grid lg:grid-rows-2 lg:grid-cols-2 md:grid-rows-1 gap-16 text-center text-2xl opacity-90 min-h-[500px] w-full">
          <ProjectCard Title="Portfolio" blurb="This website is one of my own creation! Starting out as a learning project during Thanksgiving break of 2024, I quickly realized the expansion of which I could utilize in my job search!" link="/Projects/PersonalWebsite" image={profilePicture}/>
          
          <ProjectCard Title="Attendance Tracker" blurb="For my senior capstone project, I, and a group of three others, worked with a professor to create an Attendance tracker that met to his specifications to streamline his class attendance tracking. Click here to find out more!" link="/Projects/AttendanceApp"/>

          <ProjectCard Title="Learning / Minor Projects" blurb="During my time both at Dallas College and UTD, I have just begun to touch my toes in to the world of software development. Some of that learning has come in the classroom, and some in the form of projects, many too small to ever see the light of day. However, I think its great fun to look back on some of what I was able to accomplish!" link="/Projects/MiscProjects" image={orbitPreview}/>
        </div>
        <div  className="grid grid-cols-5 gap-0">
            <div className="col-start-3 col-span-2 rounded-3xl bg-gray-800/70 hover:scale-105 border-2 border-blue-500 hover:to-blue-500/50 hover:shadow-blue-600 shadow-xl shadow-blue-600 p-4 transition-all duration-300 grid grid-rows-5 min-w-[550px] max-h-[750px] min-h-[200px] font-sans">
              <h1 className="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300">Technologies Used</h1>
              <h2 className="ml-6 mr-6 font-Hanuman text-lg text-left row-span-4 text-blue-200 font-bold">Libraries / Frameworks: React, Vue, TailwindCSS, chartJS, nuxt, vite, Blazor
              <br></br>Languages Used: Java, Python, JS, C, SQL, C# 
              <br/>Currently Learning: Rust, GO</h2>
            </div>
        </div>
      </div>
      <ContactBar />
    </div>
  );
}

