<script setup lang="ts"> 
  import profilePic from '../assets/profile.jpg'
</script>

<template>
  <!-- Main Homepage Content-->
  <div class=" z-10 bg-gray-900 text-white font-mono w-full min-h-screen">
    <!-- Grid div-->
    <div class="relative grid grid-cols-9 grid-rows-2 mx-40 gap-10 gap-y-20 h-full top-16">
      <!--Row 1-->
      <div class="rounded-3xl col-span-5 col-start-1 bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 font-sans h-full">
        <h1 class="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300">Welcome to my Site</h1>
        <div class="row-start-2 row-span-4 grid grid-cols-2 justify-items-center">
          <h2 class="ml-6 mr-6 font-Hanuman text-lg text-left  text-blue-200 font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae, blanditiis exercitationem explicabo expedita odio. Nisi odit cumque error ipsa commodi illum sint minima. Natus qui repellat commodi rem praesentium.</h2>
          <img class="rounded-2xl h-[250px] m-2" :src="profilePic" alt="Headshot photo"></img>
        </div>
        
      </div>
      
      <div class="rounded-3xl col-span-4 col-start-6 bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 font-Hanuman h-full">
        <h1 class="m-2 font-Hanuman font-bold text-3xl text-center text-blue-300">Elevator Pitch</h1>
        <div class="row-start-2 row-span-4 justify-items-center">
          <h2 class="ml-6 mr-6 font-Hanuman text-lg text-left  text-blue-200 font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus recusandae, blanditiis exercitationem explicabo expedita odio. Nisi odit cumque error ipsa commodi illum sint minima. Natus qui repellat commodi rem praesentium.</h2>
        </div>
        
      </div>
      <!--Row 2-->
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 h-full col-start-1 col-span-3">alskjdf
      </div>
      <div class="rounded-3xl bg-gray-800/70 border-2 border-blue-500 shadow-xl shadow-blue-600 p-4 font-sans h-fullcol-start-4 col-span-6">laksjdfl</div>
    </div>
  </div>
</template>