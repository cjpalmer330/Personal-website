<script setup lang="ts"> 
  import profilePic from '../assets/profile.jpg'
</script>

<template>
  <!-- Main Homepage Content-->
  <div class=" z-10 bg-gray-900 text-white font-mono w-full min-h-screen">
    <!-- Space div-->
    <div class="h-24"> </div>
    <!-- Background Stars-->
    <!-- Grid div-->
    <div class="relative grid grid-cols-9 grid-rows-2 mx-40 gap-10 gap-y-20 h-full">
      <!--Row 1-->
      <div class="rounded-3xl col-span-5 col-start-1 bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 font-sans grid grid-cols-4 grid-rows-5">
        <h1 class="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300 row-start-1 row-span-1 col-span-4">Welcome to my Site</h1>
        <div class="col-span-4 row-span-4 grid grid-cols-5 justify-items-center">
          <h2 class="ml-6 mr-6 font-Hanuman text-lg text-left col-span-3 text-blue-200 font-bold">Hey I'm Chris! Newly graduated and ready to place my foot in the door of the IT world! On this site you can find some information about myself, and some of the projects I've worked on during my time in school! I'm currently in a job search for an IT or software full-time position.</h2>
          <img class="rounded-2xl max-h-[320px] col-span-2 m-2" :src="profilePic" alt="Headshot photo"></img>
        </div>
        
      </div>
      
      <div class="rounded-3xl col-span-4 col-start-6 bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 font-sans h-full grid grid-rows-5">
        <h1 class="m-2 font-bold text-3xl text-center text-blue-300 row-span-1">Elevator Pitch</h1>
        <div class="row-start-2 row-span-4 justify-items-center">
          <h2 class="ml-6 mr-6 text-lg text-left  text-blue-200 font-bold row-span-4">With a fervor for learning and technology, I am eager to enter the workforce and make a change! Like all my fellow graduates, I have spent the last 5 years learning, practicing, and exploring the world that is computer science. Graduating highschool at the peak of  the pandemic, I have grown from my virtual intro classes freshman year, to having a base level of knowledge I can hold with pride! I have worked in teams of varying sizes to complete projects to specification and on time.</h2>
        </div>
        
      </div>
      <!--Row 2-->
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 h-64 col-start-1 col-span-3">alskjdf
      </div>
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 font-sans col-start-4 col-span-6 h-64">laksjdfl</div>
    </div>
  </div>
</template>