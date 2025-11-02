<script setup lang="ts"> 
  import profilePic from '../assets/profile.jpg'
</script>

<template>
  <!-- Main Homepage Content-->
  <div class=" z-10 bg-gray-900 text-white font-mono w-full min-w-[500px] border-gray-900">
    <!-- Space div-->
    <div class="h-12 md-h-24"> </div>
    <!-- Background Stars-->
    <!-- Grid div-->
    <div class="relative flex flex-col lg:grid lg:grid-cols-9 lg:grid-rows-2 mx-6 md:mx-12 lg:mx-20 gap-2 sm:gap-6 md:gap-10 gap-y-6 md:gap-y-20 h-full">
      <!--Row 1-->
      <div class="rounded-3xl lg:col-span-5 lg:col-start-1 bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 font-sans grid grid-rows-6">
        <h1 class="m-2 font-bold text-3xl text-center text-blue-300">Welcome to my Site</h1>
        <div class="row-span-5 grid lg:grid-cols-5 grid-rows-7 grid-cols-1 lg:grid-rows-1 justify-items-center m-2">
          <h2 class="mx-2 sm:mx-4 md:mx-6 text-md md:text-lg text-left lg:col-span-3 row-span-2 text-blue-200 font-bold">Hey I'm Chris! Newly graduated and ready to place my foot in the door of the IT world! On this site you can find some information about myself, and some of the projects I've worked on during my time in school! I'm currently in a job search for an IT or software full-time position.</h2>
          <img class="rounded-xl h-fit lg:col-span-2 row-span-5 mx-2 sm:mx-4 lg:p-4 lg:row-span-1" :src="profilePic" alt="Headshot photo"></img>
        </div>
        
      </div>
      
      <div class="rounded-3xl lg:row-start-1 lg:col-span-4 lg:col-start-6 bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 font-sans grid grid-rows-6">
        <h1 class="m-2 font-bold text-3xl text-center text-blue-300 row-span-1">Elevator Pitch</h1>
        <div class="row-start-2 row-span-5 justify-items-center">
          <h2 class="ml-6 mr-6 text-lg text-left  text-blue-200 font-bold row-span-4 mb-4">With a fervor for learning and technology, I am eager to enter the workforce and make a change! Like all my fellow graduates, I have spent the last 5 years learning, practicing, and exploring the world that is computer science. Graduating highschool at the peak of  the pandemic, I have grown from my virtual intro classes freshman year, to having a base level of knowledge I can hold with pride! I have worked in teams of varying sizes to complete projects to specification and on time.</h2>
        </div>
        
      </div>
      <!--Row 2-->
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 h-64 md:col-start-1 md:col-span-3 grid grid-cols-3 gap-4">
        <a
        href="https://www.credly.com/badges/ecda9def-32d3-4f52-a928-d7adf5d75498/public_url" target="_blank" rel="noopener noreferrer" class="flex items-center">
          <img src="../assets/comptia-a-ce-certification.1.png"  alt="CompTIA A+ Certification Badge" class="w-full"/>
        </a>
        <h2 class="col-span-2 col-start-2 text-blue-200 font-bold text-lg">I earned my CompTIA A+ Certification in July of 2025! You can click the logo to the left to view my certification!</h2>
      </div>
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 font-sans md:col-start-4 md:col-span-6 h-64">
        <h1 class="col-span-2 col-start-2 text-blue-200 font-bold text-lg">At this point in my occupational journey, I am actively working on building up my credentials and skills to raise my job market appeal. Currently this is manifesting as my studies towards the CCNA, which is the certification I plan on completing next, to further myself not only in the IT sector, but also to start specializing in the networking field.</h1>
      </div>

      <div class="h-16"></div>
    </div>
  </div>
</template>