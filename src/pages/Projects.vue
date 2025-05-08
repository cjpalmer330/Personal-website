<script setup lang="ts">
  import ProjectCard from '../components/Project-Card.vue';
</script>

<template>
 
  <div class="overflow-hidden min-h-screen bg-gray-900 text-white w-full">
    <div class="z-0">
      <!--Background decorative elements-->
      <!-- <div aria-hidden="true" className=" absolutinset-y-64 inset-x-64 w-32 h-[900px] rounded-fulbg-gradient-to-b from-pink-600 to-blue-600 m-1filter blur-2xl transform rotate-45">
      </div>
      <div aria-hidden="true" className="absolutinset-y-96 inset-x-[550px] w-32 filter blur-2xl [700px] transform rotate-45 rounded-fulbg-gradient-to-b from-pink-600 to-blue-600 z-m-16">
      </div>
      <svg viewBox="-30 -30 210 200" xmlns="http://www3.org/2000/svg" className="absolute w-[800px] [800px] z-0 inset-x-[800px] inset-y-[200pxblur-2xl fill-fuchsia-600 opacity-70">
        <path d="M40.6,-53.1C51.6,-39.2,58.8,-25.4,64.-8.9C70.7,7.6,75.4,26.9,66.8,35.4C58.1,43.8,31,41.3,18.3,45.9C0.5,50.5,-13.2,62.2,-21.59C-29.4,55.9,-32,37.9,-37.8,23.8C-43.6,9.7,-55,-0.6,-55,-13.7C-57.5,-26.9,-53.5,-42.9,-43.-57C-33,-71,-16.5,-83.1,-0.8,-82.1C14.8,-81.29.6,-67,40.6,-53.1Z" transform="translate(10100)" />
      </svg> -->
    </div>
    <!-- Space div-->
    <div class="h-24"> </div>
    <!--Project Cards-->
    <div class="relative mx-40 gap-y-20 h-full grid grid-rows-2 grid-cols-2 gap-16 text-center text-2xl min-h-[500px]">
      <ProjectCard Title="Portfolio" blurb="This website is one of my own creation! Starting out as a learning project during Thanksgiving break of 2024, I quickly realized the expansion of which I could utilize in my job search!" link="Projects/PersonalWebsite" filename="profile.jpg"/>
      
      <ProjectCard Title="Attendance Tracker" blurb="For my senior capstone project, I, and group of three others, worked with a professor tcreate an Attendance tracker that met to his specifications to streamline his class attendance tracking. Click here to find out more!" link="Projects/AttendanceApp" filename="prof-app-login.png"/>

      <ProjectCard Title="Learning / Minor Projects" blurb="During my time both at Dallas College and UTD, I have just begun to touch my toes in to thworld of software development. Some of that learning has come in the classroom, and some ithe form of projects, many too small to ever see the light of day. However, I think its great to look back on some of what I was able to accomplish!" link="Projects/MiscProjects" filename="Orbit-Preview.png"/>
    </div>
    <!--Space Div-->
    <div class="h-24"> </div>
    <div  className="top-16 relative grid grid-cols-5 gap-0">
      <div class="col-start-3 col-span-2 bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 font-sans h-full rounded-2xl">
        <h1 className="m-2 font-bold text-3xl text-center text-blue-300">Technologies Used</h1>
        <h2 className="ml-6 mr-6 text-xl text-left row-span-4 text-blue-200 font-bold">Libraries / Frameworks: React, Vue, TailwindCSS, chartJS, nuxt, vite, Blazor
        <br></br>Languages Used: Java, Python, JS, SQL,C# 
        <br/>Currently Learning: Rust, GO</h2>
      </div>
    </div>
  </div>
</template>